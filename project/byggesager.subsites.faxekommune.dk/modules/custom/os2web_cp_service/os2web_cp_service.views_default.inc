<?php
/**
 * @file
 * os2web_cp_service.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function os2web_cp_service_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'os2web_cp_service_cp_case_search';
  $view->description = 'These views searches and shows CP Cases';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'CP Case Search';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'mere';
  $handler->display->display_options['group_by'] = TRUE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['distinct'] = TRUE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Filtrer';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Nulstil';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '15';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_label'] = 'Antal elementer';
  $handler->display->display_options['pager']['options']['expose']['items_per_page_options_all_label'] = '- Alle -';
  $handler->display->display_options['pager']['options']['expose']['offset_label'] = 'Forskydning';
  $handler->display->display_options['pager']['options']['tags']['first'] = '« Første';
  $handler->display->display_options['pager']['options']['tags']['previous'] = '‹ Forrige';
  $handler->display->display_options['pager']['options']['tags']['next'] = 'Næste ›';
  $handler->display->display_options['pager']['options']['tags']['last'] = 'Sidste »';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'field_os2web_cp_service_case_id' => 'field_os2web_cp_service_case_id',
    'field_os2web_cp_service_content' => 'field_os2web_cp_service_content',
    'title' => 'title',
    'field_os2web_cp_service_created' => 'field_os2web_cp_service_created',
    'field_os2web_cp_service_casetype' => 'field_os2web_cp_service_casetype',
    'field_os2web_cp_service_doc_id_1' => 'field_os2web_cp_service_doc_id_1',
    'field_os2web_cp_service_content_1' => 'field_os2web_cp_service_content_1',
    'title_1' => 'title_1',
  );
  $handler->display->display_options['style_options']['default'] = 'field_os2web_cp_service_created';
  $handler->display->display_options['style_options']['info'] = array(
    'field_os2web_cp_service_case_id' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_content' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_created' => array(
      'sortable' => 1,
      'default_sort_order' => 'desc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_casetype' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_doc_id_1' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_content_1' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title_1' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Footer: Global: PHP */
  $handler->display->display_options['footer']['php']['id'] = 'php';
  $handler->display->display_options['footer']['php']['table'] = 'views';
  $handler->display->display_options['footer']['php']['field'] = 'php';
  $handler->display->display_options['footer']['php']['label'] = 'Total number of results.';
  $handler->display->display_options['footer']['php']['php_output'] = '<?php
    $view = views_get_current_view();
    print \'<div class="view-counter">I alt blev der fundet <span>\' . $view->total_rows . \'</span> sager.</div>\';
?>
';
  /* Footer: Global: PHP */
  $handler->display->display_options['footer']['php_1']['id'] = 'php_1';
  $handler->display->display_options['footer']['php_1']['table'] = 'views';
  $handler->display->display_options['footer']['php_1']['field'] = 'php';
  $handler->display->display_options['footer']['php_1']['label'] = 'Reset button';
  $handler->display->display_options['footer']['php_1']['php_output'] = '<div><a href="<?php echo url(\'aaben-indsigt\'); ?>" class="button"><?php echo t(\'Nulstil søgning\'); ?></a></div>';
  /* No results behavior: Global: PHP */
  $handler->display->display_options['empty']['php']['id'] = 'php';
  $handler->display->display_options['empty']['php']['table'] = 'views';
  $handler->display->display_options['empty']['php']['field'] = 'php';
  $handler->display->display_options['empty']['php']['label'] = 'Ingen Resultater';
  $handler->display->display_options['empty']['php']['empty'] = TRUE;
  $handler->display->display_options['empty']['php']['php_output'] = '<?php if (count($view->exposed_input)) : ?>
