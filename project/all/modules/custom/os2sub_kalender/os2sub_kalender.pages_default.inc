<?php
/**
 * @file
 * os2sub_kalender.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function os2sub_kalender_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__panel_context_d8c9acb6-ba6b-43d6-8864-c0c9c2d5eb1c';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -27;
  $handler->conf = array(
    'title' => 'Kalender',
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
              'event_calendar' => 'event_calendar',
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
  $display->layout = 'content-with-right-sidebar-8-4';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'bottom' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = '629a8920-6009-44d4-9573-077f2dcd7d67';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'node_view__panel_context_d8c9acb6-ba6b-43d6-8864-c0c9c2d5eb1c';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-41dc547c-da00-4a9e-86c9-8464e99f5887';
  $pane->panel = 'content';
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
  $pane->uuid = '41dc547c-da00-4a9e-86c9-8464e99f5887';
  $display->content['new-41dc547c-da00-4a9e-86c9-8464e99f5887'] = $pane;
  $display->panels['content'][0] = 'new-41dc547c-da00-4a9e-86c9-8464e99f5887';
  $pane = new stdClass();
  $pane->pid = 'new-ad3b37f2-8e76-4e5b-9eb4-a2fc2a1475d3';
  $pane->panel = 'content';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:event_calendar_date';
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
  $pane->uuid = 'ad3b37f2-8e76-4e5b-9eb4-a2fc2a1475d3';
  $display->content['new-ad3b37f2-8e76-4e5b-9eb4-a2fc2a1475d3'] = $pane;
  $display->panels['content'][1] = 'new-ad3b37f2-8e76-4e5b-9eb4-a2fc2a1475d3';
  $pane = new stdClass();
  $pane->pid = 'new-138f91d6-5070-4e76-8906-f0870bfe1da6';
  $pane->panel = 'content';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:body';
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
  $pane->uuid = '138f91d6-5070-4e76-8906-f0870bfe1da6';
  $display->content['new-138f91d6-5070-4e76-8906-f0870bfe1da6'] = $pane;
  $display->panels['content'][2] = 'new-138f91d6-5070-4e76-8906-f0870bfe1da6';
  $pane = new stdClass();
  $pane->pid = 'new-4e0a458c-8bb7-43ed-bba3-eeed624f0bdc';
  $pane->panel = 'sidebar';
  $pane->type = 'views_panes';
  $pane->subtype = 'kalender-panel_pane_1';
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
  $pane->uuid = '4e0a458c-8bb7-43ed-bba3-eeed624f0bdc';
  $display->content['new-4e0a458c-8bb7-43ed-bba3-eeed624f0bdc'] = $pane;
  $display->panels['sidebar'][0] = 'new-4e0a458c-8bb7-43ed-bba3-eeed624f0bdc';
  $pane = new stdClass();
  $pane->pid = 'new-ab494e89-3ec3-406a-b07a-7b2ac0bec720';
  $pane->panel = 'top';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_kulturnaut_slidesho';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'slideshow',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
      'slideshow_image_style' => 'os2sub_banner',
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
      'slideshow_pager' => '',
      'slideshow_pager_position' => 'after',
      'slideshow_pager_image_style' => '',
      'slideshow_carousel_image_style' => 'os2sub_banner',
      'slideshow_carousel_visible' => '3',
      'slideshow_carousel_scroll' => '1',
      'slideshow_carousel_speed' => '500',
      'slideshow_carousel_vertical' => 0,
      'slideshow_carousel_circular' => 0,
      'slideshow_carousel_follow' => 0,
      'slideshow_carousel_skin' => '',
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
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'ab494e89-3ec3-406a-b07a-7b2ac0bec720';
  $display->content['new-ab494e89-3ec3-406a-b07a-7b2ac0bec720'] = $pane;
  $display->panels['top'][0] = 'new-ab494e89-3ec3-406a-b07a-7b2ac0bec720';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-138f91d6-5070-4e76-8906-f0870bfe1da6';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_d8c9acb6-ba6b-43d6-8864-c0c9c2d5eb1c'] = $handler;

  return $export;
}
