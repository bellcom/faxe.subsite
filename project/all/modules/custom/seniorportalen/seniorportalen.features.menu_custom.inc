<?php
/**
 * @file
 * seniorportalen.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function seniorportalen_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-genveje.
  $menus['menu-genveje'] = array(
    'menu_name' => 'menu-genveje',
    'title' => 'Genveje',
    'description' => '',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Genveje');

  return $menus;
}
