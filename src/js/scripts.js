// TODO make this better

var $link = $('.tabs__nav-item');

$('.tab').hide();
$('.tab').first().show();
$link.click(function(){
	var x = $(this).data('tab');
	$('.tab').hide();
	$(".tabs__nav-item[data-tab='" + x + "']").addClass('is-active').siblings().removeClass('is-active');
	$(".tabs").find("[data-tab='" + x + "']").show();
})

// Popovers
var $button = $('.btn,.popover');

$button.on('click', function (e) {
	var $popover = $(this).closest('.l-pos-relative:not(.popover--hover)').find('.popover');

	if ($(this).attr('data-popover')) {
		if ($popover.hasClass('is-open')) {
			$('.popover').removeClass('is-open');
		} else {
			$('.popover').removeClass('is-open');
			$popover.addClass('is-open');
		}
	}
	e.stopPropagation();
});

$(document).on('click', function (e) {
	if (!$(this).attr('data-popover'))
		$('.popover').removeClass('is-open');
});
