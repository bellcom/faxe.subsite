<?php if ($view_mode == 'full'): ?>
  <!-- node.tpl.php -->
  <!-- Begin - full node -->

  <div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> subsite-full"<?php print $attributes; ?>>
<span class="print pull-right">
<a onclick="myFunction()">
<i class="fa fa-print" aria-hidden="true"></i> Print</a>

<script>
function myFunction() {
    window.print();
}
</script>

</span>   
    <div class="subsite-full-heading">
      <?php print render($title_prefix); ?>
      <h2<?php print $title_attributes; ?> class="subsite-full-heading-title"><?php print $title; ?></h2>
      <?php print render($title_suffix); ?>
      
      <?php if (isset($content['field_os2web_base_field_image'])): ?>
        <?php
          // $field_image_all = field_get_items('node',$node,'field_os2web_base_field_image');
          // $img_rendered = field_view_value('node',$node,'field_os2web_base_field_image',$field_image_all[0],

          // array('type' => '$img_rendered','settings'=>array('image_style' => 'os2sub_normal_imagesize')));
          // print render($img_rendered);
          
          print render($content['field_os2web_base_field_image']);
          ?>
      <?php endif; ?>


      
          <?php if (isset($content['field_os2web_base_field_summary'])): ?>
            <div class="lead">
              <?php print render($content['field_os2web_base_field_summary']); ?>
            </div>
          <?php endif; ?>

    </div>

    <?php if (isset($content['field_os2web_base_field_intro'])): ?>
      <!-- Begin - intro -->
      <div class="subsite-full-intro">
        <?php print render($content['field_os2web_base_field_intro']); ?>
      </div>
      <!-- End - intro -->
    <?php endif; ?>

    <?php if (isset($content)): ?>
      <!-- Begin - body -->
      <div class="subsite-full-body">
        <?php 
          hide($content['field_os2web_base_field_image']);
          hide($content['field_os2web_base_field_summary']);
                    
          print render($content); ?>
      </div>
      <!-- End - body -->
    <?php endif; ?>

    <!-- Begin - footer -->
    <div class="subsite-full-footer subsite-links">
      <?php print render($content['links']); ?>
    </div>
    <!-- End - footer -->

  </div>
  <!-- End - full node -->

<?php endif; ?>
