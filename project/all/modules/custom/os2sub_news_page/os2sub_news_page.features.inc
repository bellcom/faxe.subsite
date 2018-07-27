<?php
/**
 * @file
 * os2sub_news_page.features.inc
 */

/**
 * Implements hook_views_api().
 */
function os2sub_news_page_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_menu_position_default_menu_positions().
 */
function os2sub_news_page_menu_position_default_menu_positions() {
  $items = array(
    'os2web_base_news_menu' => array(
      'admin_title' => 'Nyheder',
      'enabled' => 1,
      'conditions' => 'a:1:{s:12:"content_type";a:1:{s:12:"content_type";a:1:{s:16:"os2web_base_news";s:16:"os2web_base_news";}}}',
      'menu_name' => 'main-menu',
      'plid' => 689,
      'mlid' => 690,
      'weight' => 0,
      'machine_name' => 'os2web_base_news_menu',
    ),
  );
  return $items;
}
