function getData_RecordList() {
	/**---------------------------------------------------------------------**/
		var arrRecordList	=	new Array();
		
		var arrSeasons	=	new Array();
			arrSeasons	=	getData_Seasons();
	/**---------------------------------------------------------------------**/
	
	/*
        arrRecordList[0]    =   Category
        arrRecordList[1]    =   Record Title
        arrRecordList[2]    =   Record Subtitle
		arrRecordList[3]	=	Record Filter Setting
        arrRecordList[4]    =   URL
		arrRecordList[5]	=	Record ID
	*/
	
    arrRecordList = [
    
        //Career Scoring Records
        [0, "Career Wins", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 1],
        
        //Single Season Scoring Records
        [1, "Single-Season Wins", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 2]
        
    ]

	return arrRecordList;
}
