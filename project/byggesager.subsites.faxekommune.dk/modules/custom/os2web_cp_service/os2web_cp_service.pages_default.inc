<?php
/**
 * @file
 * os2web_cp_service.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function os2web_cp_service_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'os2web_cp_service_cp_case_panel';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -29;
  $handler->conf = array(
    'title' => 'CP Case',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
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
  $display->layout = 'flexible';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'center' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '';
  $display->uuid = 'f9622c5b-b2d7-490f-8da8-191e70025337';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'os2web_cp_service_cp_case_panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-954e0b3b-3fff-4d1f-835d-d2e759a64f3c';
  $pane->panel = 'center';
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'Gå tilbage',
    'title' => '',
    'body' => '<p><a class="button go-back-button os2web_cp_service_button" href="javascript:(!document.referrer)?location.href=\'/aaben-indsigt\':history.go(-1);">Gå tilbage til søgning</a></p>',
    'format' => 'full_html',
    'substitute' => 1,
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = '954e0b3b-3fff-4d1f-835d-d2e759a64f3c';
  $display->content['new-954e0b3b-3fff-4d1f-835d-d2e759a64f3c'] = $pane;
  $display->panels['center'][0] = 'new-954e0b3b-3fff-4d1f-835d-d2e759a64f3c';
  $pane = new stdClass();
  $pane->pid = 'new-05853603-f96f-4c30-b441-af278677fecc';
  $pane->panel = 'center';
  $pane->type = 'views';
  $pane->subtype = 'os2web_cp_service_cp_case_view';
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
    'panel_args' => 1,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'page',
    'context' => array(
      0 => 'argument_entity_id:node_1.nid',
    ),
    'override_title' => 0,
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
  $pane->uuid = '05853603-f96f-4c30-b441-af278677fecc';
  $display->content['new-05853603-f96f-4c30-b441-af278677fecc'] = $pane;
  $display->panels['center'][1] = 'new-05853603-f96f-4c30-b441-af278677fecc';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['os2web_cp_service_cp_case_panel'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'os2web_cp_service_cp_document_panel';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -30;
  $handler->conf = array(
    'title' => 'CP Document',
    'no_blocks' => 0,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_cp_service_cp_document' => 'os2web_cp_service_cp_document',
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
  $display->layout = 'flexible';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'center' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = 'Dokument %node:field_os2web_cp_service_doc_id';
  $display->uuid = '2c53eb75-27f2-45d3-9506-93691df90631';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'os2web_cp_service_cp_document_panel';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-4e839ac3-f243-4985-9fad-3c50ab37bfdf';
  $pane->panel = 'center';
  $pane->type = 'views';
  $pane->subtype = 'os2web_cp_service_cp_document_view';
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
    'panel_args' => 1,
    'link_to_view' => 0,
    'args' => '',
    'url' => '',
    'display' => 'page',
    'context' => array(
      0 => 'argument_entity_id:node_1.nid',
    ),
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
  $pane->uuid = '4e839ac3-f243-4985-9fad-3c50ab37bfdf';
  $display->content['new-4e839ac3-f243-4985-9fad-3c50ab37bfdf'] = $pane;
  $display->panels['center'][0] = 'new-4e839ac3-f243-4985-9fad-3c50ab37bfdf';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $export['os2web_cp_service_cp_document_panel'] = $handler;

  return $export;
}

/**
 * Implements hook_default_page_manager_pages().
 */
function os2web_cp_service_default_page_manager_pages() {
  $page = new stdClass();
  $page->disabled = TRUE; /* Edit this to true to make a default page disabled initially */
  $page->api_version = 1;
  $page->name = 'os2web_cp_service_cp_case_search_panel';
  $page->task = 'page';
  $page->admin_title = 'CP Case Search Panel';
  $page->admin_description = 'Panel to show Search view. This is used to adjust the view into a theme layout.';
  $page->path = 'aaben-indsigt';
  $page->access = array();
  $page->menu = array();
  $page->arguments = array();
  $page->conf = array(
    'admin_paths' => FALSE,
  );
  $page->default_handlers = array();
  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'os2web_cp_service_cp_case_search_panel_context';
  $handler->task = 'page';
  $handler->subtask = 'os2web_cp_service_cp_case_search_panel';
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
  );
  $display = new panels_display();
  $display->layout = 'flexible';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'left' => NULL,
      'right' => NULL,
      'center' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = 'Åben Indsigt';
  $display->uuid = 'b5519720-1699-4791-9923-07ef8329c4ab';
  $display->storage_type = 'page_manager';
  $display->storage_id = 'os2web_cp_service_cp_case_search_panel_context';
  $display->content = array();
  $display->panels = array();
  $pane = new stdClass();
  $pane->pid = 'new-e07e705a-9a57-4eb5-be4f-439352c5058b';
  $pane->panel = 'center';
  $pane->type = 'custom';
  $pane->subtype = 'custom';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'admin_title' => 'Beskrivende tekst',
    'title' => '',
    'body' => '<p>Søg i sagssystemet efter sager og dokumenter. Du kan søge efter specifikke ord i en angiven tidsinterval. Sagerne på det tekniske område findes elektronisk fra 2008 og frem.</p><p>Vær opmærksom på at der er en forsinkelse på minimum et døgn fra journalisering til publicering. Udtages et dokument af den automatiske sikkerhedskontrol, for at undgå publicering af person følsomme data, vil forsinkelsen være længere.</p>',
    'format' => 'filtered_html',
    'substitute' => TRUE,
  );
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $pane->locks = array();
  $pane->uuid = 'e07e705a-9a57-4eb5-be4f-439352c5058b';
  $display->content['new-e07e705a-9a57-4eb5-be4f-439352c5058b'] = $pane;
  $display->panels['center'][0] = 'new-e07e705a-9a57-4eb5-be4f-439352c5058b';
  $pane = new stdClass();
  $pane->pid = 'new-d6f31248-e006-48ab-ab18-5ca2995f4951';
  $pane->panel = 'center';
  $pane->type = 'block';
  $pane->subtype = 'os2web_cp_service-os2web_cp_service_counter';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'override_title' => 0,
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
  $pane->uuid = 'd6f31248-e006-48ab-ab18-5ca2995f4951';
  $display->content['new-d6f31248-e006-48ab-ab18-5ca2995f4951'] = $pane;
  $display->panels['center'][1] = 'new-d6f31248-e006-48ab-ab18-5ca2995f4951';
  $pane = new stdClass();
  $pane->pid = 'new-8ae9faae-0dfe-4779-93e1-a2c37cce7cb7';
  $pane->panel = 'center';
  $pane->type = 'views_panes';
  $pane->subtype = 'os2web_cp_service_cp_case_search-panel_pane_1';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array();
  $pane->cache = array();
  $pane->style = array(
    'settings' => NULL,
  );
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 2;
  $pane->locks = array();
  $pane->uuid = '8ae9faae-0dfe-4779-93e1-a2c37cce7cb7';
  $display->content['new-8ae9faae-0dfe-4779-93e1-a2c37cce7cb7'] = $pane;
  $display->panels['center'][2] = 'new-8ae9faae-0dfe-4779-93e1-a2c37cce7cb7';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = '0';
  $handler->conf['display'] = $display;
  $page->default_handlers[$handler->name] = $handler;
  $pages['os2web_cp_service_cp_case_search_panel'] = $page;

  return $pages;

}
