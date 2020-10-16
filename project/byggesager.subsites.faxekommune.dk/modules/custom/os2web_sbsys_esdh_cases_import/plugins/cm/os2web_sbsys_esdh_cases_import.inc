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
 * Gets array with files uri from document.
 *
 * @param array $document
 *   File data array.
 * @param string $src_path_uri
 *   Path to file sources.
 *
 * @return array
 *   Array with document file URIs.
 */
function os2web_sbsys_esdh_cases_import_cm_get_document_files($document, $src_path_uri) {
  $document_files = array();
  $error_msgs = array();
  if (os2web_sbsys_esdh_cases_import_load_json_path_library()) {
    $file_jsonpath = variable_get('os2web_sbsys_esdh_cases_import_document_files_jsonpath', OS2WEB_SBSYS_ESDH_CASES_IMPORT_DOCUMENT_FILES_JSONPATH);
    $files = jsonPath($document, $file_jsonpath);
    if (!empty($files[0][0]['Filnavn'])) {
      $files_limit = OS2WEB_SBSYS_ESDH_CASES_IMPORT_DOCUMENT_FILES_LIMIT;
      if (!empty((integer) variable_get('os2web_sbsys_esdh_cases_import_document_files_limit'))
        && (integer) variable_get('os2web_sbsys_esdh_cases_import_document_files_limit') < $files_limit) {
        $files_limit = (integer) variable_get('os2web_sbsys_esdh_cases_import_document_files_limit');
      }
      $i = 0;
      do {
        $file_row = $files[0][$i];
        $allowed_file_types = explode(',', strtolower(variable_get('os2web_sbsys_esdh_cases_import_document_allowed_types', OS2WEB_SBSYS_ESDH_CASES_IMPORT_DOCUMENT_ALLOWED_TYPES)));
        $allowed_file_types = array_map('trim', $allowed_file_types);
        if (empty($file_row['Filnavn'])
          || empty($file_row['Filendelse'])
          || !in_array(strtolower(substr($file_row['Filendelse'], 1)), $allowed_file_types)
        ) {
          $i++;
          continue;
        }

        $file_name = $file_row['Filnavn'] . $file_row['Filendelse'];
        $file_uri = $src_path_uri . DIRECTORY_SEPARATOR . $file_name;
        if (file_exists($file_uri) && file_valid_uri($file_uri)) {
          $document_files[] = $file_uri;
        }
        else {
          // Make a try with adjusted filename.
          $file_uri_adjusted = $src_path_uri . DIRECTORY_SEPARATOR . str_replace(' ', '_', $file_name);
          if (file_exists($file_uri_adjusted) && file_valid_uri($file_uri_adjusted)) {
            $document_files[] = $file_uri_adjusted;
          }
          else {
            $error_msgs[] = t('File "@file_uri" not found in file system.', array('@file_uri' => $file_uri));
          }
        }
        $i++;
      } while (count($files[0]) > $i && count($document_files) < $files_limit);
    }
    else {
      $error_msgs[] = t('Error with parsing files in document @id.', array('@id' => $document['Id']));
    }
  }
  else {
    $error_msgs[] = t('jsonPath library not found.');
  }

  if (!empty($error_msgs)) {
    foreach ($error_msgs as $error_msg) {
      if (drupal_is_cli()) {
        watchdog('os2web_sbsys_esdh_cases_import', $error_msg, array(), WATCHDOG_WARNING);
      }
      else {
        drupal_set_message($error_msg, 'error');
      }
    }
  }

  if (empty($document_files)) {
    watchdog('os2web_sbsys_esdh_cases_import', t('Document @id doesn\'t have files that can be imported.', array('@id' => $document['Id'])), array(), WATCHDOG_NOTICE);
  }

  return $document_files;
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
  $cases_changed_value_path = variable_get('os2web_sbsys_esdh_cases_changed_value_path');
  if (!empty($cases_changed_value_path)) {
    foreach ($documents_data as &$document_data) {
      if (empty($case_data[$cases_changed_value_path])) {
        continue;
      }
      $document_data['Case' . $cases_changed_value_path] = $case_data[$cases_changed_value_path];
    }
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

  $result = $query->execute();

  return (isset($result['node'])) ? array_keys($result['node']) : NULL;
}
