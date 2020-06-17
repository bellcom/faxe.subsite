<?php
/**
 * @file
 * This file describes the admin form for os2web
 */

function os2web_datafordeler_intergation_settings_form($form, $form_state) {

  $form['os2web_datafordeler_intergation_cert_path'] = array(
    '#type' => 'textfield',
    '#title' => 'Path to directory holding CA certificates',
    '#required' => TRUE,
    '#description' => 'Absolute path to directory holding CA certificates.',
    '#default_value' => variable_get('os2web_datafordeler_intergation_cert_path', NULL),
  );
  $form['os2web_datafordeler_intergation_ssl_key'] = array(
    '#type' => 'textfield',
    '#title' => 'Path to private keyfile',
    '#required' => TRUE,
    '#description' => 'Absolute path to to private keyfile.',
    '#default_value' => variable_get('os2web_datafordeler_intergation_ssl_key', NULL),
  );
  $form['os2web_datafordeler_intergation_ssl_cert'] = array(
    '#type' => 'textfield',
    '#title' => 'Path to SSL client certificate',
    '#required' => TRUE,
    '#description' => 'Absolute path to SSL client certificate.',
    '#default_value' => variable_get('os2web_datafordeler_intergation_ssl_cert', NULL),
  );
  $form['os2web_datafordeler_intergation_public_webservice_username'] = array(
    '#type' => 'textfield',
    '#title' => 'Username to access to public webservices',
    '#default_value' => variable_get('os2web_datafordeler_intergation_public_webservice_username', NULL),
  );
  $form['os2web_datafordeler_intergation_public_webservice_password'] = array(
    '#type' => 'password',
    '#title' => 'Password to access to public webservices',
    '#default_value' => variable_get('os2web_datafordeler_intergation_public_webservice_password', NULL),
  );
 

  return system_settings_form($form);
}
