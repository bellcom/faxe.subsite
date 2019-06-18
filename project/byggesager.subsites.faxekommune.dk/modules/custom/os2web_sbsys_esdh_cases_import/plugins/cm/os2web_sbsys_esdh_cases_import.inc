<?php

/**
 * @file
 * This file describes the MM plugin as implemented by SBsys
 */

/**
 * Plugin definition with callbacks
 */
$plugin = array(
  'description' => t('SBsys ESDH CP Backend'),
  'version' => 1,
  'test' => 'os2web_sbsys_stevns_esdh_cp_test',
);

$apis = os2web_esdh_provider_ctools_plugin_type();
if (isset($apis['cm']['required methods']) && is_array($apis['cm']['required methods'])) {
  foreach ($apis['cm']['required methods'] as $method) {
    $function = 'os2web_sbsys_esdh_cases_import_cm_' . $method;
    if (function_exists($function)) {
      $plugin[$method] = $function;
    }
  }
}
/**
 * For plugin testing purposes.
 */
function os2web_sbsys_esdh_cases_import_test($stuff) {
  return 'Test successful. Recieved: ' . $stuff;
}

/**
 * Returns a list of files for import.
 *
 * @return array
 *   List of URIs
 */
function os2web_sbsys_esdh_cases_import_cm_get_import_list() {
  $uris = array();
  $errors = array();

  if (!_os2web_sbsys_esdh_cases_import_load_json_path_library()) {
    $errors[] = t('jsonPath library not found.');
    return $uris;
  }
  
  $dir = variable_get('os2web_sbsys_esdh_cases_import_path', OS2WEB_SBSYS_ESDH_CASES_IMPORT_DIR);
  foreach (file_scan_directory($dir, '/\.json$/i', array('recurse' => TRUE)) as $json_file) {
    $case_data = os2web_sbsys_esdh_cases_import_cm_get_case_data($json_file->uri);
    if (!empty($case_data['errors'])) {
      $errors += $case_data['errors'];
    }
    $manifest = $case_data['data'];
    
    if (!is_array($manifest) || empty($manifest)) {
      $errors[] = t('JSON input is not array or empty.', array(
        '@file' => $json_file->uri,
      ));
      continue;
    }
  
    $case_id = jsonPath($manifest, 'Id');
    if (empty($case_id)) {
      $errors[] = t('Case id is empty.', array(
        '@file' => $json_file->uri,
      ));
      continue;
    }
    $case_id = (string) $case_id[0];
    $uris[] = array('id' => $case_id, 'uri' => $json_file->uri);
  
  }
  
  if (!empty($errors)) {
    if (drupal_is_cli()) {
      watchdog('os2web_sbsys_esdh_cases_import', implode("\n", $errors), array(), WATCHDOG_WARNING);
    }
    else {
      drupal_set_message(implode("\n", $errors), 'error');
    }
  }
  
  return $uris;
}

/**
 * Implements 'get_document' method.
 */
function os2web_sbsys_esdh_cases_import_cm_get_document() {

}

/**
 * Implements 'get_document_file' method.
 */
function os2web_sbsys_esdh_cases_import_cm_get_document_file() {

}

/**
 * Implements 'get_case_docs' method.
 */
function os2web_sbsys_esdh_cases_import_cm_get_case_docs() {

}

/**
 * Implements 'get_case_data' method.
 */
function os2web_sbsys_esdh_cases_import_cm_get_case_data($uri) {
  $errors = array();
  $manifest = NULL;
  if (_os2web_sbsys_esdh_cases_import_load_json_path_library()) {
    $json = file_get_contents(drupal_realpath($uri));
    $manifest = json_decode($json, TRUE);
  
    if (json_last_error() != JSON_ERROR_NONE) {
      $errors[] = t('There was an error decoding the JSON input for file @file. Error message: @error_message.', array(
        '@file' => $uri,
        '@error_message' => json_last_error_msg(),
      ));
    }
  }
  return array('data' => $manifest, 'errors' => $errors);
}

/**
 * Implements 'lookup_doc' method.
 */
function os2web_sbsys_esdh_cases_import_cm_lookup_doc() {

}

/**
 * Implements 'lookup_case' method.
 *
 * @param string $case_id
 *   Case id.
 *
 * @return array|null
 *   Loaded case nodes.
 */
function os2web_sbsys_esdh_cases_import_cm_lookup_case($case_id) {
  
  $query = new EntityFieldQuery();
  $result = $query
    ->entityCondition('entity_type', 'node')
    ->entityCondition('bundle', 'os2web_cp_service_cp_case')
    ->fieldCondition('field_os2web_cp_service_sysid', 'value', $case_id, '=')
    ->execute();
  
  return (isset($result['node'])) ? node_load_multiple(array_keys($result['node'])) : NULL;
}
