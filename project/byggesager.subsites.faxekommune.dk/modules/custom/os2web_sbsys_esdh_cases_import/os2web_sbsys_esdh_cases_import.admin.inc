<?php

/**
 * @file
 * Administrative interface for SBSYS Cases import.
 */

/**
 * Declares SBSYS Cases import admin form.
 */
function os2web_sbsys_esdh_cases_import_form() {
  $form = array();

  $form['run_import'] = array(
    '#type' => 'submit',
    '#value' => t('Run import'),
  );

  $form['group'] = array(
    '#type' => 'fieldset',
    '#title' => t('Extended options.'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form['group']['force'] = array(
    '#type' => 'checkbox',
    '#title' => t('Force recreation of nodes'),
    '#default_value' => FALSE,
    '#description' => t('WARNING: This will destroy existing nodes and replace with freshly imported. All node-id\s will change'),
  );

  $form['group']['focus'] = array(
    '#type' => 'textfield',
    '#title' => t('Focused case id'),
    '#description' => t('This settings can be used to reimport specific document.'),
  );

  return $form;
}

/**
 * Submit handler for SBSYS Cases import admin form.
 */
function os2web_sbsys_esdh_cases_import_form_submit($form, &$form_state) {
  drupal_goto('admin/config/os2web/esdh_provider/sbsys_cases_import/confirm', array(
    'query' => array(
      'import_focus_id' => $form_state['values']['focus'],
      'import_force' => $form_state['values']['force'],
    ),
  ));
}

/**
 * Declares SBSYS Cases import admin confirm form.
 */
function os2web_sbsys_esdh_cases_import_form_confirm($form, &$form_state) {
  $params = drupal_get_query_parameters();
  $id = $params['import_focus_id'];
  $force = (int) $params['import_force'];
  $form['_import_focus_id'] = array(
    '#type' => 'hidden',
    '#value' => $id,
  );
  $form['_import_force'] = array(
    '#type' => 'hidden',
    '#value' => $force,
  );

  if ($id > 0) {
    $msg = t('<p>Importing case with id !focus <br/>', array('!focus' => $id));
  }
  else {
    $msg = t('<p>Importing all meetings.<br/>');
  }
  if ($force) {
    $msg .= t('All imported cases and docuemnt nodes will be re-imported, detroying existing data and importing new.<br/>');
  }
  else {
    $msg .= t('Only new nodes will be imported, existing data is preserved.</p>');
  }
  $msg .= t('<p>Are you sure you want to run this import?</p>');

  return confirm_form(
    $form,
    t('Import cases and documents'),
    isset($_GET['destination']) ? $_GET['destination'] : "admin/config/os2web/esdh_provider/sbsys_cases_import",
    $msg,
    t('Run'),
    t('Cancel'));
}

/**
 * Submit handler for SBSYS Cases import admin confirm form.
 */
function os2web_sbsys_esdh_cases_import_form_confirm_submit($form, &$form_state) {
  if (!os2web_esdh_provider_has_api('cm')) {
    drupal_set_message(t('ERROR: No valid CM importer plugin active!'), 'error');
    return;
  }
  
  $force = $form_state['values']['_import_force'] == 1;
  $focus = array_map('trim', explode(',', $form_state['values']['_import_focus_id']));
  if (count($focus) === 1 && $focus[0] === '') {
    $focus = array();
  }

  $cases = os2web_esdh_provider_invoke('cm', 'get_import_list');
  
  if (empty($cases)) {
    drupal_set_message('There is no cases found', 'warning');
    return;
  }
  
  foreach ($cases as $case) {
    if (empty($focus) || in_array($case['id'], $focus)) {
      $batch['operations'][] = array(
        '_os2web_sbsys_esdh_cases_import_case',
        array($case, $force));
      
      
    }
  }
  
  batch_set($batch);
  batch_process('admin/config/os2web/esdh_provider/sbsys_cases_import');
}
