<?php
/**
 * @file
 * os2sub_banner.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function os2sub_banner_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function os2sub_banner_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function os2sub_banner_image_default_styles() {
  $styles = array();

  // Exported image style: os2sub_banner.
  $styles['os2sub_banner'] = array(
    'label' => 'OS2sub Banner',
    'effects' => array(
      7 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 1200,
          'height' => 400,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 1,
          'style_name' => 'os2sub_banner',
        ),
        'weight' => 0,
      ),
      6 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 1200,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 2,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function os2sub_banner_node_info() {
  $items = array(
    'banner' => array(
      'name' => t('Banner'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Kaldenavn'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
