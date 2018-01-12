<?php
/**
 * @file
 * kultunaut_import.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function kultunaut_import_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'add_to_calendar';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Add to calendar';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'mere';
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Udfør';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_label'] = 'Antal elementer';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_options_all_label'] = '- Alle -';
  $handler->display->display_options['pager']['options']['expose']['offset_label'] = 'Forskydning';
  $handler->display->display_options['pager']['options']['tags']['first'] = '« første';
  $handler->display->display_options['pager']['options']['tags']['previous'] = '‹ forrige';
  $handler->display->display_options['pager']['options']['tags']['next'] = 'næste ›';
  $handler->display->display_options['pager']['options']['tags']['last'] = 'sidste »';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Content: Venue (field_os2web_kulturnaut_venue) */
  $handler->display->display_options['relationships']['field_os2web_kulturnaut_venue_tid']['id'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['relationships']['field_os2web_kulturnaut_venue_tid']['table'] = 'field_data_field_os2web_kulturnaut_venue';
  $handler->display->display_options['relationships']['field_os2web_kulturnaut_venue_tid']['field'] = 'field_os2web_kulturnaut_venue_tid';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Beskrivelse */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_descrip']['id'] = 'field_os2web_kulturnaut_descrip';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_descrip']['table'] = 'field_data_field_os2web_kulturnaut_descrip';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_descrip']['field'] = 'field_os2web_kulturnaut_descrip';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_descrip']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_descrip']['alter']['strip_tags'] = TRUE;
  /* Field: Content: Dato */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['id'] = 'field_os2web_kulturnaut_date';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['table'] = 'field_data_field_os2web_kulturnaut_date';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['field'] = 'field_os2web_kulturnaut_date';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['alter']['text'] = '[field_os2web_kulturnaut_date-value]';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date']['settings'] = array(
    'format_type' => 'outlook',
    'custom_date_format' => '',
    'fromto' => 'value',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
    'show_remaining_days' => 0,
  );
  /* Field: Slutdato */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['id'] = 'field_os2web_kulturnaut_date_1';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['table'] = 'field_data_field_os2web_kulturnaut_date';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['field'] = 'field_os2web_kulturnaut_date';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['ui_name'] = 'Slutdato';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['alter']['text'] = '[field_os2web_kulturnaut_date_1-value2] ';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_date_1']['settings'] = array(
    'format_type' => 'outlook',
    'custom_date_format' => '',
    'fromto' => 'value2',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
    'show_remaining_days' => 0,
  );
  /* Field: Content: Lang Beskrivelse */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_longdesc']['id'] = 'field_os2web_kulturnaut_longdesc';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_longdesc']['table'] = 'field_data_field_os2web_kulturnaut_longdesc';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_longdesc']['field'] = 'field_os2web_kulturnaut_longdesc';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_longdesc']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_longdesc']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_longdesc']['element_label_colon'] = FALSE;
  /* Field: Content: Sted homepage */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_shomepag']['id'] = 'field_os2web_kulturnaut_shomepag';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_shomepag']['table'] = 'field_data_field_os2web_kulturnaut_shomepag';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_shomepag']['field'] = 'field_os2web_kulturnaut_shomepag';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_shomepag']['exclude'] = TRUE;
  /* Field: Taxonomy term: Address */
  $handler->display->display_options['fields']['field_os2web_kult_venue_address']['id'] = 'field_os2web_kult_venue_address';
  $handler->display->display_options['fields']['field_os2web_kult_venue_address']['table'] = 'field_data_field_os2web_kult_venue_address';
  $handler->display->display_options['fields']['field_os2web_kult_venue_address']['field'] = 'field_os2web_kult_venue_address';
  $handler->display->display_options['fields']['field_os2web_kult_venue_address']['relationship'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['fields']['field_os2web_kult_venue_address']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_kult_venue_address']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kult_venue_address']['element_label_colon'] = FALSE;
  /* Field: Content: Sted Adresse */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_saddress']['id'] = 'field_os2web_kulturnaut_saddress';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_saddress']['table'] = 'field_data_field_os2web_kulturnaut_saddress';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_saddress']['field'] = 'field_os2web_kulturnaut_saddress';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_saddress']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_saddress']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_saddress']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_saddress']['empty'] = '[field_os2web_kult_venue_address]';
  /* Field: Content: Sted arrang */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sarrang']['id'] = 'field_os2web_kulturnaut_sarrang';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sarrang']['table'] = 'field_data_field_os2web_kulturnaut_sarrang';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sarrang']['field'] = 'field_os2web_kulturnaut_sarrang';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sarrang']['exclude'] = TRUE;
  /* Field: Content: Sted navn */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sname']['id'] = 'field_os2web_kulturnaut_sname';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sname']['table'] = 'field_data_field_os2web_kulturnaut_sname';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sname']['field'] = 'field_os2web_kulturnaut_sname';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_sname']['exclude'] = TRUE;
  /* Field: Content: Sted Postby */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_scity']['id'] = 'field_os2web_kulturnaut_scity';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_scity']['table'] = 'field_data_field_os2web_kulturnaut_scity';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_scity']['field'] = 'field_os2web_kulturnaut_scity';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_scity']['exclude'] = TRUE;
  /* Field: Content: Venue */
  $handler->display->display_options['fields']['field_os2web_kulturnaut_venue']['id'] = 'field_os2web_kulturnaut_venue';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_venue']['table'] = 'field_data_field_os2web_kulturnaut_venue';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_venue']['field'] = 'field_os2web_kulturnaut_venue';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_venue']['label'] = 'Sted';
  $handler->display->display_options['fields']['field_os2web_kulturnaut_venue']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_kulturnaut_venue']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Global: Custom text */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['label'] = '';
  $handler->display->display_options['fields']['nothing']['alter']['text'] = '<div title="Tilføj til kalender" class="addthisevent addtocalendar atc-style-blue btn btn-default">
	    Tilføj til kalender
	    <span class="start">[field_os2web_kulturnaut_date]</span>
	    <span class="end">[field_os2web_kulturnaut_date_1]</span>
	    <span class="timezone">Europe/Copenhagen</span>
	    <span class="title">[title]</span>
	    <span class="description">[field_os2web_kulturnaut_longdesc] [field_os2web_kulturnaut_descrip]</span>
	    <span class="location">[field_os2web_kulturnaut_saddress]</span>
	    <span class="organizer">[field_os2web_kulturnaut_venue]</span>
	    <span class="organizer_email">detskeri@fredericia.dk</span>
	    <span class="all_day_event">false</span>
	</div>';
  $handler->display->display_options['fields']['nothing']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
  );

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['argument_input'] = array(
    'nid' => array(
      'type' => 'context',
      'context' => 'entity:node.nid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Nid',
    ),
  );
  $translatables['add_to_calendar'] = array(
    t('Master'),
    t('mere'),
    t('Udfør'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Antal elementer'),
    t('- Alle -'),
    t('Forskydning'),
    t('« første'),
    t('‹ forrige'),
    t('næste ›'),
    t('sidste »'),
    t('term from field_os2web_kulturnaut_venue'),
    t('Beskrivelse'),
    t('Dato'),
    t('[field_os2web_kulturnaut_date-value]'),
    t('[field_os2web_kulturnaut_date_1-value2] '),
    t('Sted homepage'),
    t('[field_os2web_kult_venue_address]'),
    t('Sted arrang'),
    t('Sted navn'),
    t('Sted Postby'),
    t('Sted'),
    t('<div title="Tilføj til kalender" class="addthisevent addtocalendar atc-style-blue btn btn-default">
	    Tilføj til kalender
	    <span class="start">[field_os2web_kulturnaut_date]</span>
	    <span class="end">[field_os2web_kulturnaut_date_1]</span>
	    <span class="timezone">Europe/Copenhagen</span>
	    <span class="title">[title]</span>
	    <span class="description">[field_os2web_kulturnaut_longdesc] [field_os2web_kulturnaut_descrip]</span>
	    <span class="location">[field_os2web_kulturnaut_saddress]</span>
	    <span class="organizer">[field_os2web_kulturnaut_venue]</span>
	    <span class="organizer_email">detskeri@fredericia.dk</span>
	    <span class="all_day_event">false</span>
	</div>'),
    t('Alle'),
    t('Content pane'),
    t('more'),
    t('View panes'),
  );
  $export['add_to_calendar'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_andre_events';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'oplevsyddjurs andre events';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Andre events';
  $handler->display->display_options['css_class'] = 'row row--equal-height-columns';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '2';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-xs-12 col-md-6';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'teaser';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Has taxonomy term ID */
  $handler->display->display_options['arguments']['tid']['id'] = 'tid';
  $handler->display->display_options['arguments']['tid']['table'] = 'taxonomy_index';
  $handler->display->display_options['arguments']['tid']['field'] = 'tid';
  $handler->display->display_options['arguments']['tid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['tid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['tid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['tid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['tid']['break_phrase'] = TRUE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['not'] = TRUE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
  );

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['argument_input'] = array(
    'tid' => array(
      'type' => 'context',
      'context' => 'terms.tids',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Har taksonomiterm ID',
    ),
  );
  $translatables['oplevsyddjurs_andre_events'] = array(
    t('Master'),
    t('Andre events'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Alle'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_andre_events'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_forside_banner';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'oplevsyddjurs forside banner';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'views_bootstrap_carousel_plugin_style';
  $handler->display->display_options['style_options']['interval'] = '5000';
  $handler->display->display_options['style_options']['navigation'] = 1;
  $handler->display->display_options['style_options']['indicators'] = 1;
  $handler->display->display_options['style_options']['pause'] = 1;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'teaser';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'banner' => 'banner',
  );
  /* Filter criterion: Content: Promoted to front page */
  $handler->display->display_options['filters']['promote']['id'] = 'promote';
  $handler->display->display_options['filters']['promote']['table'] = 'node';
  $handler->display->display_options['filters']['promote']['field'] = 'promote';
  $handler->display->display_options['filters']['promote']['value'] = '1';

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $translatables['oplevsyddjurs_forside_banner'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_forside_banner'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_forside_kalender';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'oplevsyddjurs forside kalender';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['css_class'] = 'row row--equal-height-columns';
  $handler->display->display_options['use_ajax'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'better_exposed_filters';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Vælg';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['expose_sort_order'] = FALSE;
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['exposed_form']['options']['bef'] = array(
    'general' => array(
      'input_required' => 0,
      'text_input_required' => array(
        'text_input_required' => array(
          'value' => 'Vælg et filter og klik på Anvend for at se resultater',
          'format' => 'plain_text',
        ),
      ),
      'allow_secondary' => 0,
      'secondary_label' => 'Avancerede indstillinger',
      'secondary_collapse_override' => '0',
    ),
    'date_filter' => array(
      'bef_format' => 'default',
      'more_options' => array(
        'autosubmit' => 0,
        'is_secondary' => 0,
        'any_label' => '',
        'bef_filter_description' => '',
        'tokens' => array(
          'available' => array(
            0 => 'global_types',
          ),
        ),
        'rewrite' => array(
          'filter_rewrite_values' => '',
        ),
        'datepicker_options' => '',
      ),
    ),
    'term_node_tid_depth' => array(
      'bef_format' => 'bef',
      'more_options' => array(
        'bef_select_all_none' => 0,
        'bef_collapsible' => 0,
        'autosubmit' => 0,
        'is_secondary' => 0,
        'any_label' => '',
        'bef_filter_description' => '',
        'tokens' => array(
          'available' => array(
            0 => 'global_types',
            1 => 'vocabulary',
          ),
        ),
        'rewrite' => array(
          'filter_rewrite_values' => '',
        ),
      ),
    ),
  );
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '6';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_label'] = 'Antal elementer';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_options_all_label'] = '- Alle -';
  $handler->display->display_options['pager']['options']['expose']['offset_label'] = 'Forskydning';
  $handler->display->display_options['pager']['options']['tags']['first'] = '« første';
  $handler->display->display_options['pager']['options']['tags']['previous'] = '‹ forrige';
  $handler->display->display_options['pager']['options']['tags']['next'] = 'næste ›';
  $handler->display->display_options['pager']['options']['tags']['last'] = 'sidste »';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-xs-12 col-sm-6 col-md-4';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'node';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
  );
  /* Filter criterion: Date: Date (node) */
  $handler->display->display_options['filters']['date_filter']['id'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['table'] = 'node';
  $handler->display->display_options['filters']['date_filter']['field'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['operator'] = 'between';
  $handler->display->display_options['filters']['date_filter']['exposed'] = TRUE;
  $handler->display->display_options['filters']['date_filter']['expose']['operator_id'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['operator'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['identifier'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    5 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['date_filter']['form_type'] = 'date_popup';
  $handler->display->display_options['filters']['date_filter']['default_date'] = 'today';
  $handler->display->display_options['filters']['date_filter']['default_to_date'] = '+1 month';
  $handler->display->display_options['filters']['date_filter']['year_range'] = '-0:+10';
  $handler->display->display_options['filters']['date_filter']['date_fields'] = array(
    'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value' => 'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value',
  );
  /* Filter criterion: Content: Has taxonomy terms (with depth) */
  $handler->display->display_options['filters']['term_node_tid_depth']['id'] = 'term_node_tid_depth';
  $handler->display->display_options['filters']['term_node_tid_depth']['table'] = 'node';
  $handler->display->display_options['filters']['term_node_tid_depth']['field'] = 'term_node_tid_depth';
  $handler->display->display_options['filters']['term_node_tid_depth']['value'] = array(
    98 => '98',
    83 => '83',
    116 => '116',
    104 => '104',
  );
  $handler->display->display_options['filters']['term_node_tid_depth']['exposed'] = TRUE;
  $handler->display->display_options['filters']['term_node_tid_depth']['expose']['operator_id'] = 'term_node_tid_depth_op';
  $handler->display->display_options['filters']['term_node_tid_depth']['expose']['operator'] = 'term_node_tid_depth_op';
  $handler->display->display_options['filters']['term_node_tid_depth']['expose']['identifier'] = 'kat';
  $handler->display->display_options['filters']['term_node_tid_depth']['expose']['multiple'] = TRUE;
  $handler->display->display_options['filters']['term_node_tid_depth']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    5 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['term_node_tid_depth']['expose']['reduce'] = TRUE;
  $handler->display->display_options['filters']['term_node_tid_depth']['type'] = 'select';
  $handler->display->display_options['filters']['term_node_tid_depth']['vocabulary'] = 'os2web_taxonomies_tax_places';
  $handler->display->display_options['filters']['term_node_tid_depth']['error_message'] = FALSE;
  $handler->display->display_options['filters']['term_node_tid_depth']['depth'] = '4';

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['exposed_block'] = TRUE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Dato -  start date (field_os2web_kulturnaut_date) */
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['id'] = 'field_os2web_kulturnaut_date_value';
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['table'] = 'field_data_field_os2web_kulturnaut_date';
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['field'] = 'field_os2web_kulturnaut_date_value';
  $handler->display->display_options['allow']['use_pager'] = 'use_pager';
  $handler->display->display_options['allow']['items_per_page'] = 'items_per_page';
  $handler->display->display_options['allow']['offset'] = 0;
  $handler->display->display_options['allow']['link_to_view'] = 0;
  $handler->display->display_options['allow']['more_link'] = 0;
  $handler->display->display_options['allow']['path_override'] = 0;
  $handler->display->display_options['allow']['title_override'] = 0;
  $handler->display->display_options['allow']['exposed_form'] = 0;
  $handler->display->display_options['allow']['fields_override'] = 0;
  $translatables['oplevsyddjurs_forside_kalender'] = array(
    t('Master'),
    t('more'),
    t('Vælg'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Vælg et filter og klik på Anvend for at se resultater'),
    t('Avancerede indstillinger'),
    t('Antal elementer'),
    t('- Alle -'),
    t('Forskydning'),
    t('« første'),
    t('‹ forrige'),
    t('næste ›'),
    t('sidste »'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_forside_kalender'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_node_banner';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'oplevsyddjurs node banner';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'views_bootstrap_carousel_plugin_style';
  $handler->display->display_options['style_options']['interval'] = '5000';
  $handler->display->display_options['style_options']['navigation'] = 1;
  $handler->display->display_options['style_options']['indicators'] = 1;
  $handler->display->display_options['style_options']['pause'] = 1;
  $handler->display->display_options['row_plugin'] = 'views_bootstrap_carousel_plugin_rows';
  $handler->display->display_options['row_options']['image'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['row_options']['title'] = 'field_banner_headline';
  $handler->display->display_options['row_options']['description'] = 'field_banner_text';
  /* Relationship: Content: Venue (field_os2web_kulturnaut_venue) */
  $handler->display->display_options['relationships']['field_os2web_kulturnaut_venue_tid']['id'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['relationships']['field_os2web_kulturnaut_venue_tid']['table'] = 'field_data_field_os2web_kulturnaut_venue';
  $handler->display->display_options['relationships']['field_os2web_kulturnaut_venue_tid']['field'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['relationships']['field_os2web_kulturnaut_venue_tid']['label'] = 'term fra field_os2web_kulturnaut_venue';
  /* Relationship: Taxonomy term: Parent term */
  $handler->display->display_options['relationships']['parent']['id'] = 'parent';
  $handler->display->display_options['relationships']['parent']['table'] = 'taxonomy_term_hierarchy';
  $handler->display->display_options['relationships']['parent']['field'] = 'parent';
  $handler->display->display_options['relationships']['parent']['relationship'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['relationships']['parent']['label'] = 'Overordnet element';
  /* Field: Taxonomy term: Banner */
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['id'] = 'field_os2web_base_field_banner_1';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['table'] = 'field_data_field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['field'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['relationship'] = 'parent';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['element_type'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['settings'] = array(
    'image_style' => 'os2sub_banner',
    'image_link' => '',
  );
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['delta_limit'] = '1';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_banner_1']['separator'] = ' ';
  /* Field: Field: Banner overskrift */
  $handler->display->display_options['fields']['field_banner_headline_1']['id'] = 'field_banner_headline_1';
  $handler->display->display_options['fields']['field_banner_headline_1']['table'] = 'field_data_field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline_1']['field'] = 'field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline_1']['relationship'] = 'parent';
  $handler->display->display_options['fields']['field_banner_headline_1']['label'] = '';
  $handler->display->display_options['fields']['field_banner_headline_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_banner_headline_1']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_banner_headline_1']['element_class'] = 'headline';
  $handler->display->display_options['fields']['field_banner_headline_1']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_banner_headline_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_banner_headline_1']['element_default_classes'] = FALSE;
  /* Field: Field: Banner text */
  $handler->display->display_options['fields']['field_banner_text_1']['id'] = 'field_banner_text_1';
  $handler->display->display_options['fields']['field_banner_text_1']['table'] = 'field_data_field_banner_text';
  $handler->display->display_options['fields']['field_banner_text_1']['field'] = 'field_banner_text';
  $handler->display->display_options['fields']['field_banner_text_1']['relationship'] = 'parent';
  $handler->display->display_options['fields']['field_banner_text_1']['label'] = '';
  $handler->display->display_options['fields']['field_banner_text_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_banner_text_1']['element_type'] = '0';
  $handler->display->display_options['fields']['field_banner_text_1']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_banner_text_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_banner_text_1']['element_default_classes'] = FALSE;
  /* Field: Taxonomy term: Banner */
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['id'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['table'] = 'field_data_field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['field'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['relationship'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['element_type'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['empty'] = '[field_os2web_base_field_banner_1]';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['settings'] = array(
    'image_style' => 'os2sub_banner',
    'image_link' => '',
  );
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['delta_limit'] = '1';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['separator'] = '';
  /* Field: Field: Banner overskrift */
  $handler->display->display_options['fields']['field_banner_headline']['id'] = 'field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['table'] = 'field_data_field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['field'] = 'field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['relationship'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['fields']['field_banner_headline']['label'] = '';
  $handler->display->display_options['fields']['field_banner_headline']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_banner_headline']['element_class'] = 'headline';
  $handler->display->display_options['fields']['field_banner_headline']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_banner_headline']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_banner_headline']['empty'] = '[field_banner_headline_1]';
  /* Field: Field: Banner text */
  $handler->display->display_options['fields']['field_banner_text']['id'] = 'field_banner_text';
  $handler->display->display_options['fields']['field_banner_text']['table'] = 'field_data_field_banner_text';
  $handler->display->display_options['fields']['field_banner_text']['field'] = 'field_banner_text';
  $handler->display->display_options['fields']['field_banner_text']['relationship'] = 'field_os2web_kulturnaut_venue_tid';
  $handler->display->display_options['fields']['field_banner_text']['label'] = '';
  $handler->display->display_options['fields']['field_banner_text']['element_type'] = '0';
  $handler->display->display_options['fields']['field_banner_text']['element_label_type'] = '0';
  $handler->display->display_options['fields']['field_banner_text']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_banner_text']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_banner_text']['empty'] = '[field_banner_text_1]';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
  );

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['argument_input'] = array(
    'nid' => array(
      'type' => 'context',
      'context' => 'entity:node.nid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Nid',
    ),
  );
  $translatables['oplevsyddjurs_node_banner'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('term fra field_os2web_kulturnaut_venue'),
    t('Overordnet element'),
    t('[field_os2web_base_field_banner_1]'),
    t('[field_banner_headline_1]'),
    t('[field_banner_text_1]'),
    t('Alle'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_node_banner'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_promoted_frontpage';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'taxonomy_term_data';
  $view->human_name = 'oplevsyddjurs promoted frontpage';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['css_class'] = 'row';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'better_exposed_filters';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Udfør';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['exposed_form']['options']['bef'] = array(
    'general' => array(
      'input_required' => 0,
      'text_input_required' => array(
        'text_input_required' => array(
          'value' => 'Vælg et filter og klik på Anvend for at se resultater',
          'format' => 'full_html',
        ),
      ),
      'allow_secondary' => 0,
      'secondary_label' => 'Avancerede indstillinger',
      'secondary_collapse_override' => '0',
    ),
  );
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '2';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-xs-12 col-sm-6';
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'teaser';
  /* Relationship: Entityqueue: Taxonomy term Queue */
  $handler->display->display_options['relationships']['entityqueue_relationship']['id'] = 'entityqueue_relationship';
  $handler->display->display_options['relationships']['entityqueue_relationship']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['relationships']['entityqueue_relationship']['field'] = 'entityqueue_relationship';
  $handler->display->display_options['relationships']['entityqueue_relationship']['label'] = 'Ord i ordforråd Queue';
  $handler->display->display_options['relationships']['entityqueue_relationship']['required'] = TRUE;
  $handler->display->display_options['relationships']['entityqueue_relationship']['limit'] = 1;
  $handler->display->display_options['relationships']['entityqueue_relationship']['queues'] = array(
    'promoted_venues' => 'promoted_venues',
  );
  /* Field: Taxonomy term: Name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['label'] = '';
  $handler->display->display_options['fields']['name']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['name']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['name']['link_to_taxonomy'] = TRUE;
  /* Sort criterion: Global: Random */
  $handler->display->display_options['sorts']['random']['id'] = 'random';
  $handler->display->display_options['sorts']['random']['table'] = 'views';
  $handler->display->display_options['sorts']['random']['field'] = 'random';
  /* Filter criterion: Taxonomy vocabulary: Machine name */
  $handler->display->display_options['filters']['machine_name']['id'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['table'] = 'taxonomy_vocabulary';
  $handler->display->display_options['filters']['machine_name']['field'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['value'] = array(
    'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
  );

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['allow']['use_pager'] = 0;
  $handler->display->display_options['allow']['items_per_page'] = 0;
  $handler->display->display_options['allow']['offset'] = 0;
  $handler->display->display_options['allow']['link_to_view'] = 0;
  $handler->display->display_options['allow']['more_link'] = 0;
  $handler->display->display_options['allow']['path_override'] = 0;
  $handler->display->display_options['allow']['title_override'] = 0;
  $handler->display->display_options['allow']['exposed_form'] = 'exposed_form';
  $handler->display->display_options['allow']['fields_override'] = 0;
  $handler->display->display_options['argument_input'] = array(
    'tid' => array(
      'type' => 'user',
      'context' => 'entity:search_api_autocomplete_search.enabled',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Ord i ordforråd: Term ID',
    ),
  );
  $translatables['oplevsyddjurs_promoted_frontpage'] = array(
    t('Master'),
    t('more'),
    t('Udfør'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Vælg et filter og klik på Anvend for at se resultater'),
    t('Avancerede indstillinger'),
    t('Ord i ordforråd Queue'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_promoted_frontpage'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_term_banner';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'taxonomy_term_data';
  $view->human_name = 'oplevsyddjurs term banner';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'views_bootstrap_carousel_plugin_style';
  $handler->display->display_options['style_options']['interval'] = '5000';
  $handler->display->display_options['style_options']['navigation'] = 1;
  $handler->display->display_options['style_options']['indicators'] = 1;
  $handler->display->display_options['style_options']['pause'] = 1;
  $handler->display->display_options['row_plugin'] = 'views_bootstrap_carousel_plugin_rows';
  $handler->display->display_options['row_options']['image'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['row_options']['title'] = 'field_banner_headline';
  $handler->display->display_options['row_options']['description'] = 'field_banner_text';
  /* Field: Taxonomy term: Name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['label'] = '';
  $handler->display->display_options['fields']['name']['exclude'] = TRUE;
  $handler->display->display_options['fields']['name']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['name']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['name']['element_label_colon'] = FALSE;
  /* Field: Field: Banner overskrift */
  $handler->display->display_options['fields']['field_banner_headline']['id'] = 'field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['table'] = 'field_data_field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['field'] = 'field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['label'] = '';
  $handler->display->display_options['fields']['field_banner_headline']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_banner_headline']['empty'] = '[name]';
  /* Field: Field: Banner text */
  $handler->display->display_options['fields']['field_banner_text']['id'] = 'field_banner_text';
  $handler->display->display_options['fields']['field_banner_text']['table'] = 'field_data_field_banner_text';
  $handler->display->display_options['fields']['field_banner_text']['field'] = 'field_banner_text';
  $handler->display->display_options['fields']['field_banner_text']['label'] = '';
  $handler->display->display_options['fields']['field_banner_text']['element_label_colon'] = FALSE;
  /* Field: Taxonomy term: Banner */
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['id'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['table'] = 'field_data_field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['field'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['settings'] = array(
    'image_style' => 'oplevbanner',
    'image_link' => '',
  );
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['delta_offset'] = '0';
  /* Contextual filter: Taxonomy term: Term ID */
  $handler->display->display_options['arguments']['tid']['id'] = 'tid';
  $handler->display->display_options['arguments']['tid']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['arguments']['tid']['field'] = 'tid';
  $handler->display->display_options['arguments']['tid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['tid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['tid']['default_argument_type'] = 'taxonomy_tid';
  $handler->display->display_options['arguments']['tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['tid']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Taxonomy vocabulary: Machine name */
  $handler->display->display_options['filters']['machine_name']['id'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['table'] = 'taxonomy_vocabulary';
  $handler->display->display_options['filters']['machine_name']['field'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['value'] = array(
    'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
  );

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['argument_input'] = array(
    'tid' => array(
      'type' => 'context',
      'context' => 'entity:taxonomy_term.tid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Ord i ordforråd: Term ID',
    ),
  );
  $translatables['oplevsyddjurs_term_banner'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('[name]'),
    t('Alle'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_term_banner'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_term_nodes';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'oplevsyddjurs term nodes';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Vælg';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['expose_sort_order'] = FALSE;
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'teaser';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Dato -  start date (field_os2web_kulturnaut_date) */
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['id'] = 'field_os2web_kulturnaut_date_value';
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['table'] = 'field_data_field_os2web_kulturnaut_date';
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['field'] = 'field_os2web_kulturnaut_date_value';
  /* Contextual filter: Content: Has taxonomy term ID (with depth) */
  $handler->display->display_options['arguments']['term_node_tid_depth']['id'] = 'term_node_tid_depth';
  $handler->display->display_options['arguments']['term_node_tid_depth']['table'] = 'node';
  $handler->display->display_options['arguments']['term_node_tid_depth']['field'] = 'term_node_tid_depth';
  $handler->display->display_options['arguments']['term_node_tid_depth']['default_action'] = 'default';
  $handler->display->display_options['arguments']['term_node_tid_depth']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['term_node_tid_depth']['default_argument_type'] = 'taxonomy_tid';
  $handler->display->display_options['arguments']['term_node_tid_depth']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['term_node_tid_depth']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['term_node_tid_depth']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['term_node_tid_depth']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['term_node_tid_depth']['validate']['type'] = 'taxonomy_term';
  $handler->display->display_options['arguments']['term_node_tid_depth']['validate_options']['vocabularies'] = array(
    'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
  );
  $handler->display->display_options['arguments']['term_node_tid_depth']['depth'] = '5';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
  );
  /* Filter criterion: Date: Date (node) */
  $handler->display->display_options['filters']['date_filter']['id'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['table'] = 'node';
  $handler->display->display_options['filters']['date_filter']['field'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['operator'] = 'between';
  $handler->display->display_options['filters']['date_filter']['expose']['operator_id'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['operator'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['identifier'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    5 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['date_filter']['form_type'] = 'date_popup';
  $handler->display->display_options['filters']['date_filter']['default_date'] = 'today';
  $handler->display->display_options['filters']['date_filter']['default_to_date'] = 'today +1 year';
  $handler->display->display_options['filters']['date_filter']['date_fields'] = array(
    'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value' => 'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value',
  );

  /* Display: Teasers */
  $handler = $view->new_display('panel_pane', 'Teasers', 'panel_pane_1');
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['css_class'] = 'row row--equal-height-columns';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-xs-6 col-sm-4 col-lg-3';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'teaser';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['argument_input'] = array(
    'term_node_tid_depth' => array(
      'type' => 'context',
      'context' => 'entity:taxonomy_term.tid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Har taksonomiterm ID (med dybde)',
    ),
  );

  /* Display: List */
  $handler = $view->new_display('panel_pane', 'List', 'panel_pane_2');
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'list';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
  );
  /* Filter criterion: Date: Date (node) */
  $handler->display->display_options['filters']['date_filter']['id'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['table'] = 'node';
  $handler->display->display_options['filters']['date_filter']['field'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['operator'] = '>';
  $handler->display->display_options['filters']['date_filter']['expose']['operator_id'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['operator'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['identifier'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    5 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['date_filter']['form_type'] = 'date_popup';
  $handler->display->display_options['filters']['date_filter']['default_date'] = 'today';
  $handler->display->display_options['filters']['date_filter']['default_to_date'] = 'today +1 year';
  $handler->display->display_options['filters']['date_filter']['date_fields'] = array(
    'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value' => 'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value',
  );
  $handler->display->display_options['allow']['use_pager'] = 0;
  $handler->display->display_options['allow']['items_per_page'] = 0;
  $handler->display->display_options['allow']['offset'] = 0;
  $handler->display->display_options['allow']['link_to_view'] = 0;
  $handler->display->display_options['allow']['more_link'] = 0;
  $handler->display->display_options['allow']['path_override'] = 0;
  $handler->display->display_options['allow']['title_override'] = 'title_override';
  $handler->display->display_options['allow']['exposed_form'] = 0;
  $handler->display->display_options['allow']['fields_override'] = 0;
  $handler->display->display_options['argument_input'] = array(
    'term_node_tid_depth' => array(
      'type' => 'context',
      'context' => 'entity:taxonomy_term.tid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Har taksonomiterm ID (med dybde)',
    ),
  );
  $translatables['oplevsyddjurs_term_nodes'] = array(
    t('Master'),
    t('more'),
    t('Vælg'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('Alle'),
    t('Teasers'),
    t('View panes'),
    t('List'),
  );
  $export['oplevsyddjurs_term_nodes'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_term_nodes_filtered';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'oplevsyddjurs term nodes filtered';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['css_class'] = 'row row--equal-height-columns';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'better_exposed_filters';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Vælg';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['exposed_form']['options']['bef'] = array(
    'general' => array(
      'input_required' => 0,
      'text_input_required' => array(
        'text_input_required' => array(
          'value' => 'Vælg et filter og klik på Anvend for at se resultater',
          'format' => 'full_html',
        ),
      ),
      'allow_secondary' => 0,
      'secondary_label' => 'Avancerede indstillinger',
      'secondary_collapse_override' => '0',
    ),
    'date_filter' => array(
      'bef_format' => 'default',
      'more_options' => array(
        'autosubmit' => 0,
        'is_secondary' => 0,
        'any_label' => '',
        'bef_filter_description' => '',
        'tokens' => array(
          'available' => array(
            0 => 'global_types',
          ),
        ),
        'rewrite' => array(
          'filter_rewrite_values' => '',
        ),
        'datepicker_options' => '',
      ),
    ),
  );
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-xs-12 col-sm-6 col-md-4';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'teaser';
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = '<div class="boxy">
  <div class="boxy__body">
    <strong>Der er ingen planlagte begivenheder i perioden</strong>
  </div>
</div>';
  $handler->display->display_options['empty']['area']['format'] = 'full_html';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Dato -  start date (field_os2web_kulturnaut_date) */
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['id'] = 'field_os2web_kulturnaut_date_value';
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['table'] = 'field_data_field_os2web_kulturnaut_date';
  $handler->display->display_options['sorts']['field_os2web_kulturnaut_date_value']['field'] = 'field_os2web_kulturnaut_date_value';
  /* Contextual filter: Content: Has taxonomy term ID (with depth) */
  $handler->display->display_options['arguments']['term_node_tid_depth']['id'] = 'term_node_tid_depth';
  $handler->display->display_options['arguments']['term_node_tid_depth']['table'] = 'node';
  $handler->display->display_options['arguments']['term_node_tid_depth']['field'] = 'term_node_tid_depth';
  $handler->display->display_options['arguments']['term_node_tid_depth']['default_action'] = 'default';
  $handler->display->display_options['arguments']['term_node_tid_depth']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['term_node_tid_depth']['default_argument_type'] = 'taxonomy_tid';
  $handler->display->display_options['arguments']['term_node_tid_depth']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['term_node_tid_depth']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['term_node_tid_depth']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['term_node_tid_depth']['depth'] = '10';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_kulturnaut_knactivity' => 'os2web_kulturnaut_knactivity',
  );
  /* Filter criterion: Content: Dato - end date (field_os2web_kulturnaut_date:value2) */
  $handler->display->display_options['filters']['field_os2web_kulturnaut_date_value2']['id'] = 'field_os2web_kulturnaut_date_value2';
  $handler->display->display_options['filters']['field_os2web_kulturnaut_date_value2']['table'] = 'field_data_field_os2web_kulturnaut_date';
  $handler->display->display_options['filters']['field_os2web_kulturnaut_date_value2']['field'] = 'field_os2web_kulturnaut_date_value2';
  $handler->display->display_options['filters']['field_os2web_kulturnaut_date_value2']['operator'] = '>=';
  $handler->display->display_options['filters']['field_os2web_kulturnaut_date_value2']['default_date'] = 'today -1 day';
  $handler->display->display_options['filters']['field_os2web_kulturnaut_date_value2']['year_range'] = '-0:+10';
  /* Filter criterion: Date: Date (node) */
  $handler->display->display_options['filters']['date_filter']['id'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['table'] = 'node';
  $handler->display->display_options['filters']['date_filter']['field'] = 'date_filter';
  $handler->display->display_options['filters']['date_filter']['operator'] = 'between';
  $handler->display->display_options['filters']['date_filter']['exposed'] = TRUE;
  $handler->display->display_options['filters']['date_filter']['expose']['operator_id'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['operator'] = 'date_filter_op';
  $handler->display->display_options['filters']['date_filter']['expose']['identifier'] = 'dato';
  $handler->display->display_options['filters']['date_filter']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    5 => 0,
    3 => 0,
  );
  $handler->display->display_options['filters']['date_filter']['form_type'] = 'date_popup';
  $handler->display->display_options['filters']['date_filter']['default_date'] = 'today';
  $handler->display->display_options['filters']['date_filter']['year_range'] = '-0:+10';
  $handler->display->display_options['filters']['date_filter']['date_fields'] = array(
    'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value' => 'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value',
    'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value2' => 'field_data_field_os2web_kulturnaut_date.field_os2web_kulturnaut_date_value2',
  );
  $handler->display->display_options['filters']['date_filter']['date_method'] = 'AND';

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['exposed_block'] = TRUE;
  $handler->display->display_options['argument_input'] = array(
    'term_node_tid_depth' => array(
      'type' => 'context',
      'context' => 'entity:taxonomy_term.tid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Har taksonomiterm ID (med dybde)',
    ),
  );
  $handler->display->display_options['inherit_panels_path'] = '1';
  $translatables['oplevsyddjurs_term_nodes_filtered'] = array(
    t('Master'),
    t('more'),
    t('Vælg'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Vælg et filter og klik på Anvend for at se resultater'),
    t('Avancerede indstillinger'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('<div class="boxy">
  <div class="boxy__body">
    <strong>Der er ingen planlagte begivenheder i perioden</strong>
  </div>
</div>'),
    t('Alle'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_term_nodes_filtered'] = $view;

  $view = new view();
  $view->name = 'oplevsyddjurs_term_subterms';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'taxonomy_term_data';
  $view->human_name = 'oplevsyddjurs term subterms';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['css_class'] = 'row row--equal-height-columns';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['row_class'] = 'col-xs-12 col-sm-6 col-md-4';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entity';
  $handler->display->display_options['row_options']['view_mode'] = 'teaser';
  /* Relationship: Taxonomy term: Parent term */
  $handler->display->display_options['relationships']['parent']['id'] = 'parent';
  $handler->display->display_options['relationships']['parent']['table'] = 'taxonomy_term_hierarchy';
  $handler->display->display_options['relationships']['parent']['field'] = 'parent';
  $handler->display->display_options['relationships']['parent']['label'] = 'Overordnet element';
  /* Field: Taxonomy term: Name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['label'] = '';
  $handler->display->display_options['fields']['name']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['name']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['name']['link_to_taxonomy'] = TRUE;
  /* Field: Field: Billede */
  $handler->display->display_options['fields']['field_os2web_base_field_image']['id'] = 'field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['table'] = 'field_data_field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['field'] = 'field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['settings'] = array(
    'image_style' => 'os2sub_small_imagesize',
    'image_link' => '',
  );
  /* Contextual filter: Taxonomy term: Term ID */
  $handler->display->display_options['arguments']['tid']['id'] = 'tid';
  $handler->display->display_options['arguments']['tid']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['arguments']['tid']['field'] = 'tid';
  $handler->display->display_options['arguments']['tid']['relationship'] = 'parent';
  $handler->display->display_options['arguments']['tid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['tid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['tid']['default_argument_type'] = 'taxonomy_tid';
  $handler->display->display_options['arguments']['tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['tid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['tid']['specify_validation'] = TRUE;

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['argument_input'] = array(
    'tid' => array(
      'type' => 'context',
      'context' => 'entity:taxonomy_term.tid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Ord i ordforråd: Term ID',
    ),
  );
  $translatables['oplevsyddjurs_term_subterms'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('Overordnet element'),
    t('Alle'),
    t('Content pane'),
    t('View panes'),
  );
  $export['oplevsyddjurs_term_subterms'] = $view;

  $view = new view();
  $view->name = 'os2web_taxonomies_tax_places_data';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'taxonomy_term_data';
  $view->human_name = 'os2web_taxonomies_tax_places_data';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'os2web_taxonomies_tax_places_data';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'views_json';
  $handler->display->display_options['style_options']['root_object'] = 'tax-places';
  $handler->display->display_options['style_options']['top_child_object'] = 'place';
  $handler->display->display_options['style_options']['plaintext_output'] = 1;
  $handler->display->display_options['style_options']['remove_newlines'] = 0;
  $handler->display->display_options['style_options']['jsonp_prefix'] = '';
  $handler->display->display_options['style_options']['using_views_api_mode'] = 0;
  $handler->display->display_options['style_options']['object_arrays'] = 0;
  $handler->display->display_options['style_options']['numeric_strings'] = 1;
  $handler->display->display_options['style_options']['bigint_string'] = 0;
  $handler->display->display_options['style_options']['pretty_print'] = 0;
  $handler->display->display_options['style_options']['unescaped_slashes'] = 0;
  $handler->display->display_options['style_options']['unescaped_unicode'] = 0;
  $handler->display->display_options['style_options']['char_encoding'] = array();
  /* Relationship: Taxonomy term: Parent term */
  $handler->display->display_options['relationships']['parent']['id'] = 'parent';
  $handler->display->display_options['relationships']['parent']['table'] = 'taxonomy_term_hierarchy';
  $handler->display->display_options['relationships']['parent']['field'] = 'parent';
  $handler->display->display_options['relationships']['parent']['label'] = 'Overordnet element';
  /* Field: Taxonomy term: Name */
  $handler->display->display_options['fields']['name']['id'] = 'name';
  $handler->display->display_options['fields']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['name']['field'] = 'name';
  $handler->display->display_options['fields']['name']['label'] = 'Term title';
  $handler->display->display_options['fields']['name']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['name']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['name']['link_to_taxonomy'] = TRUE;
  /* Field: Field: Billede */
  $handler->display->display_options['fields']['field_os2web_base_field_image']['id'] = 'field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['table'] = 'field_data_field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['field'] = 'field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['label'] = 'Term image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  /* Field: Taxonomy term: Banner */
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['id'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['table'] = 'field_data_field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['field'] = 'field_os2web_base_field_banner';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['label'] = 'Term banner image';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['settings'] = array(
    'image_style' => '',
    'image_link' => '',
  );
  $handler->display->display_options['fields']['field_os2web_base_field_banner']['delta_offset'] = '0';
  /* Field: Taxonomy term: GIS navn */
  $handler->display->display_options['fields']['field_os2web_taxonomies_name']['id'] = 'field_os2web_taxonomies_name';
  $handler->display->display_options['fields']['field_os2web_taxonomies_name']['table'] = 'field_data_field_os2web_taxonomies_name';
  $handler->display->display_options['fields']['field_os2web_taxonomies_name']['field'] = 'field_os2web_taxonomies_name';
  /* Field: Taxonomy term: GIS postby */
  $handler->display->display_options['fields']['field_os2web_taxonomies_city']['id'] = 'field_os2web_taxonomies_city';
  $handler->display->display_options['fields']['field_os2web_taxonomies_city']['table'] = 'field_data_field_os2web_taxonomies_city';
  $handler->display->display_options['fields']['field_os2web_taxonomies_city']['field'] = 'field_os2web_taxonomies_city';
  /* Field: Taxonomy term: GIS type */
  $handler->display->display_options['fields']['field_os2web_taxonomies_type']['id'] = 'field_os2web_taxonomies_type';
  $handler->display->display_options['fields']['field_os2web_taxonomies_type']['table'] = 'field_data_field_os2web_taxonomies_type';
  $handler->display->display_options['fields']['field_os2web_taxonomies_type']['field'] = 'field_os2web_taxonomies_type';
  /* Field: Taxonomy term: Systemid */
  $handler->display->display_options['fields']['field_os2web_taxonomies_sys_id']['id'] = 'field_os2web_taxonomies_sys_id';
  $handler->display->display_options['fields']['field_os2web_taxonomies_sys_id']['table'] = 'field_data_field_os2web_taxonomies_sys_id';
  $handler->display->display_options['fields']['field_os2web_taxonomies_sys_id']['field'] = 'field_os2web_taxonomies_sys_id';
  $handler->display->display_options['fields']['field_os2web_taxonomies_sys_id']['settings'] = array(
    'thousand_separator' => '',
    'prefix_suffix' => 1,
  );
  /* Field: Taxonomy term: Term ID */
  $handler->display->display_options['fields']['tid']['id'] = 'tid';
  $handler->display->display_options['fields']['tid']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['tid']['field'] = 'tid';
  $handler->display->display_options['fields']['tid']['separator'] = '';
  /* Field: Taxonomy term: Weight */
  $handler->display->display_options['fields']['weight']['id'] = 'weight';
  $handler->display->display_options['fields']['weight']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['weight']['field'] = 'weight';
  $handler->display->display_options['fields']['weight']['label'] = 'Term Weight';
  $handler->display->display_options['fields']['weight']['separator'] = '';
  /* Field: Taxonomy term: Term description */
  $handler->display->display_options['fields']['description']['id'] = 'description';
  $handler->display->display_options['fields']['description']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['description']['field'] = 'description';
  $handler->display->display_options['fields']['description']['label'] = 'Beskrivelse af term';
  /* Field: Taxonomy term: Term ID */
  $handler->display->display_options['fields']['tid_1']['id'] = 'tid_1';
  $handler->display->display_options['fields']['tid_1']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['tid_1']['field'] = 'tid';
  $handler->display->display_options['fields']['tid_1']['relationship'] = 'parent';
  $handler->display->display_options['fields']['tid_1']['label'] = 'Parrent Term ID';
  $handler->display->display_options['fields']['tid_1']['separator'] = '';
  /* Field: Taxonomy term: Name */
  $handler->display->display_options['fields']['name_1']['id'] = 'name_1';
  $handler->display->display_options['fields']['name_1']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['name_1']['field'] = 'name';
  $handler->display->display_options['fields']['name_1']['relationship'] = 'parent';
  $handler->display->display_options['fields']['name_1']['label'] = 'Parrent Term Name';
  /* Field: Taxonomy term: GIS maplink */
  $handler->display->display_options['fields']['field_os2web_taxonomies_maplink']['id'] = 'field_os2web_taxonomies_maplink';
  $handler->display->display_options['fields']['field_os2web_taxonomies_maplink']['table'] = 'field_data_field_os2web_taxonomies_maplink';
  $handler->display->display_options['fields']['field_os2web_taxonomies_maplink']['field'] = 'field_os2web_taxonomies_maplink';
  $handler->display->display_options['fields']['field_os2web_taxonomies_maplink']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_os2web_taxonomies_maplink']['type'] = 'link_absolute';
  /* Sort criterion: Taxonomy term: Weight */
  $handler->display->display_options['sorts']['weight']['id'] = 'weight';
  $handler->display->display_options['sorts']['weight']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['sorts']['weight']['field'] = 'weight';
  $handler->display->display_options['sorts']['weight']['relationship'] = 'parent';
  /* Sort criterion: Taxonomy term: Weight */
  $handler->display->display_options['sorts']['weight_1']['id'] = 'weight_1';
  $handler->display->display_options['sorts']['weight_1']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['sorts']['weight_1']['field'] = 'weight';
  /* Filter criterion: Taxonomy vocabulary: Machine name */
  $handler->display->display_options['filters']['machine_name']['id'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['table'] = 'taxonomy_vocabulary';
  $handler->display->display_options['filters']['machine_name']['field'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['value'] = array(
    'os2web_taxonomies_tax_places' => 'os2web_taxonomies_tax_places',
  );
  /* Filter criterion: Taxonomy term: Parent term */
  $handler->display->display_options['filters']['parent']['id'] = 'parent';
  $handler->display->display_options['filters']['parent']['table'] = 'taxonomy_term_hierarchy';
  $handler->display->display_options['filters']['parent']['field'] = 'parent';
  $handler->display->display_options['filters']['parent']['operator'] = '!=';
  $handler->display->display_options['filters']['parent']['value']['value'] = '125';
  /* Filter criterion: Taxonomy term: Term ID */
  $handler->display->display_options['filters']['tid_raw']['id'] = 'tid_raw';
  $handler->display->display_options['filters']['tid_raw']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['filters']['tid_raw']['field'] = 'tid_raw';
  $handler->display->display_options['filters']['tid_raw']['operator'] = '!=';
  $handler->display->display_options['filters']['tid_raw']['value']['value'] = '125';
  /* Filter criterion: Taxonomy term: Term ID */
  $handler->display->display_options['filters']['tid_raw_1']['id'] = 'tid_raw_1';
  $handler->display->display_options['filters']['tid_raw_1']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['filters']['tid_raw_1']['field'] = 'tid_raw';
  $handler->display->display_options['filters']['tid_raw_1']['operator'] = '!=';
  $handler->display->display_options['filters']['tid_raw_1']['value']['value'] = '127';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'os2web-taxonomies-tax-places-data';
  $translatables['os2web_taxonomies_tax_places_data'] = array(
    t('Master'),
    t('os2web_taxonomies_tax_places_data'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Overordnet element'),
    t('Term title'),
    t('Term image'),
    t('Term banner image'),
    t('GIS navn'),
    t('GIS postby'),
    t('GIS type'),
    t('Systemid'),
    t('Term ID'),
    t('.'),
    t('Term Weight'),
    t('Beskrivelse af term'),
    t('Parrent Term ID'),
    t('Parrent Term Name'),
    t('GIS maplink'),
    t('Page'),
  );
  $export['os2web_taxonomies_tax_places_data'] = $view;

  return $export;
}
