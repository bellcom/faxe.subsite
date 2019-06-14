<?php
/**
 * @file
 * os2web_cp_service.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function os2web_cp_service_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
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
function os2web_cp_service_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function os2web_cp_service_node_info() {
  $items = array(
    'os2web_cp_service_cp_case' => array(
      'name' => t('CP Case'),
      'base' => 'node_content',
      'description' => t('Holds a case, published via the case publishing service.'),
      'has_title' => '1',
      'title_label' => t('Sagstitel'),
      'help' => '',
    ),
    'os2web_cp_service_cp_document' => array(
      'name' => t('CP Document'),
      'base' => 'node_content',
      'description' => t('Holds a document from the case publishing service.'),
      'has_title' => '1',
      'title_label' => t('Dokumenttitel'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
