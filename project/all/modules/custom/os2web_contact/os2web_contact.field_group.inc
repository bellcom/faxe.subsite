<?php
/**
 * @file
 * os2web_contact.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function os2web_contact_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_adresse|node|os2web_contact_contact|form';
  $field_group->group_name = 'group_adresse';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_contact_contact';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_telmail';
  $field_group->data = array(
    'label' => 'Adresse',
    'weight' => '8',
    'children' => array(
      0 => 'field_os2web_contact_field_addr',
      1 => 'field_os2web_contact_field_zip',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Adresse',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'open',
    ),
  );
  $field_groups['group_adresse|node|os2web_contact_contact|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_form|node|os2web_contact_contact|form';
  $field_group->group_name = 'group_form';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_contact_contact';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Form',
    'weight' => '0',
    'children' => array(
      0 => 'group_kontakt',
      1 => 'group_tekst',
      2 => 'group_telmail',
    ),
    'format_type' => 'htabs',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-form field-group-htabs',
      ),
    ),
  );
  $field_groups['group_form|node|os2web_contact_contact|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_kontakt|node|os2web_contact_contact|form';
  $field_group->group_name = 'group_kontakt';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_contact_contact';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_form';
  $field_group->data = array(
    'label' => 'Kontaktblok',
    'weight' => '12',
    'children' => array(
      0 => 'field_os2web_contact_field_dept',
      1 => 'field_os2web_contact_field_info',
      2 => 'title',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'formatter' => 'closed',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-kontakt field-group-htab',
        'required_fields' => 1,
        'id' => '',
      ),
    ),
  );
  $field_groups['group_kontakt|node|os2web_contact_contact|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_telmail|node|os2web_contact_contact|form';
  $field_group->group_name = 'group_telmail';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'os2web_contact_contact';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_form';
  $field_group->data = array(
    'label' => 'Kontaktdata',
    'weight' => '14',
    'children' => array(
      0 => 'field_os2web_contact_field_tel',
      1 => 'field_os2web_contact_field_mail',
      2 => 'group_adresse',
    ),
    'format_type' => 'htab',
    'format_settings' => array(
      'label' => 'Kontaktdata',
      'instance_settings' => array(
        'required_fields' => 1,
        'id' => '',
        'classes' => 'group-telmail field-group-htab',
        'description' => '',
      ),
      'formatter' => 'closed',
    ),
  );
  $field_groups['group_telmail|node|os2web_contact_contact|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Adresse');
  t('Form');
  t('Kontaktblok');
  t('Kontaktdata');

  return $field_groups;
}
