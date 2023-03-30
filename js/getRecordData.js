function getRecordData(pRecordID, pURL) {
	
	var vRecordID = arguments[0];
	var arrURL = new Array();   arrURL = arguments[1];
	var arrRecordData = new Array();
	
	switch (vRecordID) {
		case 1:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "1"), 1, "desc");	break;
		case 2:		arrRecordData = sortMDArray(getRecord_SeasonEventFinish(arrURL, "1"), 1, "desc");	break;
		case 3:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "2"), 1, "desc");	break;
		case 4:		arrRecordData = sortMDArray(getRecord_SeasonEventFinish(arrURL, "2"), 1, "desc");	break;
		case 5:		arrRecordData = sortMDArray(getRecord_CareerScoringAvg(arrURL, true), 1, "asc");	break;
		case 6:		arrRecordData = sortMDArray(getRecord_CareerScoringAvg(arrURL, false), 1, "asc");	break;
		case 7:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "t3"), 1, "desc");	break;
	}
	
	return arrRecordData;
	
}