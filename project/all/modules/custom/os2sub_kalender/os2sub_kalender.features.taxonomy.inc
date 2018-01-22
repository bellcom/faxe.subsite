<?php
/**
 * @file
 * os2sub_kalender.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function os2sub_kalender_taxonomy_default_vocabularies() {
  return array(
    'event_calendar_status' => array(
      'name' => 'Event Status',
      'machine_name' => 'event_calendar_status',
      'description' => 'Beskrivelse',
      'hierarchy' => 0,
      'module' => 'event_calendar',
      'weight' => 1,
    ),
  );
}
