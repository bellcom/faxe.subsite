<?php

/**
 * @file
 * This file implements the importing functions of the MM functionality and
 * depends on a plugin to do the actual filereads
 */

module_load_include('inc', 'os2web_esdh_provider', 'includes/os2web_esdh_provider.queue');
$PROCESSING_MEETING = 0;
$PROCESSING_BP = 0;
/**
 * Get human size.
 *
 * @param double $size
 *   The size to convert
 *
 * @return string
 *   The formated size.
 */
function _os2web_esdh_provider_hr_size($size) {
  $unit = array('b', 'kb', 'mb', 'gb', 'tb', 'pb');
  return @round($size / pow(1024, ($i = floor(log($size, 1024)))), 2) . ' ' . $unit[$i];
}

/**
 * Error debug function.
 *
 * @param string $msg
 *   The message
 */
function os2web_esdh_provider_log($msg = FALSE) {
  if (variable_get('os2web_esdh_provider_debug_info')) {
    $mem = _os2web_esdh_provider_hr_size(memory_get_usage());
    $timer = number_format(timer_read('mm_import') / 1000, 2) . "sec.";
    error_log("MM Import - $msg - $mem $timer");
  }
}

/**
 * Imports meeting metadata into a node.
 *
 * @param string $meeting_id
 *   Meeting id
 *
 * @return int
 *   Node id
 */
