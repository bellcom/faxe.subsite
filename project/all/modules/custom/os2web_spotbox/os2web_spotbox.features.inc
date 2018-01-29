<?php
/**
 * @file
 * os2web_spotbox.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function os2web_spotbox_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "file_entity" && $api == "file_default_displays") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function os2web_spotbox_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function os2web_spotbox_image_default_styles() {
  $styles = array();

  // Exported image style: os2web_spotbox_image.
  $styles['os2web_spotbox_image'] = array(
    'label' => 'Spotboks',
    'effects' => array(
      5 => array(
        'name' => 'epsacrop_crop',
        'data' => array(
          'width' => 618,
          'height' => 288,
          'anchor' => 'center-center',
          'disable_scale' => 0,
          'jcrop_settings' => array(
            'aspect_ratio' => '',
            'bgcolor' => 'black',
            'bgopacity' => 0.6,
            'fallback' => 1,
          ),
        ),
        'weight' => -10,
      ),
      4 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 618,
          'height' => 288,
        ),
        'weight' => -9,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function os2web_spotbox_node_info() {
  $items = array(
    'os2web_spotbox_box' => array(
      'name' => t('Spotbox'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Overskrift'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
