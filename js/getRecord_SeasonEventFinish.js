function getRecord_SeasonEventFinish(pURL, pPosition) {
	
	var arrURL = new Array();   arrURL = arguments[0];
	var vPosition = arguments[1];
	var arrData	= new Array();   arrData = getData_Participants();	
	var arrReturnGolfers = new Array();
	var arrReturnWinCount = new Array();
	var arrUniqueGolfers = new Array();  arrUniqueGolfers = getData_Golfers();
	var arrSeasons = new Array();   arrSeasons = getData_Seasons();
	var vReturnIndex = 0;
	var vCounter = 0;
	var arrExtraInfo = new Array();
	var vExtraInfo = "";
	var vTopPosFlag = false;

	if (vPosition[0] == 't') {
		
		vTopPosFlag = true;
		vPosition = vPosition.substring(1,vPosition.length);
	
	}
	
	
	for (y = 0; y < arrUniqueGolfers.length; y++) {
		
		for (w = 0; w < arrSeasons.length; w++) {
		
			for (x = 0; x < arrData.length; x++) {
				
                if (((vTopPosFlag && arrData[x][4] <= vPosition && arrData[x][4] > 0) || (vTopPosFlag == false && arrData[x][4] == vPosition)) && arrData[x][2] == arrUniqueGolfers[y] && arrData[x][32] == arrSeasons[w]) {
					
					if ( isFilterMatch(arrURL[3],arrData[x][2],arrURL[5],arrData[x][28],arrURL[4],arrData[x][29],arrData[x][32],arrSeasons[arrURL[1]],arrSeasons[arrURL[2]]) ) {
							
						vCounter++;
						vExtraInfo += "- " + arrData[x][32] + " " + arrData[x][29] + " @ " + arrData[x][28] + "\\n";
						
					}
					
				}
				
			} 
		
		
			if (vCounter > 0) {
				
				arrReturnGolfers[vReturnIndex] = arrUniqueGolfers[y];
				arrReturnWinCount[vReturnIndex] = vCounter;
				arrExtraInfo[vReturnIndex] = vExtraInfo;
				
				vReturnIndex++;
				vExtraInfo = "";
			}
			
			vCounter = 0;
		
		}
		
	}
	
	return [arrReturnGolfers, arrReturnWinCount, arrExtraInfo];
	
}