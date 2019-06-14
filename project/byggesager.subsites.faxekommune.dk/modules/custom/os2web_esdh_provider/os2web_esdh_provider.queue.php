<?php
/**
 * @file
 * os2web_esdh_provider.queue.php
 *
 * Let the meetings importer run via CLI instead of HTTP
 *
 * Run with Drush php-script
 * "drush scr os2web_esdh_provider.queue.php"
 */

require_once 'os2web_esdh_provider.mmapi.inc';

os2web_esdh_provider_queue_meetings();

if (lock_acquire('os2web_esdh_provider_queue', 10000)) {
  $queue = DrupalQueue::get('acadre_mm_import');

  while($item = $queue->claimItem()) {
    _os2web_esdh_provider_cron_queue_worker($item->data);
    $queue->deleteItem($item);
  }
}

lock_release('os2web_esdh_provider_queue');
