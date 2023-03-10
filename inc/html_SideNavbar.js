function html_SideNavbar(pOption) {
    
    var vOption = arguments[0];
    
	document.write("<nav class='w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left' id='mySidebar'>");
	document.write("    <a href='javascript:void(0)' onclick='w3_close()' class='w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large' title='Close Menu'>");
	document.write("        <i class='fa fa-remove'></i>");
	document.write("    </a>");
	
    if (vOption == 'record.html') {
        document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='recordlist.html'><h8 class='w3-bar-item w3-text-teal'><b>Records &amp; Rankings</b></h8></a>");
        
        var arrRecordArray = new Array();   arrRecordArray = getData_RecordList();
        
        for (x = 0; x < arrRecordArray.length; x++) {
            document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='record.html?r=" + arrRecordArray[x][0] + "'>" + arrRecordArray[x][1] + "</a>");
        }
        //document.write("    ");
    }
	else {
        document.write("    <h8 class='w3-bar-item w3-text-teal'><b>Menu</b></h8>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Golfer Stats</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Course Stats</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Event Stats</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Season Stats</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Chapter Stats</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='recordlist.html'>Records &amp; Rankings</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Achievements</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Chapter Rules</a>");
		document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Calendar</a>");
	}
	
	document.write("</nav>");
	
    /* Overlay effect when opening sidebar on small screens */
    document.write("<div class='w3-overlay w3-hide-large' onclick='w3_close()' style='cursor:pointer' title='close side menu' id='myOverlay'></div>");
    
}