function getRecord_CareerScoringAvg(pURL, pGross) {
	
	var arrURL = new Array();   arrURL = arguments[0];
	var vGross = arguments[1];
	var arrData	= new Array();   arrData = getData_Participants();	
	var arrReturnGolfers = new Array();
	var arrReturnWinCount = new Array();
	var arrUniqueGolfers = new Array();  arrUniqueGolfers = getData_Golfers();
	var arrSeasons = new Array();   arrSeasons = getData_Seasons();
	var vReturnIndex = 0;
	var vStrokes = 0;
	var vEvents = 0;
    var vPenalty = 0;
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
                                vPenalty += arrData[x][3];
								
							}
						}
					}
				}
			}
			
		}
		
		if (arrUniqueGolfers[y] != "( ALL )" && vEvents >= arrURL[9]) {
			
			vExtraInfo += "- Total Events = " + vEvents + "\\n- Total Strokes = " + vStrokes;
            
            if (vGross == false) {
                
                vExtraInfo += "\\n- Total Penalty Strokes = " + vPenalty;
                
            }
			
			arrReturnGolfers[vReturnIndex] = arrUniqueGolfers[y];
            
            if (vGross == false) {
                arrReturnWinCount[vReturnIndex] = ((vStrokes + vPenalty) / vEvents);
            } else {
                arrReturnWinCount[vReturnIndex] = (vStrokes / vEvents);
            }

            arrExtraInfo[vReturnIndex] = vExtraInfo;
			
			vReturnIndex++;
			vExtraInfo = "";
		}
		
		vEvents = 0;
		vStrokes = 0;
        vPenalty = 0;
		
		
	}
	
	return [arrReturnGolfers, arrReturnWinCount, arrExtraInfo];
	
}