function getTournamentWinnerDetails(Season, Event) {
	/**---------------------------------------------------------------------**/
		var pSeason					=	arguments[0];
		var pEvent					=	arguments[1];
		
		var arrRounds				=	new Array();
			arrRounds				=	getData_Rounds();
		
		var varReturnName			=	"";
		var varReturnScore			=	0;
		var varReturnPenalty		=	0;
	/**---------------------------------------------------------------------**/

	for (r = 0; r < arrRounds.length; r++) {
		
		if (arrRounds[r][0].substr(6,9) == pSeason) {
			
			if (arrRounds[r][1] == pEvent) {

				if (arrRounds[r][4] == 1) {
					
					varReturnName		= arrRounds[r][3];
					varReturnScore		= getRoundScore(arrRounds,r);
					varReturnPenalty	= arrRounds[r][7];
				}
			}
		}
	}
	
	return [varReturnName, varReturnScore, varReturnPenalty];
}