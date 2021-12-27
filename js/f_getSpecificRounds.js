function getSpecificRounds(oGolferIndex, oEventIndex, oCourseIndex, oSeasonBegin, oSeasonEnd) {
	/**---------------------------------------------------------------------**/
		var pGolferIndex		=	arguments[0];
		var pEventIndex			=	arguments[1];
		var pCourseIndex		=	arguments[2];
		var pSeasonBegin		=	arguments[3];
		var pSeasonEnd			=	arguments[4];
	
		var pGolfer				=	"";
		var pEvent				=	"";
		var pCourse				=	"";
	
		var arrHoldArray		=	new Array();
		var varReturnIndex		=	0;
		var arrReturnArray		=	new Array();
	
		var bAllSeasons		=	false;
    	var bAllGolfers		=	false;
    	var bAllEvents		=	false;
    	var bAllCourses		=	false;
    	var bAllMajors		=	false;
    	var bAllNonMajors	=	false;
	/**---------------------------------------------------------------------**/

	arrHoldArray = getData_Rounds();
	
	if (pSeasonBegin == 0 && pSeasonEnd == 0) {
		bAllSeasons = true;
	}
	
	if (pSeasonBegin == undefined || pSeasonEnd == undefined) {
		bAllSeasons = true;
	}
	
	if (pGolferIndex == undefined) {
		bAllGolfers = true;
	}
	
	if (pEventIndex == undefined || pEventIndex == "All Events") {
		bAllEvents = true;
	}
	
	if (pEventIndex == "All Majors") {
		bAllMajors = true;
	}

	if (pEventIndex == "All Non-Majors") {
		bAllNonMajors = true;
	}

	if (pCourseIndex == undefined || pCourseIndex == "All Courses") {
		bAllCourses = true;
	}
	
	if (bAllGolfers == false) {
		pGolfer = getGolferName(pGolferIndex);
	}
	
	if (bAllEvents == false) {
		pEvent = getEventName(pEventIndex);
	}
	
	if (bAllCourses == false) {
		pCourse = getCourseName(pCourseIndex);
	}
	
	
	for (gsrl = 0; gsrl < arrHoldArray.length; gsrl++) {

		if (bAllSeasons || (arrHoldArray[gsrl][0].substr(6,9) >= pSeasonBegin && arrHoldArray[gsrl][0].substr(6,9) <= pSeasonEnd)) {

			if (bAllGolfers || arrHoldArray[gsrl][3] == pGolfer) {

				if (bAllEvents || arrHoldArray[gsrl][1] == pEvent || (bAllMajors && isMajor(arrHoldArray[gsrl][1]) == true) || (bAllNonMajors && isMajor(arrHoldArray[gsrl][1]) == false)) {

					if (bAllCourses || arrHoldArray[gsrl][2] == pCourse) {

						arrReturnArray[varReturnIndex] = arrHoldArray[gsrl];
						varReturnIndex++;
					}
				}
			}
		}
	}
	
	return arrReturnArray;
}