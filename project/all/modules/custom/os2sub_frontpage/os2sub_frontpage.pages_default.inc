<?php
/**
 * @file
 * os2sub_frontpage.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_pages().
 */
function os2sub_frontpage_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = FALSE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'forside';
  $page->task = 'page';
  $page->admin_title = 'Forside';
  $page->admin_description = '';
  $page->path = 'forside';
  $page->access = array();
  $page->menu = array(
    'type' => 'none',
    'title' => '',
    'weight' => '0',
    'name' => 'navigation',
    'parent' => array(
      'type' => 'none',
      'title' => '',
      'weight' => 0,
      'name' => 'navigation',
    ),
  );
  $page->arguments = array();
  $page->conf = array();
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'page_forside__panel_context_74a34b4f-324d-44dd-b2d7-03c68286ab9f';
  $handler->task = 'page';
  $handler->subtask = 'forside';
  $handler->handler = 'panel_context';
  $handler->weight = 1;
  $handler->conf = array(
    'title' => 'Landing page',
    'no_blocks' => FALSE,
    'pipeline' => 'ipe',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => '',
  );
  $display = new panels_display();
  $display->layout = 'ballerup-frontpage';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'content' => NULL,
      'footer' => NULL,
      'top' => NULL,
      'bottom' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = 'Forside';
  $display->uuid = '5da30adc-aff3-4c40-9f04-0f1cf59e807e';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'page_forside__panel_context_74a34b4f-324d-44dd-b2d7-03c68286ab9f';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-ffc99cb3-67aa-4439-86e7-36e4db10ad23';
  $pane->panel = 'content';
  $pane->type = 'views';
  $pane->subtype = 'ballerup_subsites_spots';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 1,
    'nodes_per_page' => '0',
    'pager_id' => '0',
    'offset' => '0',
    'more_link' => 0,
    'feed_icons' => 0,
    'panel_args' => 0,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'block_2',
    'override_title' => 0,
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
  $pane->uuid = 'ffc99cb3-67aa-4439-86e7-36e4db10ad23';
  $display->content['new-ffc99cb3-67aa-4439-86e7-36e4db10ad23'] = $pane;
  $display->panels['content'][0] = 'new-ffc99cb3-67aa-4439-86e7-36e4db10ad23';
  $pane = new stdClass();
  $pane->pid = 'new-998e56b3-34bc-4070-b98c-40c907acea61';
  $pane->panel = 'sidebar-left';
  $pane->type = 'views';
  $pane->subtype = 'ballerup_subsites_spots';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 1,
    'nodes_per_page' => '0',
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
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
    'template_suggestion' => 'plain',
  );
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '998e56b3-34bc-4070-b98c-40c907acea61';
  $display->content['new-998e56b3-34bc-4070-b98c-40c907acea61'] = $pane;
  $display->panels['sidebar-left'][0] = 'new-998e56b3-34bc-4070-b98c-40c907acea61';
  $pane = new stdClass();
  $pane->pid = 'new-0a309486-028f-4cc5-850a-360aa747f7d8';
  $pane->panel = 'sidebar-right';
  $pane->type = 'views';
  $pane->subtype = 'os2sub_kontaktblok';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '5',
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
  $pane->uuid = '0a309486-028f-4cc5-850a-360aa747f7d8';
  $display->content['new-0a309486-028f-4cc5-850a-360aa747f7d8'] = $pane;
  $display->panels['sidebar-right'][0] = 'new-0a309486-028f-4cc5-850a-360aa747f7d8';
  $pane = new stdClass();
  $pane->pid = 'new-e1070e0a-b9df-4343-8e86-513d5a0a4cad';
  $pane->panel = 'top';
  $pane->type = 'views';
  $pane->subtype = 'os2sub_banner';
  $pane->shown = FALSE;
  $pane->access = array();
  $pane->configuration = array(
    'override_pager_settings' => 0,
    'use_pager' => 0,
    'nodes_per_page' => '5',
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
  $pane->css = array(
    'css_id' => '',
    'css_class' => '',
    'template_suggestion' => 'plain',
  );
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'e1070e0a-b9df-4343-8e86-513d5a0a4cad';
  $display->content['new-e1070e0a-b9df-4343-8e86-513d5a0a4cad'] = $pane;
  $display->panels['top'][0] = 'new-e1070e0a-b9df-4343-8e86-513d5a0a4cad';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['forside'] = $page;

  return $pages;

}
