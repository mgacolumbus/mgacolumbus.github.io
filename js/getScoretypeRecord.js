function getScoretypeRecord(URL) {
	var arrScoresArray = new Array();
	const scoresByGolfer = new Map();
	var id = "";
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrScoresArray = getData_Scores(getFilterSettings_Score(URL, x));
		
		for (let i = 0; i < arrScoresArray.length; i++) {
			
			if (URL[16] == "Y") { id = "" + arrScoresArray[i][9] + arrScoresArray[i][14]; }
			else if (URL[17] == "Y") { id = "" + arrScoresArray[i][9] + arrScoresArray[i][12] }
			else { id = "" + arrScoresArray[i][9]; }

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id, 
					{ 
						golfer: "",
						scoreCount: 0,
						holeCount: 0,
						season: "",
						eventt: "",
						course: ""
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrScoresArray[i][9];
			
			if (URL[8] == "4" && arrScoresArray[i][7] > 3) {
				scoresByGolfer.get(id).scoreCount++;
			}
			else if (URL[8] == "10" && arrScoresArray[i][7] > 1) {
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
			scoresByGolfer.get(id).season = arrScoresArray[i][14];
			scoresByGolfer.get(id).eventt = arrScoresArray[i][11];
			scoresByGolfer.get(id).course = arrScoresArray[i][10];
		}
	}
	
	var vStat = 0;
	
	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoresObj]) => {
		const golfer = scoresObj.golfer;
		const scoreCount = scoresObj.scoreCount;
		const holeCount = scoresObj.holeCount;
		const season = scoresObj.season;
		const eventt = scoresObj.eventt;
		const course = scoresObj.course;
		
		if (URL[15] == 'Y') { vStat = ((scoreCount / holeCount) * 100).toFixed(3); }
		else { vStat = scoreCount; };
		
		return [
			-1,
			vStat,
			golfer,
			holeCount,
			season,
			eventt,
			course
		];
	});
	
	if (URL[19] != undefined) { arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[3] >= URL[19]); }
	arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[1] > 0);
	
	arrReturnArray.sort(function(a,b) {return b[3]-a[3]});
	arrReturnArray.sort(function(a,b) {return b[1]-a[1]});
	
	return getListPositions(arrReturnArray);
}