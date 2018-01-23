<?php

$info = [];

// Define the CSS file(s) that we want the Color module to use as a base.
$info['css'] = ['dist/stylesheets/stylesheet.css'];

// Define the possible replaceable items and their labels.
$info['fields'] = [
  'base' => t('Base'),
  'primary' => t('Primary'),
  'secondary' => t('Secondary'),
];

// Color schemes for the site.
$info['schemes'] = [

  // Define the default scheme.
  'default' => [

    // Scheme title.
    'title' => t('Default colouring'),

    // Scheme colors
    'colors' => [
      'base' => '#007ca3',
      'primary' => '#007ca3',
      'secondary' => '#4195b2',
    ],
  ],
];

// Files we want to copy along with the CSS files, let's define these later.
$info['copy'] = [];

// Files used in the scheme preview.
$info['preview_css'] = '';
$info['preview_js'] = '';
$info['preview_html'] = '';

// Gradients
$info['gradients'] = [];

// Color areas to fill (x, y, width, height).
$info['fill'] = [];

// Coordinates of all the theme slices (x, y, width, height)
// with their filename as used in the stylesheet.
$info['slices'] = [];

// Base file for image generation.
$info['base_image'] = 'color/base.png';
