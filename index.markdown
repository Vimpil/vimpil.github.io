
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="author" content="www.frebsite.nl" />
		<meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=yes" />

		<title>jQuery.mmenu - Demo</title>
		
		<link rel="stylesheet" href="css/demo.css?v=7.0.1" />
		<link rel="stylesheet" href="css/hamburgers.css" />
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
		<link rel="stylesheet" href="css/jquery.mmenu.all.css" />
		<link rel="stylesheet" href="css/jquery.mhead.css?v=7.0.1" />
		<link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="css/main.css">
		<link rel="stylesheet" href="css/normalize.css">
		
	</head>
	<body>
		<div id="page">
			
			<div class="mh-head Sticky">
				<span class="mh-btns-left">
					<a href="#menu" class="fa fa-bars"></a>
					<a href="#page" class="fa fa-close"></a>
				</span>
				<span class="mh-text">demo</span>
			</div>
			
			<div id="content" class="content">
				<section class="container">
                    <div class="row">
                        <div class="wide layout-col">
                            <img class="VS_logo" src="img/VS_logo.png">
                            <ul class="nav nav-menu">
                                <li class="tab filtr-button" data-filter="1"><a href="index.html">Portfolio</a></li>
                                <li class="tab filtr-button" data-filter="2"><a href="about.html">About</a></li>
                                <li class="tab filtr-button" data-filter="3"><a href="contacts.html">Contacts</a> </li>
                            </ul>
                            <ul class="nav nav-gallery filters-filteringModeSingle">
                                <!-- For filtering controls add -->
                                <li class="tab filtr-button filtr filtr-active" data-filter="all"> All items </li>
                                <li class="tab filtr-button filtr" data-filter="1"> Category 1 </li>
                                <li class="tab filtr-button filtr" data-filter="2"> Category 2 </li>
                                <li class="tab filtr-button filtr" data-filter="3"> Category 3 </li>
                                <!-- For a shuffle control add -->
                                <!-- <li class="filtr-button filtr" data-shuffle> Shuffle items </li> -->
                                <!-- For sorting controls add -->
                                <!-- <li data-sortAsc> Ascending </li>
                                <li data-sortDesc> Descending </li> -->
                            </ul>
                            <!-- To choose the value by which you want to sort add -->
                            <div class="filtr-container">
                                <div class="layout-pane">
                                    <div class="group-combo">
                                        <div class="element filtr-item" rel="group2" data-category="1" data-sort="value">
                                            <a href="img/3.jpg" data-fancybox="group2" rel="group2" data-caption="Custom title" class="example_group">
                                                <img class="img-responsive" alt="sample" src="img/3.jpg">
                                                
                                            </a>
                                        </div>
                                        <div class="element filtr-item" rel="group2" data-category="2, 1" data-sort="value">
                                            <a href="img/2.jpg" data-fancybox="group2" rel="group2" data-caption="Custom title" class="example_group">
                                                <img class="img-responsive" alt="sample" src="img/2.jpg">
                                            </a>
                                        </div>
                                        <div class="element filtr-item" rel="group1" data-category="1, 3" data-sort="value">
                                            <a href="img/3.jpg" data-fancybox="group2" rel="group2" data-caption="Custom title" class="example_group">
                                                <img class="img-responsive" src="img/3.jpg" alt="sample">
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="element filtr-item" data-category="1" data-sort="value">
                                            <a href="img/3.jpg" data-fancybox="group2" rel="group2" data-caption="Custom title" class="example_group">
                                                <img class="img-responsive" alt="sample" src="img/3.jpg">
                                                
                                            </a>
                                        </div>
                                        <div class="element filtr-item" data-category="2, 1" data-sort="value">
                                            <a href="img/2.jpg" data-fancybox="group2" rel="group2" data-caption="Custom title" class="example_group">
                                                <img class="img-responsive" src="img/2.jpg" alt="sample">
                                            </a>
                                        </div>
                                        <div class="element filtr-item" data-category="1, 3" data-sort="value">
                                            <a href="img/3.jpg" data-fancybox="group2" rel="group2" data-caption="Custom title" class="example_group">
                                                <img class="img-responsive" src="img/3.jpg" alt="sample">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                    </div>
                </section>
			</div>
		</div>
		
			<nav id="menu">
				<ul id="panel-menu">
					<li><a href="#/">Home</a></li>
					<li><a href="#/work">Our work</a></li>
					<li><span>About us</span>
						<ul>
							<li><a href="#/about/history">History</a></li>
							<li><span>The team</span>
								<ul>
									<li><a href="#/about/team/management">Management</a></li>
									<li><a href="#/about/team/sales">Sales</a></li>
									<li><a href="#/about/team/development">Development</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li><span>Services</span>
						<ul>
							<li><a href="#/services/design">Design</a></li>
							<li><a href="#/services/development">Development</a></li>
							<li><a href="#/services/marketing">Marketing</a></li>
						</ul>
					</li>
					<li><a href="#/contact">Contact</a></li>
				</ul>
				<ul id="panel-language">
					<li><a href="#/en">English</a></li>
					<li><a href="#/de">Deutsch</a></li>
					<li><a href="#/nl">Nederlands</a></li>
				</ul>
			</nav>
		
		<script src="js/jquery-3.2.1.min.js"></script>
		<script src='js/html5shiv.js' type='text/javascript'></script>
		<script src='js/respond.js' type='text/javascript'></script>
		<script src="js/jquery.mmenu.all.js"></script>
		<script src="js/jquery.mhead.js"></script>
		<script src="js/playground.js"></script>
		<script src="js/jquery.filterizr.min.js"></script>
        <script src="js/jquery.fancybox.js"></script>
        <script src='js/script.js' type='text/javascript'></script>

		<script>
			$(function() {
				
				$("#menu").mmenu({}, { });
				$(".mh-head.mm-sticky").mhead({
					scroll: {
						hide: 200
					}
				});
				$(".mh-head:not(.mm-sticky)").mhead({
					scroll: false
				});

				

				$('body').on( 'click',
					'a[href^="#/"]',
					function() {
						alert( "Thank you for clicking, but that's a demo link." );
						return false;
					}
				);
			});
		</script>

	</body>
	<footer>
        <div class="smm-group">
                                <a href="   "><img class="sm-icon" src="img/youtube.svg"></a>
                                <a href="   "><img class="sm-icon tall" src="img/facebook.svg"></a>
                                <a href="   "><img class="sm-icon" src="img/linkedIn.svg"></a>
                            </div>
                            <p>&copy; Vladimir Serdechny | 2016-2017 All artwork copyright</p>
                        </div>
    </footer>
</html>