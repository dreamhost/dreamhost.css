/**
 * DreamHost.css Custom Javascript
 *
 * Usage:
 * - Use the `dh_css` namespace to make sure custom JS doesn't ram into anything else!
 * - For components, create a new `var Component_name` in the namespace below
 * - Use a `.load()` method with an exit condition to improve performance
 * - Put all jQuery events in a separate `.events` method
 * - Call the `Component.load()` function in `dh_css.init`
 * - Comments also added inline in Accordion component for demo
 *
 * Not certain how to follow these conventions?
 * Just follow one of the vars someone else wrote, or just ask someone!
 *
**/

(function(dh_css, $) {

	// Place all component loaders in here
	dh_css.init = function() {
		Accordion.load();
		Tabs.load();
		Quickcopy.load();
		Bars.load();
	}

	var Accordion = {
		load: function() {
			// exit condition will keep unneeded JS from running if the component isn't on the page
			if(!$('.Accordion').length) return;
			Accordion.events();
		},
		// all jQuery events go in this neat little function. Comment for anything confusing
		events: function() {
			$('.Accordion__toggle').on('click', function () {
				$(this).closest('.Accordion').toggleClass('Accordion--open');
			});
		}
	}

	var Tabs = {
		load: function() {
			if(!$('.Tabs').length) return;
			Tabs.events();
		},
		events: function() {
			$('.Tabs__nav-item').on('click', function() {
				var $this = $(this);

				// use parent to keep tab functionality scoped on pages with multiple tab components
				var $parent = $this.closest('.Tabs');
				var tab = $this.data('tab');

				// sets active tab nav link
				$('.Tabs__nav-item', $parent).removeClass('is-active');
				$this.addClass('is-active');

				// sets active tab
				$('.Tab', $parent).removeClass('is-active');
				$('.Tab[data-tab="' + tab + '"]').addClass('is-active');
			});
		}
	}

	// 'copy to clipboard' functionality
	var Quickcopy = {
		load: function() {
				if(!$('.js-quickcopy').length) return;
				Quickcopy.events();
		},
		events: function() {
			$('.js-quickcopy-btn').on('click', function(e) {
				var $parent = $(this).closest('.js-quickcopy');

				// create temporary input field populate with text to be copied. this is the only way JS can grab text
				var $temp = $('<input>');
				$('body').append($temp);
				$temp.val($('.js-quickcopy-text', $parent).text()).select();
				var success = document.execCommand('copy');
				$temp.remove();

				if(!success) return;

				// toggle success message if successful
				$parent.toggleClass('Quickcopy__success');
				setTimeout(function() {
					$parent.toggleClass('Quickcopy__success');
				}, 1000);
			});
		}
	}

	var Bars = {
		load: function() {
			if(!$('.Bar').length) return;
			Bars.load_listeners();
		},
		reset_drawers: function($parent, class_to_toggle) {
			var toggle_classes = ['is-open', 'delete-mode', 'edit-mode'];
			var classes_to_untoggle = toggle_classes.filter(function(class_to_untoggle) {
				return class_to_untoggle != class_to_toggle;
			});

			classes_to_untoggle = classes_to_untoggle.join(' ');
			$parent.removeClass(classes_to_untoggle);
		},
		toggle_drawer: function($el, class_to_toggle) {
			var $parent = $el.closest('.js-bar');

			Bars.reset_drawers($parent, class_to_toggle);
			$parent.toggleClass(class_to_toggle);
		},
		toggle_drawer_on_click: function() {
			$('.js-drawer-on-click').on('click', function() {
				Bars.toggle_drawer($(this), 'is-open');
			});
		},
		toggle_delete_mode_on_click: function() {
			$('.js-delete-mode-on-click').on('click', function() {
				Bars.toggle_drawer($(this), 'delete-mode');
			});
		},
		toggle_edit_mode_on_click: function() {
			$('.js-edit-mode-on-click').on('click', function() {
				Bars.toggle_drawer($(this), 'edit-mode');
			});
		},
		load_listeners: function() {
			if(!$('.js-bar').length) return;
			Bars.toggle_drawer_on_click();
			Bars.toggle_delete_mode_on_click();
			Bars.toggle_edit_mode_on_click();
		}
	}

	window.onload = dh_css.init();

})(window.dh_css = window.dh_css || {}, jQuery);

// Carousel
$(document).ready(function(){
	$('.Carousel').slick({
		dots: true
	});
});

