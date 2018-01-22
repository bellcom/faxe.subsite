<?php
/**
 * @file
 * os2web_kulturnaut_events.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function os2web_kulturnaut_events_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'additional_settings__active_tab_os2web_kulturnaut_knactivity';
  $strongarm->value = 'edit-workflow';
  $export['additional_settings__active_tab_os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__os2web_kulturnaut_knactivity';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'spotbox' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => TRUE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'os2sub_spotbox_single' => array(
        'custom_settings' => TRUE,
      ),
      'revision' => array(
        'custom_settings' => FALSE,
      ),
      'os2sub_spotbox_mini' => array(
        'custom_settings' => TRUE,
      ),
      'os2sub_teaser_mini' => array(
        'custom_settings' => TRUE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '40',
        ),
        'title' => array(
          'weight' => '-5',
        ),
        'path' => array(
          'weight' => '30',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'language_content_type_os2web_kulturnaut_knactivity';
  $strongarm->value = '0';
  $export['language_content_type_os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_os2web_kulturnaut_knactivity';
  $strongarm->value = array();
  $export['menu_options_os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_os2web_kulturnaut_knactivity';
  $strongarm->value = 'os2web-main-menu:0';
  $export['menu_parent_os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_os2web_kulturnaut_knactivity';
  $strongarm->value = array(
    0 => 'status',
  );
  $export['node_options_os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_os2web_kulturnaut_knactivity';
  $strongarm->value = '0';
  $export['node_preview_os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_os2web_kulturnaut_knactivity';
  $strongarm->value = 0;
  $export['node_submitted_os2web_kulturnaut_knactivity'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'save_continue_os2web_kulturnaut_knactivity';
  $strongarm->value = 'Save and add fields';
  $export['save_continue_os2web_kulturnaut_knactivity'] = $strongarm;

  return $export;
}
