function getScoreActionType(ScoreActionType) {
	/**---------------------------------------------------------------------**/
		var pScoreType	=	arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch (pScoreType) {
		case 0:		return "=";
		case 1:		return "<";
		case 2:		return ">";
		default:	return "Unknown";
	}
}