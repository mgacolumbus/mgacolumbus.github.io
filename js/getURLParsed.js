function getURLParsed(URL) {
	/**---------------------------------------------------------------------**/
    	var pURL			= arguments[0];
		
		var arrReturnArray	= new Array();
		
		var varURL			= pURL.toString();
		var varURLslash		= 0;
		var varURLhtml		= varURL.indexOf(".html");
		
	/**---------------------------------------------------------------------**/
	
	/*
	
		0	=	Page Name
		1	=	Season Begin
		2	=	Season End
		3	=	Golfer Index
		4	=	Event Index
		5	=	Course Index
		6	=	Specific Season
        7	=   Record Index
        8	=   Navigation Index
        9	=   Minimum Events
		10	=	X  (Array index of specific record)
		
	*/
	
	// Page Name
	for (u = 0; u < varURL.length; u++) {
		
		if (varURL[u] == "/") {
			
			varURLslash = u;
			
		}
		
	}
	
	arrReturnArray[0] = varURL.substring(varURLslash + 1,varURLhtml + 5);
	
	// Season Begin
	if (pURL.searchParams.get("sb") == "" || pURL.searchParams.get("sb") == undefined) {
		arrReturnArray[1] = 2012;
	} else {
		arrReturnArray[1] = pURL.searchParams.get("sb");
	}
	
	// Season End
	if (pURL.searchParams.get("se") == "" || pURL.searchParams.get("se") == undefined) {
		arrReturnArray[2] = getCurrentSeason();
	} else {
		arrReturnArray[2] = pURL.searchParams.get("se");
	}
	
	// Golfer Index
	if (pURL.searchParams.get("g") == "" || pURL.searchParams.get("g") == undefined) {
		arrReturnArray[3] = 0;
	} else {
		arrReturnArray[3] = pURL.searchParams.get("g");
	}
	
	// Event Index
	if (pURL.searchParams.get("e") == "" || pURL.searchParams.get("e") == undefined) {
		arrReturnArray[4] = 0;
	} else {
		arrReturnArray[4] = pURL.searchParams.get("e");
	}
	
	// Course Index
	if (pURL.searchParams.get("c") == "" || pURL.searchParams.get("c") == undefined) {
		arrReturnArray[5] = 0;
	} else {
		arrReturnArray[5] = pURL.searchParams.get("c");
	}
	
	// Specific Season
	if (pURL.searchParams.get("s") == "" || pURL.searchParams.get("s") == undefined) {
		arrReturnArray[6] = undefined;
	} else {
		arrReturnArray[6] = pURL.searchParams.get("s");
	}
	
	// Record Index
	if (pURL.searchParams.get("r") == "" || pURL.searchParams.get("r") == undefined) {
		arrReturnArray[7] = undefined;
	} else {
		arrReturnArray[7] = pURL.searchParams.get("r");
	}
	
	// Navigation Index
	if (pURL.searchParams.get("n") == "" || pURL.searchParams.get("n") == undefined) {
		arrReturnArray[8] = undefined;
	} else {
		arrReturnArray[8] = pURL.searchParams.get("n");
	}
	
	// Minimum Events
	if (pURL.searchParams.get("m") == "" || pURL.searchParams.get("m") == undefined) {
		arrReturnArray[9] = undefined;
	} else {
		arrReturnArray[9] = pURL.searchParams.get("m");
	}
	
	// Specific Record Index
	if (pURL.searchParams.get("x") == "" || pURL.searchParams.get("x") == undefined) {
		arrReturnArray[10] = undefined;
	} else {
		arrReturnArray[10] = pURL.searchParams.get("x");
	}
	
	return arrReturnArray;
}