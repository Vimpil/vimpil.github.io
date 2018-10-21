$(document).ready(function() {

	console.log("Hello");



	// i="dfadsfadsfasd33";
	// console.log()
	// var strArray = i.match(/(\d+)/g);
	// console.log(strArray[0]);

	$('nav#menu').mmenu();

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

	// END fancybox load
	$('.ajax-popup-link').click(function(event) {
		/* Act on the event */

		var i = ($(this).parent().find('img').attr('src'));


		if (typeof i != 'undefined') {
			var strArray = i.match(/(\d+)/g);
			var link_num = strArray[0];
			/* get num of link */
			var urll = ('gallery/2018/09/11/a' + link_num + '.html' + ' ' + '#test');
		}

		$('.ajax-popup-link').magnificPopup({
			type: 'ajax',
			callbacks: {

				ajaxContentAdded: (function() {
					$('.ajcol').slick({
						dots: true,
						data: {
							attributes: {
								'global_variable': "urll"
							}
						},
					});

					$('#result').load(urll, function(result) {
						var replaceds = result.replace(/<!--|-->/g, "");
						$('#result').append(replaceds);
					});
					
				})
			}
		});

		function initSliders() {
			$('.ajcol').slick();
		};
	});
});