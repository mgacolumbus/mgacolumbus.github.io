function getSeasonMoneyList(URL) {
	var arrFilters = new Array();
	var arrSeasonArray = new Array();
	const earningsByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		if (URL[4] == '-2') {arrFilters[31] = 'Y';}
		else if (URL[4] == '-3') {arrFilters[31] = 'N';}
		else if (URL[4] != '-1') {arrFilters[29] = getEventName(URL[4]);}
		
		if (URL[3] != '-1') {arrFilters[2] = getGolferName(URL[3]);}
		if (URL[5] != '-1') {arrFilters[28] = getCourseName(URL[5]);}
		
		arrFilters[32] = x;
		arrSeasonArray = getData_Participants(arrFilters);
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
		  const golfer = arrSeasonArray[i][2];
		  const earnings = arrSeasonArray[i][5];
		  
		  if (!earningsByGolfer.has(golfer)) {
			earningsByGolfer.set(golfer, { earnings: 0, eventCount: 0 });
		  }
		  
		  earningsByGolfer.get(golfer).earnings += earnings;
		  earningsByGolfer.get(golfer).eventCount++;
		}
	}

	var arrReturnArray = Array.from(earningsByGolfer, ([golfer, earningsObj]) => {
	  const earnings = earningsObj.earnings.toFixed(2);
	  const eventCount = earningsObj.eventCount;
	  return [golfer, earnings, eventCount];
	}).filter(([, earnings]) => parseFloat(earnings) > 0);
	
	arrReturnArray.sort(function(a,b) {return b[1]-a[1]});
	
	var varPositionHold	= 0;
	var varEarningsHold	= 0;
	var varReturnIndex = 0;
	
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varEarningsHold != arrReturnArray[varReturnIndex][1]) {
			varEarningsHold = arrReturnArray[varReturnIndex][1];
			varPositionHold = (pl + 1);
			arrReturnArray[varReturnIndex][3] = (pl + 1);
		} else {
			arrReturnArray[varReturnIndex][3] = varPositionHold;
		}
		
		varReturnIndex++;
	}
	
	return arrReturnArray;
}