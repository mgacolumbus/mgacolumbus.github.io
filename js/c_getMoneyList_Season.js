function getMoneyList_Season(oGolferIndex, oEventIndex, oCourseIndex, oSeasonBegin, oSeasonEnd) {
	/**---------------------------------------------------------------------**/
		//var pSeason				=	arguments[0];
		var pGolferIndex		=	arguments[0];
		var pEventIndex			=	arguments[1];
		var pCourseIndex		=	arguments[2];
		var pSeasonBegin		=	arguments[3];
		var pSeasonEnd			=	arguments[4];
	
		var varReturnIndex		=	0;
		var varEventCount		=	0;
		var varEarnings			=	0.00;
		var varPositionHold		=	0;
		var varEarningsHold		=	0;
		
		var arrReturnArray		=	new Array();
		var arrSeasonArray		=	new Array();
	
		var arrRounds			=	new Array();
		var arrGolfers			=	new Array();
	/**---------------------------------------------------------------------**/
	
	//if (pSeason != 'undefined') {
	
		//arrRounds	= getData_Rounds();
		arrSeasonArray = getSpecificRounds(pGolferIndex,pEventIndex,pCourseIndex,pSeasonBegin,pSeasonEnd);
		arrGolfers	= getData_Golfers();
		
		/*
		for (rl = 0; rl < arrRounds.length; rl++) {

			if (arrRounds[rl][0].substr(6, 9) == pSeason) {

				arrSeasonArray[varReturnIndex] = arrRounds[rl];

				varReturnIndex++;
			}
		}
		*/
		
		varReturnIndex = 0;
		
		for (gl = 0; gl < arrGolfers.length; gl++) {
			
			varEarnings = 0.00;
			varEventCount = 0;
			
			for (sl = 0; sl < arrSeasonArray.length; sl++) {
				
				if (arrSeasonArray[sl][3] == arrGolfers[gl]) {
					
					varEarnings += arrSeasonArray[sl][6];
					varEventCount++;
				}
			}
			
			if (varEventCount > 0) {
				arrReturnArray[varReturnIndex] = new Array();
				
				arrReturnArray[varReturnIndex][0]	= arrGolfers[gl];
				arrReturnArray[varReturnIndex][1]	= varEarnings.toFixed(2);
				arrReturnArray[varReturnIndex][2]	= varEventCount;
				
				varReturnIndex++;
			}
		}
	//}
	
	arrReturnArray.sort(function(a,b) {
		return b[1]-a[1]
	});
	
	
	varReturnIndex = 0;
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varEarningsHold != arrReturnArray[varReturnIndex][1]) {
			varEarningsHold = arrReturnArray[varReturnIndex][1];
			varPositionHold = (pl + 1);
			arrReturnArray[varReturnIndex][3] = (pl + 1);
		} else {
			arrReturnArray[varReturnIndex][3] = varPositionHold;
		}
		
		varReturnIndex++;
	}
	
	return arrReturnArray;
}


