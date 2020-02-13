function getEventName(EventIndex) {
	/**---------------------------------------------------------------------**/
    	var pEvent		=	arguments[0];
		var arrEvents	=	new Array();
			arrEvents	=	getData_Events();
	/**---------------------------------------------------------------------**/
	
	if (pEvent == undefined) {
		return "All Events";
	}
	
	if (pEvent == "All Events" || pEvent == "All Majors" || pEvent == "All Non-Majors") {
		return pEvent;
	}
	
	return arrEvents[pEvent];
}