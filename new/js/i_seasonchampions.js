function html_SeasonEventChampions(Season) {
	/**---------------------------------------------------------------------**/
		var pSeason			=	arguments[0];
		var vEvent			=	"";
		var vColor		 	=	"";
		var arrResults		=	new Array();
	/**---------------------------------------------------------------------**/
	
	document.write('<div class="w3-row-padding w3-margin-bottom">');
	
	for (x = 0; x < 8; x++) {	
		
		vEvent = getEventName(x);
		
			 if (x == 0)	{vColor = "w3-red";}
		else if (x == 1)	{vColor = "w3-green";}
		else if (x == 2)	{vColor = "w3-teal";}
		else if (x == 3)	{vColor = "w3-dark-grey";}
		else if (x == 4)	{vColor = "w3-purple";}
		else if (x == 5)	{vColor = "w3-deep-orange";}
		else if (x == 6)	{vColor = "w3-brown";}
		else if (x == 7)	{vColor = "w3-black";}
		
		arrResults = getTournamentWinnerDetails(pSeason, vEvent);
		
			 if (x == 0)	{vEvent = "Rebel Beach<br />Am-Am";}
		else if (x == 2)	{vEvent = "MGA<br />Championship";}
		else if (x == 5)	{vEvent = "FORE!<br />Championship";}
		else if (x == 6)	{vEvent = "Douche Bag<br />Invitational";}
		
		document.write('<div class="w3-quarter">');
		document.write('	<div class="w3-container ' + vColor + ' w3-padding-16">');
		document.write('		<div class="w3-left">' + vEvent + '</div>');
		document.write('		<div class="w3-right">');
		document.write('			<h3>' + arrResults[1][2] + ' (+' + arrResults[2] + ')</h3>');
		document.write('		</div>');
		document.write('		<div class="w3-clear"></div>');
		document.write('		<h4>' + arrResults[0] + '</h4>');
		document.write('	</div>');
		document.write('</div>');
		
		if (x == 3) {
			
			document.write('</div>');
			document.write('<div class="w3-row-padding w3-margin-bottom">');
		}
	}
	
	document.write('</div>');
}