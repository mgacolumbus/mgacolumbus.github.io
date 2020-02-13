function getRecord_MostPosition_Range(Event, Course, SeasonBegin, SeasonEnd, Position, Golfer) {
	/**---------------------------------------------------------------------**/
		var pEvent				=	arguments[0];
		var pCourse				=	arguments[1];
		var pSeasonBegin		=	arguments[2];
		var pSeasonEnd			=	arguments[3];
		var pPosition			=	arguments[4];
		var pGolfer				=	arguments[5];
		
		var arrRounds			=	new Array();
		var arrGolfers			=	new Array();		arrGolfers	=	getData_Golfers();
		var arrReturnStat		=	new Array();
		var arrReturnSeason		=	new Array();
		var arrReturnExtraInfo	=	new Array();
		var arrReturnGolfers	=	new Array();
		var arrReturnEvents		=	new Array();
		
		var varAllCourses		=	false;
		var varAllEvents		=	false;
		var varAllMajors		=	false;
		var varAllNonMajors		=	false;
		
		var varReturnIndex		=	0;
		var varEventCounter		=	0;
		var varPercent			=	0;
		var flgTopPos			=	false;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ varAllCourses		= true; }
	else { pCourse = getCourseName(pCourse); }
	
	
	if (pEvent	== 'All Events')			{ varAllEvents		= true; }
	else if (pEvent	== 'All Majors')		{ varAllMajors		= true; }
	else if (pEvent	== 'All Non-Majors')	{ varAllNonMajors	= true; }
	else { pEvent = getEventName(pEvent); }
	

	if (pGolfer != undefined) {
		arrRounds = getRoundDataForGolfer(pGolfer);
	} else {
		arrRounds = getData_Rounds();
	}	
	
	
	if (pPosition[0] == 't') {
		
		flgTopPos = true;
		pPosition = pPosition.substring(1,pPosition.length);
	}


	for (g = 0; g < arrGolfers.length; g++) {
		
		varEventCounter = 0;
		arrReturnStat[varReturnIndex] = 0;
		
		for (r = 0; r < arrRounds.length; r++) {

			if (arrRounds[r][3] == arrGolfers[g]) {
			
				if (arrRounds[r][2] == pCourse || varAllCourses) {
					
					if (arrRounds[r][1] == pEvent || varAllEvents || (varAllMajors && isMajor(arrRounds[r][1]) == true) || (varAllNonMajors && isMajor(arrRounds[r][1]) == false)) {
						
						if (arrRounds[r][0].substr(6,9) >= pSeasonBegin && arrRounds[r][0].substr(6,9) <= pSeasonEnd) {
							
							varEventCounter++;
							
							if (flgTopPos == true) {
								
								if (arrRounds[r][4] <= pPosition && arrRounds[r][4] > 0) {

									arrReturnStat[varReturnIndex] += 1;
								}		
								
							} else {
								
								if (arrRounds[r][4] == pPosition) {

									arrReturnStat[varReturnIndex] += 1;
								}								
							}
						}
					}
				}
			}
		}
	
		if (arrReturnStat[varReturnIndex] > 0) {

			varPercent = (arrReturnStat[varReturnIndex] / varEventCounter);
			varPercent = Math.round(varPercent * 1000) / 1000;
			
			arrReturnGolfers[varReturnIndex] = arrGolfers[g];
			arrReturnSeason[varReturnIndex] = 0;
			arrReturnExtraInfo[varReturnIndex] = varPercent.toFixed(3);
			arrReturnEvents[varReturnIndex] = varEventCounter;
			varReturnIndex++;
		}
	}
	
	return [arrReturnGolfers, arrReturnStat, arrReturnSeason, arrReturnExtraInfo, arrReturnEvents];
}