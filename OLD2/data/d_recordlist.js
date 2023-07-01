function getData_RecordList() {
	/**---------------------------------------------------------------------**/
		var arrRecordList	= new Array();
		var arrSeasons		= new Array();	arrSeasons = getData_Seasons();
	/**---------------------------------------------------------------------**/
	
	/*
	
        0 = Category
        1 = Record Title
        2 = Record Subtitle
		3 = Record Filter Setting
        4 = URL
		5 = Record ID
		6 = Decimal Precision
		
	*/
	
    return arrRecordList = [
    
        //Career Scoring Records
		[0, "Total Scoring Avg (Gross)", "", 30030, "record.html?m=1&g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 5, 3],
		[0, "Total Scoring Avg (Net)", "", 30030, "record.html?m=1&g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 6, 3],
        [0, "Total Wins", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 1, 0],
		[0, "Total Runner-Ups", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 3, 0],
		[0, "Total Top 3's", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 7, 0],
		[0, "Total Top 10's", "", 2310, "record.html?g=0&c=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 8, 0],
        
        //Single Season Scoring Records
        [1, "Single-Season Wins", "", 154, "record.html?g=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 2, 0],
		[1, "Single-Season Runner-Ups", "", 154, "record.html?g=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 4, 0],
        [1, "Single-Season Top 3's", "", 154, "record.html?g=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 9, 0],
        [1, "Single-Season Top 10's", "", 154, "record.html?g=0&e=0&sb=0&se=" + (arrSeasons.length - 1) + "&r=", 10, 0],
        
    ]
}
