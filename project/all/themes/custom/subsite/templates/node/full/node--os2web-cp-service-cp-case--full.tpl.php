<article id="node-<?php print $node->nid; ?>"
         class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

    <table class="table">
        <thead>
        <tr>
            <th>Adresse</th>
            <th>Senest opdateret</th>
            <th>Oprettet</th>
            <th>Sagsnummer</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><?php print render($content['field_os2web_cp_service_addr']); ?></td>
            <td><?php print render($content['field_os2web_cp_service_st_edit']); ?></td>
            <td><?php print render($content['field_os2web_cp_service_created']); ?></td>
            <td><?php print render($content['field_os2web_cp_service_case_id']); ?></td>
        </tr>
        </tbody>
    </table>

    <?php print render($content['field_os2web_cp_service_content']); ?>
    <?php print render($content['field_case_comment']); ?>
    <?php print render($content['field_os2web_cp_service_doc_ref']); ?>
</article>