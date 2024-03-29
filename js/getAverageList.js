function getAverageList(URL) {
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	var id = "";
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings_Participant(URL, x));
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
			
			if (URL[16] == "Y") { id = "" + arrSeasonArray[i][2] + arrSeasonArray[i][32]; }
			else { id = "" + arrSeasonArray[i][2]; };

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id,
					{
						golfer: "",
						strokes: 0,
						eventCount: 0,
						penalty: 0,
						season: ""
					}
				);
			}

			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			scoresByGolfer.get(id).strokes += (arrSeasonArray[i][13] + arrSeasonArray[i][14]);
			scoresByGolfer.get(id).eventCount++;
			scoresByGolfer.get(id).season = arrSeasonArray[i][32];

			if (URL[14] == 'Net') {
				scoresByGolfer.get(id).penalty += arrSeasonArray[i][3];
			}
		}
	}

	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoringObj]) => {
		const golfer = scoringObj.golfer;
		const strokes = scoringObj.strokes;
		const penalty = scoringObj.penalty;
		const eventCount = scoringObj.eventCount;
		const season = scoringObj.season;

		return [
			-1,
			((strokes + penalty) / eventCount).toFixed(3),
			golfer,
			eventCount,
			strokes,
			penalty,
			season
		];
	});
	
	arrReturnArray = arrReturnArray.filter(events => events[3] >= URL[12]);
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}