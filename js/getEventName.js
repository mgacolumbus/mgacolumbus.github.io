function getEventName(EventIndex) {
	/**---------------------------------------------------------------------**/
    	var pEvent		=	arguments[0];
		var arrEvents	=	new Array();
			arrEvents	=	getData_Events();
	/**---------------------------------------------------------------------**/
	
	if (pEvent == undefined || pEvent == 0) {
		return "( ALL )";
	}
	if (pEvent == 1) {
		return "( MAJORS )";
	}
	if (pEvent == 2) {
		return "( NON-MAJORS )";
	}
	
	return arrEvents[pEvent];
}