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
		/* Act on the event */
		console.log($(this));

		// get image folder num
		// if ((this.find('img').attr('src')) !== 'undefined') {

		// 	console.log(i);
		// } else {
		// 	var i = $(this).attr('src');
		// 	console.log(i);
		// }
		var i = ($(this).find('img').attr('src'));
		console.log(i);
		if (typeof i !== 'undefined') {
			console.log("not undef")
			var strArray = i.match(/(\d+)/g);
			var link_num = strArray[0];
			/* get num of link */
			var urll = ('gallery/2018/09/11/a' + link_num + '.html');
			console.log(urll);
			console.log("***********************************");
		}
		console.log("popup start")
		$('.ajax-popup-link').magnificPopup({
			type: 'ajax',
			cache: false,
			callbacks: {
				ajaxContentAdded: (function() {
					var replaceds = undefined;
					$.get(urll, function(data) {
						console.log("data loaded");
						console.log(urll);
						var replaceds = data.replace(/<!--|-->/g, "");
						var replacedsarr = replaceds.split("*");
						var BreakException = {};
						try {
							replacedsarr.forEach(function(element) {
								console.log(element);
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


						$('.ajcol').slick();
						
						$('.ajcol').slick({
							dots: true,
						});
					});



					// $('#result').load(urll, function(result) {
					// 	var replaceds = result.replace(/<!--|-->/g, "");
					// 	var replacedsarr = replaceds.split("*");
					// 	replacedsarr.forEach(function(element) {
					// 		// if(element.hasClass('ajax-popup-link') {
					// 		// 	console.log("it has");
					// 		// }
					// 		$('#result').append(element);

					// 	})
					// });

					// replaceds_arr.forEach(function(element){
					// 	console.log("element");
					// });

				})
			}
		});


	});
});