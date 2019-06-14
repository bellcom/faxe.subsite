<?php

/**
 * @file
 * This file implements drush functions for CP Service
 */

/**
 * Implements hook_drush_command().
 */
function os2web_cp_service_drush_command() {
  $items = array();
  $items['cp-update-ref'] = array(
    'description' => 'Update references in CP cases',
    'arguments' => array(),
    'aliases' => array('cp-up'),
  );
  $items['cp-cleanup'] = array(
    'description' => 'Delete all documents with a broken reference.',
    'arguments' => array(),
    'aliases' => array('cp-cl'),
  );
  return $items;
}

/**
 * Implements drush_COMMAND().
 */
function drush_os2web_cp_service_cp_update_ref() {

  // Update all doc and cases where there are no reference from case -> document.
  $nodes = db_query("SELECT *
                    FROM {node} n
                    WHERE n.type = 'os2web_cp_service_cp_document'
                    AND n.nid NOT IN (SELECT field_os2web_cp_service_doc_ref_target_id FROM field_data_field_os2web_cp_service_doc_ref)")->fetchAllAssoc('nid');

  $field_name = 'field_os2web_cp_service_case_id';
  $field_info = field_info_field($field_name);
  $field_id = $field_info['id'];
  field_attach_load('node', $nodes, FIELD_LOAD_CURRENT, array('field_id' => $field_id));

  foreach ($nodes as $node) {

    if (!empty($node->field_os2web_cp_service_case_id['und'][0]['value'])) {
      $nid = db_query(
        "SELECT entity_id FROM field_data_field_os2web_cp_service_case_id WHERE bundle = 'os2web_cp_service_cp_case' AND field_os2web_cp_service_case_id_value = :id",
        array(':id' => $node->field_os2web_cp_service_case_id['und'][0]['value'])
      )->fetchColumn();

      if (!$nid) {
        drush_log(t('Cannot find case with id: !id', array('!id' => $node->field_os2web_cp_service_case_id['und'][0]['value'])), 'warning');
        continue;
      }

      $ref_node = node_load($nid);
      $ref_node->field_os2web_cp_service_doc_ref[LANGUAGE_NONE][]['target_id'] = $node->nid;
      node_save($ref_node);

      // Update doc ref.
      if (isset($ref_node->field_os2web_cp_service_sysid[LANGUAGE_NONE][0]['value'])) {
        $node->field_os2web_cp_service_case_sid[LANGUAGE_NONE][0]['value'] = $ref_node->field_os2web_cp_service_sysid[LANGUAGE_NONE][0]['value'];
        node_save($node);
      }

      drush_log(t('Saved new reference to: !ref in !node', array('!ref' => $ref_node->nid, '!node' => $node->nid)), 'success');
    }
  }
}

/**
 * Implements drush_COMMAND().
 */
function drush_os2web_cp_service_cp_cleanup() {

  // Find all documents which has no references from a case.
  $nodes = db_query("SELECT *
                     FROM node n
                     WHERE n.type =  'os2web_cp_service_cp_document'
                     AND n.nid NOT IN (
                       SELECT field_os2web_cp_service_doc_ref_target_id
                       FROM field_data_field_os2web_cp_service_doc_ref
                     )");

  foreach ($nodes as $node) {
    node_delete($node->nid);
    drush_log(t('Deleted document: !node', array('!node' => $node->nid)), 'success');
  }
}
