function getSeasonMoneyList(URL) {
	var arrSeasonArray = new Array();
	const earningsByGolfer = new Map();
	var id = "";
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings_Participant(URL, x));
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
			if (URL[16] == "Y") { id = "" + arrSeasonArray[i][2] + arrSeasonArray[i][32]; }
			else { id = "" + arrSeasonArray[i][2]; }

			if (!earningsByGolfer.has(id)) {
				earningsByGolfer.set(
					id,
					{
						golfer: "",
						earnings: 0,
						eventCount: 0,
						season: ""
					}
				);
			}

			earningsByGolfer.get(id).golfer = arrSeasonArray[i][2];
			earningsByGolfer.get(id).earnings += arrSeasonArray[i][5];
			earningsByGolfer.get(id).eventCount++;
			earningsByGolfer.get(id).season = arrSeasonArray[i][32];
		}
	}
	
	var vStat = 0;

	var arrReturnArray = Array.from(earningsByGolfer, ([id, earningsObj]) => {
		const golfer = earningsObj.golfer;
		const earnings = earningsObj.earnings;
		const eventCount = earningsObj.eventCount;
		const season = earningsObj.season;
		
		if (URL[15] == 'Y') { vStat = (earnings / eventCount).toFixed(3); }
		else { vStat = earnings.toFixed(2); };
		
		return [
			-1,
			vStat,
			golfer,
			eventCount,
			earnings.toFixed(2),
			season
		];
	});
	
	arrReturnArray = arrReturnArray.filter(earnings => earnings[3] >= URL[12]);
	arrReturnArray = arrReturnArray.filter(earnings => earnings[1] > 0);
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}