function getRoundScore(RoundArray, RoundIndex) {
	/**---------------------------------------------------------------------**/
		var pRound				=	arguments[0];
		var pRoundIndex			=	arguments[1];
		var varFrontNine		=	0;
		var varBackNine			=	0;
	/**---------------------------------------------------------------------**/
	
	for (s = 0; s < 18; s++)
	{
		if (s < 9)
		{
			varFrontNine += pRound[pRoundIndex][s + 8];
		}
		else
		{
			varBackNine += pRound[pRoundIndex][s + 8];
		}
	}
	
	return [varFrontNine, varBackNine, (varFrontNine + varBackNine)];
}