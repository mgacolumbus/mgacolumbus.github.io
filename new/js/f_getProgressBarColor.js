function getProgressBarColor(RecordTotal, CurrentTotal, EventCount, optSeason) {
	/**---------------------------------------------------------------------**/
		var varRecordTotal			=	arguments[0];
		var varCurrentTotal			=	arguments[1];
		var varEventCount			=	arguments[2];
		var varCurrentTotalSeason	=	arguments[3];
		var varCurrentSeason		=	getCurrentSeason();
	/**---------------------------------------------------------------------**/
	
	varRecordTotal = varRecordTotal * 1;
	varCurrentTotal = varCurrentTotal * 1;
	varEventCount = varEventCount * 1;
	varCurrentTotalSeason = varCurrentTotalSeason * 1;
	
	if (varCurrentSeason != varCurrentTotalSeason)				{return "w3-black";}
	if (varCurrentTotal == 0)									{return "w3-black";}
	if (varCurrentTotal == varRecordTotal)						{return "w3-orange";}
	if (varCurrentTotal / varEventCount >= varRecordTotal / 8)	{return "w3-yellow";}
	if (varCurrentTotal / varEventCount < varRecordTotal / 8)	{return "w3-green";}
	
	return "w3-black";
}