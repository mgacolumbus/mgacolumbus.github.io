function getData_Navigation() {
    
    var arrNavigation = new Array();
    
    /*
        arrNavigation[0]    =   Category
        arrNavigation[1]    =   Title
        arrNavigation[2]    =   URL
        arrNavigation[3]    =   Subtitle
        arrNavigation[4]    =   Filter Settings
    */
    
    return arrNavigation = [
	
		// Main Menu Items
        [0, "Records &amp; Rankings", "recordlist.html", "", 0],
        
		// Career Scoring Records
		[1, "Career Wins", "record.html?n=1&r=1", "", 2310],
        
		// Single Season Scoring Records
		[2, "Season Wins", "record.html?n=2&r=2", "", 30030],
		
    ]
    
}