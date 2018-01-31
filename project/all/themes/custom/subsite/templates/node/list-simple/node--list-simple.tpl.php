<?php if ($view_mode == 'list_simple'): ?>
  <!-- Begin - list simple -->
  <a href="<?php print $node_url; ?>" id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>

    <div class="entity-list-simple__heading">
      <h3 class="entity-list-simple__heading__title heading-h4">
        <?php print $title; ?>
      </h3>
    </div>

  </a>
  <!-- End - list simple -->
<?php endif; ?>
