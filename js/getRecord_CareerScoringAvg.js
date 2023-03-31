function getRecord_CareerScoringAvg(pURL, pGross) {
	/**---------------------------------------------------------------------**/
		var arrURL				= arguments[0];
		var vGross				= arguments[1];
		
		var arrUniqueGolfers	= new Array();		arrUniqueGolfers	= getData_Golfers();
		var arrSeasons			= new Array();		arrSeasons			= getData_Seasons();
		var arrData				= new Array();		arrData				= getData_Participants();	
		var arrReturnGolfers	= new Array();
		var arrReturnWinCount	= new Array();
		var arrReturnExtraInfo	= new Array();
		
		var vReturnIndex		= 0;
		var vStrokes			= 0;
		var vEvents				= 0;
		var vPenalty			= 0;
		var vExtraInfo			= "";
	/**---------------------------------------------------------------------**/
	
	for (y = 0; y < arrUniqueGolfers.length; y++) {
		
		vExtraInfo	= "<div class='w3-container'>";
		vExtraInfo	+= "	<p class='w3-center'>";
		vExtraInfo	+= "		<table border='0' cellpadding='5px' width='100%' style='text-align: center;'>";
		vExtraInfo	+= "			<tr>";
		vExtraInfo	+= "				<th colspan='99'>" + arrUniqueGolfers[y] + "</th>";
		vExtraInfo	+= "			</tr><tr><td>&nbsp;</td></tr>";
		vExtraInfo	+= "			<tr>";
		vExtraInfo	+= "				<th width='10%'>Season</th>";
		vExtraInfo	+= "				<th width='35%'>Event</th>";
		vExtraInfo	+= "				<th width='35%'>Course</th>";
		
		if (vGross == true) {
			vExtraInfo	+= "				<th width='20%'>Score</th>";
		}
		else {
			vExtraInfo	+= "				<th width='10%'>Score</th>";
			vExtraInfo	+= "				<th width='10%'>Pen</th>";
		}
		
		vExtraInfo	+= "			</tr>";
	
		for (x = 0; x < arrData.length; x++) {
			
			if (arrData[x][2] == arrUniqueGolfers[y]) {
				
				if ( isFilterMatch(arrURL[3],arrData[x][2],arrURL[5],arrData[x][28],arrURL[4],arrData[x][29],arrData[x][32],arrSeasons[arrURL[1]],arrSeasons[arrURL[2]]) ) {
						
					vEvents++;
					vStrokes += (arrData[x][13] + arrData[x][14]);
					vPenalty += arrData[x][3];
				
					vExtraInfo	+= "			<tr>";
					vExtraInfo	+= "				<td>" + arrData[x][32] + "</td>";
					vExtraInfo	+= "				<td>" + arrData[x][29] + "</td>";
					vExtraInfo	+= "				<td>" + arrData[x][28] + "</td>";
					vExtraInfo	+= "				<td>" + (arrData[x][13] + arrData[x][14]) + "</td>";
					
					if (vGross == false) {
						vExtraInfo	+= "				<td>" + arrData[x][3] + "</td>";
					}
					
					vExtraInfo	+= "			</tr>";
					
				}
			}
			
		}
		
		vExtraInfo	+= "		</table>";
		vExtraInfo	+= "	</p>";
		vExtraInfo	+= "</div>";
		
		if (arrUniqueGolfers[y] != "( ALL )" && vEvents >= arrURL[9]) {
			
			arrReturnGolfers[vReturnIndex] = arrUniqueGolfers[y];
            
            if (vGross == false) {
				
                arrReturnWinCount[vReturnIndex] = ((vStrokes + vPenalty) / vEvents);
				
            } else {
				
                arrReturnWinCount[vReturnIndex] = (vStrokes / vEvents);
				
            }

            arrReturnExtraInfo[vReturnIndex] = vExtraInfo;
			
			vReturnIndex++;
		}
		
		vEvents = 0;
		vStrokes = 0;
        vPenalty = 0;
		
		
	}
	
	return [arrReturnGolfers, arrReturnWinCount, arrReturnExtraInfo];
	
}