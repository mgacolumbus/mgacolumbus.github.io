function getAverageList(oGolferIndex, oEventIndex, oCourseIndex, oSeasonBegin, oSeasonEnd) {
	/**---------------------------------------------------------------------**/
		//var pSeason				=	arguments[0];
		var pGolferIndex		=	arguments[0];
		var pEventIndex			=	arguments[1];
		var pCourseIndex		=	arguments[2];
		var pSeasonBegin		=	arguments[3];
		var pSeasonEnd			=	arguments[4];
	
		var varReturnIndex		=	0;
		var varEventCount		=	0;
		var varTotal			=	0.00;
		var varPositionHold		=	0;
		var varAverageHold		=	0;
		
		var arrReturnArray		=	new Array();
		var varRoundsArray		=	new Array();
	
		var arrRounds			=	new Array();
		var arrGolfers			=	new Array();
	/**---------------------------------------------------------------------**/
	

	varRoundsArray = getSpecificRounds(pGolferIndex,pEventIndex,pCourseIndex,pSeasonBegin,pSeasonEnd);
	arrGolfers	= getData_Golfers();

	varReturnIndex = 0;

	for (gl = 0; gl < arrGolfers.length; gl++) {

		varTotal = 0;
		varEventCount = 0;

		for (sl = 0; sl < varRoundsArray.length; sl++) {

			if (varRoundsArray[sl][3] == arrGolfers[gl]) {

				varTotal += getRoundScore(varRoundsArray, sl)[2];
				varEventCount++;
			}
		}
		
		if (varEventCount > 1) {
			arrReturnArray[varReturnIndex] = new Array();

			arrReturnArray[varReturnIndex][0]	= arrGolfers[gl];
			arrReturnArray[varReturnIndex][1]	= (varTotal / varEventCount).toFixed(3);
			arrReturnArray[varReturnIndex][2]	= varEventCount;
			arrReturnArray[varReturnIndex][3]	= varTotal;

			varReturnIndex++;
		}
	}
	
	arrReturnArray.sort(function(a,b) {
		return a[1]-b[1]
	});
	
	
	varReturnIndex = 0;
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varAverageHold != arrReturnArray[varReturnIndex][1]) {
			varAverageHold = arrReturnArray[varReturnIndex][1];
			varPositionHold = (pl + 1);
			arrReturnArray[varReturnIndex][4] = (pl + 1);
		} else {
			arrReturnArray[varReturnIndex][4] = varPositionHold;
		}
		
		varReturnIndex++;
	}
	
	return arrReturnArray;
}