function _os2web_esdh_provider_import_meeting($meeting_id, $force = FALSE, &$context = NULL) {
  if (!lock_acquire(__FUNCTION__ . $meeting_id['id'])) {
    return;
  }
  timer_start('mm_import');
  os2web_esdh_provider_log('Init.');
  global $PROCESSING_MEETING_ID, $PROCESSING_MEETING_ACCESS;
  $PROCESSING_MEETING_ID = $meeting_id['id'];

  $nid = os2web_esdh_provider_index_meeting_get_nid($meeting_id['id']);
  if ($nid) {
    watchdog('acadre MM', '[XML_ID: !id ] Found existing meeting node nid: !nid', array('!id' => $PROCESSING_MEETING_ID, '!nid' => $nid), WATCHDOG_DEBUG);
    $PROCESSING_MEETING_NID = $nid;
  }

  if (!os2web_esdh_provider_index_meeting_is_manifest_outdated($meeting_id['id'], filemtime(drupal_realpath($meeting_id['uri']))) &&
    !os2web_esdh_provider_index_meeting_has_deleted_agendas($meeting_id['id'])) {
    if ($nid) {
      watchdog('acadre MM', '[XML_ID: !id] Latest meeting version is already imported into nid: !nid. Skipping manifest', array('!id' => $PROCESSING_MEETING_ID, '!nid' => $nid), WATCHDOG_INFO);
    } else {
      watchdog('acadre MM', '[XML_ID: !id] No agendas to import. Skipping manifest', array('!id' => $PROCESSING_MEETING_ID), WATCHDOG_INFO);
    }
    lock_release(__FUNCTION__ . $meeting_id['id']);
    return;
  }

  watchdog('acadre MM', '[XML_ID: !id] Initialized meeting import', array('!id' => $PROCESSING_MEETING_ID), WATCHDOG_NOTICE);

  $meetings = os2web_esdh_provider_invoke('mm', 'import_meeting', $meeting_id);

  $nids = array();

  // Do an initially check on if there are any approved meetings.
  if (count($meetings) === 0) {
    watchdog('acadre MM', '[XML_ID: !id]  There was no meetings to import. See if all manifests are OK? ', array('!id' => $PROCESSING_MEETING_ID), WATCHDOG_WARNING);
    _os2web_esdh_provider_send_statusmail(t('There was no meetings to import for meeting !id. See if all manifests are OK?', array('!id' => $meeting_id['id'])), TRUE);
    lock_release(__FUNCTION__ . $meeting_id['id']);
    return;
  }

  // Run through all meetings. Remove all unpublished.
  // Retrieve nid of already existing node.
  $number_of_meetings = count($meetings);
  watchdog('acadre MM', '[XML_ID: !id] Number of agendas: !number', array('!id' => $PROCESSING_MEETING_ID, '!number' => $number_of_meetings), WATCHDOG_DEBUG);
  for ($i = 0; $i < $number_of_meetings; $i++) {
    os2web_esdh_provider_index_meeting($nid, $meeting_id, $meetings[$i]);

    if ($meetings[$i]['publish'] === FALSE) {
      watchdog('acadre MM', '[XML_ID: !id] Agenda !meeting_sub_id will NOT be published. [publish]=!publish, [access]=!access',
        array('!id' => $PROCESSING_MEETING_ID,
              '!meeting_sub_id' => $meetings[$i]['meeting_sub_id'],
              '!publish' => intval($meetings[$i]['publish']),
              '!access' => $meetings[$i]['agenda_access'],
        ),
        WATCHDOG_INFO);
      unset($meetings[$i]);
    } else {
      watchdog('acadre MM', '[XML_ID: !id] Agenda !meeting_sub_id is allowed be published. [publish]=!publish, [access]=!access',
        array('!id' => $PROCESSING_MEETING_ID,
              '!meeting_sub_id' => $meetings[$i]['meeting_sub_id'],
              '!publish' => intval($meetings[$i]['publish']),
              '!access' => $meetings[$i]['agenda_access'],
        ),
        WATCHDOG_INFO);
    }
  }

  // If any already exist and no one is left to be published,
  // the existing should be unpublished.
  if ($nid && count($meetings) === 0) {
    // Meeting needs to be unpublished.
    os2web_esdh_provider_log('Unpublish nid: ' . $nid);
     // Meeting needs to be unpublished.
     watchdog('acadre MM', '[XML_ID: !id] Starting unpublishing of nid: !nid', array('!id' => $PROCESSING_MEETING_ID, '!nid' => $nid), WATCHDOG_DEBUG);
     node_delete($nid);
     watchdog('acadre MM', '[XML_ID: !id] Unpublished !nid .', array('!id' => $PROCESSING_MEETING_ID, '!nid' => $nid), WATCHDOG_NOTICE);
     lock_release(__FUNCTION__ . $meeting_id['id']);
     watchdog('acadre MM', '[XML_ID: !id] Finished meeting import', array('!id' => $PROCESSING_MEETING_ID), WATCHDOG_NOTICE);
     return;
    //node_delete($nid);
    //watchdog('acadre MM', 'Unpublished %nid .', array('%nid' => $nid), WATCHDOG_INFO);
    //lock_release(__FUNCTION__ . $meeting_id['id']);
   // return;
  }

  // Ideally $meetings will only have one entry.
  // But can have more if manifest is wrong.
  foreach ($meetings as $meeting) {
    os2web_esdh_provider_log('Start import meeting ' . $meeting['system_id']);
    os2web_esdh_provider_log('Importing meeting with ' . count($meeting['items']) . ' bullet points.');
    watchdog('acadre MM', '[XML_ID: !id] Start import agenda !meeting_sub_id with !number bullets, force: !force',
        array('!id' => $PROCESSING_MEETING_ID, '!meeting_sub_id' => $meeting['meeting_sub_id'], '!number' => count($meeting['items']), '!force' => intval($force)), WATCHDOG_DEBUG);

    // Meeting already exist.
    // Either update, republish, delete or skip.
    if ($nid) {
      $node = node_load($nid);
      $republish = FALSE;

      // Republish by Force.
      if ($force) {
        $republish = TRUE;
        $reason = 'FORCE';
      } elseif (defined('MM_REPUBLISH_MEETINGS') && MM_REPUBLISH_MEETINGS) {
        // Republish by setting.
        $republish = TRUE;
        $reason = 'MM_REPUBLISH_MEETINGS';
      } elseif (defined('MM_REPUBLISH_SUBVERSION') && MM_REPUBLISH_SUBVERSION) {
        // Republish if meeting_sub_id changed.
        if ($node->field_os2web_meetings_sub_id[LANGUAGE_NONE][0]['value'] < $meeting['meeting_sub_id']) {
          $republish = TRUE;
          $reason = 'MM_REPUBLISH_SUBVERSION';
        }
      } elseif ($meeting['type'] === 'Referat' &&
        ($node->field_os2web_meetings_type[LANGUAGE_NONE][0]['value'] === 'Dagsorden' ||
         $node->field_os2web_meetings_type[LANGUAGE_NONE][0]['value'] === 'Dagsorden_plus')) {
        // Republish if current meeting is of type Referat.
        // This means that the one already exist is a Dagsorden.
        $republish = TRUE;
        $reason = 'DAGSORDEN -> REFERAT';
      } elseif (filemtime($meeting['path']) > $node->changed){
          $republish = TRUE;
          $reason = 'NEW REFERAT VERSION';
      }

      // Republish.
      if ($republish) {
        watchdog('acadre MM', '[XML_ID: !id] Republishing into !nid. Reason: !reason', array('!id' => $PROCESSING_MEETING_ID, '!nid' => $nid, '!reason' => $reason), WATCHDOG_INFO);
      }
      else {
        watchdog('acadre MM', '[XML_ID: !id] Meeting already imported in !nid. No republish. Skipping.', array('!id' => $PROCESSING_MEETING_ID, '!nid' => $nid), WATCHDOG_NOTICE);
        watchdog('acadre MM', '[XML_ID: !id] Finished meeting import', array('!id' => $PROCESSING_MEETING_ID), WATCHDOG_NOTICE);
        os2web_esdh_provider_index_meeting_update_committee_tid($meeting_id['id'], $meeting['meeting_sub_id'], $node->field_os2web_meetings_committee['und'][0]['tid']);
        continue;
      }
    }
    else {
      // Check if there is an sofd version of this node
      // (acadre and syddjurs systems only).
      if (module_exists('os2dagsorden_esdh_provider')) {
        $committee_term = osdagsorden_esdh_provider_import_or_return_committee($meeting['committee_id'], $meeting['committee']);
        $node = os2dagsorden_esdh_provider_find_sofd_meeting($committee_term, $meeting['meeting_date_start'], $meeting['meeting_date_finish']);
      }
    }

    if (!$node){
      watchdog('acadre MM', '[XML_ID: !id] No node was found, creating a new node', array('!id' => $PROCESSING_MEETING_ID), WATCHDOG_DEBUG);
      $node = new stdClass();
    }

    // Or any other content type you want.
    $node->type = "os2web_meetings_meeting";
    // Or any language code if Locale module is enabled. More on this below.
    $node->language = LANGUAGE_NONE;
    // Or any id you wish.
    $node->uid = 1;
    // Set some default values.
    node_object_prepare($node);
    // Set field values:
    $node->title = $meeting['title'];

    /* The original field for title came from $meeting['title'];
     * This is a rewrite of the function to set the path automaticaly and with
     * custom data - sutch as date.
     * skifter@bellcom.dk - 2013-04-14 / 2013-04-24 */

    // Is the pathauto module loaded.
    if (module_exists('pathauto')) {

      // Loading the path auto modules.
      module_load_include('inc', 'pathauto', 'pathauto');

      // Setting the new title with committee name and meeting date substring.
      $my_date = date_create(substr($meeting['meeting_date_start'], 0, 10));
      $format = "d-m-Y";
      $node->title = $meeting['committee'] . ' - ' . date_format($my_date, $format);

      $alias = 'dagsorden/' . pathauto_cleanstring($node->title);
      $source = (isset($node->nid)) ? 'node/' . $node->nid : '';
      pathauto_alias_uniquify($alias, $source, $node->language);

      // Adding the alias and setting pathauto to 0 for this content type.
      // otherwise we get 2 aliases.
      $path_alias = array(
        'alias' => $alias,
        'pid' => NULL,
        'source' => NULL,
        'language' => LANGUAGE_NONE,
        'pathauto' => 0,
      );
      $node->path = $path_alias;
    }

    $node->field_os2web_meetings_abbr[LANGUAGE_NONE][0]['value'] = substr($meeting['description'], 0, 49);
    // If field has a format, you need to define it. Here we define a default
    // filtered_html format for a body field.
    $node->field_os2web_meetings_abbr[LANGUAGE_NONE][0]['format'] = 'filtered_html';
    // The date.
    $node->field_os2web_meetings_date[LANGUAGE_NONE][0]['value'] = $meeting['meeting_date_start'];
    $node->field_os2web_meetings_date[LANGUAGE_NONE][0]['value2'] = $meeting['meeting_date_finish'];
    $node->field_os2web_meetings_date[LANGUAGE_NONE][0]['timezone'] = 'Europe/Berlin';
    $node->field_os2web_meetings_date[LANGUAGE_NONE][0]['date_type'] = 'datetime';
    // Proper id tagging.
    $node->field_os2web_meetings_id[LANGUAGE_NONE][0]['value'] = $meeting['meeting_id'];
    $node->field_os2web_meetings_sub_id[LANGUAGE_NONE][0]['value'] = $meeting['meeting_sub_id'];
    $node->field_os2web_meetings_system_id[LANGUAGE_NONE][0]['value'] = $meeting['system_id'];
    // Type import.
    $node->field_os2web_meetings_type[LANGUAGE_NONE][0]['value'] = $meeting['type'];
    //Adding default meeting category
    $node->field_os2web_meetings_category[LANGUAGE_NONE][0]['value']=variable_get('os2dagsorden_default_meeting_cateroty','pol');
    //Adding participants
    if (isset($meeting['participants'])){
      $node->field_os2web_meetings_partic[LANGUAGE_NONE][0]['value'] = implode(variable_get('os2dagsorden_participants_delimeter', ', '), $meeting['participants']);
      $node->field_os2web_meetings_partic[LANGUAGE_NONE][0]['format'] ='filtered_html';
    }

    //Adding cancelled participants
    if (isset($meeting['participants_cancellation'])){
      $node->field_os2web_meetings_particcanl[LANGUAGE_NONE][0]['value'] = implode(variable_get('os2dagsorden_participants_delimeter', ', '), $meeting['participants_cancellation']);
      $node->field_os2web_meetings_particcanl[LANGUAGE_NONE][0]['format'] ='filtered_html';
    }

     //Adding comments
   if (isset($meeting['description'])){
      $node->field_os2web_meetings_comments[LANGUAGE_NONE][0]['value'] = $meeting['comments'];
    }

    // Make sure the committee term is created and get the term.
    if (!$committee_term)
      $committee_term = _acadre_esdh_import_term($meeting['committee'], 'os2web_meetings_tax_committee');
    $node->field_os2web_meetings_committee[LANGUAGE_NONE][0]['tid'] = $committee_term->tid;
    if (module_exists('os2dagsorden_esdh_provider')){
      os2dagsorden_esdh_provider_committee_add_subid($committee_term, $meeting['committee_id']);
    }

    os2web_esdh_provider_index_meeting_update_committee_tid($meeting_id['id'], $meeting['meeting_sub_id'], $committee_term->tid);

    $node->field_os2web_meetings_location[LANGUAGE_NONE][0]['tid'] = _acadre_esdh_import_term($meeting['location'], 'os2web_meetings_tax_location')->tid;
    // Add QBrick info @FIXME This should be in a node_save hook in qbrick
    // module.
    if (function_exists('_os2web_qbrick_get_movie_id')) {
      $movie_id = _os2web_qbrick_get_movie_id($node);
      if ($movie_id != FALSE) {
        $meeting['movie_id'] = $movie_id;
        $chapters = _os2web_qbrick_get_chapters($movie_id);
        $node->field_os2web_meetings_qbrickref[LANGUAGE_NONE][0]['id'] = $movie_id;
        $node->field_os2web_meetings_qbrickref[LANGUAGE_NONE][0]['seek'] = 0;
        foreach ($meeting['items'] as &$item) {
          $item['chapter'] = isset($chapters[$item['id']]) ? $chapters[$item['id']] : 0;
          $item['movie_id'] = $movie_id;
        }
      }
      else {
        $node->field_os2web_meetings_qbrickref = array();
      }
    }
    // Add full document.
    if (!empty($meeting['full_doc'])) {
      if (FALSE !== ($file = _os2web_esdh_provider_import_file($meeting['full_doc']))) {
        $node->field_os2web_meetings_full_doc[LANGUAGE_NONE][0] = (array) $file;
      }
    }

    // Delete all bullet points before importing.
    if(property_exists($node,'field_os2web_meetings_bullets') && is_array($node->field_os2web_meetings_bullets)) {
      $bullets = array_shift($node->field_os2web_meetings_bullets);
      if (is_array($bullets)) {
        $nids_to_delete = array();
        foreach ($bullets as $nids) {
          $nids_to_delete[$nids['target_id']] = $nids['target_id'];
        }
      }
    }

    // Import items.
    if (is_array($meeting['items'])) {
      $item_nids = _os2web_esdh_provider_import_items($meeting['items']);
      if (!empty($nids_to_delete)) {
        node_delete_multiple($nids_to_delete);
      }
      foreach ($item_nids as $nid) {
        $node->field_os2web_meetings_bullets[LANGUAGE_NONE][]['target_id'] = $nid;
      }
    }

    // Save the meeting node.
    $node = node_submit($node);
    $node->created = $meeting['creation_date'];
    node_save($node);
    $nid = $node->nid;
    watchdog('acadre MM', 'Imported agenda id: %aid (Meeting: %mid) into node %nid .', array(
      '%aid' => $meeting['system_id'],
      '%mid' => $meeting['meeting_id'],
      '%nid' => $node->nid), WATCHDOG_DEBUG);
    $nids[] = $node->nid;
    os2web_esdh_provider_log('Meeting saved. $node->nid = ' . print_r($node->nid, 1));

    watchdog('acadre MM', '[XML_ID: !id] Finished meeting import', array('!id' => $PROCESSING_MEETING_ID), WATCHDOG_NOTICE);

    os2web_esdh_provider_index_meeting_update_nid($meeting_id['id'], $meeting['meeting_sub_id'], $nid);
    os2web_esdh_provider_index_meeting_update_status($meeting_id['id'], $meeting['meeting_sub_id'], IMPORT_STATUS_IMPORTED);
  }

  _os2web_esdh_provider_send_statusmail(t('!id successfully imported into node !nid.', array('!id' => $meeting_id['id'], '!nid' => $node->nid)));

  variable_set('os2web_esdh_provider_last_import', time());
  os2web_esdh_provider_log('END import meeting ' . $meeting['system_id'] . '');
  lock_release(__FUNCTION__ . $meeting_id['id']);
  return $nids;
}

