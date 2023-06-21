function getScoretypePercentRecord(URL) {
	var arrFilters = new Array();
	var arrScoresArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		if (URL[4] == '-2') {arrFilters[13] = 'Y';}
		else if (URL[4] == '-3') {arrFilters[13] = 'N';}
		else if (URL[4] != '-1') {arrFilters[11] = getEventName(URL[4]);}
		
		if (URL[3] != '-1') {arrFilters[9] = getGolferName(URL[3]);}
		if (URL[5] != '-1') {arrFilters[10] = getCourseName(URL[5]);}
		
		arrFilters[14] = x;
		
		arrScoresArray = getData_Scores(arrFilters);
		
		for (let i = 0; i < arrScoresArray.length; i++) {
			const golfer = arrScoresArray[i][9];

			if (!scoresByGolfer.has(golfer)) {
				scoresByGolfer.set(golfer, { scoreCount: 0, holeCount: 0 });
			}
			
			if (URL[8] == "4" && arrScoresArray[i][7] > 3) {
				scoresByGolfer.get(golfer).scoreCount++;
			}
			else if (URL[8] == "10" && arrScoresArray[i][7] > 0) {
				scoresByGolfer.get(golfer).scoreCount++;
			}
			else if (URL[8] == "-10" && arrScoresArray[i][7] <= 0) {
				scoresByGolfer.get(golfer).scoreCount++;
			}
			else if (URL[8] == "-9" && arrScoresArray[i][7] <= 1) {
				scoresByGolfer.get(golfer).scoreCount++;
			}
			else if (arrScoresArray[i][7] == URL[8]) {
				scoresByGolfer.get(golfer).scoreCount++;
			}
			scoresByGolfer.get(golfer).holeCount++;
		}
	}
	
	var arrReturnArray = Array.from(scoresByGolfer, ([golfer, scoresObj]) => {
		const scoreCount = scoresObj.scoreCount;
		const holeCount = scoresObj.holeCount;
		return [golfer, ((scoreCount / holeCount) * 100).toFixed(3), holeCount];
	});
	
	arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[2] >= (URL[12] * 18));
	
	arrReturnArray.sort(function(a,b) {return b[2]-a[2]});
	arrReturnArray.sort(function(a,b) {return b[1]-a[1]});
	
	var varPositionHold = 0;
	var varScoreCountHold = 0;
	var varReturnIndex = 0;
	
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varScoreCountHold != arrReturnArray[varReturnIndex][1]) {
			varScoreCountHold = arrReturnArray[varReturnIndex][1];
			varPositionHold = (pl + 1);
			arrReturnArray[varReturnIndex][3] = (pl + 1);
		} else {
			arrReturnArray[varReturnIndex][3] = varPositionHold;
		}
		
		varReturnIndex++;
	}
	
	return arrReturnArray;
}