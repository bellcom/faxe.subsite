<?php if ($view_mode == 'embedded'): ?>
  <!-- Begin - embedded -->
  <a href="<?php print $node_url; ?>" id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>

    <div class="entity-embedded__heading">
      <h2 class="entity-embedded__heading__title heading-h3">
        <?php print $title; ?>
      </h2>
    </div>

    <div class="entity-embedded__body">
      <?php print render($content); ?>
    </div>

  </a>
  <!-- End - embedded -->
<?php endif; ?>
