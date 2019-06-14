/**
 * @file
 * os2web_cp_service.js
 */

(function ($) {
	$(document).ready(function() {
		// Convert all nonalphanumeric chars to /.
		$('#views-exposed-form-os2web-cp-service-cp-case-search-panel-pane-1').on('submit',function(e) {
			// Prevent double submissions.
			var $form = $(this);

			// IE fix. Value and placeolder is the same on IE.
			if($('#edit-case-id').attr('placeholder') !== $('#edit-case-id').val()) {
				var value = $('#edit-case-id').val();
				$('#edit-case-id').val(value.replace(/\W/g, '/'));
			}

			// Reset dates if case id is entered.
			if($('#edit-case-id').val() || /^\d{2}\/\d/.test($('#edit-search-text').val())) {
				$('#edit-field-os2web-cp-service-date-from-value-datepicker-popup-0').val('');
				$('#edit-field-os2web-cp-service-date-to-value-datepicker-popup-0').val('');
			}
		});

		$('#views-exposed-form-os2web-cp-service-cp-case-search-panel-pane-1 .form-submit').click(function(e){
			var $ajaxLoader = $('.os2web_cp_service-ajax-loader').css('display', 'inline-block');
			setTimeout(function() {
				$ajaxLoader.hide();
			}, 5000);
		});

		$('.views-field-field-os2web-cp-service-file-id a').click(function(e){
			// Find the ajax loader in next td in table.
			var $ajaxLoader = $(this).parent().parent().find('.os2web_cp_service-ajax-loader').css('display', 'inline-block');
			setTimeout(function() {
				$ajaxLoader.hide();
			}, 5000);
		});

		if(typeof $( "a.qtip-this[title]" ).qtip === 'function') {
			$("a.qtip-this[title]").qtip({
				style: {
					padding: 1,
					background: "#FFF",
					color: "black",
					textAlign: "center",
					border: {
						width: 1,
						radius: 2,
						color: "#DDD"
					},
					tip: "leftMiddle"
				},
				position: {
					corner: {
						target: "rightMiddle",
						tooltip: "leftMiddle"
					},
					adjust: {
						x : 10
					}
				}
			});
		}
	});
})(jQuery);
