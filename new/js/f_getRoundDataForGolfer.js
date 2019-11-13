function getRoundDataForGolfer(GolferIndex) {
	/**---------------------------------------------------------------------**/
		var pGolferIndex	=	arguments[0] * 1;
		var arrRounds		=	new Array();
			arrRounds		=	getData_Rounds();
		var arrGolfers		=	new Array();
			arrGolfers		=	getData_Golfers();
		var arrReturnArray	=	new Array();
		var varReturnIndex	=	0;
	/**---------------------------------------------------------------------**/
	
	for (r = 0; r < arrRounds.length; r++) {
		
		if (arrRounds[r][3] == arrGolfers[pGolferIndex]) {
			
			arrReturnArray[varReturnIndex] = arrRounds[r];
			varReturnIndex++;
		}
	}
	
	return arrReturnArray;
}