<?php
/**
 * @file
 * os2sub_search.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function os2sub_search_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_language_da_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_language_da_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_language_und_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_language_und_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_negative_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_negative_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_or_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_or_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_phrase_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_phrase_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_banner_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_banner_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_media_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_media_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_os2web_base_contentpage_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_os2web_base_contentpage_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_os2web_base_gallery_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_os2web_base_gallery_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_os2web_base_news_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_os2web_base_news_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_os2web_base_selfservice_link_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_os2web_base_selfservice_link_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_os2web_contact_contact_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_os2web_contact_contact_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_os2web_kulturnaut_knactivity_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_os2web_kulturnaut_knactivity_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_os2web_spotbox_box_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_os2web_spotbox_box_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_velkomst_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_velkomst_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_type_webform_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_type_webform_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_any_force';
  $strongarm->value = 0;
  $export['custom_search_any_force'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_any_restricts';
  $strongarm->value = 0;
  $export['custom_search_any_restricts'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_filter';
  $strongarm->value = 'disabled';
  $export['custom_search_filter'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_filter_label';
  $strongarm->value = 'Filter the results';
  $export['custom_search_filter_label'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_node_types';
  $strongarm->value = array(
    'banner' => 0,
    'os2web_base_gallery' => 0,
    'os2web_base_contentpage' => 0,
    'os2web_contact_contact' => 0,
    'os2web_kulturnaut_knactivity' => 0,
    'media' => 0,
    'os2web_base_news' => 0,
    'os2web_base_selfservice_link' => 0,
    'os2web_spotbox_box' => 0,
    'velkomst' => 0,
    'webform' => 0,
  );
  $export['custom_search_node_types'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_node_types_excluded';
  $strongarm->value = array(
    'banner' => 'banner',
    'os2web_contact_contact' => 'os2web_contact_contact',
    'media' => 'media',
    'os2web_base_selfservice_link' => 'os2web_base_selfservice_link',
    'os2web_spotbox_box' => 'os2web_spotbox_box',
    'velkomst' => 'velkomst',
    'os2web_base_gallery' => 0,
    'os2web_base_contentpage' => 0,
    'os2web_kulturnaut_knactivity' => 0,
    'os2web_base_news' => 0,
    'webform' => 0,
  );
  $export['custom_search_node_types_excluded'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_other';
  $strongarm->value = array(
    'file_entity' => 0,
    'user' => 0,
  );
  $export['custom_search_other'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_results_advanced_search';
  $strongarm->value = 0;
  $export['custom_search_results_advanced_search'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_results_advanced_search_collapsed';
  $strongarm->value = 1;
  $export['custom_search_results_advanced_search_collapsed'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_results_advanced_search_collapsible';
  $strongarm->value = 1;
  $export['custom_search_results_advanced_search_collapsible'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_results_info_date';
  $strongarm->value = 0;
  $export['custom_search_results_info_date'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_results_info_type';
  $strongarm->value = 1;
  $export['custom_search_results_info_type'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_results_info_user';
  $strongarm->value = 0;
  $export['custom_search_results_info_user'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_results_search';
  $strongarm->value = 1;
  $export['custom_search_results_search'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_target';
  $strongarm->value = '_self';
  $export['custom_search_target'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_type_selector';
  $strongarm->value = 'select';
  $export['custom_search_type_selector'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_type_selector_all';
  $strongarm->value = '-Any-';
  $export['custom_search_type_selector_all'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_type_selector_label';
  $strongarm->value = 'Søg efter';
  $export['custom_search_type_selector_label'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_type_selector_label_visibility';
  $strongarm->value = 1;
  $export['custom_search_type_selector_label_visibility'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_active_modules';
  $strongarm->value = array(
    'node' => 'node',
    'file_entity' => 0,
    'user' => 0,
  );
  $export['search_active_modules'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_config';
  $strongarm->value = array(
    'forms' => array(
      'toggle_forms' => 0,
      'move_keyword_search' => 1,
      'advanced_populate' => 0,
      'remove_containing_wrapper' => 'default',
      'advanced_expand' => 'default',
    ),
    'fields' => array(
      'containing_any' => array(
        'remove' => 0,
        'roles' => array(
          1 => 0,
          2 => 0,
          6 => 0,
          4 => 0,
          5 => 0,
          3 => 0,
        ),
      ),
      'containing_phrase' => array(
        'remove' => 0,
        'roles' => array(
          1 => 0,
          2 => 0,
          6 => 0,
          4 => 0,
          5 => 0,
          3 => 0,
        ),
      ),
      'containing_none' => array(
        'remove' => 0,
        'roles' => array(
          1 => 0,
          2 => 0,
          6 => 0,
          4 => 0,
          5 => 0,
          3 => 0,
        ),
      ),
      'types' => array(
        'remove' => 0,
        'roles' => array(
          1 => 0,
          2 => 0,
          6 => 0,
          4 => 0,
          5 => 0,
          3 => 0,
        ),
        'filter' => array(
          'banner' => 0,
          'os2web_base_gallery' => 0,
          'os2web_base_contentpage' => 0,
          'os2web_contact_contact' => 0,
          'os2web_kulturnaut_knactivity' => 0,
          'media' => 0,
          'os2web_base_news' => 0,
          'os2web_base_selfservice_link' => 0,
          'os2web_spotbox_box' => 0,
          'velkomst' => 0,
          'webform' => 0,
        ),
        'groupings' => array(),
      ),
      'category' => array(
        'remove' => 0,
        'roles' => array(
          0 => 0,
          1 => 0,
          2 => 0,
          6 => 0,
          4 => 0,
          5 => 0,
          3 => 0,
        ),
      ),
      'language' => array(
        'remove' => 0,
        'roles' => array(
          1 => 0,
          2 => 0,
          6 => 0,
          4 => 0,
          5 => 0,
          3 => 0,
        ),
      ),
    ),
    'results' => array(
      'limit' => '10',
    ),
    'restrictions' => array(
      'admin_bypass' => 1,
    ),
  );
  $export['search_config'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_config_string_overrides';
  $strongarm->value = array(
    'labels' => array(
      'basic' => '',
      'basic_with_keys' => '',
      'basic_submit' => '',
      'advanced_fieldset' => '',
      'advanced_fieldset_with_keys' => '',
      'advanced_any' => '',
      'advanced_phrase' => '',
      'advanced_none' => '',
      'advanced_type' => '',
      'advanced_language' => '',
      'advanced_submit' => '',
    ),
    'title_display' => array(
      'basic' => 'default',
      'advanced_any' => 'default',
      'advanced_phrase' => 'default',
      'advanced_none' => 'default',
      'advanced_type' => 'default',
      'advanced_language' => 'default',
    ),
  );
  $export['search_config_string_overrides'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_cron_limit';
  $strongarm->value = '100';
  $export['search_cron_limit'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_default_module';
  $strongarm->value = 'node';
  $export['search_default_module'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_logging';
  $strongarm->value = 1;
  $export['search_logging'] = $strongarm;

  return $export;
}
