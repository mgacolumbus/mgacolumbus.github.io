function getAverageList(URL, GrossNet) {
	var arrFilters = new Array();
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	
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
			const strokes = (arrSeasonArray[i][13] + arrSeasonArray[i][14]);
			const penalty = arrSeasonArray[i][3];

			if (!scoresByGolfer.has(golfer)) {
				scoresByGolfer.set(golfer, { strokes: 0, eventCount: 0, penalty: 0 });
			}

			scoresByGolfer.get(golfer).strokes += strokes;
			scoresByGolfer.get(golfer).eventCount++;

			if (GrossNet == 'Net') {
				scoresByGolfer.get(golfer).penalty += penalty;
			}
		}
	}

	var arrReturnArray = Array.from(scoresByGolfer, ([golfer, scoringObj]) => {
	  const strokes = scoringObj.strokes;
	  const penalty = scoringObj.penalty;
	  const eventCount = scoringObj.eventCount;
	  return [golfer, ((strokes + penalty) / eventCount).toFixed(3), eventCount];
	});
	
	arrReturnArray = arrReturnArray.filter(events => events[2] > 1);
	
	arrReturnArray.sort(function(a,b) {return a[1]-b[1]});
	
	var varPositionHold	= 0;
	var varAverageHold	= 0;
	var varReturnIndex = 0;
	
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varAverageHold != arrReturnArray[varReturnIndex][1]) {
			varAverageHold = arrReturnArray[varReturnIndex][1];
			varPositionHold = (pl + 1);
			arrReturnArray[varReturnIndex][3] = (pl + 1);
		} else {
			arrReturnArray[varReturnIndex][3] = varPositionHold;
		}
		
		varReturnIndex++;
	}
	
	return arrReturnArray;
}