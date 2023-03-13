function getGolferName(pGolferIndex) {
	/**---------------------------------------------------------------------**/
    	var vGolfer		=	arguments[0];
		var arrGolfers	=	new Array();
			arrGolfers	=	getData_Golfers();
	/**---------------------------------------------------------------------**/
	
	if (vGolfer == undefined) {
		return arrGolfers[0];
	}
	
	return arrGolfers[vGolfer];
}