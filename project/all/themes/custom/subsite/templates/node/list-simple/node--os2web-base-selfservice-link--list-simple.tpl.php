<?php if ($view_mode == 'list_simple'): ?>
  <!-- Begin - list simple -->
  <?php
  $name = $content['field_vist_navn'][0]['#markup'];
  $url = $content['field_spot_link'][0]['#element']['url'];
  ?>
  <a href="<?php print $url; ?>" id="node-<?php print $node->nid; ?>"
     class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>

    <div class="entity-list-simple__heading">
      <span class="entity-list-simple__heading__title heading-h5">
        <?php print $name; ?>
      </span>
    </div>

  </a>
  <!-- End - list simple -->
<?php endif; ?>
