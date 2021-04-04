function html_EventWinnersList(Event) {
	/**---------------------------------------------------------------------**/
		var pEvent				=	arguments[0];
		var vEvent				=	getEventName(pEvent);
		var arrResults			=	new Array();
		var varCurrentSeason	=	getCurrentSeason();
	/**---------------------------------------------------------------------**/

	document.write('<h5 style="font-weight: bold;">' + vEvent + '</h5>');
	document.write('<table class="w3-table w3-striped w3-white">');

	while (varCurrentSeason >= 2012) {

		arrResults = getTournamentWinnerDetails(varCurrentSeason,vEvent);

		document.write('<tr>');
		document.write('	<td style="vertical-align: middle;"><i class="fa fa-trophy w3-text-yellow w3-large"></i></td>');
		document.write('	<td class="w3-center" style="vertical-align: middle;">' + varCurrentSeason + '</td>');
		document.write('	<td class="w3-center" style="vertical-align: middle;">' + arrResults[0] + '</td>');
		document.write('	<td class="w3-center" style="vertical-align: middle;">' + arrResults[1][2] + ' / ' + (arrResults[1][2] + arrResults[2]) + '</td>');
		document.write('	<td><a class="w3-button w3-green w3-right" href="resultsdetails.html?s=' + varCurrentSeason + '&e=' + pEvent + '">+</a></td>');
		document.write('<tr>');
		varCurrentSeason -= 1;
	}

	document.write('</table>');
}
        