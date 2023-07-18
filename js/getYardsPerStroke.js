function getYardsPerStroke(URL) {
	var arrScoresArray = new Array();
	const scoresByGolfer = new Map();
	var id = "";
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrScoresArray = getData_Scores(getFilterSettings_Score(URL, x));
		
		for (let i = 0; i < arrScoresArray.length; i++) {
			if (URL[16] == "Y") { id = "" + arrScoresArray[i][9] + arrScoresArray[i][14]; }
			else if (URL[17] == "Y") { id = "" + arrScoresArray[i][9] + arrScoresArray[i][12]; }
			else { id = "" + arrScoresArray[i][9]; }

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id, 
					{ 
						golfer: "",
						strokes: 0,
						yards: 0,
						holeCount: 0,
						season: "",
						eventt: "",
						course: "",
						par: 0
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrScoresArray[i][9];
			scoresByGolfer.get(id).holeCount++;
			scoresByGolfer.get(id).yards += arrScoresArray[i][5];
			scoresByGolfer.get(id).strokes += arrScoresArray[i][6];
			scoresByGolfer.get(id).season = arrScoresArray[i][14];
			scoresByGolfer.get(id).eventt = arrScoresArray[i][11];
			scoresByGolfer.get(id).course = arrScoresArray[i][10];
			scoresByGolfer.get(id).par = arrScoresArray[i][4];
		}
	}
	
	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoresObj]) => {
		const golfer = scoresObj.golfer;
		const strokes = scoresObj.strokes;
		const holeCount = scoresObj.holeCount;
		const season = scoresObj.season;
		const yards = scoresObj.yards;
		const eventt = scoresObj.eventt;
		const course = scoresObj.course;
		const par = scoresObj.par;
		
		return [
			-1,
			(yards / strokes).toFixed(3),
			golfer,
			holeCount,
			strokes,
			yards,
			season,
			eventt,
			course,
			par
		];
	});
	
	if (URL[19] != undefined) { arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[3] >= URL[19]); }
	
	arrReturnArray.sort(function(a,b) {return b[1]-a[1]});
	
	return getListPositions(arrReturnArray);
}