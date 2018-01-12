<?php
/**
 * @file
 * seniorportalen.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function seniorportalen_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'aktivitetskalender';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Aktivitetskalender';
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
  $handler->display->display_options['pager']['type'] = 'date_views_pager';
  $handler->display->display_options['pager']['options']['date_id'] = 'month';
  $handler->display->display_options['pager']['options']['skip_empty_pages'] = 0;
  $handler->display->display_options['style_plugin'] = 'calendar_style';
  $handler->display->display_options['style_options']['name_size'] = '3';
  $handler->display->display_options['style_options']['mini'] = '1';
  $handler->display->display_options['style_options']['with_weekno'] = '1';
  $handler->display->display_options['style_options']['multiday_theme'] = '1';
  $handler->display->display_options['style_options']['theme_style'] = '1';
  $handler->display->display_options['style_options']['max_items'] = '0';
  $handler->display->display_options['row_plugin'] = 'calendar_entity';
  $handler->display->display_options['row_options']['calendar_date_link'] = 'os2sub_event';
  $handler->display->display_options['row_options']['colors']['calendar_colors_type'] = array(
    'banner' => '#ffffff',
    'os2sub_event' => '#ffffff',
    'event_calendar' => '#ffffff',
    'os2web_base_gallery' => '#ffffff',
    'os2web_base_contentpage' => '#ffffff',
    'kalenderside' => '#ffffff',
    'os2web_contact_contact' => '#ffffff',
    'media' => '#ffffff',
    'os2web_base_news' => '#ffffff',
    'os2web_base_selfservice_link' => '#ffffff',
    'os2web_spotbox_box' => '#ffffff',
    'velkomst' => '#ffffff',
    'webform' => '#ffffff',
  );
  /* Relationship: Content: Sektion (field_os2sub_event_section) */
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['id'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['table'] = 'field_data_field_os2sub_event_section';
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['field'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['delta'] = '-1';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Dato */
  $handler->display->display_options['fields']['field_os2sub_event_date']['id'] = 'field_os2sub_event_date';
  $handler->display->display_options['fields']['field_os2sub_event_date']['table'] = 'field_data_field_os2sub_event_date';
  $handler->display->display_options['fields']['field_os2sub_event_date']['field'] = 'field_os2sub_event_date';
  $handler->display->display_options['fields']['field_os2sub_event_date']['label'] = '';
  $handler->display->display_options['fields']['field_os2sub_event_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2sub_event_date']['settings'] = array(
    'format_type' => 'os2web_base_date_only',
    'fromto' => 'value',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
    'show_remaining_days' => 0,
  );
  /* Sort criterion: Content: Date -  start date (event_calendar_date) */
  $handler->display->display_options['sorts']['event_calendar_date_value']['id'] = 'event_calendar_date_value';
  $handler->display->display_options['sorts']['event_calendar_date_value']['table'] = 'field_data_event_calendar_date';
  $handler->display->display_options['sorts']['event_calendar_date_value']['field'] = 'event_calendar_date_value';
  /* Contextual filter: Content: Sektion (field_os2sub_event_section) */
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['id'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['table'] = 'field_data_field_os2sub_event_section';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['field'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['relationship'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['summary_options']['items_per_page'] = '25';
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
    'os2sub_event' => 'os2sub_event',
  );

  /* Display: Sektionsside */
  $handler = $view->new_display('panel_pane', 'Sektionsside', 'panel_pane_1');
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Date: Date (node) */
  $handler->display->display_options['arguments']['date_argument']['id'] = 'date_argument';
  $handler->display->display_options['arguments']['date_argument']['table'] = 'node';
  $handler->display->display_options['arguments']['date_argument']['field'] = 'date_argument';
  $handler->display->display_options['arguments']['date_argument']['default_action'] = 'default';
  $handler->display->display_options['arguments']['date_argument']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['date_argument']['default_argument_type'] = 'date';
  $handler->display->display_options['arguments']['date_argument']['granularity_reset'] = 0;
  $handler->display->display_options['arguments']['date_argument']['date_fields'] = array(
    'field_data_event_calendar_date.event_calendar_date_value' => 'field_data_event_calendar_date.event_calendar_date_value',
    'field_data_field_os2sub_event_date.field_os2sub_event_date_value' => 'field_data_field_os2sub_event_date.field_os2sub_event_date_value',
  );
  /* Contextual filter: Content: Afdeling (field_afdeling) */
  $handler->display->display_options['arguments']['field_afdeling_nid']['id'] = 'field_afdeling_nid';
  $handler->display->display_options['arguments']['field_afdeling_nid']['table'] = 'field_data_field_afdeling';
  $handler->display->display_options['arguments']['field_afdeling_nid']['field'] = 'field_afdeling_nid';
  $handler->display->display_options['arguments']['field_afdeling_nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['field_afdeling_nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_afdeling_nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_afdeling_nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_afdeling_nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['argument_input'] = array(
    'date_argument' => array(
      'type' => 'context',
      'context' => 'token.current-date:os2web_base_date_only',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Dato: Dato (node)',
    ),
    'field_afdeling_nid' => array(
      'type' => 'context',
      'context' => 'entity:node.field_afdeling',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Afdeling (field_afdeling)',
    ),
  );

  /* Display: Maanedskalender */
  $handler = $view->new_display('panel_pane', 'Maanedskalender', 'panel_pane_2');
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_os2sub_event_date',
      'rendered' => 1,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['empty'] = FALSE;
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = '<div>
Der er ingen planlagte aktiviteter lagt ind på hjemmesiden.</div>';
  $handler->display->display_options['empty']['area']['format'] = 'full_html';
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Content: Sektion (field_os2sub_event_section) */
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['id'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['table'] = 'field_data_field_os2sub_event_section';
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['field'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['relationships']['field_os2sub_event_section_nid']['delta'] = '-1';
  /* Relationship: Content: Afdeling (field_afdeling) */
  $handler->display->display_options['relationships']['field_afdeling_nid']['id'] = 'field_afdeling_nid';
  $handler->display->display_options['relationships']['field_afdeling_nid']['table'] = 'field_data_field_afdeling';
  $handler->display->display_options['relationships']['field_afdeling_nid']['field'] = 'field_afdeling_nid';
  $handler->display->display_options['relationships']['field_afdeling_nid']['delta'] = '-1';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Dato */
  $handler->display->display_options['fields']['field_os2sub_event_date']['id'] = 'field_os2sub_event_date';
  $handler->display->display_options['fields']['field_os2sub_event_date']['table'] = 'field_data_field_os2sub_event_date';
  $handler->display->display_options['fields']['field_os2sub_event_date']['field'] = 'field_os2sub_event_date';
  $handler->display->display_options['fields']['field_os2sub_event_date']['label'] = '';
  $handler->display->display_options['fields']['field_os2sub_event_date']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2sub_event_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2sub_event_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'value',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
    'show_remaining_days' => 0,
  );
  /* Field: Content: Tilmeldingslink */
  $handler->display->display_options['fields']['field_os2sub_event_signup_link']['id'] = 'field_os2sub_event_signup_link';
  $handler->display->display_options['fields']['field_os2sub_event_signup_link']['table'] = 'field_data_field_os2sub_event_signup_link';
  $handler->display->display_options['fields']['field_os2sub_event_signup_link']['field'] = 'field_os2sub_event_signup_link';
  $handler->display->display_options['fields']['field_os2sub_event_signup_link']['label'] = '';
  $handler->display->display_options['fields']['field_os2sub_event_signup_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2sub_event_signup_link']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_os2sub_event_signup_link']['click_sort_column'] = 'url';
  /* Field: Content: Indhold */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Dato -  start date (field_os2sub_event_date) */
  $handler->display->display_options['sorts']['field_os2sub_event_date_value']['id'] = 'field_os2sub_event_date_value';
  $handler->display->display_options['sorts']['field_os2sub_event_date_value']['table'] = 'field_data_field_os2sub_event_date';
  $handler->display->display_options['sorts']['field_os2sub_event_date_value']['field'] = 'field_os2sub_event_date_value';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Sektion (field_os2sub_event_section) */
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['id'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['table'] = 'field_data_field_os2sub_event_section';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['field'] = 'field_os2sub_event_section_nid';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_os2sub_event_section_nid']['summary_options']['items_per_page'] = '25';
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
    'os2sub_event' => 'os2sub_event',
  );
  /* Filter criterion: Content: Dato - end date (field_os2sub_event_date:value2) */
  $handler->display->display_options['filters']['field_os2sub_event_date_value2']['id'] = 'field_os2sub_event_date_value2';
  $handler->display->display_options['filters']['field_os2sub_event_date_value2']['table'] = 'field_data_field_os2sub_event_date';
  $handler->display->display_options['filters']['field_os2sub_event_date_value2']['field'] = 'field_os2sub_event_date_value2';
  $handler->display->display_options['filters']['field_os2sub_event_date_value2']['operator'] = '>=';
  $handler->display->display_options['filters']['field_os2sub_event_date_value2']['default_date'] = 'now';
  $handler->display->display_options['argument_input'] = array(
    'field_os2sub_event_section_nid' => array(
      'type' => 'user',
      'context' => 'entity:node.field_afdeling',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Sektion (field_os2sub_event_section)',
    ),
  );
  $translatables['aktivitetskalender'] = array(
    t('Master'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('field_os2sub_event_section'),
    t('Alle'),
    t('Sektionsside'),
    t('View panes'),
    t('Maanedskalender'),
    t('<div>
Der er ingen planlagte aktiviteter lagt ind på hjemmesiden.</div>'),
    t('field_afdeling'),
  );
  $export['aktivitetskalender'] = $view;

  $view = new view();
  $view->name = 'banner_seniorportalen_forside';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Banner seniorportalen forside';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Banner seniorportalen forside';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['style_options']['default_row_class'] = FALSE;
  $handler->display->display_options['style_options']['row_class_special'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'node';
  $handler->display->display_options['row_options']['links'] = FALSE;
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
  /* Field: Content: Banner overskrift */
  $handler->display->display_options['fields']['field_banner_headline']['id'] = 'field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['table'] = 'field_data_field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['field'] = 'field_banner_headline';
  $handler->display->display_options['fields']['field_banner_headline']['label'] = '';
  $handler->display->display_options['fields']['field_banner_headline']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_banner_headline']['element_label_colon'] = FALSE;
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

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $translatables['banner_seniorportalen_forside'] = array(
    t('Master'),
    t('Banner seniorportalen forside'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Block'),
  );
  $export['banner_seniorportalen_forside'] = $view;

  $view = new view();
  $view->name = 'seniorportalen_indholdsside';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Seniorportalen - Indholdsside';
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
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Field: Billede */
  $handler->display->display_options['fields']['field_os2web_base_field_image']['id'] = 'field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['table'] = 'field_data_field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['field'] = 'field_os2web_base_field_image';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['element_type'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_image']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_image']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_os2web_base_field_image']['settings'] = array(
    'image_style' => 'os2sub_small_imagesize',
    'image_link' => '',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'h1';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Resume - lang overskrift */
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['id'] = 'field_os2web_base_field_summary';
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['table'] = 'field_data_field_os2web_base_field_summary';
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['field'] = 'field_os2web_base_field_summary';
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['element_type'] = 'p';
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['element_class'] = 'lead';
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['field_os2web_base_field_summary']['element_default_classes'] = FALSE;
  /* Field: Content: Indhold */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['element_type'] = '0';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['body']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['body']['element_default_classes'] = FALSE;
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
    'os2web_base_contentpage' => 'os2web_base_contentpage',
  );

  /* Display: Med spotbokse */
  $handler = $view->new_display('panel_pane', 'Med spotbokse', 'panel_pane_1');
  $handler->display->display_options['defaults']['css_class'] = FALSE;
  $handler->display->display_options['css_class'] = 'node-header with-spots';
  $translatables['seniorportalen_indholdsside'] = array(
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
    t('Alle'),
    t('Med spotbokse'),
    t('View panes'),
  );
  $export['seniorportalen_indholdsside'] = $view;

  $view = new view();
  $view->name = 'seniorportalen_nyhedsliste';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Seniorportalen - Nyhedsliste';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Seniorportalen - Nyhedsliste';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '3';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['content'] = '<div class="pane-title h3"><a href="/nyheder">Nyheder</a></div>';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = '0';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_wrapper_type'] = '0';
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
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
    'os2web_base_news' => 'os2web_base_news',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $translatables['seniorportalen_nyhedsliste'] = array(
    t('Master'),
    t('Seniorportalen - Nyhedsliste'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('<div class="pane-title h3"><a href="/nyheder">Nyheder</a></div>'),
    t('Block'),
  );
  $export['seniorportalen_nyhedsliste'] = $view;

  return $export;
}
