function getRecord_MostScoreType_SingleEvent(Event, Course, SeasonBegin, SeasonEnd, Operator, Target, Golfer) {
	/**---------------------------------------------------------------------**/
		var pEvent				=	getEventName(arguments[0]);
		var pCourse				=	getCourseName(arguments[1]);
		var pSeasonBegin		=	arguments[2];
		var pSeasonEnd			=	arguments[3];
		var pOperator			=	arguments[4];
		var pTarget				=	arguments[5];
		var pGolfer				=	arguments[6];
		
		var aRounds				=	new Array();
		var aGolfers			=	new Array();		aGolfers	=	getData_Golfers();
		var aSeasons			=	new Array();		aSeasons	=	getData_Seasons().reverse();
		var aReturnStat			=	new Array();
		var aReturnSeason		=	new Array();
		var aReturnExtraInfo	=	new Array();
		var aReturnGolfers		=	new Array();
		var aReturnEvents		=	new Array();
		
		var vAllCourses			=	false;
		var vAllEvents			=	false;
		var vAllMajors			=	false;
		var vAllNonMajors		=	false;
		
		var vReturnTitle		=	"";
		var vReturnSubTitle		=	"";
		
		var vReturnIndex		=	0;
		var vHoleCounter		=	0;
		var vTotal				=	0;
		var vOffset				=	getParOffset(pTarget);
		var vPercent			=	0;
	/**---------------------------------------------------------------------**/
	
	if (pGolfer != undefined) {
		aRounds = getRoundDataForGolfer(pGolfer);
	} else {
		aRounds = getData_Rounds();
	}
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	//alert(aRounds.length);
	
	for (g = 0; g < aGolfers.length; g++) {
			
		for (r = 0; r < aRounds.length; r++) {
			
			vTotal = 0;
			vHoleCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			if (aRounds[r][3] == aGolfers[g]) {
			
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && isMajor(aRounds[r][1]) == true) || (vAllNonMajors && isMajor(aRounds[r][1]) == false)) {
						
						if (aRounds[r][0].substr(6,9) >= pSeasonBegin && aRounds[r][0].substr(6,9) <= pSeasonEnd) {
					
							for (z = 0; z < 18; z++) {
								
								vHoleCounter++;
								
								if (pOperator == "=") {
									if (aRounds[r][z + 8] == aRounds[r][z + 26] + vOffset) {
										vTotal++;
									}
								}
								if (pOperator == ">") {
									if (aRounds[r][z + 8] > aRounds[r][z + 26] + vOffset) {
										vTotal++;
									}
								}
								if (pOperator == "<") {
									if (aRounds[r][z + 8] < aRounds[r][z + 26] + vOffset) {
										vTotal++;
									}
								}
							}
						}
					}
				}
			}
			
			aReturnStat[vReturnIndex] = vTotal;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "";
			aReturnExtraInfo[vReturnIndex] = aRounds[r][0].substr(6,9) + " @ " + aRounds[r][2];//vHoleCounter + " Holes<br />( " + vPercent.toFixed(3) + " % )";
			aReturnEvents[vReturnIndex] = (vHoleCounter * 1) / 18;
			vReturnIndex++;
		}
	}
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, aReturnEvents];
}