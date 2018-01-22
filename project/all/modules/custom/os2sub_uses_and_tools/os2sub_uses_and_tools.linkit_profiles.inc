<?php
/**
 * @file
 * os2sub_uses_and_tools.linkit_profiles.inc
 */

/**
 * Implements hook_default_linkit_profiles().
 */
function os2sub_uses_and_tools_default_linkit_profiles() {
  $export = array();

  $linkit_profile = new LinkitProfile();
  $linkit_profile->disabled = FALSE; /* Edit this to true to make a default linkit_profile disabled initially */
  $linkit_profile->api_version = 1;
  $linkit_profile->name = 'ckeditor_linkit';
  $linkit_profile->admin_title = 'Ckeditor linkit';
  $linkit_profile->admin_description = '';
  $linkit_profile->profile_type = '1';
  $linkit_profile->data = array(
    'text_formats' => array(
      'full_html' => 'full_html',
      'plain_text' => 0,
    ),
    'search_plugins' => array(
      'entity:taxonomy_term' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:node' => array(
        'enabled' => 1,
        'weight' => '-10',
      ),
      'entity:file' => array(
        'enabled' => 1,
        'weight' => '-10',
      ),
      'entity:user' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'entity:node' => array(
      'result_description' => '',
      'bundles' => array(
        'os2web_base_gallery' => 'os2web_base_gallery',
        'os2web_base_contentpage' => 'os2web_base_contentpage',
        'os2web_base_news' => 'os2web_base_news',
        'webform' => 'webform',
        'event_calendar' => 0,
        'banner' => 0,
        'os2web_contact_contact' => 0,
        'media' => 0,
        'os2web_base_selfservice_link' => 0,
        'velkomst' => 0,
      ),
      'group_by_bundle' => 0,
      'include_unpublished' => 0,
    ),
    'entity:file' => 'entity',
    'entity:taxonomy_term' => array(
      'result_description' => '',
      'bundles' => array(
        'event_calendar_status' => 0,
        'os2web_news_page_newstypes' => 0,
        'os2web_taxonomies_tax_comittee' => 0,
        'os2web_taxonomies_tax_editor_tag' => 0,
        'os2web_taxonomies_tax_kle' => 0,
        'os2web_taxonomies_tax_org' => 0,
        'os2web_taxonomies_tax_places' => 0,
        'os2web_taxonomies_tax_politics' => 0,
        'os2web_taxonomies_tax_portal_cat' => 0,
        'os2web_taxonomies_tax_user_pos' => 0,
        'tags' => 0,
        'os2web_base_tax_promoteto' => 0,
        'os2web_base_tax_site_structure' => 0,
        'forsidefoto' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:user' => array(
      'result_description' => '',
    ),
    'insert_plugin' => array(
      'url_method' => '2',
    ),
    'attribute_plugins' => array(
      'accesskey' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'target' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'class' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'rel' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'id' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'title' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'autocomplete' => array(
      'charLimit' => '3',
      'wait' => '350',
      'remoteTimeout' => '10000',
    ),
  );
  $export['ckeditor_linkit'] = $linkit_profile;

  $linkit_profile = new LinkitProfile();
  $linkit_profile->disabled = FALSE; /* Edit this to true to make a default linkit_profile disabled initially */
  $linkit_profile->api_version = 1;
  $linkit_profile->name = 'os2sub_linkit';
  $linkit_profile->admin_title = 'Linkit';
  $linkit_profile->admin_description = '';
  $linkit_profile->profile_type = '2';
  $linkit_profile->data = array(
    'search_plugins' => array(
      'entity:fieldable_panels_pane' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:taxonomy_term' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:node' => array(
        'enabled' => 1,
        'weight' => '-10',
      ),
      'entity:file' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'entity:user' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'entity:fieldable_panels_pane' => array(
      'result_description' => '',
    ),
    'entity:node' => array(
      'result_description' => '',
      'bundles' => array(
        'os2sub_event' => 'os2sub_event',
        'os2web_base_gallery' => 'os2web_base_gallery',
        'os2web_base_contentpage' => 'os2web_base_contentpage',
        'kalenderside' => 'kalenderside',
        'webform' => 'webform',
        'banner' => 0,
        'event_calendar' => 0,
        'os2web_contact_contact' => 0,
        'media' => 0,
        'os2web_base_news' => 0,
        'os2web_base_selfservice_link' => 0,
        'os2web_spotbox_box' => 0,
        'velkomst' => 0,
      ),
      'group_by_bundle' => 0,
      'include_unpublished' => 0,
    ),
    'entity:file' => array(
      'result_description' => '',
      'bundles' => array(
        'image' => 0,
        'video' => 0,
        'audio' => 0,
        'document' => 0,
      ),
      'group_by_bundle' => 0,
      'show_scheme' => 0,
      'group_by_scheme' => 0,
      'url_type' => 'entity',
      'image_extra_info' => array(
        'thumbnail' => 'thumbnail',
        'dimensions' => 'dimensions',
      ),
    ),
    'entity:taxonomy_term' => array(
      'result_description' => '',
      'bundles' => array(
        'event_calendar_status' => 0,
        'os2web_news_page_newstypes' => 0,
        'os2web_taxonomies_tax_comittee' => 0,
        'os2web_taxonomies_tax_editor_tag' => 0,
        'os2web_taxonomies_tax_kle' => 0,
        'os2web_taxonomies_tax_org' => 0,
        'os2web_taxonomies_tax_places' => 0,
        'os2web_taxonomies_tax_politics' => 0,
        'os2web_taxonomies_tax_portal_cat' => 0,
        'os2web_taxonomies_tax_user_pos' => 0,
        'tags' => 0,
        'os2web_base_tax_promoteto' => 0,
        'os2web_base_tax_site_structure' => 0,
      ),
      'group_by_bundle' => 0,
    ),
    'entity:user' => array(
      'result_description' => '',
    ),
    'insert_plugin' => array(
      'plugin' => 'raw_url',
      'url_method' => '2',
    ),
    'attribute_plugins' => array(
      'target' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'class' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'id' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'title' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'accesskey' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
      'rel' => array(
        'enabled' => 0,
        'weight' => '-10',
      ),
    ),
    'autocomplete' => array(
      'charLimit' => '3',
      'wait' => '350',
      'remoteTimeout' => '10000',
    ),
  );
  $export['os2sub_linkit'] = $linkit_profile;

  return $export;
}
