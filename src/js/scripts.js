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
