function getCourseIndex(CourseName) {
	
	const arrCourses = getData_Courses();
	
	return arrCourses.indexOf(CourseName);

}