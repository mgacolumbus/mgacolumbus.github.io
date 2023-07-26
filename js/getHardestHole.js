function getHardestHole(URL) {
	var arrScoresArray = new Array();
	const scoresByGolfer = new Map();
	var id = "";
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrScoresArray = getData_Scores(getFilterSettings_Score(URL, x));
		
		for (let i = 0; i < arrScoresArray.length; i++) {
			
			if (URL[16] == "Y") { id = "" + arrScoresArray[i][10] + arrScoresArray[i][2] + arrScoresArray[i][4] + arrScoresArray[i][14]; }
			else if (URL[17] == "Y") { id = "" + arrScoresArray[i][10] + arrScoresArray[i][2] + arrScoresArray[i][4] + arrScoresArray[i][12] }
			else { id = "" + arrScoresArray[i][10] + arrScoresArray[i][2] + arrScoresArray[i][4]; }
			
			if (URL[23] == "Y") { id += arrScoresArray[i][3] + arrScoresArray[i][5]; }

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id, 
					{ 
						golfer: "",
						scoreToParTotal: 0,
						holeCount: 0,
						season: "",
						eventt: "",
						course: "",
						hole: "",
						tee: "",
						par: "",
						yards: ""
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrScoresArray[i][9];
			scoresByGolfer.get(id).scoreToParTotal += arrScoresArray[i][7];
			scoresByGolfer.get(id).holeCount++;
			scoresByGolfer.get(id).season = arrScoresArray[i][14];
			scoresByGolfer.get(id).eventt = arrScoresArray[i][11];
			scoresByGolfer.get(id).course = arrScoresArray[i][10];
			scoresByGolfer.get(id).hole = arrScoresArray[i][2];
			scoresByGolfer.get(id).tee = arrScoresArray[i][3];
			scoresByGolfer.get(id).par = arrScoresArray[i][4];
			scoresByGolfer.get(id).yards = arrScoresArray[i][5];
		}
	}
	
	var vStat = 0;
	
	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoresObj]) => {
		const golfer = scoresObj.golfer;
		const scoreToParTotal = scoresObj.scoreToParTotal;
		const holeCount = scoresObj.holeCount;
		const season = scoresObj.season;
		const eventt = scoresObj.eventt;
		const course = scoresObj.course;
		const hole = scoresObj.hole;
		const tee = scoresObj.tee;
		const par = scoresObj.par;
		const yards = scoresObj.yards;
		
		vStat = ((scoreToParTotal / holeCount)).toFixed(3);
		
		return [
			-1,
			vStat,
			golfer,
			holeCount,
			season,
			eventt,
			course,
			hole,
			tee,
			par,
			yards,
			scoreToParTotal
		];
	});
	
	if (URL[19] != undefined) { arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[3] >= URL[19]); }
	//arrReturnArray = arrReturnArray.filter(scoreCount => scoreCount[1] > 0);
	
	arrReturnArray.sort(function(a,b) {return b[3]-a[3]});
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}