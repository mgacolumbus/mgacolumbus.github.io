function getRoundDataForEvent(Season, EventIndex) {
	/**---------------------------------------------------------------------**/
		var pSeason			=	arguments[0] * 1;
		var pEventIndex		=	arguments[1] * 1;
		var arrRounds		=	new Array();
			arrRounds		=	getData_Rounds();
		var arrEvents		=	new Array();
			arrEvents		=	getData_Events();
		var arrReturnArray	=	new Array();
		var varReturnIndex	=	0;
	/**---------------------------------------------------------------------**/
	
	for (r = 0; r < arrRounds.length; r++) {
		
		if (arrRounds[r][0].substr(6,9) == pSeason || pSeason == 0) {
			
			if (arrRounds[r][1] == arrEvents[pEventIndex]) {
				
				arrReturnArray[varReturnIndex] = arrRounds[r];
				varReturnIndex++;
			}
		}
	}
	
	return arrReturnArray;
}