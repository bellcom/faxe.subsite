<?php
/**
 * @file
 * os2web_cp_service.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function os2web_cp_service_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'os2web_cp_service_context';
  $context->description = 'Contexts to CP panels. Hide right sidebar';
  $context->tag = 'OS2Web - Blokke';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'aaben-indsigt' => 'aaben-indsigt',
        'sag/*' => 'sag/*',
        'dok/*' => 'dok/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-sitestuktur-block_2' => array(
          'module' => 'views',
          'delta' => 'sitestuktur-block_2',
          'region' => 'sidebar_first',
          'weight' => '-74',
        ),
        'menu-menu-mega-menu-borger' => array(
          'module' => 'menu',
          'delta' => 'menu-mega-menu-borger',
          'region' => 'sidebar_first',
          'weight' => '-73',
        ),
      ),
    ),
    'delta' => array(
      'delta_template' => 'hide_second_sidebar',
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Contexts to CP panels. Hide right sidebar');
  t('OS2Web - Blokke');
  $export['os2web_cp_service_context'] = $context;

  return $export;
}
