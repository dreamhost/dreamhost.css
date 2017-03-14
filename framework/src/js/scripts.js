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
$(document).on('click', '.js-btn-popover', function (e) {
	var $thisPopover = $(this)
		.closest('.js-popover-container--click:not(.popover-container--hover)')
		.find('.popover');

	$thisPopover.toggleClass('is-open');
	$('.popover').not($thisPopover).removeClass('is-open');

	e.stopPropagation();
});

$(document).on('click', '.popover', function (e) {
	e.stopPropagation();
});

$(document).on('click', function (e) {
	$('.popover').removeClass('is-open');
});

$(document).on('click', '.js-toggle-mobile-menu', function(e) {
	e.preventDefault();
	$('.page-header').toggleClass('mobile-is-open');
});
