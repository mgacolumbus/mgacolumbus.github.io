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
		arrRecordList[6]	=	Decimal Precision
	*/
	
    arrRecordList = [
    
        //Career Scoring Records
        [0, "Career Wins", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 1, 0],
		[0, "Career Runner-Ups", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 3, 0],
		[0, "Career Scoring Avg (Gross)", "Minimum Events = ", 30030, "record.html?m=1&g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 5, 3],
		[0, "Career Scoring Avg (Net)", "Minimum Events = ", 30030, "record.html?m=1&g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 6, 3],
        
        //Single Season Scoring Records
        [1, "Single-Season Wins", "", 770, "record.html?g=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 2, 0],
		[1, "Single-Season Runner-Ups", "", 770, "record.html?g=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 4, 0],
        
    ]

	return arrRecordList;
}
