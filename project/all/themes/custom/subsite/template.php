<?php

/**
 * Implements template_preprocess_html().
 */
function subsite_preprocess_html(&$variables) {
  $theme_path = path_to_theme();

  // Add stylesheets
  drupal_add_css($theme_path . '/dist/stylesheets/stylesheet.css',
    [
      'group' => CSS_THEME,
    ]);

  // Add javascript files
  drupal_add_js($theme_path . '/dist/javascripts/modernizr.js',
    [
      'type'  => 'file',
      'scope' => 'footer',
      'group' => JS_LIBRARY,
    ]);
  drupal_add_js($theme_path . '/dist/javascripts/app.js',
    [
      'type'  => 'file',
      'scope' => 'footer',
      'group' => JS_THEME,
    ]);

  // Add fonts from Google fonts API.
  drupal_add_css('https://fonts.googleapis.com/css?family=Lato:400,700',
    ['type' => 'external']);
}

/**
 * Implements hook_preprocess_page().
 */
function subsite_preprocess_page(&$variables) {
  $current_theme                     = variable_get('theme_default', 'none');
  $primary_navigation_name           = variable_get('menu_main_links_source', 'main-menu');
  $secondary_navigation_name         = variable_get('menu_secondary_links_source', 'user-menu');

  // Overriding the one set by mother theme, as we want to limit the number of levels shown
  $variables['flexy_navigation__primary'] = _bellcom_generate_menu($primary_navigation_name, 'flexy_navigation', TRUE, 2);
  $variables['menu_header__row_first__secondary'] = _bellcom_generate_menu($secondary_navigation_name, 'flexy_list', false, 1);

  $variables['theme_path']  = base_path() . drupal_get_path('theme', $current_theme);

  // Tabs.
  $variables['tabs_primary']   = $variables['tabs'];
  $variables['tabs_secondary'] = $variables['tabs'];
  unset($variables['tabs_primary']['#secondary']);
  unset($variables['tabs_secondary']['#primary']);
}

/**
 * Implements template_preprocess_node.
 */
function subsite_preprocess_node(&$variables) {
  $node = $variables['node'];

  // Optionally, run node-type-specific preprocess functions, like
  // foo_preprocess_node_page() or foo_preprocess_node_story().
  $function_node_type = __FUNCTION__ . '__' . $node->type;
  $function_view_mode = __FUNCTION__ . '__' . $variables['view_mode'];

  if (function_exists($function_node_type)) {
    $function_node_type($variables);
  }

  if (function_exists($function_view_mode)) {
    $function_view_mode($variables);
  }
}

/*
 * Implements template_preprocess_taxonomy_term().
 */
function subsite_preprocess_taxonomy_term(&$variables) {
  $term = $variables['term'];
  $view_mode = $variables['view_mode'];
  $vocabulary_machine_name = $variables['vocabulary_machine_name'];

  // Add taxonomy-term--view_mode.tpl.php suggestions.
  $variables['theme_hook_suggestions'][] = 'taxonomy_term__' . $view_mode;

  // Make "taxonomy-term--TERMTYPE--VIEWMODE.tpl.php" templates available for terms.
  $variables['theme_hook_suggestions'][] = 'taxonomy_term__' . $vocabulary_machine_name . '__' . $view_mode;

  // Optionally, run node-type-specific preprocess functions, like
  // foo_preprocess_taxonomy_term_page() or foo_preprocess_taxonomy_term_story().
  $function_taxonomy_term_type = __FUNCTION__ . '__' . $vocabulary_machine_name;
  $function_view_mode = __FUNCTION__ . '__' . $view_mode;

  if (function_exists($function_taxonomy_term_type)) {
    $function_taxonomy_term_type($variables);
  }

  if (function_exists($function_view_mode)) {
    $function_view_mode($variables);
  }
}
