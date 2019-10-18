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
  $strongarm->name = 'os2web_sbsys_esdh_cases_changed_value_path';
  $strongarm->value = 'LastStatusChange';
  $export['os2web_sbsys_esdh_cases_changed_value_path'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_case_fields_mapping';
  $strongarm->value = array(
    'SagsID' => 'Id',
    'SystemID' => 'Id',
    'Sagsnummer' => 'Sagsnummer',
    'Sagstitel' => 'Titel',
    'CPR' => 'Personer[0].CprNummer',
    'Matrikel' => 'Matrikler[0].MatrikelNummer',
    'Ejendomsnummer' => 'Ejendomme[0].EjendomsNummer',
    'Sagsstatus - Sagstypebetegnelse' => 'Sagsstatus',
    'Sagsbehandler - BrugerID' => 'Sagsbehandler[0].Id',
    'Sagsbehandler - Brugernavn' => 'Sagsbehandler[0].Navn',
    'Oprettelsesdato' => 'Oprettet',
    'Redigeringsdato' => 'LastChange',
    'StatusRedigeringsdato' => 'LastStatusChange',
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
    'CPR' => 'CPR',
    'Matrikel' => 'Matrikel',
    'Ejendomsnummer' => 'Ejendomsnummer',
    'Sagsstatus - Sagstypebetegnelse' => 'Sagsstatus - Sagstypebetegnelse',
    'Sagsbehandler - BrugerID' => 'Sagsbehandler - BrugerID',
    'Sagsbehandler - Brugernavn' => 'Sagsbehandler - Brugernavn',
    'Oprettelsesdato' => 'Oprettelsesdato',
    'Redigeringsdato' => 'Redigeringsdato',
    'StatusRedigeringsdato' => 'StatusRedigeringsdato',
  );
  $export['os2web_sbsys_esdh_cases_import_case_mapping_list'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_document_allowed_types';
  $strongarm->value = 'pdf';
  $export['os2web_sbsys_esdh_cases_import_document_allowed_types'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_document_fields_mapping';
  $strongarm->value = array(
    'Dokumentdato' => 'Registreringer[0].Oprettet',
    'Redigeringsdato' => 'CaseLastStatusChange',
    'SystemID' => 'Id',
    'Sag SystemID' => 'Registreringer[0].Sag.Id',
    'SagsID' => 'Registreringer[0].Sag.Sagsnummer',
    'Dokumenttitel' => 'Registreringer[0].Titel',
    'Indholdsbeskrivelse' => 'Registreringer[0].Beskrivelse',
    'Dokumenttype - Dokumenttype' => 'Type',
    'Indhold - FileID' => 'Filer[0].Id',
  );
  $export['os2web_sbsys_esdh_cases_import_document_fields_mapping'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_document_files_jsonpath';
  $strongarm->value = 'Filer[0]';
  $export['os2web_sbsys_esdh_cases_import_document_files_jsonpath'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_document_files_limit';
  $strongarm->value = '1';
  $export['os2web_sbsys_esdh_cases_import_document_files_limit'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_cases_import_document_mapping_list';
  $strongarm->value = array(
    'Dokumentdato' => 'Dokumentdato',
    'Redigeringsdato' => 'Redigeringsdato',
    'SystemID' => 'SystemID',
    'Sag SystemID' => 'Sag SystemID',
    'SagsID' => 'SagsID',
    'Dokumenttitel' => 'Dokumenttitel',
    'Indholdsbeskrivelse' => 'Indholdsbeskrivelse',
    'Dokumenttype - Dokumenttype' => 'Dokumenttype - Dokumenttype',
    'Indhold - FileID' => 'Indhold - FileID',
  );
  $export['os2web_sbsys_esdh_cases_import_document_mapping_list'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'os2web_sbsys_esdh_document_changed_value_path';
  $strongarm->value = 'CaseLastStatusChange';
  $export['os2web_sbsys_esdh_document_changed_value_path'] = $strongarm;

  return $export;
}
