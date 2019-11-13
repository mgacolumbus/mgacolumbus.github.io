function html_RecordList(ListType) {
	/**---------------------------------------------------------------------**/
		var varListType		=	arguments[0];
		var arrRecordList	=	new Array();
	/**---------------------------------------------------------------------**/
	
		 if (varListType == "AllTime")			{arrRecordList = getData_AllTimeRecordsList();}
	else if (varListType == "SingleSeason")		{arrRecordList = getData_SingleSeasonRecordsList();}
	else if (varListType == "SingleEvent")		{arrRecordList = getData_SingleEventRecordsList();}
	
	document.write('<table class="w3-table w3-white">');
	
	for (r = 0; r < arrRecordList.length; r++) {
		
		document.write('	<tr>');
		document.write('		<td width="30px" align="center"><i class="fa ' + arrRecordList[r][2] + ' w3-text-' + arrRecordList[r][3] + ' w3-large"></i></td>');
		document.write('		<td><a href="' + arrRecordList[r][1] + '">' + arrRecordList[r][0] + '</a></td>');
		document.write('	</tr>');
	}
	
	document.write('</table>');
}