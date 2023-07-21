function getLowestFrontBack(URL) {
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings_Participant(URL, x));
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
			//Front 9
			var id = "" + arrSeasonArray[i][2] + arrSeasonArray[i][30] + "Front";

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id,
					{
						golfer: "",
						course: "",
						eventname: "",
						strokes: 0,
						date: "",
						side: ""
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			scoresByGolfer.get(id).course = arrSeasonArray[i][28];
			scoresByGolfer.get(id).eventname = arrSeasonArray[i][29];
			scoresByGolfer.get(id).strokes = arrSeasonArray[i][13];
			scoresByGolfer.get(id).date = arrSeasonArray[i][30];
			scoresByGolfer.get(id).side = "Front";
			
			//Back 9
			id = "" + arrSeasonArray[i][2] + arrSeasonArray[i][30] + "Back";

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id,
					{
						golfer: "",
						course: "",
						eventname: "",
						strokes: 0,
						date: "",
						side: ""
					}
				);
			}
			
			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			scoresByGolfer.get(id).course = arrSeasonArray[i][28];
			scoresByGolfer.get(id).eventname = arrSeasonArray[i][29];
			scoresByGolfer.get(id).strokes = arrSeasonArray[i][14];
			scoresByGolfer.get(id).date = arrSeasonArray[i][30];
			scoresByGolfer.get(id).side = "Back";
		}
	}

	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoringObj]) => {
		const golfer = scoringObj.golfer;
		const course = scoringObj.course;
		const eventname = scoringObj.eventname;
		const strokes = scoringObj.strokes;
		const date = scoringObj.date;
		const side = scoringObj.side;
	  
		return [
			-1,
			strokes,
			golfer,
			course,
			eventname,
			date,
			side
		];
	});
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}