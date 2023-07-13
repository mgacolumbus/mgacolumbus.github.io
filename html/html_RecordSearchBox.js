function html_RecordSearchBox(URL){

	var arrGolfers		=	new Array();		arrGolfers	=	getData_Golfers();
	var arrCourses		=	new Array();		arrCourses	=	getData_Courses();
	var arrEvents		=	new Array();		arrEvents	=	getData_Events();
	var arrSeasons		=	new Array();		arrSeasons	=	getData_Seasons();
	
	
	if (URL[11] != 1) {
	
		document.write('<div class="w3-half"><br /><br />');
		document.write('	<form action="' + URL[0] + '" method="get">');
		
		if (URL[6] != undefined)	{ document.write('		<input type="hidden" name="rec" value="' + URL[6] + '" />'); }
		if (URL[7] != undefined)	{ document.write('		<input type="hidden" name="pos" value="' + URL[7] + '" />'); }
		if (URL[8] != undefined)	{ document.write('		<input type="hidden" name="t" value="' + URL[8] + '" />'); }
		if (URL[9] != undefined)	{ document.write('		<input type="hidden" name="a" value="' + URL[9] + '" />'); }
		//if (URL[13] != undefined)	{ document.write('		<input type="hidden" name="p" value="' + URL[13] + '" />'); }
		if (URL[14] != undefined)	{ document.write('		<input type="hidden" name="gn" value="' + URL[14] + '" />'); }
		if (URL[15] != undefined)	{ document.write('		<input type="hidden" name="perc" value="' + URL[15] + '" />'); }
		if (URL[16] != undefined)	{ document.write('		<input type="hidden" name="ss" value="' + URL[16] + '" />'); }
		if (URL[17] != undefined)	{ document.write('		<input type="hidden" name="sev" value="' + URL[17] + '" />'); }
		if (URL[18] != undefined)	{ document.write('		<input type="hidden" name="fl" value="' + URL[18] + '" />'); }
		
		document.write('		<p><strong>Search For:</strong></p>');
		document.write('		<table class="w3-table w3-light-gray">');
		
		if (URL[18] % 2 == 0) {		
			document.write('			<tr>');
			document.write('				<td width="40px">Golfer:</td>');
			document.write('				<td width="200px">');
			document.write('					<select name="g">');
			document.write('						<option value="-1">-- All Golfers --</option>');
			
								for (z = 0; z < arrGolfers.length; z++) {
									document.write('<option value="' + z + '">' + arrGolfers[z] + '</option>');
								}
			
			document.write('					</select>');
			document.write('				</td>');
			document.write('			</tr>');
		}
		
		if (URL[18] % 3 == 0) {
			document.write('			<tr>');
			document.write('				<td width="40px">Event:</td>');
			document.write('				<td width="200px">');
			document.write('					<select name="e">');
			document.write('						<option value="-1">-- All Events --</option>');
			document.write('						<option value="-2">-- All Majors --</option>');
			document.write('						<option value="-3">-- All Non-Majors --</option>');
			
								for (z = 0; z < arrEvents.length; z++) {
									document.write('<option value="' + z + '">' + arrEvents[z] + '</option>');
								}
			
			document.write('					</select>');
			document.write('				</td>');
			document.write('			</tr>');
		}
			
		if (URL[18] % 5 == 0) {
			document.write('			<tr>');
			document.write('				<td width="40px">Course:</td>');
			document.write('				<td width="200px">');
			document.write('					<select name="c">');
			document.write('						<option value="-1">-- All Courses --</option>');
			
								for (z = 0; z < arrCourses.length; z++) {
									document.write('<option value="' + z + '">' + arrCourses[z] + '</option>');
								}
			
			document.write('					</select>');
			document.write('				</td>');
			document.write('			</tr>');
		}
		
		if (URL[18] % 7 == 0) {
			document.write('			<tr>');
			document.write('				<td width="40px">Seasons:</td>');
			document.write('				<td width="200px">');
			document.write('					<select name="sb">');

								arrSeasons.sort();
								
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
		}
		
		if (URL[18] % 11 == 0) {
			document.write('			<tr>');
			document.write('				<td width="40px">Min Events:</td>');
			document.write('				<td width="200px">');
			document.write('					<select name="min">');
			
								var zz = 0 * 1;
								
								for (z = 0; z < 8; z++) {
									zz = (z * 1) + 1;
									document.write('<option value="' + zz + '">' + zz + '</option>');
								}
			
			document.write('					</select>');
			document.write('				</td>');
			document.write('			</tr>');
		}
		
		if (URL[18] % 13 == 0) {
			document.write('			<tr>');
			document.write('				<td width="40px">Par:</td>');
			document.write('				<td width="200px">');
			document.write('					<select name="p">');
			document.write('						<option value="-1">-- All Pars --</option>');
			
								var yy = 0 * 1;
								
								for (z = 0; z < 3; z++) {
									yy = (z * 1) + 3;
									document.write('<option value="' + yy + '">' + yy + '</option>');
								}
			
			document.write('					</select>');
			document.write('				</td>');
			document.write('			</tr>');
		}
		
		if (URL[18] % 17 == 0) {
			document.write('			<tr>');
			document.write('				<td width="40px">Min Holes:</td>');
			document.write('				<td width="200px">');
			document.write('					<select name="mh">');
			
								var xx = 0 * 1;
								
								for (z = 0; z < 72; z++) {
									xx = (z * 1) + 1;
									document.write('<option value="' + xx + '">' + xx + '</option>');
								}
			
			document.write('					</select>');
			document.write('				</td>');
			document.write('			</tr>');
		}

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