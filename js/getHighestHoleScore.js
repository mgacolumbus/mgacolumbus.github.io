function getHighestHoleScore(URL) {
	var arrScoresArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrScoresArray = getData_Scores(getFilterSettings_Score(URL, x));
		
		for (let i = 0; i < arrScoresArray.length; i++) {
			const id = "" + arrScoresArray[i][9] + arrScoresArray[i][12] + arrScoresArray[i][2];

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id, 
					{ 
						golfer: "",
						course: "",
						hole: 0,
						tee: "",
						yards: 0,
						par: 0,
						score: 0,
						date: "",
						pid: ""
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrScoresArray[i][9];
			scoresByGolfer.get(id).course = arrScoresArray[i][10];
			scoresByGolfer.get(id).hole = arrScoresArray[i][2];
			scoresByGolfer.get(id).tee = arrScoresArray[i][3];
			scoresByGolfer.get(id).yards = arrScoresArray[i][5];
			scoresByGolfer.get(id).par = arrScoresArray[i][4];
			scoresByGolfer.get(id).score = arrScoresArray[i][6];
			scoresByGolfer.get(id).date = arrScoresArray[i][12];
			scoresByGolfer.get(id).pid = arrScoresArray[i][1];
		}
	}
	
	var vStat = 0;
	
	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoresObj]) => {
		const golfer = scoresObj.golfer;
		const course = scoresObj.course;
		const hole = scoresObj.hole;
		const tee = scoresObj.tee;
		const yards = scoresObj.yards;
		const par = scoresObj.par;
		const score = scoresObj.score;
		const date = scoresObj.date;
		const pid = scoresObj.pid;
		
		return [
			-1,
			score,
			golfer,
			course,
			hole,
			tee,
			yards,
			par,
			date,
			pid
		];
	});
	
	arrReturnArray = arrReturnArray.filter(scores => scores[1] >= 10);
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}