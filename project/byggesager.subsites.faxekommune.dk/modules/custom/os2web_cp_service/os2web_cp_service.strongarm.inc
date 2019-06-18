<?php
/**
 * @file
 * os2web_cp_service.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function os2web_cp_service_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_enable_revisions_page_node_os2web_cp_service_cp_case';
  $strongarm->value = 0;
  $export['diff_enable_revisions_page_node_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_enable_revisions_page_node_os2web_cp_service_cp_document';
  $strongarm->value = 0;
  $export['diff_enable_revisions_page_node_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_show_preview_changes_node_os2web_cp_service_cp_case';
  $strongarm->value = 0;
  $export['diff_show_preview_changes_node_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_show_preview_changes_node_os2web_cp_service_cp_document';
  $strongarm->value = 0;
  $export['diff_show_preview_changes_node_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_view_mode_preview_node_os2web_cp_service_cp_case';
  $strongarm->value = 'full';
  $export['diff_view_mode_preview_node_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_view_mode_preview_node_os2web_cp_service_cp_document';
  $strongarm->value = 'full';
  $export['diff_view_mode_preview_node_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__os2web_cp_service_cp_case';
  $strongarm->value = array(
    'view_modes' => array(),
    'extra_fields' => array(
      'form' => array(
        'title' => array(
          'weight' => '-5',
        ),
        'path' => array(
          'weight' => '30',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__os2web_cp_service_cp_document';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '30',
        ),
        'metatags' => array(
          'weight' => '40',
        ),
        'redirect' => array(
          'weight' => '30',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'language_content_type_os2web_cp_service_cp_case';
  $strongarm->value = '0';
  $export['language_content_type_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'language_content_type_os2web_cp_service_cp_document';
  $strongarm->value = '0';
  $export['language_content_type_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_os2web_cp_service_cp_case';
  $strongarm->value = array(
    0 => 'main-menu',
  );
  $export['menu_options_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_os2web_cp_service_cp_document';
  $strongarm->value = array(
    0 => 'main-menu',
  );
  $export['menu_options_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_os2web_cp_service_cp_case';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_os2web_cp_service_cp_document';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_os2web_cp_service_cp_case';
  $strongarm->value = array(
    0 => 'status',
  );
  $export['node_options_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_os2web_cp_service_cp_document';
  $strongarm->value = array(
    0 => 'status',
  );
  $export['node_options_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_os2web_cp_service_cp_case';
  $strongarm->value = '0';
  $export['node_preview_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_os2web_cp_service_cp_document';
  $strongarm->value = '0';
  $export['node_preview_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_os2web_cp_service_cp_case';
  $strongarm->value = 1;
  $export['node_submitted_os2web_cp_service_cp_case'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_os2web_cp_service_cp_document';
  $strongarm->value = 0;
  $export['node_submitted_os2web_cp_service_cp_document'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_cp_service_cp_case_pattern';
  $strongarm->value = 'sag/[node:field_os2web_cp_service_case_id]';
  $export['pathauto_node_os2web_cp_service_cp_case_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_cp_service_cp_document_pattern';
  $strongarm->value = 'dok/[node:field_os2web_cp_service_doc_id]';
  $export['pathauto_node_os2web_cp_service_cp_document_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_punctuation_slash';
  $strongarm->value = '0';
  $export['pathauto_punctuation_slash'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_taxonomy_term_os2web_cp_service_tax_approved_rules_pattern';
  $strongarm->value = '';
  $export['pathauto_taxonomy_term_os2web_cp_service_tax_approved_rules_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_taxonomy_term_os2web_cp_service_tax_rules_pattern';
  $strongarm->value = '';
  $export['pathauto_taxonomy_term_os2web_cp_service_tax_rules_pattern'] = $strongarm;

  return $export;
}
