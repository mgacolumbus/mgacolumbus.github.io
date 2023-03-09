function html_PageHeader(pTitle) {
	
	var vTitle = arguments[0];
	
	if (vTitle != undefined) {
		document.write("<h4 class='w3-text-red w3-center'>" + vTitle + "</h4>");
	}
	
}