function getCourseName(pCourseIndex) {
	/**---------------------------------------------------------------------**/
    	var vCourseIndex	= arguments[0];
		
		var arrCourses		= new Array();		arrCourses	= getData_Courses();
	/**---------------------------------------------------------------------**/
	
	if (vCourseIndex == undefined || vCourseIndex == 0) {
		
		return "( ALL )";
		
	}
	
	return arrCourses[vCourseIndex];
}