/**
 * Imports item metadata into nodes.
 * @access protected
 *
 * @param array $items
 *   List of items to import.
 *
 * @return array
 *   List of imported node ids
 */
function _os2web_esdh_provider_import_items($items) {

  global $PROCESSING_MEETING_ID, $PROCESSING_BP;

  $nids = array();
  foreach ($items as $item) {
    $PROCESSING_BP = $item['sysid'];
    os2web_esdh_provider_log('Start import bullet point ');
    $node = new stdClass();
    $node->type = "os2web_meetings_bullet";
    $node->language = LANGUAGE_NONE;
    $node->uid = 1;
    $node->title = substr($item['title'],0,255);
    // Set some default values.
    node_object_prepare($node);

    if (module_exists('os2dagsorden_esdh_provider')){
      $node = os2dagsorden_esdh_provider_bullet_add_number($node, $item['id']);
    }

    if ($item['access'] === 'Lukket') {
      $node->field_os2web_meetings_bul_closed[LANGUAGE_NONE][]['value'] = 1;
      if (module_exists('os2dagsorden_esdh_provider')){
        $node = os2dagsorden_esdh_provider_process_closed_bullet($node, $item);
      }
      node_submit($node);
      node_save($node);
      $nids[] = $node->nid;
    }
    else {
      $node->field_os2web_meetings_bul_closed[LANGUAGE_NONE][]['value'] = 0;
      if (isset($item['movie_id']) && is_numeric($item["chapter"])) {
        $node->field_os2web_meetings_qbrickref[LANGUAGE_NONE][0]['id'] = $item['movie_id'];
        $node->field_os2web_meetings_qbrickref[LANGUAGE_NONE][0]['seek'] = $item["chapter"];
      }
      // Gather the bullets for the item.
      if (isset($item['bullets']) && is_array($item['bullets'])) {
        $bullet_nids = _os2web_esdh_provider_import_bullets($item['bullets']);
        foreach ($bullet_nids as $nid) {
          $node->field_os2web_meetings_attach[LANGUAGE_NONE][]['target_id'] = $nid;
        }
      }
      else {
        $node->field_os2web_meetings_attach[LANGUAGE_NONE] = array();
      }
      // Gather enclosures.
      foreach ($item['enclosures'] as $enclosure) {
        if ($enclosure['access']) {
          if ($file = _os2web_esdh_provider_import_file($enclosure)) {
            $node->field_os2web_meetings_enclosures[LANGUAGE_NONE][] = (array) $file;
            if (module_exists('os2dagsorden_esdh_provider'))
              $node->field_os2web_meetings_attach[LANGUAGE_NONE][]['target_id'] = os2dagsorden_esdh_provider_process_enclosure($enclosure, $file);
          }
          else {
           // watchdog('acadre MM', 'There was an error importing file %uri ', array('%uri' => $enclosure['uri']), WATCHDOG_ERROR);
           watchdog('acadre MM', '[XML_ID: !id] [BP: !sysid] There was an error importing file !uri ',
              array('!id' => $PROCESSING_MEETING_ID, '!sysid' => $PROCESSING_BP, '!uri' => $enclosure['uri']), WATCHDOG_ERROR);

          }
        }
      }
      $node = node_submit($node);
      node_save($node);
      $nids[] = $node->nid;
      os2web_esdh_provider_log('Item saved');
    }
  }
  return $nids;
}

