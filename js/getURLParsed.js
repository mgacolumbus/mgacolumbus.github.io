function getURLParsed(URL) {
	/**---------------------------------------------------------------------**/
    	var pURL			=	arguments[0];
		
		var varURL			=	pURL.toString();
		var varURLslash		= 	0;
		var varURLhtml		=	varURL.indexOf(".html");
		
		var arrReturnArray	=	new Array();
	/**---------------------------------------------------------------------**/
	
	/*
		arrReturnArray[0]	=	Page Name
		arrReturnArray[1]	=	Season Begin
		arrReturnArray[2]	=	Season End
		arrReturnArray[3]	=	Golfer Index
		arrReturnArray[4]	=	Event Index
		arrReturnArray[5]	=	Course Index
		arrReturnArray[6]	=	Current Record Value
		arrReturnArray[7]	=	Finishing Position
		arrReturnArray[8]	=	Score Type
		arrReturnArray[9]	=	Score Type Action
		arrReturnArray[10]	=	Specific Season
		arrReturnArray[11]	=	Hide Display and Search
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
		arrReturnArray[3] = undefined;
	} else {
		arrReturnArray[3] = pURL.searchParams.get("g");
	}
	
	// Event Index
	if (pURL.searchParams.get("e") == "" || pURL.searchParams.get("e") == undefined) {
		arrReturnArray[4] = "All Events";
	} else if (pURL.searchParams.get("e") == "-1") {
		arrReturnArray[4] = "All Majors";
	} else if (pURL.searchParams.get("e") == "-2") {
		arrReturnArray[4] = "All Non-Majors";
	} else {
		arrReturnArray[4] = pURL.searchParams.get("e");
	}
	
	// Course Index
	if (pURL.searchParams.get("c") == "" || pURL.searchParams.get("c") == undefined) {
		arrReturnArray[5] = "All Courses";
	} else {
		arrReturnArray[5] = pURL.searchParams.get("c");
	}
	
	// Current Record Value
	if (pURL.searchParams.get("rec") == "" || pURL.searchParams.get("rec") == undefined) {
		arrReturnArray[6] = undefined;
	} else {
		arrReturnArray[6] = pURL.searchParams.get("rec");
	}
	
	// Finishing Position
	if (pURL.searchParams.get("pos") == "" || pURL.searchParams.get("pos") == undefined) {
		arrReturnArray[7] = undefined;
	} else {
		arrReturnArray[7] = pURL.searchParams.get("pos");
	}
	
	// Score Type
	if (pURL.searchParams.get("t") == "" || pURL.searchParams.get("t") == undefined) {
		arrReturnArray[8] = undefined;
	} else {
		arrReturnArray[8] = pURL.searchParams.get("t");
	}
	
	// Score Type Action
	if (pURL.searchParams.get("a") == "" || pURL.searchParams.get("a") == undefined) {
		arrReturnArray[9] = undefined;
	} else {
		arrReturnArray[9] = pURL.searchParams.get("a");
	}
	
	// Specific Season
	if (pURL.searchParams.get("s") == "" || pURL.searchParams.get("s") == undefined) {
		arrReturnArray[10] = undefined;
	} else {
		arrReturnArray[10] = pURL.searchParams.get("s");
	}
	
	// Hide Display and Search
	if (pURL.searchParams.get("hdn") == "" || pURL.searchParams.get("hdn") == undefined) {
		arrReturnArray[11] = undefined;
	} else {
		arrReturnArray[11] = pURL.searchParams.get("hdn");
	}
	
	return arrReturnArray;
}