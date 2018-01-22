<?php
/**
 * @file
 * subsites_urls.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function subsites_urls_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_file_pattern';
  $strongarm->value = 'filer/[file:name]';
  $export['pathauto_file_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_banner_pattern';
  $strongarm->value = 'noindex/[node:title]';
  $export['pathauto_node_banner_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_event_calendar_pattern';
  $strongarm->value = 'kalender/[node:title]';
  $export['pathauto_node_event_calendar_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_media_pattern';
  $strongarm->value = 'noindex/[node:title]';
  $export['pathauto_node_media_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_base_contentpage_pattern';
  $strongarm->value = '[node:menu-link:parents:join-path]/[node:title]';
  $export['pathauto_node_os2web_base_contentpage_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_base_gallery_pattern';
  $strongarm->value = '[node:menu-link:parents:join-path]/[node:title]';
  $export['pathauto_node_os2web_base_gallery_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_base_news_pattern';
  $strongarm->value = 'nyheder/[node:title]';
  $export['pathauto_node_os2web_base_news_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_base_selfservice_link_pattern';
  $strongarm->value = 'noindex/[node:title]';
  $export['pathauto_node_os2web_base_selfservice_link_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_contact_contact_pattern';
  $strongarm->value = 'noindex/[node:title]';
  $export['pathauto_node_os2web_contact_contact_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_pattern';
  $strongarm->value = 'indhold/[node:title]';
  $export['pathauto_node_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_velkomst_pattern';
  $strongarm->value = 'noindex/[node:title]';
  $export['pathauto_node_velkomst_pattern'] = $strongarm;

  return $export;
}
