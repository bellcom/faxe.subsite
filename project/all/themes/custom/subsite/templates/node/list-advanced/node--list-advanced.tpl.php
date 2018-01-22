<?php if ($view_mode == 'list_advanced'): ?>
  <!-- Begin - list advanced -->
  <a href="<?php print $node_url; ?>" id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>

    <?php if (isset($content['field_image'])): ?>
      <!-- Begin - image -->
      <div class="entity-list-advanced__image">
        <?php print render($content['field_image']); ?>
      </div>
      <!-- End - image -->
    <?php endif; ?>

    <div class="entity-list-advanced__body">

      <div class="entity-list-advanced__heading">
        <h3 class="entity-list-advanced__heading__title heading-h4">
          <?php print $title; ?>
        </h3>
      </div>

      <?php print render($content); ?>
    </div>

  </a>
  <!-- End - list advanced -->
<?php endif; ?>
