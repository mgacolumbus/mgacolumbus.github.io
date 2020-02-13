function getProgressBarColor(LeadingTotal, LeadingTotalCount, ItemTotal, ItemTotalCount, RecordTotal, RecordTotalCount, Season) {
	/**---------------------------------------------------------------------**/
		var pLeadingTotal			=	arguments[0] * 1;
		var pLeadingTotalCount		=	arguments[1] * 1;
		var pItemTotal				=	arguments[2] * 1;
		var pItemTotalCount			=	arguments[3] * 1;
		var pRecordTotal			=	arguments[4] * 1;
		var pRecordTotalCount		=	arguments[5] * 1;
		var pSeason					=	arguments[6] * 1;
		var varCurrentSeason		=	getCurrentSeason();
	/**---------------------------------------------------------------------**/
	
	if (pItemTotal == 0)															{return "w3-black";}
	if (pRecordTotal == 0)															{return "w3-black";}
	if (pSeason != varCurrentSeason)												{return "w3-black";}
	if (pRecordTotal == pItemTotal)													{return "w3-orange";}
	if ((pItemTotal / pItemTotalCount) >= (pRecordTotal / pRecordTotalCount))		{return "w3-yellow"}
	if ((pItemTotal / pItemTotalCount) < (pRecordTotal / pRecordTotalCount))		{return "w3-green"}
	

	return "w3-blue";
}