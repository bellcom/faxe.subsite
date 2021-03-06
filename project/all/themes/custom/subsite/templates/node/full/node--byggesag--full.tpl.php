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
            <td><?php print render($content['field_case_estate_adress']); ?></td>
            <td><?php print render($content['field_case_laststatuschange']); ?></td>
            <td><?php print render($content['field_case_created']); ?></td>
            <td><?php print render($content['field_case_number']); ?></td>
        </tr>
        </tbody>
    </table>

    <?php print render($content['body']); ?>
    <?php print render($content['field_case_comment']); ?>
    <?php print render($content['field_case_documents']); ?>
</article>
