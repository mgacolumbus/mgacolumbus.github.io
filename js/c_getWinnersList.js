function getWinnersList() {
	/**---------------------------------------------------------------------**/
		var varReturnIndex		=	0;
		var arrReturnArray		=	new Array();
		var arrRounds			=	new Array();
	/**---------------------------------------------------------------------**/
	
	arrRounds = getData_Rounds();
	
	for (ww = 0; ww < arrRounds.length; ww++) {
		
		if (arrRounds[ww][4] == 1) {
			
			arrReturnArray[varReturnIndex] = arrRounds[ww];
			
			varReturnIndex++;
		}
	}
	
	return arrReturnArray;
}