<?php
/**
 * @file
 * kultunaut_import.features.inc
 */

/**
 * Implements hook_entityqueue_api().
 */
function kultunaut_import_entityqueue_api($module = NULL, $api = NULL) {
  if ($module == "entityqueue" && $api == "entityqueue_default") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_ctools_plugin_api().
 */
function kultunaut_import_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "page_manager" && $api == "pages_default") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function kultunaut_import_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function kultunaut_import_image_default_styles() {
  $styles = array();

  // Exported image style: oplevbanner.
  $styles['oplevbanner'] = array(
    'label' => 'oplevbanner',
    'effects' => array(
      3 => array(
        'name' => 'epsacrop_crop_reuse',
        'data' => array(
          'jcrop_reuse' => 'os2sub_banner',
        ),
        'weight' => 1,
      ),
      5 => array(
        'name' => 'image_crop',
        'data' => array(
          'width' => 1200,
          'height' => 300,
          'anchor' => 'center-center',
        ),
        'weight' => 3,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_default_search_api_autocomplete_search().
 */
function kultunaut_import_default_search_api_autocomplete_search() {
  $items = array();
  $items['search_api_page_oplevelser'] = entity_import('search_api_autocomplete_search', '{
    "machine_name" : "search_api_page_oplevelser",
    "name" : "Oplevelser",
    "index_id" : "oplevelser_og_steder",
    "suggester_id" : "server",
    "type" : "search_api_page",
    "enabled" : "1",
    "options" : {
      "suggester_configuration" : { "fields" : [
          "node:body:value",
          "node:field_os2web_base_field_loca_ref:name",
          "node:field_os2web_base_field_text",
          "node:field_os2web_kulturnaut_descrip:value",
          "node:field_os2web_kulturnaut_longdesc:value",
          "node:title",
          "taxonomy_term:name"
        ]
      },
      "min_length" : "2",
      "results" : 1,
      "submit_button_selector" : ":submit",
      "autosubmit" : 0,
      "custom" : { "page_id" : "oplevelser" }
    }
  }');
  return $items;
}

/**
 * Implements hook_default_search_api_index().
 */
function kultunaut_import_default_search_api_index() {
  $items = array();
  $items['oplevelser_og_steder'] = entity_import('search_api_index', '{
    "name" : "Oplevelser og steder",
    "machine_name" : "oplevelser_og_steder",
    "description" : null,
    "server" : "oplevelser",
    "item_type" : "multiple",
    "options" : {
      "datasource" : { "types" : [ "node", "taxonomy_term" ] },
      "index_directly" : 1,
      "cron_limit" : "50",
      "fields" : {
        "item_type" : { "type" : "string" },
        "node:body:value" : { "type" : "text" },
        "node:field_os2web_base_field_loca_ref" : { "type" : "list\\u003Cinteger\\u003E", "entity_type" : "taxonomy_term" },
        "node:field_os2web_base_field_loca_ref:description" : { "type" : "list\\u003Ctext\\u003E" },
        "node:field_os2web_base_field_loca_ref:name" : { "type" : "list\\u003Ctext\\u003E" },
        "node:field_os2web_base_field_loca_ref:parents_all" : {
          "type" : "list\\u003Clist\\u003Cinteger\\u003E\\u003E",
          "entity_type" : "taxonomy_term"
        },
        "node:field_os2web_base_field_text" : { "type" : "text" },
        "node:field_os2web_kulturnaut_date:duration" : { "type" : "duration" },
        "node:field_os2web_kulturnaut_date:value" : { "type" : "date" },
        "node:field_os2web_kulturnaut_date:value2" : { "type" : "date" },
        "node:field_os2web_kulturnaut_descrip:value" : { "type" : "text" },
        "node:field_os2web_kulturnaut_longdesc:value" : { "type" : "text" },
        "node:field_os2web_kulturnaut_price" : { "type" : "text" },
        "node:field_os2web_kulturnaut_saddress" : { "type" : "text" },
        "node:field_os2web_kulturnaut_sarrang" : { "type" : "text" },
        "node:field_os2web_kulturnaut_scity" : { "type" : "text" },
        "node:field_os2web_kulturnaut_sname" : { "type" : "text" },
        "node:field_os2web_kulturnaut_szip" : { "type" : "text" },
        "node:status" : { "type" : "integer" },
        "node:title" : { "type" : "text", "boost" : "21.0" },
        "node:url" : { "type" : "uri" },
        "search_api_language" : { "type" : "string" },
        "search_api_url" : { "type" : "uri" },
        "taxonomy_term:name" : { "type" : "text", "boost" : "0.1" },
        "taxonomy_term:parents_all" : { "type" : "list\\u003Cinteger\\u003E", "entity_type" : "taxonomy_term" },
        "taxonomy_term:parents_all:name" : { "type" : "list\\u003Ctext\\u003E" },
        "taxonomy_term:url" : { "type" : "uri" }
      },
      "data_alter_callbacks" : {
        "search_api_alter_bundle_filter" : {
          "status" : 1,
          "weight" : "-10",
          "settings" : {
            "default" : "0",
            "bundles" : {
              "node:os2web_base_contentpage" : "node:os2web_base_contentpage",
              "node:os2web_kulturnaut_knactivity" : "node:os2web_kulturnaut_knactivity",
              "node:os2web_base_news" : "node:os2web_base_news",
              "taxonomy_term:os2web_taxonomies_tax_places" : "taxonomy_term:os2web_taxonomies_tax_places"
            }
          }
        },
        "search_api_alter_language_control" : {
          "status" : 0,
          "weight" : "0",
          "settings" : { "lang_field" : "", "languages" : [] }
        },
        "search_api_alter_add_hierarchy" : {
          "status" : 0,
          "weight" : "0",
          "settings" : { "fields" : { "taxonomy_term:parents_all" : "taxonomy_term:parents_all" } }
        },
        "search_api_alter_add_aggregation" : { "status" : 0, "weight" : "0", "settings" : [] },
        "search_api_alter_add_url" : { "status" : 1, "weight" : "0", "settings" : [] }
      },
      "processors" : {
        "search_api_case_ignore" : {
          "status" : 1,
          "weight" : "0",
          "settings" : { "fields" : {
              "taxonomy_term:name" : true,
              "node:title" : true,
              "node:field_os2web_base_field_text" : true,
              "node:field_os2web_kulturnaut_price" : true,
              "node:field_os2web_kulturnaut_saddress" : true,
              "node:field_os2web_kulturnaut_sarrang" : true,
              "node:field_os2web_kulturnaut_scity" : true,
              "node:field_os2web_kulturnaut_sname" : true,
              "node:field_os2web_kulturnaut_szip" : true,
              "taxonomy_term:parents_all:name" : true,
              "node:body:value" : true,
              "node:field_os2web_base_field_loca_ref:name" : true,
              "node:field_os2web_base_field_loca_ref:description" : true,
              "node:field_os2web_kulturnaut_descrip:value" : true,
              "node:field_os2web_kulturnaut_longdesc:value" : true
            }
          }
        },
        "search_api_html_filter" : {
          "status" : 0,
          "weight" : "10",
          "settings" : {
            "fields" : {
              "taxonomy_term:name" : true,
              "node:title" : true,
              "node:field_os2web_base_field_text" : true,
              "node:field_os2web_kulturnaut_price" : true,
              "node:field_os2web_kulturnaut_saddress" : true,
              "node:field_os2web_kulturnaut_sarrang" : true,
              "node:field_os2web_kulturnaut_scity" : true,
              "node:field_os2web_kulturnaut_sname" : true,
              "node:field_os2web_kulturnaut_szip" : true,
              "taxonomy_term:parents_all:name" : true,
              "node:body:value" : true,
              "node:field_os2web_base_field_loca_ref:name" : true,
              "node:field_os2web_base_field_loca_ref:description" : true
            },
            "title" : 0,
            "alt" : 1,
            "tags" : "h1 = 5\\r\\nh2 = 3\\r\\nh3 = 2\\r\\nstrong = 2\\r\\nb = 2\\r\\nem = 1.5\\r\\nu = 1.5"
          }
        },
        "search_api_transliteration" : {
          "status" : 1,
          "weight" : "15",
          "settings" : { "fields" : {
              "taxonomy_term:name" : true,
              "node:title" : true,
              "node:field_os2web_base_field_text" : true,
              "node:field_os2web_kulturnaut_price" : true,
              "node:field_os2web_kulturnaut_saddress" : true,
              "node:field_os2web_kulturnaut_sarrang" : true,
              "node:field_os2web_kulturnaut_scity" : true,
              "node:field_os2web_kulturnaut_sname" : true,
              "node:field_os2web_kulturnaut_szip" : true,
              "taxonomy_term:parents_all:name" : true,
              "node:body:value" : true,
              "node:field_os2web_base_field_loca_ref:name" : true,
              "node:field_os2web_base_field_loca_ref:description" : true,
              "node:field_os2web_kulturnaut_descrip:value" : true,
              "node:field_os2web_kulturnaut_longdesc:value" : true
            }
          }
        },
        "search_api_tokenizer" : {
          "status" : 0,
          "weight" : "20",
          "settings" : {
            "fields" : {
              "taxonomy_term:name" : true,
              "node:title" : true,
              "node:field_os2web_base_field_text" : true,
              "node:field_os2web_kulturnaut_price" : true,
              "node:field_os2web_kulturnaut_saddress" : true,
              "node:field_os2web_kulturnaut_sarrang" : true,
              "node:field_os2web_kulturnaut_scity" : true,
              "node:field_os2web_kulturnaut_sname" : true,
              "node:field_os2web_kulturnaut_szip" : true,
              "taxonomy_term:parents_all:name" : true,
              "node:body:value" : true,
              "node:field_os2web_base_field_loca_ref:name" : true,
              "node:field_os2web_base_field_loca_ref:description" : true
            },
            "spaces" : "[^[:alnum:]]",
            "ignorable" : "[\\u0027]"
          }
        },
        "search_api_stopwords" : {
          "status" : 1,
          "weight" : "30",
          "settings" : {
            "fields" : {
              "taxonomy_term:name" : true,
              "node:title" : true,
              "node:field_os2web_base_field_text" : true,
              "node:field_os2web_kulturnaut_price" : true,
              "node:field_os2web_kulturnaut_saddress" : true,
              "node:field_os2web_kulturnaut_sarrang" : true,
              "node:field_os2web_kulturnaut_scity" : true,
              "node:field_os2web_kulturnaut_sname" : true,
              "node:field_os2web_kulturnaut_szip" : true,
              "taxonomy_term:parents_all:name" : true,
              "node:body:value" : true,
              "node:field_os2web_base_field_loca_ref:name" : true,
              "node:field_os2web_base_field_loca_ref:description" : true,
              "node:field_os2web_kulturnaut_descrip:value" : true,
              "node:field_os2web_kulturnaut_longdesc:value" : true
            },
            "file" : "",
            "stopwords" : "ad\\r\\naf\\r\\naldrig\\r\\nalle\\r\\nalt\\r\\nanden\\r\\nandet\\r\\nandre\\r\\nat\\r\\nbare\\r\\nbegge\\r\\nblev\\r\\nblive\\r\\nbliver\\r\\nda\\r\\nde\\r\\ndem\\r\\nden\\r\\ndenne\\r\\nder\\r\\nderes\\r\\ndet\\r\\ndette\\r\\ndig\\r\\ndin\\r\\ndine\\r\\ndisse\\r\\ndit\\r\\ndog\\r\\ndu\\r\\nefter\\r\\nej\\r\\neller\\r\\nen\\r\\nend\\r\\nene\\r\\neneste\\r\\nenhver\\r\\ner\\r\\net\\r\\nfar\\r\\nfem\\r\\nfik\\r\\nfire\\r\\nflere\\r\\nfleste\\r\\nfor\\r\\nfordi\\r\\nforrige\\r\\nfra\\r\\nf\\u00e5\\r\\nf\\u00e5r\\r\\nf\\u00f8r\\r\\ngod\\r\\ngodt\\r\\nham\\r\\nhan\\r\\nhans\\r\\nhar\\r\\nhavde\\r\\nhave\\r\\nhej\\r\\nhelt\\r\\nhende\\r\\nhendes\\r\\nher\\r\\nhos\\r\\nhun\\r\\nhvad\\r\\nhvem\\r\\nhver\\r\\nhvilken\\r\\nhvis\\r\\nhvor\\r\\nhvordan\\r\\nhvorfor\\r\\nhvorn\\u00e5r\\r\\ni\\r\\nikke\\r\\nind\\r\\ningen\\r\\nintet\\r\\nja\\r\\njeg\\r\\njer\\r\\njeres\\r\\njo\\r\\nkan\\r\\nkom\\r\\nkomme\\r\\nkommer\\r\\nkun\\r\\nkunne\\r\\nlad\\r\\nlav\\r\\nlidt\\r\\nlige\\r\\nlille\\r\\nman\\r\\nmand\\r\\nmange\\r\\nmed\\r\\nmeget\\r\\nmen\\r\\nmens\\r\\nmere\\r\\nmig\\r\\nmin\\r\\nmine\\r\\nmit\\r\\nmod\\r\\nm\\u00e5\\r\\nned\\r\\nnej\\r\\nni\\r\\nnogen\\r\\nnoget\\r\\nnogle\\r\\nnu\\r\\nny\\r\\nnyt\\r\\nn\\u00e5r\\r\\nn\\u00e6r\\r\\nn\\u00e6ste\\r\\nn\\u00e6sten\\r\\nog\\r\\nogs\\u00e5\\r\\nokay\\r\\nom\\r\\nop\\r\\nos\\r\\notte\\r\\nover\\r\\np\\u00e5\\r\\nse\\r\\nseks\\r\\nselv\\r\\nser\\r\\nses\\r\\nsig\\r\\nsige\\r\\nsin\\r\\nsine\\r\\nsit\\r\\nskal\\r\\nskulle\\r\\nsom\\r\\nstor\\r\\nstore\\r\\nsyv\\r\\ns\\u00e5\\r\\ns\\u00e5dan\\r\\ntag\\r\\ntage\\r\\nthi\\r\\nti\\r\\ntil\\r\\nto\\r\\ntre\\r\\nud\\r\\nunder\\r\\nvar\\r\\nved\\r\\nvi\\r\\nvil\\r\\nville\\r\\nvor\\r\\nvores\\r\\nv\\u00e6re\\r\\nv\\u00e6ret"
          }
        },
        "search_api_porter_stemmer" : {
          "status" : 0,
          "weight" : "35",
          "settings" : {
            "fields" : {
              "taxonomy_term:name" : true,
              "node:title" : true,
              "node:field_os2web_base_field_text" : true,
              "node:field_os2web_kulturnaut_price" : true,
              "node:field_os2web_kulturnaut_saddress" : true,
              "node:field_os2web_kulturnaut_sarrang" : true,
              "node:field_os2web_kulturnaut_scity" : true,
              "node:field_os2web_kulturnaut_sname" : true,
              "node:field_os2web_kulturnaut_szip" : true,
              "taxonomy_term:parents_all:name" : true,
              "node:body:value" : true,
              "node:field_os2web_base_field_loca_ref:name" : true,
              "node:field_os2web_base_field_loca_ref:description" : true
            },
            "exceptions" : "texan=texa"
          }
        },
        "search_api_highlighting" : {
          "status" : 0,
          "weight" : "40",
          "settings" : {
            "prefix" : "\\u003Cstrong\\u003E",
            "suffix" : "\\u003C\\/strong\\u003E",
            "excerpt" : 1,
            "excerpt_length" : "256",
            "exclude_fields" : [],
            "highlight" : "always",
            "highlight_partial" : 1
          }
        }
      }
    },
    "enabled" : "1",
    "read_only" : "0"
  }');
  return $items;
}

/**
 * Implements hook_default_search_api_page().
 */
function kultunaut_import_default_search_api_page() {
  $items = array();
  $items['oplevelser'] = entity_import('search_api_page', '{
    "index_id" : "oplevelser_og_steder",
    "path" : "oplev",
    "name" : "Oplevelser",
    "machine_name" : "oplevelser",
    "description" : "",
    "options" : {
      "mode" : "terms",
      "fields" : [],
      "per_page" : "100",
      "result_page_search_form" : 1,
      "get_per_page" : 0,
      "view_mode" : "search_api_page_result",
      "language_filter" : [],
      "empty_behavior" : "results"
    },
    "enabled" : "1"
  }');
  return $items;
}

/**
 * Implements hook_default_search_api_server().
 */
function kultunaut_import_default_search_api_server() {
  $items = array();
  $items['oplevelser'] = entity_import('search_api_server', '{
    "name" : "Oplevelser",
    "machine_name" : "oplevelser",
    "description" : "",
    "class" : "search_api_db_service",
    "options" : {
      "database" : "default:default",
      "min_chars" : "3",
      "partial_matches" : 1,
      "indexes" : { "oplevelser_og_steder" : {
          "search_api_language" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "search_api_language",
            "type" : "string",
            "boost" : "1.0"
          },
          "node:title" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "21.0"
          },
          "node:url" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "node_url",
            "type" : "uri",
            "boost" : "1.0"
          },
          "node:status" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "node_status",
            "type" : "integer",
            "boost" : "1.0"
          },
          "node:field_os2web_base_field_loca_ref" : {
            "table" : "search_api_db_oplevelser_og_steder_node_field_os2web_base_fiel",
            "column" : "value",
            "type" : "list\\u003Cinteger\\u003E",
            "boost" : "1.0"
          },
          "node:field_os2web_base_field_text" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_price" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_saddress" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_sarrang" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_scity" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_sname" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_szip" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "taxonomy_term:name" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "0.1"
          },
          "taxonomy_term:url" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "taxonomy_term_url",
            "type" : "uri",
            "boost" : "1.0"
          },
          "taxonomy_term:parents_all" : {
            "table" : "search_api_db_oplevelser_og_steder_taxonomy_term_parents_all",
            "column" : "value",
            "type" : "list\\u003Cinteger\\u003E",
            "boost" : "1.0"
          },
          "node:body:value" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_base_field_loca_ref:name" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "list\\u003Ctext\\u003E",
            "boost" : "1.0"
          },
          "node:field_os2web_base_field_loca_ref:description" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "list\\u003Ctext\\u003E",
            "boost" : "1.0"
          },
          "node:field_os2web_base_field_loca_ref:parents_all" : {
            "table" : "search_api_db_oplevelser_og_steder_node_field_os2web_base_fi_1",
            "column" : "value",
            "type" : "list\\u003Clist\\u003Cinteger\\u003E\\u003E",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_date:value" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "node_field_os2web_kulturnaut_date_value",
            "type" : "date",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_date:value2" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "node_field_os2web_kulturnaut_date_value2",
            "type" : "date",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_date:duration" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "node_field_os2web_kulturnaut_date_duration",
            "type" : "duration",
            "boost" : "1.0"
          },
          "taxonomy_term:parents_all:name" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "list\\u003Ctext\\u003E",
            "boost" : "1.0"
          },
          "search_api_url" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "search_api_url",
            "type" : "uri",
            "boost" : "1.0"
          },
          "item_type" : {
            "table" : "search_api_db_oplevelser_og_steder",
            "column" : "item_type",
            "type" : "string",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_descrip:value" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          },
          "node:field_os2web_kulturnaut_longdesc:value" : {
            "table" : "search_api_db_oplevelser_og_steder_text",
            "type" : "text",
            "boost" : "1.0"
          }
        }
      }
    },
    "enabled" : "1"
  }');
  return $items;
}
