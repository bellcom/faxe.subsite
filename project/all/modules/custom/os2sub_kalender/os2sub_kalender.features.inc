<?php
/**
 * @file
 * os2sub_kalender.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function os2sub_kalender_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function os2sub_kalender_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function os2sub_kalender_node_info() {
  $items = array(
    'event_calendar' => array(
      'name' => t('Begivenhed'),
      'base' => 'node_content',
      'description' => t('En indholdstype der bruges til at lave begivenheder i kalenderen.'),
      'has_title' => '1',
      'title_label' => t('Overskrift'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
