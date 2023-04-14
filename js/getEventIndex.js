function getEventIndex(EventName) {
	/**---------------------------------------------------------------------**/
    	var pEvent			=	arguments[0];
		var arrEvents		=	new Array();
			arrEvents		=	getData_Events();
	/**---------------------------------------------------------------------**/
	
	for (e = 0; e < arrEvents.length; e++) {
		
		if (arrEvents[e] == pEvent) {
			
			return e;
		}
	}
}