function html_CourseList() {
	/**---------------------------------------------------------------------**/
		var arrCourses = getData_Courses();
		var varColumns = 2;
	/**---------------------------------------------------------------------**/
	
	for (c = 0; c < arrCourses.length; c++) {
		
		document.write('<tr>');

		for (cc = 0; cc < varColumns; cc++) {
			
			if (c < arrCourses.length) {
				
				document.write('<td>');
				document.write('	<i class="fa fa-flag" style="color: green;"></i>');
				document.write('</td>');
				document.write('<td align="center">');
				document.write('	<a href="coursestatsdetail.html?c=' + c + '">' + arrCourses[c] + '</a>');
				document.write('</td>');
			
				if (c < arrCourses.length && cc < (varColumns - 1)) {
					
					c++;
				}
			}
		}
		document.write('</tr>');
	}
}