<?php
/**
 * @file
 * seniorportalen.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function seniorportalen_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function seniorportalen_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_styles_alter().
 */
function seniorportalen_image_styles_alter(&$data) {
  if (isset($data['gallery-thumb'])) {

  if (!isset($data['gallery-thumb']['storage']) || $data['gallery-thumb']['storage'] == IMAGE_STORAGE_DEFAULT) {
    $data['gallery-thumb']['effects'] = array_values($data['gallery-thumb']['effects']);
    $data['gallery-thumb']['effects'][0]['data']['height'] = 140;
  }

  if (!isset($data['gallery-thumb']['storage']) || $data['gallery-thumb']['storage'] == IMAGE_STORAGE_DEFAULT) {
    $data['gallery-thumb']['effects'] = array_values($data['gallery-thumb']['effects']);
    $data['gallery-thumb']['effects'][0]['data']['width'] = 180;
  }
  }
}

/**
 * Implements hook_default_page_manager_handlers_alter().
 */
function seniorportalen_default_page_manager_handlers_alter(&$data) {
  if (isset($data['node_view__nyhed'])) {
    $data['node_view__nyhed']->conf['display']->content['new-3f48580b-c575-4de6-96de-8116b1d24dad']->position = 1; /* WAS: 0 */
    $data['node_view__nyhed']->conf['display']->content['new-41031fb2-e491-4643-95ee-69690e6c421f'] = (object) array(
          'pid' => 'new-41031fb2-e491-4643-95ee-69690e6c421f',
          'panel' => 'content',
          'type' => 'page_breadcrumb',
          'subtype' => 'page_breadcrumb',
          'shown' => TRUE,
          'access' => array(),
          'configuration' => array(),
          'cache' => array(),
          'style' => array(
            'settings' => NULL,
          ),
          'css' => array(
            'css_id' => '',
            'css_class' => '',
            'template_suggestion' => 'plain',
          ),
          'extras' => array(),
          'position' => 0,
          'locks' => array(),
          'uuid' => '41031fb2-e491-4643-95ee-69690e6c421f',
        ); /* WAS: '' */
    $data['node_view__nyhed']->conf['display']->content['new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d']->position = 2; /* WAS: 1 */
    $data['node_view__nyhed']->conf['display']->content['new-72928d41-013b-4890-8ecf-8777b9f87636']->panel = 'sidebar'; /* WAS: 'sidebar-right' */
    $data['node_view__nyhed']->conf['display']->content['new-72928d41-013b-4890-8ecf-8777b9f87636']->position = 4; /* WAS: 3 */
    $data['node_view__nyhed']->conf['display']->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9']->panel = 'sidebar'; /* WAS: 'sidebar-right' */
    $data['node_view__nyhed']->conf['display']->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9']->position = 2; /* WAS: 1 */
    $data['node_view__nyhed']->conf['display']->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65']->panel = 'sidebar'; /* WAS: 'sidebar-right' */
    $data['node_view__nyhed']->conf['display']->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65']->position = 5; /* WAS: 4 */
    $data['node_view__nyhed']->conf['display']->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d']->panel = 'sidebar'; /* WAS: 'sidebar-right' */
    $data['node_view__nyhed']->conf['display']->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d']->position = 6; /* WAS: 5 */
    $data['node_view__nyhed']->conf['display']->content['new-b93cd7ee-4cc8-4733-9847-06b403098f00']->panel = 'sidebar'; /* WAS: 'sidebar-right' */
    $data['node_view__nyhed']->conf['display']->content['new-b93cd7ee-4cc8-4733-9847-06b403098f00']->position = 1; /* WAS: 0 */
    $data['node_view__nyhed']->conf['display']->content['new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c']->panel = 'sidebar'; /* WAS: 'sidebar-left' */
    $data['node_view__nyhed']->conf['display']->content['new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c']->shown = FALSE; /* WAS: TRUE */
    $data['node_view__nyhed']->conf['display']->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51']->panel = 'sidebar'; /* WAS: 'sidebar-right' */
    $data['node_view__nyhed']->conf['display']->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51']->position = 3; /* WAS: 2 */
    $data['node_view__nyhed']->conf['display']->layout = 'content-with-right-sidebar'; /* WAS: 'content-with-left-and-right-sidebar' */
    $data['node_view__nyhed']->conf['display']->panels['content'][0] = 'new-41031fb2-e491-4643-95ee-69690e6c421f'; /* WAS: 'new-3f48580b-c575-4de6-96de-8116b1d24dad' */
    $data['node_view__nyhed']->conf['display']->panels['content'][1] = 'new-3f48580b-c575-4de6-96de-8116b1d24dad'; /* WAS: 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d' */
    $data['node_view__nyhed']->conf['display']->panels['content'][2] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d'; /* WAS: '' */
    $data['node_view__nyhed']->conf['display']->panels['sidebar'] = array(
      0 => 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c',
      1 => 'new-b93cd7ee-4cc8-4733-9847-06b403098f00',
      2 => 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9',
      3 => 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51',
      4 => 'new-72928d41-013b-4890-8ecf-8777b9f87636',
      5 => 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65',
      6 => 'new-b398e1ac-858e-43e3-872f-2d6f3524454d',
    ); /* WAS: '' */
    unset($data['node_view__nyhed']->conf['display']->panels['sidebar-left']);
    unset($data['node_view__nyhed']->conf['display']->panels['sidebar-right']);
  }
  if (isset($data['node_view__panel_context_be5717b5-534a-450a-93f5-3bf4934248b0'])) {
    $data['node_view__panel_context_be5717b5-534a-450a-93f5-3bf4934248b0']->weight = -24; /* WAS: -26 */
  }
}

