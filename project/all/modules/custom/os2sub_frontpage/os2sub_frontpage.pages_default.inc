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
  $display->layout = 'content-with-right-sidebar-7-5';
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
      'sidebar' => NULL,
      'top-container' => NULL,
      'bottom-container' => NULL,
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
  $pane->pid = 'new-42f3d75e-7933-4ef9-bdc0-e98ae999786c';
  $pane->panel = 'content';
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
  $pane->uuid = '42f3d75e-7933-4ef9-bdc0-e98ae999786c';
  $display->content['new-42f3d75e-7933-4ef9-bdc0-e98ae999786c'] = $pane;
  $display->panels['content'][0] = 'new-42f3d75e-7933-4ef9-bdc0-e98ae999786c';
  $pane = new stdClass();
  $pane->pid = 'new-dd6b5f9f-eb00-4312-99a6-2d0528f54528';
  $pane->panel = 'content';
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
  $pane->uuid = 'dd6b5f9f-eb00-4312-99a6-2d0528f54528';
  $display->content['new-dd6b5f9f-eb00-4312-99a6-2d0528f54528'] = $pane;
  $display->panels['content'][1] = 'new-dd6b5f9f-eb00-4312-99a6-2d0528f54528';
  $pane = new stdClass();
  $pane->pid = 'new-8606fe19-d5fe-48b9-b10e-cf195cf1d8b1';
  $pane->panel = 'content';
  $pane->type = 'os2web_spotbox_spotbox_pane';
  $pane->subtype = 'os2web_spotbox_spotbox_pane';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'spotbox_nids' => '',
    'spotbox_type' => '',
    'spotbox_count' => '10',
    'spotbox_offset' => '0',
    'spotbox_sitestruct' => '',
    'spotbox_showlatest' => 0,
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
  $pane->uuid = '8606fe19-d5fe-48b9-b10e-cf195cf1d8b1';
  $display->content['new-8606fe19-d5fe-48b9-b10e-cf195cf1d8b1'] = $pane;
  $display->panels['content'][2] = 'new-8606fe19-d5fe-48b9-b10e-cf195cf1d8b1';
  $pane = new stdClass();
  $pane->pid = 'new-4f95140f-8d09-4e38-b16d-26c258798c85';
  $pane->panel = 'content';
  $pane->type = 'views_panes';
  $pane->subtype = 'os2sub_spotbox-panel_pane_1';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array();
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
  $pane->position = 3;
  $pane->locks = array();
  $pane->uuid = '4f95140f-8d09-4e38-b16d-26c258798c85';
  $display->content['new-4f95140f-8d09-4e38-b16d-26c258798c85'] = $pane;
  $display->panels['content'][3] = 'new-4f95140f-8d09-4e38-b16d-26c258798c85';
  $pane = new stdClass();
  $pane->pid = 'new-4fc5a73e-c9f6-451d-a1a9-25a4c7f936dd';
  $pane->panel = 'sidebar';
  $pane->type = 'views_panes';
  $pane->subtype = 'os2web_news_lists-panel_pane_2';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'use_pager' => 0,
    'pager_id' => '0',
    'items_per_page' => '5',
    'offset' => '0',
    'arguments' => array(
      'term_node_tid_depth' => '',
    ),
    'override_title' => 1,
    'override_title_text' => 'Nyheder',
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
  $pane->uuid = '4fc5a73e-c9f6-451d-a1a9-25a4c7f936dd';
  $display->content['new-4fc5a73e-c9f6-451d-a1a9-25a4c7f936dd'] = $pane;
  $display->panels['sidebar'][0] = 'new-4fc5a73e-c9f6-451d-a1a9-25a4c7f936dd';
  $pane = new stdClass();
  $pane->pid = 'new-13316bc8-7436-4967-963a-3aae3f80961b';
  $pane->panel = 'sidebar';
  $pane->type = 'views';
  $pane->subtype = 'os2sub_selvbetjeniing_forside';
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
  $pane->position = 1;
  $pane->locks = array();
  $pane->uuid = '13316bc8-7436-4967-963a-3aae3f80961b';
  $display->content['new-13316bc8-7436-4967-963a-3aae3f80961b'] = $pane;
  $display->panels['sidebar'][1] = 'new-13316bc8-7436-4967-963a-3aae3f80961b';
  $pane = new stdClass();
  $pane->pid = 'new-797d183c-7cb5-4c5f-9fbd-7f06cd2b9e80';
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
    'template_suggestion' => 'transparent',
  );
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '797d183c-7cb5-4c5f-9fbd-7f06cd2b9e80';
  $display->content['new-797d183c-7cb5-4c5f-9fbd-7f06cd2b9e80'] = $pane;
  $display->panels['sidebar'][2] = 'new-797d183c-7cb5-4c5f-9fbd-7f06cd2b9e80';
  $pane = new stdClass();
  $pane->pid = 'new-1f77bd4b-1f19-452d-a245-75f9d7e9f55a';
  $pane->panel = 'top';
  $pane->type = 'views';
  $pane->subtype = 'os2sub_banner';
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
  $pane->uuid = '1f77bd4b-1f19-452d-a245-75f9d7e9f55a';
  $display->content['new-1f77bd4b-1f19-452d-a245-75f9d7e9f55a'] = $pane;
  $display->panels['top'][0] = 'new-1f77bd4b-1f19-452d-a245-75f9d7e9f55a';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['forside'] = $page;

  return $pages;

}
