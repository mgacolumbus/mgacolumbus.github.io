function html_RankingBox(pURL, pRecordID, pDecimals) {
	/**---------------------------------------------------------------------**/
		var arrURL		= arguments[0];
		var vRecordID	= arguments[1];
		var vDecimals	= arguments[2];
		
		var arrDisplay	= new Array();		arrDisplay = getRecordData(vRecordID, arrURL);
		
		var vRank		= 1;
		var vStatHold	= 0;
	/**---------------------------------------------------------------------**/
	
	if (vDecimals == undefined) {
		
		vDecimals = 0;
		
	}
	
    document.write("<div class='w3-twothird w3-container'>");
    document.write("    <p class='w3-center'>");
    document.write("		<table border='0' cellpadding='5px' width='100%' style='text-align: center;'>");
	document.write("			<tr>");
	document.write("				<th width='10%'>Rank</th>");
	document.write("				<th width='45%'>Name</th>");
	document.write("				<th width='25%'>Stat</th>");
	document.write("				<th width='20%'>More Info</th>");
	document.write("			</tr>");
	
	
    for (z = 0; z < arrDisplay.length; z++) {
		
		document.write("		<tr>");
		
		if (vStatHold == arrDisplay[z][1]) {
			
			document.write("			<td>&nbsp;</td>");
			
		} else {
			
			document.write("			<td>" + vRank + "</td>");
			
		}
		
		document.write("			<td>" + arrDisplay[z][0] + "</td>");
		document.write("			<td>" + arrDisplay[z][1].toFixed(vDecimals) + "</td>");
		document.write("			<td><button onClick='window.location.href=\"recorddetails.html?m=" + arrURL[9] + "&g=" + arrURL[3] + "&e=" + arrURL[4] + "&c=" + arrURL[5] + "&sb=" + arrURL[1] + "&se=" + arrURL[2] + "&x=" + z + "&r=" + arrURL[7] + "\"'>Details</button>");
		document.write("		</tr>");
		
		vRank++;
		vStatHold = arrDisplay[z][1];
	}
    
	document.write("		</table>");
    document.write("    </p>");
	document.write("</div>");
	
}