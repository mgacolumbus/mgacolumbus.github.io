function getLowestRound(URL) {
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings_Participant(URL, x));
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
			const id = "" + arrSeasonArray[i][2] + arrSeasonArray[i][30];

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id,
					{
						golfer: "",
						course: "",
						eventname: "",
						strokes: 0,
						penalty: 0,
						date: "",
						pid: 0
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			scoresByGolfer.get(id).course = arrSeasonArray[i][28];
			scoresByGolfer.get(id).eventname = arrSeasonArray[i][29];
			scoresByGolfer.get(id).strokes = (arrSeasonArray[i][13] + arrSeasonArray[i][14]);
			scoresByGolfer.get(id).date = arrSeasonArray[i][30];
			scoresByGolfer.get(id).pid = arrSeasonArray[i][0];

			if (URL[14] == 'Net') {
				scoresByGolfer.get(id).penalty = arrSeasonArray[i][3];
			}
		}
	}

	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoringObj]) => {
		const golfer = scoringObj.golfer;
		const course = scoringObj.course;
		const eventname = scoringObj.eventname;
		const strokes = scoringObj.strokes;
		const penalty = scoringObj.penalty;
		const date = scoringObj.date;
		const pid = scoringObj.pid;
	  
		return [
			-1,
			(strokes + penalty),
			golfer,
			course,
			eventname,
			date,
			penalty,
			pid
		];
	});
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}