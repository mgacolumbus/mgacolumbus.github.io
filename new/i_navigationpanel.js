function html_NavigationPanel(Source) {
	/**---------------------------------------------------------------------**/
		var varSource		=	arguments[0];
		var varLinkHTML		=	"";
	/**---------------------------------------------------------------------**/

	document.write('<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar"><br>');
	document.write('	<div class="w3-container w3-row">');
	document.write('		<div class="w3-col s4">');
	document.write('			<img src="images/Logo.png" class="w3-circle w3-margin-right" style="width:46px">');
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
	document.write(get_NavigationItem('EventStats', varSource));
	document.write(get_NavigationItem('CourseStats', varSource));
	document.write(get_NavigationItem('ChapterStats', varSource));
	document.write(get_NavigationItem('Records', varSource));
	document.write(get_NavigationItem('Results', varSource));
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