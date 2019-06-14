<?php
/**
 * @file
 * os2web_cp_service.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function os2web_cp_service_taxonomy_default_vocabularies() {
  return array(
    'os2web_cp_service_tax_approved_rules' => array(
      'name' => 'CP Approved Rules',
      'machine_name' => 'os2web_cp_service_tax_approved_rules',
      'description' => 'Trigger rules which are approved to be published',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
    'os2web_cp_service_tax_rules' => array(
      'name' => 'CP Rules',
      'machine_name' => 'os2web_cp_service_tax_rules',
      'description' => 'Vocabulary of the different types of used rules',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
