function getCourseName(CourseIndex) {
	/**---------------------------------------------------------------------**/
    	var pCourse		=	arguments[0];
		var arrCourses	=	new Array();
			arrCourses	=	getData_Courses();
	/**---------------------------------------------------------------------**/
	
	if (pCourse == undefined || pCourse == 0) {
		return "( ALL )";
	}
	
	return arrCourses[pCourse];
}