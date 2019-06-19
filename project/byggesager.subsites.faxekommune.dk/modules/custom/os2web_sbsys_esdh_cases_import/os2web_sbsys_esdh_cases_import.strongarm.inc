<?php
/**
 * @file
 * os2web_sbsys_esdh_cases_import.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function os2web_sbsys_esdh_cases_import_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_case_fields_mapping';
  $strongarm->value = array(
    'SagsID' => 'Id',
    'SystemID' => 'Id',
    'Sagsnummer' => 'Sagsnummer',
    'Sagstitel' => 'Titel',
    'Matrikel' => 'Matrikler[0].Id',
    'Ejendomsnummer' => 'Ejendomme[0].EjendomsNummer',
    'Sagsstatus - Sagstypebetegnelse' => 'Sagsstatus',
    'Sagsbehandler - BrugerID' => 'Sagsbehandler[0].Id',
    'Sagsbehandler - Brugernavn' => 'Sagsbehandler[0].Navn',
  );
  $export['os2web_sbsys_esdh_cases_import_case_fields_mapping'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_case_mapping_list';
  $strongarm->value = array(
    'SagsID' => 'SagsID',
    'SystemID' => 'SystemID',
    'Sagsnummer' => 'Sagsnummer',
    'Sagstitel' => 'Sagstitel',
    'Matrikel' => 'Matrikel',
    'Ejendomsnummer' => 'Ejendomsnummer',
    'Sagsstatus - Sagstypebetegnelse' => 'Sagsstatus - Sagstypebetegnelse',
    'Sagsbehandler - BrugerID' => 'Sagsbehandler - BrugerID',
    'Sagsbehandler - Brugernavn' => 'Sagsbehandler - Brugernavn',
  );
  $export['os2web_sbsys_esdh_cases_import_case_mapping_list'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_document_fields_mapping';
  $strongarm->value = array(
    'SystemID' => 'Id',
    'Sag SystemID' => 'Registreringer[0].Sag.Id',
    'FilID' => 'Filer[0].0.Id',
    'SagsID' => 'Registreringer[0].Sag.Sagsnummer',
    'Dokumenttitel' => 'Registreringer[0].Titel',
    'Indholdsbeskrivelse' => 'Registreringer[0].Beskrivelse',
    'Dokumenttype - Dokumenttype' => 'Type',
  );
  $export['os2web_sbsys_esdh_cases_import_document_fields_mapping'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_document_mapping_list';
  $strongarm->value = array(
    'SystemID' => 'SystemID',
    'Sag SystemID' => 'Sag SystemID',
    'FilID' => 'FilID',
    'SagsID' => 'SagsID',
    'Journalnummer' => 'Journalnummer',
    'Dokumenttitel' => 'Dokumenttitel',
    'Indholdsbeskrivelse' => 'Indholdsbeskrivelse',
    'Dokumenttype - Dokumenttype' => 'Dokumenttype - Dokumenttype',
  );
  $export['os2web_sbsys_esdh_cases_import_document_mapping_list'] = $strongarm;

  return $export;
}
