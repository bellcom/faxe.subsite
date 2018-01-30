<?php
/**
 * @file
 * os2sub_frontpage.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function os2sub_frontpage_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_enable_revisions_page_node_velkomst';
  $strongarm->value = 1;
  $export['diff_enable_revisions_page_node_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_show_preview_changes_node_velkomst';
  $strongarm->value = 1;
  $export['diff_show_preview_changes_node_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'diff_view_mode_preview_node_velkomst';
  $strongarm->value = 'full';
  $export['diff_view_mode_preview_node_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__velkomst';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'spotbox' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'diff_standard' => array(
        'custom_settings' => FALSE,
      ),
      'os2sub_teaser_mini' => array(
        'custom_settings' => FALSE,
      ),
      'revision' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '5',
        ),
        'scheduler_settings' => array(
          'weight' => '2',
        ),
        'metatags' => array(
          'weight' => '4',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'fitvids_customselectors';
  $strongarm->value = '';
  $export['fitvids_customselectors'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'fitvids_selectors';
  $strongarm->value = '.field-name-field-video
.field-name-body';
  $export['fitvids_selectors'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'fitvids_simplifymarkup';
  $strongarm->value = 1;
  $export['fitvids_simplifymarkup'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'language_content_type_velkomst';
  $strongarm->value = '0';
  $export['language_content_type_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_velkomst';
  $strongarm->value = array();
  $export['menu_options_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_velkomst';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_velkomst';
  $strongarm->value = array(
    0 => 'status',
  );
  $export['node_options_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_velkomst';
  $strongarm->value = '0';
  $export['node_preview_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_velkomst';
  $strongarm->value = 0;
  $export['node_submitted_velkomst'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_add_class_active_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_add_class_active_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_add_class_active_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_add_class_active_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_auto_height_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_auto_height_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_auto_height_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_auto_height_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_auto_play_owlcarousel_settings_default';
  $strongarm->value = '5000';
  $export['owlcarousel_auto_play_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_auto_play_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '5000';
  $export['owlcarousel_auto_play_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_base_class_owlcarousel_settings_default';
  $strongarm->value = 'owl-carousel';
  $export['owlcarousel_base_class_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_base_class_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 'owl-carousel';
  $export['owlcarousel_base_class_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_drag_before_anim_finish_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_drag_before_anim_finish_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_drag_before_anim_finish_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_drag_before_anim_finish_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_owlcarousel_settings_default_items';
  $strongarm->value = '1';
  $export['owlcarousel_items_desktop_owlcarousel_settings_default_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_owlcarousel_settings_default_width';
  $strongarm->value = '1199';
  $export['owlcarousel_items_desktop_owlcarousel_settings_default_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_owlcarousel_settings_forsidenyheder_items';
  $strongarm->value = '4';
  $export['owlcarousel_items_desktop_owlcarousel_settings_forsidenyheder_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_owlcarousel_settings_forsidenyheder_width';
  $strongarm->value = '1199';
  $export['owlcarousel_items_desktop_owlcarousel_settings_forsidenyheder_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_small_owlcarousel_settings_default_items';
  $strongarm->value = '1';
  $export['owlcarousel_items_desktop_small_owlcarousel_settings_default_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_small_owlcarousel_settings_default_width';
  $strongarm->value = '979';
  $export['owlcarousel_items_desktop_small_owlcarousel_settings_default_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_small_owlcarousel_settings_forsidenyheder_items';
  $strongarm->value = '3';
  $export['owlcarousel_items_desktop_small_owlcarousel_settings_forsidenyheder_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_desktop_small_owlcarousel_settings_forsidenyheder_width';
  $strongarm->value = '979';
  $export['owlcarousel_items_desktop_small_owlcarousel_settings_forsidenyheder_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_mobile_owlcarousel_settings_default_items';
  $strongarm->value = '1';
  $export['owlcarousel_items_mobile_owlcarousel_settings_default_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_mobile_owlcarousel_settings_default_width';
  $strongarm->value = '479';
  $export['owlcarousel_items_mobile_owlcarousel_settings_default_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_mobile_owlcarousel_settings_forsidenyheder_items';
  $strongarm->value = '1';
  $export['owlcarousel_items_mobile_owlcarousel_settings_forsidenyheder_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_mobile_owlcarousel_settings_forsidenyheder_width';
  $strongarm->value = '479';
  $export['owlcarousel_items_mobile_owlcarousel_settings_forsidenyheder_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_owlcarousel_settings_default';
  $strongarm->value = '1';
  $export['owlcarousel_items_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '4';
  $export['owlcarousel_items_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_scale_up_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_items_scale_up_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_scale_up_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_items_scale_up_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_owlcarousel_settings_default_items';
  $strongarm->value = '2';
  $export['owlcarousel_items_tablet_owlcarousel_settings_default_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_owlcarousel_settings_default_width';
  $strongarm->value = '768';
  $export['owlcarousel_items_tablet_owlcarousel_settings_default_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_owlcarousel_settings_forsidenyheder_items';
  $strongarm->value = '2';
  $export['owlcarousel_items_tablet_owlcarousel_settings_forsidenyheder_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_owlcarousel_settings_forsidenyheder_width';
  $strongarm->value = '768';
  $export['owlcarousel_items_tablet_owlcarousel_settings_forsidenyheder_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_small_owlcarousel_settings_default_items';
  $strongarm->value = '0';
  $export['owlcarousel_items_tablet_small_owlcarousel_settings_default_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_small_owlcarousel_settings_default_width';
  $strongarm->value = '0';
  $export['owlcarousel_items_tablet_small_owlcarousel_settings_default_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_small_owlcarousel_settings_forsidenyheder_items';
  $strongarm->value = '2';
  $export['owlcarousel_items_tablet_small_owlcarousel_settings_forsidenyheder_items'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_items_tablet_small_owlcarousel_settings_forsidenyheder_width';
  $strongarm->value = '750';
  $export['owlcarousel_items_tablet_small_owlcarousel_settings_forsidenyheder_width'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_json_path_owlcarousel_settings_default';
  $strongarm->value = '';
  $export['owlcarousel_json_path_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_json_path_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '';
  $export['owlcarousel_json_path_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_json_success_owlcarousel_settings_default';
  $strongarm->value = '';
  $export['owlcarousel_json_success_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_json_success_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '';
  $export['owlcarousel_json_success_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_lazy_effect_owlcarousel_settings_default';
  $strongarm->value = 'fadeIn';
  $export['owlcarousel_lazy_effect_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_lazy_effect_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 'fadeIn';
  $export['owlcarousel_lazy_effect_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_lazy_follow_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_lazy_follow_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_lazy_follow_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_lazy_follow_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_lazy_load_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_lazy_load_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_lazy_load_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_lazy_load_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_mouse_drag_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_mouse_drag_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_mouse_drag_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_mouse_drag_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_navigation_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_navigation_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_navigation_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_navigation_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_navigation_text_owlcarousel_settings_default';
  $strongarm->value = array(
    0 => 'prev',
    1 => 'next',
  );
  $export['owlcarousel_navigation_text_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_navigation_text_owlcarousel_settings_forsidenyheder';
  $strongarm->value = array(
    0 => 'prev',
    1 => 'next',
  );
  $export['owlcarousel_navigation_text_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_override_ajax_pagination_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_override_ajax_pagination_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_override_ajax_pagination_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_override_ajax_pagination_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_pagination_numbers_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_pagination_numbers_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_pagination_numbers_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_pagination_numbers_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_pagination_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_pagination_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_pagination_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_pagination_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_pagination_speed_owlcarousel_settings_default';
  $strongarm->value = '1000';
  $export['owlcarousel_pagination_speed_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_pagination_speed_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '800';
  $export['owlcarousel_pagination_speed_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_responsive_base_width_owlcarousel_settings_default';
  $strongarm->value = 'window';
  $export['owlcarousel_responsive_base_width_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_responsive_base_width_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 'window';
  $export['owlcarousel_responsive_base_width_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_responsive_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_responsive_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_responsive_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_responsive_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_responsive_refresh_rate_owlcarousel_settings_default';
  $strongarm->value = '200';
  $export['owlcarousel_responsive_refresh_rate_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_responsive_refresh_rate_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '200';
  $export['owlcarousel_responsive_refresh_rate_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_rewind_nav_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_rewind_nav_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_rewind_nav_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_rewind_nav_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_rewind_speed_owlcarousel_settings_default';
  $strongarm->value = '1000';
  $export['owlcarousel_rewind_speed_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_rewind_speed_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '1000';
  $export['owlcarousel_rewind_speed_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_scroll_per_page_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_scroll_per_page_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_scroll_per_page_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_scroll_per_page_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_settings_default';
  $strongarm->value = 'owlcarousel_default';
  $export['owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_settings_forsidenyheder';
  $strongarm->value = 'forsidenyheder';
  $export['owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_single_item_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_single_item_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_single_item_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_single_item_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_slide_speed_owlcarousel_settings_default';
  $strongarm->value = '1000';
  $export['owlcarousel_slide_speed_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_slide_speed_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '200';
  $export['owlcarousel_slide_speed_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_stop_on_hover_owlcarousel_settings_default';
  $strongarm->value = 0;
  $export['owlcarousel_stop_on_hover_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_stop_on_hover_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 0;
  $export['owlcarousel_stop_on_hover_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_theme_owlcarousel_settings_default';
  $strongarm->value = 'owl-theme';
  $export['owlcarousel_theme_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_theme_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 'owl-theme';
  $export['owlcarousel_theme_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_touch_drag_owlcarousel_settings_default';
  $strongarm->value = 1;
  $export['owlcarousel_touch_drag_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_touch_drag_owlcarousel_settings_forsidenyheder';
  $strongarm->value = 1;
  $export['owlcarousel_touch_drag_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_transition_style_owlcarousel_settings_default';
  $strongarm->value = '';
  $export['owlcarousel_transition_style_owlcarousel_settings_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'owlcarousel_transition_style_owlcarousel_settings_forsidenyheder';
  $strongarm->value = '';
  $export['owlcarousel_transition_style_owlcarousel_settings_forsidenyheder'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'site_frontpage';
  $strongarm->value = 'forside';
  $export['site_frontpage'] = $strongarm;

  return $export;
}
