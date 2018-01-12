<?php
/**
 * @file
 * kultunaut_import.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function kultunaut_import_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__panel_context_c46c121f-3797-4277-95fb-a9f62cd9469e';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -25;
  $handler->conf = array(
    'title' => 'KultuNaut Events',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(
      0 => array(
        'identifier' => 'Ord i ordforråd fra Indholdselement (på Indholdselement: Venue [field_os2web_kulturnaut_venue])',
        'keyword' => 'taxonomy_term',
        'name' => 'entity_from_field:field_os2web_kulturnaut_venue-node-taxonomy_term',
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
              'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
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
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'content' => NULL,
      'top-container' => NULL,
      'content-secondary' => NULL,
      'content-tertiary' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '7a2a3e58-469d-47f1-b9de-d4faef6d8fe1';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-5f399056-6e3a-4b97-8630-4d0aead357ee';
    $pane->panel = 'content';
    $pane->type = 'block';
    $pane->subtype = 'crumbs-breadcrumb';
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
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '5f399056-6e3a-4b97-8630-4d0aead357ee';
    $display->content['new-5f399056-6e3a-4b97-8630-4d0aead357ee'] = $pane;
    $display->panels['content'][0] = 'new-5f399056-6e3a-4b97-8630-4d0aead357ee';
    $pane = new stdClass();
    $pane->pid = 'new-23ea6d7a-2c44-4cc5-815b-5ea2edaf2d2d';
    $pane->panel = 'content-secondary';
    $pane->type = 'node_title';
    $pane->subtype = 'node_title';
    $pane->shown = FALSE;
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
    $pane->uuid = '23ea6d7a-2c44-4cc5-815b-5ea2edaf2d2d';
    $display->content['new-23ea6d7a-2c44-4cc5-815b-5ea2edaf2d2d'] = $pane;
    $display->panels['content-secondary'][0] = 'new-23ea6d7a-2c44-4cc5-815b-5ea2edaf2d2d';
    $pane = new stdClass();
    $pane->pid = 'new-07452cc7-e949-4b61-b5da-b6d8b5b49cc5';
    $pane->panel = 'content-secondary';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_longdesc';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
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
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '07452cc7-e949-4b61-b5da-b6d8b5b49cc5';
    $display->content['new-07452cc7-e949-4b61-b5da-b6d8b5b49cc5'] = $pane;
    $display->panels['content-secondary'][1] = 'new-07452cc7-e949-4b61-b5da-b6d8b5b49cc5';
    $pane = new stdClass();
    $pane->pid = 'new-80ef33c2-c314-44c1-88b0-ad49c5f6b4cf';
    $pane->panel = 'content-secondary';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_descrip';
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
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '80ef33c2-c314-44c1-88b0-ad49c5f6b4cf';
    $display->content['new-80ef33c2-c314-44c1-88b0-ad49c5f6b4cf'] = $pane;
    $display->panels['content-secondary'][2] = 'new-80ef33c2-c314-44c1-88b0-ad49c5f6b4cf';
    $pane = new stdClass();
    $pane->pid = 'new-162d2a84-b65e-4d82-8694-8edc639fb003';
    $pane->panel = 'content-secondary';
    $pane->type = 'node_body';
    $pane->subtype = 'node_body';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
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
    $pane->uuid = '162d2a84-b65e-4d82-8694-8edc639fb003';
    $display->content['new-162d2a84-b65e-4d82-8694-8edc639fb003'] = $pane;
    $display->panels['content-secondary'][3] = 'new-162d2a84-b65e-4d82-8694-8edc639fb003';
    $pane = new stdClass();
    $pane->pid = 'new-24c6c6f9-b18d-42f6-95dd-73ced9d0b678';
    $pane->panel = 'content-secondary';
    $pane->type = 'block';
    $pane->subtype = 'os2sub_social_share-os2sub_social_share';
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
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 4;
    $pane->locks = array();
    $pane->uuid = '24c6c6f9-b18d-42f6-95dd-73ced9d0b678';
    $display->content['new-24c6c6f9-b18d-42f6-95dd-73ced9d0b678'] = $pane;
    $display->panels['content-secondary'][4] = 'new-24c6c6f9-b18d-42f6-95dd-73ced9d0b678';
    $pane = new stdClass();
    $pane->pid = 'new-94997ca7-342e-4e69-a754-b63d8fa1fea4';
    $pane->panel = 'content-tertiary';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_andre_events-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '94997ca7-342e-4e69-a754-b63d8fa1fea4';
    $display->content['new-94997ca7-342e-4e69-a754-b63d8fa1fea4'] = $pane;
    $display->panels['content-tertiary'][0] = 'new-94997ca7-342e-4e69-a754-b63d8fa1fea4';
    $pane = new stdClass();
    $pane->pid = 'new-2cc6b48d-bdb7-45d6-abc8-a0cb83ac44d7';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_slidesho';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'image',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'image_style' => 'os2sub_small_imagesize',
        'image_link' => '',
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
    $pane->uuid = '2cc6b48d-bdb7-45d6-abc8-a0cb83ac44d7';
    $display->content['new-2cc6b48d-bdb7-45d6-abc8-a0cb83ac44d7'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-2cc6b48d-bdb7-45d6-abc8-a0cb83ac44d7';
    $pane = new stdClass();
    $pane->pid = 'new-d27b90c0-a52b-4892-8779-6c8b940134a1';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_date';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'date_default',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'format_type' => 'long',
        'multiple_number' => '',
        'multiple_from' => '',
        'multiple_to' => '',
        'fromto' => 'both',
        'show_remaining_days' => 0,
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => 'Tidspunkt',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'd27b90c0-a52b-4892-8779-6c8b940134a1';
    $display->content['new-d27b90c0-a52b-4892-8779-6c8b940134a1'] = $pane;
    $display->panels['sidebar-right'][1] = 'new-d27b90c0-a52b-4892-8779-6c8b940134a1';
    $pane = new stdClass();
    $pane->pid = 'new-1c136eea-4339-44c4-9f39-d3b6191baa14';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_venue';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'taxonomy_term_reference_link',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => 'Sted',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '1c136eea-4339-44c4-9f39-d3b6191baa14';
    $display->content['new-1c136eea-4339-44c4-9f39-d3b6191baa14'] = $pane;
    $display->panels['sidebar-right'][2] = 'new-1c136eea-4339-44c4-9f39-d3b6191baa14';
    $pane = new stdClass();
    $pane->pid = 'new-eebd5313-9908-4b9f-9d25-81d72ed4f935';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_price';
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
      'override_title_text' => 'Pris',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'eebd5313-9908-4b9f-9d25-81d72ed4f935';
    $display->content['new-eebd5313-9908-4b9f-9d25-81d72ed4f935'] = $pane;
    $display->panels['sidebar-right'][3] = 'new-eebd5313-9908-4b9f-9d25-81d72ed4f935';
    $pane = new stdClass();
    $pane->pid = 'new-7fa6fe85-f801-4961-a038-56d954427937';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_target';
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
      'override_title_text' => 'Målgruppe',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 4;
    $pane->locks = array();
    $pane->uuid = '7fa6fe85-f801-4961-a038-56d954427937';
    $display->content['new-7fa6fe85-f801-4961-a038-56d954427937'] = $pane;
    $display->panels['sidebar-right'][4] = 'new-7fa6fe85-f801-4961-a038-56d954427937';
    $pane = new stdClass();
    $pane->pid = 'new-2d7d8409-50de-4c43-89a4-73dc3dfd8265';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_url';
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
    $pane->position = 5;
    $pane->locks = array();
    $pane->uuid = '2d7d8409-50de-4c43-89a4-73dc3dfd8265';
    $display->content['new-2d7d8409-50de-4c43-89a4-73dc3dfd8265'] = $pane;
    $display->panels['sidebar-right'][5] = 'new-2d7d8409-50de-4c43-89a4-73dc3dfd8265';
    $pane = new stdClass();
    $pane->pid = 'new-47d3f590-0a0e-40ea-b61d-e8a5899c7899';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_kulturnaut_sarrang';
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
      'override_title_text' => 'Arrangør',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 6;
    $pane->locks = array();
    $pane->uuid = '47d3f590-0a0e-40ea-b61d-e8a5899c7899';
    $display->content['new-47d3f590-0a0e-40ea-b61d-e8a5899c7899'] = $pane;
    $display->panels['sidebar-right'][6] = 'new-47d3f590-0a0e-40ea-b61d-e8a5899c7899';
    $pane = new stdClass();
    $pane->pid = 'new-a19cdb81-242a-4351-9a09-14fbc71595df';
    $pane->panel = 'sidebar-right';
    $pane->type = 'node_terms';
    $pane->subtype = 'node_terms';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'vid' => '0',
      'term_format' => 'term-links',
      'link' => 1,
      'term_delimiter' => ', ',
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => 'Tags',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 7;
    $pane->locks = array();
    $pane->uuid = 'a19cdb81-242a-4351-9a09-14fbc71595df';
    $display->content['new-a19cdb81-242a-4351-9a09-14fbc71595df'] = $pane;
    $display->panels['sidebar-right'][7] = 'new-a19cdb81-242a-4351-9a09-14fbc71595df';
    $pane = new stdClass();
    $pane->pid = 'new-5e2f7f32-2221-4493-9b44-b06d92230425';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views_panes';
    $pane->subtype = 'add_to_calendar-panel_pane_1';
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
    $pane->position = 8;
    $pane->locks = array();
    $pane->uuid = '5e2f7f32-2221-4493-9b44-b06d92230425';
    $display->content['new-5e2f7f32-2221-4493-9b44-b06d92230425'] = $pane;
    $display->panels['sidebar-right'][8] = 'new-5e2f7f32-2221-4493-9b44-b06d92230425';
    $pane = new stdClass();
    $pane->pid = 'new-da0048ba-9676-46d2-9d66-3b2b26182785';
    $pane->panel = 'top';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_node_banner-panel_pane_1';
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
    $pane->uuid = 'da0048ba-9676-46d2-9d66-3b2b26182785';
    $display->content['new-da0048ba-9676-46d2-9d66-3b2b26182785'] = $pane;
    $display->panels['top'][0] = 'new-da0048ba-9676-46d2-9d66-3b2b26182785';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-23ea6d7a-2c44-4cc5-815b-5ea2edaf2d2d';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_c46c121f-3797-4277-95fb-a9f62cd9469e'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'term_view__panel_context_6434e852-b63e-45b4-9234-b6dcc05d23bd';
  $handler->task = 'term_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -26;
  $handler->conf = array(
    'title' => 'Steder',
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
          'name' => 'term_vocabulary',
          'settings' => array(
            'machine_name' => array(
              'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'top-container' => NULL,
      'content-secondary' => NULL,
      'content-tertiary' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '91fd3681-cf5c-4cd6-8e20-783adb5f3b7f';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane->panel = 'content';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_subterms-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
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
    $pane->uuid = '92ce8abd-b085-4601-adfc-531845800884';
    $display->content['new-92ce8abd-b085-4601-adfc-531845800884'] = $pane;
    $display->panels['content'][0] = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane = new stdClass();
    $pane->pid = 'new-7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_nodes-panel_pane_2';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
      ),
      'override_title' => 1,
      'override_title_text' => 'Det sker',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $display->content['new-7a9e9cec-6cdb-4864-8376-328bb84ae953'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $pane = new stdClass();
    $pane->pid = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane->panel = 'top-container';
    $pane->type = 'block';
    $pane->subtype = 'crumbs-breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
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
    $pane->uuid = '97e2437f-8838-42be-9998-66103d3a410e';
    $display->content['new-97e2437f-8838-42be-9998-66103d3a410e'] = $pane;
    $display->panels['top-container'][0] = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane = new stdClass();
    $pane->pid = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane->panel = 'top-container';
    $pane->type = 'term_name';
    $pane->subtype = 'term_name';
    $pane->shown = FALSE;
    $pane->access = array();
    $pane->configuration = array(
      'link' => 0,
      'markup' => 'h1',
      'id' => '',
      'class' => '',
      'context' => 'argument_term_1',
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
    $pane->uuid = '813b8640-4929-41aa-bb34-4d5f76d1e350';
    $display->content['new-813b8640-4929-41aa-bb34-4d5f76d1e350'] = $pane;
    $display->panels['top-container'][1] = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['term_view__panel_context_6434e852-b63e-45b4-9234-b6dcc05d23bd'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'term_view__panel_context_8a755651-0adc-4532-825d-516113208b47';
  $handler->task = 'term_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -30;
  $handler->conf = array(
    'title' => 'Variant 1',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'variant-1',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'term_vocabulary',
          'settings' => array(
            'machine_name' => array(
              'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
        1 => array(
          'name' => 'entity_field_value:taxonomy_term:os2web_taxonomies_tax_places:field_os2web_taxonomies_disp_var',
          'settings' => array(
            'field_os2web_taxonomies_disp_var' => array(
              'und' => array(
                0 => array(
                  'value' => 'var1',
                ),
              ),
            ),
            'field_os2web_taxonomies_disp_var_value' => array(
              0 => 'var1',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'sectioned-top-light-dark-light-dark';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'light_section_1' => NULL,
      'light_section_2' => NULL,
      'dark_section_1' => NULL,
      'dark_section_2' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '91fd3681-cf5c-4cd6-8e20-783adb5f3b7f';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-d23e843d-7e2b-4b04-91e2-4037547b23a7';
    $pane->panel = 'dark_section_1';
    $pane->type = 'block';
    $pane->subtype = 'views-452928362b429ab934d115b66cedd76d';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'inherit_path' => 1,
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
    $pane->uuid = 'd23e843d-7e2b-4b04-91e2-4037547b23a7';
    $display->content['new-d23e843d-7e2b-4b04-91e2-4037547b23a7'] = $pane;
    $display->panels['dark_section_1'][0] = 'new-d23e843d-7e2b-4b04-91e2-4037547b23a7';
    $pane = new stdClass();
    $pane->pid = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane->panel = 'light_section_1';
    $pane->type = 'block';
    $pane->subtype = 'crumbs-breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
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
    $pane->uuid = '97e2437f-8838-42be-9998-66103d3a410e';
    $display->content['new-97e2437f-8838-42be-9998-66103d3a410e'] = $pane;
    $display->panels['light_section_1'][0] = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane = new stdClass();
    $pane->pid = 'new-106ba0fd-3a46-4022-83c6-296379e996e0';
    $pane->panel = 'light_section_1';
    $pane->type = 'term_description';
    $pane->subtype = 'term_description';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => 'argument_term_1',
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
    $pane->uuid = '106ba0fd-3a46-4022-83c6-296379e996e0';
    $display->content['new-106ba0fd-3a46-4022-83c6-296379e996e0'] = $pane;
    $display->panels['light_section_1'][1] = 'new-106ba0fd-3a46-4022-83c6-296379e996e0';
    $pane = new stdClass();
    $pane->pid = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane->panel = 'light_section_1';
    $pane->type = 'term_name';
    $pane->subtype = 'term_name';
    $pane->shown = FALSE;
    $pane->access = array();
    $pane->configuration = array(
      'link' => 0,
      'markup' => 'h1',
      'id' => '',
      'class' => '',
      'context' => 'argument_term_1',
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
    $pane->uuid = '813b8640-4929-41aa-bb34-4d5f76d1e350';
    $display->content['new-813b8640-4929-41aa-bb34-4d5f76d1e350'] = $pane;
    $display->panels['light_section_1'][2] = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane = new stdClass();
    $pane->pid = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane->panel = 'light_section_2';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_subterms-panel_pane_1';
    $pane->shown = FALSE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
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
    $pane->uuid = '92ce8abd-b085-4601-adfc-531845800884';
    $display->content['new-92ce8abd-b085-4601-adfc-531845800884'] = $pane;
    $display->panels['light_section_2'][0] = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane = new stdClass();
    $pane->pid = 'new-b90752b8-804e-42f6-941a-c20048a53aa1';
    $pane->panel = 'light_section_2';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_nodes_filtered-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
      ),
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'b90752b8-804e-42f6-941a-c20048a53aa1';
    $display->content['new-b90752b8-804e-42f6-941a-c20048a53aa1'] = $pane;
    $display->panels['light_section_2'][1] = 'new-b90752b8-804e-42f6-941a-c20048a53aa1';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['term_view__panel_context_8a755651-0adc-4532-825d-516113208b47'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'term_view__variant-2';
  $handler->task = 'term_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -29;
  $handler->conf = array(
    'title' => 'Variant 2',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'variant-2',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'term_vocabulary',
          'settings' => array(
            'machine_name' => array(
              'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
        1 => array(
          'name' => 'entity_field_value:taxonomy_term:os2web_taxonomies_tax_places:field_os2web_taxonomies_disp_var',
          'settings' => array(
            'field_os2web_taxonomies_disp_var' => array(
              'und' => array(
                0 => array(
                  'value' => 'var2',
                ),
              ),
            ),
            'field_os2web_taxonomies_disp_var_value' => array(
              0 => 'var2',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'top-container' => NULL,
      'content-secondary' => NULL,
      'content-tertiary' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '91fd3681-cf5c-4cd6-8e20-783adb5f3b7f';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane->panel = 'content';
    $pane->type = 'block';
    $pane->subtype = 'crumbs-breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
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
    $pane->uuid = '97e2437f-8838-42be-9998-66103d3a410e';
    $display->content['new-97e2437f-8838-42be-9998-66103d3a410e'] = $pane;
    $display->panels['content'][0] = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane = new stdClass();
    $pane->pid = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane->panel = 'content-secondary';
    $pane->type = 'term_name';
    $pane->subtype = 'term_name';
    $pane->shown = FALSE;
    $pane->access = array();
    $pane->configuration = array(
      'link' => 0,
      'markup' => 'h1',
      'id' => '',
      'class' => '',
      'context' => 'argument_term_1',
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
    $pane->uuid = '813b8640-4929-41aa-bb34-4d5f76d1e350';
    $display->content['new-813b8640-4929-41aa-bb34-4d5f76d1e350'] = $pane;
    $display->panels['content-secondary'][0] = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane = new stdClass();
    $pane->pid = 'new-106ba0fd-3a46-4022-83c6-296379e996e0';
    $pane->panel = 'content-secondary';
    $pane->type = 'term_description';
    $pane->subtype = 'term_description';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => 'argument_term_1',
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
    $pane->uuid = '106ba0fd-3a46-4022-83c6-296379e996e0';
    $display->content['new-106ba0fd-3a46-4022-83c6-296379e996e0'] = $pane;
    $display->panels['content-secondary'][1] = 'new-106ba0fd-3a46-4022-83c6-296379e996e0';
    $pane = new stdClass();
    $pane->pid = 'new-5985352f-deaa-43c0-b43e-99cf20c885d2';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'taxonomy_term:field_os2web_taxonomies_maplink';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'link_default',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(),
      'context' => 'argument_term_1',
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
    $pane->uuid = '5985352f-deaa-43c0-b43e-99cf20c885d2';
    $display->content['new-5985352f-deaa-43c0-b43e-99cf20c885d2'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-5985352f-deaa-43c0-b43e-99cf20c885d2';
    $pane = new stdClass();
    $pane->pid = 'new-7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_nodes-panel_pane_2';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
      ),
      'override_title' => 1,
      'override_title_text' => 'Det sker',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $display->content['new-7a9e9cec-6cdb-4864-8376-328bb84ae953'] = $pane;
    $display->panels['sidebar-right'][1] = 'new-7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $pane = new stdClass();
    $pane->pid = 'new-d47bff9a-efd5-4f2a-a252-01fe0fee76a9';
    $pane->panel = 'top';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_banner-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
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
    $pane->uuid = 'd47bff9a-efd5-4f2a-a252-01fe0fee76a9';
    $display->content['new-d47bff9a-efd5-4f2a-a252-01fe0fee76a9'] = $pane;
    $display->panels['top'][0] = 'new-d47bff9a-efd5-4f2a-a252-01fe0fee76a9';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['term_view__variant-2'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'term_view__variant-3';
  $handler->task = 'term_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -28;
  $handler->conf = array(
    'title' => 'Variant 3',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'variant-3',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'term_vocabulary',
          'settings' => array(
            'machine_name' => array(
              'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
        1 => array(
          'name' => 'entity_field_value:taxonomy_term:os2web_taxonomies_tax_places:field_os2web_taxonomies_disp_var',
          'settings' => array(
            'field_os2web_taxonomies_disp_var' => array(
              'und' => array(
                0 => array(
                  'value' => 'var3',
                ),
              ),
            ),
            'field_os2web_taxonomies_disp_var_value' => array(
              0 => 'var3',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'top-container' => NULL,
      'content-secondary' => NULL,
      'content-tertiary' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '91fd3681-cf5c-4cd6-8e20-783adb5f3b7f';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane->panel = 'content';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_subterms-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
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
    $pane->uuid = '92ce8abd-b085-4601-adfc-531845800884';
    $display->content['new-92ce8abd-b085-4601-adfc-531845800884'] = $pane;
    $display->panels['content'][0] = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane = new stdClass();
    $pane->pid = 'new-7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_nodes-panel_pane_2';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
      ),
      'override_title' => 1,
      'override_title_text' => 'Det sker',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $display->content['new-7a9e9cec-6cdb-4864-8376-328bb84ae953'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-7a9e9cec-6cdb-4864-8376-328bb84ae953';
    $pane = new stdClass();
    $pane->pid = 'new-eebc5cfe-bd9a-4d62-b83d-157fc3ee5e19';
    $pane->panel = 'top';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_banner-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
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
    $pane->uuid = 'eebc5cfe-bd9a-4d62-b83d-157fc3ee5e19';
    $display->content['new-eebc5cfe-bd9a-4d62-b83d-157fc3ee5e19'] = $pane;
    $display->panels['top'][0] = 'new-eebc5cfe-bd9a-4d62-b83d-157fc3ee5e19';
    $pane = new stdClass();
    $pane->pid = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane->panel = 'top-container';
    $pane->type = 'block';
    $pane->subtype = 'crumbs-breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
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
    $pane->uuid = '97e2437f-8838-42be-9998-66103d3a410e';
    $display->content['new-97e2437f-8838-42be-9998-66103d3a410e'] = $pane;
    $display->panels['top-container'][0] = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane = new stdClass();
    $pane->pid = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane->panel = 'top-container';
    $pane->type = 'term_name';
    $pane->subtype = 'term_name';
    $pane->shown = FALSE;
    $pane->access = array();
    $pane->configuration = array(
      'link' => 0,
      'markup' => 'h1',
      'id' => '',
      'class' => '',
      'context' => 'argument_term_1',
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
    $pane->uuid = '813b8640-4929-41aa-bb34-4d5f76d1e350';
    $display->content['new-813b8640-4929-41aa-bb34-4d5f76d1e350'] = $pane;
    $display->panels['top-container'][1] = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['term_view__variant-3'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'term_view__variant-4';
  $handler->task = 'term_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -27;
  $handler->conf = array(
    'title' => 'Variant 4',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'variant-4',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'term_vocabulary',
          'settings' => array(
            'machine_name' => array(
              'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
        1 => array(
          'name' => 'entity_field_value:taxonomy_term:os2web_taxonomies_tax_places:field_os2web_taxonomies_disp_var',
          'settings' => array(
            'field_os2web_taxonomies_disp_var' => array(
              'und' => array(
                0 => array(
                  'value' => 'var4',
                ),
              ),
            ),
            'field_os2web_taxonomies_disp_var_value' => array(
              0 => 'var4',
            ),
          ),
          'context' => 'argument_term_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'top-container' => NULL,
      'content-secondary' => NULL,
      'content-tertiary' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '91fd3681-cf5c-4cd6-8e20-783adb5f3b7f';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane->panel = 'content';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_subterms-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
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
    $pane->uuid = '92ce8abd-b085-4601-adfc-531845800884';
    $display->content['new-92ce8abd-b085-4601-adfc-531845800884'] = $pane;
    $display->panels['content'][0] = 'new-92ce8abd-b085-4601-adfc-531845800884';
    $pane = new stdClass();
    $pane->pid = 'new-ed47a6e5-1661-4d83-9171-14e1ddc5ae69';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_nodes-panel_pane_2';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
      ),
      'override_title' => 1,
      'override_title_text' => 'Det sker',
      'override_title_heading' => 'h3',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'ed47a6e5-1661-4d83-9171-14e1ddc5ae69';
    $display->content['new-ed47a6e5-1661-4d83-9171-14e1ddc5ae69'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-ed47a6e5-1661-4d83-9171-14e1ddc5ae69';
    $pane = new stdClass();
    $pane->pid = 'new-e52b479e-b7c5-4949-b99f-9d2e408bb981';
    $pane->panel = 'top';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_term_banner-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_term_1',
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
    $pane->uuid = 'e52b479e-b7c5-4949-b99f-9d2e408bb981';
    $display->content['new-e52b479e-b7c5-4949-b99f-9d2e408bb981'] = $pane;
    $display->panels['top'][0] = 'new-e52b479e-b7c5-4949-b99f-9d2e408bb981';
    $pane = new stdClass();
    $pane->pid = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane->panel = 'top-container';
    $pane->type = 'block';
    $pane->subtype = 'crumbs-breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
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
    $pane->uuid = '97e2437f-8838-42be-9998-66103d3a410e';
    $display->content['new-97e2437f-8838-42be-9998-66103d3a410e'] = $pane;
    $display->panels['top-container'][0] = 'new-97e2437f-8838-42be-9998-66103d3a410e';
    $pane = new stdClass();
    $pane->pid = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane->panel = 'top-container';
    $pane->type = 'term_name';
    $pane->subtype = 'term_name';
    $pane->shown = FALSE;
    $pane->access = array();
    $pane->configuration = array(
      'link' => 0,
      'markup' => 'h1',
      'id' => '',
      'class' => '',
      'context' => 'argument_term_1',
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
    $pane->uuid = '813b8640-4929-41aa-bb34-4d5f76d1e350';
    $display->content['new-813b8640-4929-41aa-bb34-4d5f76d1e350'] = $pane;
    $display->panels['top-container'][1] = 'new-813b8640-4929-41aa-bb34-4d5f76d1e350';
    $pane = new stdClass();
    $pane->pid = 'new-106ba0fd-3a46-4022-83c6-296379e996e0';
    $pane->panel = 'top-container';
    $pane->type = 'term_description';
    $pane->subtype = 'term_description';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => 'argument_term_1',
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
    $pane->uuid = '106ba0fd-3a46-4022-83c6-296379e996e0';
    $display->content['new-106ba0fd-3a46-4022-83c6-296379e996e0'] = $pane;
    $display->panels['top-container'][2] = 'new-106ba0fd-3a46-4022-83c6-296379e996e0';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['term_view__variant-4'] = $handler;

  return $export;
}

/**
 * Implements hook_default_page_manager_pages().
 */
