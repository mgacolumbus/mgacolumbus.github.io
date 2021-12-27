function getWinnersList(oGolferIndex, oEventIndex, oCourseIndex, oSeasonBegin, oSeasonEnd) {
	/**---------------------------------------------------------------------**/
		var pGolferIndex		=	arguments[0];
		var pEventIndex			=	arguments[1];
		var pCourseIndex		=	arguments[2];
		var pSeasonBegin		=	arguments[3];
		var pSeasonEnd			=	arguments[4];
	
		var varReturnIndex		=	0;
		var arrReturnArray		=	new Array();
		var arrRounds			=	new Array();
	/**---------------------------------------------------------------------**/
	
	arrRounds = getSpecificRounds(pGolferIndex,pEventIndex,pCourseIndex,pSeasonBegin,pSeasonEnd);
	
	for (ww = 0; ww < arrRounds.length; ww++) {
		
		if (arrRounds[ww][4] == 1) {
			
			arrReturnArray[varReturnIndex] = arrRounds[ww];
			
			varReturnIndex++;
		}
	}
	
	return arrReturnArray;
}