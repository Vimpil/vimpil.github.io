$(document).ready(function() {

	$(function() {
		$('nav#menu').mmenu()
	})

	$(function() {

		$("#menu").mmenu({}, {});
		$(".mh-head.mm-sticky").mhead({
			scroll: {
				hide: 200
			}
		});
		$(".mh-head:not(.mm-sticky)").mhead({
			scroll: false
		});

		$('body').on('click',
			'a[href^="#/"]',
			function() {
				alert("Thank you for clicking, but that's a demo link.");
				return false;
			}
		);
	});
	// END fancybox load
});