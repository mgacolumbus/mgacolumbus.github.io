function getRecord_SeasonEventFinish(pURL, pPosition) {
	/**---------------------------------------------------------------------**/
		var arrURL				= arguments[0];
		var vPosition			= arguments[1];
		
		var arrUniqueGolfers	= new Array();		arrUniqueGolfers	= getData_Golfers();
		var arrSeasons			= new Array();		arrSeasons			= getData_Seasons();
		var arrData				= new Array();		arrData				= getData_Participants();	
		var arrReturnGolfers	= new Array();
		var arrReturnWinCount	= new Array();
		var arrReturnExtraInfo	= new Array();
		
		var vReturnIndex		= 0;
		var vCounter			= 0;
		var vExtraInfo			= "";
		var vTopPosFlag			= false;
	/**---------------------------------------------------------------------**/

	if (vPosition[0] == 't') {
		
		vTopPosFlag = true;
		vPosition = vPosition.substring(1,vPosition.length);
	
	}
	
	for (y = 0; y < arrUniqueGolfers.length; y++) {
		
		for (w = 0; w < arrSeasons.length; w++) {
			
			vExtraInfo	= "<div class='w3-container'>";
			vExtraInfo	+= "	<p class='w3-center'>";
			vExtraInfo	+= "		<table border='0' cellpadding='5px' width='100%' style='text-align: center;'>";
			vExtraInfo	+= "			<tr>";
			vExtraInfo	+= "				<th colspan='99'>" + arrUniqueGolfers[y] + "</th>";
			vExtraInfo	+= "			</tr><tr><td>&nbsp;</td></tr>";
			vExtraInfo	+= "			<tr>";
			vExtraInfo	+= "				<th width='15%'>Pos</th>";
			vExtraInfo	+= "				<th width='15%'>Season</th>";
			vExtraInfo	+= "				<th width='35%'>Event</th>";
			vExtraInfo	+= "				<th width='35%'>Course</th>";
			vExtraInfo	+= "			</tr>";
		
			for (x = 0; x < arrData.length; x++) {
				
                if (((vTopPosFlag && arrData[x][4] <= vPosition && arrData[x][4] > 0) || (vTopPosFlag == false && arrData[x][4] == vPosition)) && arrData[x][2] == arrUniqueGolfers[y] && arrData[x][32] == arrSeasons[w]) {
					
					if ( isFilterMatch(arrURL[3],arrData[x][2],arrURL[5],arrData[x][28],arrURL[4],arrData[x][29],arrData[x][32],arrSeasons[arrURL[1]],arrSeasons[arrURL[2]]) ) {
							
						vCounter++;
				
						vExtraInfo	+= "			<tr>";
						vExtraInfo	+= "				<td>" + arrData[x][4] + "</td>";
						vExtraInfo	+= "				<td>" + arrData[x][32] + "</td>";
						vExtraInfo	+= "				<td>" + arrData[x][29] + "</td>";
						vExtraInfo	+= "				<td>" + arrData[x][28] + "</td>";
						vExtraInfo	+= "			</tr>";
						
					}
					
				}
				
			} 
		
			vExtraInfo	+= "		</table>";
			vExtraInfo	+= "	</p>";
			vExtraInfo	+= "</div>";
		
			if (vCounter > 0) {
				
				arrReturnGolfers[vReturnIndex]		= arrUniqueGolfers[y];
				arrReturnWinCount[vReturnIndex]		= vCounter;
				arrReturnExtraInfo[vReturnIndex]	= vExtraInfo;
				
				vReturnIndex++;
				vExtraInfo = "";
			}
			
			vCounter = 0;
		
		}
		
	}
	
	return [arrReturnGolfers, arrReturnWinCount, arrReturnExtraInfo];
	
}