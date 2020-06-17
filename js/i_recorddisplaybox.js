function html_RecordDisplayBox(Golfer, Event, Course, SeasonBegin, SeasonEnd, optHideBox) {
	/**---------------------------------------------------------------------**/
		var pGolfer			=	arguments[0];
		var pEvent			=	arguments[1];
		var pCourse			=	arguments[2];
		var pSeasonBegin	=	arguments[3];
		var pSeasonEnd		=	arguments[4];
		var pHideBox		=	arguments[5];
	/**---------------------------------------------------------------------**/
	
	if (pHideBox != 1) {
	
		document.write('<div class="w3-half">');
		document.write('	<p><strong>Displaying:</p>');
		document.write('	<table class="w3-table w3-white">');
		document.write('		<tr>');
		document.write('			<td width="40px">Golfer:</td>');
		document.write('			<td width="200px">' + getGolferName(pGolfer) + '<br /></td>');
		document.write('		</tr>');
		document.write('		<tr>');
		document.write('			<td width="40px">Event:</td>');
		document.write('			<td width="200px">' + getEventName(pEvent) + '<br /></td>');
		document.write('		</tr>');
		document.write('		<tr>');
		document.write('			<td width="40px">Course:</td>');
		document.write('			<td width="200px">' + getCourseName(pCourse) + '<br /></td>');
		document.write('		</tr>');
		document.write('		<tr>');
		document.write('			<td width="40px">Seasons:</td>');
		document.write('			<td width="200px">' + pSeasonBegin + '&nbsp;&nbsp;to&nbsp;&nbsp;' + pSeasonEnd + '</td>');
		document.write('		</tr>');
		document.write('	</table></strong>');
		document.write('</div>');
	}
}