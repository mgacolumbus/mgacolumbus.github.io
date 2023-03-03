function getScoreType(ScoreType) {
	/**---------------------------------------------------------------------**/
		var pScoreType	=	arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch (pScoreType) {
		case 0:		return "DblEagle";
		case 1:		return "Eagle";
		case 2:		return "Birdie";
		case 3:		return "Par";
		case 4:		return "Bogey";
		case 5:		return "DblBogey";
		case 6:		return "TrpBogey";
		default:	return "Unknown";
	}
}