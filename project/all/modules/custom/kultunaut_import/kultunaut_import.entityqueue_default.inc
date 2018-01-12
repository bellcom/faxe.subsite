<?php
/**
 * @file
 * kultunaut_import.entityqueue_default.inc
 */

/**
 * Implements hook_entityqueue_default_queues().
 */
function kultunaut_import_entityqueue_default_queues() {
  $export = array();

  $queue = new EntityQueue();
  $queue->disabled = FALSE; /* Edit this to true to make a default queue disabled initially */
  $queue->api_version = 1;
  $queue->name = 'promoted_venues';
  $queue->label = 'Fremhævede steder';
  $queue->language = 'da';
  $queue->handler = 'simple';
  $queue->target_type = 'taxonomy_term';
  $queue->settings = array(
    'target_bundles' => array(
      'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
    ),
    'min_size' => '2',
    'max_size' => '0',
    'act_as_queue' => 0,
  );
  $export['promoted_venues'] = $queue;

  return $export;
}
