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
$(document).on('click', '.js-toggle-popover', function (e) {
	var $this = $(this),
		$thisPopover = $this
			.parent()
			.children('.popover');

	$('.js-toggle-popover').not($this).removeClass('is-open');
	$thisPopover.toggleClass('is-open');
	$this.toggleClass('is-open');
	$('.popover').not($thisPopover).removeClass('is-open');

	e.stopPropagation();
});

$(document).on('mouseover', '.on-hover', function () {
	$(this).find('.js-toggle-popover').addClass('is-open');
});

$(document).on('mouseout', '.on-hover', function () {
	$('.on-hover')
		.find('.js-toggle-popover')
		.removeClass('is-open');
});

$(document).on('click', '.popover', function (e) {
	e.stopPropagation();
});

$(document).on('click', function (e) {
	$('.popover, .js-toggle-popover').removeClass('is-open');
});

$(document).on('click', '.js-toggle-mobile-menu', function(e) {
	e.preventDefault();
	$('.page-header').toggleClass('mobile-is-open');
});
