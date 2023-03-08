function html_FilterBox(pFilterList) {
	
	var vFilterList = arguments[0];
	
	
	document.write("		<form method='get'>");
	document.write("<div class='w3-third w3-container'>");
	document.write("	<p class='w3-border w3-padding-large w3-padding-32 w3-center'>");
	
	if (vFilterList % 2 == 0) {
		document.write("Golfer Name: <select name='g'><option value='1'>Jason Strickland</option></select><br /><br />");
	}
	
	if (vFilterList % 3 == 0) {
		document.write("Course Name: <select name='c'><option value='1'>Chapel Hill</option></select><br /><br />");
	}
	
	if (vFilterList % 5 == 0) {
		document.write("Event Name: <select name='e'><option value='1'>Rebel Beach Am-Am</option></select><br /><br />");
	}
	
	if (vFilterList % 7 == 0) {
		document.write("Season Begin: <select name='sb'><option value='1'>2012</option></select><br /><br />");
	}
	
	if (vFilterList % 11 == 0) {
		document.write("Season End: <select name='se'><option value='1'>2023</option></select><br /><br />");
	}
	
	if (vFilterList % 13 == 0) {
		document.write("Hole Par: <select name='p'><option value='1'>Par 3s</option></select><br /><br />");
	}
	
	document.write("			<input type='submit' value='Clicky clicky'>");
	document.write("	</p>");
	document.write("</div>");
	document.write("		</form>");
	
	// Golfer name = 2
	// Course name = 3
	// Event name = 5
	// Season begin = 7
	// Season end = 11
	// Par = 13
}
