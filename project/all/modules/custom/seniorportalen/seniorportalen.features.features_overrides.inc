<?php
/**
 * @file
 * seniorportalen.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function seniorportalen_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: image
  $overrides["image.gallery-thumb.effects|0|data|height"] = 140;
  $overrides["image.gallery-thumb.effects|0|data|width"] = 180;

  // Exported overrides for: page_manager_handlers
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-3f48580b-c575-4de6-96de-8116b1d24dad|position"] = 1;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-41031fb2-e491-4643-95ee-69690e6c421f"] = (object) array(
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
    );
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d|position"] = 2;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-72928d41-013b-4890-8ecf-8777b9f87636|panel"] = 'sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-72928d41-013b-4890-8ecf-8777b9f87636|position"] = 4;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9|panel"] = 'sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9|position"] = 2;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65|panel"] = 'sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65|position"] = 5;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-b398e1ac-858e-43e3-872f-2d6f3524454d|panel"] = 'sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-b398e1ac-858e-43e3-872f-2d6f3524454d|position"] = 6;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-b93cd7ee-4cc8-4733-9847-06b403098f00|panel"] = 'sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-b93cd7ee-4cc8-4733-9847-06b403098f00|position"] = 1;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c|panel"] = 'sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c|shown"] = FALSE;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51|panel"] = 'sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|content|new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51|position"] = 3;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|layout"] = 'content-with-right-sidebar';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|panels|content|0"] = 'new-41031fb2-e491-4643-95ee-69690e6c421f';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|panels|content|1"] = 'new-3f48580b-c575-4de6-96de-8116b1d24dad';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|panels|content|2"] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|panels|sidebar"] = array(
    0 => 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c',
    1 => 'new-b93cd7ee-4cc8-4733-9847-06b403098f00',
    2 => 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9',
    3 => 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51',
    4 => 'new-72928d41-013b-4890-8ecf-8777b9f87636',
    5 => 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65',
    6 => 'new-b398e1ac-858e-43e3-872f-2d6f3524454d',
  );
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|panels|sidebar-left"]["DELETED"] = TRUE;
  $overrides["page_manager_handlers.node_view__nyhed.conf|display|panels|sidebar-right"]["DELETED"] = TRUE;
  $overrides["page_manager_handlers.node_view__panel_context_be5717b5-534a-450a-93f5-3bf4934248b0.weight"] = -24;

  // Exported overrides for: page_manager_pages
  $overrides["page_manager_pages.forside.default_handlers|page_forside__panel_context_5c441894-8350-417e-9a15-c48ae5410851|weight"] = -29;
  $overrides["page_manager_pages.forside.default_handlers|page_forside__panel_context_a5369518-d815-492e-8094-6d4cfac42185"] = (object) array(
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
    );

  // Exported overrides for: views_view
  $overrides["views_view.calendar.display|block_1|display_options|arguments|date_argument|default_argument_type"] = 'date';
  $overrides["views_view.calendar.display|default|display_options|filters|type|value|os2sub_event"] = 'os2sub_event';
  $overrides["views_view.calendar.display|default|display_options|relationships"] = array(
    'field_afdeling_nid' => array(
      'id' => 'field_afdeling_nid',
      'table' => 'field_data_field_afdeling',
      'field' => 'field_afdeling_nid',
      'delta' => -1,
    ),
  );
  $overrides["views_view.calendar.display|page_1|display_options|arguments|date_argument|date_fields|field_data_field_os2sub_event_date.field_os2sub_event_date_value"] = 'field_data_field_os2sub_event_date.field_os2sub_event_date_value';
  $overrides["views_view.calendar.display|page_1|display_options|arguments|date_argument|default_argument_type"] = 'date';
  $overrides["views_view.calendar.display|page_1|display_options|arguments|date_argument|exception"] = array(
    'title' => 'Alle',
  );
  $overrides["views_view.calendar.display|page_1|display_options|arguments|date_argument|granularity_reset"] = 0;
  $overrides["views_view.calendar.display|page_1|display_options|arguments|date_argument|summary"]["DELETED"] = TRUE;
  $overrides["views_view.calendar.display|page_1|display_options|arguments|field_os2sub_event_section_nid"] = array(
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
  );
  $overrides["views_view.calendar.display|page_1|display_options|pager|options|link_format"]["DELETED"] = TRUE;
  $overrides["views_view.calendar.display|page_1|display_options|pager|options|skip_empty_pages"] = 0;
  $overrides["views_view.calendar.display|page_2|display_options|arguments|date_argument|default_argument_type"] = 'date';
  $overrides["views_view.calendar.display|page_3|display_options|arguments|date_argument|default_argument_type"] = 'date';
  $overrides["views_view.calendar.display|page|display_options|arguments|date_argument|default_argument_type"] = 'date';
  $overrides["views_view.frontpage.display|default|display_options|access|perm"]["DELETED"] = TRUE;
  $overrides["views_view.frontpage.display|default|display_options|row_options"]["DELETED"] = TRUE;
  $overrides["views_view.frontpage.display|default|display_options|use_more_always"] = FALSE;
  $overrides["views_view.os2sub_nyheder.display|block|display_options|css_class"] = 'pane-seniorportalen-nyhedsliste';
  $overrides["views_view.os2sub_nyheder.display|block|display_options|defaults|css_class"] = FALSE;
  $overrides["views_view.os2sub_nyheder.display|block|display_options|defaults|footer"] = FALSE;
  $overrides["views_view.os2sub_nyheder.display|block|display_options|footer"] = array(
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
  );
  $overrides["views_view.os2sub_nyheder.display|block|display_options|style_options"] = array(
    'default_row_class' => FALSE,
  );
  $overrides["views_view.os2sub_nyheder.display|block|display_options|style_plugin"] = 'list';
  $overrides["views_view.os2sub_nyheder.display|default|display_options|fields|title|element_default_classes"] = FALSE;
  $overrides["views_view.os2sub_nyheder.display|default|display_options|fields|title|element_label_colon"] = FALSE;
  $overrides["views_view.os2sub_nyheder.display|default|display_options|fields|title|element_type"] = 0;
  $overrides["views_view.os2sub_nyheder.display|default|display_options|fields|title|element_wrapper_type"] = 0;
  $overrides["views_view.os2sub_nyheder.display|default|display_options|footer"] = array(
    'area' => array(
      'id' => 'area',
      'table' => 'views',
      'field' => 'area',
    ),
  );
  $overrides["views_view.os2sub_nyheder.display|default|display_options|title"] = 'Nyheder';
  $overrides["views_view.os2sub_nyheder.display|page_1"] = unserialize('O:13:"views_display":7:{s:15:"display_options";a:4:{s:5:"query";a:2:{s:4:"type";s:11:"views_query";s:7:"options";a:0:{}}s:8:"defaults";a:1:{s:5:"title";b:0;}s:5:"title";s:11:"Nyhedsarkiv";s:4:"path";s:13:"nyheder/arkiv";}s:8:"db_table";s:13:"views_display";s:3:"vid";i:0;s:2:"id";s:6:"page_1";s:13:"display_title";s:4:"Side";s:14:"display_plugin";s:4:"page";s:8:"position";i:0;}');

 return $overrides;
}
