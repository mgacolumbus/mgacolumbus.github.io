function isFilterMatch(pGolferID, pGolferName, pCourseID, pCourseName, pEventID, pEventName, pSeason, pSeasonBegin, pSeasonEnd) {
	/**---------------------------------------------------------------------**/
		var vGolferID		= arguments[0];
		var vGolferName		= arguments[1];
		var vCourseID		= arguments[2];
		var vCourseName		= arguments[3];
		var vEventID		= arguments[4];
		var vEventName		= arguments[5];
		var vSeason			= arguments[6];
		var vSeasonBegin	= arguments[7];
		var vSeasonEnd		= arguments[8];
		
		var vGolferPass		= false;
		var vCoursePass		= false;
		var vEventPass		= false;
		var vSeasonPass		= false;
	/**---------------------------------------------------------------------**/
	
	//Event Check
	if ( vEventID == 0 ) {
		
		vEventPass = true;
		
	}
	else if ( getEventName(vEventID) == vEventName ) {
		
		vEventPass = true;
		
	}
	else if ( vEventID == 1 && isMajor(vEventName) == true ) {
		
		vEventPass = true;
		
	}
	else if ( vEventID == 2 && isMajor(vEventName) == false ) {
		
		vEventPass = true;
		
	}
	else {
		
		return false;
		
	}
	
	//Season Check
	if ( vSeason == 0 ) {
		
		vSeasonPass = true;
		
	}
	else if ( vSeason >= vSeasonBegin && vSeason <= vSeasonEnd ) {
		
		vSeasonPass = true;
		
	}
	else {
		
		return false;
		
	}
	
	//Course Check
	if ( vCourseID == 0 ) {
		
		vCoursePass = true;
		
	}
	else if ( getCourseName(vCourseID) == vCourseName ) {
		
		vCoursePass = true;
		
	}
	else {
		
		return false;
		
	}
	
	//Golfer Check
	if ( vGolferID == 0 ) {
		
		vGolferPass = true;
		
	}
	else if ( getGolferName(vGolferID) == vGolferName ) {
		
		vGolferPass = true;
		
	}
	else {
		
		return false;
		
	}
	
	if ( vSeasonPass && vGolferPass && vCoursePass && vEventPass ) {
		
		return true;
		
	}
	else {
		
		return false;
		
	}
}