function kultunaut_import_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'olevsyddjurs_forside';
  $page->task = 'page';
  $page->admin_title = 'OlevSyddjurs Forside';
  $page->admin_description = '';
  $page->path = 'kalenderforside';
  $page->access = array(
    'type' => 'none',
    'settings' => NULL,
  );
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_olevsyddjurs_forside__panel';
  $handler->task = 'page';
  $handler->subtask = 'olevsyddjurs_forside';
  $handler->handler = 'panel_context';
  $handler->weight = 0;
  $handler->conf = array(
    'title' => 'Panel',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'panel',
  );
  $display = new panels_display();
  $display->layout = 'sectioned-top-dark-light-dark-light';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'content' => NULL,
      'light_section_1' => NULL,
      'light_section_2' => NULL,
      'dark_section_1' => NULL,
      'dark_section_2' => NULL,
      'light_section_3_1' => NULL,
      'light_section_3_2' => NULL,
      'dark_section_3_1' => NULL,
      'dark_section_3_2' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = '6fabdbbb-d6d4-4a47-be27-b83e4d9d0504';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-1a2c33fe-28a4-4d50-94a1-0b258561c08c';
    $pane->panel = 'dark_section_1';
    $pane->type = 'block';
    $pane->subtype = 'views-829af8b1a1824e4f5ddb74274b5d57fb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'inherit_path' => 1,
      'override_title' => 1,
      'override_title_text' => 'Søg aktivitet eller begivenhed efter dato og tema',
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
    $pane->uuid = '1a2c33fe-28a4-4d50-94a1-0b258561c08c';
    $display->content['new-1a2c33fe-28a4-4d50-94a1-0b258561c08c'] = $pane;
    $display->panels['dark_section_1'][0] = 'new-1a2c33fe-28a4-4d50-94a1-0b258561c08c';
    $pane = new stdClass();
    $pane->pid = 'new-08d4400d-0810-4624-a68c-8ad6661967ac';
    $pane->panel = 'dark_section_3_1';
    $pane->type = 'views_panes';
    $pane->subtype = 'os2sub_velkomst-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '08d4400d-0810-4624-a68c-8ad6661967ac';
    $display->content['new-08d4400d-0810-4624-a68c-8ad6661967ac'] = $pane;
    $display->panels['dark_section_3_1'][0] = 'new-08d4400d-0810-4624-a68c-8ad6661967ac';
    $pane = new stdClass();
    $pane->pid = 'new-a87ddc21-d002-4a0e-8779-88986b940c63';
    $pane->panel = 'dark_section_3_2';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_promoted_frontpage-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'a87ddc21-d002-4a0e-8779-88986b940c63';
    $display->content['new-a87ddc21-d002-4a0e-8779-88986b940c63'] = $pane;
    $display->panels['dark_section_3_2'][0] = 'new-a87ddc21-d002-4a0e-8779-88986b940c63';
    $pane = new stdClass();
    $pane->pid = 'new-dbba442a-8e78-4866-8484-70a5a233ae63';
    $pane->panel = 'light_section_1';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_forside_kalender-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'use_pager' => 0,
      'pager_id' => '0',
      'items_per_page' => '6',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'dbba442a-8e78-4866-8484-70a5a233ae63';
    $display->content['new-dbba442a-8e78-4866-8484-70a5a233ae63'] = $pane;
    $display->panels['light_section_1'][0] = 'new-dbba442a-8e78-4866-8484-70a5a233ae63';
    $pane = new stdClass();
    $pane->pid = 'new-facdf032-e98d-4624-963f-5df7eccab516';
    $pane->panel = 'top';
    $pane->type = 'views_panes';
    $pane->subtype = 'oplevsyddjurs_forside_banner-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'facdf032-e98d-4624-963f-5df7eccab516';
    $display->content['new-facdf032-e98d-4624-963f-5df7eccab516'] = $pane;
    $display->panels['top'][0] = 'new-facdf032-e98d-4624-963f-5df7eccab516';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['olevsyddjurs_forside'] = $page;

  return $pages;

}
