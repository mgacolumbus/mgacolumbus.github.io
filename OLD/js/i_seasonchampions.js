function html_SeasonEventChampions(Season) {
	/**---------------------------------------------------------------------**/
		var pSeason			=	arguments[0];
		var varEvent		=	"";
		var varColor		=	"";
		var arrResults		=	new Array();
		var varDispEvent	=	"";
	/**---------------------------------------------------------------------**/
	
	document.write('<div class="w3-row-padding w3-margin-bottom">');
	
	for (x = 0; x < 8; x++) {	
		
		varEvent = getEventName(x);
		varDispEvent = varEvent;
		varColor = getSeasonChampionBGColor(x);		
		arrResults = getTournamentWinnerDetails(pSeason, varEvent);

			 if (x == 0)	{varDispEvent = "Rebel Beach<br />Am-Am";}
		else if (x == 2)	{varDispEvent = "MGA<br />Championship";}
		else if (x == 5)	{varDispEvent = "FORE!<br />Championship";}
		else if (x == 6)	{varDispEvent = "Douche Bag<br />Invitational";}
		
		document.write('<div class="w3-quarter">');
		document.write('	<div class="w3-container ' + varColor + ' w3-padding-16">');
		document.write('		<div class="w3-left"><a style="text-decoration: none;" href="resultsdetails.html?s=' + getCurrentSeason() + '&e=' + getEventIndex(varEvent) + '">' + varDispEvent + '</a></div>');
		document.write('		<div class="w3-right">');
		
		if (arrResults[0].length > 1) {
			document.write('			<h3><a style="text-decoration: none;" href="scorecard.html?s=' + getCurrentSeason() + '&g=' + getGolferIndex(arrResults[0]) + '&e=' + getEventIndex(varEvent) + '">' + arrResults[1][2] + ' (+' + arrResults[2] + ')</a></h3>');
		}
		
		document.write('		</div>');
		document.write('		<div class="w3-clear"></div>');
		
		if (arrResults[0].length > 1) {
			document.write('		<h4><a style="text-decoration: none;" href="golferstatsdetail.html?g=' + getGolferIndex(arrResults[0]) + '">' + arrResults[0] + '</a></h4>');
		}
		
		document.write('	</div>');
		document.write('</div>');
		
		if (x == 3) {
			
			document.write('</div>');
			document.write('<div class="w3-row-padding w3-margin-bottom">');
		}
	}
	
	document.write('</div>');
}