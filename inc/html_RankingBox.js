function html_RankingBox(pURL) {
	
    var vURL = arguments[0];
    
    document.write("<div class='w3-twothird w3-container'>");
	document.write("	<p class='w3-center'>");
    
    document.write(getGolferName(vURL[3]));
    
    document.write("    </p>");
	document.write("</div>");
	
}