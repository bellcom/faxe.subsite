<?php

/**
 * Implements hook_form_FORM_ID_alter().
 */
function subsite_form_system_theme_settings_alter(&$form, $form_state, $form_id = NULL) {

  // Vertical tabs
  $form['project'] = [
    '#type' => 'vertical_tabs',
    '#default_tab' => 'main',
    '#weight' => '-20',
    '#prefix' => '<h2><small>' . t('Projekt indstillinger') . '</small></h2>',
    '#title' => t('Projekt indstillinger'),
  ];

  // Fieldset
  $form['project']['branding'] = [
    '#type' => 'fieldset',
    '#title' => t('Branding'),
  ];
  $form['project']['branding']['project_branding_toggle'] = [
    '#type' => 'checkbox',
    '#title' => t('Vis branding'),
    '#default_value' => theme_get_setting('project_branding_toggle'),
  ];
  $form['project']['branding']['project_branding_text'] = [
    '#type' => 'textfield',
    '#title' => t('Tekst'),
    '#default_value' => theme_get_setting('project_branding_text'),
  ];
}
