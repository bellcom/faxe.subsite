<?php
/**
 * @file
 * subsites_urls.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function subsites_urls_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
