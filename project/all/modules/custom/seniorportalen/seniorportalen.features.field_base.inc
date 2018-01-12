<?php
/**
 * @file
 * seniorportalen.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function seniorportalen_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_afdeling'.
  $field_bases['field_afdeling'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_afdeling',
    'indexes' => array(
      'nid' => array(
        0 => 'nid',
      ),
    ),
    'locked' => 0,
    'module' => 'node_reference',
    'settings' => array(
      'referenceable_types' => array(
        'banner' => 0,
        'event_calendar' => 0,
        'kalenderside' => 0,
        'media' => 0,
        'os2sub_event' => 0,
        'os2web_base_contentpage' => 'os2web_base_contentpage',
        'os2web_base_gallery' => 0,
        'os2web_base_news' => 0,
        'os2web_base_selfservice_link' => 0,
        'os2web_contact_contact' => 0,
        'os2web_spotbox_box' => 0,
        'velkomst' => 0,
        'webform' => 0,
      ),
      'view' => array(
        'args' => array(),
        'display_name' => 'references_1',
        'view_name' => 'os2sub_event_sektion_reference',
      ),
    ),
    'translatable' => 0,
    'type' => 'node_reference',
  );

  return $field_bases;
}
