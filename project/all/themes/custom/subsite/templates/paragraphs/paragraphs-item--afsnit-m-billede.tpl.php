<div class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <div class="paragraph-content"<?php print $content_attributes; ?>>  
    <h2 class="js-expandmore">
      <div class="toggle-wrap">
        <div class="accordion__toggle">
          <span></span>
        </div>
      </div>
      <?php print render($content['field_paragraph_header']); ?>
    </h2>    
    <div class="js-to_expand">
      <?php print render($content['field_image']); ?>
      <?php print render($content['field_paragraph_text']); ?>
    </div>  
  </div>
</div>
