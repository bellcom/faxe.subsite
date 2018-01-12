<?php
/**
 * @file
 * kultunaut_import.rules_defaults.inc
 */

/**
 * Implements hook_default_rules_configuration().
 */
function kultunaut_import_default_rules_configuration() {
  $items = array();
  $items['rules_new_terms'] = entity_import('rules_config', '{ "rules_new_terms" : {
      "LABEL" : "New terms",
      "PLUGIN" : "reaction rule",
      "OWNER" : "rules",
      "REQUIRES" : [ "rules", "taxonomy" ],
      "ON" : { "taxonomy_term_presave--os2web_taxonomies_tax_places" : { "bundle" : "os2web_taxonomies_tax_places" } },
      "IF" : [ { "entity_is_new" : { "entity" : [ "term" ] } } ],
      "DO" : [ { "data_set" : { "data" : [ "term:parent:3" ], "value" : "125" } } ]
    }
  }');
  return $items;
}
