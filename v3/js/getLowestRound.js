function getLowestRound(URL, GrossNet) {
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings(URL, x));
		
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
						date: ""
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			scoresByGolfer.get(id).course = arrSeasonArray[i][28];
			scoresByGolfer.get(id).eventname = arrSeasonArray[i][29];
			scoresByGolfer.get(id).strokes = (arrSeasonArray[i][13] + arrSeasonArray[i][14]);
			scoresByGolfer.get(id).date = arrSeasonArray[i][30];

			if (GrossNet == 'Net') {
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
	  
		return [
			-1,
			golfer,
			course,
			eventname,
			(strokes + penalty),
			date
		];
	});
	
	arrReturnArray.sort(function(a,b) {return a[4]-b[4]});
	
	var varPositionHold	= 0;
	var varScoreHold	= 0;
	var z = 0;
	
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varScoreHold != arrReturnArray[z][4]) {
			varScoreHold = arrReturnArray[z][4];
			varPositionHold = (pl + 1);
			arrReturnArray[z][0] = (pl + 1);
		} else {
			arrReturnArray[z][0] = varPositionHold;
		}
		
		z++;
	}
	
	return arrReturnArray;
}