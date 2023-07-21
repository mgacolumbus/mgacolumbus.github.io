function getScoringAverageByPar(URL) {
	var arrScoresArray = new Array();
	const scoresByGolfer = new Map();
	var id = "";
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrScoresArray = getData_Scores(getFilterSettings_Score(URL, x));
		
		for (let i = 0; i < arrScoresArray.length; i++) {
			if (URL[16] == "Y") { id = "" + arrScoresArray[i][9] + arrScoresArray[i][14]; }
			else { id = "" + arrScoresArray[i][9]; };

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id, 
					{ 
						golfer: "",
						scoreCount: 0,
						holeCount: 0,
						season: ""
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrScoresArray[i][9];
			scoresByGolfer.get(id).holeCount++;
			scoresByGolfer.get(id).scoreCount += arrScoresArray[i][6];
			scoresByGolfer.get(id).season = arrScoresArray[i][14];
		}
	}
	
	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoresObj]) => {
		const golfer = scoresObj.golfer;
		const scoreCount = scoresObj.scoreCount;
		const holeCount = scoresObj.holeCount;
		const season = scoresObj.season;
		
		return [
			-1,
			(scoreCount / holeCount).toFixed(3),
			golfer,
			holeCount,
			scoreCount,
			season
		];
	});
	
	if (URL[19] != undefined) { arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[3] >= URL[19]); }
	
	arrReturnArray.sort(function(a,b) {return b[3]-a[3]});
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	
	return getListPositions(arrReturnArray);
}