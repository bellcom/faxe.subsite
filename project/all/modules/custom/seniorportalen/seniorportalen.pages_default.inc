<?php
/**
 * @file
 * seniorportalen.pages_default.inc
 */

/**
 * Implements hook_default_page_manager_handlers().
 */
function seniorportalen_default_page_manager_handlers() {
  $export = array();

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__indholdssider-m-spots';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -26;
  $handler->conf = array(
    'title' => 'Indholdssider m spots',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'indholdssider-m-spots',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_base_gallery' => 'os2web_base_gallery',
              'os2web_base_contentpage' => 'os2web_base_contentpage',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
        1 => array(
          'name' => 'substitution',
          'settings' => array(
            'substitution' => '%node:field_os2web_base_field_spotbox',
            'check_empty' => 1,
            'check_value' => '',
            'use_regex' => 0,
          ),
          'not' => TRUE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'footer' => NULL,
      'top' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = 'd00ab7a6-9c3a-4db2-990c-5a01327f2f02';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane->panel = 'content';
    $pane->type = 'node_content';
    $pane->subtype = 'node_content';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        0 => array(
          'name' => 'substitution',
          'settings' => array(
            'substitution' => '%node:field_os2web_base_field_image',
            'check_empty' => 1,
            'check_value' => '',
            'use_regex' => 0,
          ),
          'not' => FALSE,
        ),
      ),
    );
    $pane->configuration = array(
      'links' => 0,
      'no_extras' => 0,
      'override_title' => 1,
      'override_title_text' => '',
      'identifier' => '',
      'link' => 0,
      'leave_node_title' => 1,
      'build_mode' => 'full',
      'context' => 'argument_entity_id:node_1',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'boxd',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $display->content['new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d'] = $pane;
    $display->panels['content'][0] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane = new stdClass();
    $pane->pid = 'new-59ea8570-4c79-4896-a4ac-d04282020525';
    $pane->panel = 'content';
    $pane->type = 'views_panes';
    $pane->subtype = 'seniorportalen_indholdsside-panel_pane_1';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        2 => array(
          'name' => 'substitution',
          'settings' => array(
            'substitution' => '%node:field_os2web_base_field_image',
            'check_empty' => 1,
            'check_value' => '',
            'use_regex' => 0,
          ),
          'not' => TRUE,
        ),
      ),
    );
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '59ea8570-4c79-4896-a4ac-d04282020525';
    $display->content['new-59ea8570-4c79-4896-a4ac-d04282020525'] = $pane;
    $display->panels['content'][1] = 'new-59ea8570-4c79-4896-a4ac-d04282020525';
    $pane = new stdClass();
    $pane->pid = 'new-c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_photo';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'photoswipe',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'photoswipe_node_style' => 'gallery-thumb',
        'photoswipe_image_style' => '',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = 'c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $display->content['new-c68d4139-fe28-4dd5-bc29-d9d31771d688'] = $pane;
    $display->panels['content'][2] = 'new-c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $pane = new stdClass();
    $pane->pid = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_spotbox';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'b398e1ac-858e-43e3-872f-2d6f3524454d';
    $display->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d'] = $pane;
    $display->panels['content'][3] = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane = new stdClass();
    $pane->pid = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane->panel = 'sidebar-left';
    $pane->type = 'block';
    $pane->subtype = 'menu-menu-genveje';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'linkmenuer',
      'template_suggestion' => 'block',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $display->content['new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4'] = $pane;
    $display->panels['sidebar-left'][0] = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane = new stdClass();
    $pane->pid = 'new-383d8d46-d76d-4912-b629-29bc3d3f31dc';
    $pane->panel = 'sidebar-left';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Ansøg om ydelser',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/selvbetjening">Ansøg om ydelser</a></p>',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '383d8d46-d76d-4912-b629-29bc3d3f31dc';
    $display->content['new-383d8d46-d76d-4912-b629-29bc3d3f31dc'] = $pane;
    $display->panels['sidebar-left'][1] = 'new-383d8d46-d76d-4912-b629-29bc3d3f31dc';
    $pane = new stdClass();
    $pane->pid = 'new-70e250be-337a-422b-afe1-923be333c7f7';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Akut knap',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/om-kommunen/noedtelefoner">Akut hjælp</a></p>',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'akut knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '70e250be-337a-422b-afe1-923be333c7f7';
    $display->content['new-70e250be-337a-422b-afe1-923be333c7f7'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-70e250be-337a-422b-afe1-923be333c7f7';
    $pane = new stdClass();
    $pane->pid = 'new-9ec76b05-df3f-46ca-a80c-df62a58a4602';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Syddjurs.dk',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/borger/aeldre" target="_blank">Syddjurs.dk</a></p>
',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '9ec76b05-df3f-46ca-a80c-df62a58a4602';
    $display->content['new-9ec76b05-df3f-46ca-a80c-df62a58a4602'] = $pane;
    $display->panels['sidebar-right'][1] = 'new-9ec76b05-df3f-46ca-a80c-df62a58a4602';
    $pane = new stdClass();
    $pane->pid = 'new-43845074-438a-45be-90a9-625f6b6a9d89';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Organisationer',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="/traening-aktivitet/interesseorganisationer" target="_blank">Organisationer</a></p>
',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '43845074-438a-45be-90a9-625f6b6a9d89';
    $display->content['new-43845074-438a-45be-90a9-625f6b6a9d89'] = $pane;
    $display->panels['sidebar-right'][2] = 'new-43845074-438a-45be-90a9-625f6b6a9d89';
    $pane = new stdClass();
    $pane->pid = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_contact';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'teaser',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $display->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65'] = $pane;
    $display->panels['sidebar-right'][3] = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane = new stdClass();
    $pane->pid = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_selfserv';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 4;
    $pane->locks = array();
    $pane->uuid = '902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $display->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9'] = $pane;
    $display->panels['sidebar-right'][4] = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane = new stdClass();
    $pane->pid = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_related';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'node_reference_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 5;
    $pane->locks = array();
    $pane->uuid = 'e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $display->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51'] = $pane;
    $display->panels['sidebar-right'][5] = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane = new stdClass();
    $pane->pid = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_ext_link';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'link_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 6;
    $pane->locks = array();
    $pane->uuid = '72928d41-013b-4890-8ecf-8777b9f87636';
    $display->content['new-72928d41-013b-4890-8ecf-8777b9f87636'] = $pane;
    $display->panels['sidebar-right'][6] = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane = new stdClass();
    $pane->pid = 'new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views';
    $pane->subtype = 'seniorportalen_nyhedsliste';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '3',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 7;
    $pane->locks = array();
    $pane->uuid = 'c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $display->content['new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc'] = $pane;
    $display->panels['sidebar-right'][7] = 'new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $pane = new stdClass();
    $pane->pid = 'new-976c914b-1daa-4df4-9efb-79b5bcead4bf';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views';
    $pane->subtype = 'os2sub_kontaktblok';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        0 => array(
          'name' => 'substitution',
          'settings' => array(
            'substitution' => '%node:field_os2web_base_field_contact',
            'check_empty' => 1,
            'check_value' => '',
            'use_regex' => 0,
          ),
          'not' => FALSE,
        ),
      ),
    );
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '5',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 8;
    $pane->locks = array();
    $pane->uuid = '976c914b-1daa-4df4-9efb-79b5bcead4bf';
    $display->content['new-976c914b-1daa-4df4-9efb-79b5bcead4bf'] = $pane;
    $display->panels['sidebar-right'][8] = 'new-976c914b-1daa-4df4-9efb-79b5bcead4bf';
    $pane = new stdClass();
    $pane->pid = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane->panel = 'sidebar-right';
    $pane->type = 'menu_tree';
    $pane->subtype = 'main-menu';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        0 => array(
          'name' => 'role',
          'settings' => array(
            'rids' => array(
              0 => 6,
              1 => 5,
              2 => 3,
            ),
          ),
          'context' => 'logged-in-user',
          'not' => FALSE,
        ),
      ),
    );
    $pane->configuration = array(
      'parent' => 'main-menu:0',
      'title_link' => 1,
      'admin_title' => '',
      'level' => '2',
      'follow' => 'child',
      'depth' => '0',
      'depth_relative' => 0,
      'expanded' => 0,
      'sort' => 0,
      'menu_name' => 'main-menu',
      'parent_mlid' => '0',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'bg-warning',
      'template_suggestion' => 'menu_tree',
    );
    $pane->extras = array();
    $pane->position = 9;
    $pane->locks = array();
    $pane->uuid = 'e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $display->content['new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c'] = $pane;
    $display->panels['sidebar-right'][9] = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane = new stdClass();
    $pane->pid = 'new-f744655a-b546-4e29-967e-387f5146e226';
    $pane->panel = 'top';
    $pane->type = 'views';
    $pane->subtype = 'os2sub_banner';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        0 => array(
          'name' => 'substitution',
          'settings' => array(
            'substitution' => '%node:field_os2web_base_banner',
            'check_empty' => 1,
            'check_value' => '',
            'use_regex' => 0,
          ),
          'not' => TRUE,
        ),
      ),
    );
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_2',
      'context' => array(
        0 => 'argument_entity_id:node_1.field_emply_id',
      ),
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'f744655a-b546-4e29-967e-387f5146e226';
    $display->content['new-f744655a-b546-4e29-967e-387f5146e226'] = $pane;
    $display->panels['top'][0] = 'new-f744655a-b546-4e29-967e-387f5146e226';
    $pane = new stdClass();
    $pane->pid = 'new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
    $pane->panel = 'top';
    $pane->type = 'page_breadcrumb';
    $pane->subtype = 'page_breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
    $display->content['new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a'] = $pane;
    $display->panels['top'][1] = 'new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $handler->conf['display'] = $display;
  $export['node_view__indholdssider-m-spots'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__kalenderside';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -23;
  $handler->conf = array(
    'title' => 'Kalenderside',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(
      0 => array(
        'identifier' => 'Indholdselement fra Indholdselement (på Indholdselement: Afdeling [field_afdeling])',
        'keyword' => 'afdeling',
        'name' => 'entity_from_field:field_afdeling-node-node',
        'delta' => 0,
        'context' => 'argument_entity_id:node_1',
        'id' => 1,
      ),
    ),
    'name' => 'kalenderside',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'kalenderside' => 'kalenderside',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'footer' => NULL,
      'top' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = 'd00ab7a6-9c3a-4db2-990c-5a01327f2f02';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane->panel = 'content';
    $pane->type = 'node_content';
    $pane->subtype = 'node_content';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'links' => 0,
      'no_extras' => 0,
      'override_title' => 1,
      'override_title_text' => '',
      'identifier' => '',
      'link' => 0,
      'leave_node_title' => 1,
      'build_mode' => 'full',
      'context' => 'argument_entity_id:node_1',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $display->content['new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d'] = $pane;
    $display->panels['content'][0] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane = new stdClass();
    $pane->pid = 'new-4292c353-9fa0-4c6a-8a3f-9500d544498a';
    $pane->panel = 'content';
    $pane->type = 'views_panes';
    $pane->subtype = 'aktivitetskalender-panel_pane_2';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'context' => array(
        0 => 'argument_entity_id:node_1',
      ),
      'arguments' => array(
        'field_os2sub_event_section_nid' => '%afdeling:nid',
      ),
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '4292c353-9fa0-4c6a-8a3f-9500d544498a';
    $display->content['new-4292c353-9fa0-4c6a-8a3f-9500d544498a'] = $pane;
    $display->panels['content'][1] = 'new-4292c353-9fa0-4c6a-8a3f-9500d544498a';
    $pane = new stdClass();
    $pane->pid = 'new-c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_photo';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'photoswipe',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'photoswipe_node_style' => 'gallery-thumb',
        'photoswipe_image_style' => '',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = 'c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $display->content['new-c68d4139-fe28-4dd5-bc29-d9d31771d688'] = $pane;
    $display->panels['content'][2] = 'new-c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $pane = new stdClass();
    $pane->pid = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_spotbox';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'b398e1ac-858e-43e3-872f-2d6f3524454d';
    $display->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d'] = $pane;
    $display->panels['content'][3] = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane = new stdClass();
    $pane->pid = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane->panel = 'sidebar-left';
    $pane->type = 'block';
    $pane->subtype = 'menu-menu-genveje';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'linkmenuer',
      'template_suggestion' => 'block',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $display->content['new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4'] = $pane;
    $display->panels['sidebar-left'][0] = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane = new stdClass();
    $pane->pid = 'new-7d27323a-2dc3-449f-8a7e-736ec77bdfa7';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Akut knap',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/om-kommunen/noedtelefoner">Akut hjælp</a></p>
',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'akut knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '7d27323a-2dc3-449f-8a7e-736ec77bdfa7';
    $display->content['new-7d27323a-2dc3-449f-8a7e-736ec77bdfa7'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-7d27323a-2dc3-449f-8a7e-736ec77bdfa7';
    $pane = new stdClass();
    $pane->pid = 'new-eebeb994-ba00-41be-8fea-9bcba363e1aa';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Syddjurs.dk',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/borger/aeldre" target="_blank">Syddjurs.dk</a></p>',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'eebeb994-ba00-41be-8fea-9bcba363e1aa';
    $display->content['new-eebeb994-ba00-41be-8fea-9bcba363e1aa'] = $pane;
    $display->panels['sidebar-right'][1] = 'new-eebeb994-ba00-41be-8fea-9bcba363e1aa';
    $pane = new stdClass();
    $pane->pid = 'new-65839296-2d30-4eaa-8e11-b8fd379a0fa1';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Organisationer',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="/traening-aktivitet/interesseorganisationer" target="_blank">Organisationer</a></p>
',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '65839296-2d30-4eaa-8e11-b8fd379a0fa1';
    $display->content['new-65839296-2d30-4eaa-8e11-b8fd379a0fa1'] = $pane;
    $display->panels['sidebar-right'][2] = 'new-65839296-2d30-4eaa-8e11-b8fd379a0fa1';
    $pane = new stdClass();
    $pane->pid = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_contact';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'teaser',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $display->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65'] = $pane;
    $display->panels['sidebar-right'][3] = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane = new stdClass();
    $pane->pid = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_selfserv';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => 'Selvbetjening',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 4;
    $pane->locks = array();
    $pane->uuid = '902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $display->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9'] = $pane;
    $display->panels['sidebar-right'][4] = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane = new stdClass();
    $pane->pid = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_related';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'node_reference_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 5;
    $pane->locks = array();
    $pane->uuid = 'e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $display->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51'] = $pane;
    $display->panels['sidebar-right'][5] = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane = new stdClass();
    $pane->pid = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_ext_link';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'link_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 6;
    $pane->locks = array();
    $pane->uuid = '72928d41-013b-4890-8ecf-8777b9f87636';
    $display->content['new-72928d41-013b-4890-8ecf-8777b9f87636'] = $pane;
    $display->panels['sidebar-right'][6] = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane = new stdClass();
    $pane->pid = 'new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views';
    $pane->subtype = 'seniorportalen_nyhedsliste';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '3',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => 'Aktuelt',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 7;
    $pane->locks = array();
    $pane->uuid = 'c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $display->content['new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc'] = $pane;
    $display->panels['sidebar-right'][7] = 'new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $pane = new stdClass();
    $pane->pid = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane->panel = 'sidebar-right';
    $pane->type = 'menu_tree';
    $pane->subtype = 'main-menu';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'parent' => 'main-menu:0',
      'title_link' => 1,
      'admin_title' => '',
      'level' => '2',
      'follow' => 'child',
      'depth' => '0',
      'depth_relative' => 0,
      'expanded' => 0,
      'sort' => 0,
      'menu_name' => 'main-menu',
      'parent_mlid' => '0',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 8;
    $pane->locks = array();
    $pane->uuid = 'e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $display->content['new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c'] = $pane;
    $display->panels['sidebar-right'][8] = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane = new stdClass();
    $pane->pid = 'new-f744655a-b546-4e29-967e-387f5146e226';
    $pane->panel = 'top';
    $pane->type = 'views';
    $pane->subtype = 'os2sub_banner';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_2',
      'context' => array(
        0 => 'argument_entity_id:node_1.field_emply_id',
      ),
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'f744655a-b546-4e29-967e-387f5146e226';
    $display->content['new-f744655a-b546-4e29-967e-387f5146e226'] = $pane;
    $display->panels['top'][0] = 'new-f744655a-b546-4e29-967e-387f5146e226';
    $pane = new stdClass();
    $pane->pid = 'new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
    $pane->panel = 'top';
    $pane->type = 'page_breadcrumb';
    $pane->subtype = 'page_breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
    $display->content['new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a'] = $pane;
    $display->panels['top'][1] = 'new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $handler->conf['display'] = $display;
  $export['node_view__kalenderside'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__seniornyheder';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -27;
  $handler->conf = array(
    'title' => 'Seniornyheder',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'seniornyheder',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_base_news' => 'os2web_base_news',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = 'd00ab7a6-9c3a-4db2-990c-5a01327f2f02';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-3f48580b-c575-4de6-96de-8116b1d24dad';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_lead_img';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'image',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'image_style' => 'os2sub_normal_imagesize',
        'image_link' => '',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '3f48580b-c575-4de6-96de-8116b1d24dad';
    $display->content['new-3f48580b-c575-4de6-96de-8116b1d24dad'] = $pane;
    $display->panels['content'][0] = 'new-3f48580b-c575-4de6-96de-8116b1d24dad';
    $pane = new stdClass();
    $pane->pid = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane->panel = 'content';
    $pane->type = 'node_content';
    $pane->subtype = 'node_content';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'links' => 0,
      'no_extras' => 0,
      'override_title' => 1,
      'override_title_text' => '',
      'identifier' => '',
      'link' => 0,
      'leave_node_title' => 1,
      'build_mode' => 'full',
      'context' => 'argument_entity_id:node_1',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $display->content['new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d'] = $pane;
    $display->panels['content'][1] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane = new stdClass();
    $pane->pid = 'new-8b15f446-3bab-4384-96a8-6a34ae8570ff';
    $pane->panel = 'sidebar-left';
    $pane->type = 'block';
    $pane->subtype = 'menu-menu-genveje';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '8b15f446-3bab-4384-96a8-6a34ae8570ff';
    $display->content['new-8b15f446-3bab-4384-96a8-6a34ae8570ff'] = $pane;
    $display->panels['sidebar-left'][0] = 'new-8b15f446-3bab-4384-96a8-6a34ae8570ff';
    $pane = new stdClass();
    $pane->pid = 'new-b93cd7ee-4cc8-4733-9847-06b403098f00';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views';
    $pane->subtype = 'os2sub_nyheder';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '10',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'b93cd7ee-4cc8-4733-9847-06b403098f00';
    $display->content['new-b93cd7ee-4cc8-4733-9847-06b403098f00'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-b93cd7ee-4cc8-4733-9847-06b403098f00';
    $pane = new stdClass();
    $pane->pid = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_selfserv';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => 'Selvbetjening',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $display->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9'] = $pane;
    $display->panels['sidebar-right'][1] = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane = new stdClass();
    $pane->pid = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_related';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'node_reference_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = 'e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $display->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51'] = $pane;
    $display->panels['sidebar-right'][2] = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane = new stdClass();
    $pane->pid = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_ext_link';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'link_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = '72928d41-013b-4890-8ecf-8777b9f87636';
    $display->content['new-72928d41-013b-4890-8ecf-8777b9f87636'] = $pane;
    $display->panels['sidebar-right'][3] = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane = new stdClass();
    $pane->pid = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_contact';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'teaser',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 4;
    $pane->locks = array();
    $pane->uuid = 'a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $display->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65'] = $pane;
    $display->panels['sidebar-right'][4] = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane = new stdClass();
    $pane->pid = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_spotbox';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 5;
    $pane->locks = array();
    $pane->uuid = 'b398e1ac-858e-43e3-872f-2d6f3524454d';
    $display->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d'] = $pane;
    $display->panels['sidebar-right'][5] = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $handler->conf['display'] = $display;
  $export['node_view__seniornyheder'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__seniorportalen-indholdsside-m-spotbokse';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -28;
  $handler->conf = array(
    'title' => 'Seniorportalen - indholdsside m spotbokse',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'seniorportalen-indholdsside-m-spotbokse',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_base_gallery' => 'os2web_base_gallery',
              'os2web_base_contentpage' => 'os2web_base_contentpage',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
        3 => array(
          'name' => 'substitution',
          'settings' => array(
            'substitution' => '%node:field_os2web_base_field_spotbox',
            'check_empty' => 1,
            'check_value' => '',
            'use_regex' => 0,
          ),
          'not' => TRUE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'footer' => NULL,
      'top' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = 'd00ab7a6-9c3a-4db2-990c-5a01327f2f02';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-5525a0bf-fed9-43c2-b689-83b9f24176fa';
    $pane->panel = 'content';
    $pane->type = 'page_breadcrumb';
    $pane->subtype = 'page_breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '5525a0bf-fed9-43c2-b689-83b9f24176fa';
    $display->content['new-5525a0bf-fed9-43c2-b689-83b9f24176fa'] = $pane;
    $display->panels['content'][0] = 'new-5525a0bf-fed9-43c2-b689-83b9f24176fa';
    $pane = new stdClass();
    $pane->pid = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane->panel = 'content';
    $pane->type = 'node_content';
    $pane->subtype = 'node_content';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'links' => 0,
      'no_extras' => 0,
      'override_title' => 1,
      'override_title_text' => '',
      'identifier' => '',
      'link' => 0,
      'leave_node_title' => 1,
      'build_mode' => 'full',
      'context' => 'argument_entity_id:node_1',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $display->content['new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d'] = $pane;
    $display->panels['content'][1] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane = new stdClass();
    $pane->pid = 'new-23e57714-4a8f-4f9a-98e8-cfdc97bdc0f4';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_photo';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'photoswipe',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'photoswipe_node_style' => 'gallery-thumb',
        'photoswipe_image_style' => '',
        'image_style' => 'gallery',
        'optionset' => 'seniorportalen',
        'caption' => '1',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '23e57714-4a8f-4f9a-98e8-cfdc97bdc0f4';
    $display->content['new-23e57714-4a8f-4f9a-98e8-cfdc97bdc0f4'] = $pane;
    $display->panels['content'][2] = 'new-23e57714-4a8f-4f9a-98e8-cfdc97bdc0f4';
    $pane = new stdClass();
    $pane->pid = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_spotbox';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'b398e1ac-858e-43e3-872f-2d6f3524454d';
    $display->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d'] = $pane;
    $display->panels['content'][3] = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane = new stdClass();
    $pane->pid = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane->panel = 'sidebar-left';
    $pane->type = 'block';
    $pane->subtype = 'menu-menu-genveje';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $display->content['new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4'] = $pane;
    $display->panels['sidebar-left'][0] = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane = new stdClass();
    $pane->pid = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane->panel = 'sidebar-right';
    $pane->type = 'menu_tree';
    $pane->subtype = 'main-menu';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        0 => array(
          'name' => 'role',
          'settings' => array(
            'rids' => array(
              0 => 6,
              1 => 5,
              2 => 3,
            ),
          ),
          'context' => 'logged-in-user',
          'not' => FALSE,
        ),
      ),
    );
    $pane->configuration = array(
      'parent' => 'main-menu:0',
      'title_link' => 1,
      'admin_title' => '',
      'level' => '2',
      'follow' => 0,
      'depth' => '0',
      'depth_relative' => 0,
      'expanded' => 0,
      'sort' => 0,
      'menu_name' => 'main-menu',
      'parent_mlid' => '0',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $display->content['new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane = new stdClass();
    $pane->pid = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_contact';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'teaser',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $display->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65'] = $pane;
    $display->panels['sidebar-right'][1] = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane = new stdClass();
    $pane->pid = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_selfserv';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => 'Selvbetjening',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = '902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $display->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9'] = $pane;
    $display->panels['sidebar-right'][2] = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane = new stdClass();
    $pane->pid = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_related';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'node_reference_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $display->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51'] = $pane;
    $display->panels['sidebar-right'][3] = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane = new stdClass();
    $pane->pid = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_ext_link';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'link_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 4;
    $pane->locks = array();
    $pane->uuid = '72928d41-013b-4890-8ecf-8777b9f87636';
    $display->content['new-72928d41-013b-4890-8ecf-8777b9f87636'] = $pane;
    $display->panels['sidebar-right'][4] = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane = new stdClass();
    $pane->pid = 'new-33195a9a-c9e9-46ea-a2d4-4a07ba8dcd8f';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views';
    $pane->subtype = 'seniorportalen_nyhedsliste';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '2',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 5;
    $pane->locks = array();
    $pane->uuid = '33195a9a-c9e9-46ea-a2d4-4a07ba8dcd8f';
    $display->content['new-33195a9a-c9e9-46ea-a2d4-4a07ba8dcd8f'] = $pane;
    $display->panels['sidebar-right'][5] = 'new-33195a9a-c9e9-46ea-a2d4-4a07ba8dcd8f';
    $pane = new stdClass();
    $pane->pid = 'new-f744655a-b546-4e29-967e-387f5146e226';
    $pane->panel = 'top';
    $pane->type = 'views';
    $pane->subtype = 'os2sub_banner';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_2',
      'context' => array(
        0 => 'argument_entity_id:node_1.field_emply_id',
      ),
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'f744655a-b546-4e29-967e-387f5146e226';
    $display->content['new-f744655a-b546-4e29-967e-387f5146e226'] = $pane;
    $display->panels['top'][0] = 'new-f744655a-b546-4e29-967e-387f5146e226';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $handler->conf['display'] = $display;
  $export['node_view__seniorportalen-indholdsside-m-spotbokse'] = $handler;

  $handler = new stdClass();
  $handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
  $handler->api_version = 1;
  $handler->name = 'node_view__seniorportalen-indholdssider';
  $handler->task = 'node_view';
  $handler->subtask = '';
  $handler->handler = 'panel_context';
  $handler->weight = -25;
  $handler->conf = array(
    'title' => 'Seniorportalen - indholdssider',
    'no_blocks' => 1,
    'pipeline' => 'standard',
    'body_classes_to_remove' => '',
    'body_classes_to_add' => '',
    'css_id' => '',
    'css' => '',
    'contexts' => array(),
    'relationships' => array(),
    'name' => 'seniorportalen-indholdssider',
    'access' => array(
      'plugins' => array(
        0 => array(
          'name' => 'node_type',
          'settings' => array(
            'type' => array(
              'os2web_base_gallery' => 'os2web_base_gallery',
              'os2web_base_contentpage' => 'os2web_base_contentpage',
            ),
          ),
          'context' => 'argument_entity_id:node_1',
          'not' => FALSE,
        ),
      ),
      'logic' => 'and',
    ),
  );
  $display = new panels_display();
  $display->layout = 'content-with-left-and-right-sidebar-top-footer';
  $display->layout_settings = array();
  $display->panel_settings = array(
    'style_settings' => array(
      'default' => NULL,
      'sidebar' => NULL,
      'content' => NULL,
      'sidebar-left' => NULL,
      'sidebar-right' => NULL,
      'footer' => NULL,
      'top' => NULL,
    ),
  );
  $display->cache = array();
  $display->title = '%node:title';
  $display->uuid = 'd00ab7a6-9c3a-4db2-990c-5a01327f2f02';
  $display->content = array();
  $display->panels = array();
    $pane = new stdClass();
    $pane->pid = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane->panel = 'content';
    $pane->type = 'node_content';
    $pane->subtype = 'node_content';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(),
    );
    $pane->configuration = array(
      'links' => 0,
      'no_extras' => 0,
      'override_title' => 1,
      'override_title_text' => '',
      'identifier' => '',
      'link' => 0,
      'leave_node_title' => 1,
      'build_mode' => 'full',
      'context' => 'argument_entity_id:node_1',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $display->content['new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d'] = $pane;
    $display->panels['content'][0] = 'new-58a56bcb-a73c-414b-9e1d-5251d0f3e94d';
    $pane = new stdClass();
    $pane->pid = 'new-c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_photo';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'photoswipe',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'photoswipe_node_style' => 'gallery-thumb',
        'photoswipe_image_style' => '',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $display->content['new-c68d4139-fe28-4dd5-bc29-d9d31771d688'] = $pane;
    $display->panels['content'][1] = 'new-c68d4139-fe28-4dd5-bc29-d9d31771d688';
    $pane = new stdClass();
    $pane->pid = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane->panel = 'content';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_spotbox';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = 'b398e1ac-858e-43e3-872f-2d6f3524454d';
    $display->content['new-b398e1ac-858e-43e3-872f-2d6f3524454d'] = $pane;
    $display->panels['content'][2] = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
    $pane = new stdClass();
    $pane->pid = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane->panel = 'sidebar-left';
    $pane->type = 'block';
    $pane->subtype = 'menu-menu-genveje';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'linkmenuer',
      'template_suggestion' => 'block',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $display->content['new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4'] = $pane;
    $display->panels['sidebar-left'][0] = 'new-63a6eac5-6b10-4f0e-a477-d45cf28aa2e4';
    $pane = new stdClass();
    $pane->pid = 'new-55638bcf-d4e2-489c-bb8a-e168a5919376';
    $pane->panel = 'sidebar-left';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Ansøg om ydelser knap',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/selvbetjening">Ansøg om ydelser</a></p>
',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '55638bcf-d4e2-489c-bb8a-e168a5919376';
    $display->content['new-55638bcf-d4e2-489c-bb8a-e168a5919376'] = $pane;
    $display->panels['sidebar-left'][1] = 'new-55638bcf-d4e2-489c-bb8a-e168a5919376';
    $pane = new stdClass();
    $pane->pid = 'new-29a420b8-889e-4381-9b22-79185e4a5e71';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Akut',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/om-kommunen/noedtelefoner">Akut hjælp</a></p>
',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'akut knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = '29a420b8-889e-4381-9b22-79185e4a5e71';
    $display->content['new-29a420b8-889e-4381-9b22-79185e4a5e71'] = $pane;
    $display->panels['sidebar-right'][0] = 'new-29a420b8-889e-4381-9b22-79185e4a5e71';
    $pane = new stdClass();
    $pane->pid = 'new-55a368b5-4b4f-4f0d-83f4-8d43c93a079a';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Syddjurs.dk',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="https://www.syddjurs.dk/borger/aeldre" target="_blank">Syddjurs.dk</a></p>',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = '55a368b5-4b4f-4f0d-83f4-8d43c93a079a';
    $display->content['new-55a368b5-4b4f-4f0d-83f4-8d43c93a079a'] = $pane;
    $display->panels['sidebar-right'][1] = 'new-55a368b5-4b4f-4f0d-83f4-8d43c93a079a';
    $pane = new stdClass();
    $pane->pid = 'new-f90bdce8-f5df-4001-a96b-9f5ad2ae899d';
    $pane->panel = 'sidebar-right';
    $pane->type = 'custom';
    $pane->subtype = 'custom';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'admin_title' => 'Organisationer',
      'title' => '',
      'body' => '<p><a class="btn btn-primary btn-lg btn-block" href="/traening-aktivitet/interesseorganisationer" target="_blank">Organisationer</a></p>
',
      'format' => 'full_html',
      'substitute' => 0,
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => 'knap',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 2;
    $pane->locks = array();
    $pane->uuid = 'f90bdce8-f5df-4001-a96b-9f5ad2ae899d';
    $display->content['new-f90bdce8-f5df-4001-a96b-9f5ad2ae899d'] = $pane;
    $display->panels['sidebar-right'][2] = 'new-f90bdce8-f5df-4001-a96b-9f5ad2ae899d';
    $pane = new stdClass();
    $pane->pid = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_contact';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => 0,
      'delta_offset' => '0',
      'delta_reversed' => FALSE,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'teaser',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 3;
    $pane->locks = array();
    $pane->uuid = 'a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $display->content['new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65'] = $pane;
    $display->panels['sidebar-right'][3] = 'new-a8639e0e-ae7b-4dfe-ac36-d36bdebd7f65';
    $pane = new stdClass();
    $pane->pid = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_selfserv';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'hidden',
      'formatter' => 'node_reference_node',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(
        'node_reference_view_mode' => 'spotbox',
      ),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 4;
    $pane->locks = array();
    $pane->uuid = '902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $display->content['new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9'] = $pane;
    $display->panels['sidebar-right'][4] = 'new-902e99d1-fbe8-49d2-a0ca-d6b8331497e9';
    $pane = new stdClass();
    $pane->pid = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_related';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'node_reference_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 5;
    $pane->locks = array();
    $pane->uuid = 'e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $display->content['new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51'] = $pane;
    $display->panels['sidebar-right'][5] = 'new-e4d4ddeb-8ad3-4cdb-a4b3-a03b841bdc51';
    $pane = new stdClass();
    $pane->pid = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane->panel = 'sidebar-right';
    $pane->type = 'entity_field';
    $pane->subtype = 'node:field_os2web_base_field_ext_link';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'label' => 'title',
      'formatter' => 'link_default',
      'delta_limit' => '0',
      'delta_offset' => '0',
      'delta_reversed' => 0,
      'formatter_settings' => array(),
      'context' => 'argument_entity_id:node_1',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 6;
    $pane->locks = array();
    $pane->uuid = '72928d41-013b-4890-8ecf-8777b9f87636';
    $display->content['new-72928d41-013b-4890-8ecf-8777b9f87636'] = $pane;
    $display->panels['sidebar-right'][6] = 'new-72928d41-013b-4890-8ecf-8777b9f87636';
    $pane = new stdClass();
    $pane->pid = 'new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views';
    $pane->subtype = 'seniorportalen_nyhedsliste';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '3',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 7;
    $pane->locks = array();
    $pane->uuid = 'c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $display->content['new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc'] = $pane;
    $display->panels['sidebar-right'][7] = 'new-c2cc5a64-f2da-4586-a2fb-a97f1bfdbabc';
    $pane = new stdClass();
    $pane->pid = 'new-1bc5cbaa-8be6-4da2-b938-0772c153cc47';
    $pane->panel = 'sidebar-right';
    $pane->type = 'views';
    $pane->subtype = 'os2sub_kontaktblok';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        0 => array(
          'name' => 'substitution',
          'settings' => array(
            'substitution' => '%node:field_os2web_base_field_contact',
            'check_empty' => 1,
            'check_value' => '',
            'use_regex' => 0,
          ),
          'not' => FALSE,
        ),
      ),
    );
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '5',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'box',
    );
    $pane->extras = array();
    $pane->position = 8;
    $pane->locks = array();
    $pane->uuid = '1bc5cbaa-8be6-4da2-b938-0772c153cc47';
    $display->content['new-1bc5cbaa-8be6-4da2-b938-0772c153cc47'] = $pane;
    $display->panels['sidebar-right'][8] = 'new-1bc5cbaa-8be6-4da2-b938-0772c153cc47';
    $pane = new stdClass();
    $pane->pid = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane->panel = 'sidebar-right';
    $pane->type = 'menu_tree';
    $pane->subtype = 'main-menu';
    $pane->shown = TRUE;
    $pane->access = array(
      'plugins' => array(
        0 => array(
          'name' => 'role',
          'settings' => array(
            'rids' => array(
              0 => 6,
              1 => 5,
              2 => 3,
            ),
          ),
          'context' => 'logged-in-user',
          'not' => FALSE,
        ),
      ),
    );
    $pane->configuration = array(
      'parent' => 'main-menu:0',
      'title_link' => 1,
      'admin_title' => '',
      'level' => '2',
      'follow' => 'child',
      'depth' => '0',
      'depth_relative' => 0,
      'expanded' => 0,
      'sort' => 0,
      'menu_name' => 'main-menu',
      'parent_mlid' => '0',
      'override_title' => 0,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array();
    $pane->extras = array();
    $pane->position = 9;
    $pane->locks = array();
    $pane->uuid = 'e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $display->content['new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c'] = $pane;
    $display->panels['sidebar-right'][9] = 'new-e295bfd0-3564-4ccf-8635-a1b01c7a6e0c';
    $pane = new stdClass();
    $pane->pid = 'new-f744655a-b546-4e29-967e-387f5146e226';
    $pane->panel = 'top';
    $pane->type = 'views';
    $pane->subtype = 'os2sub_banner';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array(
      'override_pager_settings' => 0,
      'use_pager' => 0,
      'nodes_per_page' => '0',
      'pager_id' => '0',
      'offset' => '0',
      'more_link' => 0,
      'feed_icons' => 0,
      'panel_args' => 0,
      'link_to_view' => 0,
      'args' => '',
      'url' => '',
      'display' => 'block_2',
      'context' => array(
        0 => 'argument_entity_id:node_1.field_emply_id',
      ),
      'override_title' => 1,
      'override_title_text' => '',
      'override_title_heading' => 'h2',
    );
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 0;
    $pane->locks = array();
    $pane->uuid = 'f744655a-b546-4e29-967e-387f5146e226';
    $display->content['new-f744655a-b546-4e29-967e-387f5146e226'] = $pane;
    $display->panels['top'][0] = 'new-f744655a-b546-4e29-967e-387f5146e226';
    $pane = new stdClass();
    $pane->pid = 'new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
    $pane->panel = 'top';
    $pane->type = 'page_breadcrumb';
    $pane->subtype = 'page_breadcrumb';
    $pane->shown = TRUE;
    $pane->access = array();
    $pane->configuration = array();
    $pane->cache = array();
    $pane->style = array(
      'settings' => NULL,
    );
    $pane->css = array(
      'css_id' => '',
      'css_class' => '',
      'template_suggestion' => 'plain',
    );
    $pane->extras = array();
    $pane->position = 1;
    $pane->locks = array();
    $pane->uuid = 'cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
    $display->content['new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a'] = $pane;
    $display->panels['top'][1] = 'new-cc87eb9e-1917-4e83-aaf3-a9fbdae2442a';
  $display->hide_title = PANELS_TITLE_FIXED;
  $display->title_pane = 'new-b398e1ac-858e-43e3-872f-2d6f3524454d';
  $handler->conf['display'] = $display;
  $export['node_view__seniorportalen-indholdssider'] = $handler;

  return $export;
}
