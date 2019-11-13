function html_EventWinnersList(Event) {
	/**---------------------------------------------------------------------**/
		var pEvent				=	arguments[0];
		var vEvent				=	"";
		var arrResults			=	new Array();
		var varCurrentSeason	=	getCurrentSeason();
	/**---------------------------------------------------------------------**/

	vEvent = getEventName(pEvent);

	document.write('<h5>' + vEvent + '</h5>');
	document.write('<table class="w3-table w3-striped w3-white">');

	while (varCurrentSeason >= 2012) {

		arrResults = getTournamentWinnerDetails(varCurrentSeason,vEvent);

		document.write('<tr>');
		document.write('  <td><i class="fa fa-trophy w3-text-yellow w3-large"></i></td>');
		document.write('  <td><a href="resultsdetails.html?s=' + varCurrentSeason + '&e=' + pEvent + '">' + varCurrentSeason + '</a></td>');
		document.write('  <td><a href="resultsdetails.html?s=' + varCurrentSeason + '&e=' + pEvent + '">' + arrResults[0] + '</a></td>');
		document.write('  <td><a href="resultsdetails.html?s=' + varCurrentSeason + '&e=' + pEvent + '">' + (arrResults[1][2] + arrResults[2]) + '</a></td>');
		document.write('<tr>');
		varCurrentSeason -= 1;
	}

	document.write('</table>');
}
        