<?php

/**
 * @file
 * This file contains callbacks for SOAP File transfer WS methods.
 */

/**
 * Callback function for ReturnFileTransferRequest WS method.
 */
function os2web_cp_service_transfer_request() {
  $result = NULL;

  $query = _os2web_cp_service_get_transfer_request_query();

  $result = $query->range(0, 1)
    ->orderBy('n.changed', 'DESC')
    ->execute()
    ->fetchAll();

  if (!empty($result)) {
    $node = reset($result);
    $node = node_load($node->nid);
    $field_os2web_cp_service_file_id = field_get_items('node', $node, 'field_os2web_cp_service_file_id');
    if (!empty($field_os2web_cp_service_file_id)) {

      if (!empty($node->field_os2web_cp_service_nontrans[LANGUAGE_NONE][0]['value'])) {
        // Reset document before responce and let it be updated.
        _os2web_cp_service_reset_transfer_status($node);
      }

      $result = array(
        'FileID' => $field_os2web_cp_service_file_id[0]['value'],
        'FileFormat' => 'Published',
      );
      watchdog('acadre OM', 'ReturnFileTransferRequest success fid: ' . $result['FileID'], array(), WATCHDOG_NOTICE);
      return $result;
    }
    watchdog('acadre OM', 'ReturnFileTransferRequest: File ID is empty', array(), WATCHDOG_WARNING);
  }

  watchdog('acadre OM', 'ReturnFileTransferRequest: Not found CP documents to transfer', array(), WATCHDOG_WARNING);
  return NULL;

}

/**
 * Get transfer request query.
 */
function _os2web_cp_service_get_transfer_request_query() {
  // Fetch CP Document node with not delivered and available to
  // transfer file_id.
  $query = db_select('node', 'n')
    ->fields('n', array('nid'))
    ->condition('type', 'os2web_cp_service_cp_document');

  $query->leftJoin('field_data_field_os2web_cp_service_file_id', 'cpdfi', 'cpdfi.entity_id = n.nid');
  $query->condition('cpdfi.field_os2web_cp_service_file_id_value', '', '!=');
  $query->isNotNull('cpdfi.field_os2web_cp_service_file_id_value');

  $query->leftJoin('field_data_field_os2web_cp_service_deliver', 'cpd', 'cpd.entity_id = n.nid');
  $field_os2web_cp_service_deliver_db_or = db_or()
    ->condition('cpd.field_os2web_cp_service_deliver_value', '0')
    ->condition('cpd.field_os2web_cp_service_deliver_value', NULL);

  $query->leftJoin('field_data_field_os2web_cp_service_nontrans', 'cpn', 'cpn.entity_id = n.nid');
  $field_os2web_cp_service_nontrans_db_or = db_or()
    ->condition('cpn.field_os2web_cp_service_nontrans_value', '0')
    ->condition('cpn.field_os2web_cp_service_nontrans_value', NULL);

  // Available to transfering documents.
  $db_and = db_and()
    ->condition($field_os2web_cp_service_deliver_db_or)
    ->condition($field_os2web_cp_service_nontrans_db_or);

  $query->leftJoin('field_data_field_os2web_cp_service_synctime', 'cpst', 'cpst.entity_id = n.nid');
  $query->leftJoin('field_data_field_os2web_cp_service_res_c', 'cprc', 'cprc.entity_id = n.nid');

  // Include documents with failed transfers status older that 1 day.
  $failed_transfers_condition = db_and()
    ->condition('cpn.field_os2web_cp_service_nontrans_value', '1')
    ->condition(db_or()
      ->condition('cprc.field_os2web_cp_service_res_c_value', variable_get('os2web_cp_service_file_transfer_max_resets', OS2WEB_CP_SERVICE_FILE_TRANSFER_MAX_RESETS), '<=')
      ->condition('cprc.field_os2web_cp_service_res_c_value', NULL))
    ->condition('cpst.field_os2web_cp_service_synctime_value', strtotime('now - 1 day'), '<')
    ->condition(db_or()
      ->condition('cpd.field_os2web_cp_service_deliver_value', '0')
      ->condition('cpd.field_os2web_cp_service_deliver_value', NULL));

  $query->condition(db_or()
    ->condition($db_and)
    ->condition($failed_transfers_condition)
  );
  return $query;
}

/**
 * Callback function for FileTransferEnd WS method.
 */
