function getScoreTypeCount(RoundsArray, Golfer, Event, Course, SeasonBegin, SeasonEnd, ScoreType) {
	/**---------------------------------------------------------------------**/
    	var pDataArray		=	arguments[0];
    	var pGolfer			=	arguments[1];
    	var pEvent			=	arguments[2];
    	var pCourse			=	arguments[3];
    	var pSeasonBegin	=	arguments[4];
    	var pSeasonEnd		=	arguments[5];
    	var pScoreType		=	arguments[6];

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


	for (getEventCountLoop = 0; getEventCountLoop < pDataArray.length; getEventCountLoop++) {

		if (bAllSeasons || (pDataArray[getEventCountLoop][0].substr(6,9) >= pSeasonBegin && pDataArray[getEventCountLoop][0].substr(6,9) <= pSeasonEnd)) {

			if (bAllGolfers || pDataArray[getEventCountLoop][3] == pGolfer) {

				if (bAllEvents || pDataArray[getEventCountLoop][1] == pEvent || (bAllMajors && isMajor(pDataArray[getEventCountLoop][1]) == true) || (bAllNonMajors && isMajor(pDataArray[getEventCountLoop][1]) == false)) {

					if (bAllCourses || pDataArray[getEventCountLoop][2] == pCourse) {
						
						//
						for (holeLoop = 0; holeLoop < 18; holeLoop++) {
							
							switch (pScoreType) {
								
								case -2:
								case -1:
								case  0:
								case  1:
								case  2:
								case  3:	{
												if (pDataArray[getEventCountLoop][holeLoop + 8] - pDataArray[getEventCountLoop][holeLoop + 26] == pScoreType) {
													
													varResults++;
												}
												break;
											}
								
								case  4:	{
												if (pDataArray[getEventCountLoop][holeLoop + 8] - pDataArray[getEventCountLoop][holeLoop + 26] >= pScoreType) {
													
													varResults++;
												}
												break;
											}
							}
						}
					}
				}
			}
		}
	}

	return varResults;
}