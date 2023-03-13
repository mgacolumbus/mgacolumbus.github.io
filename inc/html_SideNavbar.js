function html_SideNavbar(pOption) {
    
    var vOption = arguments[0];
    var arrNavigation = new Array();   arrNavigation = getData_Navigation();
    
	document.write("<nav class='w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left' id='mySidebar'>");
	document.write("    <a href='javascript:void(0)' onclick='w3_close()' class='w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large' title='Close Menu'>");
	document.write("        <i class='fa fa-remove'></i>");
	document.write("    </a>");
	/*
    if (vOption == 2) {
        
        document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='recordlist.html'><h8 class='w3-text-teal'><b><< Back to Categories</b></h8></a>");
        
        for (x = 0; x < arrNavigation.length; x++) {
            
            if (arrNavigation[x][0] == 2) {
                
                document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='" + arrNavigation[x][2] + "'>" + arrNavigation[x][1] + "</a>");
                
            }
        
        }
        
    }
    else if (vOption == 3) {
        
        document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='recordlist.html'><h8 class='w3-text-teal'><b><< Back to Categories</b></h8></a>");
        
        for (x = 0; x < arrNavigation.length; x++) {
            
            if (arrNavigation[x][0] == 3) {
                
                document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='" + arrNavigation[x][2] + "'>" + arrNavigation[x][1] + "</a>");
                
            }
        
        }
        
    }
	else {
      */  
        document.write("    <h8 class='w3-bar-item w3-text-teal'><b>Menu</b></h8>");
		
        for (x = 0; x < arrNavigation.length; x++) {
            
            if (arrNavigation[x][0] == 0) {
                
                document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='" + arrNavigation[x][2] + "'>" + arrNavigation[x][1] + "</a>");
                
            }
            
        }
    /*    
	}
	*/
	document.write("</nav>");
	
    /* Overlay effect when opening sidebar on small screens */
    document.write("<div class='w3-overlay w3-hide-large' onclick='w3_close()' style='cursor:pointer' title='close side menu' id='myOverlay'></div>");
    
}