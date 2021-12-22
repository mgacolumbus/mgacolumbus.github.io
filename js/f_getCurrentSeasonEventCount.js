function getCurrentSeasonEventCount() {
	/**---------------------------------------------------------------------**/
		var varCurrentSeason		=	getCurrentSeason();
		var varEventCount			=	0;
		var varDateHold				=	"";
		var arrRounds				=	new Array();
			arrRounds				=	getData_Rounds();
	/**---------------------------------------------------------------------**/
	
	for (eee = 0; eee < arrRounds.length; eee += 4) {

		if (arrRounds[eee][0].substr(6,9) == varCurrentSeason) {
		
			if (varDateHold != arrRounds[eee][0]) {
				
				varEventCount++;
				varDateHold = arrRounds[eee][0];
			}
		}
	}	
	
	return varEventCount;
}