/**
 * Imports bullet metadata into nodes.
 * @access protected
 *
 * @param array $bullets
 *   List of bullets
 *
 * @return array
 *   List of imported node ids
 */
function _os2web_esdh_provider_import_bullets($bullets) {

  global $PROCESSING_MEETING_ID, $PROCESSING_BP;

  // Since we need to run this often,
  // we reset the execution timer to avoid timeouts.
  set_time_limit(180);
  $nids = array();

  foreach ($bullets as $idx => $bullet) {
    os2web_esdh_provider_log('Start import bullet ' . $idx . ' ');
    $node = new stdClass();
    $node->type = "os2web_meetings_bullet_attach";
    $node->language = LANGUAGE_NONE;
    $node->uid = 1;
    $node->title = $bullet['title'];
    // Set some default values.
    node_object_prepare($node);
    // Let's add body field.
    $node->field_os2web_meetings_bpa_body[$node->language][0]['value'] = os2web_esdh_provider_filter_html_tags($bullet['body']);//check_markup($bullet['body'], 'os2web_html_purifier', '', FALSE);
    // If field has a format, you need to define it.
    // Here we define a default filtered_html format for a body field.
    $node->field_os2web_meetings_bpa_body[$node->language][0]['format'] = _os2web_esdh_provider_bpa_body_format();
    $node = node_submit($node);
    node_save($node);
    $nids[$idx] = $node->nid;
    os2web_esdh_provider_log('Bullet saved.');
  }
  return $nids;
}

