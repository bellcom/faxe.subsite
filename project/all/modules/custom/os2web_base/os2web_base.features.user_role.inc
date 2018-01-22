<?php
/**
 * @file
 * os2web_base.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function os2web_base_user_default_roles() {
  $roles = array();

  // Exported role: Administrator.
  $roles['Administrator'] = array(
    'name' => 'Administrator',
    'weight' => 5,
  );

  // Exported role: Editor.
  $roles['Editor'] = array(
    'name' => 'Editor',
    'weight' => 3,
  );

  // Exported role: Webmaster.
  $roles['Webmaster'] = array(
    'name' => 'Webmaster',
    'weight' => 4,
  );

  return $roles;
}
