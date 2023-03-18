function getRecordData(pRecordID, pURL) {
	
	var vRecordID = arguments[0];
	var arrURL = new Array();   arrURL = arguments[1];
	var arrRecordData = new Array();
	
	switch (vRecordID) {
		case 1:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "t2"), 1, "desc");	break;
		case 2:		arrRecordData = sortMDArray(getRecord_SeasonWins(arrURL), 1, "desc");	break;
		case 3:		arrRecordData = sortMDArray(getRecord_CareerRunnerups(arrURL), 1, "desc");	break;
		case 4:		arrRecordData = sortMDArray(getRecord_SeasonRunnerups(arrURL), 1, "desc");	break;
		case 5:		arrRecordData = sortMDArray(getRecord_CareerScoringAvgGross(arrURL), 1, "asc");	break;
		case 6:		arrRecordData = sortMDArray(getRecord_CareerScoringAvgNet(arrURL), 1, "asc");	break;
	}
	
	return arrRecordData;
	
}