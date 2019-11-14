function html_CourseList() {
	/**---------------------------------------------------------------------**/
		var arrCourses = getData_Courses();
	/**---------------------------------------------------------------------**/
	
	for (c = 0; c < arrCourses.length; c++) {
		
		document.write('<tr>');

		for (cc = 0; cc < 2; cc++) {
			
			if (c < arrCourses.length) {
				
				document.write('  <td><i class="fa ' + getGlobalVariable('Page_CoursesIcon') + '" style="color: ' + getGlobalVariable('Page_CoursesIconColor') + ';"></i></td>');
				document.write('  <td align="center"><a href="#?c=' + c + '">' + arrCourses[c] + '</a></td>');
			
				if (c < arrCourses.length && cc < 1) {
					
					c++;
				}
			}
		}
		document.write('</tr>');
	}
}