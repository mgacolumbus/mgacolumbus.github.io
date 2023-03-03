function html_RecordSearchBox(PageName, optPosition, optScoreType, optScoreActionType, optRecord, optHideBox) {
	/**---------------------------------------------------------------------**/
		var pPageName			=	arguments[0];
		var pPosition			=	arguments[1];
		var pScoreType			=	arguments[2];
		var pScoreActionType	=	arguments[3];
		var pRecord				=	arguments[4];
		var pHideBox			=	arguments[5];
		
		var arrGolfers			=	new Array();		arrGolfers		=	getData_Golfers();
		var arrCourses			=	new Array();		arrCourses		=	getData_Courses();
		var arrEvents			=	new Array();		arrEvents		=	getData_Events();
		var arrSeasons			=	new Array();		arrSeasons		=	getData_Seasons();
	/**---------------------------------------------------------------------**/
	
	if (pHideBox != 1) {
	
		document.write('<div class="w3-half">');
		document.write('	<form action="' + pPageName + '" method="get">');
		
		if (pPosition != undefined) {
			document.write('		<input type="hidden" name="pos" value="' + pPosition + '" />');
		}
		
		if (pScoreType != undefined) {
			document.write('		<input type="hidden" name="t" value="' + pScoreType + '" />');
		}
		
		if (pScoreActionType != undefined) {
			document.write('		<input type="hidden" name="a" value="' + pScoreActionType + '" />');
		}
		
		if (pRecord != undefined) {
			document.write('		<input type="hidden" name="rec" value="' + pScoreActionType + '" />');
		}
		
		document.write('		<p><strong>Search For:</strong></p>');
		document.write('		<table class="w3-table w3-light-gray">');
		document.write('			<tr>');
		document.write('				<td width="40px">Golfer:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="g">');
		document.write('						<option value="">-- All Golfers --</option>');
		
							for (z = 0; z < arrGolfers.length; z++) {
								document.write('<option value="' + z + '">' + arrGolfers[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">Event:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="e">');
		document.write('						<option value="">-- All Events --</option>');
		document.write('						<option value="-1">-- All Majors --</option>');
		document.write('						<option value="-2">-- All Non-Majors --</option>');
		
							for (z = 0; z < arrEvents.length; z++) {
								document.write('<option value="' + z + '">' + arrEvents[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">Course:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="c">');
		document.write('						<option value="">-- All Courses --</option>');
		
							for (z = 0; z < arrCourses.length; z++) {
								document.write('<option value="' + z + '">' + arrCourses[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">Seasons:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="sb">');

							for (z = 0; z < arrSeasons.length; z++) {
								document.write('<option value="' + arrSeasons[z] + '">' + arrSeasons[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('					&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;');
		document.write('					<select name="se">');
		
							arrSeasons.reverse();
							
							for (z = 0; z < arrSeasons.length; z++) {
								document.write('<option value="' + arrSeasons[z] + '">' + arrSeasons[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">&nbsp;</td>');
		document.write('				<td width="200px">');
		document.write('					<input type="submit" value="Search..."/>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('		</table>');
		document.write('	</form>');
		document.write('</div>');
	}
}











