<?php
/**
 * @file
 * os2web_kulturnaut_events.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function os2web_kulturnaut_events_taxonomy_default_vocabularies() {
  return array(
    'os2web_kulturnaut_tema' => array(
      'name' => 'Tema',
      'machine_name' => 'os2web_kulturnaut_tema',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'os2web_kulturnaut_venue' => array(
      'name' => 'Venue',
      'machine_name' => 'os2web_kulturnaut_venue',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
