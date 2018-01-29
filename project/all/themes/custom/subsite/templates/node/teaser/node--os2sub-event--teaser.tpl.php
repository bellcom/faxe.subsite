<?php if ($view_mode == 'teaser'): ?>
  <!-- Begin - teaser -->
  <a href="<?php print $node_url; ?>" id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>

    <?php if (isset($content['field_os2web_base_field_image'])): ?>
      <!-- Begin - image -->
      <div class="entity-teaser__image">
        <?php print render($content['field_os2web_base_field_image']); ?>
      </div>
      <!-- End - image -->
    <?php endif; ?>

    <?php if (isset($content['field_os2sub_event_type'])): ?>
      <!-- Begin - genre -->
      <div class="entity-teaser__genre">
        <?php print render($content['field_os2sub_event_type']); ?>
      </div>
      <!-- End - genre -->
    <?php endif; ?>

    <div class="entity-teaser__body">

      <?php if (isset($content['field_os2sub_event_date'])): ?>
        <!-- Begin - date -->
        <div class="entity-teaser__date">
          <?php print render($content['field_os2sub_event_date']); ?>
        </div>
        <!-- End - date -->
      <?php endif; ?>

      <div class="entity-teaser__heading">
        <h2 class="entity-teaser__heading__title heading-h3">
          <?php print $title; ?>
        </h2>
      </div>

      <?php if (isset($content['body'])): ?>
        <!-- Begin - description -->
        <div class="entity-teaser__description">
          <?php print render($content['body']); ?>
        </div>
        <!-- End - description -->
      <?php endif; ?>

    </div>

  </a>
  <!-- End - teaser -->
<?php endif; ?>
