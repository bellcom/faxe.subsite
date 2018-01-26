<?php
/**
 * @file
 * os2sub_events.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function os2sub_events_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__begivenhed';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -27;
  $handler->conf = array(
    'title' => 'Begivenhed',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'begivenhed',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2sub_event' => 'os2sub_event',
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
  $display->storage_id = 'node_view__begivenhed';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-1fb338ca-f331-4791-8add-59c97eb1c032';
  $pane->panel = 'content';
  $pane->type = 'entity_field';
  $pane->subtype = 'node:field_os2web_base_field_image';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'title',
    'formatter' => 'slideshow',
    'delta_limit' => '0',
    'delta_offset' => '0',
    'delta_reversed' => 0,
    'formatter_settings' => array(
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
      'slideshow_pager' => '',
      'slideshow_pager_position' => 'after',
      'slideshow_pager_image_style' => '',
      'slideshow_carousel_image_style' => '',
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
  $pane->uuid = '1fb338ca-f331-4791-8add-59c97eb1c032';
  $display->content['new-1fb338ca-f331-4791-8add-59c97eb1c032'] = $pane;
  $display->panels['content'][0] = 'new-1fb338ca-f331-4791-8add-59c97eb1c032';
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
    'override_title' => 1,
    'override_title_text' => '%node:title',
    'override_title_heading' => 'h1',
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '9a84a337-aa99-4d20-9371-f5093e9467a4';
  $display->content['new-9a84a337-aa99-4d20-9371-f5093e9467a4'] = $pane;
  $display->panels['content'][1] = 'new-9a84a337-aa99-4d20-9371-f5093e9467a4';
  $pane = new stdClass();
  $pane->pid = 'new-be75ba13-1d85-4e88-903f-606a09938e5c';
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
  $pane->uuid = 'be75ba13-1d85-4e88-903f-606a09938e5c';
  $display->content['new-be75ba13-1d85-4e88-903f-606a09938e5c'] = $pane;
  $display->panels['sidebar'][0] = 'new-be75ba13-1d85-4e88-903f-606a09938e5c';
  $pane = new stdClass();
  $pane->pid = 'new-205e6d79-01ef-4a68-9ace-ea9261790bf7';
  $pane->panel = 'sidebar';
  $pane->type = 'views_panes';
  $pane->subtype = 'os2sub_kommende_begivenheder-panel_pane_1';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '205e6d79-01ef-4a68-9ace-ea9261790bf7';
  $display->content['new-205e6d79-01ef-4a68-9ace-ea9261790bf7'] = $pane;
  $display->panels['sidebar'][1] = 'new-205e6d79-01ef-4a68-9ace-ea9261790bf7';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__begivenhed'] = $handler;

  return $export;
}