/**
 * Implements hook_default_page_manager_pages_alter().
 */
function seniorportalen_default_page_manager_pages_alter(&$data) {
  if (isset($data['forside'])) {
    $data['forside']->default_handlers['page_forside__panel_context_5c441894-8350-417e-9a15-c48ae5410851']->weight = -29; /* WAS: 0 */
    $data['forside']->default_handlers['page_forside__panel_context_a5369518-d815-492e-8094-6d4cfac42185'] = (object) array(
          'disabled' => FALSE,
          'api_version' => 1,
          'name' => 'page_forside__panel_context_a5369518-d815-492e-8094-6d4cfac42185',
          'task' => 'page',
          'subtask' => 'forside',
          'handler' => 'panel_context',
          'weight' => -30,
          'conf' => array(
            'title' => 'Seniorportalen',
            'no_blocks' => FALSE,
            'pipeline' => 'ipe',
            'body_classes_to_remove' => '',
            'body_classes_to_add' => '',
            'css_id' => '',
            'css' => '',
            'contexts' => array(),
            'relationships' => array(),
            'name' => '',
            'display' => unserialize('O:14:"panels_display":16:{s:4:"args";a:0:{}s:7:"content";a:9:{s:40:"new-75415fdd-42b5-4cd2-8dd3-66620f5e8a47";O:8:"stdClass":14:{s:3:"pid";s:40:"new-75415fdd-42b5-4cd2-8dd3-66620f5e8a47";s:5:"panel";s:7:"content";s:4:"type";s:5:"views";s:7:"subtype";s:29:"banner_seniorportalen_forside";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:15:{s:23:"override_pager_settings";i:0;s:9:"use_pager";i:0;s:14:"nodes_per_page";s:1:"5";s:8:"pager_id";s:1:"0";s:6:"offset";s:1:"0";s:9:"more_link";i:0;s:10:"feed_icons";i:0;s:10:"panel_args";i:0;s:12:"link_to_view";i:0;s:4:"args";s:0:"";s:3:"url";s:0:"";s:7:"display";s:5:"block";s:14:"override_title";i:1;s:19:"override_title_text";s:0:"";s:22:"override_title_heading";s:2:"h2";}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:0:"";s:19:"template_suggestion";s:5:"plain";}s:6:"extras";a:0:{}s:8:"position";i:0;s:5:"locks";a:0:{}s:4:"uuid";s:36:"75415fdd-42b5-4cd2-8dd3-66620f5e8a47";}s:40:"new-054a37dd-733f-42a5-9bb9-4f64da59cea2";O:8:"stdClass":14:{s:3:"pid";s:40:"new-054a37dd-733f-42a5-9bb9-4f64da59cea2";s:5:"panel";s:7:"content";s:4:"type";s:11:"views_panes";s:7:"subtype";s:28:"os2sub_velkomst-panel_pane_1";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:0:{}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:0:"";s:19:"template_suggestion";s:5:"plain";}s:6:"extras";a:0:{}s:8:"position";i:1;s:5:"locks";a:0:{}s:4:"uuid";s:36:"054a37dd-733f-42a5-9bb9-4f64da59cea2";}s:40:"new-0926e404-bb9f-4e0a-9114-cd30a4332f49";O:8:"stdClass":14:{s:3:"pid";s:40:"new-0926e404-bb9f-4e0a-9114-cd30a4332f49";s:5:"panel";s:12:"sidebar-left";s:4:"type";s:5:"block";s:7:"subtype";s:17:"menu-menu-genveje";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:3:{s:14:"override_title";i:0;s:19:"override_title_text";s:0:"";s:22:"override_title_heading";s:2:"h2";}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:10:"linkmenuer";s:19:"template_suggestion";s:3:"box";}s:6:"extras";a:0:{}s:8:"position";i:0;s:5:"locks";a:0:{}s:4:"uuid";s:36:"0926e404-bb9f-4e0a-9114-cd30a4332f49";}s:40:"new-b7ee49df-d741-40cf-b990-72ba09eb36c9";O:8:"stdClass":14:{s:3:"pid";s:40:"new-b7ee49df-d741-40cf-b990-72ba09eb36c9";s:5:"panel";s:12:"sidebar-left";s:4:"type";s:6:"custom";s:7:"subtype";s:6:"custom";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:5:{s:11:"admin_title";s:17:"Ansøg om ydelser";s:5:"title";s:0:"";s:4:"body";s:118:"<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/selvbetjening">Ansøg om ydelser</a></p>
            ";s:6:"format";s:9:"full_html";s:10:"substitute";b:1;}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:4:"knap";s:19:"template_suggestion";s:5:"plain";}s:6:"extras";a:0:{}s:8:"position";i:1;s:5:"locks";a:0:{}s:4:"uuid";s:36:"b7ee49df-d741-40cf-b990-72ba09eb36c9";}s:40:"new-0b85fd88-14bc-45c1-9412-e18f7ceeccf1";O:8:"stdClass":14:{s:3:"pid";s:40:"new-0b85fd88-14bc-45c1-9412-e18f7ceeccf1";s:5:"panel";s:13:"sidebar-right";s:4:"type";s:6:"custom";s:7:"subtype";s:6:"custom";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:5:{s:11:"admin_title";s:11:"Akut hjælp";s:5:"title";s:0:"";s:4:"body";s:124:"<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/om-kommunen/noedtelefoner">Akut hjælp</a></p>
            ";s:6:"format";s:9:"full_html";s:10:"substitute";b:1;}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:9:"akut knap";s:19:"template_suggestion";s:5:"plain";}s:6:"extras";a:0:{}s:8:"position";i:0;s:5:"locks";a:0:{}s:4:"uuid";s:36:"0b85fd88-14bc-45c1-9412-e18f7ceeccf1";}s:40:"new-af89bf30-bc44-48e7-8e54-4dbcd9a62ace";O:8:"stdClass":14:{s:3:"pid";s:40:"new-af89bf30-bc44-48e7-8e54-4dbcd9a62ace";s:5:"panel";s:13:"sidebar-right";s:4:"type";s:6:"custom";s:7:"subtype";s:6:"custom";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:5:{s:11:"admin_title";s:0:"";s:5:"title";s:0:"";s:4:"body";s:128:"<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/borger/aeldre" target="_blank">Syddjurs.dk</a></p>
            ";s:6:"format";s:9:"full_html";s:10:"substitute";b:1;}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:4:"knap";s:19:"template_suggestion";s:5:"plain";}s:6:"extras";a:0:{}s:8:"position";i:1;s:5:"locks";a:0:{}s:4:"uuid";s:36:"af89bf30-bc44-48e7-8e54-4dbcd9a62ace";}s:40:"new-00c4fb8d-86e8-44bf-9f55-ffeb118d60c5";O:8:"stdClass":14:{s:3:"pid";s:40:"new-00c4fb8d-86e8-44bf-9f55-ffeb118d60c5";s:5:"panel";s:13:"sidebar-right";s:4:"type";s:6:"custom";s:7:"subtype";s:6:"custom";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:5:{s:11:"admin_title";s:14:"Organisationer";s:5:"title";s:0:"";s:4:"body";s:136:"<p><a class="btn btn-primary btn-lg btn-block" href="/traening-aktivitet/interesseorganisationer" target="_blank">Organisationer</a></p>";s:6:"format";s:9:"full_html";s:10:"substitute";b:1;}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:3:"kna";s:19:"template_suggestion";s:5:"plain";}s:6:"extras";a:0:{}s:8:"position";i:2;s:5:"locks";a:0:{}s:4:"uuid";s:36:"00c4fb8d-86e8-44bf-9f55-ffeb118d60c5";}s:40:"new-e4d560ff-281a-4c75-b20b-8ecf4a5da925";O:8:"stdClass":14:{s:3:"pid";s:40:"new-e4d560ff-281a-4c75-b20b-8ecf4a5da925";s:5:"panel";s:13:"sidebar-right";s:4:"type";s:5:"views";s:7:"subtype";s:26:"seniorportalen_nyhedsliste";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:15:{s:23:"override_pager_settings";i:0;s:9:"use_pager";i:0;s:14:"nodes_per_page";s:1:"3";s:8:"pager_id";s:1:"0";s:6:"offset";s:1:"0";s:9:"more_link";i:0;s:10:"feed_icons";i:0;s:10:"panel_args";i:0;s:12:"link_to_view";i:0;s:4:"args";s:0:"";s:3:"url";s:0:"";s:7:"display";s:5:"block";s:14:"override_title";i:1;s:19:"override_title_text";s:0:"";s:22:"override_title_heading";s:2:"h2";}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:0:"";s:19:"template_suggestion";s:3:"box";}s:6:"extras";a:0:{}s:8:"position";i:3;s:5:"locks";a:0:{}s:4:"uuid";s:36:"e4d560ff-281a-4c75-b20b-8ecf4a5da925";}s:40:"new-0a309486-028f-4cc5-850a-360aa747f7d8";O:8:"stdClass":14:{s:3:"pid";s:40:"new-0a309486-028f-4cc5-850a-360aa747f7d8";s:5:"panel";s:13:"sidebar-right";s:4:"type";s:5:"views";s:7:"subtype";s:18:"os2sub_kontaktblok";s:5:"shown";b:1;s:6:"access";a:0:{}s:13:"configuration";a:15:{s:23:"override_pager_settings";i:0;s:9:"use_pager";i:0;s:14:"nodes_per_page";s:1:"5";s:8:"pager_id";s:1:"0";s:6:"offset";s:1:"0";s:9:"more_link";i:0;s:10:"feed_icons";i:0;s:10:"panel_args";i:0;s:12:"link_to_view";i:0;s:4:"args";s:0:"";s:3:"url";s:0:"";s:7:"display";s:5:"block";s:14:"override_title";i:0;s:19:"override_title_text";s:0:"";s:22:"override_title_heading";s:2:"h2";}s:5:"cache";a:0:{}s:5:"style";a:1:{s:8:"settings";N;}s:3:"css";a:3:{s:6:"css_id";s:0:"";s:9:"css_class";s:0:"";s:19:"template_suggestion";s:3:"box";}s:6:"extras";a:0:{}s:8:"position";i:4;s:5:"locks";a:0:{}s:4:"uuid";s:36:"0a309486-028f-4cc5-850a-360aa747f7d8";}}s:6:"panels";a:3:{s:7:"content";a:2:{i:0;s:40:"new-75415fdd-42b5-4cd2-8dd3-66620f5e8a47";i:1;s:40:"new-054a37dd-733f-42a5-9bb9-4f64da59cea2";}s:12:"sidebar-left";a:2:{i:0;s:40:"new-0926e404-bb9f-4e0a-9114-cd30a4332f49";i:1;s:40:"new-b7ee49df-d741-40cf-b990-72ba09eb36c9";}s:13:"sidebar-right";a:5:{i:0;s:40:"new-0b85fd88-14bc-45c1-9412-e18f7ceeccf1";i:1;s:40:"new-af89bf30-bc44-48e7-8e54-4dbcd9a62ace";i:2;s:40:"new-00c4fb8d-86e8-44bf-9f55-ffeb118d60c5";i:3;s:40:"new-e4d560ff-281a-4c75-b20b-8ecf4a5da925";i:4;s:40:"new-0a309486-028f-4cc5-850a-360aa747f7d8";}}s:16:"incoming_content";N;s:6:"css_id";N;s:7:"context";a:0:{}s:3:"did";s:3:"new";s:8:"renderer";s:8:"standard";s:6:"layout";s:46:"content-with-left-and-right-sidebar-top-footer";s:15:"layout_settings";a:0:{}s:14:"panel_settings";a:1:{s:14:"style_settings";a:6:{s:7:"default";N;s:12:"sidebar-left";N;s:13:"sidebar-right";N;s:7:"content";N;s:6:"footer";N;s:3:"top";N;}}s:5:"cache";a:0:{}s:5:"title";s:7:"Forside";s:4:"uuid";s:36:"5da30adc-aff3-4c40-9f04-0f1cf59e807e";s:10:"hide_title";i:0;s:10:"title_pane";s:1:"0";}'),
          ),
        ); /* WAS: '' */
  }
}

/**
 * Implements hook_views_default_views_alter().
 */
function seniorportalen_views_default_views_alter(&$data) {
  if (isset($data['calendar'])) {
    $data['calendar']->display['block_1']->display_options['arguments']['date_argument']['default_argument_type'] = 'date'; /* WAS: '' */
    $data['calendar']->display['default']->display_options['filters']['type']['value']['os2sub_event'] = 'os2sub_event'; /* WAS: '' */
    $data['calendar']->display['default']->display_options['relationships'] = array(
      'field_afdeling_nid' => array(
        'id' => 'field_afdeling_nid',
        'table' => 'field_data_field_afdeling',
        'field' => 'field_afdeling_nid',
        'delta' => -1,
      ),
    ); /* WAS: '' */
    $data['calendar']->display['page_1']->display_options['arguments']['date_argument']['date_fields']['field_data_field_os2sub_event_date.field_os2sub_event_date_value'] = 'field_data_field_os2sub_event_date.field_os2sub_event_date_value'; /* WAS: '' */
    $data['calendar']->display['page_1']->display_options['arguments']['date_argument']['default_argument_type'] = 'date'; /* WAS: '' */
    $data['calendar']->display['page_1']->display_options['arguments']['date_argument']['exception'] = array(
      'title' => 'Alle',
    ); /* WAS: '' */
    $data['calendar']->display['page_1']->display_options['arguments']['date_argument']['granularity_reset'] = 0; /* WAS: '' */
    $data['calendar']->display['page_1']->display_options['arguments']['field_os2sub_event_section_nid'] = array(
      'id' => 'field_os2sub_event_section_nid',
      'table' => 'field_data_field_os2sub_event_section',
      'field' => 'field_os2sub_event_section_nid',
      'relationship' => 'field_afdeling_nid',
      'exception' => array(
        'title' => 'Alle',
      ),
      'default_argument_type' => 'fixed',
      'summary' => array(
        'number_of_records' => 0,
        'format' => 'default_summary',
      ),
      'summary_options' => array(
        'items_per_page' => 25,
      ),
    ); /* WAS: '' */
    $data['calendar']->display['page_1']->display_options['pager']['options']['skip_empty_pages'] = 0; /* WAS: '' */
    $data['calendar']->display['page_2']->display_options['arguments']['date_argument']['default_argument_type'] = 'date'; /* WAS: '' */
    $data['calendar']->display['page_3']->display_options['arguments']['date_argument']['default_argument_type'] = 'date'; /* WAS: '' */
    $data['calendar']->display['page']->display_options['arguments']['date_argument']['default_argument_type'] = 'date'; /* WAS: '' */
    unset($data['calendar']->display['page_1']->display_options['arguments']['date_argument']['summary']);
    unset($data['calendar']->display['page_1']->display_options['pager']['options']['link_format']);
  }
  if (isset($data['frontpage'])) {
    $data['frontpage']->display['default']->display_options['use_more_always'] = FALSE; /* WAS: '' */
    unset($data['frontpage']->display['default']->display_options['access']['perm']);
    unset($data['frontpage']->display['default']->display_options['row_options']);
  }
  if (isset($data['os2sub_nyheder'])) {
    $data['os2sub_nyheder']->display['block']->display_options['css_class'] = 'pane-seniorportalen-nyhedsliste'; /* WAS: '' */
    $data['os2sub_nyheder']->display['block']->display_options['defaults']['css_class'] = FALSE; /* WAS: '' */
    $data['os2sub_nyheder']->display['block']->display_options['defaults']['footer'] = FALSE; /* WAS: '' */
    $data['os2sub_nyheder']->display['block']->display_options['footer'] = array(
      'area' => array(
        'id' => 'area',
        'table' => 'views',
        'field' => 'area',
        'content' => '<p></p>
        <hr />
        <p></p>
        <a class="btn btn-primary" href="/nyheder">Se flere nyheder</a>',
        'format' => 'full_html',
      ),
    ); /* WAS: '' */
    $data['os2sub_nyheder']->display['block']->display_options['style_options'] = array(
      'default_row_class' => FALSE,
    ); /* WAS: '' */
    $data['os2sub_nyheder']->display['block']->display_options['style_plugin'] = 'list'; /* WAS: 'default' */
    $data['os2sub_nyheder']->display['default']->display_options['fields']['title']['element_default_classes'] = FALSE; /* WAS: '' */
    $data['os2sub_nyheder']->display['default']->display_options['fields']['title']['element_label_colon'] = FALSE; /* WAS: '' */
    $data['os2sub_nyheder']->display['default']->display_options['fields']['title']['element_type'] = 0; /* WAS: '' */
    $data['os2sub_nyheder']->display['default']->display_options['fields']['title']['element_wrapper_type'] = 0; /* WAS: '' */
    $data['os2sub_nyheder']->display['default']->display_options['footer'] = array(
      'area' => array(
        'id' => 'area',
        'table' => 'views',
        'field' => 'area',
      ),
    ); /* WAS: '' */
    $data['os2sub_nyheder']->display['default']->display_options['title'] = 'Nyheder'; /* WAS: 'OS2sub Nyheder' */
    $data['os2sub_nyheder']->display['page_1'] = unserialize('O:13:"views_display":7:{s:15:"display_options";a:4:{s:5:"query";a:2:{s:4:"type";s:11:"views_query";s:7:"options";a:0:{}}s:8:"defaults";a:1:{s:5:"title";b:0;}s:5:"title";s:11:"Nyhedsarkiv";s:4:"path";s:13:"nyheder/arkiv";}s:8:"db_table";s:13:"views_display";s:3:"vid";i:0;s:2:"id";s:6:"page_1";s:13:"display_title";s:4:"Side";s:14:"display_plugin";s:4:"page";s:8:"position";i:0;}'); /* WAS: '' */
  }
}

/**
 * Implements hook_image_default_styles().
 */
function seniorportalen_image_default_styles() {
  $styles = array();

  // Exported image style: seniorspot.
  $styles['seniorspot'] = array(
    'label' => 'seniorspot',
    'effects' => array(
      3 => array(
        'name' => 'epsacrop_crop_reuse',
        'data' => array(
          'jcrop_reuse' => 'os2web_spotbox_image',
        ),
        'weight' => -10,
      ),
      2 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 300,
          'height' => 150,
        ),
        'weight' => -9,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function seniorportalen_node_info() {
  $items = array(
    'kalenderside' => array(
      'name' => t('Kalenderside'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}

/**
 * Implements hook_default_search_api_page().
 */
function seniorportalen_default_search_api_page() {
  $items = array();
  $items['soegning'] = entity_import('search_api_page', '{
    "index_id" : "default_fuzzysearch_index",
    "path" : "soegning",
    "name" : "Soegning",
    "machine_name" : "soegning",
    "description" : null,
    "options" : {
      "mode" : "terms",
      "fields" : [],
      "per_page" : "20",
      "get_per_page" : 0,
      "result_page_search_form" : 1,
      "view_mode" : "search_api_page_result",
      "language_filter" : []
    },
    "enabled" : "1"
  }');
  return $items;
}
