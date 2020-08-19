<?php
/**
 * @file
 * This file describes the admin form for os2web
 */

function os2web_settings_settings_form($form, $form_state) {

  $form['os2web_settings_config_group'] = array(
    '#type' => 'fieldset',
    '#title' => t('OS2web'),
  );
  $form['os2web_settings_config_group']['os2web_settings_techmaster_email'] = array(
    '#type' => 'textfield',
    '#title' => 'OS2web webmaster email. This email will recieve error emails from OS2web.',
    '#description' => 'Seperate multiple emails with commas.',
    '#default_value' => variable_get('os2web_settings_techmaster_email', NULL),
  );

  return system_settings_form($form);
}
