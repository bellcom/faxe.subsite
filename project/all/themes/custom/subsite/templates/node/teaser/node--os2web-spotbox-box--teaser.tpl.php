<?php if ($view_mode == 'teaser'): ?>
  <?php
  $image_style = $content['field_os2web_spotbox_big_image'][0]['#image_style'];
  $image_url = FALSE;

  if (isset($node->field_os2web_spotbox_big_image['und']['0']['uri']) && $uri = $node->field_os2web_spotbox_big_image['und']['0']['uri']) {
    $image_url = file_create_url(image_style_url($image_style, $uri));
  }
  ?>

  <!-- Begin - teaser -->
  <a href="<?php print $linkit['url']; ?>"
     style="background-image: url('<?php print $image_url; ?>');"
     id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>

    <div class="entity-teaser__heading">
      <h2 class="entity-teaser__heading__title heading-h6">
        <?php print $title; ?>
      </h2>
    </div>

  </a>
  <!-- End - teaser -->
<?php endif; ?>
