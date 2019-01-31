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
  $display->layout = 'content-with-right-sidebar-7-5';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'top-container' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'bottom' => NULL,
      'bottom-container' => NULL,
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
  $pane->pid = 'new-02f35c3d-36c7-487a-80e3-81c66b59360a';
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
  $pane->uuid = '02f35c3d-36c7-487a-80e3-81c66b59360a';
  $display->content['new-02f35c3d-36c7-487a-80e3-81c66b59360a'] = $pane;
  $display->panels['content'][0] = 'new-02f35c3d-36c7-487a-80e3-81c66b59360a';
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
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = 'b398e1ac-858e-43e3-872f-2d6f3524454d';
  $display->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d'] = $pane;
  $display->panels['content'][1] = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $pane = new stdClass();
  $pane->pid = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
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
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
  $display->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9'] = $pane;
  $display->panels['sidebar'][0] = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
  $pane = new stdClass();
  $pane->pid = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
  $pane->panel = 'sidebar';
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
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = 'a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
  $display->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65'] = $pane;
  $display->panels['sidebar'][1] = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
  $pane = new stdClass();
  $pane->pid = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_related';
  $pane->shown = FALSE;
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
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = 'e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
  $display->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51'] = $pane;
  $display->panels['sidebar'][2] = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
  $pane = new stdClass();
  $pane->pid = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_ext_link';
  $pane->shown = FALSE;
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
  $pane->position = 3;
  $pane->locks = array();
  $pane->uuid = '72928d41-013b-4890-8ecf-8777b9f87636';
  $display->content['new-72928d41-013b-4890-8ecf-8777b9f87636'] = $pane;
  $display->panels['sidebar'][3] = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
  $pane = new stdClass();
  $pane->pid = 'new-53e1a270-080f-40bb-801b-9d6d8f28cab6';
  $pane->panel = 'sidebar';
  $pane->type = 'block';
  $pane->subtype = 'os2web_related_links-node_related_links_block';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 1,
    'override_title_text' => 'Læs mere',
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
  $pane->uuid = '53e1a270-080f-40bb-801b-9d6d8f28cab6';
  $display->content['new-53e1a270-080f-40bb-801b-9d6d8f28cab6'] = $pane;
  $display->panels['sidebar'][4] = 'new-53e1a270-080f-40bb-801b-9d6d8f28cab6';
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
  $display->layout = 'content-with-right-sidebar-7-5';
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
    'relationships' => array(
      0 => array(
        'identifier' => 'Indholdselement fra Indholdselement (på Indholdselement: Kontaktblok [field_os2sub_contact_ref])',
        'keyword' => 'kontakt',
        'name' => 'entity_from_field:field_os2sub_contact_ref-node-node',
        'delta' => 0,
        'context' => 'argument_entity_id:node_1',
        'id' => 1,
      ),
    ),
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
      'top-container' => NULL,
      'bottom-container' => NULL,
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
  $pane->pid = 'new-ee9f71c5-4c22-4d01-b398-0d025e77c923';
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
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
    'template_suggestion' => 'plain',
  );
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = 'ee9f71c5-4c22-4d01-b398-0d025e77c923';
  $display->content['new-ee9f71c5-4c22-4d01-b398-0d025e77c923'] = $pane;
  $display->panels['content'][1] = 'new-ee9f71c5-4c22-4d01-b398-0d025e77c923';
  $pane = new stdClass();
  $pane->pid = 'new-46ed3288-c141-4997-afe9-79c47a2d3b94';
  $pane->panel = 'sidebar';
  $pane->type = 'menu_tree';
  $pane->subtype = 'main-menu';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'parent' => 'main-menu:0',
    'title_link' => 0,
    'admin_title' => '',
    'level' => '1',
    'follow' => 'child',
    'depth' => '1',
    'depth_relative' => 1,
    'expanded' => 0,
    'sort' => 0,
    'menu_name' => 'main-menu',
    'parent_mlid' => '0',
    'override_title' => 1,
    'override_title_text' => '%node:field_os2sub_menuheader',
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
  $pane->uuid = '46ed3288-c141-4997-afe9-79c47a2d3b94';
  $display->content['new-46ed3288-c141-4997-afe9-79c47a2d3b94'] = $pane;
  $display->panels['sidebar'][0] = 'new-46ed3288-c141-4997-afe9-79c47a2d3b94';
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
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '0c14ee37-e3bf-4294-8b56-038cbbd5a1b8';
  $display->content['new-0c14ee37-e3bf-4294-8b56-038cbbd5a1b8'] = $pane;
  $display->panels['sidebar'][1] = 'new-0c14ee37-e3bf-4294-8b56-038cbbd5a1b8';
  $pane = new stdClass();
  $pane->pid = 'new-8fb21a5a-d1ad-4f74-8475-d3a7f65a813f';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_selfserv';
  $pane->shown = FALSE;
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
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '8fb21a5a-d1ad-4f74-8475-d3a7f65a813f';
  $display->content['new-8fb21a5a-d1ad-4f74-8475-d3a7f65a813f'] = $pane;
  $display->panels['sidebar'][2] = 'new-8fb21a5a-d1ad-4f74-8475-d3a7f65a813f';
  $pane = new stdClass();
  $pane->pid = 'new-5eb2fc9e-1e2b-4b18-acbf-852f217bb2e4';
  $pane->panel = 'sidebar';
  $pane->type = 'block';
  $pane->subtype = 'os2web_related_links-node_related_links_block';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 1,
    'override_title_text' => 'Læs mere',
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
  $pane->uuid = '5eb2fc9e-1e2b-4b18-acbf-852f217bb2e4';
  $display->content['new-5eb2fc9e-1e2b-4b18-acbf-852f217bb2e4'] = $pane;
  $display->panels['sidebar'][3] = 'new-5eb2fc9e-1e2b-4b18-acbf-852f217bb2e4';
  $pane = new stdClass();
  $pane->pid = 'new-20a08031-07fc-4fd8-abe7-fb6df2704927';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_ext_link';
  $pane->shown = FALSE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'link_default',
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
  $pane->uuid = '20a08031-07fc-4fd8-abe7-fb6df2704927';
  $display->content['new-20a08031-07fc-4fd8-abe7-fb6df2704927'] = $pane;
  $display->panels['sidebar'][4] = 'new-20a08031-07fc-4fd8-abe7-fb6df2704927';
  $pane = new stdClass();
  $pane->pid = 'new-7f8ad197-03cd-4473-8662-1d9fe701fdd0';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_related';
  $pane->shown = FALSE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'node_reference_default',
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
  $pane->position = 5;
  $pane->locks = array();
  $pane->uuid = '7f8ad197-03cd-4473-8662-1d9fe701fdd0';
  $display->content['new-7f8ad197-03cd-4473-8662-1d9fe701fdd0'] = $pane;
  $display->panels['sidebar'][5] = 'new-7f8ad197-03cd-4473-8662-1d9fe701fdd0';
  $pane = new stdClass();
  $pane->pid = 'new-63041207-695b-44e0-a2a7-09110ffb0ffb';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_media';
  $pane->shown = FALSE;
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
  $pane->position = 6;
  $pane->locks = array();
  $pane->uuid = '63041207-695b-44e0-a2a7-09110ffb0ffb';
  $display->content['new-63041207-695b-44e0-a2a7-09110ffb0ffb'] = $pane;
  $display->panels['sidebar'][6] = 'new-63041207-695b-44e0-a2a7-09110ffb0ffb';
  $pane = new stdClass();
  $pane->pid = 'new-eaa94373-af98-4251-a403-52767a52658e';
  $pane->panel = 'sidebar';
  $pane->type = 'views';
  $pane->subtype = 'os2sub_kommende_begivenheder';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '1',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block_1',
    'override_title' => 1,
    'override_title_text' => 'Aktivitetskalender',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
    'template_suggestion' => 'transparent',
  );
  $pane->extras = array();
  $pane->position = 7;
  $pane->locks = array();
  $pane->uuid = 'eaa94373-af98-4251-a403-52767a52658e';
  $display->content['new-eaa94373-af98-4251-a403-52767a52658e'] = $pane;
  $display->panels['sidebar'][7] = 'new-eaa94373-af98-4251-a403-52767a52658e';
  $pane = new stdClass();
  $pane->pid = 'new-205e6d79-01ef-4a68-9ace-ea9261790bf7';
  $pane->panel = 'sidebar';
  $pane->type = 'views_panes';
  $pane->subtype = 'os2sub_kommende_begivenheder-panel_pane_1';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
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
  $pane->position = 8;
  $pane->locks = array();
  $pane->uuid = '205e6d79-01ef-4a68-9ace-ea9261790bf7';
  $display->content['new-205e6d79-01ef-4a68-9ace-ea9261790bf7'] = $pane;
  $display->panels['sidebar'][8] = 'new-205e6d79-01ef-4a68-9ace-ea9261790bf7';
  $pane = new stdClass();
  $pane->pid = 'new-2c983371-2955-42a9-b1d4-25b24cb1b662';
  $pane->panel = 'sidebar';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2sub_contact_ref';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'node_reference_node',
    'delta_limit' => 0,
    'delta_offset' => '0',
    'delta_reversed' => FALSE,
    'formatter_settings' => array(
      'node_reference_view_mode' => 'embedded',
    ),
    'context' => 'argument_entity_id:node_1',
    'override_title' => 1,
    'override_title_text' => '%kontakt:field_os2web_contact_field_dept',
    'override_title_heading' => 'h2',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 9;
  $pane->locks = array();
  $pane->uuid = '2c983371-2955-42a9-b1d4-25b24cb1b662';
  $display->content['new-2c983371-2955-42a9-b1d4-25b24cb1b662'] = $pane;
  $display->panels['sidebar'][9] = 'new-2c983371-2955-42a9-b1d4-25b24cb1b662';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_be5717b5-534a-450a-93f5-3bf4934248b0'] = $handler;

  return $export;
}
