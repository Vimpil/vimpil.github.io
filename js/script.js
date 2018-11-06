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
	$('.ajax-popup-link').mouseenter(function(event) {
		var i = ($(this).find('img').attr('src'));
		if (typeof i !== 'undefined') {
			var strArray = i.match(/(\d+)/g);
			var link_num = strArray[0];
			/* get num of link */
			var urll = ('gallery/2018/09/11/a' + link_num + '.html');

		}
		$('.ajax-popup-link').magnificPopup({
			type: 'ajax',
			cache: false,
			fixedBgPos: true,
			tLoading: '',
			callbacks: {
				parseAjax: (function() {
					var replaceds = undefined;
					$.get(urll, function(data) {
						var replaceds = data.replace(/<!--|-->/g, "");
						var replacedsarr = replaceds.split("*");
						var BreakException = {};
						try {
							replacedsarr.forEach(function(element) {
								var result;
								var active = 0;
								if (element.indexOf('<a href="gal') > 0) {
									result = "";
								} else if (element.indexOf('desc') > 0) {
									var sec_index = element.indexOf('*');
									result = element.slice(4, sec_index);
									active = 1;
									$('#result').append(result);
								} else {
									result = element;
									$('#slickgal').append(result);
								}
								if (active < 2) {
									if (active == 1) {
										throw BreakException;
									}
								}
							});
						} catch (e) {
							if (e !== BreakException) throw e;
						}
						// timer
						var timer = null;
						var WAIT_TIME = 50; // 3 seconds
						var afterThreeSecondsDoThis = function() {
							$('.ajcol').slick({
								dots: true,
							});
							$('.ajax-text-and-image').css('visibility','visible');
							$('.ajax-text-and-image').css('opacity','1');
							$('.ajax-text-and-image').css('transition','opacity 1s ease');
							$('.ajax-text-and-image *').css('visibility','visible');
							$('.ajax-text-and-image *').css('opacity','1');
							$('.ajax-text-and-image *').css('transition','opacity 1s ease');
							

							// 	visibility: 'visible',
							// 	opacity: '1',
							// 	transition: 'opacity 1s ease',
							// 	-webkit-transition: 'opacity 1s ease',
							// });
							console.log('3 sec past');
							clearTimeout(timer); // remove timer
						}
						var startTimer = function() {
								timer = setTimeout(afterThreeSecondsDoThis, WAIT_TIME);
							};
							startTimer();
							// END timer
					});

				})
			}
		});
	});
});