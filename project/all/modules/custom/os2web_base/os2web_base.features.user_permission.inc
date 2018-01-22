<?php
/**
 * @file
 * os2web_base.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function os2web_base_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'access site map'.
  $permissions['access site map'] = array(
    'name' => 'access site map',
    'roles' => array(
      'Administrator' => 'Administrator',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'site_map',
  );

  // Exported permission: 'access site-wide contact form'.
  $permissions['access site-wide contact form'] = array(
    'name' => 'access site-wide contact form',
    'roles' => array(
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'contact',
  );

  // Exported permission: 'access user contact forms'.
  $permissions['access user contact forms'] = array(
    'name' => 'access user contact forms',
    'roles' => array(
      'Administrator' => 'Administrator',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'contact',
  );

  // Exported permission: 'administer contact forms'.
  $permissions['administer contact forms'] = array(
    'name' => 'administer contact forms',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'contact',
  );

  // Exported permission: 'administer content types'.
  $permissions['administer content types'] = array(
    'name' => 'administer content types',
    'roles' => array(
      'Administrator' => 'Administrator',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'administer filters'.
  $permissions['administer filters'] = array(
    'name' => 'administer filters',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'administer image styles'.
  $permissions['administer image styles'] = array(
    'name' => 'administer image styles',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'image',
  );

  // Exported permission: 'bypass node access'.
  $permissions['bypass node access'] = array(
    'name' => 'bypass node access',
    'roles' => array(
      'Administrator' => 'Administrator',
      'Webmaster' => 'Webmaster',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'search content'.
  $permissions['search content'] = array(
    'name' => 'search content',
    'roles' => array(
      'Administrator' => 'Administrator',
      'anonymous user' => 'anonymous user',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'search',
  );

  // Exported permission: 'use advanced search'.
  $permissions['use advanced search'] = array(
    'name' => 'use advanced search',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'search',
  );

  return $permissions;
}