/**
 * Imports a file metadata into a managed drupal file.
 * @access protected
 *
 * @param array $file_meta
 *   File metadata
 *
 * @return object
 *   Drupal standard file object
 */
function _os2web_esdh_provider_import_file($file_meta) {

  // Since we need to run this often,
  // we reset the execution timer to avoid timeouts.
  set_time_limit(300);
  $uri_in = $file_meta['uri'];

  $pinfo = pathinfo($uri_in);
  if ($file_meta['title'] !== '') {
    $fname = $file_meta['title'];
  }
  else {
    $fname = $pinfo['filename'];
  }

  // Parentheses break htmlspecialchars(). So we just remove.
  $fname = str_replace(array('(', ')'), '', $fname);

  $uri_out = $pinfo['dirname'] . '/' . _os2web_esdh_provider_sanetize_filename($fname . '.' . strtolower($pinfo['extension']));
  $uri_pdf = $pinfo['dirname'] . '/' . _os2web_esdh_provider_sanetize_filename($fname . '.pdf');

  os2web_esdh_provider_log('Start import file ' . $uri_out . ' ');

  $uri = FALSE;
  if ($uri_tmp = _os2web_esdh_provider_similar_file_exists(drupal_realpath($uri_pdf))) {
    // We have an already converted pdf file.
    $uri = $uri_pdf;
    $convert = FALSE;
  }
  elseif ($uri_tmp = _os2web_esdh_provider_similar_file_exists(drupal_realpath($uri_out))) {
    // File already copied.
    $convert = TRUE;
    $uri = $uri_out;
  }
  else {
    // Completely unprocessed file.
    $uri_old = $uri_in;
    $uri_in = _os2web_esdh_provider_similar_file_exists(drupal_realpath($uri_in));

    if ($uri_in === FALSE || FALSE === file_unmanaged_copy($uri_in, $uri_out, FILE_EXISTS_REPLACE)) {
      // Bummed out on copy.
      watchdog('acadre MM', 'File copy failed for %infile -> %outfile. Check folder permissions.', array(
        '%infile' => $uri_old, '%outfile' => $uri_out), WATCHDOG_WARNING);
      return FALSE;
    }
    else {
      $convert = TRUE;
      $uri = $uri_out;
    }
  }

  if (FALSE === $uri || empty($uri)) {
    watchdog('acadre MM', 'Processing of %infile failed. If exists, check permissions.', array(
      '%infile', $uri_in), WATCHDOG_WARNING);
    return FALSE;
  }

  if (file_uri_scheme($uri) != 'public') {
    watchdog('acadre MM', 'Invalid scheme for uri %uri, Possibly absolut path ? ' . $uri, array(
      '%uri', $uri), WATCHDOG_ERROR);
    os2web_esdh_provider_log("Var: \$uri = " . print_r($uri, 1));
    os2web_esdh_provider_log("Var: \$uri_in = " . print_r($uri_in, 1));
    os2web_esdh_provider_log("Var: \$uri_out = " . print_r($uri_out, 1));
    os2web_esdh_provider_log("Var: \$uri_pdf = " . print_r($uri_pdf, 1));
  }

  $fid = db_select('file_managed', 'fm')
          ->fields('fm', array('fid'))
          ->condition('uri', $uri)
          ->execute()->fetchField();

  $file = new stdClass();
  if ($fid) {
    $file->fid = $fid;
  }
  $file->uri = $uri;
  $file->display = 1;
  $file->field_titel[LANGUAGE_NONE][]['value'] = $file_meta['title'];
  $file->filename = drupal_basename($file->uri);
  $file->filemime = file_get_mimetype($file->uri);
  $file->uid = 1;
  $file->status = FILE_STATUS_PERMANENT;
  $file = file_save($file);

  if (module_exists('os2web_pdf_conversion_manager'))
    _os2web_pdf_conversion_manager_copy_file_to_convertion_dir($file->fid);

  // Schedule for PDF conversion
  // $convert = FALSE; // DEBUG.
  if ($convert) {
    drupal_load('module', 'os2web_adlib_api');
    os2web_adlib_api_convert_to_pdf($file->fid, $file->filename);
    watchdog('os2web_adlib_api', 'File %filename (fid: %fid) queued for PDF conversion.', array(
      '%filename' => $file->filename, '%fid' => $file->fid), WATCHDOG_INFO);
  }

  os2web_esdh_provider_log('File imported.');
  os2web_esdh_provider_log('End Import of file');
  return $file;
}

