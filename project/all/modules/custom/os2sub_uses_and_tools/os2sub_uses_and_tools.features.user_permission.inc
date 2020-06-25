<?php

/**
 * @file
 * os2sub_uses_and_tools.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function os2sub_uses_and_tools_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'access administration menu'.
  $permissions['access administration menu'] = array(
    'name' => 'access administration menu',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'admin_menu',
  );

  // Exported permission: 'access administration pages'.
  $permissions['access administration pages'] = array(
    'name' => 'access administration pages',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access all views'.
  $permissions['access all views'] = array(
    'name' => 'access all views',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'views',
  );

  // Exported permission: 'access all webform results'.
  $permissions['access all webform results'] = array(
    'name' => 'access all webform results',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'access content'.
  $permissions['access content'] = array(
    'name' => 'access content',
    'roles' => array(
      'Editor' => 'Editor',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access content overview'.
  $permissions['access content overview'] = array(
    'name' => 'access content overview',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'access contextual links'.
  $permissions['access contextual links'] = array(
    'name' => 'access contextual links',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'contextual',
  );

  // Exported permission: 'access media browser'.
  $permissions['access media browser'] = array(
    'name' => 'access media browser',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'media',
  );

  // Exported permission: 'access own webform results'.
  $permissions['access own webform results'] = array(
    'name' => 'access own webform results',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'access own webform submissions'.
  $permissions['access own webform submissions'] = array(
    'name' => 'access own webform submissions',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'access site in maintenance mode'.
  $permissions['access site in maintenance mode'] = array(
    'name' => 'access site in maintenance mode',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access site reports'.
  $permissions['access site reports'] = array(
    'name' => 'access site reports',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'access user profiles'.
  $permissions['access user profiles'] = array(
    'name' => 'access user profiles',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'user',
  );

  // Exported permission: 'access workbench'.
  $permissions['access workbench'] = array(
    'name' => 'access workbench',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'workbench',
  );

  // Exported permission: 'add media from remote sources'.
  $permissions['add media from remote sources'] = array(
    'name' => 'add media from remote sources',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'media_internet',
  );

  // Exported permission: 'administer EU Cookie Compliance popup'.
  $permissions['administer EU Cookie Compliance popup'] = array(
    'name' => 'administer EU Cookie Compliance popup',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'eu_cookie_compliance',
  );

  // Exported permission: 'administer actions'.
  $permissions['administer actions'] = array(
    'name' => 'administer actions',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer blocks'.
  $permissions['administer blocks'] = array(
    'name' => 'administer blocks',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'block',
  );

  // Exported permission: 'administer ckeditor'.
  $permissions['administer ckeditor'] = array(
    'name' => 'administer ckeditor',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'ckeditor',
  );

  // Exported permission: 'administer file types'.
  $permissions['administer file types'] = array(
    'name' => 'administer file types',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'administer files'.
  $permissions['administer files'] = array(
    'name' => 'administer files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'administer honeypot'.
  $permissions['administer honeypot'] = array(
    'name' => 'administer honeypot',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'honeypot',
  );

  // Exported permission: 'administer languages'.
  $permissions['administer languages'] = array(
    'name' => 'administer languages',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'locale',
  );

  // Exported permission: 'administer linkit'.
  $permissions['administer linkit'] = array(
    'name' => 'administer linkit',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'linkit',
  );

  // Exported permission: 'administer media browser'.
  $permissions['administer media browser'] = array(
    'name' => 'administer media browser',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'media',
  );

  // Exported permission: 'administer menu'.
  $permissions['administer menu'] = array(
    'name' => 'administer menu',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'menu',
  );

  // Exported permission: 'administer meta tags'.
  $permissions['administer meta tags'] = array(
    'name' => 'administer meta tags',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'metatag',
  );

  // Exported permission: 'administer mini panels'.
  $permissions['administer mini panels'] = array(
    'name' => 'administer mini panels',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'panels_mini',
  );

  // Exported permission: 'administer modules'.
  $permissions['administer modules'] = array(
    'name' => 'administer modules',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer nodes'.
  $permissions['administer nodes'] = array(
    'name' => 'administer nodes',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'administer panels layouts'.
  $permissions['administer panels layouts'] = array(
    'name' => 'administer panels layouts',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer panels styles'.
  $permissions['administer panels styles'] = array(
    'name' => 'administer panels styles',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'administer pathauto'.
  $permissions['administer pathauto'] = array(
    'name' => 'administer pathauto',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'pathauto',
  );

  // Exported permission: 'administer permissions'.
  $permissions['administer permissions'] = array(
    'name' => 'administer permissions',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer respondjs'.
  $permissions['administer respondjs'] = array(
    'name' => 'administer respondjs',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'respondjs',
  );

  // Exported permission: 'administer scheduler'.
  $permissions['administer scheduler'] = array(
    'name' => 'administer scheduler',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'scheduler',
  );

  // Exported permission: 'administer site configuration'.
  $permissions['administer site configuration'] = array(
    'name' => 'administer site configuration',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer software updates'.
  $permissions['administer software updates'] = array(
    'name' => 'administer software updates',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer taxonomy'.
  $permissions['administer taxonomy'] = array(
    'name' => 'administer taxonomy',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'administer themes'.
  $permissions['administer themes'] = array(
    'name' => 'administer themes',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'administer url aliases'.
  $permissions['administer url aliases'] = array(
    'name' => 'administer url aliases',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'path',
  );

  // Exported permission: 'administer users'.
  $permissions['administer users'] = array(
    'name' => 'administer users',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'user',
  );

  // Exported permission: 'administer views'.
  $permissions['administer views'] = array(
    'name' => 'administer views',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'views',
  );

  // Exported permission: 'administer workbench'.
  $permissions['administer workbench'] = array(
    'name' => 'administer workbench',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'workbench',
  );

  // Exported permission: 'block IP addresses'.
  $permissions['block IP addresses'] = array(
    'name' => 'block IP addresses',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  // Exported permission: 'bypass file access'.
  $permissions['bypass file access'] = array(
    'name' => 'bypass file access',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'bypass honeypot protection'.
  $permissions['bypass honeypot protection'] = array(
    'name' => 'bypass honeypot protection',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'honeypot',
  );

  // Exported permission: 'cancel account'.
  $permissions['cancel account'] = array(
    'name' => 'cancel account',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'user',
  );

  // Exported permission: 'change own username'.
  $permissions['change own username'] = array(
    'name' => 'change own username',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'user',
  );

  // Exported permission: 'create banner content'.
  $permissions['create banner content'] = array(
    'name' => 'create banner content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create files'.
  $permissions['create files'] = array(
    'name' => 'create files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'create media content'.
  $permissions['create media content'] = array(
    'name' => 'create media content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create mini panels'.
  $permissions['create mini panels'] = array(
    'name' => 'create mini panels',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'panels_mini',
  );

  // Exported permission: 'create os2web_base_contentpage content'.
  $permissions['create os2web_base_contentpage content'] = array(
    'name' => 'create os2web_base_contentpage content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create os2web_base_gallery content'.
  $permissions['create os2web_base_gallery content'] = array(
    'name' => 'create os2web_base_gallery content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create os2web_base_news content'.
  $permissions['create os2web_base_news content'] = array(
    'name' => 'create os2web_base_news content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create os2web_base_selfservice_link content'.
  $permissions['create os2web_base_selfservice_link content'] = array(
    'name' => 'create os2web_base_selfservice_link content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'create url aliases'.
  $permissions['create url aliases'] = array(
    'name' => 'create url aliases',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'path',
  );

  // Exported permission: 'create webform content'.
  $permissions['create webform content'] = array(
    'name' => 'create webform content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'customize ckeditor'.
  $permissions['customize ckeditor'] = array(
    'name' => 'customize ckeditor',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'ckeditor',
  );

  // Exported permission: 'delete all webform submissions'.
  $permissions['delete all webform submissions'] = array(
    'name' => 'delete all webform submissions',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'delete any audio files'.
  $permissions['delete any audio files'] = array(
    'name' => 'delete any audio files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any banner content'.
  $permissions['delete any banner content'] = array(
    'name' => 'delete any banner content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any document files'.
  $permissions['delete any document files'] = array(
    'name' => 'delete any document files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any image files'.
  $permissions['delete any image files'] = array(
    'name' => 'delete any image files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any media content'.
  $permissions['delete any media content'] = array(
    'name' => 'delete any media content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any os2web_base_contentpage content'.
  $permissions['delete any os2web_base_contentpage content'] = array(
    'name' => 'delete any os2web_base_contentpage content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any os2web_base_gallery content'.
  $permissions['delete any os2web_base_gallery content'] = array(
    'name' => 'delete any os2web_base_gallery content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any os2web_base_news content'.
  $permissions['delete any os2web_base_news content'] = array(
    'name' => 'delete any os2web_base_news content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any os2web_base_selfservice_link content'.
  $permissions['delete any os2web_base_selfservice_link content'] = array(
    'name' => 'delete any os2web_base_selfservice_link content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any video files'.
  $permissions['delete any video files'] = array(
    'name' => 'delete any video files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete any webform content'.
  $permissions['delete any webform content'] = array(
    'name' => 'delete any webform content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own audio files'.
  $permissions['delete own audio files'] = array(
    'name' => 'delete own audio files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own banner content'.
  $permissions['delete own banner content'] = array(
    'name' => 'delete own banner content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own document files'.
  $permissions['delete own document files'] = array(
    'name' => 'delete own document files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own image files'.
  $permissions['delete own image files'] = array(
    'name' => 'delete own image files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own media content'.
  $permissions['delete own media content'] = array(
    'name' => 'delete own media content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own os2web_base_contentpage content'.
  $permissions['delete own os2web_base_contentpage content'] = array(
    'name' => 'delete own os2web_base_contentpage content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own os2web_base_gallery content'.
  $permissions['delete own os2web_base_gallery content'] = array(
    'name' => 'delete own os2web_base_gallery content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own os2web_base_news content'.
  $permissions['delete own os2web_base_news content'] = array(
    'name' => 'delete own os2web_base_news content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own os2web_base_selfservice_link content'.
  $permissions['delete own os2web_base_selfservice_link content'] = array(
    'name' => 'delete own os2web_base_selfservice_link content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own video files'.
  $permissions['delete own video files'] = array(
    'name' => 'delete own video files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'delete own webform content'.
  $permissions['delete own webform content'] = array(
    'name' => 'delete own webform content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own webform submissions'.
  $permissions['delete own webform submissions'] = array(
    'name' => 'delete own webform submissions',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'delete revisions'.
  $permissions['delete revisions'] = array(
    'name' => 'delete revisions',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete terms in os2web_base_tax_promoteto'.
  $permissions['delete terms in os2web_base_tax_promoteto'] = array(
    'name' => 'delete terms in os2web_base_tax_promoteto',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_base_tax_site_structure'.
  $permissions['delete terms in os2web_base_tax_site_structure'] = array(
    'name' => 'delete terms in os2web_base_tax_site_structure',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_news_page_newstypes'.
  $permissions['delete terms in os2web_news_page_newstypes'] = array(
    'name' => 'delete terms in os2web_news_page_newstypes',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_taxonomies_tax_editor_tag'.
  $permissions['delete terms in os2web_taxonomies_tax_editor_tag'] = array(
    'name' => 'delete terms in os2web_taxonomies_tax_editor_tag',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_taxonomies_tax_kle'.
  $permissions['delete terms in os2web_taxonomies_tax_kle'] = array(
    'name' => 'delete terms in os2web_taxonomies_tax_kle',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_taxonomies_tax_org'.
  $permissions['delete terms in os2web_taxonomies_tax_org'] = array(
    'name' => 'delete terms in os2web_taxonomies_tax_org',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_taxonomies_tax_places'.
  $permissions['delete terms in os2web_taxonomies_tax_places'] = array(
    'name' => 'delete terms in os2web_taxonomies_tax_places',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_taxonomies_tax_politics'.
  $permissions['delete terms in os2web_taxonomies_tax_politics'] = array(
    'name' => 'delete terms in os2web_taxonomies_tax_politics',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_taxonomies_tax_portal_cat'.
  $permissions['delete terms in os2web_taxonomies_tax_portal_cat'] = array(
    'name' => 'delete terms in os2web_taxonomies_tax_portal_cat',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in os2web_taxonomies_tax_user_pos'.
  $permissions['delete terms in os2web_taxonomies_tax_user_pos'] = array(
    'name' => 'delete terms in os2web_taxonomies_tax_user_pos',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'delete terms in tags'.
  $permissions['delete terms in tags'] = array(
    'name' => 'delete terms in tags',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'display EU Cookie Compliance popup'.
  $permissions['display EU Cookie Compliance popup'] = array(
    'name' => 'display EU Cookie Compliance popup',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'eu_cookie_compliance',
  );

  // Exported permission: 'download any audio files'.
  $permissions['download any audio files'] = array(
    'name' => 'download any audio files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download any document files'.
  $permissions['download any document files'] = array(
    'name' => 'download any document files',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download any image files'.
  $permissions['download any image files'] = array(
    'name' => 'download any image files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download any video files'.
  $permissions['download any video files'] = array(
    'name' => 'download any video files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own audio files'.
  $permissions['download own audio files'] = array(
    'name' => 'download own audio files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own document files'.
  $permissions['download own document files'] = array(
    'name' => 'download own document files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own image files'.
  $permissions['download own image files'] = array(
    'name' => 'download own image files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'download own video files'.
  $permissions['download own video files'] = array(
    'name' => 'download own video files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit all webform submissions'.
  $permissions['edit all webform submissions'] = array(
    'name' => 'edit all webform submissions',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'edit any audio files'.
  $permissions['edit any audio files'] = array(
    'name' => 'edit any audio files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any banner content'.
  $permissions['edit any banner content'] = array(
    'name' => 'edit any banner content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any document files'.
  $permissions['edit any document files'] = array(
    'name' => 'edit any document files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any image files'.
  $permissions['edit any image files'] = array(
    'name' => 'edit any image files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any media content'.
  $permissions['edit any media content'] = array(
    'name' => 'edit any media content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any os2web_base_contentpage content'.
  $permissions['edit any os2web_base_contentpage content'] = array(
    'name' => 'edit any os2web_base_contentpage content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any os2web_base_gallery content'.
  $permissions['edit any os2web_base_gallery content'] = array(
    'name' => 'edit any os2web_base_gallery content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any os2web_base_news content'.
  $permissions['edit any os2web_base_news content'] = array(
    'name' => 'edit any os2web_base_news content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any os2web_base_selfservice_link content'.
  $permissions['edit any os2web_base_selfservice_link content'] = array(
    'name' => 'edit any os2web_base_selfservice_link content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any video files'.
  $permissions['edit any video files'] = array(
    'name' => 'edit any video files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit any webform content'.
  $permissions['edit any webform content'] = array(
    'name' => 'edit any webform content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit meta tags'.
  $permissions['edit meta tags'] = array(
    'name' => 'edit meta tags',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'metatag',
  );

  // Exported permission: 'edit own audio files'.
  $permissions['edit own audio files'] = array(
    'name' => 'edit own audio files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own banner content'.
  $permissions['edit own banner content'] = array(
    'name' => 'edit own banner content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own document files'.
  $permissions['edit own document files'] = array(
    'name' => 'edit own document files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own image files'.
  $permissions['edit own image files'] = array(
    'name' => 'edit own image files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own media content'.
  $permissions['edit own media content'] = array(
    'name' => 'edit own media content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own os2web_base_contentpage content'.
  $permissions['edit own os2web_base_contentpage content'] = array(
    'name' => 'edit own os2web_base_contentpage content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own os2web_base_gallery content'.
  $permissions['edit own os2web_base_gallery content'] = array(
    'name' => 'edit own os2web_base_gallery content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own os2web_base_news content'.
  $permissions['edit own os2web_base_news content'] = array(
    'name' => 'edit own os2web_base_news content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own os2web_base_selfservice_link content'.
  $permissions['edit own os2web_base_selfservice_link content'] = array(
    'name' => 'edit own os2web_base_selfservice_link content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own video files'.
  $permissions['edit own video files'] = array(
    'name' => 'edit own video files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'edit own webform content'.
  $permissions['edit own webform content'] = array(
    'name' => 'edit own webform content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own webform submissions'.
  $permissions['edit own webform submissions'] = array(
    'name' => 'edit own webform submissions',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'webform',
  );

  // Exported permission: 'edit terms in os2web_base_tax_promoteto'.
  $permissions['edit terms in os2web_base_tax_promoteto'] = array(
    'name' => 'edit terms in os2web_base_tax_promoteto',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_base_tax_site_structure'.
  $permissions['edit terms in os2web_base_tax_site_structure'] = array(
    'name' => 'edit terms in os2web_base_tax_site_structure',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_news_page_newstypes'.
  $permissions['edit terms in os2web_news_page_newstypes'] = array(
    'name' => 'edit terms in os2web_news_page_newstypes',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_taxonomies_tax_editor_tag'.
  $permissions['edit terms in os2web_taxonomies_tax_editor_tag'] = array(
    'name' => 'edit terms in os2web_taxonomies_tax_editor_tag',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_taxonomies_tax_kle'.
  $permissions['edit terms in os2web_taxonomies_tax_kle'] = array(
    'name' => 'edit terms in os2web_taxonomies_tax_kle',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_taxonomies_tax_org'.
  $permissions['edit terms in os2web_taxonomies_tax_org'] = array(
    'name' => 'edit terms in os2web_taxonomies_tax_org',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_taxonomies_tax_places'.
  $permissions['edit terms in os2web_taxonomies_tax_places'] = array(
    'name' => 'edit terms in os2web_taxonomies_tax_places',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_taxonomies_tax_politics'.
  $permissions['edit terms in os2web_taxonomies_tax_politics'] = array(
    'name' => 'edit terms in os2web_taxonomies_tax_politics',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_taxonomies_tax_portal_cat'.
  $permissions['edit terms in os2web_taxonomies_tax_portal_cat'] = array(
    'name' => 'edit terms in os2web_taxonomies_tax_portal_cat',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in os2web_taxonomies_tax_user_pos'.
  $permissions['edit terms in os2web_taxonomies_tax_user_pos'] = array(
    'name' => 'edit terms in os2web_taxonomies_tax_user_pos',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit terms in tags'.
  $permissions['edit terms in tags'] = array(
    'name' => 'edit terms in tags',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'taxonomy',
  );

  // Exported permission: 'epsacrop administer available crops'.
  $permissions['epsacrop administer available crops'] = array(
    'name' => 'epsacrop administer available crops',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'epsacrop',
  );

  // Exported permission: 'epsacrop create crops'.
  $permissions['epsacrop create crops'] = array(
    'name' => 'epsacrop create crops',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'epsacrop',
  );

  // Exported permission: 'epsacrop delete all crops'.
  $permissions['epsacrop delete all crops'] = array(
    'name' => 'epsacrop delete all crops',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'epsacrop',
  );

  // Exported permission: 'epsacrop edit all crops'.
  $permissions['epsacrop edit all crops'] = array(
    'name' => 'epsacrop edit all crops',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'epsacrop',
  );

  // Exported permission: 'notify of path changes'.
  $permissions['notify of path changes'] = array(
    'name' => 'notify of path changes',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'pathauto',
  );

  // Exported permission: 'revert revisions'.
  $permissions['revert revisions'] = array(
    'name' => 'revert revisions',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'select account cancellation method'.
  $permissions['select account cancellation method'] = array(
    'name' => 'select account cancellation method',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'user',
  );

  // Exported permission: 'translate interface'.
  $permissions['translate interface'] = array(
    'name' => 'translate interface',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'locale',
  );

  // Exported permission: 'use panels caching features'.
  $permissions['use panels caching features'] = array(
    'name' => 'use panels caching features',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'use panels locks'.
  $permissions['use panels locks'] = array(
    'name' => 'use panels locks',
    'roles' => array(
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'panels',
  );

  // Exported permission: 'use text format full_html'.
  $permissions['use text format full_html'] = array(
    'name' => 'use text format full_html',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'filter',
  );

  // Exported permission: 'view files'.
  $permissions['view files'] = array(
    'name' => 'view files',
    'roles' => array(
      'Editor' => 'Editor',
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view own files'.
  $permissions['view own files'] = array(
    'name' => 'view own files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view own private files'.
  $permissions['view own private files'] = array(
    'name' => 'view own private files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view own unpublished content'.
  $permissions['view own unpublished content'] = array(
    'name' => 'view own unpublished content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'view private files'.
  $permissions['view private files'] = array(
    'name' => 'view private files',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'file_entity',
  );

  // Exported permission: 'view revisions'.
  $permissions['view revisions'] = array(
    'name' => 'view revisions',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'node',
  );

  // Exported permission: 'view scheduled content'.
  $permissions['view scheduled content'] = array(
    'name' => 'view scheduled content',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'scheduler',
  );

  // Exported permission: 'view the administration theme'.
  $permissions['view the administration theme'] = array(
    'name' => 'view the administration theme',
    'roles' => array(
      'Editor' => 'Editor',
      'subsiteadmin' => 'subsiteadmin',
    ),
    'module' => 'system',
  );

  return $permissions;
}
