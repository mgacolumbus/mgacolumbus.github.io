function getPlacementCount(RoundsArray, Event, Course, SeasonBegin, SeasonEnd, RangeBegin, RangeEnd) {
	/**---------------------------------------------------------------------**/
    	var pDataArray		=	arguments[0];
    	var pGolfer			=	arguments[1];
    	var pEvent			=	arguments[2];
    	var pCourse			=	arguments[3];
    	var pSeasonBegin	=	arguments[4];
    	var pSeasonEnd		=	arguments[5];
    	var pRangeBegin		=	arguments[6];
    	var pRangeEnd		=	arguments[7];

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


	for (getPlacementCountLoop = 0; getPlacementCountLoop < pDataArray.length; getPlacementCountLoop++) {

		if (bAllSeasons || (pDataArray[getPlacementCountLoop][0].substr(6,9) >= pSeasonBegin && pDataArray[getPlacementCountLoop][0].substr(6,9) <= pSeasonEnd)) {

			if (bAllGolfers || pDataArray[getPlacementCountLoop][3] == pGolfer) {

				if (bAllEvents || pDataArray[getPlacementCountLoop][1] == pEvent || (bAllMajors && isMajor(pDataArray[getPlacementCountLoop][1]) == true) || (bAllNonMajors && isMajor(pDataArray[getPlacementCountLoop][1]) == false)) {

					if (bAllCourses || pDataArray[getPlacementCountLoop][2] == pCourse) {

						if (pDataArray[getPlacementCountLoop][4] >= pRangeBegin && pDataArray[getPlacementCountLoop][4] <= pRangeEnd) {

							varResults++;
						}
					}
				}
			}
		}
	}

	return varResults;
}