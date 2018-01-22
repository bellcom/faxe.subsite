<?php
/**
 * @file
 * os2web_kulturnaut_events.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function os2web_kulturnaut_events_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "feeds" && $api == "feeds_importer_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function os2web_kulturnaut_events_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function os2web_kulturnaut_events_image_default_styles() {
  $styles = array();

  // Exported image style: os2sub_teaser_mini_image.
  $styles['os2sub_teaser_mini_image'] = array(
    'label' => 'OS2Sub teaser mini image',
    'effects' => array(
      33 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 272,
          'height' => 97,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function os2web_kulturnaut_events_node_info() {
  $items = array(
    'os2web_kulturnaut_knactivity' => array(
      'name' => t('Kultunaut begivenhed'),
      'base' => 'node_content',
      'description' => t('Præsentere importeret kulturnaut begivenheder fra Kulturnaut.'),
      'has_title' => '1',
      'title_label' => t('Overskrift'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
