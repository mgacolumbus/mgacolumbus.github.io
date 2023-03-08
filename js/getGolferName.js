function getGolferName(pGolferIndex) {
	/**---------------------------------------------------------------------**/
    	var vGolfer		=	arguments[0];
		var arrGolfers	=	new Array();
			arrGolfers	=	getData_Golfers();
	/**---------------------------------------------------------------------**/
	
	if (vGolfer == undefined) {
		return "All Golfers";
	}
	
	if (vGolfer == "All Golfers") {
		return vGolfer;
	} 
	
	return arrGolfers[vGolfer];
}