function html_EventButtons() {
    /**---------------------------------------------------------------------**/
		var arrData			= new Array();		arrData = getData_Tournaments();
		
		var z				= 0;
		var vSeasonHold		= 0;
	/**---------------------------------------------------------------------**/
	
	arrData.sort(function(a, b) {
						var avalue = a[0],
							bvalue = b[0];
						if (avalue < bvalue) {
							return 1;
						}
						if (avalue > bvalue) {
							return -1;
						}
						return 0;
					});
	
	document.write("<div class='w3-row'>");
	
	for (x = 0; x < arrData.length; x++) {
		
		if (vSeasonHold != arrData[x][5]) {
			
			z = 0;
			vSeasonHold = arrData[x][5]
			
			document.write("</div>");
			document.write("<div class='w3-row'>");
			document.write("<br /><h3 class='w3-center'>" + vSeasonHold + "</h3><br />");
			
		}
		
		z++;
		
		document.write("<div class='w3-quarter w3-container'>");
		document.write("    <a href='eventdetail.html?t=" + arrData[x][0] + "' style='text-decoration: none;'>");
		document.write("        <p class='w3-border w3-padding-large w3-padding-32 w3-center w3-light-gray'>");
		document.write(arrData[x][5] + " " + arrData[x][2] + "<br />@ " + arrData[x][1]);
		document.write("        </p>");
		document.write("    </a>");
		document.write("</div>");
		
		if (z % 4 == 0) {

			document.write("</div>");
			document.write("<div class='w3-row'>");

		}
		
	}
	
	document.write("</div>");
 
}