function getRoundScore(RoundArray, RoundIndex) {
	/**---------------------------------------------------------------------**/
		var pRound				=	arguments[0];
		var pRoundIndex			=	arguments[1];
		var varFrontNine		=	0;
		var varBackNine			=	0;
	/**---------------------------------------------------------------------**/
	
	for (rs = 0; rs < 18; rs++)
	{
		if (rs < 9)
		{
			varFrontNine += pRound[pRoundIndex][rs + 8];
		}
		else
		{
			varBackNine += pRound[pRoundIndex][rs + 8];
		}
	}
	
	return [varFrontNine, varBackNine, (varFrontNine + varBackNine)];
}