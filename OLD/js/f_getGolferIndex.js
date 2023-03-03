function getGolferIndex(GolferName) {
	/**---------------------------------------------------------------------**/
    	var pGolfer			=	arguments[0];
		var arrGolfer		=	new Array();
			arrGolfer		=	getData_Golfers();
	/**---------------------------------------------------------------------**/
	
	for (g = 0; g < arrGolfer.length; g++) {
		
		if (arrGolfer[g] == pGolfer) {
			
			return g;
		}
	}
}