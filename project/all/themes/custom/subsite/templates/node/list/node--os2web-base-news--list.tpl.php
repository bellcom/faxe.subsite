<?php if ($view_mode == 'list'): ?>
  <!-- Begin - list -->
  <a href="<?php print $node_url; ?>" id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> element-wrapper-link clearfix"<?php print $attributes; ?>>
    <div class="entity-list__inner">
      <div class="entity-list__body">

        <?php if (!empty($title)): ?>
          <div class="entity-list__heading">
            <h2 class="entity-list__heading__title heading-h6">
              <?php print $title; ?>
            </h2>
          </div>
        <?php endif; ?>

        <div class="entity-list__created-at">
          <?php print $created_at_short; ?>
        </div>

      </div>
    </div>
  </a>
  <!-- End - list -->
<?php endif; ?>
