function html_PageHeader(pTitle, pSubtitle) {
	/**---------------------------------------------------------------------**/
		var vTitle		= arguments[0];
		var vSubtitle	= arguments[1];
	/**---------------------------------------------------------------------**/
	
	if (vTitle != undefined) {
		
		document.write("<div class='w3-row'>");
		document.write("	<div class='w3-container'>");
		document.write("		<p class='w3-center'>");
		document.write("			<h3 class='w3-text-red w3-center' style='font-weight: bold;'>" + vTitle + "</h3>");
		
		if (vSubtitle != undefined && vSubtitle != "" && vSubtitle != "undefined") {
			
			document.write("			<h5 class='w3-text-red w3-center' style='font-weight: bold;'>( " + vSubtitle + " )</h5>");
			
		}
		
		document.write("		</p>");
		document.write("	</div>");
		document.write("</div>");
		
	}
	
}