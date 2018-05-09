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
  $display->layout = 'content-with-right-sidebar-7-5';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'top' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'bottom' => NULL,
      'top-container' => NULL,
      'bottom-container' => NULL,
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
  $pane->pid = 'new-8b944814-4000-4ebc-9bf1-d5acd2421c3e';
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
  $pane->uuid = '8b944814-4000-4ebc-9bf1-d5acd2421c3e';
  $display->content['new-8b944814-4000-4ebc-9bf1-d5acd2421c3e'] = $pane;
  $display->panels['content'][0] = 'new-8b944814-4000-4ebc-9bf1-d5acd2421c3e';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['node_view__panel_context_d8c9acb6-ba6b-43d6-8864-c0c9c2d5eb1c'] = $handler;

  return $export;
}
