function getRecord_CareerScoringAvgGross(pURL) {
	
	var arrURL = new Array();   arrURL = arguments[0];
	var arrData	= new Array();   arrData = getData_Participants();	
	var arrReturnGolfers = new Array();
	var arrReturnWinCount = new Array();
	var arrUniqueGolfers = new Array();  arrUniqueGolfers = getData_Golfers();
	var arrSeasons = new Array();   arrSeasons = getData_Seasons();
	var vReturnIndex = 0;
	var vStrokes = 0;
	var vEvents = 0;
	var arrExtraInfo = new Array();
	var vExtraInfo = "";
	
	
	for (y = 0; y < arrUniqueGolfers.length; y++) {
	
		for (x = 0; x < arrData.length; x++) {
			
			//Check the filters
			if (arrData[x][2] == arrUniqueGolfers[y]) {
				if (arrURL[3] == 0 || getGolferName(arrURL[3]) == arrData[x][2]) {
					if (arrURL[5] == 0 || getCourseName(arrURL[5]) ==  arrData[x][28]) {
						if (arrURL[4] == 0 || getEventName(arrURL[4]) ==  arrData[x][29] || (arrURL[4] == 1 && isMajor(arrData[x][29]) == true) || (arrURL[4] == 2 && isMajor(arrData[x][29]) == false)) {
							if (arrData[x][32] >= arrSeasons[arrURL[1]] && arrData[x][32] <= arrSeasons[arrURL[2]]) {
						
								vEvents++;
								vStrokes += (arrData[x][13] + arrData[x][14]);
								
							}
						}
					}
				}
			}
			
		}
		
		if (arrUniqueGolfers[y] != "( ALL )" && vEvents >= 3) {
			
			vExtraInfo += "- Total Events = " + vEvents + "\\n- Total Strokes = " + vStrokes;
			
			arrReturnGolfers[vReturnIndex] = arrUniqueGolfers[y];
			arrReturnWinCount[vReturnIndex] = (vStrokes / vEvents);
			arrExtraInfo[vReturnIndex] = vExtraInfo;
			
			vReturnIndex++;
			vExtraInfo = "";
		}
		
		vEvents = 0;
		vStrokes = 0;
		
		
	}
	
	return [arrReturnGolfers, arrReturnWinCount, arrExtraInfo];
	
}