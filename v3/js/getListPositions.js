function getListPositions(StatsArray) {
	var arrFinal = arguments[0];
	var varPosHold	= 0;
	var varStatHold	= 0;
	var z = 0;
	
	for (p = 0; p < StatsArray.length; p++) {
		
		if (varStatHold != StatsArray[z][1]) {
			varStatHold = StatsArray[z][1];
			varPosHold = (p + 1);
			arrFinal[z][0] = (p + 1);
		} else {
			arrFinal[z][0] = varPosHold;
		}
		
		z++;
	}
	
	return arrFinal;
}