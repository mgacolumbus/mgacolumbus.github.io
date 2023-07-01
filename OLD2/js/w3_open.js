// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
	/**---------------------------------------------------------------------**/
	/**---------------------------------------------------------------------**/
    
    if (mySidebar.style.display === "block") {
        
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
    
    } else {

        mySidebar.style.display = "block";
        overlayBg.style.display = "block";
    
    }
}