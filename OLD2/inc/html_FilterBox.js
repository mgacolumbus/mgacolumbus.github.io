function html_FilterBox(pFilterList, pURL) {
	/**---------------------------------------------------------------------**/
		var vFilterList	= arguments[0];
		var vURL    	= arguments[1];
		
		var arrGolfers	= new Array();	arrGolfers	= getData_Golfers();
		var arrCourses	= new Array();	arrCourses	= getData_Courses();
		var arrEvents	= new Array();	arrEvents	= getData_Events();
		var arrSeasons	= new Array();	arrSeasons	= getData_Seasons();
	/**---------------------------------------------------------------------**/
    
    
	document.write("<form method='get'>");
	document.write("   <div class='w3-third w3-container'>");
	document.write("	  <p class='w3-border w3-padding-large w3-padding-32 w3-center w3-light-gray'>");
    
    if (vURL[4] == "" || vURL[4] == undefined) {
		
        document.write("          <input type='hidden' name='e' value='" + vURL[4] + "'>")
		
    }
	
    if (vURL[5] == "" || vURL[5] == undefined) {
		
		document.write("          <input type='hidden' name='c' value='" + vURL[5] + "'>")
		
	}
	
    if (vURL[7] == "" || vURL[7] == undefined) {
    } else {
		
        document.write("          <input type='hidden' name='r' value='" + vURL[7] + "'>")
		
    }
	
    if (vURL[8] == "" || vURL[8] == undefined) {
    } else {
		
        document.write("          <input type='hidden' name='n' value='" + vURL[8] + "'>")
		
    }
    
	if (vFilterList % 2 == 0) {
		
        document.write("Golfer Name: <select name='g'>");
        
        for (x = 0; x < arrGolfers.length; x++) {
			
            document.write("<option value='" + x + "'");
            
            if (x == vURL[3]) {
				
                document.write(" selected");
				
            }
            
            document.write(">" + arrGolfers[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 3 == 0) {
		
		document.write("Course Name: <select name='c'>");
        
        for (x = 0; x < arrCourses.length; x++) {
			
            document.write("<option value='" + x + "'");
            
            if (x == vURL[5]) {
				
                document.write(" selected");
				
            }
            
            document.write(">" + arrCourses[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 5 == 0) {
		
		document.write("Event Name: <select name='e'>");
        
        for (x = 0; x < arrEvents.length; x++) {
			
            document.write("<option value='" + x + "'");
            
            if (x == vURL[4]) {
				
                document.write(" selected");
				
            }
            
            document.write(">" + arrEvents[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 7 == 0) {
		
		document.write("Season Begin: <select name='sb'>");
        
        for (x = 0; x < arrSeasons.length; x++) {
			
            document.write("<option value='" + x + "'");
            
            if (x == vURL[1]) {
				
                document.write(" selected");
				
            }
            
            document.write(">" + arrSeasons[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 11 == 0) {
		
		document.write("Season End: <select name='se'>");
        
        for (x = 0; x < arrSeasons.length; x++) {
			
            document.write("<option value='" + x + "'");
            
            if (x == vURL[2]) {
				
                document.write(" selected");
				
            }
            
            document.write(">" + arrSeasons[x] + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	if (vFilterList % 13 == 0) {
		
		document.write("Minimum Events: <select name='m'>");
        
        for (x = 1; x < 9; x++) {
			
            document.write("<option value='" + x + "'");
            
            if (x == vURL[9]) {
				
                document.write(" selected");
				
            }
            
            document.write(">" + x + "</option>");
        }
        
        document.write("</select><br /><br />");
	}
	
	document.write("           <input type='submit' value='Filter Results'>");
	document.write("	  </p>");
	document.write("   </div>");
	document.write("</form>");
    
}