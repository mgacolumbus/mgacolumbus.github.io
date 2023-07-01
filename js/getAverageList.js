function getAverageList(URL, GrossNet) {
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings_Participant(URL, x));
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
			const id = "" + arrSeasonArray[i][2];

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id,
					{
						golfer: "",
						strokes: 0,
						eventCount: 0,
						penalty: 0
					}
				);
			}

			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			scoresByGolfer.get(id).strokes += (arrSeasonArray[i][13] + arrSeasonArray[i][14]);
			scoresByGolfer.get(id).eventCount++;

			if (GrossNet == 'Net') {
				scoresByGolfer.get(id).penalty += arrSeasonArray[i][3];
			}
		}
	}

	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoringObj]) => {
		const golfer = scoringObj.golfer;
		const strokes = scoringObj.strokes;
		const penalty = scoringObj.penalty;
		const eventCount = scoringObj.eventCount;

		return [
			-1,
			((strokes + penalty) / eventCount).toFixed(3),
			golfer,
			eventCount,
			strokes,
			penalty
		];
	});
	
	arrReturnArray = arrReturnArray.filter(events => events[3] >= URL[12]);
	
	arrReturnArray.sort(function(a,b) {return a[1]-b[1]});
	
	return getListPositions(arrReturnArray);
}