function getScoretypePercentRecord(URL) {
	var arrScoresArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrScoresArray = getData_Scores(getFilterSettings_Score(URL, x));
		
		for (let i = 0; i < arrScoresArray.length; i++) {
			const id = "" + arrScoresArray[i][9];

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id,
					{
						golfer: "",
						scoreCount: 0,
						holeCount: 0
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrScoresArray[i][9];
			
			if (URL[8] == "4" && arrScoresArray[i][7] > 3) {
				scoresByGolfer.get(id).scoreCount++;
			}
			else if (URL[8] == "10" && arrScoresArray[i][7] > 0) {
				scoresByGolfer.get(id).scoreCount++;
			}
			else if (URL[8] == "-10" && arrScoresArray[i][7] <= 0) {
				scoresByGolfer.get(id).scoreCount++;
			}
			else if (URL[8] == "-9" && arrScoresArray[i][7] <= 1) {
				scoresByGolfer.get(id).scoreCount++;
			}
			else if (arrScoresArray[i][7] == URL[8]) {
				scoresByGolfer.get(id).scoreCount++;
			}
			scoresByGolfer.get(id).holeCount++;
		}
	}
	
	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoresObj]) => {
		const golfer = scoresObj.golfer;
		const scoreCount = scoresObj.scoreCount;
		const holeCount = scoresObj.holeCount;
		
		return [
			-1,
			((scoreCount / holeCount) * 100).toFixed(3),
			golfer,
			holeCount
		];
	});
	
	arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[3] >= (URL[12] * 18));
	
	arrReturnArray.sort(function(a,b) {return b[3]-a[3]});
	arrReturnArray.sort(function(a,b) {return b[1]-a[1]});
	
	return getListPositions(arrReturnArray);
}