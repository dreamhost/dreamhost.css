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
var $button = $('.js-btn-popover'),
	$popover = $('.popover');

$button.on('click', function (e) {
	var $thisPopover = $(this)
		.closest('.js-popover-container--click:not(.popover-container--hover)')
		.find('.popover');

	$thisPopover.toggleClass('is-open');
	$('.popover').not($thisPopover).removeClass('is-open');

	e.stopPropagation();
});

$popover.on('click', function (e) {
	e.stopPropagation();
});

$(document).on('click', function (e) {
	$('.popover').removeClass('is-open');
});
