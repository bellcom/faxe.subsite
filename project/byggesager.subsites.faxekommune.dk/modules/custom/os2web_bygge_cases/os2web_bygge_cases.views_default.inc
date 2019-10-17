<?php

/**
 * @file
 * os2web_bygge_cases.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function os2web_bygge_cases_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'os2web_bygge_case_cases';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OS2Web bygge cases';
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
  $handler->display->display_options['style_plugin'] = 'views_bootstrap_table_plugin_style';
  $handler->display->display_options['style_options']['columns'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['style_options']['class'] = '';
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  $handler->display->display_options['style_options']['bootstrap_styles'] = array(
    'striped' => 0,
    'bordered' => 0,
    'hover' => 0,
    'condensed' => 0,
  );
  $handler->display->display_options['style_options']['responsive'] = 0;
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = 'Ingen resultater';
  $handler->display->display_options['empty']['area']['format'] = 'filtered_html';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Sagsnummer */
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['id'] = 'field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['table'] = 'field_data_field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['field'] = 'field_os2web_cp_service_case_id';
  /* Field: Content: Oprettelsesdato */
  $handler->display->display_options['fields']['field_os2web_cp_service_created']['id'] = 'field_os2web_cp_service_created';
  $handler->display->display_options['fields']['field_os2web_cp_service_created']['table'] = 'field_data_field_os2web_cp_service_created';
  $handler->display->display_options['fields']['field_os2web_cp_service_created']['field'] = 'field_os2web_cp_service_created';
  $handler->display->display_options['fields']['field_os2web_cp_service_created']['settings'] = array(
    'format_type' => 'os2web_cp_service_date_only',
    'custom_date_format' => '',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
    'show_remaining_days' => 0,
  );
  /* Field: Content: Ejendomsnummer */
  $handler->display->display_options['fields']['field_os2web_cp_service_property']['id'] = 'field_os2web_cp_service_property';
  $handler->display->display_options['fields']['field_os2web_cp_service_property']['table'] = 'field_data_field_os2web_cp_service_property';
  $handler->display->display_options['fields']['field_os2web_cp_service_property']['field'] = 'field_os2web_cp_service_property';
  $handler->display->display_options['fields']['field_os2web_cp_service_property']['exclude'] = TRUE;
  /* Field: Content: Matrikel */
  $handler->display->display_options['fields']['field_os2web_cp_service_matrikul']['id'] = 'field_os2web_cp_service_matrikul';
  $handler->display->display_options['fields']['field_os2web_cp_service_matrikul']['table'] = 'field_data_field_os2web_cp_service_matrikul';
  $handler->display->display_options['fields']['field_os2web_cp_service_matrikul']['field'] = 'field_os2web_cp_service_matrikul';
  $handler->display->display_options['fields']['field_os2web_cp_service_matrikul']['exclude'] = TRUE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published status */
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
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Global: Combine fields filter */
  $handler->display->display_options['filters']['combine']['id'] = 'combine';
  $handler->display->display_options['filters']['combine']['table'] = 'views';
  $handler->display->display_options['filters']['combine']['field'] = 'combine';
  $handler->display->display_options['filters']['combine']['operator'] = 'allwords';
  $handler->display->display_options['filters']['combine']['group'] = 1;
  $handler->display->display_options['filters']['combine']['exposed'] = TRUE;
  $handler->display->display_options['filters']['combine']['expose']['operator_id'] = 'combine_op';
  $handler->display->display_options['filters']['combine']['expose']['label'] = 'Søg på Ejendomsnummer, matrikelnummer, adresse osv';
  $handler->display->display_options['filters']['combine']['expose']['operator'] = 'combine_op';
  $handler->display->display_options['filters']['combine']['expose']['identifier'] = 's';
  $handler->display->display_options['filters']['combine']['expose']['remember_roles'] = array(
    2 => '2',
  );
  $handler->display->display_options['filters']['combine']['fields'] = array(
    'title' => 'title',
    'field_os2web_cp_service_case_id' => 'field_os2web_cp_service_case_id',
    'field_os2web_cp_service_property' => 'field_os2web_cp_service_property',
    'field_os2web_cp_service_matrikul' => 'field_os2web_cp_service_matrikul',
  );
  /* Filter criterion: Content: CPR (field_os2web_cp_service_pid_nr) */
  $handler->display->display_options['filters']['field_os2web_cp_service_pid_nr_value']['id'] = 'field_os2web_cp_service_pid_nr_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_pid_nr_value']['table'] = 'field_data_field_os2web_cp_service_pid_nr';
  $handler->display->display_options['filters']['field_os2web_cp_service_pid_nr_value']['field'] = 'field_os2web_cp_service_pid_nr_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_pid_nr_value']['value'] = 'replaced in os2web_bygge_cases_views_query_alter()';

  /* Display: Side */
  $handler = $view->new_display('page', 'Side', 'os2web_bygge_case_cases_page');
  $handler->display->display_options['path'] = 'bygge-cases';
  $translatables['os2web_bygge_case_cases'] = array(
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
    t('Ingen resultater'),
    t('Sagsnummer'),
    t('Oprettelsesdato'),
    t('Ejendomsnummer'),
    t('Matrikel'),
    t('Søg på Ejendomsnummer, matrikelnummer, adresse osv'),
    t('Side'),
  );
  $export['os2web_bygge_case_cases'] = $view;

  return $export;
}
