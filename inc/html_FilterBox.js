function html_FilterBox(pFilterList) {
	
	var vFilterList = arguments[0];
    var arrGolfers = new Array();   arrGolfers = getData_Golfers();
    var arrCourses = new Array();   arrCourses = getData_Courses();
    var arrEvents = new Array();   arrEvents = getData_Events();
    var arrSeasons = new Array();   arrSeasons = getData_Seasons();
    
    
	document.write("<form method='get'>");
	document.write("   <div class='w3-third w3-container'>");
	document.write("	  <p class='w3-border w3-padding-large w3-padding-32 w3-center'>");
	
	if (vFilterList % 2 == 0) {
		
        document.write("Golfer Name: <select name='g'>");
        
        for (x = 0; x < arrGolfers.length; x++) {
            document.write("<option value='" + x + "'>" + arrGolfers[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 3 == 0) {
		document.write("Course Name: <select name='c'>");
        
        for (x = 0; x < arrCourses.length; x++) {
            document.write("<option value='" + x + "'>" + arrCourses[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 5 == 0) {
		document.write("Event Name: <select name='e'>");
        
        for (x = 0; x < arrEvents.length; x++) {
            document.write("<option value='" + x + "'>" + arrEvents[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 7 == 0) {
		document.write("Season Begin: <select name='sb'>");
        
        for (x = 0; x < arrSeasons.length; x++) {
            document.write("<option value='" + x + "'>" + arrSeasons[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 11 == 0) {
		document.write("Season End: <select name='se'>");
        
        for (x = 0; x < arrSeasons.length; x++) {
            document.write("<option value='" + x + "'>" + arrSeasons[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 13 == 0) {
		document.write("Hole Par: <select name='p'><option value='1'>Par 3s</option></select><br /><br />");
	}
	
	document.write("           <input type='submit' value='Filter Results'>");
	document.write("	  </p>");
	document.write("   </div>");
	document.write("</form>");
    
}