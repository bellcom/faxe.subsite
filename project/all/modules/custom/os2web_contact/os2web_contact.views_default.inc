<?php
/**
 * @file
 * os2web_contact.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function os2web_contact_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'os2sub_kontaktblok';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OS2sub Kontaktblok';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'OS2sub Banner';
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
  $handler->display->display_options['pager']['options']['items_per_page'] = '25';
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
  $handler->display->display_options['row_plugin'] = 'node';
  /* Felt: Indhold: Titel */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sorteringskriterie: Indhold: Oprettelsesdato */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filterkriterie: Indhold: Udgivet */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filterkriterie: Indhold: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_contact_contact' => 'os2web_contact_contact',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'title' => 'title',
  );
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
  $handler->display->display_options['style_options']['sticky'] = TRUE;
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Forbindelse: Felt: Kontaktblok (field_os2web_base_field_contact) */
  $handler->display->display_options['relationships']['field_os2web_base_field_contact_nid']['id'] = 'field_os2web_base_field_contact_nid';
  $handler->display->display_options['relationships']['field_os2web_base_field_contact_nid']['table'] = 'field_data_field_os2web_base_field_contact';
  $handler->display->display_options['relationships']['field_os2web_base_field_contact_nid']['field'] = 'field_os2web_base_field_contact_nid';
  $handler->display->display_options['relationships']['field_os2web_base_field_contact_nid']['delta'] = '-1';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Felt: Indhold: Titel */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Felt: Indhold: Redigér-link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Redigér';
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_banner_vis_paa_sider']['id'] = 'field_banner_vis_paa_sider';
  $handler->display->display_options['fields']['field_banner_vis_paa_sider']['table'] = 'field_data_field_banner_vis_paa_sider';
  $handler->display->display_options['fields']['field_banner_vis_paa_sider']['field'] = 'field_banner_vis_paa_sider';
  /* Felt: Indhold: Titel */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'field_os2web_base_field_contact_nid';
  $handler->display->display_options['path'] = 'admin/content/os2sub-kontaktblokke';
  $handler->display->display_options['menu']['type'] = 'tab';
  $handler->display->display_options['menu']['title'] = 'Kontaktblokke';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $handler->display->display_options['tab_options']['weight'] = '0';

  /* Display: Forsidekontakt */
  $handler = $view->new_display('block', 'Forsidekontakt', 'block');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filterkriterie: Indhold: Udgivet */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filterkriterie: Indhold: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_contact_contact' => 'os2web_contact_contact',
  );
  /* Filterkriterie: Indhold: Forfremmet til forside */
  $handler->display->display_options['filters']['promote']['id'] = 'promote';
  $handler->display->display_options['filters']['promote']['table'] = 'node';
  $handler->display->display_options['filters']['promote']['field'] = 'promote';
  $handler->display->display_options['filters']['promote']['value'] = '1';

  /* Display: Indholdsside Banner Block */
  $handler = $view->new_display('block', 'Indholdsside Banner Block', 'block_1');
  $handler->display->display_options['defaults']['arguments'] = FALSE;
  /* Kontekstuelt filter: Indhold: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'field_banner_vis_paa_sider_nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'node';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['break_phrase'] = TRUE;
  $translatables['os2sub_kontaktblok'] = array(
    t('Master'),
    t('OS2sub Banner'),
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
    t('Page'),
    t('field_os2web_base_field_contact'),
    t('Redigér'),
    t('Handler i stykker field_data_field_banner_vis_paa_sider.field_banner_vis_paa_sider'),
    t('Titel'),
    t('Forsidekontakt'),
    t('Indholdsside Banner Block'),
    t('Alle'),
  );
  $export['os2sub_kontaktblok'] = $view;

  $view = new view();
  $view->name = 'os2web_contact_view_contact';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Kontaktblok';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Kontakt';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'mere';
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['query_comment'] = FALSE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Udfør';
  $handler->display->display_options['exposed_form']['options']['reset_button_label'] = 'Gendan';
  $handler->display->display_options['exposed_form']['options']['exposed_sorts_label'] = 'Sortér efter';
  $handler->display->display_options['exposed_form']['options']['sort_asc_label'] = 'Stigende';
  $handler->display->display_options['exposed_form']['options']['sort_desc_label'] = 'Faldende';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Sidefod: Global: Tekstområde */
  $handler->display->display_options['footer']['area']['id'] = 'area';
  $handler->display->display_options['footer']['area']['table'] = 'views';
  $handler->display->display_options['footer']['area']['field'] = 'area';
  $handler->display->display_options['footer']['area']['content'] = '<a href="/kontakt" title="Gå til kontaktoversigt">Gå til kontaktoversigt</a>';
  $handler->display->display_options['footer']['area']['format'] = 'full_html';
  /* Felt: Indhold: Titel */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = 'Kontakt [title]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_class'] = 'kontaktblok-overskrift';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Felt: Indhold: Overskrift på kontaktblok */
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['id'] = 'field_os2web_contact_field_dept';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['table'] = 'field_data_field_os2web_contact_field_dept';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['field'] = 'field_os2web_contact_field_dept';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['element_type'] = 'h3';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['element_default_classes'] = FALSE;
  /* Felt: Indhold: Adresse */
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['id'] = 'field_os2web_contact_field_addr';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['table'] = 'field_data_field_os2web_contact_field_addr';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['field'] = 'field_os2web_contact_field_addr';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['element_label_colon'] = FALSE;
  /* Felt: Indhold: Postnummer */
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['id'] = 'field_os2web_contact_field_zip';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['table'] = 'field_data_field_os2web_contact_field_zip';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['field'] = 'field_os2web_contact_field_zip';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['element_label_colon'] = FALSE;
  /* Felt: Indhold: Eget indhold */
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['id'] = 'field_os2web_contact_field_info';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['table'] = 'field_data_field_os2web_contact_field_info';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['field'] = 'field_os2web_contact_field_info';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['element_label_colon'] = FALSE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['id'] = 'field_os2web_contact_field_email';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['table'] = 'field_data_field_os2web_contact_field_email';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['field'] = 'field_os2web_contact_field_email';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['element_label_colon'] = FALSE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['id'] = 'field_os2web_contact_field_phone';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['table'] = 'field_data_field_os2web_contact_field_phone';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['field'] = 'field_os2web_contact_field_phone';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['alter']['text'] = '<a id="tlf" href="tel:[field_os2web_contact_field_phone]" title="Telefon: [field_os2web_contact_field_phone]">[field_os2web_contact_field_phone]</a>';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_class'] = 'telefonnummer, kontaktblok-indhold';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_default_classes'] = FALSE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['id'] = 'field_os2web_contact_field_mowcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['table'] = 'field_data_field_os2web_contact_field_mowcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['field'] = 'field_os2web_contact_field_mowcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['alter']['text'] = ' - [field_os2web_contact_field_mowcl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['id'] = 'field_os2web_contact_field_mowop';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['table'] = 'field_data_field_os2web_contact_field_mowop';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['field'] = 'field_os2web_contact_field_mowop';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['alter']['text'] = '<div class="dag">Mandag - onsdag:</div><div class="aaben"> [field_os2web_contact_field_mowop][field_os2web_contact_field_mowcl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['id'] = 'field_os2web_contact_field_moncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['table'] = 'field_data_field_os2web_contact_field_moncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['field'] = 'field_os2web_contact_field_moncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['alter']['text'] = ' - [field_os2web_contact_field_moncl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['id'] = 'field_os2web_contact_field_monop';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['table'] = 'field_data_field_os2web_contact_field_monop';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['field'] = 'field_os2web_contact_field_monop';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['alter']['text'] = '<div class="dag">Mandag:</div><div class="aaben"> [field_os2web_contact_field_monop][field_os2web_contact_field_moncl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['id'] = 'field_os2web_contact_field_tuecl';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['table'] = 'field_data_field_os2web_contact_field_tuecl';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['field'] = 'field_os2web_contact_field_tuecl';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['alter']['text'] = ' - [field_os2web_contact_field_tuecl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['id'] = 'field_os2web_contact_field_tueop';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['table'] = 'field_data_field_os2web_contact_field_tueop';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['field'] = 'field_os2web_contact_field_tueop';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['alter']['text'] = '<div class="dag">Tirsdag:</div><div class="aaben"> [field_os2web_contact_field_tueop][field_os2web_contact_field_tuecl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['id'] = 'field_os2web_contact_field_wedcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['table'] = 'field_data_field_os2web_contact_field_wedcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['field'] = 'field_os2web_contact_field_wedcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['alter']['text'] = ' - [field_os2web_contact_field_wedcl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['id'] = 'field_os2web_contact_field_wedop';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['table'] = 'field_data_field_os2web_contact_field_wedop';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['field'] = 'field_os2web_contact_field_wedop';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['alter']['text'] = '<div class="dag">Onsdag:</div><div class="aaben"> [field_os2web_contact_field_wedop][field_os2web_contact_field_wedcl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['id'] = 'field_os2web_contact_field_thucl';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['table'] = 'field_data_field_os2web_contact_field_thucl';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['field'] = 'field_os2web_contact_field_thucl';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['alter']['text'] = ' - [field_os2web_contact_field_thucl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['id'] = 'field_os2web_contact_field_thuop';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['table'] = 'field_data_field_os2web_contact_field_thuop';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['field'] = 'field_os2web_contact_field_thuop';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['alter']['text'] = '<div class="dag">Torsdag:</div><div class="aaben"> [field_os2web_contact_field_thuop][field_os2web_contact_field_thucl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['id'] = 'field_os2web_contact_field_fricl';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['table'] = 'field_data_field_os2web_contact_field_fricl';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['field'] = 'field_os2web_contact_field_fricl';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['alter']['text'] = ' - [field_os2web_contact_field_fricl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['id'] = 'field_os2web_contact_field_friop';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['table'] = 'field_data_field_os2web_contact_field_friop';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['field'] = 'field_os2web_contact_field_friop';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['alter']['text'] = '<div class="dag">Fredag:</div><div class="aaben"> [field_os2web_contact_field_friop][field_os2web_contact_field_fricl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['id'] = 'field_os2web_contact_field_satcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['table'] = 'field_data_field_os2web_contact_field_satcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['field'] = 'field_os2web_contact_field_satcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['alter']['text'] = ' - [field_os2web_contact_field_satcl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['id'] = 'field_os2web_contact_field_satop';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['table'] = 'field_data_field_os2web_contact_field_satop';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['field'] = 'field_os2web_contact_field_satop';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['alter']['text'] = '<div class="dag">Lørdag:</div><div class="aaben"> [field_os2web_contact_field_satop][field_os2web_contact_field_satcl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['id'] = 'field_os2web_contact_field_suncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['table'] = 'field_data_field_os2web_contact_field_suncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['field'] = 'field_os2web_contact_field_suncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['alter']['text'] = ' - [field_os2web_contact_field_friop][field_os2web_contact_field_fricl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['id'] = 'field_os2web_contact_field_sunop';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['table'] = 'field_data_field_os2web_contact_field_sunop';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['field'] = 'field_os2web_contact_field_sunop';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['alter']['text'] = '<div class="dag">Søndag:</div><div class="aaben"> [field_os2web_contact_field_sunop][field_os2web_contact_field_suncl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['id'] = 'field_os2web_contact_field_show';
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['table'] = 'field_data_field_os2web_contact_field_show';
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['field'] = 'field_os2web_contact_field_show';
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['alter']['text'] = '[field_os2web_contact_field_mowop]
[field_os2web_contact_field_monop]
[field_os2web_contact_field_tueop]
[field_os2web_contact_field_wedop]
[field_os2web_contact_field_thuop]
[field_os2web_contact_field_friop]
[field_os2web_contact_field_satop]
[field_os2web_contact_field_sunop] ';
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['element_class'] = 'aabningstider';
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['empty_zero'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_show']['hide_alter_empty'] = FALSE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['id'] = 'field_os2web_contact_field_callc';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['table'] = 'field_data_field_os2web_contact_field_callc';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['field'] = 'field_os2web_contact_field_callc';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['alter']['text'] = '<h3>Callcenter</h3>
<div class="telfonnummer"><a href="tel:87535000">87 53 50 00</a></div>
<div class="dag">Mandag-onsdag:</div><div class="aaben">08.30 - 15.00</div>
<div class="dag">Torsdag:</div><div class="aaben"> 08.30 - 17.00</div>
<div class="dag">Fredag:</div><div class="aaben> 08.30 - 12.00</div>

<p>Borgerservice i Hornslet og Ebeltoft har lukket fredag.</p>

<p>Du kan få hjælp til selvbetjening på <a href="http://bibliotek.syddjurs.dk">bibliotekerne</a>.</p>';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['element_label_type'] = 'div';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['element_label_class'] = 'kontaktblok-indhold';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['empty_zero'] = TRUE;
  /* Felt: Indhold: Redigér-link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = '';
  $handler->display->display_options['fields']['edit_node']['exclude'] = TRUE;
  $handler->display->display_options['fields']['edit_node']['element_label_colon'] = FALSE;
  /* Felt: Global: Kontekstuelle links */
  $handler->display->display_options['fields']['contextual_links']['id'] = 'contextual_links';
  $handler->display->display_options['fields']['contextual_links']['table'] = 'views';
  $handler->display->display_options['fields']['contextual_links']['field'] = 'contextual_links';
  $handler->display->display_options['fields']['contextual_links']['label'] = '';
  $handler->display->display_options['fields']['contextual_links']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['contextual_links']['fields'] = array(
    'edit_node' => 'edit_node',
    'title' => 0,
    'field_os2web_contact_field_dept' => 0,
    'field_os2web_contact_field_addr' => 0,
    'field_os2web_contact_field_zip' => 0,
    'field_os2web_contact_field_info' => 0,
    'field_os2web_contact_field_email' => 0,
    'field_os2web_contact_field_phone' => 0,
    'field_os2web_contact_field_mowcl' => 0,
    'field_os2web_contact_field_mowop' => 0,
    'field_os2web_contact_field_moncl' => 0,
    'field_os2web_contact_field_monop' => 0,
    'field_os2web_contact_field_tuecl' => 0,
    'field_os2web_contact_field_tueop' => 0,
    'field_os2web_contact_field_wedcl' => 0,
    'field_os2web_contact_field_wedop' => 0,
    'field_os2web_contact_field_thucl' => 0,
    'field_os2web_contact_field_thuop' => 0,
    'field_os2web_contact_field_fricl' => 0,
    'field_os2web_contact_field_friop' => 0,
    'field_os2web_contact_field_satcl' => 0,
    'field_os2web_contact_field_satop' => 0,
    'field_os2web_contact_field_suncl' => 0,
    'field_os2web_contact_field_sunop' => 0,
    'field_os2web_contact_field_show' => 0,
    'field_os2web_contact_field_callc' => 0,
  );
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['id'] = 'field_os2web_contact_field_show_1';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['table'] = 'field_data_field_os2web_contact_field_show';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['field'] = 'field_os2web_contact_field_show';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['exclude'] = TRUE;
  /* Sorteringskriterie: Indhold: Oprettelsesdato */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Kontekstuelt filter: Indhold: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['exception']['title'] = 'Alle';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'php';
  $handler->display->display_options['arguments']['nid']['default_argument_options']['code'] = 'if (function_exists(\'os2web_contact_get_block\')) {
return os2web_contact_get_block();
}';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  /* Filterkriterie: Indhold: Udgivet */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filterkriterie: Indhold: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'os2web_contact_contact' => 'os2web_contact_contact',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Felt: Indhold: Titel */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = 'Kontakt [title]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'div';
  $handler->display->display_options['fields']['title']['element_class'] = 'kontaktblok-overskrift';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Felt: Indhold: Overskrift på kontaktblok */
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['id'] = 'field_os2web_contact_field_dept';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['table'] = 'field_data_field_os2web_contact_field_dept';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['field'] = 'field_os2web_contact_field_dept';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['element_type'] = 'h3';
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_dept']['element_default_classes'] = FALSE;
  /* Felt: Indhold: Adresse */
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['id'] = 'field_os2web_contact_field_addr';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['table'] = 'field_data_field_os2web_contact_field_addr';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['field'] = 'field_os2web_contact_field_addr';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_addr']['element_label_colon'] = FALSE;
  /* Felt: Indhold: Postnummer */
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['id'] = 'field_os2web_contact_field_zip';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['table'] = 'field_data_field_os2web_contact_field_zip';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['field'] = 'field_os2web_contact_field_zip';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_zip']['element_label_colon'] = FALSE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['id'] = 'field_os2web_contact_field_email';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['table'] = 'field_data_field_os2web_contact_field_email';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['field'] = 'field_os2web_contact_field_email';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['alter']['text'] = '<a href="mailto:[field_os2web_contact_field_email-value]">[field_os2web_contact_field_email]</a>';
  $handler->display->display_options['fields']['field_os2web_contact_field_email']['element_label_colon'] = FALSE;
  /* Felt: Indhold: Eget indhold */
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['id'] = 'field_os2web_contact_field_info';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['table'] = 'field_data_field_os2web_contact_field_info';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['field'] = 'field_os2web_contact_field_info';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_info']['element_label_colon'] = FALSE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['id'] = 'field_os2web_contact_field_phone';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['table'] = 'field_data_field_os2web_contact_field_phone';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['field'] = 'field_os2web_contact_field_phone';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['alter']['text'] = '<a id="tlf" href="tel:[field_os2web_contact_field_phone]" title="Telefon: [field_os2web_contact_field_phone]">[field_os2web_contact_field_phone]</a>';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_class'] = 'telefonnummer, kontaktblok-indhold';
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_phone']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['id'] = 'field_os2web_contact_field_mowcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['table'] = 'field_data_field_os2web_contact_field_mowcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['field'] = 'field_os2web_contact_field_mowcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['alter']['text'] = ' - [field_os2web_contact_field_mowcl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowcl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['id'] = 'field_os2web_contact_field_mowop';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['table'] = 'field_data_field_os2web_contact_field_mowop';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['field'] = 'field_os2web_contact_field_mowop';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['alter']['text'] = '<div class="dag">Mandag - onsdag:</div><div class="aaben"> [field_os2web_contact_field_mowop][field_os2web_contact_field_mowcl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_mowop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['id'] = 'field_os2web_contact_field_moncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['table'] = 'field_data_field_os2web_contact_field_moncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['field'] = 'field_os2web_contact_field_moncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['alter']['text'] = ' - [field_os2web_contact_field_moncl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_moncl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['id'] = 'field_os2web_contact_field_monop';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['table'] = 'field_data_field_os2web_contact_field_monop';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['field'] = 'field_os2web_contact_field_monop';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['alter']['text'] = '<div class="dag">Mandag:</div><div class="aaben"> [field_os2web_contact_field_monop][field_os2web_contact_field_moncl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_monop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['id'] = 'field_os2web_contact_field_tuecl';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['table'] = 'field_data_field_os2web_contact_field_tuecl';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['field'] = 'field_os2web_contact_field_tuecl';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['alter']['text'] = ' - [field_os2web_contact_field_tuecl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_tuecl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['id'] = 'field_os2web_contact_field_tueop';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['table'] = 'field_data_field_os2web_contact_field_tueop';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['field'] = 'field_os2web_contact_field_tueop';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['alter']['text'] = '<div class="dag">Tirsdag:</div><div class="aaben"> [field_os2web_contact_field_tueop][field_os2web_contact_field_tuecl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_tueop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['id'] = 'field_os2web_contact_field_wedcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['table'] = 'field_data_field_os2web_contact_field_wedcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['field'] = 'field_os2web_contact_field_wedcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['alter']['text'] = ' - [field_os2web_contact_field_wedcl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedcl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['id'] = 'field_os2web_contact_field_wedop';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['table'] = 'field_data_field_os2web_contact_field_wedop';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['field'] = 'field_os2web_contact_field_wedop';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['alter']['text'] = '<div class="dag">Onsdag:</div><div class="aaben"> [field_os2web_contact_field_wedop][field_os2web_contact_field_wedcl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_wedop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['id'] = 'field_os2web_contact_field_thucl';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['table'] = 'field_data_field_os2web_contact_field_thucl';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['field'] = 'field_os2web_contact_field_thucl';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['alter']['text'] = ' - [field_os2web_contact_field_thucl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_thucl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['id'] = 'field_os2web_contact_field_thuop';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['table'] = 'field_data_field_os2web_contact_field_thuop';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['field'] = 'field_os2web_contact_field_thuop';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['alter']['text'] = '<div class="dag">Torsdag:</div><div class="aaben"> [field_os2web_contact_field_thuop][field_os2web_contact_field_thucl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_thuop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['id'] = 'field_os2web_contact_field_fricl';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['table'] = 'field_data_field_os2web_contact_field_fricl';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['field'] = 'field_os2web_contact_field_fricl';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['alter']['text'] = ' - [field_os2web_contact_field_fricl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_fricl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['id'] = 'field_os2web_contact_field_friop';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['table'] = 'field_data_field_os2web_contact_field_friop';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['field'] = 'field_os2web_contact_field_friop';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['alter']['text'] = '<div class="dag">Fredag:</div><div class="aaben"> [field_os2web_contact_field_friop][field_os2web_contact_field_fricl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_friop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['id'] = 'field_os2web_contact_field_satcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['table'] = 'field_data_field_os2web_contact_field_satcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['field'] = 'field_os2web_contact_field_satcl';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['alter']['text'] = ' - [field_os2web_contact_field_satcl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satcl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['id'] = 'field_os2web_contact_field_satop';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['table'] = 'field_data_field_os2web_contact_field_satop';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['field'] = 'field_os2web_contact_field_satop';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['alter']['text'] = '<div class="dag">Lørdag:</div><div class="aaben"> [field_os2web_contact_field_satop][field_os2web_contact_field_satcl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_satop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['id'] = 'field_os2web_contact_field_suncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['table'] = 'field_data_field_os2web_contact_field_suncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['field'] = 'field_os2web_contact_field_suncl';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['alter']['text'] = ' - [field_os2web_contact_field_friop][field_os2web_contact_field_fricl]';
  $handler->display->display_options['fields']['field_os2web_contact_field_suncl']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['id'] = 'field_os2web_contact_field_sunop';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['table'] = 'field_data_field_os2web_contact_field_sunop';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['field'] = 'field_os2web_contact_field_sunop';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['alter']['text'] = '<div class="dag">Søndag:</div><div class="aaben"> [field_os2web_contact_field_sunop][field_os2web_contact_field_suncl]</div>';
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_sunop']['hide_empty'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['id'] = 'field_os2web_contact_field_show_1';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['table'] = 'field_data_field_os2web_contact_field_show';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['field'] = 'field_os2web_contact_field_show';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['alter']['text'] = '<h3>Åbningstider</h3>
[field_os2web_contact_field_mowop]
[field_os2web_contact_field_monop]
[field_os2web_contact_field_tueop]
[field_os2web_contact_field_wedop]
[field_os2web_contact_field_thuop]
[field_os2web_contact_field_friop]
[field_os2web_contact_field_satop]
[field_os2web_contact_field_sunop] ';
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['hide_empty'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_show_1']['empty_zero'] = TRUE;
  /* Felt: Handler mangler eller er i stykker */
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['id'] = 'field_os2web_contact_field_callc';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['table'] = 'field_data_field_os2web_contact_field_callc';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['field'] = 'field_os2web_contact_field_callc';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['label'] = '';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['alter']['text'] = '<h3>Callcenter</h3>
<div class="telfonnummer"><a href="tel:87535000">87 53 50 00</a></div>
<div class="dag">Mandag-onsdag:</div><div class="aaben">08.30 - 15.00</div>
<div class="dag">Torsdag:</div><div class="aaben"> 08.30 - 17.00</div>
<div class="dag">Fredag:</div><div class="aaben> 08.30 - 12.00</div>

<p>Borgerservice i Hornslet og Ebeltoft har lukket fredag.</p>

<p>Du kan få hjælp til selvbetjening på bibliotekerne. Besøg bibliotekets hjemmeside <a href="http://bibliotek.syddjurs.dk">her</a></p>';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['element_label_type'] = 'div';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['element_label_class'] = 'kontaktblok-indhold';
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_os2web_contact_field_callc']['empty_zero'] = TRUE;
  /* Felt: Indhold: Redigér-link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = '';
  $handler->display->display_options['fields']['edit_node']['exclude'] = TRUE;
  $handler->display->display_options['fields']['edit_node']['element_label_colon'] = FALSE;
  /* Felt: Global: Kontekstuelle links */
  $handler->display->display_options['fields']['contextual_links']['id'] = 'contextual_links';
  $handler->display->display_options['fields']['contextual_links']['table'] = 'views';
  $handler->display->display_options['fields']['contextual_links']['field'] = 'contextual_links';
  $handler->display->display_options['fields']['contextual_links']['label'] = '';
  $handler->display->display_options['fields']['contextual_links']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['contextual_links']['fields'] = array(
    'edit_node' => 'edit_node',
    'title' => 0,
    'field_os2web_contact_field_dept' => 0,
    'field_os2web_contact_field_addr' => 0,
    'field_os2web_contact_field_zip' => 0,
    'field_os2web_contact_field_info' => 0,
    'field_os2web_contact_field_email' => 0,
    'field_os2web_contact_field_phone' => 0,
    'field_os2web_contact_field_mowcl' => 0,
    'field_os2web_contact_field_mowop' => 0,
    'field_os2web_contact_field_moncl' => 0,
    'field_os2web_contact_field_monop' => 0,
    'field_os2web_contact_field_tuecl' => 0,
    'field_os2web_contact_field_tueop' => 0,
    'field_os2web_contact_field_wedcl' => 0,
    'field_os2web_contact_field_wedop' => 0,
    'field_os2web_contact_field_thucl' => 0,
    'field_os2web_contact_field_thuop' => 0,
    'field_os2web_contact_field_fricl' => 0,
    'field_os2web_contact_field_friop' => 0,
    'field_os2web_contact_field_satcl' => 0,
    'field_os2web_contact_field_satop' => 0,
    'field_os2web_contact_field_suncl' => 0,
    'field_os2web_contact_field_sunop' => 0,
    'field_os2web_contact_field_show' => 0,
    'field_os2web_contact_field_callc' => 0,
  );

  /* Display: Kontaktblok */
  $handler = $view->new_display('panel_pane', 'Kontaktblok', 'panel_pane_1');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
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
    'nid' => array(
      'type' => 'user',
      'context' => 'entity:user.uid',
      'context_optional' => 0,
      'panel' => '0',
      'fixed' => '',
      'label' => 'Indhold: Nid',
    ),
  );
  $translatables['os2web_contact_view_contact'] = array(
    t('Master'),
    t('Kontakt'),
    t('mere'),
    t('Udfør'),
    t('Gendan'),
    t('Sortér efter'),
    t('Stigende'),
    t('Faldende'),
    t('<a href="/kontakt" title="Gå til kontaktoversigt">Gå til kontaktoversigt</a>'),
    t('Kontakt [title]'),
    t('<a id="tlf" href="tel:[field_os2web_contact_field_phone]" title="Telefon: [field_os2web_contact_field_phone]">[field_os2web_contact_field_phone]</a>'),
    t(' - [field_os2web_contact_field_mowcl]'),
    t('<div class="dag">Mandag - onsdag:</div><div class="aaben"> [field_os2web_contact_field_mowop][field_os2web_contact_field_mowcl]</div>'),
    t('Handler i stykker field_data_field_os2web_contact_field_moncl.field_os2web_contact_field_moncl'),
    t(' - [field_os2web_contact_field_moncl]'),
    t('<div class="dag">Mandag:</div><div class="aaben"> [field_os2web_contact_field_monop][field_os2web_contact_field_moncl]</div>'),
    t('Handler i stykker field_data_field_os2web_contact_field_tuecl.field_os2web_contact_field_tuecl'),
    t(' - [field_os2web_contact_field_tuecl]'),
    t('<div class="dag">Tirsdag:</div><div class="aaben"> [field_os2web_contact_field_tueop][field_os2web_contact_field_tuecl]</div>'),
    t('Handler i stykker field_data_field_os2web_contact_field_wedcl.field_os2web_contact_field_wedcl'),
    t(' - [field_os2web_contact_field_wedcl]'),
    t('<div class="dag">Onsdag:</div><div class="aaben"> [field_os2web_contact_field_wedop][field_os2web_contact_field_wedcl]</div>'),
    t('Handler i stykker field_data_field_os2web_contact_field_thucl.field_os2web_contact_field_thucl'),
    t(' - [field_os2web_contact_field_thucl]'),
    t('<div class="dag">Torsdag:</div><div class="aaben"> [field_os2web_contact_field_thuop][field_os2web_contact_field_thucl]</div>'),
    t('Handler i stykker field_data_field_os2web_contact_field_fricl.field_os2web_contact_field_fricl'),
    t(' - [field_os2web_contact_field_fricl]'),
    t('<div class="dag">Fredag:</div><div class="aaben"> [field_os2web_contact_field_friop][field_os2web_contact_field_fricl]</div>'),
    t('Handler i stykker field_data_field_os2web_contact_field_satcl.field_os2web_contact_field_satcl'),
    t(' - [field_os2web_contact_field_satcl]'),
    t('<div class="dag">Lørdag:</div><div class="aaben"> [field_os2web_contact_field_satop][field_os2web_contact_field_satcl]</div>'),
    t('Handler i stykker field_data_field_os2web_contact_field_suncl.field_os2web_contact_field_suncl'),
    t(' - [field_os2web_contact_field_friop][field_os2web_contact_field_fricl]'),
    t('<div class="dag">Søndag:</div><div class="aaben"> [field_os2web_contact_field_sunop][field_os2web_contact_field_suncl]</div>'),
    t('[field_os2web_contact_field_mowop]
[field_os2web_contact_field_monop]
[field_os2web_contact_field_tueop]
[field_os2web_contact_field_wedop]
[field_os2web_contact_field_thuop]
[field_os2web_contact_field_friop]
[field_os2web_contact_field_satop]
[field_os2web_contact_field_sunop] '),
    t('<h3>Callcenter</h3>
<div class="telfonnummer"><a href="tel:87535000">87 53 50 00</a></div>
<div class="dag">Mandag-onsdag:</div><div class="aaben">08.30 - 15.00</div>
<div class="dag">Torsdag:</div><div class="aaben"> 08.30 - 17.00</div>
<div class="dag">Fredag:</div><div class="aaben> 08.30 - 12.00</div>

<p>Borgerservice i Hornslet og Ebeltoft har lukket fredag.</p>

<p>Du kan få hjælp til selvbetjening på <a href="http://bibliotek.syddjurs.dk">bibliotekerne</a>.</p>'),
    t('Handler i stykker field_data_field_os2web_contact_field_show.field_os2web_contact_field_show'),
    t('Alle'),
    t('Block'),
    t('<a href="mailto:[field_os2web_contact_field_email-value]">[field_os2web_contact_field_email]</a>'),
    t('<h3>Åbningstider</h3>
[field_os2web_contact_field_mowop]
[field_os2web_contact_field_monop]
[field_os2web_contact_field_tueop]
[field_os2web_contact_field_wedop]
[field_os2web_contact_field_thuop]
[field_os2web_contact_field_friop]
[field_os2web_contact_field_satop]
[field_os2web_contact_field_sunop] '),
    t('<h3>Callcenter</h3>
<div class="telfonnummer"><a href="tel:87535000">87 53 50 00</a></div>
<div class="dag">Mandag-onsdag:</div><div class="aaben">08.30 - 15.00</div>
<div class="dag">Torsdag:</div><div class="aaben"> 08.30 - 17.00</div>
<div class="dag">Fredag:</div><div class="aaben> 08.30 - 12.00</div>

<p>Borgerservice i Hornslet og Ebeltoft har lukket fredag.</p>

<p>Du kan få hjælp til selvbetjening på bibliotekerne. Besøg bibliotekets hjemmeside <a href="http://bibliotek.syddjurs.dk">her</a></p>'),
    t('Kontaktblok'),
    t('View panes'),
  );
  $export['os2web_contact_view_contact'] = $view;

  return $export;
}
