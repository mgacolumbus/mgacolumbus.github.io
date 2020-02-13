function getRecord_MostEarnings_Range(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
		var pEvent				=	getEventName(arguments[0]);
		var pCourse				=	getCourseName(arguments[1]);
		var pSeasonBegin		=	arguments[2];
		var pSeasonEnd			=	arguments[3];
		
		var arrRounds			=	new Array();		arrRounds	=	getData_Rounds();
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
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ varAllCourses	= true; }
	if (pEvent	== 'All Events')		{ varAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ varAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ varAllNonMajors	= true; }

	
	for (g = 0; g < arrGolfers.length; g++) {
		
		varEventCounter = 0;
		arrReturnStat[varReturnIndex] = 0;
		
		for (r = 0; r < arrRounds.length; r++) {

			if (arrRounds[r][3] == arrGolfers[g]) {
			
				if (arrRounds[r][2] == pCourse || varAllCourses) {
					
					if (arrRounds[r][1] == pEvent || varAllEvents || (varAllMajors && isMajor(arrRounds[r][1]) == true) || (varAllNonMajors && isMajor(arrRounds[r][1]) == false)) {
						
						if (arrRounds[r][0].substr(6,9) >= pSeasonBegin && arrRounds[r][0].substr(6,9) <= pSeasonEnd) {

							varEventCounter++;
							arrReturnStat[varReturnIndex] += arrRounds[r][6];
						}
					}
				}
			}
		}
	
		if (arrReturnStat[varReturnIndex] > 0) {
			
			arrReturnStat[varReturnIndex] = Math.round(arrReturnStat[varReturnIndex] * 1000) / 1000;

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