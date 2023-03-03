function getRoundDataForSeason(Season) {
	/**---------------------------------------------------------------------**/
		var pSeason			=	arguments[0] * 1;
		var arrRounds		=	new Array();
			arrRounds		=	getData_Rounds();
		var arrReturnArray	=	new Array();
		var varReturnIndex	=	0;
	/**---------------------------------------------------------------------**/
	
	for (r = 0; r < arrRounds.length; r++) {
		
		if (arrRounds[r][0].substr(6,9) == pSeason) {
			
			arrReturnArray[varReturnIndex] = arrRounds[r];
			varReturnIndex++;
		}
	}
	
	return arrReturnArray;
}