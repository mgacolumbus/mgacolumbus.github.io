function getRecordData(pRecordID, pURL) {
	
	var vRecordID = arguments[0];
	var arrURL = new Array();   arrURL = arguments[1];
	var arrRecordData = new Array();
	
	switch (vRecordID) {
		case 1:		arrRecordData = sortMDArray(getRecord_CareerWins(arrURL), 1, "desc");	break;
		case 2:		arrRecordData = sortMDArray(getRecord_SeasonWins(arrURL), 1, "desc");	break;
		case 3:		arrRecordData = sortMDArray(getRecord_CareerRunnerups(arrURL), 1, "desc");	break;
		case 4:		arrRecordData = sortMDArray(getRecord_SeasonRunnerups(arrURL), 1, "desc");	break;
	}
	
	return arrRecordData;
	
}