// Popovers
$(document).on('click', '.js-toggle-popover', function (e) {
	var $this = $(this),
		$thisPopover = $this
			.parent()
			.children('.Popover');

	$('.js-toggle-popover').not($this).removeClass('is-open');
	$thisPopover.toggleClass('is-open');
	$this.toggleClass('is-open');
	$('.Popover').not($thisPopover).removeClass('is-open');

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

$(document).on('click', '.Popover', function (e) {
	e.stopPropagation();
});

$(document).on('click', function (e) {
	$('.Popover, .js-toggle-popover').removeClass('is-open');
});

$(document).on('click', '.js-menu-toggle', function(e) {
	$('.PageHeader').toggleClass('menu-is-open');
});


// Make closing Toaster animation controllable with JS
// Example shown here using jQuery

// ⚠️ TO DO ⚠️ 
// - Remove the entire dom node.
// (But since our platform is generally delivered server-side this probably won't matter much, but it'd be nice to keep things clean)
$(document).on('click', '.Toaster', function () {
	var that = this;
	$(this).addClass('Toaster--is-closing');
	if($('.Toaster').hasClass('Toaster--is-closing')) {
		// KILL! - Add timer to remove whitespace left behind
		setTimeout( function() {
			$(that).addClass("Toaster--killed");
			$(that).remove();
		}, 300);
	}
});

var Toaster = {
	create(title, description, style, persistence, time){

		var icons = {
			default: '<g fill="#ffffff" fill-rule="evenodd"><path d="M12 23.963C5.393 23.963.037 18.607.037 12 .037 5.393 5.393.037 12 .037 18.607.037 23.963 5.393 23.963 12c0 6.607-5.356 11.963-11.963 11.963zm0-1.772c5.628 0 10.19-4.563 10.19-10.191 0-5.628-4.562-10.19-10.19-10.19C6.372 1.81 1.81 6.371 1.81 12c0 5.628 4.562 10.19 10.19 10.19z" fill-rule="nonzero"/><path d="M12 14.88l-2.5 2.31.248-3.394-3.364-.514 2.808-1.923-1.695-2.95 3.253.996L12 6.24l1.25 3.165 3.253-.996-1.695 2.95 2.808 1.923-3.364.514.247 3.394z"/></g>',
			positive: '<g fill="#ffffff" fill-rule="evenodd"><rect transform="rotate(-47 12.861 12.147)" x="6.698" y="10.552" width="12.326" height="3.191" rx="1.595"/><path d="M11.861 21.503a9.503 9.503 0 1 0 0-19.006 9.503 9.503 0 0 0 0 19.006zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill-rule="nonzero"/><rect transform="rotate(-135 8.664 14.351)" x="5.473" y="12.756" width="6.382" height="3.191" rx="1.595"/></g>',
			negative: '<g fill="#ffffff" fill-rule="evenodd"><path d="M13.219 8.898c0 .862-.038 1.652-.113 2.368a44.352 44.352 0 0 1-.281 2.166h-1.612a32.878 32.878 0 0 1-.3-2.174 22.933 22.933 0 0 1-.113-2.36V6h2.419v2.898zm.281 6.871c0 .364-.144.66-.431.888-.288.229-.644.343-1.069.343-.413 0-.766-.114-1.06-.343a1.074 1.074 0 0 1-.44-.888c0-.363.147-.662.44-.896.294-.233.647-.35 1.06-.35.425 0 .781.117 1.069.35.287.234.431.533.431.896z"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill-rule="nonzero"/></g>',
			warning: '<g fill="#ffffff" fill-rule="evenodd"><path d="M13.219 8.898c0 .862-.038 1.652-.113 2.368a44.352 44.352 0 0 1-.281 2.166h-1.612a32.878 32.878 0 0 1-.3-2.174 22.933 22.933 0 0 1-.113-2.36V6h2.419v2.898zm.281 6.871c0 .364-.144.66-.431.888-.288.229-.644.343-1.069.343-.413 0-.766-.114-1.06-.343a1.074 1.074 0 0 1-.44-.888c0-.363.147-.662.44-.896.294-.233.647-.35 1.06-.35.425 0 .781.117 1.069.35.287.234.431.533.431.896z"/><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" fill-rule="nonzero"/></g>'
		}

		var isPersistent = !!persistence ? 'Toaster--persistent' : '';
		var toasterStyle = !!style ? 'Toaster--' + style : '';
		var toasterIcon = !!style ? icons[style] : icons.default;

        var toaster = '<div class="Toaster ' + toasterStyle + ' ' + isPersistent + '">';
        toaster += '<div class="Toaster__type">';
        toaster += '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">';
        toaster += toasterIcon
        toaster += '</div>';
		toaster += '<p class="Toaster__heading">' + title + ' <span>' + description + '</span></p>';
		toaster += '<div class="Toaster__close">&times;</div>'
		toaster += '</div>';
		
		toaster = $(toaster).css("animation-delay","0s");
		
		if (!!time){toaster = $(toaster).css("animation-delay", time + "s");}
	
		if (!$('body').has('.Toaster-container')){$('body').prepend('.Toaster-container');}
		
		$('.Toaster-container').append(toaster);

		if (!isPersistent){
			setTimeout(function(){
				$(toaster).remove();
			}, 6000);
		}

		// ⚠️ To do: 
		// If has time, get time + 6000 (magic number) and use as setTimeout duration
		// to ensure that it's not removed before the animation is complete

	}
}
