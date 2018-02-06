<article id="node-<?php print $node->nid; ?>"
         class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php if (isset($content['field_os2web_base_field_lead_img'])): ?>
    <!-- Begin - image -->
    <div class="node__image">
      <?php print render($content['field_os2web_base_field_lead_img']); ?>
    </div>
    <!-- End - image -->
  <?php endif; ?>

  <?php if (!empty($title)): ?>
    <!-- Begin - heading -->
    <div class="node__heading">
      <h1 class="node__heading__title"><?php print $title; ?></h1>
    </div>
    <!-- End - heading -->
  <?php endif; ?>

  <?php if (isset($content['field_os2web_base_field_summary'])): ?>
    <!-- Begin - intro -->
    <div class="node__intro">
      <?php print render($content['field_os2web_base_field_summary']); ?>
    </div>
    <!-- End - intro -->
  <?php endif; ?>

  <?php if (isset($content['body'])): ?>
    <!-- Begin - body -->
    <div class="node__body">
      <?php print render($content['body']); ?>
    </div>
    <!-- End - body -->
  <?php endif; ?>

  <?php if ( isset( $content['field_os2web_base_field_media'] ) ): ?>
    <!-- Begin - PDF files -->
    <div class="node__pdf-files">
      <?php print render( $content['field_os2web_base_field_media'] ); ?>
    </div>
    <!-- End - PDF files -->
  <?php endif; ?>

</article>