<span class="no-results">Vi finder desværre ikke nogen sager ud fra de valgte søgekriterier. Prøv at justere på dit søgeord eller tidsintervallet.</span>
<?php endif; ?>
';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_os2web_cp_service_doc_ref_target_id']['id'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['relationships']['field_os2web_cp_service_doc_ref_target_id']['table'] = 'field_data_field_os2web_cp_service_doc_ref';
  $handler->display->display_options['relationships']['field_os2web_cp_service_doc_ref_target_id']['field'] = 'field_os2web_cp_service_doc_ref_target_id';
  /* Field: Content: SagsID */
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['id'] = 'field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['table'] = 'field_data_field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['field'] = 'field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['group_columns'] = array(
    'bundle' => 'bundle',
    'language' => 'language',
    'entity_type' => 'entity_type',
    'entity_id' => 'entity_id',
    'value' => 'value',
    'format' => 'format',
  );
  /* Field: Content: Indholdsbeskrivelse */
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['id'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['table'] = 'field_data_field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['field'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['alter']['trim_whitespace'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['alter']['strip_tags'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['type'] = 'text_summary_or_trimmed';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['settings'] = array(
    'trim_length' => '150',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Sagstitel';
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = '[title]';
  $handler->display->display_options['fields']['title']['alter']['path'] = 'sag/[field_os2web_cp_service_case_id]';
  $handler->display->display_options['fields']['title']['alter']['alt'] = '[field_os2web_cp_service_content]';
  $handler->display->display_options['fields']['title']['alter']['link_class'] = 'qtip-this';
  $handler->display->display_options['fields']['title']['alter']['max_length'] = '100';
  $handler->display->display_options['fields']['title']['alter']['trim'] = TRUE;
  /* Field: Content: Sagstype - Sagstype */
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['id'] = 'field_os2web_cp_service_casetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['table'] = 'field_data_field_os2web_cp_service_casetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['field'] = 'field_os2web_cp_service_casetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['element_label_colon'] = FALSE;
  /* Field: Content: Journalnummer */
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['id'] = 'field_os2web_cp_service_doc_id_1';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['table'] = 'field_data_field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['field'] = 'field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['element_label_colon'] = FALSE;
  /* Field: Content: Indholdsbeskrivelse */
  $handler->display->display_options['fields']['field_os2web_cp_service_content_1']['id'] = 'field_os2web_cp_service_content_1';
  $handler->display->display_options['fields']['field_os2web_cp_service_content_1']['table'] = 'field_data_field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content_1']['field'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content_1']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_content_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content_1']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Dokumentdato */
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['id'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['table'] = 'field_data_field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['field'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['label'] = 'Dato';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['settings'] = array(
    'format_type' => 'os2web_cp_service_date_only',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Sagstitel */
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['id'] = 'field_os2web_cp_service_address';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['table'] = 'field_data_field_os2web_cp_service_address';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['field'] = 'field_os2web_cp_service_address';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  $handler->display->display_options['filter_groups']['operator'] = 'OR';
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
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Global: PHP */
  $handler->display->display_options['filters']['php']['id'] = 'php';
  $handler->display->display_options['filters']['php']['table'] = 'views';
  $handler->display->display_options['filters']['php']['field'] = 'php';
  $handler->display->display_options['filters']['php']['group'] = 1;
  $handler->display->display_options['filters']['php']['use_php_setup'] = 0;
  $handler->display->display_options['filters']['php']['php_filter'] = 'if (count($view->exposed_input)) {
return FALSE;
} else {
return TRUE; // If no exposed inputs, remove all results
}';
  /* Filter criterion: Global: Combine fields filter */
  $handler->display->display_options['filters']['combine']['id'] = 'combine';
  $handler->display->display_options['filters']['combine']['table'] = 'views';
  $handler->display->display_options['filters']['combine']['field'] = 'combine';
  $handler->display->display_options['filters']['combine']['operator'] = 'contains';
  $handler->display->display_options['filters']['combine']['group'] = 1;
  $handler->display->display_options['filters']['combine']['exposed'] = TRUE;
  $handler->display->display_options['filters']['combine']['expose']['operator_id'] = 'combine_op';
  $handler->display->display_options['filters']['combine']['expose']['label'] = 'Søgetekst eller sagsnummer';
  $handler->display->display_options['filters']['combine']['expose']['description'] = 'fx Birkevej. Affald. 12/99999';
  $handler->display->display_options['filters']['combine']['expose']['operator'] = 'combine_op';
  $handler->display->display_options['filters']['combine']['expose']['identifier'] = 'search-text';
  $handler->display->display_options['filters']['combine']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    7 => 0,
    3 => 0,
    5 => 0,
  );
  $handler->display->display_options['filters']['combine']['fields'] = array(
    'field_os2web_cp_service_case_id' => 'field_os2web_cp_service_case_id',
    'field_os2web_cp_service_content' => 'field_os2web_cp_service_content',
    'title' => 'title',
    'field_os2web_cp_service_doc_id_1' => 'field_os2web_cp_service_doc_id_1',
    'field_os2web_cp_service_content_1' => 'field_os2web_cp_service_content_1',
    'title_1' => 'title_1',
    'field_os2web_cp_service_address' => 'field_os2web_cp_service_address',
  );
  /* Filter criterion: os2web_cp_service_date_from */
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['id'] = 'field_os2web_cp_service_date_value_1';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['table'] = 'field_data_field_os2web_cp_service_date';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['field'] = 'field_os2web_cp_service_date_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['ui_name'] = 'os2web_cp_service_date_from';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['operator'] = '>=';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['value']['value'] = '2007-01-01';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['group'] = 1;
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['expose']['operator_id'] = 'field_os2web_cp_service_date_value_1_op';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['expose']['label'] = 'Fra';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['expose']['operator'] = 'field_os2web_cp_service_date_value_1_op';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['expose']['identifier'] = 'field_os2web_cp_service_date_from';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    7 => 0,
    3 => 0,
    5 => 0,
  );
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_1']['form_type'] = 'date_popup';
  /* Filter criterion: os2web_cp_service_date_to */
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['id'] = 'field_os2web_cp_service_date_value_2';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['table'] = 'field_data_field_os2web_cp_service_date';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['field'] = 'field_os2web_cp_service_date_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['ui_name'] = 'os2web_cp_service_date_to';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['operator'] = '<=';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['group'] = 1;
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['expose']['operator_id'] = 'field_os2web_cp_service_date_value_2_op';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['expose']['label'] = 'Til';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['expose']['operator'] = 'field_os2web_cp_service_date_value_2_op';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['expose']['identifier'] = 'field_os2web_cp_service_date_to';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    6 => 0,
    4 => 0,
    7 => 0,
    3 => 0,
    5 => 0,
  );
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['form_type'] = 'date_popup';
  $handler->display->display_options['filters']['field_os2web_cp_service_date_value_2']['default_date'] = 'now';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['enabled'] = FALSE;
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['empty'] = FALSE;
  /* No results behavior: Global: Unfiltered text */
  $handler->display->display_options['empty']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['empty']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['empty']['area_text_custom']['empty'] = TRUE;
  $handler->display->display_options['empty']['area_text_custom']['content'] = 'Der kunne ikke findes nogle sager ud fra dine søgekriterier.';
  $handler->display->display_options['empty']['area_text_custom']['tokenize'] = TRUE;
  $handler->display->display_options['path'] = 'aaben-indsigt';

  /* Display: Content pane */
  $handler = $view->new_display('panel_pane', 'Content pane', 'panel_pane_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['inherit_panels_path'] = '1';
  $translatables['os2web_cp_service_cp_case_search'] = array(
    t('Master'),
    t('mere'),
    t('Filtrer'),
    t('Nulstil'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Antal elementer'),
    t('- Alle -'),
    t('Forskydning'),
    t('« Første'),
    t('‹ Forrige'),
    t('Næste ›'),
    t('Sidste »'),
    t('Total number of results.'),
    t('Reset button'),
    t('Ingen Resultater'),
    t('Content entity referenced from field_os2web_cp_service_doc_ref'),
    t('Sagstitel'),
    t('[title]'),
    t('[field_os2web_cp_service_content]'),
    t('Dato'),
    t('Søgetekst eller sagsnummer'),
    t('fx Birkevej. Affald. 12/99999'),
    t('Fra'),
    t('Til'),
    t('Page'),
    t('more'),
    t('Der kunne ikke findes nogle sager ud fra dine søgekriterier.'),
    t('Content pane'),
    t('View panes'),
  );
  $export['os2web_cp_service_cp_case_search'] = $view;

  $view = new view();
  $view->name = 'os2web_cp_service_cp_case_view';
  $view->description = 'Views to display the content of a CP Case';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'CP Case View';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'mere';
  $handler->display->display_options['group_by'] = TRUE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '3600';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '3600';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Udfør';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'nid' => 'nid',
    'field_os2web_cp_service_doc_id' => 'field_os2web_cp_service_doc_id',
    'title' => 'title',
    'field_os2web_cp_service_doc_id_1' => 'field_os2web_cp_service_doc_id_1',
    'field_os2web_cp_service_created' => 'field_os2web_cp_service_created',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'nid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_doc_id' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_doc_id_1' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_os2web_cp_service_created' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
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
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );

  /* Display: Description */
  $handler = $view->new_display('attachment', 'Description', 'os2web_cp_service_cp_case_view_description_attachment');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Indholdsbeskrivelse */
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['id'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['table'] = 'field_data_field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['field'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['label'] = 'Beskrivelse af sagen';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );
  $handler->display->display_options['arguments']['nid']['validate_options']['access'] = TRUE;
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
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Content: Indholdsbeskrivelse (field_os2web_cp_service_content) */
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['id'] = 'field_os2web_cp_service_content_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['table'] = 'field_data_field_os2web_cp_service_content';
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['field'] = 'field_os2web_cp_service_content_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['operator'] = 'not empty';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';

  /* Display: Documents */
  $handler = $view->new_display('attachment', 'Documents', 'attachment_1');
  $handler->display->display_options['display_description'] = 'Attachent to display all documents for a case';
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['content'] = '<h2>Dokumenter</h2>';
  $handler->display->display_options['header']['area']['format'] = 'filtered_html';
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_os2web_cp_service_doc_ref_target_id']['id'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['relationships']['field_os2web_cp_service_doc_ref_target_id']['table'] = 'field_data_field_os2web_cp_service_doc_ref';
  $handler->display->display_options['relationships']['field_os2web_cp_service_doc_ref_target_id']['field'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['relationships']['field_os2web_cp_service_doc_ref_target_id']['required'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Indholdsbeskrivelse */
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['id'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['table'] = 'field_data_field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['field'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['alter']['trim_whitespace'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['alter']['max_length'] = '140';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['alter']['strip_tags'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['alter']['trim'] = TRUE;
  /* Field: Content: Journalnummer */
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['id'] = 'field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['table'] = 'field_data_field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['field'] = 'field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['exclude'] = TRUE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_os2web_cp_service_file_id]';
  $handler->display->display_options['fields']['title']['alter']['alt'] = '[field_os2web_cp_service_content]';
  $handler->display->display_options['fields']['title']['alter']['link_class'] = 'qtip-this';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Indhold - FileID */
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['id'] = 'field_os2web_cp_service_file_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['table'] = 'field_data_field_os2web_cp_service_file_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['field'] = 'field_os2web_cp_service_file_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['alter']['text'] = '[title]';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['alter']['path'] = 'os2web/service/gf/v1/[field_os2web_cp_service_file_id-value]';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['alter']['alt'] = '[field_os2web_cp_service_content]';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['alter']['link_class'] = 'qtip-this';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['type'] = 'os2web_cp_service_file_formatter';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['settings'] = array(
    'base_url' => 'os2web/service/gf/v1/!id',
  );
  /* Field: Content: Journalnummer */
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['id'] = 'field_os2web_cp_service_doc_id_1';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['table'] = 'field_data_field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['field'] = 'field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['label'] = 'Dokumentnummer';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id_1']['element_label_colon'] = FALSE;
  /* Field: Content: Dokumentdato */
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['id'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['table'] = 'field_data_field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['field'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['label'] = 'Dato';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['settings'] = array(
    'format_type' => 'os2web_cp_service_date_only',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Ajax Loader */
  $handler->display->display_options['fields']['nothing']['id'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['table'] = 'views';
  $handler->display->display_options['fields']['nothing']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing']['ui_name'] = 'Ajax Loader';
  $handler->display->display_options['fields']['nothing']['label'] = '';
  $handler->display->display_options['fields']['nothing']['alter']['text'] = '<div class="os2web_cp_service-ajax-loader ajax-loader" style="display:none;"></div>';
  $handler->display->display_options['fields']['nothing']['element_label_colon'] = FALSE;
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Dokumentdato (field_os2web_cp_service_date) */
  $handler->display->display_options['sorts']['field_os2web_cp_service_date_value']['id'] = 'field_os2web_cp_service_date_value';
  $handler->display->display_options['sorts']['field_os2web_cp_service_date_value']['table'] = 'field_data_field_os2web_cp_service_date';
  $handler->display->display_options['sorts']['field_os2web_cp_service_date_value']['field'] = 'field_os2web_cp_service_date_value';
  $handler->display->display_options['sorts']['field_os2web_cp_service_date_value']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['sorts']['field_os2web_cp_service_date_value']['order'] = 'DESC';
  /* Sort criterion: Content: Journalnummer (field_os2web_cp_service_doc_id) */
  $handler->display->display_options['sorts']['field_os2web_cp_service_doc_id_value']['id'] = 'field_os2web_cp_service_doc_id_value';
  $handler->display->display_options['sorts']['field_os2web_cp_service_doc_id_value']['table'] = 'field_data_field_os2web_cp_service_doc_id';
  $handler->display->display_options['sorts']['field_os2web_cp_service_doc_id_value']['field'] = 'field_os2web_cp_service_doc_id_value';
  $handler->display->display_options['sorts']['field_os2web_cp_service_doc_id_value']['relationship'] = 'field_os2web_cp_service_doc_ref_target_id';
  $handler->display->display_options['sorts']['field_os2web_cp_service_doc_id_value']['order'] = 'DESC';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );
  $handler->display->display_options['arguments']['nid']['validate_options']['access'] = TRUE;
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: Unfiltered text */
  $handler->display->display_options['header']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['header']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['content'] = '<h2>Sags Nr.: [field_os2web_cp_service_case_id]</h2>';
  $handler->display->display_options['header']['area_text_custom']['tokenize'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Sagstype - Sagstype */
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['id'] = 'field_os2web_cp_service_casetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['table'] = 'field_data_field_os2web_cp_service_casetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['field'] = 'field_os2web_cp_service_casetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_casetype']['element_label_colon'] = FALSE;
  /* Field: Ren Addresse */
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['id'] = 'field_os2web_cp_service_address';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['table'] = 'field_data_field_os2web_cp_service_address';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['field'] = 'field_os2web_cp_service_address';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['ui_name'] = 'Ren Addresse';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['alter']['trim_whitespace'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_address']['type'] = 'text_plain';
  /* Field: Link til se alle på addresse */
  $handler->display->display_options['fields']['php']['id'] = 'php';
  $handler->display->display_options['fields']['php']['table'] = 'views';
  $handler->display->display_options['fields']['php']['field'] = 'php';
  $handler->display->display_options['fields']['php']['ui_name'] = 'Link til se alle på addresse';
  $handler->display->display_options['fields']['php']['label'] = '';
  $handler->display->display_options['fields']['php']['exclude'] = TRUE;
  $handler->display->display_options['fields']['php']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['php']['alter']['path'] = 'aaben-indsigt?search-text=[field_os2web_cp_service_address]&field_os2web_cp_service_date_from[value][date]=01-01-2007';
  $handler->display->display_options['fields']['php']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['php']['use_php_setup'] = 0;
  $handler->display->display_options['fields']['php']['php_output'] = '<?php
$node = node_load($data->nid);
if($node->field_os2web_cp_service_casetype[und][0][\'value\'] === \'EJSAG\') : ?>
Se alle sager på denne addresse
<?php endif; ?>';
  $handler->display->display_options['fields']['php']['use_php_click_sortable'] = '0';
  $handler->display->display_options['fields']['php']['php_click_sortable'] = '';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = '[title] <br>[nothing]';
  $handler->display->display_options['fields']['title']['alter']['path'] = 'aaben-indsigt?search-text=[title]';
  $handler->display->display_options['fields']['title']['alter']['max_length'] = '70';
  $handler->display->display_options['fields']['title']['alter']['trim'] = TRUE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Global: Custom text */
  $handler->display->display_options['fields']['nothing_1']['id'] = 'nothing_1';
  $handler->display->display_options['fields']['nothing_1']['table'] = 'views';
  $handler->display->display_options['fields']['nothing_1']['field'] = 'nothing';
  $handler->display->display_options['fields']['nothing_1']['label'] = 'Titel';
  $handler->display->display_options['fields']['nothing_1']['alter']['text'] = '[title] <br> [php]';
  $handler->display->display_options['fields']['nothing_1']['element_label_colon'] = FALSE;
  /* Field: Content: SagsID */
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['id'] = 'field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['table'] = 'field_data_field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['field'] = 'field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['element_label_colon'] = FALSE;
  /* Field: Title Clean */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['ui_name'] = 'Title Clean';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Dokumentdato */
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['id'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['table'] = 'field_data_field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['field'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['label'] = 'Dato';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['settings'] = array(
    'format_type' => 'os2web_cp_service_date_only',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );
  $handler->display->display_options['arguments']['nid']['validate_options']['access'] = TRUE;
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
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );
  $handler->display->display_options['path'] = 'cp-case/%';
  $translatables['os2web_cp_service_cp_case_view'] = array(
    t('Master'),
    t('mere'),
    t('Udfør'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Title'),
    t('Description'),
    t('more'),
    t('Beskrivelse af sagen'),
    t('Alle'),
    t('Documents'),
    t('Attachent to display all documents for a case'),
    t('<h2>Dokumenter</h2>'),
    t('Content entity referenced from field_os2web_cp_service_doc_ref'),
    t('Indholdsbeskrivelse'),
    t('Journalnummer'),
    t('[field_os2web_cp_service_content]'),
    t('[title]'),
    t('Dokumentnummer'),
    t('Dato'),
    t('<div class="os2web_cp_service-ajax-loader ajax-loader" style="display:none;"></div>'),
    t('Page'),
    t('<h2>Sags Nr.: [field_os2web_cp_service_case_id]</h2>'),
    t('[title] <br>[nothing]'),
    t('Titel'),
    t('[title] <br> [php]'),
  );
  $export['os2web_cp_service_cp_case_view'] = $view;

  $view = new view();
  $view->name = 'os2web_cp_service_cp_document_view';
  $view->description = 'Views to display the content of a CP Document';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'CP Document View';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'mere';
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'time';
  $handler->display->display_options['cache']['results_lifespan'] = '3600';
  $handler->display->display_options['cache']['results_lifespan_custom'] = '0';
  $handler->display->display_options['cache']['output_lifespan'] = '3600';
  $handler->display->display_options['cache']['output_lifespan_custom'] = '0';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Udfør';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
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
    'os2web_cp_service_cp_case' => 'os2web_cp_service_cp_case',
  );

  /* Display: Description */
  $handler = $view->new_display('attachment', 'Description', 'os2web_cp_service_cp_document_view_description_attachment');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Indholdsbeskrivelse */
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['id'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['table'] = 'field_data_field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['field'] = 'field_os2web_cp_service_content';
  $handler->display->display_options['fields']['field_os2web_cp_service_content']['label'] = 'Beskrivelse af dokumentet';
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'os2web_cp_service_cp_document' => 'os2web_cp_service_cp_document',
  );
  $handler->display->display_options['arguments']['nid']['validate_options']['access'] = TRUE;
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
    'os2web_cp_service_cp_document' => 'os2web_cp_service_cp_document',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  /* Filter criterion: Content: Indholdsbeskrivelse (field_os2web_cp_service_content) */
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['id'] = 'field_os2web_cp_service_content_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['table'] = 'field_data_field_os2web_cp_service_content';
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['field'] = 'field_os2web_cp_service_content_value';
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['operator'] = 'longerthan';
  $handler->display->display_options['filters']['field_os2web_cp_service_content_value']['value'] = '1';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: Unfiltered text */
  $handler->display->display_options['header']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['header']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['content'] = '<h2>Fra sag Nr.: [field_os2web_cp_service_case_id]</h2>
<p>Klik på sags nr. for at se alle dokumenter på sagen</p>';
  $handler->display->display_options['header']['area_text_custom']['tokenize'] = TRUE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Filformat */
  $handler->display->display_options['fields']['field_os2web_cp_service_filetype']['id'] = 'field_os2web_cp_service_filetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_filetype']['table'] = 'field_data_field_os2web_cp_service_filetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_filetype']['field'] = 'field_os2web_cp_service_filetype';
  $handler->display->display_options['fields']['field_os2web_cp_service_filetype']['exclude'] = TRUE;
  /* Field: Content: Journalnummer */
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['id'] = 'field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['table'] = 'field_data_field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['field'] = 'field_os2web_cp_service_doc_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_doc_id']['label'] = 'Dokumentnummer';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Dokumentnavn';
  $handler->display->display_options['fields']['title']['alter']['text'] = '[title] <span>Se alle sager på denne addresse</span>';
  $handler->display->display_options['fields']['title']['alter']['path'] = 'aaben-indsigt?search=[title]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: SagsID */
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['id'] = 'field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['table'] = 'field_data_field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['field'] = 'field_os2web_cp_service_case_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['alter']['path'] = 'sag/[field_os2web_cp_service_case_id]';
  $handler->display->display_options['fields']['field_os2web_cp_service_case_id']['element_label_colon'] = FALSE;
  /* Field: Content: Indhold - FileID */
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['id'] = 'field_os2web_cp_service_file_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['table'] = 'field_data_field_os2web_cp_service_file_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['field'] = 'field_os2web_cp_service_file_id';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['element_class'] = 'download';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['type'] = 'os2web_cp_service_file_formatter';
  $handler->display->display_options['fields']['field_os2web_cp_service_file_id']['settings'] = array(
    'base_url' => 'os2web/service/gf/v1/!id',
  );
  /* Field: Content: Dokumentdato */
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['id'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['table'] = 'field_data_field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['field'] = 'field_os2web_cp_service_date';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['label'] = 'Dato';
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_cp_service_date']['settings'] = array(
    'format_type' => 'short',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'os2web_cp_service_cp_document' => 'os2web_cp_service_cp_document',
  );
  $handler->display->display_options['arguments']['nid']['validate_options']['access'] = TRUE;
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
    'os2web_cp_service_cp_document' => 'os2web_cp_service_cp_document',
  );
  $handler->display->display_options['filters']['type']['group'] = 1;
  $handler->display->display_options['path'] = 'cp-document/%';
  $translatables['os2web_cp_service_cp_document_view'] = array(
    t('Master'),
    t('mere'),
    t('Udfør'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('Title'),
    t('Description'),
    t('more'),
    t('Beskrivelse af dokumentet'),
    t('Alle'),
    t('Page'),
    t('<h2>Fra sag Nr.: [field_os2web_cp_service_case_id]</h2>
<p>Klik på sags nr. for at se alle dokumenter på sagen</p>'),
    t('Filformat'),
    t('Dokumentnummer'),
    t('Dokumentnavn'),
    t('[title] <span>Se alle sager på denne addresse</span>'),
    t('Dato'),
  );
  $export['os2web_cp_service_cp_document_view'] = $view;

  return $export;
}
