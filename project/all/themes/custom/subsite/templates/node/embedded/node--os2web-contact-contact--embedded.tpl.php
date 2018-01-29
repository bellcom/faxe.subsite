<?php if ($view_mode == 'embedded'): ?>
  <!-- Begin - embedded -->
  <div id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <div class="entity-embedded__body">
      <?php print render($content); ?>
    </div>

  </div>
  <!-- End - embedded -->
<?php endif; ?>
