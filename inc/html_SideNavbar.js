function html_SideNavbar(pOption) {
    
    var vOption = arguments[0];
    var arrNavigation = new Array();   arrNavigation = getData_Navigation();
    //var arrRecordArray = new Array();   arrRecordArray = getData_RecordList();
    
	document.write("<nav class='w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left' id='mySidebar'>");
	document.write("    <a href='javascript:void(0)' onclick='w3_close()' class='w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large' title='Close Menu'>");
	document.write("        <i class='fa fa-remove'></i>");
	document.write("    </a>");
	
    if (vOption == 1) {
        
        document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='recordlist.html'><h8 class='w3-bar-item w3-text-teal'><b>Career Scoring</b></h8></a>");
        
        for (x = 0; x < arrNavigation.length; x++) {
            
            if (arrNavigation[x][1] == 1) {
                
                document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='" + arrNavigation[x][3] + "'>" + arrNavigation[x][2] + "</a>");
                
            }
        
        }
        
    }
    else if (vOption == 2) {
        
        document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='recordlist.html'><h8 class='w3-bar-item w3-text-teal'><b>Season Scoring</b></h8></a>");
        
        for (x = 0; x < arrNavigation.length; x++) {
            
            if (arrNavigation[x][1] == 2) {
                
                document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='" + arrNavigation[x][3] + "'>" + arrNavigation[x][2] + "</a>");
                
            }
        
        }
        
    }
	else {
        
        document.write("    <h8 class='w3-bar-item w3-text-teal'><b>Menu</b></h8>");
		
        for (x = 0; x < arrNavigation.length; x++) {
            
            if (arrNavigation[x][1] == 0) {
                
                document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='" + arrNavigation[x][3] + "'>" + arrNavigation[x][2] + "</a>");
                
            }
            
        }
        
	}
	
	document.write("</nav>");
	
    /* Overlay effect when opening sidebar on small screens */
    document.write("<div class='w3-overlay w3-hide-large' onclick='w3_close()' style='cursor:pointer' title='close side menu' id='myOverlay'></div>");
    
}