/**
 * Imports a termname into a vacabulary. Does dupe check.
 *
 * @param string $term_name
 *   Term machine name
 * @param string $vocab
 *   Vocabulary machine name
 *
 * @return object
 *   Drupal standard Term object
 */
function _acadre_esdh_import_term($term_name, $vocab) {

  os2web_esdh_provider_log('Start import term');

  // TODO: Process members of the committee.
  // FIXME: MAke vocab name configurable.
  $vid = db_select('taxonomy_vocabulary', 'tv')
      ->fields('tv', array('vid'))
      ->condition('machine_name', $vocab)
      ->execute()
      ->fetchField();

  $term = new stdClass();
  $term->vid = $vid;
  $term->name = $term_name;

  $tid = db_select('taxonomy_term_data', 'td')
          ->fields('td', array('tid'))
          ->condition('name', $term->name)
          ->condition('vid', $term->vid)
          ->execute()->fetchObject();

  if (isset($tid->tid) && $tid->tid > 0) {
    $term->tid = (int) $tid->tid;
  }
  taxonomy_term_save($term);

  return $term;
}

/**
 * Page callback. Displays a technical overview of an imported meeting.
 */
function _os2web_esdh_provider_node_tab_page($nid, $op = FALSE) {
  $html = "";
  $node = node_load($nid);
  $meeting_id = $node->field_os2web_meetings_id[LANGUAGE_NONE][0]['value'];
  $system_id = $node->field_os2web_meetings_system_id[LANGUAGE_NONE][0]['value'];
  $filename = 'Unknown';
  $files = file_scan_directory(variable_get('os2web_meetings_path', ACADRE_MM_IMPORT_DIR), '/\.xml$/i', array('recurse' => FALSE));
  foreach ($files as $file) {
    $xml = simplexml_load_file(drupal_realpath($file->uri));
    if (is_object($xml)) {
      $xml_mid = (string) array_shift($xml->xpath("//table[@name='meeting']/fields/field/@sysid"));
      if ($meeting_id == $xml_mid) {
        $filename = $file->filename;
        $agenda = $xml->xpath("//table[@name='producedAgenda']/fields/field[@sysid='$system_id']/../field");
        if (!empty($agenda)) {
          break;
        }
      }
    }
  }

  if ($op) {
    switch ($op) {
      case 'reimport':
        break;

      default:
        drupal_set_message($op . ' not yet implemented.', 'error');
        break;
    }
    drupal_goto('node/' . $nid . '/control');
  }

  $html .= "<h1>" . $node->title . "</h1>";

  $head = array('Node id', 'Meeting id', 'System id', 'Filename');
  $rows[] = array(
    $node->nid,
    $meeting_id,
    $system_id,
    $filename,
  );
  $html .= theme('table', array('header' => $head, 'rows' => $rows));
  $head = array('Attribute', 'Value');
  $rows = array();
  foreach ($agenda as $attr) {
    foreach ($attr->attributes() as $key => $val) {
      $rows[] = array($key, $val);
    }
  }
  $html .= theme('table', array('header' => $head, 'rows' => $rows));
  return $html;
}

