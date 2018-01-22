<?php
/**
 * @file
 * os2sub_galleri.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function os2sub_galleri_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-os2web_base_gallery-field_baggrund'.
  $field_instances['node-os2web_base_gallery-field_baggrund'] = array(
    'bundle' => 'os2web_base_gallery',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'backstretch',
        'settings' => array(
          'center_x' => 1,
          'center_y' => 1,
          'delta' => '',
          'duration' => 5000,
          'element' => 'other',
          'element_other' => '.content',
          'fade' => 0,
          'field' => '',
          'image_style' => 'os2web_cover',
          'random' => 0,
        ),
        'type' => 'backstretch',
        'weight' => 7,
      ),
      'spotbox' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_baggrund',
    'label' => 'Baggrund',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'epsacrop' => array(
        'styles' => array(
          'os2sub_220x130' => 0,
          'os2sub_300x175' => 0,
          'os2sub_banner' => 0,
          'os2sub_normal_imagesize' => 0,
          'os2sub_small_imagesize' => 0,
          'os2web_spotbox_image' => 0,
        ),
      ),
      'file_directory' => '',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '1920x1165',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          'public' => 'public',
          'youtube' => 0,
        ),
        'allowed_types' => array(
          'audio' => 0,
          'document' => 0,
          'image' => 'image',
          'video' => 0,
        ),
        'browser_plugins' => array(
          'media_default--media_browser_1' => 'media_default--media_browser_1',
          'media_default--media_browser_my_files' => 'media_default--media_browser_my_files',
          'media_internet' => 0,
          'upload' => 'upload',
          'youtube' => 0,
        ),
        'manualcrop_crop_info' => TRUE,
        'manualcrop_default_crop_area' => TRUE,
        'manualcrop_enable' => FALSE,
        'manualcrop_inline_crop' => FALSE,
        'manualcrop_instant_crop' => FALSE,
        'manualcrop_instant_preview' => TRUE,
        'manualcrop_keyboard' => TRUE,
        'manualcrop_maximize_default_crop_area' => FALSE,
        'manualcrop_require_cropping' => array(),
        'manualcrop_styles_list' => array(),
        'manualcrop_styles_mode' => 'include',
        'manualcrop_thumblist' => FALSE,
        'progress_indicator' => 'throbber',
      ),
      'type' => 'media_generic',
      'weight' => 5,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Baggrund');

  return $field_instances;
}
