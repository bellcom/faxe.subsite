<?php
/**
 * @file
 * kultunaut_import.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function kultunaut_import_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance:
  // 'entityqueue_subqueue-promoted_venues-eq_taxonomy_term'.
  $field_instances['entityqueue_subqueue-promoted_venues-eq_taxonomy_term'] = array(
    'bundle' => 'promoted_venues',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'module' => 'entityreference',
        'settings' => array(
          'link' => FALSE,
        ),
        'type' => 'entityreference_label',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'entityqueue_subqueue',
    'field_name' => 'eq_taxonomy_term',
    'label' => 'Queue items',
    'required' => FALSE,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'module' => 'entityqueue',
      'settings' => array(
        'add_position' => 'bottom',
        'match_operator' => 'CONTAINS',
        'size' => 60,
      ),
      'type' => 'entityqueue_dragtable',
      'weight' => 0,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Queue items');

  return $field_instances;
}
