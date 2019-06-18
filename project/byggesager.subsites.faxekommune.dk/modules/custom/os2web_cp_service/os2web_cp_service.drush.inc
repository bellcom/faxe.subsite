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

  $items['cp-cleanup-batch'] = array(
    'description' => 'Cleanup CP nodes which is not refered to Content page.',
    array(
      'cp_node_type' => 'Allowed values: documents, cases',
    ),
  );

  $items['cp-cleanup-batch-info'] = array(
    'description' => 'Cleanup CP nodes info which is not refered to Content page',
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

/**
 * Callback for cp-cleanup-batch drush command.
 */
function drush_os2web_cp_service_cp_cleanup_batch($cp_node_type = FALSE) {
  if (!empty($cp_node_type)) {
    os2web_cp_service_delete_nodes($cp_node_type);
  }
}

/**
 * Callback for cp-cleanup-info-batch drush command.
 */
function drush_os2web_cp_service_cp_cleanup_batch_info() {
  // Total.
  foreach (array(
     'os2web_cp_service_cp_case', 'os2web_cp_service_cp_document') as $type) {
    $query = new EntityFieldQuery();

    $query->entityCondition('entity_type', 'node')
      ->entityCondition('bundle', $type)
      ->propertyCondition('status', 1)
      ->count();

    drush_print(t('Total amount of @cp-type nodes: @count', array(
      '@count' => $query->execute(),
      '@cp-type' => $type,
    )));

  }

  // To delete information.
  $cp_types = array(
    'documents',
    'cases',
  );
  foreach ($cp_types as $type) {
    $results = _os2web_cp_service_delete_nodes_get($type);
    if (empty($results)) {
      continue;
    }
    $unique_items = array_unique($results);
    drush_print(t('Found @count CP @type nodes to delete.', array(
      '@count' => count($unique_items),
      '@type' => $type,
    )));
  }

  // To left information.
  $cp_types = array(
    'documents-by-field_os2web_base_doc_ref',
    'documents-by-field_os2web_base_doc_ref_single',
    'documents-by-field_os2web_cp_service_doc_ref',
    'documents-by-fc-field_os2web_base_doc_ref',
  );
  $items = array();
  foreach ($cp_types as $type) {
    $items += _os2web_cp_service_delete_nodes_get($type);
  }
  $unique_items = array_unique($items);
  drush_print(t('Found @count CP Documents to left. (@cp-types)', array(
    '@count' => count($unique_items),
    '@cp-types' => implode(', ', $cp_types),
  )));

  $cp_types = array(
    'cases-by-field_os2web_base_case_ref',
    'cases-by-fc-field_os2web_base_case_ref',
  );
  $items = array();
  foreach ($cp_types as $type) {
    $items += _os2web_cp_service_delete_nodes_get($type);
  }
  $unique_items = array_unique($items);
  drush_print(t('Found @count CP Cases to left. (@cp-types)', array(
    '@count' => count($unique_items),
    '@cp-types' => implode(', ', $cp_types),
  )));
}
