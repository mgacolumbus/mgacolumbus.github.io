function html_SideNavbar() {
    
    document.write("<nav class='w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left' id='mySidebar'>");
    document.write("    <a href='javascript:void(0)' onclick='w3_close()' class='w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large' title='Close Menu'>");
    document.write("        <i class='fa fa-remove'></i>");
    document.write("    </a>");
    document.write("    <h4 class='w3-bar-item'><b>Menu</b></h4>");
    document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Link</a>");
    document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Link</a>");
    document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Link</a>");
    document.write("    <a class='w3-bar-item w3-button w3-hover-black' href='#'>Link</a>");
    document.write("</nav>");
    
    /* Overlay effect when opening sidebar on small screens */
    document.write("<div class='w3-overlay w3-hide-large' onclick='w3_close()' style='cursor:pointer' title='close side menu' id='myOverlay'></div>");
    
}