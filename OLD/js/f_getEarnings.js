function getEarnings(RoundsArray, Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
    	var pDataArray		=	arguments[0];
    	var pGolfer			=	arguments[1];
    	var pEvent			=	arguments[2];
    	var pCourse			=	arguments[3];
    	var pSeasonBegin	=	arguments[4];
    	var pSeasonEnd		=	arguments[5];

    	var varResults		=	0;
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


	for (getEarningsLoop = 0; getEarningsLoop < pDataArray.length; getEarningsLoop++) {

		if (bAllSeasons || (pDataArray[getEarningsLoop][0].substr(6,9) >= pSeasonBegin && pDataArray[getEarningsLoop][0].substr(6,9) <= pSeasonEnd)) {

			if (bAllGolfers || pDataArray[getEarningsLoop][3] == pGolfer) {

				if (bAllEvents || pDataArray[getEarningsLoop][1] == pEvent || (bAllMajors && isMajor(pDataArray[getEarningsLoop][1]) == true) || (bAllNonMajors && isMajor(pDataArray[getEarningsLoop][1]) == false)) {

					if (bAllCourses || pDataArray[getEarningsLoop][2] == pCourse) {

						varResults += pDataArray[getEarningsLoop][6];
					}
				}
			}
		}
	}

	return varResults.toFixed(2);
}