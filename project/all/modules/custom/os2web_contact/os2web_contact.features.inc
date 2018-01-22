<?php
/**
 * @file
 * os2web_contact.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function os2web_contact_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "panels_mini" && $api == "panels_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function os2web_contact_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function os2web_contact_node_info() {
  $items = array(
    'os2web_contact_contact' => array(
      'name' => t('Kontaktblok'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Kaldenavn'),
      'help' => t('Kaldenavnet bruges internt i systemet. Dette navn bliver ikke vist til de besøgende.'),
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
