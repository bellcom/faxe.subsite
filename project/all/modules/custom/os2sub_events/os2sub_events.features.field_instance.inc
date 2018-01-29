<?php
/**
 * @file
 * os2sub_events.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function os2sub_events_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-os2sub_event-body'.
  $field_instances['node-os2sub_event-body'] = array(
    'bundle' => 'os2sub_event',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
      'embedded' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 2,
      ),
      'list' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 2,
      ),
      'list_advanced' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 2,
      ),
      'list_simple' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 2,
      ),
      'spotbox' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(
          'trim_length' => 150,
        ),
        'type' => 'text_summary_or_trimmed',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'body',
    'label' => 'Body',
    'required' => FALSE,
    'settings' => array(
      'display_summary' => TRUE,
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'text',
      'settings' => array(
        'rows' => 20,
        'summary_rows' => 5,
      ),
      'type' => 'text_textarea_with_summary',
      'weight' => 2,
    ),
  );

  // Exported field_instance: 'node-os2sub_event-field_os2sub_contact_ref'.
  $field_instances['node-os2sub_event-field_os2sub_contact_ref'] = array(
    'bundle' => 'os2sub_event',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'node_reference',
        'settings' => array(
          'node_reference_view_mode' => 'teaser',
        ),
        'type' => 'node_reference_node',
        'weight' => 5,
      ),
      'embedded' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list_advanced' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list_simple' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
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
        'weight' => 5,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_os2sub_contact_ref',
    'label' => 'Kontaktblok',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'content_taxonomy_opt_groups' => FALSE,
      ),
      'type' => 'options_select',
      'weight' => 5,
    ),
  );

  // Exported field_instance: 'node-os2sub_event-field_os2sub_event_date'.
  $field_instances['node-os2sub_event-field_os2sub_event_date'] = array(
    'bundle' => 'os2sub_event',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
          'show_remaining_days' => FALSE,
        ),
        'type' => 'date_default',
        'weight' => 0,
      ),
      'embedded' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
          'show_remaining_days' => FALSE,
        ),
        'type' => 'date_default',
        'weight' => 1,
      ),
      'list' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
          'show_remaining_days' => FALSE,
        ),
        'type' => 'date_default',
        'weight' => 1,
      ),
      'list_advanced' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
          'show_remaining_days' => FALSE,
        ),
        'type' => 'date_default',
        'weight' => 1,
      ),
      'list_simple' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'long',
          'fromto' => 'both',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
          'show_remaining_days' => FALSE,
        ),
        'type' => 'date_default',
        'weight' => 1,
      ),
      'spotbox' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'hidden',
        'module' => 'date',
        'settings' => array(
          'format_type' => 'short',
          'fromto' => 'value',
          'multiple_from' => '',
          'multiple_number' => '',
          'multiple_to' => '',
          'show_remaining_days' => 0,
        ),
        'type' => 'date_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_os2sub_event_date',
    'label' => 'Dato',
    'required' => 1,
    'settings' => array(
      'default_value' => 'now',
      'default_value2' => 'same',
      'default_value_code' => '',
      'default_value_code2' => '',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'date',
      'settings' => array(
        'increment' => 15,
        'input_format' => 'd.m.Y - H:i:s',
        'input_format_custom' => '',
        'label_position' => 'above',
        'no_fieldset' => 0,
        'text_parts' => array(),
        'year_range' => '-3:+3',
      ),
      'type' => 'date_popup',
      'weight' => 1,
    ),
  );

  // Exported field_instance:
  // 'node-os2sub_event-field_os2sub_event_signup_link'.
  $field_instances['node-os2sub_event-field_os2sub_event_signup_link'] = array(
    'bundle' => 'os2sub_event',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 4,
      ),
      'embedded' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 3,
      ),
      'list' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 3,
      ),
      'list_advanced' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 3,
      ),
      'list_simple' => array(
        'label' => 'hidden',
        'module' => 'link',
        'settings' => array(),
        'type' => 'link_default',
        'weight' => 3,
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
        'weight' => 6,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_os2sub_event_signup_link',
    'label' => 'Tilmeldingslink',
    'required' => 0,
    'settings' => array(
      'absolute_url' => 1,
      'attributes' => array(
        'class' => '',
        'configurable_class' => 0,
        'configurable_title' => 0,
        'rel' => '',
        'target' => 'default',
        'title' => '',
      ),
      'display' => array(
        'url_cutoff' => 80,
      ),
      'enable_tokens' => 0,
      'linkit' => array(
        'button_text' => 'Søg internt',
        'enable' => 1,
        'profile' => 'os2sub_linkit',
      ),
      'rel_remove' => 'default',
      'title' => 'optional',
      'title_label_use_field_label' => 0,
      'title_maxlength' => 128,
      'title_value' => '',
      'url' => 0,
      'user_register_form' => FALSE,
      'validate_url' => 1,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'link',
      'settings' => array(),
      'type' => 'link_field',
      'weight' => 4,
    ),
  );

  // Exported field_instance: 'node-os2sub_event-field_os2sub_event_type'.
  $field_instances['node-os2sub_event-field_os2sub_event_type'] = array(
    'bundle' => 'os2sub_event',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'taxonomy',
        'settings' => array(),
        'type' => 'taxonomy_term_reference_plain',
        'weight' => 1,
      ),
      'embedded' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list_advanced' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list_simple' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'spotbox' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'hidden',
        'module' => 'taxonomy',
        'settings' => array(),
        'type' => 'taxonomy_term_reference_plain',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_os2sub_event_type',
    'label' => 'Type',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'content_taxonomy_opt_groups' => 0,
      ),
      'type' => 'options_select',
      'weight' => 8,
    ),
  );

  // Exported field_instance: 'node-os2sub_event-field_os2web_base_field_image'.
  $field_instances['node-os2sub_event-field_os2web_base_field_image'] = array(
    'bundle' => 'os2sub_event',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 6,
      ),
      'embedded' => array(
        'label' => 'hidden',
        'module' => 'field_slideshow',
        'settings' => array(
          'slideshow_caption' => 'title',
          'slideshow_caption_link' => '',
          'slideshow_carousel_circular' => 0,
          'slideshow_carousel_follow' => 0,
          'slideshow_carousel_image_style' => '',
          'slideshow_carousel_scroll' => 1,
          'slideshow_carousel_skin' => '',
          'slideshow_carousel_speed' => 500,
          'slideshow_carousel_vertical' => 0,
          'slideshow_carousel_visible' => 3,
          'slideshow_colorbox_image_style' => '',
          'slideshow_colorbox_slideshow' => '',
          'slideshow_colorbox_slideshow_speed' => 4000,
          'slideshow_colorbox_speed' => 350,
          'slideshow_colorbox_transition' => 'elastic',
          'slideshow_controls' => 0,
          'slideshow_controls_pause' => 0,
          'slideshow_controls_position' => 'after',
          'slideshow_field_collection_image' => '',
          'slideshow_fx' => 'fade',
          'slideshow_image_style' => 'os2sub_normal_imagesize',
          'slideshow_link' => '',
          'slideshow_order' => '',
          'slideshow_pager' => '',
          'slideshow_pager_image_style' => '',
          'slideshow_pager_position' => 'after',
          'slideshow_pause' => 0,
          'slideshow_speed' => 1000,
          'slideshow_start_on_hover' => 1,
          'slideshow_timeout' => 4000,
        ),
        'type' => 'slideshow',
        'weight' => 0,
      ),
      'list' => array(
        'label' => 'hidden',
        'module' => 'field_slideshow',
        'settings' => array(
          'slideshow_caption' => 'title',
          'slideshow_caption_link' => '',
          'slideshow_carousel_circular' => 0,
          'slideshow_carousel_follow' => 0,
          'slideshow_carousel_image_style' => '',
          'slideshow_carousel_scroll' => 1,
          'slideshow_carousel_skin' => '',
          'slideshow_carousel_speed' => 500,
          'slideshow_carousel_vertical' => 0,
          'slideshow_carousel_visible' => 3,
          'slideshow_colorbox_image_style' => '',
          'slideshow_colorbox_slideshow' => '',
          'slideshow_colorbox_slideshow_speed' => 4000,
          'slideshow_colorbox_speed' => 350,
          'slideshow_colorbox_transition' => 'elastic',
          'slideshow_controls' => 0,
          'slideshow_controls_pause' => 0,
          'slideshow_controls_position' => 'after',
          'slideshow_field_collection_image' => '',
          'slideshow_fx' => 'fade',
          'slideshow_image_style' => 'os2sub_normal_imagesize',
          'slideshow_link' => '',
          'slideshow_order' => '',
          'slideshow_pager' => '',
          'slideshow_pager_image_style' => '',
          'slideshow_pager_position' => 'after',
          'slideshow_pause' => 0,
          'slideshow_speed' => 1000,
          'slideshow_start_on_hover' => 1,
          'slideshow_timeout' => 4000,
        ),
        'type' => 'slideshow',
        'weight' => 0,
      ),
      'list_advanced' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
      'list_simple' => array(
        'label' => 'hidden',
        'module' => 'field_slideshow',
        'settings' => array(
          'slideshow_caption' => 'title',
          'slideshow_caption_link' => '',
          'slideshow_carousel_circular' => 0,
          'slideshow_carousel_follow' => 0,
          'slideshow_carousel_image_style' => '',
          'slideshow_carousel_scroll' => 1,
          'slideshow_carousel_skin' => '',
          'slideshow_carousel_speed' => 500,
          'slideshow_carousel_vertical' => 0,
          'slideshow_carousel_visible' => 3,
          'slideshow_colorbox_image_style' => '',
          'slideshow_colorbox_slideshow' => '',
          'slideshow_colorbox_slideshow_speed' => 4000,
          'slideshow_colorbox_speed' => 350,
          'slideshow_colorbox_transition' => 'elastic',
          'slideshow_controls' => 0,
          'slideshow_controls_pause' => 0,
          'slideshow_controls_position' => 'after',
          'slideshow_field_collection_image' => '',
          'slideshow_fx' => 'fade',
          'slideshow_image_style' => 'os2sub_normal_imagesize',
          'slideshow_link' => '',
          'slideshow_order' => '',
          'slideshow_pager' => '',
          'slideshow_pager_image_style' => '',
          'slideshow_pager_position' => 'after',
          'slideshow_pause' => 0,
          'slideshow_speed' => 1000,
          'slideshow_start_on_hover' => 1,
          'slideshow_timeout' => 4000,
        ),
        'type' => 'slideshow',
        'weight' => 0,
      ),
      'spotbox' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => 'os2sub_small_imagesize',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_os2web_base_field_image',
    'label' => 'Billede',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'epsacrop' => array(
        'styles' => array(
          'os2sub_banner' => 0,
          'os2sub_normal_imagesize' => 'os2sub_normal_imagesize',
        ),
      ),
      'file_directory' => '',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          'oembed' => 0,
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
          'media_default--media_browser_1' => 0,
          'media_default--media_browser_my_files' => 0,
          'media_internet' => 0,
          'upload' => 0,
        ),
        'manualcrop_crop_info' => 1,
        'manualcrop_default_crop_area' => 1,
        'manualcrop_enable' => 0,
        'manualcrop_inline_crop' => 0,
        'manualcrop_instant_crop' => FALSE,
        'manualcrop_instant_preview' => 1,
        'manualcrop_keyboard' => 1,
        'manualcrop_maximize_default_crop_area' => 0,
        'manualcrop_require_cropping' => array(),
        'manualcrop_styles_list' => array(),
        'manualcrop_styles_mode' => 'include',
        'manualcrop_thumblist' => 0,
      ),
      'type' => 'media_generic',
      'weight' => 3,
    ),
  );

  // Exported field_instance:
  // 'node-os2sub_event-field_os2web_base_field_loca_ref'.
  $field_instances['node-os2sub_event-field_os2web_base_field_loca_ref'] = array(
    'bundle' => 'os2sub_event',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'taxonomy',
        'settings' => array(),
        'type' => 'taxonomy_term_reference_plain',
        'weight' => 2,
      ),
      'embedded' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list_advanced' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'list_simple' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
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
        'weight' => 4,
      ),
    ),
    'entity_type' => 'node',
    'field_name' => 'field_os2web_base_field_loca_ref',
    'label' => 'Sted',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'options',
      'settings' => array(
        'content_taxonomy_opt_groups' => 0,
      ),
      'type' => 'options_select',
      'weight' => 10,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Billede');
  t('Body');
  t('Dato');
  t('Kontaktblok');
  t('Sted');
  t('Tilmeldingslink');
  t('Type');

  return $field_instances;
}
