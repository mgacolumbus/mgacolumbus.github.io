function alertMessage(pMessage) {
	var vMessage = arguments[0];
	//alert("X");
	alert(vMessage);
}

function html_RankingBox(pURL, pRecordID) {
	
    var arrURL = new Array();   arrURL = arguments[0];
    var vRecordID = arguments[1];
	var arrDisplay = new Array();
	var vRank = 1;
	var vStatHold = 0;

	arrDisplay = getRecordData(vRecordID, arrURL);
	

    
    //if a data array is passed in, skip calculating the ranking and just display it
    //otherwise calculate the ranking based on the URL info passed in
    
    
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
		//alert(arrDisplay[z][2]);
		document.write("			<td>" + arrDisplay[z][0] + "</td>");
		document.write("			<td>" + arrDisplay[z][1] + "</td>");
		document.write("			<td><button onClick='alertMessage(\"" + arrDisplay[z][2] + "\");'>More Info</button>");
		document.write("		</tr>");
		
		vRank++;
		vStatHold = arrDisplay[z][1];
	}
    
	document.write("		</table>");
    document.write("    </p>");
	document.write("</div>");
	
}