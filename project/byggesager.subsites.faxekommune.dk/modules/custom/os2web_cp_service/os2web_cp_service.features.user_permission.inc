<?php
/**
 * @file
 * os2web_cp_service.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function os2web_cp_service_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create os2web_cp_service_cp_case content'.
  $permissions['create os2web_cp_service_cp_case content'] = array(
    'name' => 'create os2web_cp_service_cp_case content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create os2web_cp_service_cp_document content'.
  $permissions['create os2web_cp_service_cp_document content'] = array(
    'name' => 'create os2web_cp_service_cp_document content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any os2web_cp_service_cp_case content'.
  $permissions['delete any os2web_cp_service_cp_case content'] = array(
    'name' => 'delete any os2web_cp_service_cp_case content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any os2web_cp_service_cp_document content'.
  $permissions['delete any os2web_cp_service_cp_document content'] = array(
    'name' => 'delete any os2web_cp_service_cp_document content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own os2web_cp_service_cp_case content'.
  $permissions['delete own os2web_cp_service_cp_case content'] = array(
    'name' => 'delete own os2web_cp_service_cp_case content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own os2web_cp_service_cp_document content'.
  $permissions['delete own os2web_cp_service_cp_document content'] = array(
    'name' => 'delete own os2web_cp_service_cp_document content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any os2web_cp_service_cp_case content'.
  $permissions['edit any os2web_cp_service_cp_case content'] = array(
    'name' => 'edit any os2web_cp_service_cp_case content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any os2web_cp_service_cp_document content'.
  $permissions['edit any os2web_cp_service_cp_document content'] = array(
    'name' => 'edit any os2web_cp_service_cp_document content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own os2web_cp_service_cp_case content'.
  $permissions['edit own os2web_cp_service_cp_case content'] = array(
    'name' => 'edit own os2web_cp_service_cp_case content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own os2web_cp_service_cp_document content'.
  $permissions['edit own os2web_cp_service_cp_document content'] = array(
    'name' => 'edit own os2web_cp_service_cp_document content',
    'roles' => array(
      'Administrator' => 'Administrator',
    ),
    'module' => 'node',
  );

  return $permissions;
}
