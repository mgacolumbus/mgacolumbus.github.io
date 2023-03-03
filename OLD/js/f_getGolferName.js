function getGolferName(GolferIndex) {
	/**---------------------------------------------------------------------**/
    	var pGolfer		=	arguments[0];
		var arrGolfers	=	new Array();
			arrGolfers	=	getData_Golfers();
	/**---------------------------------------------------------------------**/
	
	if (pGolfer == undefined) {
		return "All Golfers";
	}
	
	if (pGolfer == "All Golfers") {
		return pGolfer;
	} 
	
	return arrGolfers[pGolfer];
}