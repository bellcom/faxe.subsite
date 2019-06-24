<?php
// Hide fields.
hide($content['field_geo_2']);
hide($content['field_case_documents']);
?>

<article id="node-<?php print $node->nid; ?>"
         class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <div class="row">
    <div class="col-xs-12 col-sm-7">

      <div class="boxy boxy--data-table">
        <div class="boxy__heading">
          <h3 class="boxy__heading__title">
            Data
          </h3>
        </div>
        <div class="boxy__body">
          <?php print render($content); ?>
        </div>
      </div>

      <?php if ( isset( $content['field_case_documents'] ) ): ?>
        <!-- Begin - documents -->
        <div class="node__documents">
          <?php print render( $content['field_case_documents'] ); ?>
        </div>
        <!-- End - documents -->
      <?php endif; ?>

    </div>
    <div class="col-xs-12 col-sm-5">

      <?php if (isset($content['field_geo_2'])): ?>
        <!-- Begin - leaflet map -->
        <div class="node__leaflet-map">
          <?php print render($content['field_geo_2']); ?>
        </div>
        <!-- End - leaflet map -->
      <?php endif; ?>

    </div>
  </div>
</article>
