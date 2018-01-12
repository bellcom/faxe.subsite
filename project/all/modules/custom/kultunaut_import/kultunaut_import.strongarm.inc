<?php
/**
 * @file
 * kultunaut_import.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function kultunaut_import_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'crumbs_weights';
  $strongarm->value = array(
    'crumbs.home_title' => 1,
    'path' => 2,
    'taxonomy.termReference.*' => 3,
    '*' => 4,
    'search.*' => FALSE,
    'search.node.result' => FALSE,
  );
  $export['crumbs_weights'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'custom_search_advanced_language_da_display';
  $strongarm->value = 1;
  $export['custom_search_advanced_language_da_display'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'page_manager_term_view_disabled';
  $strongarm->value = FALSE;
  $export['page_manager_term_view_disabled'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_os2web_kulturnaut_knactivity_pattern';
  $strongarm->value = '[node:field-os2web-kulturnaut-venue:parents:join-path]/[node:field_os2web_kulturnaut_venue]/[node:title]';
  $export['pathauto_node_os2web_kulturnaut_knactivity_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_taxonomy_term_os2web_base_tax_site_structure_pattern';
  $strongarm->value = '';
  $export['pathauto_taxonomy_term_os2web_base_tax_site_structure_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_taxonomy_term_os2web_kulturnaut_venue_pattern';
  $strongarm->value = '';
  $export['pathauto_taxonomy_term_os2web_kulturnaut_venue_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_api_page_search_api_page_disabled_oplevelser';
  $strongarm->value = TRUE;
  $export['search_api_page_search_api_page_disabled_oplevelser'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'search_config';
  $strongarm->value = array(
    'forms' => array(
      'toggle_forms' => 0,
      'move_keyword_search' => 0,
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
          'event_calendar' => 0,
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
  $strongarm->name = 'site_frontpage';
  $strongarm->value = 'kalenderforside';
  $export['site_frontpage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_display_descendants_os2web_taxonomies_tax_places';
  $strongarm->value = 0;
  $export['taxonomy_menu_display_descendants_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_display_num_os2web_taxonomies_tax_places';
  $strongarm->value = 0;
  $export['taxonomy_menu_display_num_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_end_all_os2web_taxonomies_tax_places';
  $strongarm->value = FALSE;
  $export['taxonomy_menu_end_all_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_expanded_os2web_taxonomies_tax_places';
  $strongarm->value = 1;
  $export['taxonomy_menu_expanded_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_flat_os2web_taxonomies_tax_places';
  $strongarm->value = 0;
  $export['taxonomy_menu_flat_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_hide_empty_terms_os2web_taxonomies_tax_places';
  $strongarm->value = 0;
  $export['taxonomy_menu_hide_empty_terms_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_path_os2web_taxonomies_tax_places';
  $strongarm->value = 'taxonomy_menu_path_default';
  $export['taxonomy_menu_path_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_rebuild_os2web_taxonomies_tax_places';
  $strongarm->value = 1;
  $export['taxonomy_menu_rebuild_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_sync_os2web_taxonomies_tax_places';
  $strongarm->value = 1;
  $export['taxonomy_menu_sync_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_term_item_description_os2web_taxonomies_tax_places';
  $strongarm->value = 1;
  $export['taxonomy_menu_term_item_description_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_vocab_menu_os2web_taxonomies_tax_places';
  $strongarm->value = 'main-menu';
  $export['taxonomy_menu_vocab_menu_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_vocab_parent_os2web_taxonomies_tax_places';
  $strongarm->value = '0';
  $export['taxonomy_menu_vocab_parent_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_voc_item_description_os2web_taxonomies_tax_places';
  $strongarm->value = 0;
  $export['taxonomy_menu_voc_item_description_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_voc_item_os2web_taxonomies_tax_places';
  $strongarm->value = FALSE;
  $export['taxonomy_menu_voc_item_os2web_taxonomies_tax_places'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'taxonomy_menu_voc_name_os2web_taxonomies_tax_places';
  $strongarm->value = FALSE;
  $export['taxonomy_menu_voc_name_os2web_taxonomies_tax_places'] = $strongarm;

  return $export;
}
