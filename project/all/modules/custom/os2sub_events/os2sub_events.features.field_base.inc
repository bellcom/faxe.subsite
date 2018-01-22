<?php
/**
 * @file
 * os2sub_events.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function os2sub_events_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_os2sub_event_date'.
  $field_bases['field_os2sub_event_date'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_os2sub_event_date',
    'indexes' => array(),
    'locked' => 0,
    'module' => 'date',
    'settings' => array(
      'cache_count' => 4,
      'cache_enabled' => 0,
      'granularity' => array(
        'day' => 'day',
        'hour' => 'hour',
        'minute' => 'minute',
        'month' => 'month',
        'second' => 0,
        'year' => 'year',
      ),
      'timezone_db' => 'UTC',
      'todate' => 'required',
      'tz_handling' => 'site',
    ),
    'translatable' => 0,
    'type' => 'datetime',
  );

  // Exported field_base: 'field_os2sub_event_section'.
  $field_bases['field_os2sub_event_section'] = array(
    'active' => 1,
    'cardinality' => -1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_os2sub_event_section',
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
        'banner_m_video' => 0,
        'event_calendar' => 0,
        'flexslider_example' => 0,
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

  // Exported field_base: 'field_os2sub_event_signup_link'.
  $field_bases['field_os2sub_event_signup_link'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_os2sub_event_signup_link',
    'indexes' => array(),
    'locked' => 0,
    'module' => 'link',
    'settings' => array(
      'attributes' => array(
        'class' => '',
        'rel' => '',
        'target' => 'default',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 1,
      'title' => 'optional',
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
    ),
    'translatable' => 0,
    'type' => 'link_field',
  );

  return $field_bases;
}
