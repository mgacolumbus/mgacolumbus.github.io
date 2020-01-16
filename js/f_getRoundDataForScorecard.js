function getRoundDataForScorecard(Season, EventIndex, GolferIndex) {
	/**---------------------------------------------------------------------**/
		var pSeason			=	arguments[0] * 1;
		var pEventIndex		=	arguments[1] * 1;
		var pGolferIndex	=	arguments[2] * 1;
		var arrRounds		=	new Array();
			arrRounds		=	getData_Rounds();
		var arrEvents		=	new Array();
			arrEvents		=	getData_Events();
		var arrGolfers		=	new Array();
			arrGolfers		=	getData_Golfers();
	/**---------------------------------------------------------------------**/
	
	for (r = 0; r < arrRounds.length; r++) {
		
		if (arrRounds[r][0].substr(6,9) == pSeason) {
			
			if (arrRounds[r][3] == arrGolfers[pGolferIndex]) {
				
				if (arrRounds[r][1] == arrEvents[pEventIndex]) {
					
					return [arrRounds[r]];
				}
			}
		}
	}
}