/**
 * Sanetizes filename, removing illegal characters.
 *
 * @param string $filename
 *   Filename
 *
 * @return string
 *   Sanetized filename with same extension.
 */
function _os2web_esdh_provider_sanetize_filename($filename) {
  if (module_exists('transliteration')) {
    $filename = transliteration_clean_filename($filename);
  }
  else {
    // Replace whitespace.
    // $filename = str_replace(' ', '_', $filename);
    // Remove remaining unsafe characters.
    // $filename = preg_replace('![^0-9A-Za-z_.- ]!', '', $filename);
    $filename = preg_replace('![/"]!', '-', $filename);
    // Remove multiple consecutive non-alphabetical characters.
    $filename = preg_replace('/(_)_+|(\.)\.+|(-)-+/', '\\1\\2\\3', $filename);
    // Force lowercase to prevent issues on case-insensitive file systems.
    // $filename = strtolower($filename);
  }
  $pi = pathinfo($filename);
  if (isset($pi['extension'])) {
    return mb_substr(trim($pi['filename']), 0, 160) . '.' . $pi['extension'];
  }
  else {
    return mb_substr(trim($pi['filename']), 0, 160);
  }
}

/**
 * Case insensitive fileexists(). Code from comments on php.net.
 *
 * @param string $filename
 *   Filename
 *
 * @return mixed
 *   False if file not found, case corrected filename if found.
 */
function _os2web_esdh_provider_similar_file_exists($filename) {
  if (file_exists($filename)) {
    return $filename;
  }
  $dir = dirname($filename);
  $file = _os2web_esdh_provider_glob($dir, $filename);
  if ($file = _os2web_esdh_provider_glob($dir, $filename)) {
    return $file;
  }
  //if file not found try to convert filenames into UTF-8
  else if (shell_exec('which convmv')) {
    shell_exec('convmv -r -f ISO-8859-1 -t UTF-8 ' . $dir . '/* --notest');
    if ($file = _os2web_esdh_provider_glob($dir, $filename)) {
      return $file;
    }
  }
  return FALSE;
}

/**
 * Case insensitive glob
 *
 * @param string $filename
 *   Filename
 * @param string $dir
 *   Directory name
 *
 * @return mixed
 *   False if file not found, case corrected filename if found.
 */
function _os2web_esdh_provider_glob($dir, $filename) {
  $files = glob($dir . '/*');
  $lcase_filename = strtolower($filename);
  foreach ($files as $file) {
    if (strtolower($file) == $lcase_filename) {
      return $file;
    }
  }
  return FALSE;
}

/**
 * Page callback for the import service call.
 */
function _os2web_esdh_provider_import($id = FALSE) {
  if (!os2web_esdh_provider_has_api('mm')) {
    drupal_json_output(array('status' => 'error', 'message' => 'Not available.'));
  }
  $meetings = os2web_esdh_provider_invoke('mm', 'get_import_list');
  $meeting_id = FALSE;
  foreach ($meetings as $meeting) {
    if ($meeting['id'] == $id) {
      $meeting_id = $meeting;
      break;
    }
  }
  if ($meeting_id === FALSE) {
    _os2web_esdh_provider_import_output();
  }
  else {
    $nids = _os2web_esdh_provider_import_meeting($meeting_id, TRUE);
    if (os2web_esdh_provider_supports('mm', 'post_import_process')) {
      os2web_esdh_provider_invoke('mm', 'post_import_process');
    }
    if (count($nids) > 0) {
      _os2web_esdh_provider_import_output($id, $nids);
    }
    else {
      _os2web_esdh_provider_import_output($id);
    }
  }
}

/**
 * Helper function to dump output from REST importer.
 */
function _os2web_esdh_provider_import_output($id, $nids) {
  if (isset($id)) {
    $msg = 'Meeting not found.';
  }
  if (isset($nids) && empty($nids)) {
    $msg = 'Meeting ' . $id . ' imported, but no nodes created.';
  }
  else {
    $urls = array();
    foreach ($nids as $nid) {
      $urls[] = url('node/' . $nid, array('absolute' => TRUE));
    }
    $msg = 'Meeting ' . $id . ' imported to nodes: ' . implode(',', $urls);
  }
  drupal_add_http_header('Content-Type', 'application/json');
  echo $msg;
}

