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

  $form['group'] = array(
    '#type' => 'fieldset',
    '#title' => t('OS2Web SBSYS ESDH CP import settings'),
  );

  $form['group']['force'] = array(
    '#type' => 'checkbox',
    '#title' => t('Force refreshing data for cases and documents'),
    '#default_value' => FALSE,
  );

  $form['actions']['run_import'] = array(
    '#type' => 'submit',
    '#value' => t('Run import'),
  );

  if (!variable_get('os2web_sbsys_esdh_cases_import_queue_enabled', FALSE)) {
    return $form;
  }

  $queue_header = array(
    t('Type:'),
    t('Id:'),
    t('Force'));
  $queue_rows = array();
  $query = db_select('queue', 'q')
    ->fields('q', array('item_id', 'data', 'created'))
    ->condition('q.name', OS2WEB_SBSYS_ESDH_CASES_IMPORT_QUEUE_NAME)
    ->extend('PagerDefault')
    ->limit(25)
    ->execute();

  foreach ($query as $record) {
    $data = unserialize($record->data);
    switch ($data['callback']) {
      case 'os2web_sbsys_esdh_cases_import_case':
        $queue_rows[] = array(
          'Case',
          $data['args']['case']['id'],
          $data['force'],
        );
        break;

      case 'os2web_sbsys_esdh_cases_import_document':
        $queue_rows[] = array(
          'Document',
          $data['args']['document']['Id'],
          $data['force'],
        );
        break;
    }
  }

  $form['group']['queue_status'] = array(
    '#prefix' => '<h3> In queue</h3>',
    '#markup' => theme('table', array(
      'header' => $queue_header,
      'rows' => $queue_rows,
      'empty' => t('Import queue is empty'),
    )),
  );

  $form['actions']['delete_queue'] = array(
    '#type' => 'submit',
    '#value' => t('Delete queue'),
    '#submit' => array('os2web_sbsys_esdh_cases_import_form_delete_queue'),
  );

  return $form;
}

/**
 * Submit handler for SBSYS Cases import admin form.
 */
function os2web_sbsys_esdh_cases_import_form_submit($form, &$form_state) {
  drupal_goto('admin/config/os2web/esdh_provider/sbsys_cases_import/confirm', array(
    'query' => array(
      'import_force' => $form_state['values']['force'],
    ),
  ));
}

/**
 * Declares SBSYS Cases import admin confirm form.
 */
function os2web_sbsys_esdh_cases_import_form_confirm($form, &$form_state) {
  $params = drupal_get_query_parameters();
  $force = (int) $params['import_force'];
  $form['_import_force'] = array(
    '#type' => 'hidden',
    '#value' => $force,
  );

  $msg = t('<p>Importing cases and documents.<br/>');
  if ($force) {
    $msg .= t('All imported cases and document nodes will be re-imported, detroying existing data and importing new.<br/>');
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
  $cases = os2web_esdh_provider_invoke('cm', 'get_import_list');
  
  if (empty($cases)) {
    drupal_set_message('There is no cases found', 'warning');
    return;
  }

  $destination = 'admin/config/os2web/esdh_provider/sbsys_cases_import';
  if (variable_get('os2web_sbsys_esdh_cases_import_queue_enabled', FALSE)) {
    os2web_sbsys_esdh_cases_import_queue_refresh($cases, $force);
    drupal_goto($destination);
  }
  else {
    $batch = array(
      'title' => 'SBSYS Case Publishing import',
      'operations' => array(),
      'init_message' => t('Scanner filer'),
    );

    foreach ($cases as $case) {
      $batch['operations'][] = array(
        'os2web_sbsys_esdh_cases_import_case',
        array($case, $force));

      $documents = os2web_esdh_provider_invoke('cm', 'get_case_docs', $case['uri']);
      foreach ($documents as $document) {
        $batch['operations'][] = array(
          'os2web_sbsys_esdh_cases_import_document',
          array($document, dirname($case['uri']), $force));
      }
    }
    batch_set($batch);
    batch_process($destination);
  }
}

/**
 * Submit handler for deleteing queue items.
 */
function os2web_sbsys_esdh_cases_import_form_delete_queue($form, &$form_state) {
  drupal_goto('admin/config/os2web/esdh_provider/sbsys_cases_import/delete/confirm');
}

/**
 * Delete queue confirmation form.
 */
function os2web_sbsys_esdh_cases_import_form_delete_queue_confirm_form($form, &$form_state) {
  return confirm_form(
    $form,
    t('Delete all items from import queue.'),
    isset($_GET['destination']) ? $_GET['destination'] : "admin/config/os2web/esdh_provider/sbsys_cases_import",
    t('You are going to delete all items from SBSYS ESDH CP import queue.'),
    t('Delete'),
    t('Cancel'));
}

/**
 * Submit handler for deleting queue items.
 */
function os2web_sbsys_esdh_cases_import_form_delete_queue_confirm_form_submit() {
  // Empty queue.
  db_delete('queue')
    ->condition('name', OS2WEB_SBSYS_ESDH_CASES_IMPORT_QUEUE_NAME)
    ->execute();

  drupal_set_message(t('Deleted queue'));
  drupal_goto('admin/config/os2web/esdh_provider/sbsys_cases_import');
}
