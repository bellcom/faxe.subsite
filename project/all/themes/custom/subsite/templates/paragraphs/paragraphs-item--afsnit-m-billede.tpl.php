<div class="accordion <?php print $classes; ?>"<?php print $attributes; ?>>

  <?php if ( isset( $content['field_paragraph_header'] ) ): ?>
      <!-- Begin - heading -->
      <h2 class="accordion__heading heading-h6">
        <?php print render( $content['field_paragraph_header'] ); ?>
      </h2>
      <!-- End - heading -->
  <?php endif; ?>

  <!-- Begin - body -->
  <div class="accordion__body"<?php print $content_attributes; ?>>
    <?php
    print render($content);
    ?>
  </div>
  <!-- End - body -->

</div>
