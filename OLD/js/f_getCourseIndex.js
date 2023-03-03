function getCourseIndex(CourseName) {
	/**---------------------------------------------------------------------**/
    	var pCourse			=	arguments[0];
		var arrCourses		=	new Array();
			arrCourses		=	getData_Courses();
	/**---------------------------------------------------------------------**/
	
	for (cc = 0; cc < arrCourses.length; cc++) {
		
		if (arrCourses[cc] == pCourse) {

			return cc;
		}
	}
}