function getFilterSettings_Score(URL, SeasonLoop) {
	var arrFilters = new Array();
	
	//Event Filter
	if (URL[4] == '-2') {arrFilters[13] = 'Y';}
	else if (URL[4] == '-3') {arrFilters[13] = 'N';}
	else if (URL[4] != '-1') {arrFilters[11] = getEventName(URL[4]);}
	
	//Golfer Filter
	if (URL[3] != '-1') {arrFilters[9] = getGolferName(URL[3]);}
	
	//Course Filter
	if (URL[5] != '-1') {arrFilters[10] = getCourseName(URL[5]);}
	
	//Season Filter
	if (SeasonLoop >= 2012) {
		arrFilters[14] = SeasonLoop;
	}
	
	//Specific Par
	if (URL[13] == '3') {arrFilters[4] = 3}
	else if (URL[13] == '4') {arrFilters[4] = 4}
	else if (URL[13] == '5') {arrFilters[4] = 5}
	else if (URL[13] == '-1') { arrFilters[4] = undefined; }
	
	return arrFilters;
}