function getFilterSettings(URL, LoopValue) {
	var arrFilters = new Array();
	
	//Event Filter
	if (URL[4] == '-2') {arrFilters[31] = 'Y';}
	else if (URL[4] == '-3') {arrFilters[31] = 'N';}
	else if (URL[4] != '-1') {arrFilters[29] = getEventName(URL[4]);}
	
	//Golfer Filter
	if (URL[3] != '-1') {arrFilters[2] = getGolferName(URL[3]);}
	
	//Course Filter
	if (URL[5] != '-1') {arrFilters[28] = getCourseName(URL[5]);}
	
	//Season Filter
	arrFilters[32] = LoopValue;
	
	return arrFilters;
}