function getAwards(URL) {
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	var id = "";
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		arrSeasonArray = getData_Participants(getFilterSettings_Participant(URL, x));
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
			
			if (URL[16] == "Y") { id = "" + arrSeasonArray[i][2] + arrSeasonArray[i][32]; }
			else if (URL[17] == "Y") { id = "" + arrSeasonArray[i][2] + arrSeasonArray[i][30]; }
			else { id = "" + arrSeasonArray[i][2]; };

			if (!scoresByGolfer.has(id)) {
				scoresByGolfer.set(
					id,
					{
						golfer: "",
						gross: 0,
						meltdown: 0,
						mediocre: 0,
						redkey: 0,
						longdrive: 0,
						closepin: 0,
						season: "",
						events: 0,
						eventt: "",
						course: ""
					}
				);
			}

			scoresByGolfer.get(id).golfer = arrSeasonArray[i][2];
			
			if ((URL[20] == "grs" || URL[20] == "tot") && arrSeasonArray[i][9] == "x") { scoresByGolfer.get(id).gross++; }
			if ((URL[20] == "mlt" || URL[20] == "tot") && arrSeasonArray[i][7] == "x") { scoresByGolfer.get(id).meltdown++; }
			if ((URL[20] == "med" || URL[20] == "tot") && arrSeasonArray[i][8] == "x") { scoresByGolfer.get(id).mediocre++; }
			if ((URL[20] == "red" || URL[20] == "tot") && arrSeasonArray[i][12] == "x") { scoresByGolfer.get(id).redkey++; }
			if ((URL[20] == "lng" || URL[20] == "tot") && arrSeasonArray[i][10] == "x") { scoresByGolfer.get(id).longdrive++; }
			if ((URL[20] == "cls" || URL[20] == "tot") && arrSeasonArray[i][11] == "x") { scoresByGolfer.get(id).closepin++; }
			
			scoresByGolfer.get(id).season = arrSeasonArray[i][32];
			scoresByGolfer.get(id).eventt = arrSeasonArray[i][29];
			scoresByGolfer.get(id).course = arrSeasonArray[i][28];
			scoresByGolfer.get(id).events++;
		}
	}
	
	var vStat = 0;

	var arrReturnArray = Array.from(scoresByGolfer, ([id, scoringObj]) => {
		const golfer = scoringObj.golfer;
		const gross = scoringObj.gross;
		const meltdown = scoringObj.meltdown;
		const mediocre = scoringObj.mediocre;
		const redkey = scoringObj.redkey;
		const longdrive = scoringObj.longdrive;
		const closepin = scoringObj.closepin;
		const events = scoringObj.events;
		const season = scoringObj.season;
		const eventt = scoringObj.eventt;
		const course = scoringObj.course;
		
		if (URL[20] == "grs") { vStat = gross; }
		else if (URL[20] == "mlt") { vStat = meltdown; }
		else if (URL[20] == "med") { vStat = mediocre; }
		else if (URL[20] == "red") { vStat = redkey; }
		else if (URL[20] == "lng") { vStat = longdrive; }
		else if (URL[20] == "cls") { vStat = closepin; }
		else if (URL[20] == "tot") { vStat = (gross + meltdown + mediocre + redkey + longdrive + closepin); }

		return [
			-1,
			vStat,
			golfer,
			events,
			season,
			eventt,
			course
		];
	});
	
	arrReturnArray = arrReturnArray.filter(events => events[1] > 0);
	
	if (URL[21] == "a") { arrReturnArray.sort(function(a,b) {return a[1]-b[1]}); }
	else { arrReturnArray.sort(function(a,b) {return b[1]-a[1]}); }
	
	return getListPositions(arrReturnArray);
}