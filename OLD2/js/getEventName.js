function getEventName(pEventIndex) {
	
	var arrEvents = getData_Events();

	switch(pEventIndex) {
		
		case 0:
		case "":
		case undefined:
			return "( ALL )";
		
		case 1:
			return "( MAJORS )";
		
		case 2:
			return "( NON-MAJORS )";
		
		default:
			return arrEvents[pEventIndex];
	}

}