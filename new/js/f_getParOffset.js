function getParOffset(ScoreType) {
	/**---------------------------------------------------------------------**/
		var varScoreType	=	arguments[0];
	/**---------------------------------------------------------------------**/

		 if (varScoreType.indexOf("DblEagle") > -1)		{ return -3; }
	else if (varScoreType.indexOf("Eagle") > -1)		{ return -2; }
	else if (varScoreType.indexOf("Birdie") > -1)		{ return -1; }
	else if (varScoreType.indexOf("Par") > -1)			{ return 0; }
	else if (varScoreType.indexOf("TrpBogey") > -1)		{ return 3; }
	else if (varScoreType.indexOf("DblBogey") > -1)		{ return 2; }
	else if (varScoreType.indexOf("Bogey") > -1)		{ return 1; }
	
	return -999;
}