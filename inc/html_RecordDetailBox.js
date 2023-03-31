function html_RecordDetailBox(pURL, pRecordID) {
	/**---------------------------------------------------------------------**/
		var arrURL		= arguments[0];
		var vRecordID	= arguments[1];
		
		var arrDisplay	= new Array();		arrDisplay = getRecordData(vRecordID, arrURL);
	/**---------------------------------------------------------------------**/
	
    document.write("<div class='w3-container'>");
    document.write("    <p class='w3-left'>");
	document.write(arrDisplay[arrURL[10]][2]);
    document.write("    </p>");
	document.write("</div>");
	
}