var filterizd = $('.filtr-container').filterizr({    //options object
});

// Default options
var options = {   
	animationDuration: 0.5, // in seconds
	   filter: 'all', // Initial filter
	   callbacks: {      
		onFilteringStart: function() {},
		      onFilteringEnd: function() {},
		      onShufflingStart: function() {},
		      onShufflingEnd: function() {},
		      onSortingStart: function() {},
		      onSortingEnd: function() {}   
	},
	   controlsSelector: '', // Selector for custom controls
	   delay: 0, // Transition delay in ms
	   delayMode: 'progressive', // 'progressive' or 'alternate'
	   easing: 'ease-out',
	   filterOutCss: { // Filtering out animation
		      
		opacity: 0,
		      transform: 'scale(0.5)'   
	},
	   filterInCss: { // Filtering in animation
		      
		opacity: 0,
		      transform: 'scale(1)'   
	},
	   layout: 'sameSize', // See layouts
	   multifilterLogicalOperator: 'or',
	   selector: '.filtr-container',
	   setupControls: true // Should be false if controlsSelector is set 
}
// You can override any of these options and then call...
var filterizd = $('.filtr-container').filterizr(options);
// If you have already instantiated your Filterizr then call...
filterizd.filterizr('setOptions', options);


$(document).ready(function() {

	$("ul.nav.nav-gallery.filters-filteringModeSingle li").click(function() {
		$(this).parent("ul").find('.filtr-active').toggleClass("filtr-active");
		$(this).toggleClass('filtr-active');
		console.log("li clicked");
	});

	// fancybox load
	/* This is basic - uses default settings */

	/* Using custom settings */

	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */

	$('a.example_group').fancybox({
		arrows: true,
		nextClick: true,
		closeBtn: true,
		'transitionIn': 'none',
		'transitionOut': 'none',
		'titlePosition': 'over',
		'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});

	$(function() {
		$('nav#menu').mmenu()
	});
});
// END fancybox load