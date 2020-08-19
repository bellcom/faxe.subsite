<?php
/**
 * @file
 * Batch function for CP cleanup process.
 */

/**
 * Callback function for delete all nodes.
 *
 * @param string $type
 *   The id of view display to delete nodes.
 */
function os2web_cp_service_delete_nodes($type) {
  if (empty($type)) {
    return;
  }

  $results = _os2web_cp_service_delete_nodes_get($type);
  switch ($type) {
    case 'documents':
    case 'cases':
      break;

    default:
      return;
  }

  $num_of_nodes = count($results);

  if ($num_of_nodes < 1) {
    drush_print('Not have nodes for delete.');
    return;
  }

  $nids = $results;

  $chunks = array_chunk($nids, 100);
  $operations = array();
  $progress = 0;
  $limit = 100;
  $max = $num_of_nodes;

  // Set up our batch operations.
  foreach ($chunks as $chunk) {
    $operations[] = array(
      'os2web_cp_service_delete_nodes_op',
      array(
        $chunk, $progress, $limit, $max,
      ),
    );
    $progress = $progress + $limit;
  }

  $batch = array(
    'operations' => $operations,
    'title' => t('Delete nodes'),
    'init_message' => t('Initializing'),
    'error_message' => t('An error occurred'),
    'progress_message' => t('Processed batch #@current out of @total.'),
    'finished' => 'os2web_cp_service_delete_nodes_finished',
  );
  // Get the batch process all ready!
  batch_set($batch);
  $batch =& batch_get();

  // Because we are doing this on the back-end, we set progressive to false.
  $batch['progressive'] = FALSE;

  // Start processing the batch operations.
  drush_backend_batch_process();
}

/**
 * Callback function for delete CP nodes batch process.
 */
function os2web_cp_service_delete_nodes_op($nids, $progress, $limit, $max,
                                           &$context) {
  // Set default starting values.
  if (empty($context['sandbox'])) {
    $context['sandbox'] = array();
    $context['sandbox']['progress'] = 0;
    $context['sandbox']['max'] = $limit;
  }

  if (!empty($nids)) {
    node_delete_multiple($nids);

    foreach ($nids as $nid) {
      $path = path_load(
        array('source' => 'node/' . $nid)
      );
      path_delete($path['pid']);
    }
  }

  $context['results'][] = $max;
  $context['sandbox']['progress'] += $progress;
  $context['message'] = t('@prc% Removed @progress nodes.', array(
    '@progress' => $context['sandbox']['progress'],
    '@prc' => round($progress / $max, 3) * 100,
  ));

  // Inform the batch engine that we are not finished,
  // and provide an estimation of the completion level we reached.
  if ($context['sandbox']['progress'] < $context['sandbox']['max']) {
    $context['finished'] = (($context['sandbox']['max'] - $context['sandbox']['progress']) <= $limit) || ($context['sandbox']['progress'] >= $context['sandbox']['max']);
  }
}

/**
 * Callback function for delete all nodes batch finish process.
 */
function os2web_cp_service_delete_nodes_finished($success, $results, $operations) {
  if ($success) {
    drupal_set_message(t('@count nodes was deleted.', array('@count' => array_pop($results))));
  }
  else {
    $error_operation = reset($operations);
    drupal_set_message(
      t('An error occurred while processing @operation with arguments : @args',
        array(
          '@operation' => $error_operation[0],
          '@args' => print_r($error_operation[0], TRUE),
        )
      )
    );
  }
}
