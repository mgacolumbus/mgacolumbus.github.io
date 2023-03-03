function getRoundDataForGolfer(GolferIndex, optSeason) {
	/**---------------------------------------------------------------------**/
		var pGolferIndex	=	arguments[0] * 1;
		var pSeason			=	arguments[1];
		var arrRounds		=	new Array();
			arrRounds		=	getData_Rounds();
		var arrGolfers		=	new Array();
			arrGolfers		=	getData_Golfers();
		var arrReturnArray	=	new Array();
		var varReturnIndex	=	0;
		var varSeason		= 	pSeason;
	/**---------------------------------------------------------------------**/

	for (r = 0; r < arrRounds.length; r++) {
		
		if (pSeason == undefined) {
			varSeason = arrRounds[r][0].substr(6,9)
		}

		if (arrRounds[r][3] == arrGolfers[pGolferIndex] && varSeason == arrRounds[r][0].substr(6,9)) {
			
			arrReturnArray[varReturnIndex] = arrRounds[r];
			varReturnIndex++;
		}
	}
	
	return arrReturnArray;
}