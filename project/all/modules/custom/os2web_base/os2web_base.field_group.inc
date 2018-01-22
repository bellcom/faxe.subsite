<?php
/**
 * @file
 * os2web_base.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function os2web_base_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_afsnit|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_afsnit';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Afsnit',
    'weight' => '6',
    'children' => array(
      0 => 'field_afsnit',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-afsnit field-group-htab',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_afsnit|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_billeder|taxonomy_term|os2web_base_tax_site_structure|form';
  $field_group->group_name = 'group_billeder';
  $field_group->entity_type = 'taxonomy_term';
  $field_group->bundle = 'os2web_base_tax_site_structure';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_term';
  $field_group->data = array(
    'label' => 'Billeder og filer',
    'weight' => '14',
    'children' => array(
      0 => 'field_os2web_base_field_banner',
      1 => 'field_os2web_base_field_logo',
      2 => 'field_os2web_base_field_image',
      3 => 'field_os2web_base_field_media',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Billeder og filer',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => '',
        'classes' => 'group-billeder field-group-htab',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $field_groups['group_billeder|taxonomy_term|os2web_base_tax_site_structure|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_indstillinger|taxonomy_term|os2web_base_tax_site_structure|form';
  $field_group->group_name = 'group_indstillinger';
  $field_group->entity_type = 'taxonomy_term';
  $field_group->bundle = 'os2web_base_tax_site_structure';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_term';
  $field_group->data = array(
    'label' => 'Indstillinger',
    'weight' => '18',
    'children' => array(
      0 => 'field_os2web_base_field_contact',
      1 => 'field_list_as_spotboks',
      2 => 'field_os2web_base_field_related',
      3 => 'field_os2web_base_field_hidlinks',
      4 => 'field_alternative_display',
      5 => 'field_os2web_base_field_ext_link',
      6 => 'field_svendborg_hide_sidebar',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-indstillinger field-group-htab',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_indstillinger|taxonomy_term|os2web_base_tax_site_structure|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_3|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_os2web_base_group_3';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Indstillinger',
    'weight' => '10',
    'children' => array(
      0 => 'field_svendborg_hide_sidebar',
      1 => 'field_os2web_base_field_contact',
      2 => 'field_os2web_base_field_hidlinks',
      3 => 'field_svendborg_hide_contact',
      4 => 'field_os2sub_menuheader',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_os2web_base_group_3|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_content|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_os2web_base_group_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Indholdsside',
    'weight' => '2',
    'children' => array(
      0 => 'group_afsnit',
      1 => 'group_os2web_base_group_3',
      2 => 'group_os2web_base_group_extras',
      3 => 'group_os2web_base_group_general',
      4 => 'group_os2web_base_group_images',
      5 => 'group_relationer',
      6 => 'group_spotbokse',
    ),
    'format_type' => 'htabs',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => '',
      ),
    ),
  );
  $field_groups['group_os2web_base_group_content|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_document|node|os2web_base_contentpage|default';
  $field_group->group_name = 'group_os2web_base_group_document';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'default';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Hentet fra kommunens sagssystem',
    'weight' => '10',
    'children' => array(),
    'format_type' => 'hidden',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(),
    ),
  );
  $field_groups['group_os2web_base_group_document|node|os2web_base_contentpage|default'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = TRUE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_esdh|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_os2web_base_group_esdh';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Sager og dokumenter',
    'weight' => '6',
    'children' => array(
      0 => 'field_os2web_base_field_case',
      1 => 'field_os2web_base_field_doc',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Sager og dokumenter',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $field_groups['group_os2web_base_group_esdh|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_extras|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_os2web_base_group_extras';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Emneord',
    'weight' => '7',
    'children' => array(
      0 => 'field_os2web_base_field_edi_tags',
      1 => 'field_os2web_base_field_loca_ref',
      2 => 'field_os2web_base_field_organiz',
      3 => 'field_os2web_base_field_politics',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_os2web_base_group_extras|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_general|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_os2web_base_group_general';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Tekst',
    'weight' => '4',
    'children' => array(
      0 => 'body',
      1 => 'field_os2web_base_field_summary',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Tekst',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $field_groups['group_os2web_base_group_general|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = TRUE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_hidden|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_os2web_base_group_hidden';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Skjult',
    'weight' => '15',
    'children' => array(),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_os2web_base_group_hidden|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_hidden|node|os2web_base_gallery|form';
  $field_group->group_name = 'group_os2web_base_group_hidden';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Skjult',
    'weight' => '6',
    'children' => array(),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_os2web_base_group_hidden|node|os2web_base_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_hidden|node|os2web_base_news|form';
  $field_group->group_name = 'group_os2web_base_group_hidden';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Skjult',
    'weight' => '4',
    'children' => array(),
    'format_type' => 'div',
    'format_settings' => array(
      'label' => 'Skjult',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => 'node_os2web_base_news_form_group_os2web_base_group_hidden',
        'classes' => '',
        'description' => '',
        'show_label' => '1',
        'label_element' => 'h3',
        'effect' => 'none',
        'speed' => 'fast',
      ),
      'formatter' => 'open',
    ),
  );
  $field_groups['group_os2web_base_group_hidden|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_images|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_os2web_base_group_images';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Billeder og filer',
    'weight' => '5',
    'children' => array(
      0 => 'field_baggrund',
      1 => 'field_os2web_base_banner',
      2 => 'field_os2web_base_field_image',
      3 => 'field_os2web_base_field_media',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_os2web_base_group_images|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_image|node|os2web_base_news|form';
  $field_group->group_name = 'group_os2web_base_group_image';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_news_tabs';
  $field_group->data = array(
    'label' => 'Billede',
    'weight' => '2',
    'children' => array(
      0 => 'field_os2web_base_field_lead_img',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_os2web_base_group_image|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_settings|node|os2web_base_news|form';
  $field_group->group_name = 'group_os2web_base_group_settings';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_news_tabs';
  $field_group->data = array(
    'label' => 'Indstillinger',
    'weight' => '7',
    'children' => array(
      0 => 'field_os2web_news_page_archive',
      1 => 'field_svendborg_hide_sidebar',
      2 => 'field_os2web_base_field_contact',
      3 => 'field_os2web_base_field_hidlinks',
      4 => 'field_os2web_base_field_promote',
      5 => 'field_baggrund',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Indstillinger',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $field_groups['group_os2web_base_group_settings|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_taxono|node|os2web_base_gallery|form';
  $field_group->group_name = 'group_os2web_base_group_taxono';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_gallery';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_formular';
  $field_group->data = array(
    'label' => 'Taksonomi',
    'weight' => '5',
    'children' => array(
      0 => 'field_os2web_base_field_edi_tags',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_os2web_base_group_taxono|node|os2web_base_gallery|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_taxono|node|os2web_base_iframe|form';
  $field_group->group_name = 'group_os2web_base_group_taxono';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_iframe';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Taksonomi',
    'weight' => '8',
    'children' => array(
      0 => 'field_os2web_base_field_kle_ref',
      1 => 'field_os2web_base_field_edi_tags',
      2 => 'field_os2web_base_field_organiz',
      3 => 'field_os2web_base_field_loca_ref',
      4 => 'field_os2web_base_field_politics',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_os2web_base_group_taxono|node|os2web_base_iframe|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_taxono|node|os2web_base_news|form';
  $field_group->group_name = 'group_os2web_base_group_taxono';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_news_tabs';
  $field_group->data = array(
    'label' => 'Emneord',
    'weight' => '4',
    'children' => array(
      0 => 'field_os2web_base_field_edi_tags',
      1 => 'field_os2web_base_field_loca_ref',
      2 => 'field_os2web_base_field_organiz',
      3 => 'field_os2web_base_field_politics',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Emneord',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $field_groups['group_os2web_base_group_taxono|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_group_text|node|os2web_base_news|form';
  $field_group->group_name = 'group_os2web_base_group_text';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_news_tabs';
  $field_group->data = array(
    'label' => 'Tekst',
    'weight' => '1',
    'children' => array(
      0 => 'body',
      1 => 'field_os2web_base_field_summary',
      2 => 'title',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Tekst',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $field_groups['group_os2web_base_group_text|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_base_news_tabs|node|os2web_base_news|form';
  $field_group->group_name = 'group_os2web_base_news_tabs';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'News',
    'weight' => '0',
    'children' => array(
      0 => 'group_os2web_base_group_image',
      1 => 'group_os2web_base_group_settings',
      2 => 'group_os2web_base_group_taxono',
      3 => 'group_os2web_base_group_text',
      4 => 'group_os2web_news_group_media',
      5 => 'group_relationer',
      6 => 'group_spotbokse',
    ),
    'format_type' => 'htabs',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => '',
      ),
    ),
  );
  $field_groups['group_os2web_base_news_tabs|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_os2web_news_group_media|node|os2web_base_news|form';
  $field_group->group_name = 'group_os2web_news_group_media';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_news_tabs';
  $field_group->data = array(
    'label' => 'Media og filer',
    'weight' => '3',
    'children' => array(
      0 => 'field_os2web_base_field_media',
      1 => 'field_os2web_base_field_video',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_os2web_news_group_media|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_relationer|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_relationer';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Relationer',
    'weight' => '9',
    'children' => array(
      0 => 'field_os2web_base_field_ext_link',
      1 => 'field_os2web_base_field_related',
      2 => 'field_os2web_base_field_selfserv',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-relationer field-group-htab',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_relationer|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_relationer|node|os2web_base_news|form';
  $field_group->group_name = 'group_relationer';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_news_tabs';
  $field_group->data = array(
    'label' => 'Relationer',
    'weight' => '6',
    'children' => array(
      0 => 'field_os2web_base_field_ext_link',
      1 => 'field_os2web_base_field_related',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_relationer|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_selvbetjening|taxonomy_term|os2web_base_tax_site_structure|form';
  $field_group->group_name = 'group_selvbetjening';
  $field_group->entity_type = 'taxonomy_term';
  $field_group->bundle = 'os2web_base_tax_site_structure';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_term';
  $field_group->data = array(
    'label' => 'Selvbetjeningslinks',
    'weight' => '16',
    'children' => array(
      0 => 'field_os2web_base_field_selfserv',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-selvbetjening field-group-htab',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_selvbetjening|taxonomy_term|os2web_base_tax_site_structure|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_spotbokse|node|os2web_base_contentpage|form';
  $field_group->group_name = 'group_spotbokse';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_contentpage';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_group_content';
  $field_group->data = array(
    'label' => 'Spotbokse / Webform',
    'weight' => '8',
    'children' => array(
      0 => 'field_os2web_base_field_spotbox',
      1 => 'field_os2web_base_field_webform',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Spotbokse / Webform',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => '',
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $field_groups['group_spotbokse|node|os2web_base_contentpage|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_spotbokse|node|os2web_base_news|form';
  $field_group->group_name = 'group_spotbokse';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_base_news';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_os2web_base_news_tabs';
  $field_group->data = array(
    'label' => 'Spotbokse',
    'weight' => '5',
    'children' => array(
      0 => 'field_os2web_base_field_spotbox',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_spotbokse|node|os2web_base_news|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_spotbokse|taxonomy_term|os2web_base_tax_site_structure|form';
  $field_group->group_name = 'group_spotbokse';
  $field_group->entity_type = 'taxonomy_term';
  $field_group->bundle = 'os2web_base_tax_site_structure';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_term';
  $field_group->data = array(
    'label' => 'Spotbokse',
    'weight' => '15',
    'children' => array(
      0 => 'field_os2web_base_field_spotbox',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-spotbokse field-group-htab',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_spotbokse|taxonomy_term|os2web_base_tax_site_structure|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_term|taxonomy_term|os2web_base_tax_site_structure|form';
  $field_group->group_name = 'group_term';
  $field_group->entity_type = 'taxonomy_term';
  $field_group->bundle = 'os2web_base_tax_site_structure';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Term',
    'weight' => '1',
    'children' => array(
      0 => 'group_indhold',
      1 => 'group_billeder',
      2 => 'group_indstillinger',
      3 => 'group_selvbetjening',
      4 => 'group_spotbokse',
    ),
    'format_type' => 'htabs',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-term field-group-htabs',
      ),
    ),
  );
  $field_groups['group_term|taxonomy_term|os2web_base_tax_site_structure|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Afsnit');
  t('Billede');
  t('Billeder og filer');
  t('Emneord');
  t('Hentet fra kommunens sagssystem');
  t('Indholdsside');
  t('Indstillinger');
  t('Media og filer');
  t('News');
  t('Relationer');
  t('Sager og dokumenter');
  t('Selvbetjeningslinks');
  t('Skjult');
  t('Spotbokse');
  t('Spotbokse / Webform');
  t('Taksonomi');
  t('Tekst');
  t('Term');

  return $field_groups;
}
