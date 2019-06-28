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

  if (os2web_sbsys_esdh_cases_import_load_json_path_library()) {
    $dir = variable_get('os2web_sbsys_esdh_cases_import_path', OS2WEB_SBSYS_ESDH_CASES_IMPORT_DIR);
    foreach (file_scan_directory($dir, '/\.json$/i', array('recurse' => TRUE)) as $json_file) {
      $case_data = os2web_sbsys_esdh_cases_import_cm_get_case_data($json_file->uri);
      if (!is_array($case_data) || empty($case_data)) {
        $errors[] = t('JSON input is not array or empty.', array(
          '@file' => $json_file->uri,
        ));
        continue;
      }
    
      $case_id = jsonPath($case_data, 'Id');
      if (empty($case_id)) {
        $errors[] = t('Case id is empty.', array(
          '@file' => $json_file->uri,
        ));
        continue;
      }
      $case_id = (string) $case_id[0];
      $uris[] = array('id' => $case_id, 'uri' => $json_file->uri);
    }
  }
  else {
    $errors[] = t('jsonPath library not found.');
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
 * Gets document data by specific id.
 *
 * @param array $file_data
 *   File data array.
 * @param string $document_id
 *   Document id to fetch.
 *
 * @return array|null
 *   Array with document data, NULL is document not found.
 */
function os2web_sbsys_esdh_cases_import_cm_get_document($case_uri, $document_id) {
  foreach (os2web_sbsys_esdh_cases_import_cm_get_case_docs($case_uri) as $document) {
    if ($document['Id'] == $document_id) {
      return $document;
    }
  }
  return NULL;
}

/**
 * Get document file uri.
 *
 * @param array $file_data
 *   File data array.
 * @param string $src_path_uri
 *   Path to file sources.
 *
 * @return string
 *   Document file URI.
 */
function os2web_sbsys_esdh_cases_import_cm_get_document_file($document, $src_path_uri) {
  if (os2web_sbsys_esdh_cases_import_load_json_path_library()) {
    $file = jsonPath($document, 'Filer[0].0');
    if (!empty($file[0]['Filnavn'])) {
      $file_name = $file[0]['Filnavn'] . $file[0]['Filendelse'];
      $file_uri = $src_path_uri . DIRECTORY_SEPARATOR . $file_name;
      if (file_exists($file_uri) && file_valid_uri($file_uri)) {
        return $file_uri;
      }
      else {
        $error_msg = t('File "@file_uri" not found in file system.', array('@file_uri' => $file_uri));
      }
    }
    else {
      $error_msg = t('Error with parsing files in document @id.', array('@id' => $document['Id']));
    }
  }
  else {
    $error_msg = t('jsonPath library not found.');
  }

  if (!empty($error_msg)) {
    if (drupal_is_cli()) {
      watchdog('os2web_sbsys_esdh_cases_import', $error_msg, array(), WATCHDOG_WARNING);
    }
    else {
      drupal_set_message($error_msg, 'error');
    }
  }

  return NULL;
}

/**
 * Gets import documents data from file.
 *
 * @param string $case_uri
 *   File uri with case data.
 *
 * @return array
 *   Array with documents data and errors found during parsing.
 */
function os2web_sbsys_esdh_cases_import_cm_get_case_docs($case_uri) {
  $case_data = os2web_sbsys_esdh_cases_import_cm_get_case_data($case_uri);
  $documents_data = empty($case_data['Dokumenter']) ? array() :  $case_data['Dokumenter'];

  // Workaround for documents to get last change timestamp.
  foreach ($documents_data as &$document_data) {
    if (empty($case_data['LastChange'])) {
      continue;
    }
    $document_data['CaseLastChange'] = $case_data['LastChange'];
  }
  return $documents_data;
}

/**
 * Gets import case data from file.
 *
 * @param string $case_uri
 *   File uri with case data.
 *
 * @return array
 *   Array with case data and errors found during parsing.
 */
function os2web_sbsys_esdh_cases_import_cm_get_case_data($case_uri) {
  $case_data = &drupal_static(__FUNCTION__ . $case_uri);
  if (!empty($case_data)) {
    return $case_data;
  }

  if (os2web_sbsys_esdh_cases_import_load_json_path_library()) {
    $json = file_get_contents(drupal_realpath($case_uri));
    $case_data = json_decode($json, TRUE);

    if (json_last_error() != JSON_ERROR_NONE) {
      $error_msg = t('There was an error decoding the JSON input for file @file. Error message: @error_message.', array(
        '@file' => $case_uri,
        '@error_message' => json_last_error_msg(),
      ));

      if (drupal_is_cli()) {
        watchdog('os2web_sbsys_esdh_cases_import', $error_msg, array(), WATCHDOG_ERROR);
      }
      else {
        drupal_set_message($error_msg, 'error');
      }
    }
  }

  return $case_data;
}

/**
 * Looks up document with specific id in database.
 *
 * @param string $document_id
 *   Document id to look up.
 * @param string $document_changed_date
 *   Document changed date.
 *
 * @return array|null
 *   Array with found nids, NULL if no nodes found.
 */
function os2web_sbsys_esdh_cases_import_cm_lookup_doc($document_id, $document_changed_date = NULL) {
  $query = new EntityFieldQuery();
  $query
    ->entityCondition('entity_type', 'node')
    ->entityCondition('bundle', 'os2web_cp_service_cp_document')
    ->fieldCondition('field_os2web_cp_service_sysid', 'value', $document_id, '=');

  if ($document_changed_date) {
    $document_changed_date = format_date(strtotime($document_changed_date), 'custom', 'Y-m-d H:i:s', 'UTC');
    $query->fieldCondition('field_os2web_cp_service_edited', 'value', $document_changed_date);
  }
  $result = $query->execute();
  return (isset($result['node'])) ? array_keys($result['node']) : NULL;
}

/**
 * Implements 'lookup_case' method.
 *
 * @param string $case_id
 *   Case id.
 * @param string $case_changed_date
 *   Case changed date.
 *
 * @return array|null
 *   Array with found nids, NULL if no nodes found.
 */
function os2web_sbsys_esdh_cases_import_cm_lookup_case($case_id, $case_changed_date = NULL) {
  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', 'node')
    ->entityCondition('bundle', 'os2web_cp_service_cp_case')
    ->fieldCondition('field_os2web_cp_service_sysid', 'value', $case_id, '=');

  if ($case_changed_date) {
    $case_changed_date = format_date(strtotime($case_changed_date), 'custom', 'Y-m-d H:i:s', 'UTC');
    $query->fieldCondition('field_os2web_cp_service_edited', 'value', $case_changed_date);
  }
  $result = $query->execute();

  return (isset($result['node'])) ? array_keys($result['node']) : NULL;
}
