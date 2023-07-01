function getData_Navigation() {
    /**---------------------------------------------------------------------**/
		var arrNavigation	= new Array();
	/**---------------------------------------------------------------------**/
    
    /*
	
        0 = Category
        1 = Title
        2 = Subtitle
        3 = Filter setting
        4 = URL
		
    */
    
    return arrNavigation = [
	
		// Main Menu Items
        [0, "MGA Chapter Page", "", 0, "http://mgatour.com/chapters/columbus"],
        [0, "Records &amp; Rankings", "", 0, "recordcategory.html"],
        [0, "Event Results", "", 0, "eventcategory.html"],
        
        //[0, "Testing Page", "", 0, "test.html"],
        
        // Recordlist Options
        [1, "Career Scoring Records", "", 0, "recordlist.html?n=0"],
        [1, "Single Season Scoring Records", "", 0, "recordlist.html?n=1"],
        //[1, "Single Event Scoring Records", "", 0, "recordlist.html?n=2"],
        //[1, "Single Hole Scoring Records", "", 0, "recordlist.html?n=3"],
		
    ]
    
}