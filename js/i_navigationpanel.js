function html_NavigationPanel(Source) {
	/**---------------------------------------------------------------------**/
		var varSource		=	arguments[0];
	/**---------------------------------------------------------------------**/

	document.write('<nav class="w3-sidebar w3-collapse w3-light-gray w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>');
	document.write('	<div class="w3-container w3-row">');
	document.write('		<div class="w3-col s4">');
	document.write('			<a href="http://www.mgatour.com/chapters/columbus" target="_mga"><img src="images/Logo.png" class="w3-circle w3-margin-right" style="width:46px"></a>');
	document.write('		</div>');
	document.write('		<div class="w3-col s8 w3-bar">');
	document.write('			<span><strong>MGA Columbus</strong><br />Stats &amp; Records</span><br>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<hr>');
	document.write('	<div class="w3-container"><h5>Navigation</h5></div>');
	document.write('		<div class="w3-bar-block">');
	
	document.write(get_NavigationItem('Overview', varSource));
	document.write(get_NavigationItem('GolferStats', varSource));
	//document.write(get_NavigationItem('EventStats', varSource));
	document.write(get_NavigationItem('CourseStats', varSource));
	//document.write(get_NavigationItem('ChapterStats', varSource));
	document.write(get_NavigationItem('Results', varSource));
	document.write(get_NavigationItem('Records', varSource));
	document.write(get_NavigationItem('Rules', varSource));
	document.write(get_NavigationItem('Calendar', varSource));
	
	document.write('			<br />');
	document.write('			<a href="https://mgatour.com/chapters/contact-leader/1154" target="_contact" class="w3-button"><i class="fa fa-envelope"></i></a>');
	document.write('			<a href="https://www.facebook.com/ColumbusMga" target="_facebook" class="w3-button"><i class="fa fa-facebook-square"></i></a>');
	document.write('			<a href="https://twitter.com/mgacolumbus" target="_twitter" class="w3-button"><i class="fa fa-twitter"></i></a>');
	document.write('			<a href="https://www.instagram.com/mgacolumbus/" target="_instagram" class="w3-button"><i class="fa fa-instagram"></i></a>');
	document.write('			<a href="https://discord.gg/ygQmfyv" target="_discord" class="w3-button"><img src="images/discord.png" width="21px" height="20px" /></a>');
	document.write('			<br><br>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('</nav>');
	document.write('<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>');
}


function html_NavigationPanel2() {
	/**---------------------------------------------------------------------**/

	/**---------------------------------------------------------------------**/
	
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
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Stats <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="#">Current Season Stats</a></li>');
	document.write('						<li><a href="golferdetails.html">Golfer Stats</a></li>');
	document.write('						<li><a href="#">Course Stats</a></li>');
	document.write('						<!--<li><a href="#">Event Stats</a></li>-->');
	document.write('						<li><a href="#">Chapter Stats</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li><a href="#">Event Results</a></li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Records <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="#">Scoring Records</a></li>');
	document.write('						<li><a href="#">Placement Records</a></li>');
	document.write('						<li><a href="#">Awards Records</a></li>');
	document.write('						<li><a href="#">Chapter Records</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Lists <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="#">Event Scorecards</a></li>');
	document.write('						<li><a href="eventchampions.html">Event Champions</a></li>');
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
	document.write('						<li><a href="#">Chapter Rules</a></li>');
	document.write('						<li><a href="#">Calendar</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('			</ul>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('</nav>');
}