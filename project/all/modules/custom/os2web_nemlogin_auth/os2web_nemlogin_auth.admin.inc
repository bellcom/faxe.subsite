<?php
/**
 * @file
 * This file describes the admin form for os2web
 */

function os2web_nemlogin_auth_settings_form($form, $form_state) {

  $form['os2web_nemlogin_auth_nemlogin_spotbox_nid'] = array(
    '#type' => 'textfield',
    '#title' => 'Nemlogin spotbox NID',
    '#description' => 'The links of this spotbox will be altered to serve as Nemlogin login block',
    '#default_value' => variable_get('os2web_nemlogin_auth_nemlogin_spotbox_nid', NULL),
  );

  return system_settings_form($form);
}
