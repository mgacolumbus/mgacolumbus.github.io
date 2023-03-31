function getEventName(pEventIndex) {
	/**---------------------------------------------------------------------**/
    	var vEventIndex	= arguments[0];
		
		var arrEvents	= new Array();		arrEvents	= getData_Events();
	/**---------------------------------------------------------------------**/
	
	switch(vEventIndex) {
		
		case 0:
		case "":
		case undefined:		return "( ALL )";
		
		case 1:				return "( MAJORS )";
		
		case 2:				return "( NON-MAJORS )";
		
		default:			return arrEvents[vEventIndex];
		
	}

}