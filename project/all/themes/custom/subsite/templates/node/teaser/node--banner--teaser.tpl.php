<?php if ($view_mode == 'teaser'): ?>
  <?php
  $image_style = $content['field_banner_billede'][0]['#image_style'];
  $image_url = FALSE;

  if (isset($node->field_banner_billede['und']['0']['uri']) && $uri = $node->field_banner_billede['und']['0']['uri']) {
    $image_url = file_create_url(image_style_url($image_style, $uri));
  }
  ?>

  <!-- Begin - teaser -->
  <?php if ($image_url): ?>
    <div
      class="sectioned sectioned--banner sectioned--background-image sectioned--small-inner-spacing"
      style="background-image: url(<?php print $image_url; ?>);">
  <?php else: ?>
    <div class="sectioned sectioned--banner sectioned--quaternary sectioned--small-inner-spacing">
  <?php endif; ?>

    <div class="sectioned__inner">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 text-xs-center">

            <!-- Begin - headline -->
            <?php print render($content['field_banner_headline']); ?>
            <!-- End - headline -->

            <!-- Begin - body -->
            <?php print render($content['field_banner_text']); ?>
            <!-- End - body -->

          </div>
          <div class="col-sm-5 text-center">

            <!-- Begin - link -->
            <?php print render($content['field_knap_link']); ?>
            <!-- End - link -->

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End - teaser -->
<?php endif; ?>
