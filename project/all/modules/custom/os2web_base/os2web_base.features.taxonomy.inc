<?php
/**
 * @file
 * os2web_base.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function os2web_base_taxonomy_default_vocabularies() {
  return array(
    'os2web_base_tax_promoteto' => array(
      'name' => 'Forfrem til',
      'machine_name' => 'os2web_base_tax_promoteto',
      'description' => 'Forside og portalforsider',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'os2web_base_tax_site_structure' => array(
      'name' => 'Overordnet placering og sitestruktur',
      'machine_name' => 'os2web_base_tax_site_structure',
      'description' => 'Vælg de steder i hjemmesidens overordnede struktur hvor indholdet skal publiceres.',
      'hierarchy' => 1,
      'module' => 'taxonomy',
      'weight' => -10,
    ),
  );
}
