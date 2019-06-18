<?php
/**
 * @file
 * os2web_settings.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function os2web_settings_filter_default_formats() {
  $formats = array();

  // Exported format: Filtered HTML.
  $formats['filtered_html'] = array(
    'format' => 'filtered_html',
    'name' => 'Filtered HTML',
    'cache' => 1,
    'status' => 1,
    'weight' => -10,
    'filters' => array(
      'filter_url' => array(
        'weight' => -49,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
      'media_filter' => array(
        'weight' => -45,
        'status' => 1,
        'settings' => array(),
      ),
      'os2web_cpr_filter' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(
          'modulus11_check' => 1,
          'date_check' => 1,
          'replace_all_dash' => 1,
          'dummy_value' => 'XXXXXX-XXXX',
        ),
      ),
    ),
  );

  // Exported format: Full HTML.
  $formats['full_html'] = array(
    'format' => 'full_html',
    'name' => 'Full HTML',
    'cache' => 1,
    'status' => 1,
    'weight' => -9,
    'filters' => array(
      'media_filter' => array(
        'weight' => -45,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  return $formats;
}
