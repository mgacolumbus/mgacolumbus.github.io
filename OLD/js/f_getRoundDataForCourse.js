function getRoundDataForCourse(Season, CourseIndex) {
	/**---------------------------------------------------------------------**/
		var pSeason			=	arguments[0] * 1;
		var pCourseIndex	=	arguments[1] * 1;
		var arrRounds		=	new Array();
			arrRounds		=	getData_Rounds();
		var arrCourses		=	new Array();
			arrCourses		=	getData_Courses();
		var arrReturnArray	=	new Array();
		var varReturnIndex	=	0;
	/**---------------------------------------------------------------------**/
	
	for (r = 0; r < arrRounds.length; r++) {
		
		if (arrRounds[r][0].substr(6,9) == pSeason || pSeason == 0) {
			
			if (arrRounds[r][2] == arrCourses[pCourseIndex]) {
				
				arrReturnArray[varReturnIndex] = arrRounds[r];
				varReturnIndex++;
			}
		}
	}
	
	return arrReturnArray;
}