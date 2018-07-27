<?php if ($view_mode == 'teaser'): ?>
  <!-- Begin - teaser -->
<div class="row entity-list">
      <?php if (isset($content['field_os2web_base_field_lead_img'])): ?>
      <!-- Begin - image -->
      <div class="entity-teaser__image col-md-4">
        <?php print render($content['field_os2web_base_field_lead_img']); ?>
      </div>
      <!-- End - image -->
    <?php endif; ?>

    <div class="entity-teaser__body  col-md-8">

    <?php print render($title_prefix); ?>
    <?php if (!$page && !empty($title)): ?>
      <div class="entity-teaser__heading">
        <h2<?php print $title_attributes; ?> class="entity-teaser__heading__title heading-h3"><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      </div>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($display_submitted): ?>
    <div class="submitted">
      <?php print $submitted; ?>
    </div>
    <?php endif; ?>

      <?php if (isset($content['body'])): ?>
        <!-- Begin - description -->
        <div class="entity-teaser__description">
          <?php if (isset($content['field_os2web_base_field_summary'])): ?>
            <div class="h4"><?php print render($content['field_os2web_base_field_summary']); ?></div>
          <?php endif; ?>
          <?php print render($content['body']); ?>
        </div>
        <!-- End - description -->
      <?php endif; ?>

    </div>

  <!-- End - teaser -->
</div>
<?php endif; ?>