function os2web_cp_service_transfer_update($data) {
  $file_id = $data->FileID;
  $node = _os2web_cp_service_get_cp_document_node_by_file_id($file_id);

  if (empty($node)) {
    watchdog('acadre OM', "FileTransferEnd :: CP Document node with file_id '@file_id' doesn't found.", array(
      '@file_id' => $data->FileID,
    ), WATCHDOG_ERROR);
    return;
  }

  $node_wrapper = entity_metadata_wrapper('node', $node);
  if ($data->TransferCompletedWithoutErrors === TRUE) {
    $uri = _os2web_cp_document_get_file_uri($file_id);

    if (!file_exists($uri)) {
      // Update synchronization fails.
      $sync_fails = $node_wrapper->field_os2web_cp_service_fails->value() + 1;
      $node_wrapper->field_os2web_cp_service_fails->set($sync_fails);

      // Mark file as non transferable if amount of tries reached to max value.
      if ($sync_fails >= variable_get('os2web_cp_service_file_transfer_max_tries', OS2WEB_CP_SERVICE_FILE_TRANSFER_MAX_TRIES)) {
        $node_wrapper->field_os2web_cp_service_nontrans->set(1);
      }

      $status_message = 'transfered file not found';
      watchdog('acadre OM', "FileTransferEnd :: FileID: '@file_id' " . $status_message, array(
        '@file_id' => $file_id,
      ), WATCHDOG_ERROR);
      $node_wrapper->field_os2web_cp_service_tr_stat->set($status_message);
    }
    else {
      // Bind existing file to CP Document node and update transfer status.
      _os2web_cp_document_bind_file($node_wrapper, $uri);
      $node_wrapper->field_os2web_cp_service_tr_stat->set('');
      $node_wrapper->field_os2web_cp_service_res_c->set(0);
      watchdog('acadre OM', 'FileTransferEnd success:: fid: ' . $file_id, array(), WATCHDOG_NOTICE);
    }
  }
  else {
    // Update synchronization fails.
    $sync_fails = $node_wrapper->field_os2web_cp_service_fails->value() + 1;
    $node_wrapper->field_os2web_cp_service_fails->set($sync_fails);

    // Mark file as non transferable if amount of tries reached to max value.
    if ($sync_fails >= variable_get('os2web_cp_service_file_transfer_max_tries', OS2WEB_CP_SERVICE_FILE_TRANSFER_MAX_TRIES)) {
      $node_wrapper->field_os2web_cp_service_nontrans->set(1);
      $node_wrapper->save();

      // Check duplicated file id.
      do {
        $node_duplicated = _os2web_cp_service_get_cp_document_node_by_file_id($file_id, TRUE);
        if (!empty($node_duplicated)) {
          $node_duplicated_wrapper = entity_metadata_wrapper('node', $node_duplicated);
          $node_duplicated_wrapper->field_os2web_cp_service_nontrans->set(1);
          $node_duplicated_wrapper->save();
        }
      } while (!empty($node_duplicated));
    }

    $status_message = 'failed transfer status';
    watchdog('acadre OM', "FileTransferEnd :: FileID: @file_id. " . $status_message, array(
      '@file_id' => $file_id,
    ), WATCHDOG_ERROR);
    $node_wrapper->field_os2web_cp_service_tr_stat->set($status_message);
    error_log("FileTransferEnd :: FileID: @file_id. " . $status_message . ' ' . print_r($data, 1));
  }

  // Set synchronization timestamp.
  $node_wrapper->field_os2web_cp_service_synctime->set(time());
  $node_wrapper->save();
}


/**
 * Helper get function for CP Document node by file_id.
 */
function _os2web_cp_service_get_cp_document_node_by_file_id($file_id, $check_transferable = FALSE) {
  $node = FALSE;
  // Fetch CP Document node by file_id.
  $query = db_select('node', 'n')
    ->fields('n', array('nid'))
    ->condition('type', 'os2web_cp_service_cp_document');

  $query->leftJoin('field_data_field_os2web_cp_service_file_id', 'cpd', 'cpd.entity_id = n.nid');
  $query->condition('cpd.field_os2web_cp_service_file_id_value', $file_id);

  if ($check_transferable) {
    $query->leftJoin('field_data_field_os2web_cp_service_nontrans', 'cpn', 'cpn.entity_id = n.nid');
    $field_os2web_cp_service_nontrans_db_or = db_or()
      ->condition('cpn.field_os2web_cp_service_nontrans_value', '0')
      ->condition('cpn.field_os2web_cp_service_nontrans_value', NULL);
    $query->condition($field_os2web_cp_service_nontrans_db_or);
  }

  $query->orderBy('n.changed', 'DESC');

  $result = $query->execute()->fetchAll();

  if (!empty($result)) {
    $node = reset($result);
    $node = node_load($node->nid);
  }

  return $node;
}

/**
 * Helper function to set existing file to CP Document node.
 *
 * @param object $node_wrapper
 *   The Node EntityWrapper object as reference.
 * @param string $uri
 *   The file uri.
 */
function _os2web_cp_document_bind_file(&$node_wrapper, $uri) {
  // Create a file object.
  // Snippet copied from @see file_save_data() function.
  $file = new stdClass();
  $file->fid = NULL;
  $file->uri = $uri;
  $file->filename = drupal_basename($uri);
  $file->filemime = file_get_mimetype($file->uri);
  $file->uid = 0;
  $file->status = FILE_STATUS_PERMANENT;

  // Replace an existing file re-use its database record.
  $existing_files = file_load_multiple(array(), array('uri' => $uri));
  if (count($existing_files)) {
    $existing = reset($existing_files);
    $file->fid = $existing->fid;
    $file->filename = $existing->filename;
  }

  // Save file entity and CP Document node.
  $file = file_save($file);
  $node_wrapper->field_os2web_cp_service_file->file->set($file);
  $node_wrapper->field_os2web_cp_service_deliver->set(1);
  $node_wrapper->field_os2web_cp_service_nontrans->set(0);
  $node_wrapper->field_os2web_cp_service_fails->set(0);
  $file_ext = pathinfo($file->uri, PATHINFO_EXTENSION);
  $node_wrapper->field_os2web_cp_service_filetype->set(strtoupper($file_ext));
}

/**
 * Build CP Document file uri.
 */
function _os2web_cp_document_get_file_uri($file_id) {
  $os2web_cp_service_file_path = variable_get('os2web_cp_service_file_path', OS2WEB_CP_SERVICE_FILE_PATH);
  return $os2web_cp_service_file_path . DIRECTORY_SEPARATOR . $file_id . '.pdf';
}
