function getCourseName(CourseIndex) {
	/**---------------------------------------------------------------------**/
    	var pCourse		=	arguments[0];
		var arrCourses	=	new Array();
			arrCourses	=	getData_Courses();
	/**---------------------------------------------------------------------**/
	
	if (pCourse == undefined) {
		return "All Courses";
	}
	
	if (pCourse == "All Courses") {
		return pCourse;
	} 
	
	return arrCourses[pCourse];
}