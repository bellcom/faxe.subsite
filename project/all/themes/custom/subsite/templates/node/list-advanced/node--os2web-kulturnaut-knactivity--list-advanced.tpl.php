<?php if ($view_mode == 'list_advanced'): ?>
  <!-- Begin - list -->
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

      <?php if (isset($content['field_date'])): ?>
        <!-- Begin - date -->
        <div class="entity-list-advanced__date heading-h4">
          <?php print render($content['field_date']); ?>
        </div>
        <!-- End - date -->
      <?php endif; ?>

      <div class="entity-list-advanced__heading">
        <h3 class="entity-list-advanced__heading__title heading-h2">
          <?php print $title; ?>
        </h3>
      </div>

      <?php if ( isset( $content['field_description'] ) ): ?>
          <!-- Begin - description -->
          <div class="entity-list-advanced__description">
              <?php print render( $content['field_description'] ); ?>
          </div>
          <!-- End - description -->
      <?php endif; ?>

      <?php print render($content); ?>
    </div>

  </a>
  <!-- End - list -->
<?php endif; ?>