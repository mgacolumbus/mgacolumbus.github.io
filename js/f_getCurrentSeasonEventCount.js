function getCurrentSeasonEventCount() {
	/**---------------------------------------------------------------------**/
		var varCurrentSeason		=	getCurrentSeason();
		var varEventCount			=	0;
		var varDateHold				=	"";
		var arrRounds				=	new Array();
			arrRounds				=	getData_Rounds();
	/**---------------------------------------------------------------------**/
	
	for (e = 0; e < arrRounds.length; e += 4) {

		if (arrRounds[e][0].substr(6,9) == varCurrentSeason) {
		
			if (varDateHold != arrRounds[e][0]) {
				
				varEventCount++;
				varDateHold = arrRounds[e][0];
			}
		}
	}	
	
	return varEventCount;
}