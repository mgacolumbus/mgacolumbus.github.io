function getCourseName(courseIndex) {
	
	const courses = getData_Courses();
	
	return courseIndex ? courses[courseIndex] : "( ALL )";

}
