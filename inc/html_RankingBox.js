function html_RankingBox(pURL, pDataArray) {
	
    var vURL = arguments[0];
    var vDataArray = new Array();  vDataArray = arguments[1];
    
    
    //if a data array is passed in, skip calculating the ranking and just display it
    //otherwise calculate the ranking based on the URL info passed in
    
    
    document.write("<div class='w3-twothird w3-container'>");
    document.write("    <p class='w3-center'>");
    
    document.write(getGolferName(vURL[3]));
    
    document.write("    </p>");
	document.write("</div>");
	
}