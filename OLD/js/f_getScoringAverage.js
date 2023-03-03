function getScoringAverage(RoundsArray, Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
    	var pDataArray		=	arguments[0];
    	var pGolfer			=	arguments[1];
    	var pEvent			=	arguments[2];
    	var pCourse			=	arguments[3];
    	var pSeasonBegin	=	arguments[4];
    	var pSeasonEnd		=	arguments[5];

    	var varResults		=	0;
		var varEventCount	=	0;
		var varStrokes		=	0;
		var arrRoundScore	=	new Array();
    	var bAllSeasons		=	false;
    	var bAllGolfers		=	false;
    	var bAllEvents		=	false;
    	var bAllCourses		=	false;
    	var bAllMajors		=	false;
    	var bAllNonMajors	=	false;
	/**---------------------------------------------------------------------**/

	if (pSeasonBegin == 0 && pSeasonEnd == 0) {
		bAllSeasons = true;
	}

	if (pGolfer == "") {
		bAllGolfers = true;
	}

	if (pEvent == "") {
		bAllEvents = true;
	}

	if (pEvent == "Majors") {
		bAllMajors = true;
	}

	if (pEvent == "NonMajors") {
		bAllNonMajors = true;
	}

	if (pCourse == "") {
		bAllCourses = true;
	}
	

	for (getAverageLoop = 0; getAverageLoop < pDataArray.length; getAverageLoop++) {

		if (bAllSeasons || (pDataArray[getAverageLoop][0].substr(6,9) >= pSeasonBegin && pDataArray[getAverageLoop][0].substr(6,9) <= pSeasonEnd)) {

			if (bAllGolfers || pDataArray[getAverageLoop][3] == pGolfer) {

				if (bAllEvents || pDataArray[getAverageLoop][1] == pEvent || (bAllMajors && isMajor(pDataArray[getAverageLoop][1]) == true) || (bAllNonMajors && isMajor(pDataArray[getAverageLoop][1]) == false)) {

					if (bAllCourses || pDataArray[getAverageLoop][2] == pCourse) {

						varEventCount++;
						arrRoundScore = getRoundScore(pDataArray, getAverageLoop);
						varStrokes += arrRoundScore[2];
					}
				}
			}
		}
	}
	
	varResults = (varStrokes / varEventCount).toFixed(3);
	
	return varResults;
}