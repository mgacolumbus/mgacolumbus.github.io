function getRecord_MostEarnings_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
		var pEvent				= arguments[0];
		var pCourse				= arguments[1];
		var pSeasonBegin		= arguments[2];
		var pSeasonEnd			= arguments[3];
		
		var aRounds				= new Array();		aRounds		= getData_Rounds();
		var aGolfers			= new Array();		aGolfers	= getData_Golfers();
		var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
		var aReturnStat			= new Array();
		var aReturnSeason		= new Array();
		var aReturnExtraInfo	= new Array();
		var aReturnGolfers		= new Array();
		var aReturnEvents		= new Array();
		
		var vAllCourses			= false;
		var vAllEvents			= false;
		var vAllMajors			= false;
		var vAllNonMajors		= false;
		
		var vReturnIndex		= 0;
		var vSeasonHold			= 0;
		var vEventCounter		= 0;
		var vSeasonLoopHold		= 0;
		var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
						
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && isMajor(aRounds[r][1]) == true) || (vAllNonMajors && isMajor(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonHold == vSeasonLoopHold) {

								vEventCounter++;
								aReturnStat[vReturnIndex] += aRounds[r][6];
							}
						}
					}
				}
			}
		
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex].toFixed(2);

				vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
				vPercent = Math.round(vPercent * 1000) / 1000;
				
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vPercent.toFixed(3);
				aReturnEvents[vReturnIndex] = vEventCounter;
				vReturnIndex++;
			}
		}
	}
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, aReturnEvents];
}