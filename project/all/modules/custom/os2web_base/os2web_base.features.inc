<?php
/**
 * @file
 * os2web_base.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function os2web_base_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "panels" && $api == "layouts") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function os2web_base_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function os2web_base_image_default_styles() {
  $styles = array();

  // Exported image style: footer_branding.
  $styles['footer_branding'] = array(
    'label' => 'Footer branding',
    'effects' => array(
      2 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => '',
          'height' => 100,
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: os2sub_normal_imagesize.
  $styles['os2sub_normal_imagesize'] = array(
    'label' => 'Normal billede',
    'effects' => array(
      4 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 848,
          'height' => 410,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 1,
          'style_name' => 'os2sub_normal_imagesize',
        ),
        'weight' => 0,
      ),
      3 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 848,
          'height' => 410,
        ),
        'weight' => 2,
      ),
    ),
  );

  // Exported image style: os2sub_small_imagesize.
  $styles['os2sub_small_imagesize'] = array(
    'label' => 'Lille billede',
    'effects' => array(
      13 => array(
        'name' => 'manualcrop_reuse',
        'data' => array(
          'reuse_crop_style' => 'os2sub_normal_imagesize',
          'apply_all_effects' => 1,
        ),
        'weight' => 0,
      ),
      12 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 285,
          'height' => 194,
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
function os2web_base_node_info() {
  $items = array(
    'media' => array(
      'name' => t('Medier'),
      'base' => 'node_content',
      'description' => t('Video og audio.'),
      'has_title' => '1',
      'title_label' => t('Titel'),
      'help' => '',
    ),
    'os2web_base_contentpage' => array(
      'name' => t('Indholdsside'),
      'base' => 'node_content',
      'description' => t('Almindelig webside til generel brug på sitet.'),
      'has_title' => '1',
      'title_label' => t('Overskrift'),
      'help' => '',
    ),
    'os2web_base_news' => array(
      'name' => t('Nyhed'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Overskrift'),
      'help' => '',
    ),
    'os2web_base_selfservice_link' => array(
      'name' => t('Selvbetjening'),
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

/**
 * Implements hook_paragraphs_info().
 */
function os2web_base_paragraphs_info() {
  $items = array(
    'afsnit_billede' => array(
      'name' => 'Afsnit',
      'bundle' => 'afsnit_billede',
      'locked' => '1',
    ),
    'afsnit_m_billede' => array(
      'name' => 'Afsnit m billede',
      'bundle' => 'afsnit_m_billede',
      'locked' => '1',
    ),
    'galleri' => array(
      'name' => 'Galleri',
      'bundle' => 'galleri',
      'locked' => '1',
    ),
    'harmonika' => array(
      'name' => 'Harmonika',
      'bundle' => 'harmonika',
      'locked' => '1',
    ),
  );
  return $items;
}