/**
 * Sends a mail to the importer's email.
 *
 * It only sends an email if the email is entered,
 * and it is not cron which which is calling it.
 *
 * @param string $message
 *   The message to send.
 *
 * @param bool $is_error
 *   Wheter the message is an error
 *
 * @return bool
 *   True on success
 */
function _os2web_esdh_provider_send_statusmail($message, $is_error = FALSE) {
  // Only send if an email is stored.
  if (!strpos(request_uri(), "cron") && $mail_to = variable_get('os2web_esdh_provider_debug_email')) {

    // Set up the mail body.
    $mail_body = t('MM Import') . "\n";
    if ($is_error) {
      $mail_body .= t('Status') . ": " . t('Error') . "\n";
    }
    else {
      $mail_body .= t('Status') . ": " . t('Success') . "\n";
    }
    $mail_body .= t('Time spend') . ": " . number_format(timer_read('mm_import') / 1000, 2) . "sec.\n";
    $mail_body .= t('Messages') . ":\n\n !message\n";

    $from = variable_get('site_mail', '');
    $my_module = 'os2web_esdh_provider';
    $my_mail_token = 'mm_import_status';
    $message = array(
      'id' => $my_module . '_' . $my_mail_token,
      'to' => $mail_to,
      'subject' => t('MM Import status'),
      'body' => format_string($mail_body, array('!message' => check_plain($message))),
      'headers' => array(
        'From' => $from,
        'Sender' => $from,
        'Return-Path' => $from,
      ),
    );
    // Send mail.
    $mail_system = drupal_mail_system($my_module, $my_mail_token);
    return $mail_system->mail($message);

  }
}

/**
 * Checks if a custom text format is defined for the BPA body field.
 * I fall backs to filtered html.
 *
 * @return string
 *   Text format machine name.
 */
function _os2web_esdh_provider_bpa_body_format() {
  static $cache;
  if (empty($cache)) {
    if (defined('MM_BPA_BODY_FORMAT') && filter_format_exists(MM_BPA_BODY_FORMAT)) {
      $cache = MM_BPA_BODY_FORMAT;
    }
    else {
      $cache = 'filtered_html';
    }
  }
  return $cache;
}

function os2web_esdh_provider_filter_html_tags($data) {
    $tags = explode(',', variable_get('os2web_esdh_provider_filtered_tags', ''));
    foreach ($tags as $tag) {
        preg_match_all('#<' . $tag . '(.*?)>(.*?)</' . $tag . '>#is', $data, $matches);
        foreach ($matches[0] as $match) {
            $filtred_data = preg_replace('#style="(.*?)"#is', "", $match);
            $data = str_replace($match, $filtred_data, $data);
        }
    }

    while(preg_match('/(<a name=Acadre(.*?)>((.*?\\s*?))+<\\/a>\\s*)+/',$data, $aTags)>0){
       $str = _os2web_esdh_provider_strip_only($aTags[0],  'a');
       $data = str_replace($aTags[0],$str, $data);
     }
    $stripped_tags = explode(',', variable_get('os2web_esdh_provider_stripped_tags', ''));
    $data = _os2web_esdh_provider_strip_only($data,  $stripped_tags);

    //remove all img tags that link missing files
    $data =  _os2web_esdh_provider_remove_img_tags($data);
    //replace all <p></p> and <p>&nbsp;</p> tags with <br />
    $data = preg_replace('#(<p>((<span>)*?)(|&nbsp;)((<\/span>)*?)<\/p>\s*)+#i', '<br />', $data);
    //replace multiple &nbsp; tags with...
    $data = preg_replace('/(\x{00A0}|&nbsp;){2,}/u', variable_get('os2web_esdh_provider_tab_tag', '&nbsp;'), $data);
    return $data;
}

function _os2web_esdh_provider_remove_img_tags($data){
  preg_match_all('/<img[^>]+>/i',$data, $imgTags);
  for ($i = 0; $i < count($imgTags[0]); $i++) {
    // get the source string
     preg_match('/src="([^"]+)/i',$imgTags[0][$i], $imgage);

     $file_headers = @get_headers($imgage[0]);
     if($file_headers=== FALSE or $file_headers[0] == 'HTTP/1.0 404 Not Found')       {
         $data = str_replace($imgTags[0][$i], "",  $data);
     }
   }

  return $data;
}

function _os2web_esdh_provider_strip_only($str, $tags, $stripContent = false) {
    $content = '';
    if(!is_array($tags)) {
        $tags = (strpos($str, '>') !== false ? explode('>', str_replace('<', '', $tags)) : array($tags));
        if(end($tags) == '') array_pop($tags);
    }
    foreach($tags as $tag) {
        if ($stripContent)
             $content = '(.+</'.$tag.'[^>]*>|)';
         $str = preg_replace('#</?'.$tag.'[^>]*>'.$content.'#is', '', $str);
    }
    return $str;
}