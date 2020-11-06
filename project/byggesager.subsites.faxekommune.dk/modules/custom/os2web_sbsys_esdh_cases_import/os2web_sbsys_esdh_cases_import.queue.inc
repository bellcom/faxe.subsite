<?php
/**
 * @file
 * os2web_sbsys_esdh_cases_import queue functionality.
 */

/**
 * Worker function for a single import.
 *
 * @param array $cases
 *   Cases array with import data.
 * @param bool $force
 *   Force flag to recreate all elements.
 */
function os2web_sbsys_esdh_cases_import_queue_refresh ($cases = array(), $force = FALSE) {
  if (empty($cases)) {
    $cases = os2web_esdh_provider_invoke('cm', 'get_import_list');
  }
  $updated_cases  = os2web_sbsys_esdh_cases_get_updated_cases_list();
  $queue = DrupalQueue::get(OS2WEB_SBSYS_ESDH_CASES_IMPORT_QUEUE_NAME);
  foreach ($cases as $case) {
    $queue->createItem(array(
      'callback' => 'os2web_sbsys_esdh_cases_import_case',
      'args' => array('case' => $case, 'updated_cases'=> $updated_cases, 'force' => $force,
      ),
    ));

    $documents = os2web_esdh_provider_invoke('cm', 'get_case_docs', $case['uri']);
    foreach ($documents as $document) {
      $queue->createItem(array(
        'callback' => 'os2web_sbsys_esdh_cases_import_document',
        'args' => array(
          'document' => $document,
          'src_path' => dirname($case['uri']),
          'updated_cases' => $updated_cases,
          'force' => $force,
        ),
      ));
    }
  }
}

/**
 * Worker function for a single import.
 *
 * @param array $args
 *   Data for the import.
 */
function os2web_sbsys_esdh_cases_import_cron_queue_worker ($args) {
  if (function_exists($args['callback'])) {
    call_user_func_array($args['callback'], $args['args']);
  }
}

function os2web_sbsys_esdh_cases_get_updated_cases_list() {
  $file_path  = variable_get('os2web_sbsys_esdh_cases_import_updated_case_list', FALSE);
  $updated_case_folders = array();
    if ($file_path && file_exists(drupal_realpath($file_path))) {
    $xml = simplexml_load_file(drupal_realpath($file_path));
    foreach($xml->Folder as $folder) {
      $folder = (array) $folder;
      $updated_case_folders[] = (string) array_shift($folder);
    }
  }
  return $updated_case_folders;
}
