function getCourseName(pCourseIndex) {
	switch (pCourseIndex) {
		case undefined	:
		case '-1'		: return 'All Courses'; break;
	}
	
	const arrCourses = getData_Courses();
	return arrCourses[pCourseIndex];
}