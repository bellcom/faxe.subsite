<?php

/**
 * @file
 * Import process functionality for SBSYS Cases import.
 */

/**
 * Fixed values for cases.
 *
 * @return array
 */
function os2web_sbsys_esdh_cases_import_fixed_case_field_values() {
  return array(
    'Sagstype - Sagstype' => 'BYGGESAG',
    'Delivered status' => 0,
  );
}

/**
 * Fixed values for documents.
 *
 * @return array
 */
function os2web_sbsys_esdh_cases_import_fixed_document_field_values() {
  return array(
    'Delivered status' => 0,
  );
}

/**
 * Mapping data for case.
 *
 * @return array
 */
function os2web_sbsys_esdh_cases_import_default_case() {
  return array_merge_recursive(os2web_cp_service_default_case(), array(
  ));
}

/**
 * Mapping data for document.
 *
 * @return array
 */
function os2web_sbsys_esdh_cases_import_default_document() {
  return array_merge_recursive(os2web_cp_service_default_document(), array(
    'fields' => array(
      'Indhold - FileID' => NULL,
    ),
  ));
}

/**
 * Loads the JSONPath library.
 *
 * @return bool
 *   Result of loading library.
 */
function os2web_sbsys_esdh_cases_import_load_json_path_library() {
  if (function_exists('jsonPath')) {
    return TRUE;
  }

  $libraries_path = module_exists('libraries') ? libraries_get_path('jsonpath') : FALSE;
  if ($libraries_path && is_dir($libraries_path)) {
    $path = $libraries_path;
  }
  elseif (is_dir(DRUPAL_ROOT . '/sites/all/libraries/jsonpath')) {
    $path = DRUPAL_ROOT . '/sites/all/libraries/jsonpath';
  }
  else {
    return FALSE;
  }

  $files = glob($path . '/jsonpath*.php');
  if (empty($files)) {
    return FALSE;
  }

  // Loading jsonPath library.
  require_once reset($files);

  return function_exists('jsonPath');
}

/**
 * Imports case.
 *
 * @param $case
 *   Array with case data.
 * @param bool $force
 *   Force flag to reimport document.
 */
function os2web_sbsys_esdh_cases_import_case($case, $force = FALSE) {
  $lock = __FUNCTION__ . $case['id'];
  if (!lock_acquire($lock)) {
    return;
  }

  $case_data = os2web_esdh_provider_invoke('cm', 'get_case_data', $case['uri']);
  
  if (empty($case_data)) {
    lock_release($lock);
    return;
  }

  $case_changed_date = jsonPath($case_data, variable_get('os2web_sbsys_esdh_cases_changed_value_path'));
  $case_changed_date = empty($case_changed_date[0]) ? NULL : $case_changed_date[0];
  $existing_case = os2web_esdh_provider_invoke('cm', 'lookup_case', $case['id'], $case_changed_date);

  if (!empty($existing_case) && !$force) {
    lock_release($lock);
    return;
  }

  $case_fields_mapping = variable_get('os2web_sbsys_esdh_cases_import_case_fields_mapping', array());
  $publication = array(
    'rules' => array(
      'BYGGESAG' => array(
        'name' => 'Byggesag',
        'tag' => 'Byggesag',
      ),
    ),
    'fields' => os2web_sbsys_esdh_cases_import_fixed_case_field_values(),
  );
  foreach ($case_fields_mapping as $field_name => $field_mapping) {
    $value = jsonPath($case_data, $field_mapping);
    if (isset($value[0]) && !empty(trim($value[0]))) {
      os2web_sbsys_esdh_cases_import_case_data_preprocess($field_name, $value[0]);
      $publication['fields'][$field_name] = $value[0];
    }
  }
  os2web_cp_service_create_case($publication);
  lock_release($lock);
}

/**
 * Imports document.
 *
 * @param array $document
 *   Array with document data.
 * @param string $src_path_uri
 *   URI to document sources.
 * @param bool $force
 *   Force flag to reimport document.
 */
function os2web_sbsys_esdh_cases_import_document($document, $src_path_uri, $force = FALSE) {
  $lock = __FUNCTION__ . $document['Id'];
  if (!lock_acquire($lock)) {
    return;
  }

  if (!os2web_sbsys_esdh_cases_import_load_json_path_library()) {
    return;
  }

  $document_changed_date = jsonPath($document, variable_get('os2web_sbsys_esdh_document_changed_value_path'));
  $document_changed_date = empty($document_changed_date[0]) ? NULL : $document_changed_date[0];
  $existing_documents = os2web_esdh_provider_invoke('cm', 'lookup_doc', $document['Id'], $document_changed_date);
  if (!empty($existing_documents) && !$force) {
    lock_release($lock);
    return;
  }

  $document_fields_mapping = variable_get('os2web_sbsys_esdh_cases_import_document_fields_mapping', array());

  $file_uri = os2web_esdh_provider_invoke('cm', 'get_document_file', $document, $src_path_uri);
  if (empty($file_uri)) {
    lock_release($lock);
    return;
  }

  $publication = array(
    'rules' => array(
      'BYGGESAG' => array(
        'name' => 'Byggesag',
        'tag' => 'Byggesag',
      ),
    ),
    'fields' => os2web_sbsys_esdh_cases_import_fixed_document_field_values(),
  );
  foreach ($document_fields_mapping as $field_name => $field_mapping) {
    $value = jsonPath($document, $field_mapping);
    if (isset($value[0]) && !empty(trim($value[0]))) {
      os2web_sbsys_esdh_cases_import_document_data_preprocess($field_name, $value[0]);
      $publication['fields'][$field_name] = $value[0];
    }
  }

  $node = os2web_cp_service_create_document($publication);
  $node_wrapper = entity_metadata_wrapper('node', $node);
  _os2web_cp_document_bind_file($node_wrapper, $file_uri);
  $node_wrapper->save();
  lock_release($lock);
}

/**
 * Preprocessing case import data.
 */
function os2web_sbsys_esdh_cases_import_case_data_preprocess($key, &$value) {
  switch ($key) {
    case 'Sagsdato':
    case 'Redigeringsdato':
      $value = format_date(strtotime($value), 'custom', 'Y-m-d H:i:s', 'UTC');
      break;
  }
}

/**
 * Preprocessing document import data.
 */
function os2web_sbsys_esdh_cases_import_document_data_preprocess($key, &$value) {
  switch ($key) {
    case 'Dokumentdato':
    case 'Redigeringsdato':
      $value = format_date(strtotime($value), 'custom', 'Y-m-d H:i:s', 'UTC');
      break;
  }
}
