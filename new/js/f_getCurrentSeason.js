function getCurrentSeason() {
	/**---------------------------------------------------------------------**/
		var arrSeasons	=	new Array();
			arrSeasons	=	getData_Seasons();
	/**---------------------------------------------------------------------**/
	
	return arrSeasons[arrSeasons.length - 1];
}