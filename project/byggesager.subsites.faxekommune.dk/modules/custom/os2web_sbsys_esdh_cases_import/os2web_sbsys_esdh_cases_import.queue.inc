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

  $queue = DrupalQueue::get(OS2WEB_SBSYS_ESDH_CASES_IMPORT_QUEUE_NAME);
  foreach ($cases as $case) {
    $queue->createItem(array(
      'callback' => 'os2web_sbsys_esdh_cases_import_case',
      'args' => array('case' => $case, 'force' => $force,
      ),
    ));

    $documents = os2web_esdh_provider_invoke('cm', 'get_case_docs', $case['uri']);
    foreach ($documents as $document) {
      $queue->createItem(array(
        'callback' => 'os2web_sbsys_esdh_cases_import_document',
        'args' => array(
          'document' => $document,
          'src_path' => dirname($case['uri']),
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
