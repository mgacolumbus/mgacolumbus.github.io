function getSeasonMoneyList(URL) {
	var arrSeasonArray = new Array();
	const earningsByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings_Participant(URL, x));
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
			const id = "" + arrSeasonArray[i][2];

			if (!earningsByGolfer.has(id)) {
				earningsByGolfer.set(
					id,
					{
						golfer: "",
						earnings: 0,
						eventCount: 0 
					}
				);
			}

			earningsByGolfer.get(id).golfer = arrSeasonArray[i][2];
			earningsByGolfer.get(id).earnings += arrSeasonArray[i][5];
			earningsByGolfer.get(id).eventCount++;
		}
	}

	var arrReturnArray = Array.from(earningsByGolfer, ([id, earningsObj]) => {
		const golfer = earningsObj.golfer;
		const earnings = earningsObj.earnings;
		const eventCount = earningsObj.eventCount;
		
		return [
			-1,
			earnings.toFixed(2),
			golfer,
			eventCount
		];
	});
	
	arrReturnArray = arrReturnArray.filter(earnings => earnings[1] > 0);
	
	arrReturnArray.sort(function(a,b) {return b[1]-a[1]});
	
	return getListPositions(arrReturnArray);
}