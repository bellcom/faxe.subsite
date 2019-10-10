<?php
/**
 * @file
 * os2web_sbsys_esdh_cases_import.queue.php
 *
 * Let the cases and documents importer run via CLI instead of HTTP
 *
 * Run with Drush php-script
 * "drush scr os2web_sbsys_esdh_cases_import.queue.php"
 */
if (lock_acquire(OS2WEB_SBSYS_ESDH_CASES_IMPORT_QUEUE_NAME . '_queue', 10000)) {
  os2web_sbsys_esdh_cases_import_queue_refresh();
  $queue = DrupalQueue::get(OS2WEB_SBSYS_ESDH_CASES_IMPORT_QUEUE_NAME);

  while($item = $queue->claimItem()) {
    os2web_sbsys_esdh_cases_import_cron_queue_worker($item->data);
    $queue->deleteItem($item);
  }

  lock_release(OS2WEB_SBSYS_ESDH_CASES_IMPORT_QUEUE_NAME . '_queue');
}
