<?php
/**
 * @file
 * Template file for CP service overview page.
 */
?>
<?php print $preface; ?>

<?php print render($datepicker) ?>

<p>Der vises dokumenter fra <?php print $date_string; ?>.</p>

<?php print render($document_table) ?>
