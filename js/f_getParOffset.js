function getParOffset(ScoreType) {
	/**---------------------------------------------------------------------**/
		var pScoreType	=	arguments[0];
	/**---------------------------------------------------------------------**/

		 if (pScoreType.indexOf("DblEagle") > -1)		{ return -3; }
	else if (pScoreType.indexOf("Eagle") > -1)			{ return -2; }
	else if (pScoreType.indexOf("Birdie") > -1)			{ return -1; }
	else if (pScoreType.indexOf("Par") > -1)			{ return 0; }
	else if (pScoreType.indexOf("TrpBogey") > -1)		{ return 3; }
	else if (pScoreType.indexOf("DblBogey") > -1)		{ return 2; }
	else if (pScoreType.indexOf("Bogey") > -1)			{ return 1; }
	
	return -999;
}