<?php
/**
 * @file
 * os2web_contact.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function os2web_contact_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create os2web_contact_contact content'.
  $permissions['create os2web_contact_contact content'] = array(
    'name' => 'create os2web_contact_contact content',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any os2web_contact_contact content'.
  $permissions['delete any os2web_contact_contact content'] = array(
    'name' => 'delete any os2web_contact_contact content',
    'roles' => array(
      'Administrator' => 'Administrator',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own os2web_contact_contact content'.
  $permissions['delete own os2web_contact_contact content'] = array(
    'name' => 'delete own os2web_contact_contact content',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any os2web_contact_contact content'.
  $permissions['edit any os2web_contact_contact content'] = array(
    'name' => 'edit any os2web_contact_contact content',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own os2web_contact_contact content'.
  $permissions['edit own os2web_contact_contact content'] = array(
    'name' => 'edit own os2web_contact_contact content',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  return $permissions;
}
