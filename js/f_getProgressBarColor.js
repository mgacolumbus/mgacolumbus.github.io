function getProgressBarColor(RecordTotal, CurrentTotal, EventCount, optSeason) {
	/**---------------------------------------------------------------------**/
		var pRecordTotal			=	arguments[0] * 1;
		var pCurrentTotal			=	arguments[1] * 1;
		var pEventCount				=	arguments[2] * 1;
		var pCurrentTotalSeason		=	arguments[3] * 1;
		var varCurrentSeason		=	getCurrentSeason();
	/**---------------------------------------------------------------------**/
	
	if (varCurrentSeason != pCurrentTotalSeason)				{return "w3-black";}
	if (pCurrentTotal == 0)										{return "w3-black";}
	if (pCurrentTotal == pRecordTotal)							{return "w3-orange";}
	if (pCurrentTotal / pEventCount >= pRecordTotal / 8)		{return "w3-yellow";}
	if (pCurrentTotal / pEventCount < pRecordTotal / 8)			{return "w3-green";}
	
	return "w3-black";
}