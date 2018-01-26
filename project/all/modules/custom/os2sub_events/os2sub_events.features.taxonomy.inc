<?php
/**
 * @file
 * os2sub_events.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function os2sub_events_taxonomy_default_vocabularies() {
  return array(
    'os2sub_event_types' => array(
      'name' => 'Begivenhedstyper',
      'machine_name' => 'os2sub_event_types',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
