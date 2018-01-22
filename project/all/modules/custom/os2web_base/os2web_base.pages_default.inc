<?php
/**
 * @file
 * os2web_base.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function os2web_base_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_edit_panel_context';
  $handler->task = 'node_edit';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Indholdsside',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '.panels-flexible-node_edit-inside { padding: 10px}',
    'contexts' => array(
      0 => array(
        'identifier' => 'Redigeringsformular',
        'keyword' => 'node_add',
        'name' => 'node_add_form',
        'type' => 'os2web_base_contentpage',
        'id' => 1,
      ),
    ),
    'relationships' => array(),
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_base_contentpage' => 'os2web_base_contentpage',
            ),
          ),
          'context' => 'argument_node_edit_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'flexible:node_edit';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'lead' => NULL,
      'top_left' => NULL,
      'top_center' => NULL,
      'top_right' => NULL,
      'middle_left' => NULL,
      'middle_right' => NULL,
      'bottom' => NULL,
      'center' => NULL,
      'venstre' => NULL,
      'h__jre' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '7c4c60cd-70f6-4454-af74-2978f0a1ed3f';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'node_edit_panel_context';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-4c8670dc-a30b-4c7e-b4a3-a709a0e35a4c';
  $pane->panel = 'center';
  $pane->type = 'form';
  $pane->subtype = 'form';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_node_edit_1',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '4c8670dc-a30b-4c7e-b4a3-a709a0e35a4c';
  $display->content['new-4c8670dc-a30b-4c7e-b4a3-a709a0e35a4c'] = $pane;
  $display->panels['center'][0] = 'new-4c8670dc-a30b-4c7e-b4a3-a709a0e35a4c';
  $pane = new stdClass();
  $pane->pid = 'new-0f92b9a3-63d2-4126-bab2-e3667f2792b1';
  $pane->panel = 'center';
  $pane->type = 'node_form_buttons';
  $pane->subtype = 'node_form_buttons';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_node_edit_1',
    'override_title' => 1,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '0f92b9a3-63d2-4126-bab2-e3667f2792b1';
  $display->content['new-0f92b9a3-63d2-4126-bab2-e3667f2792b1'] = $pane;
  $display->panels['center'][1] = 'new-0f92b9a3-63d2-4126-bab2-e3667f2792b1';
  $pane = new stdClass();
  $pane->pid = 'new-ba4803db-6f0e-48d5-8ccd-a2ddbe21f746';
  $pane->panel = 'h__jre';
  $pane->type = 'node_form_buttons';
  $pane->subtype = 'node_form_buttons';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_node_edit_1',
    'override_title' => 1,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'ba4803db-6f0e-48d5-8ccd-a2ddbe21f746';
  $display->content['new-ba4803db-6f0e-48d5-8ccd-a2ddbe21f746'] = $pane;
  $display->panels['h__jre'][0] = 'new-ba4803db-6f0e-48d5-8ccd-a2ddbe21f746';
  $pane = new stdClass();
  $pane->pid = 'new-75e9b4c6-1648-4126-8747-d88e4bf80964';
  $pane->panel = 'h__jre';
  $pane->type = 'node_form_publishing';
  $pane->subtype = 'node_form_publishing';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_node_edit_1',
    'override_title' => 1,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '75e9b4c6-1648-4126-8747-d88e4bf80964';
  $display->content['new-75e9b4c6-1648-4126-8747-d88e4bf80964'] = $pane;
  $display->panels['h__jre'][1] = 'new-75e9b4c6-1648-4126-8747-d88e4bf80964';
  $pane = new stdClass();
  $pane->pid = 'new-da0dc756-feac-4113-9951-6aa2746e870a';
  $pane->panel = 'venstre';
  $pane->type = 'node_form_title';
  $pane->subtype = 'node_form_title';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_node_edit_1',
    'override_title' => 1,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'da0dc756-feac-4113-9951-6aa2746e870a';
  $display->content['new-da0dc756-feac-4113-9951-6aa2746e870a'] = $pane;
  $display->panels['venstre'][0] = 'new-da0dc756-feac-4113-9951-6aa2746e870a';
  $pane = new stdClass();
  $pane->pid = 'new-f5ce2054-5007-44fd-af95-54ec2ce066c4';
  $pane->panel = 'venstre';
  $pane->type = 'node_form_path';
  $pane->subtype = 'node_form_path';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_node_edit_1',
    'override_title' => 1,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = 'f5ce2054-5007-44fd-af95-54ec2ce066c4';
  $display->content['new-f5ce2054-5007-44fd-af95-54ec2ce066c4'] = $pane;
  $display->panels['venstre'][1] = 'new-f5ce2054-5007-44fd-af95-54ec2ce066c4';
  $display->hide_title = PANELS_TITLE_NONE;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_edit_panel_context'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__nyhed';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -29;
  $handler->conf = array(
    'title' => 'Nyhed',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'nyhed',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_base_news' => 'os2web_base_news',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'ballerup-stripes';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'top' => NULL,
      'bottom' => NULL,
      'footer' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = 'd00ab7a6-9c3a-4db2-990c-5a01327f2f02';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'node_view__nyhed';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-3f48580b-c575-4de6-96de-8116b1d24dad';
  $pane->panel = 'content';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_lead_img';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'slideshow',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
      'image_style' => 'os2sub_normal_imagesize',
      'image_link' => '',
      'photoswipe_node_style' => 'os2sub_normal_imagesize',
      'photoswipe_image_style' => '',
      'photoswipe_caption' => 'alt',
      'photoswipe_view_mode' => 'ctools',
      'slideshow_image_style' => 'os2sub_normal_imagesize',
      'slideshow_link' => '',
      'slideshow_caption' => '',
      'slideshow_caption_link' => '',
      'slideshow_fx' => 'fade',
      'slideshow_speed' => '1000',
      'slideshow_timeout' => '4000',
      'slideshow_order' => '',
      'slideshow_controls' => 0,
      'slideshow_controls_pause' => 0,
      'slideshow_controls_position' => 'after',
      'slideshow_pause' => 0,
      'slideshow_start_on_hover' => 0,
      'slideshow_pager' => 'carousel',
      'slideshow_pager_position' => 'after',
      'slideshow_pager_image_style' => 'media_thumbnail',
      'slideshow_carousel_image_style' => 'media_thumbnail',
      'slideshow_carousel_visible' => '7',
      'slideshow_carousel_scroll' => '1',
      'slideshow_carousel_speed' => '500',
      'slideshow_carousel_vertical' => 0,
      'slideshow_carousel_circular' => 0,
      'slideshow_carousel_follow' => 0,
      'slideshow_carousel_skin' => '',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h1',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
    'template_suggestion' => 'plain',
  );
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '3f48580b-c575-4de6-96de-8116b1d24dad';
  $display->content['new-3f48580b-c575-4de6-96de-8116b1d24dad'] = $pane;
  $display->panels['content'][0] = 'new-3f48580b-c575-4de6-96de-8116b1d24dad';
  $pane = new stdClass();
  $pane->pid = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
  $pane->panel = 'content';
  $pane->type = 'node_content';
  $pane->subtype = 'node_content';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'links' => 0,
    'no_extras' => 0,
    'override_title' => 1,
    'override_title_text' => '%node:title',
    'identifier' => '',
    'link' => 0,
    'leave_node_title' => 0,
    'build_mode' => 'full',
    'context' => 'argument_entity_id:node_1',
    'override_title_heading' => 'h1',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
    'template_suggestion' => 'plain',
  );
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
  $display->content['new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d'] = $pane;
  $display->panels['content'][1] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
  $pane = new stdClass();
  $pane->pid = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $pane->panel = 'content';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_spotbox';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'node_reference_node',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
      'node_reference_view_mode' => 'spotbox',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
    'template_suggestion' => 'plain',
  );
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = 'b398e1ac-858e-43e3-872f-2d6f3524454d';
  $display->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d'] = $pane;
  $display->panels['content'][2] = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $pane = new stdClass();
  $pane->pid = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
  $pane->panel = 'sidebar-left';
  $pane->type = 'menu_tree';
  $pane->subtype = 'main-menu';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'parent' => 'main-menu:0',
    'title_link' => 1,
    'admin_title' => '',
    'level' => '2',
    'follow' => 0,
    'depth' => '0',
    'depth_relative' => 0,
    'expanded' => 0,
    'sort' => 0,
    'menu_name' => 'main-menu',
    'parent_mlid' => '0',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
  $display->content['new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c'] = $pane;
  $display->panels['sidebar-left'][0] = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
  $pane = new stdClass();
  $pane->pid = 'new-b93cd7ee-4cc8-4733-9847-06b403098f00';
  $pane->panel = 'sidebar-right';
  $pane->type = 'views';
  $pane->subtype = 'os2sub_nyheder';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '10',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'b93cd7ee-4cc8-4733-9847-06b403098f00';
  $display->content['new-b93cd7ee-4cc8-4733-9847-06b403098f00'] = $pane;
  $display->panels['sidebar-right'][0] = 'new-b93cd7ee-4cc8-4733-9847-06b403098f00';
  $pane = new stdClass();
  $pane->pid = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
  $pane->panel = 'sidebar-right';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_selfserv';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'node_reference_node',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
      'node_reference_view_mode' => 'spotbox',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => 'Selvbetjening',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
  $display->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9'] = $pane;
  $display->panels['sidebar-right'][1] = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
  $pane = new stdClass();
  $pane->pid = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
  $pane->panel = 'sidebar-right';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_contact';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'node_reference_node',
    'delta_limit' => 0,
    'delta_offset' => '0',
    'delta_reversed' => FALSE,
    'formatter_settings' => array(
      'node_reference_view_mode' => 'teaser',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = 'a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
  $display->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65'] = $pane;
  $display->panels['sidebar-right'][2] = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
  $pane = new stdClass();
  $pane->pid = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
  $pane->panel = 'sidebar-right';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_related';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'node_reference_default',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 3;
  $pane->locks = array();
  $pane->uuid = 'e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
  $display->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51'] = $pane;
  $display->panels['sidebar-right'][3] = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
  $pane = new stdClass();
  $pane->pid = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
  $pane->panel = 'sidebar-right';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_ext_link';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'link_default',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 4;
  $pane->locks = array();
  $pane->uuid = '72928d41-013b-4890-8ecf-8777b9f87636';
  $display->content['new-72928d41-013b-4890-8ecf-8777b9f87636'] = $pane;
  $display->panels['sidebar-right'][4] = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $handler->conf['display'] = $display;
  $export['node_view__nyhed'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__panel_context_002feedf-3b68-460a-aab2-a8d087f95f10';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -30;
  $handler->conf = array(
    'title' => 'Spotboks',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => '',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_spotbox_box' => 'os2web_spotbox_box',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'center' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'column-left' => NULL,
      'column-center' => NULL,
      'column-right' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '9c78b88d-e6d2-40b0-b3e8-00587b89d904';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'node_view__panel_context_002feedf-3b68-460a-aab2-a8d087f95f10';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-eff9fcd5-e173-44df-a7db-4b47d9bda6b0';
  $pane->panel = 'content';
  $pane->type = 'views_panes';
  $pane->subtype = 'node_adm-panel_pane_1';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => array(
      0 => 'argument_entity_id:node_1',
    ),
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'eff9fcd5-e173-44df-a7db-4b47d9bda6b0';
  $display->content['new-eff9fcd5-e173-44df-a7db-4b47d9bda6b0'] = $pane;
  $display->panels['content'][0] = 'new-eff9fcd5-e173-44df-a7db-4b47d9bda6b0';
  $pane = new stdClass();
  $pane->pid = 'new-073ddcdb-e3fc-4ad0-98b9-5c9f110de019';
  $pane->panel = 'sidebar-left';
  $pane->type = 'node_title';
  $pane->subtype = 'node_title';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'link' => 0,
    'markup' => 'h1',
    'id' => '',
    'class' => '',
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '073ddcdb-e3fc-4ad0-98b9-5c9f110de019';
  $display->content['new-073ddcdb-e3fc-4ad0-98b9-5c9f110de019'] = $pane;
  $display->panels['sidebar-left'][0] = 'new-073ddcdb-e3fc-4ad0-98b9-5c9f110de019';
  $pane = new stdClass();
  $pane->pid = 'new-2380c0e8-d869-489e-b722-207c74b46d83';
  $pane->panel = 'sidebar-left';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_spot_link';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'inline',
    'formatter' => 'link_separate',
    'delta_limit' => 0,
    'delta_offset' => '0',
    'delta_reversed' => FALSE,
    'formatter_settings' => array(),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '2380c0e8-d869-489e-b722-207c74b46d83';
  $display->content['new-2380c0e8-d869-489e-b722-207c74b46d83'] = $pane;
  $display->panels['sidebar-left'][1] = 'new-2380c0e8-d869-489e-b722-207c74b46d83';
  $pane = new stdClass();
  $pane->pid = 'new-2ebf5413-3bee-4243-bf9b-1e1ba3d589b6';
  $pane->panel = 'sidebar-left';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_spotbox_text';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'text_default',
    'delta_limit' => 0,
    'delta_offset' => '0',
    'delta_reversed' => FALSE,
    'formatter_settings' => array(),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '2ebf5413-3bee-4243-bf9b-1e1ba3d589b6';
  $display->content['new-2ebf5413-3bee-4243-bf9b-1e1ba3d589b6'] = $pane;
  $display->panels['sidebar-left'][2] = 'new-2ebf5413-3bee-4243-bf9b-1e1ba3d589b6';
  $pane = new stdClass();
  $pane->pid = 'new-e38a28b6-9c20-499e-9fdd-0c18d156c7da';
  $pane->panel = 'sidebar-right';
  $pane->type = 'node_content';
  $pane->subtype = 'node_content';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'links' => 0,
    'no_extras' => 0,
    'override_title' => 1,
    'override_title_text' => 'Preview',
    'identifier' => '',
    'link' => 0,
    'leave_node_title' => 1,
    'build_mode' => 'spotbox',
    'context' => 'argument_entity_id:node_1',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'e38a28b6-9c20-499e-9fdd-0c18d156c7da';
  $display->content['new-e38a28b6-9c20-499e-9fdd-0c18d156c7da'] = $pane;
  $display->panels['sidebar-right'][0] = 'new-e38a28b6-9c20-499e-9fdd-0c18d156c7da';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_002feedf-3b68-460a-aab2-a8d087f95f10'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__panel_context_be5717b5-534a-450a-93f5-3bf4934248b0';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -28;
  $handler->conf = array(
    'title' => 'Indhold',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => '',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_base_gallery' => 'os2web_base_gallery',
              'os2web_base_contentpage' => 'os2web_base_contentpage',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-right-sidebar-7-5';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'bottom' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = 'd00ab7a6-9c3a-4db2-990c-5a01327f2f02';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'node_view__panel_context_be5717b5-534a-450a-93f5-3bf4934248b0';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-ee9f71c5-4c22-4d01-b398-0d025e77c923';
  $pane->panel = 'bottom';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_spotbox';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'node_reference_node',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
      'node_reference_view_mode' => 'teaser',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'ee9f71c5-4c22-4d01-b398-0d025e77c923';
  $display->content['new-ee9f71c5-4c22-4d01-b398-0d025e77c923'] = $pane;
  $display->panels['bottom'][0] = 'new-ee9f71c5-4c22-4d01-b398-0d025e77c923';
  $pane = new stdClass();
  $pane->pid = 'new-9a84a337-aa99-4d20-9371-f5093e9467a4';
  $pane->panel = 'content';
  $pane->type = 'entity_view';
  $pane->subtype = 'node';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'view_mode' => 'full',
    'context' => 'argument_entity_id:node_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '9a84a337-aa99-4d20-9371-f5093e9467a4';
  $display->content['new-9a84a337-aa99-4d20-9371-f5093e9467a4'] = $pane;
  $display->panels['content'][0] = 'new-9a84a337-aa99-4d20-9371-f5093e9467a4';
  $pane = new stdClass();
  $pane->pid = 'new-669c3f83-29b7-4ba6-9c89-39732c2dc0ff';
  $pane->panel = 'content';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_afsnit';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'paragraphs_view',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
      'view_mode' => 'full',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '669c3f83-29b7-4ba6-9c89-39732c2dc0ff';
  $display->content['new-669c3f83-29b7-4ba6-9c89-39732c2dc0ff'] = $pane;
  $display->panels['content'][1] = 'new-669c3f83-29b7-4ba6-9c89-39732c2dc0ff';
  $pane = new stdClass();
  $pane->pid = 'new-7cf310f5-d8bb-471d-b960-9a48117e8011';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2sub_menuheader';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'text_default',
    'delta_limit' => 0,
    'delta_offset' => '0',
    'delta_reversed' => FALSE,
    'formatter_settings' => array(),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '7cf310f5-d8bb-471d-b960-9a48117e8011';
  $display->content['new-7cf310f5-d8bb-471d-b960-9a48117e8011'] = $pane;
  $display->panels['sidebar'][0] = 'new-7cf310f5-d8bb-471d-b960-9a48117e8011';
  $pane = new stdClass();
  $pane->pid = 'new-46ed3288-c141-4997-afe9-79c47a2d3b94';
  $pane->panel = 'sidebar';
  $pane->type = 'menu_tree';
  $pane->subtype = 'main-menu';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'parent' => 'main-menu:0',
    'title_link' => 1,
    'admin_title' => '',
    'level' => '1',
    'follow' => 'child',
    'depth' => '1',
    'depth_relative' => 1,
    'expanded' => 0,
    'sort' => 0,
    'menu_name' => 'main-menu',
    'parent_mlid' => '0',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '46ed3288-c141-4997-afe9-79c47a2d3b94';
  $display->content['new-46ed3288-c141-4997-afe9-79c47a2d3b94'] = $pane;
  $display->panels['sidebar'][1] = 'new-46ed3288-c141-4997-afe9-79c47a2d3b94';
  $pane = new stdClass();
  $pane->pid = 'new-0c14ee37-e3bf-4294-8b56-038cbbd5a1b8';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_contact';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'node_reference_node',
    'delta_limit' => 0,
    'delta_offset' => '0',
    'delta_reversed' => FALSE,
    'formatter_settings' => array(
      'node_reference_view_mode' => 'teaser',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 0,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '0c14ee37-e3bf-4294-8b56-038cbbd5a1b8';
  $display->content['new-0c14ee37-e3bf-4294-8b56-038cbbd5a1b8'] = $pane;
  $display->panels['sidebar'][2] = 'new-0c14ee37-e3bf-4294-8b56-038cbbd5a1b8';
  $pane = new stdClass();
  $pane->pid = 'new-8fb21a5a-d1ad-4f74-8475-d3a7f65a813f';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_selfserv';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'node_reference_node',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
      'node_reference_view_mode' => 'teaser',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 3;
  $pane->locks = array();
  $pane->uuid = '8fb21a5a-d1ad-4f74-8475-d3a7f65a813f';
  $display->content['new-8fb21a5a-d1ad-4f74-8475-d3a7f65a813f'] = $pane;
  $display->panels['sidebar'][3] = 'new-8fb21a5a-d1ad-4f74-8475-d3a7f65a813f';
  $pane = new stdClass();
  $pane->pid = 'new-63041207-695b-44e0-a2a7-09110ffb0ffb';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_media';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'file_table',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 4;
  $pane->locks = array();
  $pane->uuid = '63041207-695b-44e0-a2a7-09110ffb0ffb';
  $display->content['new-63041207-695b-44e0-a2a7-09110ffb0ffb'] = $pane;
  $display->panels['sidebar'][4] = 'new-63041207-695b-44e0-a2a7-09110ffb0ffb';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_be5717b5-534a-450a-93f5-3bf4934248b0'] = $handler;

  return $export;
}
