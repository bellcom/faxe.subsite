<?php
/**
 * @file
 * os2web_kulturnaut_events.ds.inc
 */

/**
 * Implements hook_ds_view_modes_info().
 */
function os2web_kulturnaut_events_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'os2sub_teaser_mini';
  $ds_view_mode->label = 'OS2sub Teaser mini';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['os2sub_teaser_mini'] = $ds_view_mode;

  return $export;
}
