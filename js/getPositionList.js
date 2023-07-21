function getPositionList(URL) {
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
						posCount: 0,
						eventCount: 0,
						season: ""
					}
				);
			}

			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			if (arrSeasonArray[i][4] == URL[7]) {
				scoresByGolfer.get(id).posCount++;
			} else if (URL[7].substring(0,1) == "t" && arrSeasonArray[i][4] <= URL[7].substring(1,5) && arrSeasonArray[i][4] > 0) {
				scoresByGolfer.get(id).posCount++;
			} else if (arrSeasonArray[i][4] == URL[7] && URL[7] == 0) {
				scoresByGolfer.get(id).posCount++;
			}
			scoresByGolfer.get(id).eventCount++;
			scoresByGolfer.get(id).season = arrSeasonArray[i][32];
		}
	}
	
	var vStat = 0;

	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoringObj]) => {
		const golfer = scoringObj.golfer;
		const posCount = scoringObj.posCount;
		const eventCount = scoringObj.eventCount;
		const season = scoringObj.season;
		
		if (URL[15] == 'Y') { vStat = ((posCount / eventCount) * 100).toFixed(3); }
		else { vStat = posCount; };

		return [
			-1,
			vStat,
			golfer,
			eventCount,
			posCount,
			season
		];
	});
	
	if (URL[15] == 'Y') { arrReturnArray = arrReturnArray.filter(events => events[3] >= URL[12]); }
	arrReturnArray = arrReturnArray.filter(events => events[1] > 0);
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}