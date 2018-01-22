<?php if ($view_mode == 'list'): ?>
  <!-- Begin - list -->
  <a href="<?php print $node_url; ?>" id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>

    <div class="entity-list__heading">
      <h3 class="entity-list__heading__title heading-h4">
        <?php print $title; ?>
      </h3>
    </div>

    <div class="entity-list__body">
      <?php print render($content); ?>
    </div>

  </a>
  <!-- End - list -->
<?php endif; ?>
