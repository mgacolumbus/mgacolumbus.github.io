function html_NavigationPanel() {
	document.write('<nav class="navbar navbar-inverse navbar-fixed-top">');
	document.write('	<div class="container-fluid">');
	document.write('		<div class="navbar-header">');
	document.write('			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">');
	document.write('				<span class="icon-bar"></span>');
	document.write('				<span class="icon-bar"></span>');
	document.write('				<span class="icon-bar"></span>');
	document.write('			</button>');
	document.write('			<a class="navbar-brand" href="index.html">Home</a>');
	document.write('		</div>');
	document.write('		<div class="collapse navbar-collapse" id="myNavbar">');
	document.write('			<ul class="nav navbar-nav">');
	/*
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Stats <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Current Season Stats</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Golfer Stats</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Course Stats</a></li>');
	document.write('						<!--<li><a href="#">Event Stats</a></li>-->');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Chapter Stats</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li><a href="#" style="text-decoration: line-through;">Event Results</a></li>');
	*/
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Records <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="nav_records_scoring.html">Scoring Records</a></li>');
	document.write('						<li><a href="nav_records_placement.html">Placement Records</a></li>');
	document.write('						<li><a href="nav_records_scoretype.html">Scoretype Records</a></li>');
	document.write('						<li><a href="nav_records_awards.html">Awards Records</a></li>');
	document.write('						<li><a href="nav_records_chapter.html">Chapter Records</a></li>');
	document.write('						<li><a href="nav_records_misc.html">Misc. Records</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Lists <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	/*
	document.write('						<li><a href="#" style="text-decoration: line-through;">Event Scorecards</a></li>');
	*/
	document.write('						<li><a href="list_champions.html">Event Champions</a></li>');
	document.write('						<li><a href="list_meltdownchamps.html">Champions + Meltdown</a></li>');
	document.write('						<li><a href="list_holesinone.html">Holes in One</a></li>');
	document.write('						<li><a href="list_longdriveclosepin.html">Long Drive &amp; Closest Pin</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Social Media <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="https://www.facebook.com/ColumbusMga" target="_fb"><span class="fa fa-facebook-square"></span>&nbsp;&nbsp;Facebook</a></li>');
	document.write('						<li><a href="https://twitter.com/mgacolumbus" target="_tw"><span class="fa fa-twitter-square"></span>&nbsp;&nbsp;Twitter</a></li>');
	document.write('						<li><a href="https://www.instagram.com/mgacolumbus/" target="_ig"><span class="fa fa-instagram"></span>&nbsp;&nbsp;Instagram</a></li>');
	document.write('						<li><a href="https://discord.gg/ygQmfyv" target="_ds"><img src="images/discord2.png" width="19px" height="19px" />&nbsp;&nbsp;Discord</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Misc. Stuff <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="https://mgatour.com/chapters/contact-leader/1154" target="_em"><span class="fa fa-envelope"></span>&nbsp;&nbsp;Contact Us</a></li>');
	/*
	document.write('						<li><a href="#" style="text-decoration: line-through;">Chapter Rules</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Calendar</a></li>');
	*/
	document.write('					</ul>');
	document.write('				</li>');
	document.write('			</ul>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('</nav>');
}