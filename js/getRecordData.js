function getRecordData(pRecordID, pURL) {
	/**---------------------------------------------------------------------**/
		var vRecordID		= arguments[0];
		var arrURL			= arguments[1];
		
		var arrRecordData	= new Array();
	/**---------------------------------------------------------------------**/
	vRecordID = vRecordID * 1;
	
	switch (vRecordID) {
		
		case  1:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "1"), 1, "desc");		break;
		case  2:		arrRecordData = sortMDArray(getRecord_SeasonEventFinish(arrURL, "1"), 1, "desc");		break;
		case  3:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "2"), 1, "desc");		break;
		case  4:		arrRecordData = sortMDArray(getRecord_SeasonEventFinish(arrURL, "2"), 1, "desc");		break;
		case  5:		arrRecordData = sortMDArray(getRecord_CareerScoringAvg(arrURL, true), 1, "asc");		break;
		case  6:		arrRecordData = sortMDArray(getRecord_CareerScoringAvg(arrURL, false), 1, "asc");		break;
		case  7:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "t3"), 1, "desc");		break;
		case  8:		arrRecordData = sortMDArray(getRecord_CareerEventFinish(arrURL, "t10"), 1, "desc");		break;
		case  9:		arrRecordData = sortMDArray(getRecord_SeasonEventFinish(arrURL, "t3"), 1, "desc");		break;
		case 10:		arrRecordData = sortMDArray(getRecord_SeasonEventFinish(arrURL, "t10"), 1, "desc");		break;
		
	}
	
	return arrRecordData;
	
}