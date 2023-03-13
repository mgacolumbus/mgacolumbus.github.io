function getData_Navigation() {
    
    var arrNavigation = new Array();
    
    /*
        arrNavigation[0]    =   Category
        arrNavigation[1]    =   Title
        arrNavigation[2]    =   URL
        arrNavigation[3]    =   Subtitle
    */
    
    return arrNavigation = [
	
		// Main Menu Items
        [0, "MGA Chapter Page", "http://mgatour.com/chapters/columbus", ""],
        [0, "Records &amp; Rankings", "recordcategory.html", ""],
        
        [0, "Testing Page", "test.html", "", 0],
        
        // Recordlist Options
        [1, "Career Scoring Records", "recordlist.html?n=2", ""],
        [1, "Single Season Scoring Records", "recordlist.html?n=3", ""],
        [1, "Single Event Scoring Records", "recordlist.html?n=4", ""],
        [1, "Single Hole Scoring Records", "recordlist.html?n=5", ""],
        
		// Career Scoring Records
		[2, "Career Wins", "record.html?r=1", ""],
        
		// Single Season Scoring Records
		[3, "Season Wins", "record.html?r=2", ""],
		
    ]
    
}