function html_RecordDisplayBox(URL) {
	
	if (URL[11] != 1) {
	
		document.write('<div class="w3-half"><br /><br />');
		document.write('	<p><strong>Displaying:</p>');
		document.write('	<table class="w3-table w3-white">');
		
		if (URL[18] % 2 == 0) {
			document.write('		<tr>');
			document.write('			<td width="40px">Golfer:</td>');
			document.write('			<td width="200px">' + getGolferName(URL[3]) + '<br /></td>');
			document.write('		</tr>');
		}
		
		if (URL[18] % 3 == 0) {
			document.write('		<tr>');
			document.write('			<td width="40px">Event:</td>');
			document.write('			<td width="200px">' + getEventName(URL[4]) + '<br /></td>');
			document.write('		</tr>');
		}
		
		if (URL[18] % 5 == 0) {
			document.write('		<tr>');
			document.write('			<td width="40px">Course:</td>');
			document.write('			<td width="200px">' + getCourseName(URL[5]) + '<br /></td>');
			document.write('		</tr>');
		}
		
		if (URL[18] % 7 == 0) {
			document.write('		<tr>');
			document.write('			<td width="40px">Seasons:</td>');
			document.write('			<td width="200px">' + URL[1] + '&nbsp;&nbsp;to&nbsp;&nbsp;' + URL[2] + '</td>');
			document.write('		</tr>');
		}
		
		if (URL[18] % 11 == 0) {
			document.write('		<tr>');
			document.write('			<td width="40px">Min Events:</td>');
			
			if (URL[12] == undefined) {
				URL[12] = 'N/A';
			}
			
			document.write('			<td width="200px">' + URL[12] + '</td>');
			document.write('		</tr>');
		}
		
		if (URL[18] % 13 == 0) {
			document.write('		<tr>');
			document.write('			<td width="40px">Par:</td>');
			
			if (URL[13] == '-1') { document.write('			<td width="200px">All Pars</td>'); }
			else { document.write('			<td width="200px">' + URL[13] + '</td>'); }
			
			document.write('		</tr>');
		}
		
		if (URL[18] % 17 == 0) {
			document.write('		<tr>');
			document.write('			<td width="40px">Min Holes:</td>');
			document.write('			<td width="200px">' + URL[19] + '</td>');
			document.write('		</tr>');
		}

		document.write('	</table></strong>');
		document.write('</div>');
	}
}