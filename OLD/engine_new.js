function getAverageList(URL) {
	var arrFilters = new Array();
	var arrSeasonArray = new Array();
	const scoresByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		if (URL[4] == '-2') {arrFilters[31] = 'Y';}
		else if (URL[4] == '-3') {arrFilters[31] = 'N';}
		else if (URL[4] != '-1') {arrFilters[29] = getEventName(URL[4]);}
		
		if (URL[3] != '-1') {arrFilters[2] = getGolferName(URL[3]);}
		if (URL[5] != '-1') {arrFilters[28] = getCourseName(URL[5]);}
		
		arrFilters[32] = x;
		arrSeasonArray = getData_Participants(arrFilters);
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
		  const golfer = arrSeasonArray[i][2];
		  const strokes = (arrSeasonArray[i][13] + arrSeasonArray[i][14]);
		  
		  if (!scoresByGolfer.has(golfer)) {
			scoresByGolfer.set(golfer, { strokes: 0, eventCount: 0 });
		  }
		  
		  scoresByGolfer.get(golfer).strokes += strokes;
		  scoresByGolfer.get(golfer).eventCount++;
		}
	}

	var arrReturnArray = Array.from(scoresByGolfer, ([golfer, scoringObj]) => {
	  const strokes = scoringObj.strokes;
	  const eventCount = scoringObj.eventCount;
	  return [golfer, (strokes / eventCount).toFixed(3), eventCount];
	});
	
	arrReturnArray = arrReturnArray.filter(events => events[2] > 1);
	
	arrReturnArray.sort(function(a,b) {return a[1]-b[1]});
	
	var varPositionHold	= 0;
	var varAverageHold	= 0;
	var varReturnIndex = 0;
	
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varAverageHold != arrReturnArray[varReturnIndex][1]) {
			varAverageHold = arrReturnArray[varReturnIndex][1];
			varPositionHold = (pl + 1);
			arrReturnArray[varReturnIndex][3] = (pl + 1);
		} else {
			arrReturnArray[varReturnIndex][3] = varPositionHold;
		}
		
		varReturnIndex++;
	}
	
	return arrReturnArray;
}

function getCourseName(pCourseIndex) {
	switch (pCourseIndex) {
		case '-1'	: return 'All Courses'; break;
	}
	
	const arrCourses = getData_Courses();
	return arrCourses[pCourseIndex];
}

function getCurrentSeason() {
	const seasons = getData_Seasons();
	return seasons[seasons.length - 1];
}

function getData_Courses() {
	return [
		"Chapel Hill","Raymond Memorial","Homestead Springs","Champions","Phoenix","Raccoon","Upper Lansdowne","Thorn Apple","St. Albans","Cumberland Trail","Links at Echo Springs","Split Rock","Rolling Meadows","Kyber Run","Turnberry","Links at Groveport","Oakhaven","Blues Creek","Willow Run","Westchester","Foxfire","Royal American","Blacklick Woods","Timberview","Denison","National Golf Links","Darby Creek","The Ridge","Crystal Springs","Clover Valley","Blackhawk","Pine Hill","Mill Creek",
	].sort();
}

function getData_Events() {
	return [
		"Rebel Beach Am-Am","Bastards","MGA Championship","F.U. Open","Bratish Open","FORE Championship","Douche Bag Invitational","Last Gasp"
	]
}

function getData_Golfers() {
	return [
		"Chris Wiford","Ben Apgar","Justin Brown","Jason Strickland","Eric Pierce","Jason Nicholas","Tony Zimmerman","Derrick Hitchens","John LaRue","Jeff Gilligan","Giang Nguyen","Doug Wiford","Todd Koch","Phil Insinga","Michael Bobowski","Kim Niswander","Anthony Seasly","David Safier","Jim Frawley","Jim Schaffranek","Doug Murray","Jordan Schaffranek","David Robertson","Ryan Downing","Tim Collins","Ryan Rainey","Jeremy Gary","Marvin Koch","Jimmy Fedrick","Eric Martorana","Marcus Mattson","Jack Weber","Scott Rainey","Mitch Frazier","Kirk Lammers","Bruce Zion","Chris Wineinger","Jeff Nasci","Terry Collins","Dustin Schmidt","Chad Schoch","John Leite","Jordan Adams","DJ Maley","Josh Stephens","Merrill Wheeler","David Knowles","Matt Bigelow","Michael Grote","Connor Mazza","Andy Nentwich","Dave Rice","Joe Milacek","Jeff Gilbert","Dustin Wood","Steve Sillato","Jay Sutter","Johnnie Jarrell","Frank Galilei","Chip Chapman","Joel Schumm","Joe Cortez","Craig Seibert","Matt Bugbee","John Stamper","Trevor Boyd","Kevin George","Brent Isner","Zach Chillinsky","Brad Wallace","Patrick Affourtit","Tony Szymczak","Kyle Ratajczak","Justin Kudela","Chris Roebuck","Sam Steinberg","Jeff Beckman","Gary Sutter","Bill Ludwig","Graydon Spanner","Scott Hall","Braedon Crowe","Jonathan Stone","Ken Byers","Doug Short","Chuck Jackson","Brian Zimmerschied","Jared Pickens","Tony Perrin","Bryan Sockol","Steve Bongard","Matt Keller","Todd Hamilton","Ryan Chiarito","Bob Krause","Anthony Cable","Joe Ritch","Justin Scribner","Ben Reeb","Zac Laumer","Sam Palumbo","Robert McArthur","Jonathan Reeb","Andy Klausing","Brian BenVenuto","James Treboni","Zachary Dunham","Charles Fitch","Ian Schambach","Mike Hardie","Riley Saelens","Mathew Mayo","Dylan Harbolt","Jason Smelser","Mike Galvin","Jacob Wollenberg","Justin Butt","Matt Arrasmith","Jason Tolman","Joe Kelly","Brice Darbyshire","Tim Koruna","William Sorokas","Kasey Lacourse","Rob Hamilton","Matt Subosits","Bryan Riegger","Luke Eschenbrenner","Tim Blausey","Ray Vaught","Scott Mulligan","David Orr","Justin Higgins","Marc Johnson","Adam Sheppard","Seth Wehner","Steven Baybutt","Joshua Treadway","Eric Heberle","John Barry","Karl Schedler","Dan Nelson","Scott Howland","Steve Friday","Nick Johnston","Doug Dickenson","Steven Merrill","Justin Duffie","Luke Maurer","Joe Faga","David Korzan","Brad Schimmoeller","Arun RajanBabu","Brett Ewing","Chad King","Fred Miller","Jay Patel","John Young","Corinne Bigelow","Elliot Mork","Brent Huddleston","Chris Pike","Sundar Digumarthy","Nick Poe","Paul Miller","Robby Thompson","Christopher Dillon","Brandon Clarke","Brad Bever","Dana Rose","Kurt Ritzman","Derek Shannon","Marty Leedy","Matthew Schaade","Gregory Hetterscheidt","Alex Fredericks","Michael McGuire","Bradley Rose","Michael Perry","Christopher Martin","Justin Liu","Jim McGuire","Tavis Nelson","David Kunkleman","Ian Willinger","Keith Overly","Brian Rue","Ty Wilson","Michael Isfort","Steven Murtanovski","Ryan Coady","Dan White","Emily Valandingham","Brian Spangenberg","Nicholas Jewson","Patrick Queen","John Hanley","Joe Medici","Kalib Amos","Tucker Wilkinson","Ward Huddleston","Kevin Bindel","Doug Hart","Hamza Khaliq","David Lacki","Alex Passafiume","Tony Rose","Matt Sleeper","Tim Tribbie","David Moore","Devin Johnson","Josh Belknap","Troy Wagner","Justin Tuente","Brad Rose","Dan Loper","Michael Rocco","Ben Gramza","Zachary Amos","Jay Carleton","Mike Freeland","Brian Tiemeier","Brent Ferrell","Gary Grant","Michael Skaff","Martin Dillinger","Matt Simyak","Christine Rinella","Doug Calamari",
	].sort();
}

function getData_Participants(Filters) {
	/*
		0	-	Participant ID	
		1	-	Tournament ID	
		2	-	Golfer Name	
		3	-	Penalty Strokes	
		4	-	Placement	
		5	-	Earnings	
		6	-	Playoff	
		7	-	Meltdown Award	
		8	-	Mediocre Award	
		9	-	Gross Award	
		10	-	Long Drive Award	
		11	-	Closest to the Pin Award	
		12	-	Red Key Award	
		13	-	Front 9 Score	
		14	-	Back 9 Score	
		15	-	Eagle Count	
		16	-	Birdie Count	
		17	-	Par Count	
		18	-	Bogey Count	
		19	-	Double Bogey Count	
		20	-	Triple Bogey Count	
		21	-	Worse Count	
		22	-	Par 3 Total	
		23	-	Par 3 Count	
		24	-	Par 4 Total	
		25	-	Par 4 Count	
		26	-	Par 5 Total	
		27	-	Par 5 Count	
		28	-	Course Name	
		29	-	Event Name	
		30	-	Event Date	
		31	-	Is Major?	
		32	-	Season	
		33	-	Month	
		34	-	Field Size	
	*/
	
	let arrParticipants = [																																				
	
		[	1,	1,	"Chris Wiford",	0,	1,	0.84,	"",	"",	"",	"x",	"",	"",	"",	56,	50,	0,	0,	3,	6,	3,	2,	4,	16,	4,	62,	10,	28,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	2,	1,	"Ben Apgar",	0,	2,	0.51,	"",	"",	"",	"",	"",	"",	"",	61,	50,	0,	0,	0,	9,	5,	0,	4,	17,	4,	64,	10,	30,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	3,	1,	"Justin Brown",	0,	2,	0.51,	"",	"",	"",	"",	"",	"",	"",	59,	52,	0,	0,	1,	5,	6,	3,	3,	17,	4,	65,	10,	29,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	4,	1,	"Jason Strickland",	4,	4,	0.42,	"",	"",	"",	"",	"",	"",	"",	62,	48,	0,	0,	2,	4,	5,	5,	2,	18,	4,	63,	10,	29,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	5,	1,	"Eric Pierce",	0,	5,	0.37,	"",	"",	"",	"",	"",	"",	"",	60,	60,	0,	0,	0,	4,	4,	6,	4,	20,	4,	69,	10,	31,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	6,	1,	"Jason Nicholas",	0,	6,	0.33,	"",	"",	"",	"",	"",	"",	"",	62,	59,	0,	0,	1,	2,	4,	7,	4,	22,	4,	65,	10,	34,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	7,	1,	"Tony Zimmerman",	0,	7,	0.28,	"",	"",	"x",	"",	"",	"",	"",	61,	61,	0,	0,	0,	4,	5,	5,	4,	22,	4,	66,	10,	34,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	8,	1,	"Derrick Hitchens",	0,	8,	0.23,	"",	"x",	"",	"",	"x",	"",	"",	61,	66,	0,	0,	0,	2,	5,	5,	6,	22,	4,	69,	10,	36,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	9,	1,	"John LaRue",	0,	9,	0.19,	"",	"",	"",	"",	"",	"",	"",	71,	62,	0,	0,	0,	1,	3,	6,	8,	25,	4,	74,	10,	34,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	10,	1,	"Jeff Gilligan",	0,	10,	0.14,	"",	"",	"",	"",	"",	"",	"",	70,	68,	0,	0,	0,	1,	3,	6,	8,	22,	4,	79,	10,	37,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	11,	1,	"Giang Nguyen",	0,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	79,	61,	0,	0,	0,	4,	2,	4,	8,	21,	4,	77,	10,	42,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		[	12,	1,	"Doug Wiford",	0,	12,	0.05,	"",	"",	"",	"",	"",	"x",	"x",	81,	67,	0,	0,	2,	1,	3,	2,	10,	19,	4,	91,	10,	38,	4,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12,	],
		
		[	13,	2,	"Todd Koch",	0,	1,	1.02,	"",	"",	"",	"x",	"",	"",	"",	46,	43,	0,	1,	8,	4,	2,	2,	1,	16,	4,	52,	10,	21,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	14,	2,	"Jason Strickland",	0,	2,	0.68,	"",	"",	"",	"",	"x",	"",	"",	47,	43,	0,	1,	5,	6,	5,	1,	0,	19,	4,	50,	10,	21,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	15,	2,	"Phil Insinga",	0,	3,	0.57,	"",	"",	"",	"",	"",	"x",	"",	57,	48,	0,	0,	1,	8,	4,	3,	2,	19,	4,	61,	10,	25,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	16,	2,	"Justin Brown",	0,	4,	0.51,	"",	"",	"",	"",	"",	"",	"",	53,	57,	0,	0,	2,	6,	5,	1,	4,	17,	4,	67,	10,	26,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	17,	2,	"Chris Wiford",	0,	5,	0.43,	"",	"",	"",	"",	"",	"",	"",	59,	54,	0,	0,	2,	4,	3,	5,	4,	19,	4,	65,	10,	29,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	18,	2,	"Tony Zimmerman",	0,	5,	0.43,	"",	"",	"",	"",	"",	"",	"",	56,	57,	0,	0,	1,	3,	7,	4,	3,	22,	4,	63,	10,	28,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	19,	2,	"Derrick Hitchens",	0,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	61,	56,	0,	0,	1,	2,	8,	4,	3,	23,	4,	64,	10,	30,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	20,	2,	"Michael Bobowski",	0,	7,	0.31,	"",	"",	"x",	"",	"",	"",	"",	58,	59,	0,	0,	0,	3,	6,	6,	3,	21,	4,	63,	10,	33,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	21,	2,	"Jeff Gilligan",	0,	9,	0.23,	"",	"x",	"",	"",	"",	"",	"",	56,	64,	0,	0,	0,	4,	4,	5,	5,	23,	4,	66,	10,	31,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	22,	2,	"Kim Niswander",	0,	10,	0.17,	"",	"",	"",	"",	"",	"",	"",	61,	61,	0,	0,	0,	4,	5,	3,	6,	25,	4,	67,	10,	30,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	23,	2,	"Giang Nguyen",	0,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	64,	64,	0,	0,	1,	1,	3,	6,	7,	21,	4,	72,	10,	35,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	24,	2,	"John LaRue",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	71,	58,	0,	0,	0,	2,	4,	6,	6,	26,	4,	67,	10,	36,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		[	25,	2,	"Doug Wiford",	0,	13,	0.05,	"",	"",	"",	"",	"",	"",	"x",	67,	64,	0,	0,	0,	2,	2,	6,	8,	26,	4,	71,	10,	34,	4,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13,	],
		
		[	26,	3,	"Jason Strickland",	0,	1,	1.28,	"",	"",	"",	"x",	"",	"x",	"",	49,	46,	0,	0,	5,	7,	4,	1,	1,	16,	4,	54,	10,	25,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	27,	3,	"Anthony Seasly",	0,	2,	0.86,	"",	"",	"",	"",	"",	"",	"",	57,	49,	0,	0,	2,	6,	5,	3,	2,	19,	4,	61,	10,	26,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	28,	3,	"Chris Wiford",	0,	3,	0.68,	"",	"",	"",	"",	"",	"",	"",	50,	62,	0,	0,	1,	8,	4,	2,	3,	24,	4,	59,	10,	29,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	29,	3,	"Tony Zimmerman",	0,	3,	0.68,	"",	"",	"",	"",	"",	"",	"",	60,	52,	0,	0,	0,	4,	9,	3,	2,	22,	4,	63,	10,	27,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	30,	3,	"David Safier",	0,	5,	0.57,	"",	"",	"",	"",	"",	"",	"",	58,	55,	0,	0,	0,	5,	5,	6,	2,	19,	4,	63,	10,	31,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	31,	3,	"Giang Nguyen",	0,	6,	0.5,	"",	"x",	"",	"",	"",	"",	"",	49,	74,	0,	0,	3,	5,	2,	1,	7,	27,	4,	71,	10,	25,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	32,	3,	"Jason Nicholas",	0,	7,	0.43,	"",	"",	"x",	"",	"",	"",	"",	63,	62,	0,	0,	1,	2,	6,	3,	6,	20,	4,	71,	10,	34,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	33,	3,	"Doug Wiford",	0,	8,	0.32,	"",	"",	"",	"",	"",	"",	"",	58,	68,	0,	0,	1,	3,	4,	3,	7,	18,	4,	74,	10,	34,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	34,	3,	"Kim Niswander",	0,	8,	0.32,	"",	"",	"",	"",	"",	"",	"",	65,	61,	0,	0,	0,	2,	6,	6,	4,	21,	4,	68,	10,	37,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	35,	3,	"John LaRue",	0,	10,	0.21,	"",	"",	"",	"",	"x",	"",	"",	67,	63,	0,	0,	0,	0,	4,	9,	5,	27,	4,	68,	10,	35,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		[	36,	3,	"Jeff Gilligan",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"x",	68,	65,	0,	0,	3,	0,	2,	5,	8,	26,	4,	75,	10,	32,	4,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11,	],
		
		[	37,	4,	"Todd Koch",	0,	1,	0.93,	"",	"",	"",	"x",	"",	"",	"",	45,	38,	0,	2,	4,	9,	3,	0,	0,	12,	4,	60,	12,	11,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	38,	4,	"Jason Strickland",	0,	2,	0.62,	"",	"",	"",	"",	"x",	"",	"",	45,	55,	0,	1,	4,	6,	2,	2,	3,	21,	4,	68,	12,	11,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	39,	4,	"Eric Pierce",	0,	3,	0.52,	"",	"",	"",	"",	"",	"",	"",	53,	49,	0,	0,	3,	5,	4,	5,	1,	20,	4,	69,	12,	13,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	40,	4,	"Tony Zimmerman",	0,	4,	0.46,	"",	"",	"",	"",	"",	"",	"",	52,	60,	0,	0,	1,	3,	7,	4,	3,	23,	4,	74,	12,	15,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	41,	4,	"Derrick Hitchens",	0,	5,	0.41,	"",	"",	"",	"",	"",	"",	"",	57,	62,	0,	1,	1,	4,	1,	3,	8,	17,	4,	84,	12,	18,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	42,	4,	"Doug Wiford",	0,	6,	0.36,	"",	"",	"x",	"",	"",	"",	"",	61,	59,	0,	0,	1,	3,	5,	3,	6,	18,	4,	85,	12,	17,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	43,	4,	"Chris Wiford",	0,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	65,	58,	0,	0,	0,	1,	6,	7,	4,	24,	4,	82,	12,	17,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	44,	4,	"Jeff Gilligan",	0,	8,	0.23,	"",	"",	"",	"",	"",	"",	"",	66,	64,	0,	0,	0,	3,	3,	3,	9,	27,	4,	85,	12,	18,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	45,	4,	"Jim Frawley",	0,	8,	0.23,	"",	"",	"",	"",	"",	"",	"",	62,	68,	0,	0,	0,	3,	5,	2,	8,	20,	4,	90,	12,	20,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	46,	4,	"Kim Niswander",	0,	10,	0.25,	"",	"x",	"",	"",	"",	"",	"",	59,	77,	0,	0,	0,	2,	3,	6,	7,	28,	4,	88,	12,	20,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		[	47,	4,	"John LaRue",	0,	11,	0.1,	"",	"",	"",	"",	"",	"",	"x",	70,	84,	0,	0,	0,	0,	2,	5,	11,	33,	4,	97,	12,	24,	2,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11,	],
		
		[	48,	5,	"Jason Strickland",	0,	1,	0.95,	"",	"",	"",	"x",	"",	"x",	"",	47,	45,	0,	0,	5,	8,	3,	2,	0,	14,	4,	51,	10,	27,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	49,	5,	"Todd Koch",	3,	2,	0.63,	"",	"x",	"",	"",	"",	"",	"",	45,	56,	0,	1,	2,	7,	4,	2,	2,	22,	4,	55,	10,	24,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	50,	5,	"Giang Nguyen",	0,	3,	0.53,	"",	"",	"",	"",	"x",	"",	"",	52,	54,	0,	0,	2,	8,	2,	2,	4,	24,	4,	56,	10,	26,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	51,	5,	"Chris Wiford",	0,	4,	0.45,	"",	"",	"",	"",	"",	"",	"",	54,	57,	0,	0,	1,	4,	6,	5,	2,	21,	4,	61,	10,	29,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	52,	5,	"David Safier",	0,	4,	0.45,	"",	"",	"",	"",	"",	"",	"",	57,	54,	0,	0,	1,	4,	7,	4,	2,	17,	4,	67,	10,	27,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	53,	5,	"Derrick Hitchens",	0,	6,	0.37,	"",	"",	"x",	"",	"",	"",	"",	56,	65,	0,	0,	0,	4,	7,	4,	3,	18,	4,	73,	10,	30,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	54,	5,	"Tony Zimmerman",	0,	7,	0.32,	"",	"",	"",	"",	"",	"",	"",	65,	57,	0,	1,	0,	2,	5,	4,	6,	30,	4,	63,	10,	29,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	55,	5,	"Doug Wiford",	0,	8,	0.26,	"",	"",	"",	"",	"",	"",	"",	66,	60,	0,	0,	2,	2,	5,	2,	7,	20,	4,	66,	10,	40,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	56,	5,	"John LaRue",	0,	9,	0.21,	"",	"",	"",	"",	"",	"",	"",	67,	65,	0,	0,	0,	4,	4,	3,	7,	23,	4,	79,	10,	30,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	57,	5,	"Kim Niswander",	0,	10,	0.16,	"",	"x",	"",	"",	"",	"",	"",	61,	72,	0,	0,	0,	3,	3,	5,	7,	23,	4,	75,	10,	35,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		[	58,	5,	"Jeff Gilligan",	0,	11,	0.11,	"",	"",	"",	"",	"",	"",	"x",	71,	64,	0,	0,	0,	2,	4,	5,	7,	20,	4,	79,	10,	36,	4,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11,	],
		
		[	59,	6,	"Jason Strickland",	0,	1,	1.01,	"",	"",	"",	"x",	"",	"",	"",	43,	45,	0,	0,	7,	6,	5,	0,	0,	15,	4,	46,	10,	27,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	60,	6,	"Tony Zimmerman",	0,	2,	0.68,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	0,	4,	8,	3,	2,	1,	16,	4,	50,	10,	30,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	61,	6,	"Chris Wiford",	0,	3,	0.56,	"",	"",	"",	"",	"",	"",	"",	52,	49,	0,	0,	2,	7,	6,	2,	1,	17,	4,	55,	10,	29,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	62,	6,	"Eric Pierce",	0,	4,	0.51,	"",	"",	"",	"",	"x",	"",	"",	53,	54,	0,	0,	2,	6,	6,	2,	2,	18,	4,	63,	10,	26,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	63,	6,	"Derrick Hitchens",	0,	5,	0.45,	"",	"x",	"",	"",	"",	"",	"",	51,	57,	0,	0,	3,	4,	4,	4,	3,	15,	4,	61,	10,	32,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	64,	6,	"David Safier",	0,	6,	0.39,	"",	"",	"",	"",	"",	"",	"",	54,	56,	0,	0,	0,	8,	6,	2,	2,	18,	4,	65,	10,	27,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	65,	6,	"John LaRue",	0,	7,	0.34,	"",	"",	"x",	"",	"",	"",	"",	60,	55,	0,	0,	0,	7,	3,	4,	4,	21,	4,	62,	10,	32,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	66,	6,	"Jim Schaffranek",	0,	8,	0.28,	"",	"",	"",	"",	"",	"x",	"",	60,	60,	0,	0,	1,	4,	3,	6,	4,	16,	4,	69,	10,	35,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	67,	6,	"Giang Nguyen",	0,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	68,	60,	0,	0,	0,	4,	4,	3,	7,	22,	4,	71,	10,	35,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	68,	6,	"Jeff Gilligan",	0,	10,	0.17,	"",	"",	"",	"",	"",	"",	"",	69,	63,	0,	0,	1,	3,	1,	5,	8,	17,	4,	81,	10,	34,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	69,	6,	"Doug Wiford",	0,	11,	0.08,	"",	"",	"",	"",	"",	"",	"x",	73,	61,	0,	0,	0,	5,	2,	2,	9,	23,	4,	67,	10,	44,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		[	70,	6,	"Jim Frawley",	0,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	68,	66,	0,	0,	0,	4,	3,	3,	8,	21,	4,	70,	10,	43,	4,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12,	],
		
		[	71,	7,	"Todd Koch",	0,	1,	1.1,	"",	"",	"",	"x",	"",	"x",	"",	42,	49,	0,	1,	6,	4,	5,	2,	0,	14,	4,	57,	10,	20,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	72,	7,	"Doug Murray",	0,	2,	0.73,	"",	"",	"",	"",	"",	"",	"",	46,	46,	0,	0,	5,	6,	7,	0,	0,	19,	4,	48,	10,	25,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	73,	7,	"Jordan Schaffranek",	0,	3,	0.61,	"",	"",	"",	"",	"x",	"",	"",	50,	48,	0,	1,	1,	8,	5,	3,	0,	19,	4,	57,	10,	22,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	74,	7,	"Jason Strickland",	0,	4,	0.55,	"",	"x",	"",	"",	"",	"",	"",	46,	55,	0,	0,	3,	8,	2,	3,	2,	15,	4,	62,	10,	24,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	75,	7,	"Tony Zimmerman",	0,	5,	0.49,	"",	"",	"",	"",	"",	"",	"",	51,	54,	0,	1,	1,	4,	6,	6,	0,	15,	4,	65,	10,	25,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	76,	7,	"Jim Schaffranek",	0,	6,	0.43,	"",	"",	"",	"",	"",	"",	"",	59,	50,	0,	0,	4,	3,	4,	3,	4,	18,	4,	61,	10,	30,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	77,	7,	"Giang Nguyen",	0,	7,	0.37,	"",	"",	"x",	"",	"",	"",	"",	61,	49,	0,	0,	2,	6,	5,	2,	3,	16,	4,	61,	10,	33,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	78,	7,	"John LaRue",	0,	8,	0.3,	"",	"",	"",	"",	"",	"",	"",	56,	56,	0,	0,	1,	6,	1,	9,	1,	19,	4,	61,	10,	32,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	79,	7,	"Derrick Hitchens",	0,	9,	0.24,	"",	"",	"",	"",	"",	"",	"",	59,	56,	0,	0,	1,	2,	6,	7,	2,	21,	4,	63,	10,	31,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	80,	7,	"David Robertson",	0,	10,	0.18,	"",	"",	"",	"",	"",	"",	"",	63,	54,	0,	0,	1,	3,	4,	6,	4,	19,	4,	67,	10,	31,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	81,	7,	"Doug Wiford",	0,	11,	0.12,	"",	"",	"",	"",	"",	"",	"",	71,	56,	0,	1,	0,	2,	6,	1,	8,	20,	4,	76,	10,	31,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	82,	7,	"Jim Frawley",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	68,	64,	0,	0,	1,	2,	2,	5,	8,	26,	4,	76,	10,	30,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		[	83,	7,	"Jeff Gilligan",	0,	13,	0.05,	"",	"",	"",	"",	"",	"",	"x",	80,	68,	0,	0,	1,	1,	1,	2,	13,	26,	4,	88,	10,	34,	4,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13,	],
		
		[	84,	8,	"Jason Strickland",	0,	1,	0.63,	"",	"",	"",	"x",	"",	"",	"",	43,	41,	0,	0,	7,	10,	1,	0,	0,	13,	4,	48,	10,	23,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	85,	8,	"Doug Murray",	0,	2,	0.42,	"",	"",	"",	"",	"x",	"",	"",	44,	45,	0,	1,	5,	8,	2,	2,	0,	18,	4,	47,	10,	24,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	86,	8,	"Tony Zimmerman",	0,	3,	0.35,	"",	"",	"",	"",	"",	"",	"",	47,	51,	0,	1,	1,	7,	7,	2,	0,	20,	4,	53,	10,	25,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	87,	8,	"Chris Wiford",	0,	4,	0.3,	"",	"",	"",	"",	"",	"",	"",	49,	57,	0,	0,	3,	5,	4,	4,	2,	18,	4,	54,	10,	34,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	88,	8,	"Jeff Gilligan",	0,	4,	0.3,	"",	"",	"x",	"",	"",	"x",	"",	54,	52,	0,	2,	2,	2,	3,	8,	1,	15,	4,	67,	10,	24,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	89,	8,	"David Robertson",	0,	6,	0.24,	"",	"",	"",	"",	"",	"",	"",	56,	51,	0,	0,	1,	4,	9,	3,	1,	21,	4,	59,	10,	27,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	90,	8,	"John LaRue",	0,	7,	0.21,	"",	"x",	"",	"",	"",	"",	"",	51,	60,	0,	0,	1,	7,	3,	3,	4,	20,	4,	64,	10,	27,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	91,	8,	"Doug Wiford",	0,	8,	0.17,	"",	"",	"",	"",	"",	"",	"",	52,	60,	0,	0,	1,	4,	6,	4,	3,	22,	4,	61,	10,	29,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		[	92,	8,	"Derrick Hitchens",	0,	9,	0.14,	"",	"",	"",	"",	"",	"",	"x",	56,	57,	0,	0,	2,	6,	6,	1,	3,	17,	4,	65,	10,	31,	4,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9,	],
		
		[	93,	9,	"Ryan Downing",	1,	1,	1.12,	"",	"",	"",	"x",	"",	"",	"",	44,	39,	0,	1,	7,	8,	1,	1,	0,	18,	5,	44,	9,	21,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	94,	9,	"Todd Koch",	0,	2,	0.74,	"",	"",	"",	"",	"",	"x",	"",	46,	40,	0,	0,	8,	7,	2,	0,	1,	18,	5,	45,	9,	23,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	95,	9,	"Doug Murray",	0,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	0,	5,	10,	3,	0,	0,	18,	5,	46,	9,	23,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	96,	9,	"Jason Strickland",	0,	4,	0.56,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	0,	4,	10,	4,	0,	0,	20,	5,	47,	9,	22,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	97,	9,	"Tim Collins",	5,	5,	0.5,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	2,	3,	10,	3,	0,	0,	18,	5,	46,	9,	21,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	98,	9,	"Ryan Rainey",	1,	6,	0.4,	"",	"",	"",	"",	"",	"",	"",	45,	47,	0,	0,	6,	5,	5,	2,	0,	17,	5,	50,	9,	25,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	99,	9,	"Jeremy Gary",	0,	6,	0.4,	"",	"",	"",	"",	"",	"",	"",	51,	42,	0,	0,	7,	6,	1,	2,	2,	22,	5,	49,	9,	22,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	100,	9,	"Tony Zimmerman",	0,	8,	0.31,	"",	"",	"",	"",	"",	"",	"",	50,	44,	0,	0,	4,	7,	5,	2,	0,	22,	5,	47,	9,	25,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	101,	9,	"Jordan Schaffranek",	0,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	3,	7,	5,	2,	1,	21,	5,	51,	9,	26,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	102,	9,	"Marvin Koch",	0,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	56,	44,	0,	0,	2,	8,	4,	3,	1,	20,	5,	54,	9,	26,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	103,	9,	"Derrick Hitchens",	0,	11,	0.12,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	1,	3,	7,	3,	1,	3,	18,	5,	53,	9,	30,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	104,	9,	"Eric Pierce",	0,	12,	0.06,	"",	"",	"x",	"",	"",	"",	"",	57,	46,	0,	0,	4,	3,	8,	1,	2,	25,	5,	56,	9,	22,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	105,	9,	"Phil Insinga",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	5,	1,	7,	3,	2,	25,	5,	51,	9,	27,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	106,	9,	"Jim Schaffranek",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	52,	52,	0,	0,	3,	4,	6,	3,	2,	23,	5,	56,	9,	25,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	107,	9,	"Jimmy Fedrick",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	51,	54,	0,	0,	1,	3,	11,	3,	0,	27,	5,	50,	9,	28,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	108,	9,	"Eric Martorana",	0,	16,	0.02,	"",	"",	"",	"",	"x",	"",	"",	55,	51,	0,	1,	3,	3,	5,	3,	3,	19,	5,	54,	9,	33,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	109,	9,	"Jim Frawley",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	60,	52,	0,	0,	2,	4,	6,	3,	3,	28,	5,	49,	9,	35,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	110,	9,	"Chris Wiford",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	57,	56,	0,	0,	2,	5,	4,	2,	5,	25,	5,	52,	9,	36,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	111,	9,	"Giang Nguyen",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	60,	53,	0,	0,	1,	4,	8,	2,	3,	27,	5,	55,	9,	31,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	112,	9,	"Marcus Mattson",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	59,	55,	0,	0,	1,	4,	4,	6,	3,	25,	5,	62,	9,	27,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	113,	9,	"Jack Weber",	0,	21,	0,	"",	"x",	"",	"",	"",	"",	"",	55,	62,	0,	0,	0,	4,	4,	6,	4,	29,	5,	58,	9,	30,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	114,	9,	"John LaRue",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	60,	59,	0,	0,	0,	8,	0,	4,	6,	25,	5,	60,	9,	34,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	115,	9,	"Jeff Gilligan",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	64,	59,	0,	0,	0,	3,	6,	5,	4,	26,	5,	61,	9,	36,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	116,	9,	"Doug Wiford",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	66,	58,	0,	0,	1,	5,	4,	2,	6,	34,	5,	58,	9,	32,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	117,	9,	"Kim Niswander",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	61,	64,	0,	0,	0,	2,	6,	4,	6,	28,	5,	66,	9,	31,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		[	118,	9,	"Scott Rainey",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"x",	64,	66,	0,	0,	0,	1,	5,	6,	6,	31,	5,	70,	9,	29,	4,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26,	],
		
		[	119,	10,	"Jason Strickland",	0,	1,	1.26,	"",	"",	"",	"x",	"",	"",	"",	43,	39,	0,	1,	7,	9,	1,	0,	0,	13,	4,	45,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	120,	10,	"Ryan Rainey",	0,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	41,	46,	0,	2,	5,	6,	4,	1,	0,	18,	4,	51,	10,	18,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	121,	10,	"Todd Koch",	1,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	8,	7,	0,	0,	3,	14,	4,	44,	10,	33,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	122,	10,	"Doug Murray",	0,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	48,	45,	0,	2,	4,	2,	9,	1,	0,	18,	4,	51,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	123,	10,	"Mitch Frazier",	7,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	4,	7,	6,	1,	0,	14,	4,	56,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	124,	10,	"Eric Martorana",	0,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	54,	49,	0,	1,	2,	4,	6,	4,	1,	18,	4,	57,	10,	28,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	125,	10,	"Jeremy Gary",	0,	7,	0.42,	"",	"",	"",	"",	"x",	"",	"",	58,	47,	0,	1,	2,	3,	7,	3,	2,	21,	4,	62,	10,	22,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	126,	10,	"Derrick Hitchens",	0,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	54,	52,	0,	0,	2,	6,	8,	0,	2,	18,	4,	62,	10,	26,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	127,	10,	"Kirk Lammers",	0,	9,	0.28,	"",	"",	"x",	"",	"",	"",	"",	62,	58,	0,	0,	1,	4,	2,	7,	4,	19,	4,	71,	10,	30,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	128,	10,	"Bruce Zion",	0,	10,	0.21,	"",	"x",	"",	"",	"",	"",	"",	50,	73,	0,	0,	1,	5,	6,	4,	2,	25,	4,	58,	10,	40,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	129,	10,	"Marcus Mattson",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	59,	65,	0,	0,	1,	1,	6,	5,	5,	26,	4,	65,	10,	33,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	130,	10,	"Jack Weber",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	64,	62,	0,	0,	0,	5,	2,	6,	5,	27,	4,	63,	10,	36,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	131,	10,	"Tony Zimmerman",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	62,	66,	0,	0,	1,	2,	6,	2,	7,	24,	4,	66,	10,	38,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	132,	10,	"Chris Wiford",	0,	14,	0.05,	"",	"",	"",	"",	"",	"x",	"",	63,	68,	0,	0,	2,	0,	5,	3,	8,	24,	4,	72,	10,	35,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	133,	10,	"John LaRue",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	71,	64,	0,	0,	0,	2,	5,	6,	5,	19,	4,	84,	10,	32,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	134,	10,	"Scott Rainey",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	63,	73,	0,	0,	0,	5,	2,	4,	7,	16,	4,	80,	10,	40,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	135,	10,	"Jeff Gilligan",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	73,	65,	0,	0,	0,	2,	4,	5,	7,	23,	4,	85,	10,	30,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		[	136,	10,	"Doug Wiford",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"x",	63,	78,	0,	0,	1,	2,	1,	5,	9,	23,	4,	79,	10,	39,	4,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18,	],
		
		[	137,	11,	"Mitch Frazier",	7,	0,	0,	"",	"",	"",	"x",	"x",	"x",	"",	38,	41,	0,	2,	9,	5,	2,	0,	0,	14,	4,	46,	10,	19,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	138,	11,	"Doug Murray",	0,	1,	1.71,	"",	"",	"",	"",	"",	"",	"",	40,	42,	0,	0,	10,	7,	0,	1,	0,	15,	4,	44,	10,	23,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	139,	11,	"Eric Martorana",	0,	2,	1.14,	"",	"",	"",	"",	"",	"",	"",	46,	44,	1,	0,	5,	7,	3,	1,	1,	16,	4,	50,	10,	24,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	140,	11,	"Jim Schaffranek",	0,	3,	0.95,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	7,	5,	4,	2,	0,	13,	4,	53,	10,	25,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	141,	11,	"Jeremy Gary",	0,	4,	0.81,	"",	"",	"",	"",	"",	"",	"",	45,	47,	0,	1,	3,	9,	3,	2,	0,	17,	4,	48,	10,	27,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	142,	11,	"Marvin Koch",	0,	4,	0.81,	"",	"x",	"",	"",	"",	"",	"",	43,	49,	0,	0,	5,	8,	4,	0,	1,	16,	4,	51,	10,	25,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	143,	11,	"Jimmy Fedrick",	0,	6,	0.62,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	6,	5,	5,	1,	1,	18,	4,	49,	10,	27,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	144,	11,	"Jason Strickland",	1,	6,	0.62,	"",	"",	"",	"",	"",	"",	"",	44,	49,	0,	0,	2,	11,	5,	0,	0,	16,	4,	52,	10,	25,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	145,	11,	"Tim Collins",	5,	8,	0.43,	"",	"",	"",	"",	"",	"",	"",	44,	47,	0,	1,	3,	9,	4,	1,	0,	16,	4,	49,	10,	26,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	146,	11,	"Tony Zimmerman",	0,	8,	0.43,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	0,	5,	7,	3,	2,	1,	15,	4,	55,	10,	26,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	147,	11,	"Kirk Lammers",	0,	10,	0.29,	"",	"",	"x",	"",	"",	"",	"",	50,	52,	0,	0,	5,	6,	2,	2,	3,	19,	4,	54,	10,	29,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	148,	11,	"Chris Wiford",	0,	11,	0.19,	"",	"",	"",	"",	"",	"",	"",	52,	54,	0,	0,	3,	3,	7,	4,	1,	16,	4,	57,	10,	33,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	149,	11,	"Derrick Hitchens",	0,	12,	0.1,	"",	"",	"",	"",	"",	"",	"",	54,	54,	0,	0,	4,	6,	1,	3,	4,	20,	4,	56,	10,	32,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	150,	11,	"Giang Nguyen",	0,	13,	0.08,	"",	"",	"",	"",	"",	"",	"",	54,	55,	0,	0,	3,	3,	4,	6,	2,	21,	4,	59,	10,	29,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	151,	11,	"Jack Weber",	0,	13,	0.08,	"",	"",	"",	"",	"",	"",	"",	55,	54,	0,	0,	1,	5,	7,	3,	2,	18,	4,	59,	10,	32,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	152,	11,	"Kim Niswander",	0,	15,	0.05,	"",	"",	"",	"",	"",	"",	"",	59,	51,	0,	0,	1,	5,	8,	1,	3,	18,	4,	65,	10,	27,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	153,	11,	"Doug Wiford",	0,	16,	0.3,	"",	"",	"",	"",	"",	"",	"",	58,	54,	0,	0,	2,	3,	5,	5,	3,	22,	4,	62,	10,	28,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	154,	11,	"John LaRue",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	56,	58,	0,	1,	1,	3,	8,	1,	4,	19,	4,	56,	10,	39,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		[	155,	11,	"Jeff Gilligan",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"x",	59,	60,	0,	0,	0,	3,	6,	5,	4,	23,	4,	62,	10,	34,	4,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19,	],
		
		[	156,	12,	"Ryan Rainey",	2,	1,	1.18,	"",	"",	"",	"x",	"",	"",	"",	45,	42,	0,	0,	6,	10,	1,	1,	0,	15,	4,	48,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	157,	12,	"Doug Murray",	1,	2,	0.79,	"",	"",	"",	"",	"",	"x",	"",	44,	45,	0,	1,	6,	4,	7,	0,	0,	12,	4,	53,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	158,	12,	"Jason Strickland",	1,	3,	0.66,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	3,	10,	4,	1,	0,	18,	4,	50,	10,	25,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	159,	12,	"Todd Koch",	2,	4,	0.59,	"",	"",	"",	"",	"",	"",	"",	45,	50,	0,	0,	2,	13,	1,	1,	1,	16,	4,	55,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	160,	12,	"Eric Martorana",	0,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	50,	50,	0,	0,	6,	4,	3,	3,	2,	19,	4,	55,	10,	26,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	161,	12,	"Scott Rainey",	0,	6,	0.46,	"",	"",	"",	"",	"",	"",	"",	56,	47,	0,	0,	4,	4,	4,	5,	1,	21,	4,	56,	10,	26,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	162,	12,	"Jimmy Fedrick",	0,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	51,	55,	0,	1,	2,	3,	6,	4,	2,	20,	4,	57,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	163,	12,	"Marvin Koch",	0,	8,	0.33,	"",	"",	"x",	"",	"",	"",	"",	58,	52,	0,	0,	2,	6,	5,	1,	4,	21,	4,	66,	10,	23,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	164,	12,	"Tony Zimmerman",	0,	9,	0.26,	"",	"x",	"",	"",	"",	"",	"",	51,	61,	0,	0,	2,	3,	7,	3,	3,	20,	4,	63,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	165,	12,	"Kirk Lammers",	0,	10,	0.2,	"",	"",	"",	"",	"",	"",	"",	67,	51,	0,	0,	1,	5,	4,	4,	4,	18,	4,	66,	10,	34,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	166,	12,	"Jeff Gilligan",	0,	11,	0.13,	"",	"",	"",	"",	"",	"",	"",	60,	62,	0,	0,	0,	4,	3,	6,	5,	18,	4,	70,	10,	34,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	167,	12,	"Chris Wineinger",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	66,	59,	0,	0,	1,	4,	1,	5,	7,	21,	4,	75,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	168,	12,	"Chris Wiford",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	68,	58,	0,	0,	0,	3,	3,	8,	4,	23,	4,	74,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		[	169,	12,	"Derrick Hitchens",	0,	14,	0.05,	"",	"",	"",	"",	"x",	"",	"x",	68,	61,	0,	0,	2,	3,	2,	5,	6,	23,	4,	76,	10,	30,	4,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14,	],
		
		[	170,	13,	"Jason Strickland",	0,	1,	1.26,	"",	"",	"",	"x",	"",	"",	"",	43,	42,	0,	0,	9,	6,	2,	1,	0,	13,	4,	51,	10,	21,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	171,	13,	"Ryan Rainey",	2,	2,	0.84,	"",	"",	"",	"",	"",	"x",	"",	49,	43,	0,	1,	5,	5,	5,	2,	0,	15,	4,	52,	10,	25,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	172,	13,	"Jordan Schaffranek",	0,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	4,	8,	3,	3,	0,	18,	4,	53,	10,	24,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	173,	13,	"Doug Murray",	1,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	1,	4,	7,	4,	1,	1,	17,	4,	52,	10,	26,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	174,	13,	"Marvin Koch",	0,	4,	0.6,	"",	"x",	"",	"",	"",	"",	"",	46,	50,	0,	0,	4,	8,	4,	1,	1,	19,	4,	55,	10,	22,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	175,	13,	"Eric Martorana",	0,	6,	0.49,	"",	"",	"",	"",	"x",	"",	"",	51,	49,	0,	0,	6,	2,	5,	4,	1,	15,	4,	58,	10,	27,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	176,	13,	"Kirk Lammers",	0,	7,	0.42,	"",	"",	"",	"",	"",	"",	"",	54,	47,	0,	0,	4,	6,	4,	2,	2,	14,	4,	63,	10,	24,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	177,	13,	"Tim Collins",	4,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	59,	40,	0,	0,	6,	5,	1,	4,	2,	18,	4,	57,	10,	24,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	178,	13,	"Tony Zimmerman",	0,	9,	0.28,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	2,	4,	7,	3,	2,	15,	4,	61,	10,	31,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	179,	13,	"Jimmy Fedrick",	0,	10,	0.21,	"",	"",	"",	"",	"",	"",	"",	55,	53,	0,	1,	2,	3,	6,	3,	3,	17,	4,	61,	10,	30,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	180,	13,	"Chris Wiford",	0,	11,	0.11,	"",	"",	"x",	"",	"",	"",	"",	55,	57,	0,	0,	1,	5,	4,	5,	3,	16,	4,	70,	10,	26,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	181,	13,	"Jeremy Gary",	0,	11,	0.11,	"",	"x",	"",	"",	"",	"",	"",	54,	58,	0,	0,	3,	5,	1,	5,	4,	21,	4,	61,	10,	30,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	182,	13,	"Jim Schaffranek",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	56,	57,	0,	0,	1,	8,	2,	3,	4,	17,	4,	67,	10,	29,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	183,	13,	"Doug Wiford",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	62,	52,	0,	1,	1,	3,	5,	3,	5,	19,	4,	66,	10,	29,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	184,	13,	"John LaRue",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	59,	56,	0,	0,	0,	6,	4,	5,	3,	18,	4,	64,	10,	33,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	185,	13,	"Derrick Hitchens",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	60,	59,	0,	0,	0,	4,	5,	5,	4,	23,	4,	69,	10,	27,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	186,	13,	"Marcus Mattson",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	64,	55,	0,	1,	1,	2,	5,	5,	4,	19,	4,	72,	10,	28,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	187,	13,	"Scott Rainey",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	71,	53,	0,	0,	0,	4,	5,	4,	5,	22,	4,	71,	10,	31,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	188,	13,	"Giang Nguyen",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	66,	59,	0,	0,	1,	5,	3,	1,	8,	17,	4,	72,	10,	36,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	189,	13,	"David Robertson",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	70,	59,	0,	0,	0,	0,	6,	6,	6,	25,	4,	69,	10,	35,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		[	190,	13,	"Jeff Gilligan",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"x",	69,	72,	0,	0,	1,	0,	5,	4,	8,	23,	4,	89,	10,	29,	4,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21,	],
		
		[	191,	14,	"Jason Strickland",	0,	1,	1.35,	"W",	"",	"",	"",	"",	"",	"",	48,	45,	0,	0,	5,	7,	4,	2,	0,	18,	4,	51,	10,	24,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	192,	14,	"Todd Koch",	2,	2,	0.83,	"L",	"",	"",	"x",	"",	"",	"",	44,	47,	0,	0,	7,	6,	3,	1,	1,	16,	4,	48,	10,	27,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	193,	14,	"Marvin Koch",	0,	2,	0.83,	"L",	"",	"",	"",	"",	"x",	"",	42,	51,	0,	1,	6,	6,	0,	4,	1,	16,	4,	50,	10,	27,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	194,	14,	"Doug Murray",	1,	4,	0.68,	"",	"",	"",	"",	"",	"",	"",	44,	49,	0,	0,	6,	7,	3,	1,	1,	14,	4,	54,	10,	25,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	195,	14,	"Tim Collins",	4,	5,	0.6,	"",	"",	"",	"",	"",	"",	"",	47,	45,	0,	0,	5,	7,	5,	1,	0,	15,	4,	48,	10,	29,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	196,	14,	"Jim Schaffranek",	0,	6,	0.53,	"",	"",	"",	"",	"",	"",	"",	57,	46,	0,	0,	5,	5,	3,	2,	3,	21,	4,	55,	10,	27,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	197,	14,	"Giang Nguyen",	0,	7,	0.41,	"",	"",	"",	"",	"",	"",	"",	52,	52,	0,	0,	3,	7,	3,	2,	3,	15,	4,	58,	10,	31,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	198,	14,	"Jordan Schaffranek",	0,	7,	0.41,	"",	"",	"",	"",	"",	"",	"",	52,	52,	0,	1,	2,	5,	6,	2,	2,	16,	4,	56,	10,	32,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	199,	14,	"Eric Pierce",	0,	9,	0.26,	"",	"",	"x",	"",	"",	"",	"",	55,	55,	0,	0,	2,	3,	7,	4,	2,	18,	4,	60,	10,	32,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	200,	14,	"Jimmy Fedrick",	0,	9,	0.26,	"",	"",	"",	"",	"",	"",	"",	53,	57,	0,	0,	1,	4,	6,	6,	1,	19,	4,	65,	10,	26,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	201,	14,	"Tony Zimmerman",	0,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	54,	58,	0,	0,	1,	5,	5,	5,	2,	18,	4,	67,	10,	27,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	202,	14,	"David Robertson",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	59,	55,	0,	0,	0,	5,	6,	4,	3,	21,	4,	64,	10,	29,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	203,	14,	"Marcus Mattson",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	58,	57,	0,	0,	2,	3,	4,	4,	5,	18,	4,	70,	10,	27,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	204,	14,	"Derrick Hitchens",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	56,	60,	0,	1,	0,	3,	8,	2,	4,	21,	4,	63,	10,	32,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	205,	14,	"John LaRue",	0,	15,	0.04,	"",	"",	"",	"",	"x",	"",	"",	63,	54,	0,	0,	1,	6,	4,	2,	5,	19,	4,	69,	10,	29,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	206,	14,	"Chris Wiford",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	63,	56,	0,	0,	0,	6,	3,	5,	4,	20,	4,	60,	10,	39,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	207,	14,	"Doug Wiford",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	59,	61,	0,	0,	2,	4,	2,	5,	5,	21,	4,	69,	10,	30,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	208,	14,	"Jeff Gilligan",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	57,	64,	0,	0,	1,	6,	3,	2,	6,	17,	4,	69,	10,	35,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		[	209,	14,	"Kirk Lammers",	0,	19,	0,	"",	"x",	"",	"",	"",	"",	"x",	57,	67,	0,	0,	1,	2,	5,	4,	6,	19,	4,	71,	10,	34,	4,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19,	],
		
		[	210,	15,	"Doug Murray",	0,	1,	1.27,	"",	"x",	"",	"",	"",	"",	"",	40,	48,	0,	0,	8,	7,	1,	1,	1,	13,	4,	53,	10,	22,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	211,	15,	"Todd Koch",	1,	2,	0.77,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	3,	13,	1,	0,	1,	17,	4,	51,	10,	23,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	212,	15,	"Jason Strickland",	0,	2,	0.77,	"",	"",	"",	"",	"",	"",	"",	45,	47,	0,	1,	2,	9,	6,	0,	0,	16,	4,	52,	10,	24,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	213,	15,	"Mitch Frazier",	8,	4,	0.63,	"",	"",	"",	"x",	"",	"",	"",	47,	39,	0,	2,	5,	8,	2,	0,	1,	15,	4,	47,	10,	24,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	214,	15,	"Marvin Koch",	0,	5,	0.56,	"",	"x",	"",	"",	"",	"x",	"",	44,	52,	0,	0,	5,	7,	5,	0,	1,	15,	4,	51,	10,	30,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	215,	15,	"Jimmy Fedrick",	0,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	55,	46,	0,	0,	5,	3,	6,	2,	2,	18,	4,	56,	10,	27,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	216,	15,	"Giang Nguyen",	0,	7,	0.42,	"",	"",	"x",	"",	"",	"",	"",	54,	51,	0,	0,	2,	5,	5,	6,	0,	15,	4,	62,	10,	28,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	217,	15,	"Doug Wiford",	0,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	51,	55,	0,	0,	1,	10,	1,	2,	4,	18,	4,	61,	10,	27,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	218,	15,	"Derrick Hitchens",	0,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	54,	55,	0,	0,	0,	7,	7,	1,	3,	19,	4,	58,	10,	32,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	219,	15,	"John LaRue",	0,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	54,	55,	0,	1,	0,	3,	8,	5,	1,	20,	4,	61,	10,	28,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	220,	15,	"Tony Zimmerman",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	52,	58,	0,	1,	1,	5,	5,	3,	3,	22,	4,	58,	10,	30,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	221,	15,	"David Robertson",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	59,	54,	0,	0,	0,	6,	6,	2,	4,	20,	4,	61,	10,	32,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	222,	15,	"Kirk Lammers",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	59,	59,	0,	0,	1,	1,	5,	10,	1,	23,	4,	63,	10,	32,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	223,	15,	"Jeff Gilligan",	0,	14,	0.05,	"",	"",	"",	"",	"x",	"",	"",	59,	62,	0,	0,	2,	2,	4,	4,	6,	22,	4,	65,	10,	34,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		[	224,	15,	"Chris Wiford",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"x",	66,	65,	0,	0,	0,	0,	7,	3,	8,	23,	4,	69,	10,	39,	4,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15,	],
		
		[	225,	16,	"Doug Murray",	0,	1,	0.7,	"",	"",	"",	"x",	"",	"",	"",	47,	47,	0,	0,	6,	5,	3,	4,	0,	16,	4,	61,	11,	17,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	226,	16,	"Jason Strickland",	0,	2,	0.47,	"",	"",	"",	"",	"x",	"",	"",	51,	46,	0,	0,	3,	10,	3,	0,	2,	16,	4,	62,	11,	19,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	227,	16,	"Jimmy Fedrick",	0,	3,	0.39,	"",	"",	"",	"",	"",	"",	"",	50,	49,	0,	0,	4,	5,	6,	1,	2,	21,	4,	59,	11,	19,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	228,	16,	"Derrick Hitchens",	0,	4,	0.35,	"",	"",	"",	"",	"",	"x",	"",	57,	56,	0,	0,	3,	4,	4,	2,	5,	19,	4,	69,	11,	25,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	229,	16,	"John LaRue",	0,	5,	0.29,	"",	"",	"x",	"",	"",	"",	"",	58,	57,	0,	0,	1,	4,	3,	6,	4,	18,	4,	75,	11,	22,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	230,	16,	"Tony Zimmerman",	0,	5,	0.29,	"",	"",	"",	"",	"",	"",	"",	56,	59,	0,	0,	0,	5,	5,	5,	3,	24,	4,	72,	11,	19,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	231,	16,	"Chris Wiford",	0,	7,	0.23,	"",	"x",	"",	"",	"",	"",	"",	55,	61,	0,	0,	0,	5,	4,	6,	3,	20,	4,	71,	11,	25,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	232,	16,	"Kirk Lammers",	0,	8,	0.19,	"",	"",	"",	"",	"",	"",	"",	69,	60,	0,	0,	0,	2,	5,	5,	6,	25,	4,	78,	11,	26,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	233,	16,	"Jeff Gilligan",	0,	9,	0.16,	"",	"",	"",	"",	"",	"",	"",	66,	66,	0,	0,	3,	2,	2,	2,	9,	20,	4,	85,	11,	27,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		[	234,	16,	"Doug Wiford",	0,	10,	0.12,	"",	"",	"",	"",	"",	"",	"x",	77,	56,	0,	0,	1,	1,	7,	4,	5,	20,	4,	87,	11,	26,	3,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10,	],
		
		[	235,	17,	"Jason Strickland",	0,	1,	0.71,	"",	"",	"",	"x",	"",	"",	"",	42,	47,	0,	1,	6,	6,	4,	0,	1,	12,	4,	51,	10,	26,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	236,	17,	"Doug Murray",	0,	2,	0.43,	"",	"",	"",	"",	"",	"",	"",	49,	48,	0,	0,	3,	7,	6,	2,	0,	17,	4,	53,	10,	27,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	237,	17,	"Tim Collins",	4,	2,	0.43,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	5,	7,	4,	2,	0,	14,	4,	54,	10,	25,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	238,	17,	"Jeff Nasci",	0,	4,	0.35,	"",	"",	"",	"",	"",	"",	"",	49,	51,	0,	0,	2,	7,	7,	1,	1,	18,	4,	53,	10,	29,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	239,	17,	"Doug Wiford",	0,	5,	0.32,	"",	"",	"x",	"",	"",	"",	"",	55,	55,	0,	0,	1,	8,	4,	1,	4,	15,	4,	62,	10,	33,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	240,	17,	"Chris Wiford",	0,	6,	0.28,	"",	"",	"",	"",	"",	"x",	"",	64,	53,	0,	0,	2,	1,	5,	7,	3,	21,	4,	65,	10,	31,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	241,	17,	"Jeff Gilligan",	0,	7,	0.24,	"",	"",	"",	"",	"",	"",	"",	59,	61,	0,	0,	2,	2,	2,	8,	4,	23,	4,	66,	10,	31,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	242,	17,	"Terry Collins",	0,	8,	0.2,	"",	"x",	"",	"",	"",	"",	"",	57,	71,	0,	0,	0,	2,	8,	4,	4,	25,	4,	73,	10,	30,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		[	243,	17,	"Dustin Schmidt",	0,	9,	0.16,	"",	"",	"",	"",	"x",	"",	"x",	61,	69,	0,	0,	0,	3,	4,	4,	7,	26,	4,	70,	10,	34,	4,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9,	],
		
		[	244,	18,	"Jason Strickland",	0,	1,	0.64,	"",	"",	"",	"x",	"",	"",	"",	59,	44,	0,	1,	3,	4,	5,	3,	2,	17,	4,	57,	10,	29,	4,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6,	],
		[	245,	18,	"Jeff Nasci",	0,	2,	0.43,	"",	"",	"",	"",	"",	"",	"",	57,	58,	0,	0,	2,	3,	6,	3,	4,	18,	4,	60,	10,	37,	4,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6,	],
		[	246,	18,	"Jeff Gilligan",	0,	3,	0.36,	"",	"",	"",	"",	"",	"",	"",	65,	60,	0,	0,	0,	3,	6,	2,	7,	17,	4,	74,	10,	34,	4,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6,	],
		[	247,	18,	"Chris Wiford",	0,	4,	0.32,	"",	"",	"x",	"",	"",	"",	"",	68,	59,	0,	0,	0,	2,	5,	5,	6,	22,	4,	70,	10,	35,	4,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6,	],
		[	248,	18,	"Dustin Schmidt",	0,	5,	0.29,	"",	"x",	"",	"",	"",	"",	"",	64,	68,	0,	0,	2,	1,	4,	2,	9,	20,	4,	73,	10,	39,	4,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6,	],
		[	249,	18,	"Doug Wiford",	0,	6,	0.25,	"",	"",	"",	"",	"x",	"x",	"x",	69,	65,	0,	0,	1,	3,	2,	5,	7,	20,	4,	76,	10,	38,	4,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6,	],
		
		[	250,	19,	"Marvin Koch",	0,	1,	0.34,	"",	"",	"",	"x",	"x",	"",	"",	48,	46,	0,	0,	5,	6,	5,	2,	0,	16,	4,	54,	10,	24,	4,	"Kyber Run",	"F.U. Open",	"06-08-2014",	"Y",	2014,	"June",	4,	],
		[	251,	19,	"Jason Strickland",	0,	2,	0.23,	"",	"",	"x",	"",	"",	"",	"",	52,	43,	0,	0,	6,	5,	6,	0,	1,	18,	4,	49,	10,	28,	4,	"Kyber Run",	"F.U. Open",	"06-08-2014",	"Y",	2014,	"June",	4,	],
		[	252,	19,	"Dustin Schmidt",	0,	3,	0.19,	"",	"",	"",	"",	"",	"x",	"",	58,	55,	0,	0,	1,	6,	5,	2,	4,	20,	4,	64,	10,	29,	4,	"Kyber Run",	"F.U. Open",	"06-08-2014",	"Y",	2014,	"June",	4,	],
		[	253,	19,	"Jeff Gilligan",	0,	4,	0.17,	"",	"x",	"",	"",	"",	"",	"x",	65,	73,	0,	0,	0,	2,	2,	5,	9,	23,	4,	81,	10,	34,	4,	"Kyber Run",	"F.U. Open",	"06-08-2014",	"Y",	2014,	"June",	4,	],
		
		[	254,	20,	"Jason Strickland",	0,	1,	0.42,	"",	"",	"",	"x",	"",	"",	"",	47,	41,	0,	2,	4,	8,	3,	0,	1,	16,	4,	47,	10,	25,	4,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6,	],
		[	255,	20,	"Marvin Koch",	0,	2,	0.28,	"",	"",	"",	"",	"x",	"",	"",	50,	53,	0,	0,	4,	2,	8,	3,	1,	19,	4,	58,	10,	26,	4,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6,	],
		[	256,	20,	"Chris Wiford",	0,	3,	0.23,	"",	"",	"x",	"",	"",	"",	"",	53,	54,	0,	0,	2,	4,	7,	3,	2,	20,	4,	58,	10,	29,	4,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6,	],
		[	257,	20,	"Doug Wiford",	0,	4,	0.21,	"",	"",	"",	"",	"",	"",	"",	54,	60,	0,	0,	5,	2,	4,	2,	5,	20,	4,	71,	10,	23,	4,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6,	],
		[	258,	20,	"Dustin Schmidt",	0,	5,	0.19,	"",	"",	"",	"",	"",	"",	"",	69,	52,	0,	0,	3,	2,	6,	3,	4,	16,	4,	73,	10,	32,	4,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6,	],
		[	259,	20,	"Jeff Gilligan",	0,	6,	0.16,	"",	"x",	"",	"",	"",	"",	"x",	56,	69,	0,	0,	1,	3,	5,	1,	8,	16,	4,	73,	10,	36,	4,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6,	],
		
		[	260,	21,	"Jason Strickland",	1,	1,	0.47,	"",	"",	"",	"x",	"x",	"",	"",	46,	51,	0,	0,	4,	9,	1,	2,	2,	19,	4,	56,	10,	22,	4,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6,	],
		[	261,	21,	"Marvin Koch",	0,	2,	0.32,	"",	"",	"",	"",	"",	"x",	"",	55,	47,	0,	0,	3,	6,	7,	0,	2,	20,	4,	58,	10,	24,	4,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6,	],
		[	262,	21,	"Chris Wiford",	0,	3,	0.26,	"",	"",	"",	"",	"",	"",	"",	52,	54,	0,	0,	2,	3,	9,	3,	1,	19,	4,	60,	10,	27,	4,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6,	],
		[	263,	21,	"Doug Wiford",	0,	4,	0.24,	"",	"",	"x",	"",	"",	"",	"",	53,	62,	0,	0,	0,	7,	5,	2,	4,	19,	4,	68,	10,	28,	4,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6,	],
		[	264,	21,	"Jeff Gilligan",	0,	5,	0.21,	"",	"",	"",	"",	"",	"",	"",	65,	61,	0,	0,	3,	1,	5,	2,	7,	17,	4,	70,	10,	39,	4,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6,	],
		[	265,	21,	"Dustin Schmidt",	0,	6,	0.18,	"",	"x",	"",	"",	"",	"",	"x",	58,	71,	0,	0,	1,	5,	5,	1,	6,	22,	4,	64,	10,	43,	4,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6,	],
		
		[	266,	22,	"Jason Strickland",	1,	1,	0.42,	"",	"",	"",	"x",	"",	"x",	"",	46,	45,	0,	0,	5,	9,	3,	0,	1,	14,	4,	52,	10,	25,	4,	"Chapel Hill",	"MGA Championship",	"08-17-2014",	"Y",	2014,	"August",	5,	],
		[	267,	22,	"Chris Wiford",	0,	2,	0.28,	"",	"",	"",	"",	"x",	"",	"",	61,	53,	0,	0,	3,	3,	3,	5,	4,	22,	4,	65,	10,	27,	4,	"Chapel Hill",	"MGA Championship",	"08-17-2014",	"Y",	2014,	"August",	5,	],
		[	268,	22,	"Doug Wiford",	0,	3,	0.23,	"",	"",	"x",	"",	"",	"",	"",	63,	55,	0,	0,	1,	6,	3,	2,	6,	22,	4,	68,	10,	28,	4,	"Chapel Hill",	"MGA Championship",	"08-17-2014",	"Y",	2014,	"August",	5,	],
		[	269,	22,	"Jeff Gilligan",	0,	4,	0.21,	"",	"",	"",	"",	"",	"",	"",	62,	66,	0,	0,	0,	5,	2,	4,	7,	20,	4,	76,	10,	32,	4,	"Chapel Hill",	"MGA Championship",	"08-17-2014",	"Y",	2014,	"August",	5,	],
		[	270,	22,	"Dustin Schmidt",	0,	5,	0.19,	"",	"x",	"",	"",	"",	"",	"x",	65,	70,	0,	0,	1,	3,	7,	1,	6,	24,	4,	84,	10,	27,	4,	"Chapel Hill",	"MGA Championship",	"08-17-2014",	"Y",	2014,	"August",	5,	],
		
		[	271,	23,	"Marvin Koch",	0,	1,	0.51,	"",	"",	"",	"x",	"",	"x",	"",	44,	44,	0,	1,	5,	8,	3,	1,	0,	17,	4,	49,	10,	22,	4,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6,	],
		[	272,	23,	"Jason Strickland",	1,	2,	0.34,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	1,	2,	8,	3,	3,	1,	14,	4,	57,	10,	27,	4,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6,	],
		[	273,	23,	"Chris Wiford",	0,	3,	0.28,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	4,	3,	8,	2,	1,	16,	4,	57,	10,	29,	4,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6,	],
		[	274,	23,	"Doug Wiford",	0,	4,	0.25,	"",	"",	"x",	"",	"x",	"",	"",	57,	60,	0,	0,	2,	2,	6,	3,	5,	20,	4,	64,	10,	33,	4,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6,	],
		[	275,	23,	"Jeff Gilligan",	0,	5,	0.23,	"",	"",	"",	"",	"",	"",	"",	66,	56,	0,	0,	1,	2,	6,	5,	4,	21,	4,	69,	10,	32,	4,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6,	],
		[	276,	23,	"Dustin Schmidt",	0,	6,	0.2,	"",	"x",	"",	"",	"",	"",	"x",	63,	72,	0,	0,	0,	3,	3,	5,	7,	19,	4,	79,	10,	37,	4,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6,	],
		
		[	277,	24,	"Jason Strickland",	1,	1,	0.42,	"",	"x",	"",	"x",	"",	"",	"",	45,	55,	0,	1,	2,	7,	2,	6,	0,	18,	4,	56,	10,	26,	4,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6,	],
		[	278,	24,	"Chris Wiford",	0,	2,	0.28,	"",	"",	"",	"",	"x",	"",	"",	58,	59,	0,	0,	0,	5,	5,	3,	5,	20,	4,	68,	10,	29,	4,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6,	],
		[	279,	24,	"Doug Wiford",	0,	3,	0.22,	"",	"",	"",	"",	"",	"",	"",	57,	63,	0,	0,	2,	2,	5,	3,	6,	20,	4,	70,	10,	30,	4,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6,	],
		[	280,	24,	"Jeff Gilligan",	0,	3,	0.22,	"",	"",	"x",	"",	"",	"",	"",	58,	62,	0,	0,	0,	4,	6,	4,	4,	28,	4,	62,	10,	30,	4,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6,	],
		[	281,	24,	"Marvin Koch",	0,	5,	0.19,	"",	"",	"",	"",	"",	"",	"",	60,	66,	0,	0,	1,	4,	4,	4,	5,	27,	4,	69,	10,	30,	4,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6,	],
		[	282,	24,	"Dustin Schmidt",	0,	6,	0.16,	"",	"",	"",	"",	"",	"",	"x",	81,	62,	0,	0,	0,	4,	4,	2,	8,	19,	4,	85,	10,	39,	4,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6,	],
		
		[	283,	25,	"Jason Strickland",	0,	1,	0.56,	"",	"",	"",	"x",	"",	"",	"",	45,	54,	0,	0,	3,	9,	3,	1,	2,	16,	4,	58,	10,	25,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		[	284,	25,	"Chad Schoch",	0,	2,	0.37,	"",	"",	"",	"",	"",	"",	"",	50,	50,	0,	1,	3,	6,	4,	2,	2,	20,	4,	60,	10,	20,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		[	285,	25,	"John Leite",	0,	3,	0.31,	"",	"",	"",	"",	"",	"",	"",	46,	55,	0,	0,	5,	5,	5,	1,	2,	17,	4,	55,	10,	29,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		[	286,	25,	"Jordan Adams",	0,	4,	0.28,	"",	"x",	"",	"",	"",	"",	"",	59,	51,	0,	0,	2,	4,	4,	6,	2,	22,	4,	60,	10,	28,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		[	287,	25,	"DJ Maley",	0,	5,	0.25,	"",	"",	"x",	"",	"",	"x",	"",	62,	58,	0,	0,	2,	2,	5,	4,	5,	15,	4,	68,	10,	37,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		[	288,	25,	"Jeff Gilligan",	0,	6,	0.22,	"",	"",	"",	"",	"",	"",	"",	67,	71,	0,	0,	1,	2,	4,	1,	10,	22,	4,	77,	10,	39,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		[	289,	25,	"Josh Stephens",	0,	7,	0.19,	"",	"",	"",	"",	"",	"",	"",	70,	71,	0,	0,	0,	0,	5,	3,	10,	22,	4,	80,	10,	39,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		[	290,	25,	"Dustin Schmidt",	0,	8,	0.16,	"",	"",	"",	"",	"x",	"",	"x",	73,	75,	0,	0,	0,	0,	3,	5,	10,	28,	4,	84,	10,	36,	4,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8,	],
		
		[	291,	26,	"Merrill Wheeler",	2,	1,	0.71,	"",	"",	"",	"x",	"x",	"",	"",	44,	44,	0,	0,	8,	6,	2,	2,	0,	16,	4,	52,	10,	20,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	292,	26,	"David Knowles",	4,	2,	0.47,	"",	"",	"",	"",	"",	"",	"",	47,	42,	0,	1,	4,	8,	5,	0,	0,	16,	4,	51,	10,	22,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	293,	26,	"Matt Bigelow",	0,	3,	0.39,	"",	"x",	"",	"",	"",	"",	"",	44,	51,	0,	0,	5,	6,	5,	1,	1,	14,	4,	54,	10,	27,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	294,	26,	"Jason Strickland",	0,	4,	0.35,	"",	"",	"",	"",	"",	"",	"",	51,	45,	0,	0,	2,	10,	4,	2,	0,	16,	4,	53,	10,	27,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	295,	26,	"Michael Grote",	10,	5,	0.32,	"",	"",	"x",	"",	"",	"",	"",	44,	46,	0,	0,	9,	4,	3,	0,	2,	13,	4,	51,	10,	26,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	296,	26,	"Dustin Schmidt",	0,	6,	0.28,	"",	"",	"",	"",	"",	"x",	"",	49,	55,	1,	0,	1,	5,	7,	2,	2,	16,	4,	60,	10,	28,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	297,	26,	"Chris Wiford",	0,	7,	0.24,	"",	"",	"",	"",	"",	"",	"",	55,	54,	0,	0,	2,	1,	11,	2,	2,	23,	4,	58,	10,	28,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	298,	26,	"Jeff Gilligan",	0,	8,	0.2,	"",	"",	"",	"",	"",	"",	"",	53,	58,	0,	0,	0,	6,	6,	4,	2,	21,	4,	61,	10,	29,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		[	299,	26,	"Doug Wiford",	0,	9,	0.16,	"",	"",	"",	"",	"",	"",	"x",	59,	58,	0,	1,	0,	3,	5,	5,	4,	23,	4,	67,	10,	27,	4,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9,	],
		
		[	300,	27,	"John Leite",	0,	1,	1.28,	"",	"",	"",	"x",	"",	"x",	"",	46,	46,	0,	0,	6,	7,	2,	3,	0,	14,	4,	51,	10,	27,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	301,	27,	"Merrill Wheeler",	2,	2,	0.78,	"",	"",	"",	"x",	"",	"",	"",	44,	48,	0,	1,	5,	6,	3,	3,	0,	12,	4,	55,	10,	25,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	302,	27,	"Jason Strickland",	0,	2,	0.78,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	0,	4,	9,	4,	0,	1,	16,	4,	52,	10,	26,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	303,	27,	"David Knowles",	3,	4,	0.64,	"",	"",	"",	"",	"",	"",	"",	53,	45,	0,	0,	2,	9,	6,	0,	1,	17,	4,	54,	10,	27,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	304,	27,	"Matt Bigelow",	0,	5,	0.57,	"",	"",	"",	"",	"",	"",	"",	51,	51,	0,	0,	1,	9,	4,	3,	1,	19,	4,	54,	10,	29,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	305,	27,	"Michael Grote",	7,	6,	0.5,	"",	"",	"",	"",	"x",	"",	"",	51,	46,	0,	0,	3,	9,	4,	1,	1,	16,	4,	53,	10,	28,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	306,	27,	"Jordan Adams",	0,	7,	0.43,	"",	"",	"x",	"",	"",	"",	"",	52,	55,	0,	0,	3,	3,	6,	4,	2,	15,	4,	59,	10,	33,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	307,	27,	"Chris Wiford",	0,	8,	0.36,	"",	"",	"",	"",	"",	"",	"",	57,	57,	0,	0,	2,	5,	3,	3,	5,	15,	4,	67,	10,	32,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	308,	27,	"Jeff Gilligan",	0,	9,	0.29,	"",	"",	"",	"",	"",	"",	"",	59,	56,	0,	0,	0,	6,	5,	4,	3,	19,	4,	63,	10,	33,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	309,	27,	"Doug Wiford",	0,	10,	0.21,	"",	"x",	"",	"",	"",	"",	"",	54,	64,	0,	0,	0,	6,	5,	3,	4,	18,	4,	62,	10,	38,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	310,	27,	"DJ Maley",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	56,	64,	0,	0,	1,	2,	5,	6,	4,	18,	4,	68,	10,	34,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		[	311,	27,	"Dustin Schmidt",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"x",	59,	62,	0,	0,	3,	4,	2,	2,	7,	19,	4,	62,	10,	40,	4,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12,	],
		
		[	312,	28,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"x",	"x",	"",	36,	43,	0,	1,	11,	4,	2,	0,	0,	13,	4,	45,	10,	21,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	313,	28,	"David Knowles",	3,	1,	1.01,	"",	"",	"",	"",	"",	"",	"",	42,	43,	0,	2,	4,	9,	3,	0,	0,	18,	4,	44,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	314,	28,	"Matt Bigelow",	0,	2,	0.68,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	2,	4,	6,	4,	2,	0,	14,	4,	50,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	315,	28,	"Jason Strickland",	0,	3,	0.56,	"",	"",	"",	"",	"",	"",	"",	42,	49,	0,	0,	8,	5,	3,	1,	1,	15,	4,	50,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	316,	28,	"Merrill Wheeler",	2,	4,	0.51,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	1,	2,	10,	4,	0,	1,	15,	4,	52,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	317,	28,	"Michael Grote",	7,	5,	0.45,	"",	"",	"",	"",	"",	"",	"",	42,	49,	0,	1,	5,	4,	8,	0,	0,	15,	4,	54,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	318,	28,	"Andy Nentwich",	1,	6,	0.39,	"",	"",	"x",	"",	"",	"",	"",	49,	51,	0,	1,	5,	5,	3,	0,	4,	21,	4,	49,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	319,	28,	"Dave Rice",	0,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	56,	58,	0,	0,	1,	2,	8,	4,	3,	23,	4,	61,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	320,	28,	"John Leite",	0,	8,	0.28,	"",	"",	"",	"",	"",	"",	"",	58,	59,	0,	0,	1,	5,	5,	4,	3,	20,	4,	65,	10,	32,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	321,	28,	"Dustin Schmidt",	0,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	59,	61,	0,	0,	0,	5,	5,	2,	6,	20,	4,	66,	10,	34,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	322,	28,	"Joe Milacek",	0,	10,	0.17,	"",	"",	"",	"",	"",	"",	"",	55,	66,	0,	0,	0,	6,	5,	3,	4,	23,	4,	67,	10,	31,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		[	323,	28,	"Jeff Gilligan",	0,	11,	0.11,	"",	"x",	"",	"",	"",	"",	"x",	61,	79,	0,	0,	0,	5,	3,	2,	8,	20,	4,	86,	10,	34,	4,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12,	],
		
		[	324,	29,	"Matt Bigelow",	0,	1,	0.87,	"",	"",	"",	"x",	"x",	"",	"",	44,	46,	0,	0,	6,	7,	4,	1,	0,	14,	4,	53,	10,	23,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	325,	29,	"John Leite",	0,	2,	0.58,	"",	"",	"",	"",	"",	"",	"",	46,	46,	0,	0,	5,	8,	3,	2,	0,	17,	4,	52,	10,	23,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	326,	29,	"Jason Strickland",	0,	3,	0.48,	"",	"",	"",	"",	"",	"x",	"",	50,	43,	1,	0,	4,	5,	7,	0,	1,	16,	4,	53,	10,	24,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	327,	29,	"Merrill Wheeler",	1,	4,	0.43,	"",	"",	"",	"",	"",	"",	"",	49,	45,	0,	0,	2,	11,	4,	1,	0,	16,	4,	53,	10,	25,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	328,	29,	"David Knowles",	3,	5,	0.36,	"",	"",	"",	"",	"",	"",	"",	48,	45,	0,	1,	3,	8,	4,	2,	0,	19,	4,	52,	10,	22,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	329,	29,	"Jeff Gilbert",	1,	5,	0.36,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	6,	5,	3,	4,	0,	16,	4,	55,	10,	24,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	330,	29,	"Jordan Adams",	0,	7,	0.29,	"",	"",	"x",	"",	"",	"",	"",	49,	55,	0,	0,	2,	8,	3,	2,	3,	20,	4,	57,	10,	27,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	331,	29,	"Jeff Gilligan",	0,	8,	0.24,	"",	"",	"",	"",	"",	"",	"",	62,	52,	0,	0,	1,	7,	3,	4,	3,	18,	4,	65,	10,	31,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	332,	29,	"Dustin Schmidt",	0,	9,	0.19,	"",	"",	"",	"",	"",	"",	"",	55,	60,	0,	0,	0,	3,	8,	5,	2,	23,	4,	62,	10,	30,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	333,	29,	"Doug Wiford",	0,	10,	0.14,	"",	"",	"",	"",	"",	"",	"",	63,	72,	0,	0,	0,	1,	1,	9,	7,	22,	4,	75,	10,	38,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		[	334,	29,	"Chad Schoch",	0,	11,	0.1,	"",	"x",	"",	"",	"",	"",	"x",	63,	75,	0,	0,	0,	3,	7,	1,	7,	19,	4,	75,	10,	44,	4,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11,	],
		
		[	335,	30,	"Connor Mazza",	15,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	39,	37,	0,	3,	11,	1,	3,	0,	0,	14,	4,	42,	10,	20,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	336,	30,	"Andy Nentwich",	0,	1,	1.35,	"W",	"",	"",	"",	"",	"x",	"",	42,	40,	0,	4,	6,	4,	3,	0,	1,	18,	4,	45,	10,	19,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	337,	30,	"Jeff Gilbert",	0,	2,	0.9,	"L",	"",	"",	"",	"",	"",	"",	43,	39,	0,	3,	5,	7,	3,	0,	0,	12,	4,	49,	10,	21,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	338,	30,	"Jason Strickland",	0,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	43,	42,	1,	2,	7,	4,	0,	3,	1,	13,	4,	54,	10,	18,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	339,	30,	"Michael Grote",	6,	4,	0.64,	"",	"x",	"",	"",	"",	"",	"",	37,	45,	0,	3,	7,	5,	1,	2,	0,	14,	4,	51,	10,	17,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	340,	30,	"David Knowles",	3,	4,	0.64,	"",	"",	"",	"",	"x",	"",	"",	46,	39,	0,	0,	9,	6,	2,	1,	0,	18,	4,	45,	10,	22,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	341,	30,	"John Leite",	0,	6,	0.53,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	6,	8,	3,	1,	0,	16,	4,	51,	10,	22,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	342,	30,	"Joe Milacek",	0,	7,	0.45,	"",	"x",	"",	"",	"",	"",	"",	42,	50,	0,	2,	4,	7,	2,	2,	1,	16,	4,	51,	10,	25,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	343,	30,	"Merrill Wheeler",	1,	8,	0.38,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	9,	5,	1,	1,	2,	16,	4,	54,	10,	22,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	344,	30,	"Chad Schoch",	0,	9,	0.3,	"",	"",	"x",	"",	"",	"",	"",	54,	44,	1,	0,	3,	5,	5,	3,	1,	17,	4,	61,	10,	20,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	345,	30,	"Matt Bigelow",	0,	10,	0.23,	"",	"",	"",	"",	"",	"",	"",	52,	47,	0,	2,	5,	2,	4,	2,	3,	15,	4,	58,	10,	26,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	346,	30,	"Chris Wiford",	0,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	4,	5,	4,	4,	1,	17,	4,	56,	10,	28,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	347,	30,	"Dave Rice",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	53,	51,	0,	0,	2,	7,	3,	5,	1,	23,	4,	53,	10,	28,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	348,	30,	"Josh Stephens",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	55,	51,	0,	0,	2,	6,	5,	3,	2,	21,	4,	60,	10,	25,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	349,	30,	"Jeff Gilligan",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	54,	56,	0,	0,	3,	6,	3,	3,	3,	16,	4,	71,	10,	23,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	350,	30,	"Dustin Schmidt",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	59,	61,	0,	1,	3,	4,	1,	4,	5,	30,	4,	60,	10,	30,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		[	351,	30,	"Doug Wiford",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"x",	78,	53,	0,	0,	1,	3,	4,	7,	3,	30,	4,	69,	10,	32,	4,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17,	],
		
		[	352,	31,	"Jason Strickland",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	40,	41,	0,	1,	7,	8,	2,	0,	0,	14,	4,	56,	12,	11,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	353,	31,	"Matt Bigelow",	0,	2,	0.9,	"",	"",	"",	"",	"",	"x",	"",	46,	45,	0,	2,	2,	7,	6,	0,	1,	16,	4,	65,	12,	10,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	354,	31,	"Dustin Wood",	0,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	0,	3,	9,	5,	0,	1,	17,	4,	64,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	355,	31,	"Joe Milacek",	0,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	0,	3,	8,	6,	1,	0,	16,	4,	66,	12,	11,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	356,	31,	"David Knowles",	3,	5,	0.6,	"",	"",	"",	"",	"x",	"",	"",	46,	46,	0,	0,	5,	6,	6,	0,	1,	15,	4,	65,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	357,	31,	"Connor Mazza",	16,	6,	0.53,	"",	"",	"",	"x",	"",	"",	"",	41,	39,	0,	1,	9,	5,	3,	0,	0,	13,	4,	55,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	358,	31,	"Merrill Wheeler",	1,	7,	0.45,	"",	"",	"",	"",	"",	"",	"",	49,	48,	0,	0,	2,	8,	5,	3,	0,	17,	4,	65,	12,	15,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	359,	31,	"Jeff Gilbert",	2,	8,	0.38,	"",	"",	"",	"",	"",	"",	"",	47,	50,	0,	1,	2,	6,	6,	2,	1,	16,	4,	66,	12,	15,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	360,	31,	"Chris Wiford",	0,	9,	0.3,	"",	"",	"x",	"",	"",	"",	"",	52,	51,	0,	0,	0,	8,	6,	3,	1,	18,	4,	71,	12,	14,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	361,	31,	"Andy Nentwich",	2,	10,	0.23,	"",	"",	"",	"",	"",	"",	"",	49,	53,	0,	0,	3,	6,	4,	3,	2,	21,	4,	68,	12,	13,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	362,	31,	"Chad Schoch",	0,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	48,	57,	0,	0,	2,	7,	1,	6,	2,	19,	4,	72,	12,	14,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	363,	31,	"John Leite",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	55,	51,	0,	0,	3,	4,	6,	0,	5,	16,	4,	78,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	364,	31,	"Dave Rice",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	56,	53,	0,	0,	2,	1,	10,	4,	1,	22,	4,	72,	12,	15,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	365,	31,	"Jeff Gilligan",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	73,	52,	0,	0,	2,	2,	4,	4,	6,	19,	4,	88,	12,	18,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	366,	31,	"Dustin Schmidt",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	64,	69,	0,	0,	1,	0,	6,	3,	8,	33,	4,	78,	12,	22,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		[	367,	31,	"Doug Wiford",	0,	16,	0.02,	"",	"x",	"",	"",	"",	"",	"x",	64,	80,	0,	0,	0,	1,	4,	6,	7,	23,	4,	97,	12,	24,	2,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16,	],
		
		[	368,	32,	"Merrill Wheeler",	1,	1,	0.77,	"",	"x",	"",	"",	"",	"",	"",	39,	46,	0,	0,	11,	3,	3,	0,	1,	18,	5,	46,	9,	21,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	369,	32,	"Matt Bigelow",	0,	2,	0.51,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	2,	6,	5,	3,	1,	1,	22,	5,	43,	9,	23,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	370,	32,	"Andy Nentwich",	0,	3,	0.43,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	1,	4,	8,	4,	1,	0,	18,	5,	48,	9,	23,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	371,	32,	"Jason Strickland",	1,	4,	0.38,	"",	"",	"",	"",	"x",	"",	"",	44,	47,	0,	0,	6,	6,	4,	2,	0,	19,	5,	50,	9,	22,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	372,	32,	"Connor Mazza",	12,	5,	0.34,	"",	"",	"",	"x",	"",	"x",	"",	40,	42,	0,	1,	8,	6,	3,	0,	0,	21,	5,	41,	9,	20,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	373,	32,	"Dustin Wood",	0,	6,	0.3,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	6,	4,	5,	2,	1,	19,	5,	52,	9,	24,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	374,	32,	"Joe Milacek",	0,	7,	0.26,	"",	"",	"x",	"",	"",	"",	"",	52,	57,	0,	0,	2,	4,	6,	3,	3,	19,	5,	61,	9,	29,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	375,	32,	"Jeff Gilligan",	0,	8,	0.21,	"",	"",	"",	"",	"",	"",	"",	62,	56,	0,	0,	3,	4,	1,	5,	5,	27,	5,	59,	9,	32,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	376,	32,	"Dustin Schmidt",	0,	9,	0.17,	"",	"",	"",	"",	"",	"",	"",	63,	56,	0,	0,	2,	5,	4,	2,	5,	22,	5,	64,	9,	33,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	377,	32,	"Chris Wiford",	0,	10,	0.13,	"",	"",	"",	"",	"",	"",	"",	66,	56,	0,	0,	2,	1,	7,	4,	4,	23,	5,	68,	9,	31,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		[	378,	32,	"Doug Wiford",	0,	11,	0.09,	"",	"",	"",	"",	"",	"",	"x",	79,	65,	0,	0,	0,	3,	1,	2,	12,	34,	5,	75,	9,	35,	4,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11,	],
		
		[	379,	33,	"Jason Strickland",	1,	1,	1.12,	"",	"",	"",	"x",	"",	"",	"",	38,	43,	0,	1,	10,	4,	3,	0,	0,	14,	4,	44,	10,	23,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	380,	33,	"Steve Sillato",	3,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	39,	44,	0,	0,	8,	9,	1,	0,	0,	14,	4,	47,	10,	22,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	381,	33,	"Jay Sutter",	0,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	44,	43,	0,	0,	8,	7,	2,	0,	1,	13,	4,	48,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	382,	33,	"David Knowles",	2,	4,	0.53,	"",	"",	"",	"",	"x",	"",	"",	42,	44,	0,	0,	6,	11,	0,	1,	0,	15,	4,	49,	10,	22,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	383,	33,	"Matt Bigelow",	0,	4,	0.53,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	2,	4,	6,	6,	0,	0,	15,	4,	49,	10,	24,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	384,	33,	"Merrill Wheeler",	1,	6,	0.43,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	1,	4,	10,	2,	1,	0,	14,	4,	48,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	385,	33,	"Johnnie Jarrell",	5,	7,	0.37,	"",	"",	"",	"",	"",	"",	"",	40,	45,	0,	0,	11,	4,	0,	3,	0,	14,	4,	46,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	386,	33,	"John Leite",	0,	8,	0.31,	"",	"",	"",	"",	"",	"",	"",	49,	45,	0,	0,	3,	9,	5,	1,	0,	17,	4,	55,	10,	22,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	387,	33,	"Connor Mazza",	12,	9,	0.19,	"",	"",	"",	"",	"",	"",	"",	40,	45,	0,	1,	7,	7,	2,	1,	0,	17,	4,	49,	10,	19,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	388,	33,	"Andy Nentwich",	1,	9,	0.19,	"",	"",	"",	"",	"",	"",	"",	44,	52,	0,	0,	3,	10,	3,	1,	1,	20,	4,	51,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	389,	33,	"Doug Murray",	0,	9,	0.19,	"",	"",	"x",	"",	"",	"",	"",	43,	54,	0,	0,	4,	7,	3,	4,	0,	18,	4,	54,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	390,	33,	"Frank Galilei",	4,	12,	0.06,	"",	"",	"",	"",	"",	"x",	"",	50,	44,	0,	1,	4,	7,	3,	2,	1,	15,	4,	56,	10,	23,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	391,	33,	"Joe Milacek",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	51,	53,	0,	0,	2,	9,	2,	3,	2,	15,	4,	62,	10,	27,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	392,	33,	"Chip Chapman",	0,	14,	0.04,	"",	"x",	"",	"",	"",	"",	"",	45,	62,	0,	0,	3,	6,	4,	2,	3,	20,	4,	59,	10,	28,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	393,	33,	"Chad Schoch",	0,	15,	0.02,	"",	"",	"",	"",	"",	"",	"",	53,	56,	0,	0,	3,	4,	5,	3,	3,	19,	4,	68,	10,	22,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	394,	33,	"Joel Schumm",	0,	15,	0.02,	"",	"",	"",	"",	"",	"",	"",	53,	56,	0,	0,	2,	7,	5,	1,	3,	25,	4,	58,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	395,	33,	"Jeff Gilligan",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	59,	51,	0,	0,	1,	6,	7,	0,	4,	28,	4,	59,	10,	23,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	396,	33,	"Joe Cortez",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	50,	60,	0,	0,	3,	4,	5,	3,	3,	24,	4,	60,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	397,	33,	"Craig Seibert",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	60,	52,	0,	0,	3,	2,	6,	4,	3,	19,	4,	59,	10,	34,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		[	398,	33,	"Dustin Schmidt",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"x",	58,	56,	0,	0,	3,	3,	5,	4,	3,	23,	4,	56,	10,	35,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20,	],
		
		[	399,	34,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	40,	38,	0,	1,	11,	5,	1,	0,	0,	13,	4,	45,	10,	20,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	400,	34,	"Andy Nentwich",	1,	1,	1.26,	"",	"",	"",	"",	"x",	"",	"",	45,	45,	0,	0,	6,	8,	2,	2,	0,	17,	4,	51,	10,	22,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	401,	34,	"Steve Sillato",	5,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	44,	43,	0,	0,	8,	6,	3,	1,	0,	15,	4,	49,	10,	23,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	402,	34,	"Johnnie Jarrell",	5,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	1,	7,	5,	4,	0,	1,	16,	4,	51,	10,	21,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	403,	34,	"Doug Murray",	0,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	45,	49,	0,	0,	5,	6,	5,	2,	0,	17,	4,	55,	10,	22,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	404,	34,	"Frank Galilei",	2,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	45,	48,	0,	0,	5,	9,	3,	0,	1,	15,	4,	55,	10,	23,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	405,	34,	"Jason Strickland",	4,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	52,	43,	0,	0,	3,	11,	2,	1,	1,	18,	4,	53,	10,	24,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	406,	34,	"David Knowles",	4,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	49,	48,	0,	0,	3,	8,	4,	3,	0,	14,	4,	60,	10,	23,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	407,	34,	"Joe Milacek",	0,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	56,	45,	0,	0,	3,	6,	5,	3,	1,	16,	4,	58,	10,	27,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	408,	34,	"Merrill Wheeler",	1,	9,	0.25,	"",	"x",	"x",	"",	"",	"",	"",	46,	56,	0,	0,	4,	7,	1,	3,	3,	18,	4,	59,	10,	25,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	409,	34,	"John Leite",	0,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	4,	6,	1,	5,	2,	20,	4,	59,	10,	24,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	410,	34,	"Dave Rice",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	54,	50,	0,	0,	1,	5,	9,	3,	0,	17,	4,	59,	10,	28,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	411,	34,	"Matt Bugbee",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	55,	53,	0,	0,	2,	5,	5,	4,	2,	16,	4,	68,	10,	24,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	412,	34,	"Chip Chapman",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	62,	47,	0,	0,	2,	5,	7,	2,	2,	20,	4,	63,	10,	26,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	413,	34,	"Matt Bigelow",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	59,	54,	0,	0,	0,	8,	2,	6,	2,	20,	4,	68,	10,	25,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	414,	34,	"Chad Schoch",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	54,	63,	0,	0,	3,	4,	3,	4,	4,	16,	4,	73,	10,	28,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	415,	34,	"Dustin Schmidt",	0,	16,	0.02,	"",	"",	"",	"",	"",	"x",	"",	61,	57,	0,	0,	2,	4,	2,	5,	5,	19,	4,	69,	10,	30,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	416,	34,	"Dustin Wood",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	59,	60,	0,	0,	0,	5,	5,	3,	5,	19,	4,	62,	10,	38,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		[	417,	34,	"Jeff Gilligan",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"x",	71,	61,	0,	0,	0,	3,	5,	3,	7,	21,	4,	75,	10,	36,	4,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19,	],
		
		[	418,	35,	"David Knowles",	2,	1,	1.71,	"W",	"",	"",	"x",	"",	"",	"",	42,	41,	0,	0,	10,	5,	3,	0,	0,	16,	4,	46,	10,	21,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	419,	35,	"Andy Nentwich",	1,	2,	1.14,	"L",	"",	"",	"",	"",	"",	"",	40,	44,	0,	1,	8,	5,	4,	0,	0,	15,	4,	46,	10,	23,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	420,	35,	"Jay Sutter",	2,	3,	0.9,	"",	"",	"",	"",	"",	"",	"",	42,	44,	0,	1,	7,	7,	1,	2,	0,	13,	4,	52,	10,	21,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	421,	35,	"Merrill Wheeler",	0,	3,	0.9,	"",	"",	"",	"",	"",	"",	"",	46,	42,	0,	0,	5,	11,	1,	1,	0,	15,	4,	47,	10,	26,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	422,	35,	"Steve Sillato",	5,	5,	0.76,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	0,	10,	4,	3,	1,	0,	14,	4,	50,	10,	21,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	423,	35,	"Jason Strickland",	4,	6,	0.67,	"",	"x",	"",	"",	"",	"",	"",	41,	49,	0,	1,	6,	5,	4,	2,	0,	15,	4,	52,	10,	23,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	424,	35,	"John Leite",	0,	7,	0.57,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	0,	2,	12,	3,	0,	1,	16,	4,	54,	10,	25,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	425,	35,	"Matt Bigelow",	0,	8,	0.48,	"",	"",	"x",	"",	"x",	"",	"",	49,	48,	0,	0,	5,	7,	2,	3,	1,	14,	4,	60,	10,	23,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	426,	35,	"Johnnie Jarrell",	5,	9,	0.38,	"",	"",	"",	"",	"",	"",	"",	45,	51,	0,	0,	5,	8,	2,	2,	1,	16,	4,	55,	10,	25,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	427,	35,	"Matt Bugbee",	0,	10,	0.29,	"",	"",	"",	"",	"",	"",	"",	54,	48,	0,	0,	4,	8,	2,	2,	2,	16,	4,	60,	10,	26,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	428,	35,	"Frank Galilei",	2,	11,	0.19,	"",	"",	"",	"",	"",	"x",	"",	49,	53,	0,	0,	3,	8,	3,	1,	3,	19,	4,	60,	10,	23,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	429,	35,	"Chip Chapman",	0,	12,	0.1,	"",	"",	"",	"",	"",	"",	"",	53,	55,	0,	0,	1,	4,	9,	2,	2,	19,	4,	62,	10,	27,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	430,	35,	"Dustin Wood",	0,	13,	0.09,	"",	"",	"",	"",	"",	"",	"",	51,	58,	0,	0,	2,	4,	7,	4,	1,	20,	4,	65,	10,	24,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	431,	35,	"John Stamper",	0,	14,	0.07,	"",	"",	"",	"",	"",	"",	"",	58,	54,	0,	0,	0,	7,	7,	1,	3,	27,	4,	59,	10,	26,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	432,	35,	"Joe Milacek",	0,	15,	0.05,	"",	"",	"",	"",	"",	"",	"",	59,	56,	0,	0,	0,	5,	6,	3,	4,	27,	4,	57,	10,	31,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	433,	35,	"Dustin Schmidt",	0,	16,	0.03,	"",	"",	"",	"",	"",	"",	"",	60,	56,	0,	0,	0,	6,	7,	1,	4,	20,	4,	63,	10,	33,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		[	434,	35,	"Chad Schoch",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"x",	62,	58,	0,	0,	0,	4,	4,	7,	3,	25,	4,	68,	10,	27,	4,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17,	],
		
		[	435,	36,	"Chad Schoch",	0,	1,	1.01,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	1,	5,	7,	3,	1,	1,	17,	4,	51,	10,	23,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	436,	36,	"Steve Sillato",	4,	2,	0.62,	"",	"",	"",	"x",	"",	"",	"",	44,	45,	0,	0,	7,	5,	6,	0,	0,	14,	4,	51,	10,	24,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	437,	36,	"Andy Nentwich",	1,	2,	0.62,	"",	"",	"",	"",	"",	"",	"",	43,	49,	0,	0,	4,	10,	2,	2,	0,	14,	4,	53,	10,	25,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	438,	36,	"David Knowles",	3,	4,	0.48,	"",	"",	"",	"",	"x",	"",	"",	46,	45,	0,	0,	8,	4,	3,	3,	0,	16,	4,	55,	10,	20,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	439,	36,	"Jay Sutter",	2,	4,	0.48,	"",	"",	"",	"",	"",	"x",	"",	48,	44,	0,	0,	7,	6,	3,	0,	2,	13,	4,	56,	10,	23,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	440,	36,	"John Stamper",	0,	6,	0.39,	"",	"",	"x",	"",	"",	"",	"",	49,	52,	0,	0,	2,	6,	8,	1,	1,	20,	4,	58,	10,	23,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	441,	36,	"Merrill Wheeler",	1,	7,	0.31,	"",	"x",	"",	"",	"",	"",	"",	45,	56,	0,	0,	3,	5,	7,	2,	1,	17,	4,	59,	10,	25,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	442,	36,	"Matt Bigelow",	0,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	49,	53,	0,	0,	3,	6,	4,	4,	1,	14,	4,	61,	10,	27,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	443,	36,	"Jason Strickland",	4,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	49,	51,	0,	0,	2,	10,	2,	3,	1,	15,	4,	62,	10,	23,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	444,	36,	"Chip Chapman",	0,	10,	0.17,	"",	"",	"",	"",	"",	"",	"",	48,	58,	0,	0,	3,	7,	3,	1,	4,	15,	4,	65,	10,	26,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	445,	36,	"Dustin Wood",	0,	11,	0.11,	"",	"x",	"",	"",	"",	"",	"",	51,	62,	0,	0,	1,	6,	2,	7,	2,	18,	4,	67,	10,	28,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		[	446,	36,	"Dustin Schmidt",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"x",	62,	71,	0,	0,	0,	2,	7,	5,	4,	22,	4,	84,	10,	27,	4,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12,	],
		
		[	447,	37,	"David Knowles",	3,	1,	1.26,	"",	"x",	"",	"x",	"",	"",	"",	39,	47,	0,	0,	7,	8,	3,	0,	0,	14,	4,	50,	10,	22,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	448,	37,	"Andy Nentwich",	2,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	45,	43,	0,	0,	6,	8,	4,	0,	0,	15,	4,	51,	10,	22,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	449,	37,	"Steve Sillato",	4,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	45,	43,	0,	1,	6,	8,	0,	3,	0,	17,	4,	47,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	450,	37,	"Jason Strickland",	4,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	47,	44,	0,	1,	4,	8,	4,	0,	1,	14,	4,	53,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	451,	37,	"Matt Bigelow",	0,	4,	0.6,	"",	"",	"",	"",	"x",	"",	"",	50,	45,	0,	1,	5,	6,	3,	2,	1,	15,	4,	60,	10,	20,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	452,	37,	"John Leite",	0,	6,	0.46,	"",	"",	"",	"",	"",	"",	"",	51,	47,	0,	0,	2,	9,	4,	3,	0,	18,	4,	51,	10,	29,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	453,	37,	"John Stamper",	0,	6,	0.46,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	3,	7,	6,	1,	1,	17,	4,	57,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	454,	37,	"Jay Sutter",	1,	8,	0.35,	"",	"",	"",	"",	"",	"x",	"",	51,	47,	0,	1,	5,	3,	6,	2,	1,	17,	4,	51,	10,	30,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	455,	37,	"Johnnie Jarrell",	3,	9,	0.28,	"",	"",	"x",	"",	"",	"",	"",	48,	51,	0,	0,	3,	10,	2,	1,	2,	16,	4,	57,	10,	26,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	456,	37,	"Dustin Wood",	0,	10,	0.21,	"",	"",	"",	"",	"",	"",	"",	50,	53,	0,	0,	2,	5,	8,	2,	1,	19,	4,	60,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	457,	37,	"Joel Schumm",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	54,	50,	0,	0,	1,	8,	5,	2,	2,	17,	4,	60,	10,	27,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	458,	37,	"Frank Galilei",	2,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	49,	55,	0,	0,	6,	2,	3,	5,	2,	19,	4,	58,	10,	27,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	459,	37,	"Craig Seibert",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	55,	51,	0,	0,	0,	8,	6,	2,	2,	19,	4,	63,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	460,	37,	"Joe Milacek",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	50,	56,	0,	1,	2,	5,	5,	1,	4,	15,	4,	62,	10,	29,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	461,	37,	"Chip Chapman",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	64,	52,	0,	0,	1,	3,	7,	3,	4,	20,	4,	68,	10,	28,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	462,	37,	"Dustin Schmidt",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	59,	58,	0,	0,	2,	4,	2,	4,	6,	20,	4,	62,	10,	35,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		[	463,	37,	"Jeff Gilligan",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"x",	58,	61,	0,	0,	0,	5,	3,	7,	3,	19,	4,	66,	10,	34,	4,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17,	],
		
		[	464,	38,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	39,	39,	0,	2,	8,	8,	0,	0,	0,	13,	4,	45,	10,	20,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	465,	38,	"Jay Sutter",	1,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	0,	7,	6,	4,	1,	0,	15,	4,	47,	10,	27,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	466,	38,	"Joe Milacek",	0,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	1,	4,	8,	4,	0,	1,	17,	4,	51,	10,	23,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	467,	38,	"Andy Nentwich",	3,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	46,	44,	0,	1,	5,	9,	2,	0,	1,	15,	4,	54,	10,	21,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	468,	38,	"John Stamper",	0,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	0,	4,	9,	3,	2,	0,	15,	4,	53,	10,	25,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	469,	38,	"Jason Strickland",	4,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	2,	3,	7,	5,	1,	0,	15,	4,	46,	10,	29,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	470,	38,	"Steve Sillato",	4,	5,	0.56,	"",	"",	"",	"",	"",	"x",	"",	45,	45,	0,	2,	3,	7,	5,	1,	0,	17,	4,	49,	10,	24,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	471,	38,	"David Knowles",	4,	7,	0.45,	"",	"",	"",	"",	"",	"",	"",	50,	44,	0,	0,	5,	7,	3,	3,	0,	16,	4,	54,	10,	24,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	472,	38,	"Matt Bigelow",	0,	8,	0.38,	"",	"",	"x",	"",	"",	"",	"",	54,	45,	0,	0,	5,	5,	4,	2,	2,	16,	4,	57,	10,	26,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	473,	38,	"Merrill Wheeler",	1,	9,	0.26,	"",	"",	"",	"",	"",	"",	"",	51,	48,	0,	0,	2,	7,	7,	2,	0,	17,	4,	55,	10,	27,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	474,	38,	"Dustin Wood",	0,	9,	0.26,	"",	"",	"",	"",	"x",	"",	"",	50,	50,	0,	0,	2,	8,	5,	2,	1,	18,	4,	52,	10,	30,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	475,	38,	"Frank Galilei",	2,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	45,	54,	0,	1,	2,	8,	4,	1,	2,	16,	4,	56,	10,	27,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	476,	38,	"Dave Rice",	0,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	53,	48,	0,	0,	2,	9,	3,	2,	2,	19,	4,	56,	10,	26,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	477,	38,	"Dustin Schmidt",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	53,	56,	0,	0,	5,	1,	6,	3,	3,	23,	4,	57,	10,	29,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	478,	38,	"Chip Chapman",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	56,	57,	0,	0,	1,	6,	6,	1,	4,	20,	4,	57,	10,	36,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	479,	38,	"Jeff Gilligan",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	59,	62,	0,	0,	1,	2,	5,	6,	4,	25,	4,	63,	10,	33,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		[	480,	38,	"Trevor Boyd",	1,	16,	0.02,	"",	"x",	"",	"",	"",	"",	"x",	61,	73,	0,	0,	0,	1,	4,	4,	9,	26,	4,	73,	10,	35,	4,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17,	],
		
		[	481,	39,	"Steve Sillato",	4,	1,	1.35,	"",	"",	"",	"x",	"",	"",	"",	39,	44,	0,	2,	7,	6,	2,	1,	0,	13,	4,	51,	10,	19,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	482,	39,	"Jason Strickland",	5,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	0,	9,	6,	2,	1,	0,	13,	4,	48,	10,	24,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	483,	39,	"John Leite",	0,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	50,	41,	0,	2,	4,	7,	2,	2,	1,	18,	4,	48,	10,	25,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	484,	39,	"Frank Galilei",	2,	4,	0.68,	"",	"",	"",	"",	"",	"",	"",	43,	51,	0,	1,	6,	5,	4,	1,	1,	13,	4,	53,	10,	28,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	485,	39,	"Andy Nentwich",	2,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	45,	50,	0,	0,	5,	8,	2,	2,	1,	17,	4,	48,	10,	30,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	486,	39,	"Merrill Wheeler",	1,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	50,	46,	0,	0,	4,	9,	3,	0,	2,	17,	4,	51,	10,	28,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	487,	39,	"David Knowles",	4,	7,	0.45,	"",	"",	"",	"",	"",	"",	"",	43,	51,	0,	0,	5,	7,	3,	3,	0,	18,	4,	50,	10,	26,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	488,	39,	"Connor Mazza",	11,	8,	0.38,	"",	"",	"",	"",	"",	"x",	"",	45,	43,	0,	1,	5,	8,	3,	1,	0,	14,	4,	49,	10,	25,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	489,	39,	"Craig Seibert",	0,	9,	0.3,	"",	"",	"x",	"",	"",	"",	"",	48,	53,	0,	0,	3,	6,	6,	1,	2,	21,	4,	53,	10,	27,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	490,	39,	"Jay Sutter",	2,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	3,	6,	5,	3,	1,	17,	4,	59,	10,	25,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	491,	39,	"Joe Milacek",	0,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	2,	8,	2,	5,	1,	17,	4,	61,	10,	25,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	492,	39,	"Joel Schumm",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	52,	52,	0,	0,	3,	3,	7,	5,	0,	16,	4,	60,	10,	28,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	493,	39,	"Dave Rice",	0,	13,	0.07,	"",	"",	"",	"",	"x",	"",	"",	50,	56,	0,	0,	2,	7,	3,	4,	2,	17,	4,	56,	10,	33,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	494,	39,	"Matt Bigelow",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	55,	52,	0,	0,	2,	6,	6,	1,	3,	16,	4,	60,	10,	31,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	495,	39,	"Dustin Schmidt",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	53,	55,	0,	0,	1,	7,	6,	2,	2,	18,	4,	58,	10,	32,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	496,	39,	"Dustin Wood",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	55,	53,	0,	0,	3,	5,	3,	5,	2,	19,	4,	61,	10,	28,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	497,	39,	"John Stamper",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	54,	58,	0,	0,	2,	3,	7,	4,	2,	25,	4,	58,	10,	29,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	498,	39,	"Trevor Boyd",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	65,	54,	0,	0,	3,	2,	5,	2,	6,	17,	4,	71,	10,	31,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		[	499,	39,	"Jeff Gilligan",	0,	19,	0,	"",	"x",	"",	"",	"",	"",	"x",	66,	78,	0,	0,	0,	3,	0,	6,	9,	20,	4,	87,	10,	37,	4,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19,	],
		
		[	500,	40,	"David Knowles",	4,	1,	1.05,	"W",	"",	"",	"",	"x",	"",	"",	38,	43,	0,	1,	7,	10,	0,	0,	0,	14,	4,	44,	10,	23,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	501,	40,	"Steve Sillato",	5,	2,	0.7,	"L",	"",	"",	"x",	"",	"",	"",	40,	40,	0,	0,	10,	8,	0,	0,	0,	14,	4,	44,	10,	22,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	502,	40,	"Craig Seibert",	0,	3,	0.58,	"",	"",	"",	"",	"",	"x",	"",	43,	43,	0,	0,	6,	10,	2,	0,	0,	13,	4,	48,	10,	25,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	503,	40,	"Jason Strickland",	5,	4,	0.49,	"",	"",	"",	"",	"",	"",	"",	43,	41,	0,	2,	6,	6,	4,	0,	0,	14,	4,	46,	10,	24,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	504,	40,	"John Stamper",	0,	4,	0.49,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	6,	8,	3,	1,	0,	14,	4,	50,	10,	25,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	505,	40,	"Matt Bigelow",	0,	6,	0.41,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	1,	5,	8,	2,	1,	1,	15,	4,	47,	10,	28,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	506,	40,	"Joel Schumm",	0,	7,	0.35,	"",	"",	"x",	"",	"",	"",	"",	47,	44,	0,	1,	6,	6,	2,	2,	1,	14,	4,	53,	10,	24,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	507,	40,	"Merrill Wheeler",	1,	8,	0.23,	"",	"",	"",	"",	"",	"",	"",	44,	47,	0,	0,	3,	11,	4,	0,	0,	15,	4,	51,	10,	25,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	508,	40,	"Joe Milacek",	0,	8,	0.23,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	1,	5,	4,	7,	1,	0,	17,	4,	52,	10,	23,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	509,	40,	"John Leite",	0,	8,	0.23,	"",	"",	"",	"",	"",	"",	"",	47,	45,	0,	1,	4,	7,	4,	2,	0,	18,	4,	49,	10,	25,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	510,	40,	"Jay Sutter",	2,	11,	0.12,	"",	"",	"",	"",	"",	"",	"",	48,	43,	0,	0,	3,	12,	2,	1,	0,	15,	4,	51,	10,	25,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	511,	40,	"Frank Galilei",	1,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	4,	6,	4,	4,	0,	15,	4,	57,	10,	26,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	512,	40,	"Andy Nentwich",	2,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	44,	54,	0,	0,	4,	9,	2,	1,	2,	13,	4,	55,	10,	30,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	513,	40,	"Jeff Gilligan",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	57,	54,	0,	0,	2,	4,	6,	2,	4,	20,	4,	63,	10,	28,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		[	514,	40,	"Dustin Schmidt",	0,	15,	0.03,	"",	"x",	"",	"",	"",	"",	"x",	57,	78,	0,	0,	1,	2,	2,	7,	6,	32,	4,	69,	10,	34,	4,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15,	],
		
		[	515,	41,	"Doug Murray",	0,	1,	1.12,	"",	"",	"",	"",	"x",	"",	"",	44,	43,	0,	0,	9,	5,	2,	1,	1,	18,	4,	52,	11,	17,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	516,	41,	"David Knowles",	4,	2,	0.74,	"",	"",	"",	"x",	"",	"",	"",	44,	42,	0,	1,	6,	8,	2,	0,	1,	20,	4,	51,	11,	15,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	517,	41,	"Kevin George",	3,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	0,	6,	5,	6,	1,	0,	18,	4,	55,	11,	18,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	518,	41,	"Joe Milacek",	0,	4,	0.56,	"",	"",	"",	"",	"",	"x",	"",	50,	45,	0,	1,	2,	7,	6,	2,	0,	15,	4,	60,	11,	20,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	519,	41,	"Frank Galilei",	0,	5,	0.5,	"",	"",	"",	"",	"",	"",	"",	47,	50,	0,	0,	3,	8,	5,	1,	1,	17,	4,	62,	11,	18,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	520,	41,	"Brent Isner",	0,	6,	0.4,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	4,	6,	4,	3,	1,	21,	4,	59,	11,	18,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	521,	41,	"Zach Chillinsky",	0,	6,	0.4,	"",	"",	"",	"",	"",	"",	"",	53,	45,	0,	0,	2,	8,	5,	3,	0,	22,	4,	57,	11,	19,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	522,	41,	"Connor Mazza",	10,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	42,	47,	0,	2,	4,	7,	3,	1,	1,	17,	4,	53,	11,	19,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	523,	41,	"Merrill Wheeler",	1,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	50,	48,	0,	0,	4,	4,	8,	1,	1,	19,	4,	61,	11,	18,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	524,	41,	"John Leite",	0,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	52,	47,	0,	0,	4,	4,	7,	2,	1,	14,	4,	68,	11,	17,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	525,	41,	"Andy Nentwich",	2,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	3,	5,	8,	2,	0,	19,	4,	59,	11,	20,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	526,	41,	"Dave Rice",	0,	11,	0.09,	"",	"",	"x",	"",	"",	"",	"",	48,	52,	0,	0,	3,	8,	2,	3,	2,	20,	4,	59,	11,	21,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	527,	41,	"Matt Bigelow",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	53,	48,	0,	0,	1,	8,	5,	4,	0,	17,	4,	64,	11,	20,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	528,	41,	"Jason Strickland",	5,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	46,	52,	0,	0,	3,	8,	4,	2,	1,	20,	4,	60,	11,	18,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	529,	41,	"Brad Wallace",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	58,	46,	0,	0,	4,	5,	5,	0,	4,	18,	4,	58,	11,	28,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	530,	41,	"Chip Chapman",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	53,	52,	0,	0,	4,	3,	7,	2,	2,	16,	4,	70,	11,	19,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	531,	41,	"Trevor Boyd",	0,	16,	0.02,	"",	"x",	"",	"",	"",	"",	"",	49,	56,	0,	0,	0,	6,	9,	2,	1,	19,	4,	66,	11,	20,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	532,	41,	"Dustin Schmidt",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	52,	58,	0,	0,	0,	8,	5,	2,	3,	18,	4,	65,	11,	27,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	533,	41,	"Dustin Wood",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	58,	53,	0,	0,	1,	4,	5,	6,	2,	22,	4,	67,	11,	22,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	534,	41,	"John Stamper",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	56,	55,	0,	0,	2,	3,	6,	4,	3,	23,	4,	67,	11,	21,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	535,	41,	"Jeff Gilligan",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	56,	59,	0,	0,	0,	4,	6,	5,	3,	22,	4,	71,	11,	22,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		[	536,	41,	"Patrick Affourtit",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"x",	61,	68,	0,	0,	0,	5,	2,	3,	8,	23,	4,	81,	11,	25,	3,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22,	],
		
		[	537,	42,	"Andy Nentwich",	2,	1,	1.26,	"",	"",	"",	"x",	"",	"",	"",	47,	42,	0,	0,	4,	12,	1,	1,	0,	14,	4,	52,	10,	23,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	538,	42,	"Doug Murray",	0,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	6,	7,	2,	2,	1,	17,	4,	53,	10,	23,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	539,	42,	"Jason Strickland",	3,	3,	0.67,	"",	"",	"",	"",	"",	"x",	"",	47,	46,	0,	1,	4,	7,	4,	1,	1,	19,	4,	52,	10,	22,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	540,	42,	"Jay Sutter",	2,	3,	0.67,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	4,	8,	5,	0,	1,	17,	4,	54,	10,	23,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	541,	42,	"Steve Sillato",	7,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	0,	5,	8,	5,	0,	0,	16,	4,	53,	10,	21,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	542,	42,	"Matt Bigelow",	0,	6,	0.49,	"",	"",	"",	"",	"x",	"",	"",	49,	49,	0,	0,	6,	7,	1,	1,	3,	23,	4,	53,	10,	22,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	543,	42,	"Zach Chillinsky",	0,	7,	0.42,	"",	"x",	"",	"",	"",	"",	"",	47,	54,	0,	0,	4,	5,	5,	2,	2,	14,	4,	63,	10,	24,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	544,	42,	"David Knowles",	4,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	48,	53,	0,	0,	3,	9,	2,	2,	2,	21,	4,	57,	10,	23,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	545,	42,	"Tony Szymczak",	0,	9,	0.28,	"",	"",	"x",	"",	"",	"",	"",	54,	52,	0,	0,	3,	6,	2,	5,	2,	21,	4,	56,	10,	29,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	546,	42,	"Dave Rice",	0,	10,	0.18,	"",	"",	"",	"",	"",	"",	"",	51,	56,	0,	1,	0,	5,	7,	3,	2,	18,	4,	61,	10,	28,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	547,	42,	"John Stamper",	0,	10,	0.18,	"",	"",	"",	"",	"",	"",	"",	51,	56,	0,	0,	2,	4,	7,	4,	1,	16,	4,	62,	10,	29,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	548,	42,	"Joe Milacek",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	57,	52,	0,	1,	1,	4,	6,	2,	4,	19,	4,	62,	10,	28,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	549,	42,	"John Leite",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	58,	52,	0,	0,	1,	5,	7,	3,	2,	23,	4,	63,	10,	24,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	550,	42,	"Craig Seibert",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	61,	51,	0,	1,	0,	4,	6,	4,	3,	22,	4,	62,	10,	28,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	551,	42,	"Trevor Boyd",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	58,	55,	0,	0,	1,	4,	7,	3,	3,	19,	4,	64,	10,	30,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	552,	42,	"Dustin Schmidt",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	73,	59,	0,	0,	0,	5,	2,	4,	7,	19,	4,	81,	10,	32,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		[	553,	42,	"Jeff Gilligan",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"x",	68,	64,	0,	0,	0,	3,	3,	6,	6,	20,	4,	77,	10,	35,	4,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17,	],
		
		[	554,	43,	"Jason Strickland",	3,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	44,	42,	0,	1,	6,	7,	3,	1,	0,	16,	4,	54,	11,	16,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	555,	43,	"Andy Nentwich",	2,	2,	0.83,	"",	"",	"",	"",	"",	"x",	"",	44,	47,	0,	1,	4,	7,	4,	2,	0,	14,	4,	57,	11,	20,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	556,	43,	"David Knowles",	4,	2,	0.83,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	3,	12,	3,	0,	0,	17,	4,	54,	11,	18,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	557,	43,	"Connor Mazza",	10,	4,	0.68,	"",	"",	"",	"x",	"",	"",	"",	42,	42,	0,	0,	8,	7,	3,	0,	0,	14,	4,	54,	11,	16,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	558,	43,	"Doug Murray",	0,	5,	0.56,	"",	"",	"",	"",	"x",	"",	"",	48,	47,	0,	0,	5,	6,	4,	2,	1,	19,	4,	60,	11,	16,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	559,	43,	"John Stamper",	0,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	47,	48,	0,	0,	0,	13,	4,	1,	0,	16,	4,	59,	11,	20,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	560,	43,	"Jay Sutter",	2,	7,	0.45,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	4,	7,	5,	2,	0,	14,	4,	60,	11,	20,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	561,	43,	"Matt Bigelow",	0,	8,	0.38,	"",	"",	"x",	"",	"",	"",	"",	52,	45,	0,	1,	3,	6,	4,	3,	1,	15,	4,	59,	11,	23,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	562,	43,	"Craig Seibert",	0,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	0,	8,	8,	2,	0,	18,	4,	63,	11,	20,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	563,	43,	"John Leite",	0,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	47,	54,	0,	0,	2,	5,	9,	1,	1,	21,	4,	63,	11,	17,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	564,	43,	"Zach Chillinsky",	0,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	51,	50,	0,	0,	3,	3,	9,	3,	0,	17,	4,	66,	11,	18,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	565,	43,	"Chip Chapman",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	54,	50,	0,	0,	0,	10,	4,	1,	3,	16,	4,	68,	11,	20,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	566,	43,	"Joel Schumm",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	52,	57,	0,	0,	2,	5,	4,	4,	3,	24,	4,	66,	11,	19,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	567,	43,	"Dustin Schmidt",	0,	14,	0.05,	"",	"x",	"",	"",	"",	"",	"",	53,	68,	0,	0,	0,	2,	6,	6,	4,	20,	4,	77,	11,	24,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	568,	43,	"Jeff Gilligan",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	64,	63,	0,	0,	2,	3,	4,	2,	7,	23,	4,	77,	11,	27,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		[	569,	43,	"Patrick Affourtit",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"x",	69,	64,	0,	0,	0,	3,	3,	6,	6,	20,	4,	91,	11,	22,	3,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16,	],
		
		[	570,	44,	"Brent Isner",	0,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	39,	40,	1,	1,	7,	8,	1,	0,	0,	14,	4,	43,	10,	22,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	571,	44,	"David Knowles",	3,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	43,	37,	0,	3,	5,	9,	1,	0,	0,	15,	4,	45,	10,	20,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	572,	44,	"Andy Nentwich",	1,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	42,	44,	0,	0,	7,	8,	3,	0,	0,	13,	4,	51,	10,	22,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	573,	44,	"Steve Sillato",	6,	3,	0.67,	"",	"",	"",	"",	"",	"x",	"",	41,	41,	0,	1,	8,	7,	2,	0,	0,	16,	4,	45,	10,	21,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	574,	44,	"Doug Murray",	0,	3,	0.67,	"",	"",	"",	"",	"x",	"",	"",	45,	43,	0,	0,	9,	4,	3,	2,	0,	14,	4,	49,	10,	25,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	575,	44,	"Kevin George",	3,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	45,	41,	0,	1,	7,	6,	3,	1,	0,	15,	4,	50,	10,	21,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	576,	44,	"Merrill Wheeler",	0,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	6,	9,	1,	2,	0,	15,	4,	48,	10,	26,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	577,	44,	"Connor Mazza",	9,	7,	0.42,	"",	"",	"",	"",	"",	"",	"",	44,	38,	0,	0,	11,	5,	1,	1,	0,	12,	4,	45,	10,	25,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	578,	44,	"Jay Sutter",	1,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	39,	52,	0,	0,	7,	6,	2,	3,	0,	16,	4,	49,	10,	26,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	579,	44,	"John Leite",	0,	9,	0.28,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	4,	9,	3,	2,	0,	17,	4,	50,	10,	26,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	580,	44,	"Jason Strickland",	3,	10,	0.18,	"",	"",	"",	"",	"",	"",	"",	46,	46,	0,	0,	5,	7,	5,	1,	0,	15,	4,	54,	10,	23,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	581,	44,	"Kyle Ratajczak",	2,	10,	0.18,	"",	"",	"x",	"",	"",	"",	"",	47,	46,	0,	0,	7,	6,	2,	2,	1,	13,	4,	56,	10,	24,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	582,	44,	"Matt Bigelow",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	47,	51,	0,	0,	6,	6,	3,	1,	2,	15,	4,	56,	10,	27,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	583,	44,	"Trevor Boyd",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	51,	48,	0,	0,	2,	9,	4,	2,	1,	16,	4,	60,	10,	23,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	584,	44,	"John Stamper",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	2,	6,	7,	2,	1,	18,	4,	58,	10,	26,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	585,	44,	"Justin Kudela",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	55,	52,	0,	0,	1,	8,	6,	0,	3,	22,	4,	59,	10,	26,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	586,	44,	"Dave Rice",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	54,	57,	0,	0,	2,	5,	4,	3,	4,	18,	4,	64,	10,	29,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	587,	44,	"Chip Chapman",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	55,	58,	0,	0,	2,	6,	3,	3,	4,	16,	4,	64,	10,	33,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	588,	44,	"Jeff Gilligan",	0,	18,	0,	"",	"x",	"",	"",	"",	"",	"",	49,	68,	0,	1,	2,	3,	4,	2,	6,	14,	4,	68,	10,	35,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	589,	44,	"Dustin Schmidt",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	61,	60,	0,	0,	1,	5,	2,	5,	5,	18,	4,	70,	10,	33,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		[	590,	44,	"Patrick Affourtit",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"x",	59,	67,	0,	0,	0,	1,	7,	4,	6,	23,	4,	71,	10,	32,	4,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21,	],
		
		[	591,	45,	"Kevin George",	3,	1,	1.35,	"W",	"",	"",	"x",	"x",	"",	"",	41,	44,	0,	1,	7,	7,	2,	1,	0,	15,	4,	48,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	592,	45,	"Jay Sutter",	0,	2,	0.9,	"L",	"",	"",	"",	"",	"",	"",	41,	47,	0,	1,	8,	5,	1,	2,	1,	14,	4,	47,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	593,	45,	"John Leite",	0,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	43,	47,	0,	0,	9,	3,	4,	1,	1,	14,	4,	51,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	594,	45,	"Joe Milacek",	0,	4,	0.68,	"",	"",	"",	"",	"",	"",	"",	41,	51,	0,	1,	6,	3,	7,	0,	1,	18,	4,	51,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	595,	45,	"Jason Strickland",	3,	5,	0.6,	"",	"",	"",	"",	"",	"",	"",	43,	47,	0,	1,	4,	8,	4,	1,	0,	15,	4,	54,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	596,	45,	"Chris Roebuck",	0,	6,	0.53,	"",	"",	"",	"",	"",	"",	"",	47,	48,	0,	1,	4,	6,	4,	2,	1,	17,	4,	55,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	597,	45,	"Andy Nentwich",	2,	7,	0.45,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	6,	4,	6,	1,	1,	19,	4,	50,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	598,	45,	"David Knowles",	5,	8,	0.38,	"",	"",	"x",	"",	"",	"",	"",	47,	46,	0,	0,	3,	11,	3,	0,	1,	16,	4,	54,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	599,	45,	"Dave Rice",	0,	9,	0.3,	"",	"",	"",	"",	"",	"x",	"",	53,	47,	0,	1,	3,	7,	2,	3,	2,	13,	4,	61,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	600,	45,	"Matt Bigelow",	0,	10,	0.23,	"",	"",	"",	"",	"",	"",	"",	49,	54,	0,	0,	4,	6,	3,	3,	2,	20,	4,	57,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	601,	45,	"Chip Chapman",	0,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	49,	58,	0,	0,	1,	8,	4,	3,	2,	21,	4,	59,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	602,	45,	"Justin Kudela",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	47,	62,	0,	0,	2,	4,	5,	5,	2,	19,	4,	62,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	603,	45,	"John Stamper",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	52,	58,	0,	0,	2,	4,	7,	2,	3,	16,	4,	64,	10,	30,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	604,	45,	"Jeff Gilligan",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	62,	67,	0,	0,	0,	4,	3,	5,	6,	22,	4,	79,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	605,	45,	"Dustin Schmidt",	0,	15,	0.04,	"",	"x",	"",	"",	"",	"",	"",	57,	73,	0,	0,	1,	1,	3,	6,	7,	23,	4,	74,	10,	33,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		[	606,	45,	"Patrick Affourtit",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"x",	66,	69,	0,	0,	0,	2,	4,	2,	10,	26,	4,	74,	10,	35,	4,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16,	],
		
		[	607,	46,	"Andy Nentwich",	1,	1,	1.5,	"",	"",	"",	"",	"",	"",	"",	44,	42,	0,	0,	8,	6,	4,	0,	0,	13,	4,	50,	10,	23,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	608,	46,	"Doug Murray",	0,	2,	1,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	0,	4,	12,	2,	0,	0,	16,	4,	47,	10,	25,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	609,	46,	"Chris Roebuck",	0,	3,	0.83,	"",	"",	"",	"",	"",	"",	"",	48,	41,	0,	2,	4,	7,	4,	0,	1,	14,	4,	49,	10,	26,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	610,	46,	"Steve Sillato",	7,	4,	0.67,	"",	"",	"",	"x",	"",	"",	"",	43,	40,	0,	1,	8,	7,	1,	1,	0,	15,	4,	47,	10,	21,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	611,	46,	"David Knowles",	4,	4,	0.67,	"",	"",	"",	"",	"x",	"x",	"",	45,	41,	0,	0,	9,	6,	2,	0,	1,	15,	4,	50,	10,	21,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	612,	46,	"Jay Sutter",	0,	4,	0.67,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	0,	6,	7,	4,	1,	0,	18,	4,	49,	10,	23,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	613,	46,	"John Leite",	0,	7,	0.5,	"",	"",	"x",	"",	"",	"",	"",	45,	50,	0,	0,	3,	8,	6,	1,	0,	17,	4,	53,	10,	25,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	614,	46,	"Jason Strickland",	3,	8,	0.42,	"",	"",	"",	"",	"",	"",	"",	50,	46,	0,	0,	4,	6,	6,	2,	0,	16,	4,	55,	10,	25,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	615,	46,	"Joe Milacek",	0,	9,	0.29,	"",	"",	"",	"",	"",	"",	"",	51,	50,	0,	0,	3,	6,	4,	5,	0,	15,	4,	59,	10,	27,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	616,	46,	"John Stamper",	0,	9,	0.29,	"",	"",	"",	"",	"",	"",	"",	49,	52,	0,	0,	0,	9,	7,	2,	0,	19,	4,	56,	10,	26,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	617,	46,	"Craig Seibert",	0,	11,	0.17,	"",	"",	"",	"",	"",	"",	"",	52,	55,	0,	0,	1,	7,	5,	3,	2,	19,	4,	61,	10,	27,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	618,	46,	"Matt Bigelow",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	54,	58,	0,	0,	0,	6,	8,	1,	3,	27,	4,	58,	10,	27,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	619,	46,	"Patrick Affourtit",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	63,	62,	0,	0,	0,	0,	8,	4,	6,	24,	4,	70,	10,	31,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		[	620,	46,	"Jeff Gilligan",	0,	14,	0.06,	"",	"x",	"",	"",	"",	"",	"x",	67,	74,	0,	0,	0,	3,	2,	3,	10,	20,	4,	83,	10,	38,	4,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14,	],
		
		[	621,	47,	"Connor Mazza",	9,	0,	0,	"",	"",	"",	"x",	"",	"x",	"",	41,	36,	0,	3,	7,	7,	1,	0,	0,	15,	5,	41,	9,	21,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	622,	47,	"Merrill Wheeler",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	41,	42,	0,	0,	8,	8,	2,	0,	0,	18,	5,	44,	9,	21,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	623,	47,	"Andy Nentwich",	2,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	42,	42,	0,	1,	4,	12,	1,	0,	0,	18,	5,	44,	9,	22,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	624,	47,	"Jay Sutter",	1,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	40,	49,	0,	0,	6,	8,	2,	2,	0,	20,	5,	44,	9,	25,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	625,	47,	"Chris Roebuck",	0,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	46,	44,	0,	0,	7,	6,	3,	1,	1,	18,	5,	50,	9,	22,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	626,	47,	"David Knowles",	5,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	1,	7,	6,	3,	0,	1,	21,	5,	44,	9,	21,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	627,	47,	"Craig Seibert",	0,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	5,	7,	5,	1,	0,	19,	5,	46,	9,	26,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	628,	47,	"Doug Murray",	0,	7,	0.45,	"",	"",	"",	"",	"",	"",	"",	48,	44,	0,	2,	3,	7,	3,	2,	1,	18,	5,	44,	9,	30,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	629,	47,	"Steve Sillato",	7,	8,	0.38,	"",	"",	"x",	"",	"",	"",	"",	44,	42,	0,	0,	5,	11,	2,	0,	0,	19,	5,	43,	9,	24,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	630,	47,	"Matt Bigelow",	0,	9,	0.3,	"",	"",	"",	"",	"",	"",	"",	44,	51,	0,	0,	3,	9,	3,	3,	0,	22,	5,	49,	9,	24,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	631,	47,	"Jason Strickland",	3,	10,	0.23,	"",	"",	"",	"",	"x",	"",	"",	45,	49,	0,	0,	6,	5,	4,	2,	1,	23,	5,	48,	9,	23,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	632,	47,	"Joe Milacek",	0,	11,	0.15,	"",	"x",	"",	"",	"",	"",	"",	45,	56,	0,	1,	3,	5,	6,	1,	2,	22,	5,	48,	9,	31,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	633,	47,	"John Stamper",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	0,	6,	10,	2,	0,	24,	5,	51,	9,	28,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	634,	47,	"Chip Chapman",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	49,	58,	0,	0,	1,	8,	4,	3,	2,	24,	5,	53,	9,	30,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	635,	47,	"Trevor Boyd",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	58,	55,	0,	0,	2,	2,	9,	2,	3,	20,	5,	59,	9,	34,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		[	636,	47,	"Jeff Gilligan",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"x",	57,	67,	0,	0,	1,	4,	4,	3,	6,	23,	5,	63,	9,	38,	4,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16,	],
		
		[	637,	48,	"Chris Roebuck",	0,	1,	1.12,	"",	"",	"",	"x",	"",	"x",	"",	40,	42,	0,	0,	9,	8,	1,	0,	0,	14,	4,	46,	10,	22,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	638,	48,	"Craig Seibert",	0,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	40,	46,	0,	2,	4,	8,	4,	0,	0,	16,	4,	46,	10,	24,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	639,	48,	"Jay Sutter",	0,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	6,	7,	4,	1,	0,	15,	4,	50,	10,	25,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	640,	48,	"Jason Strickland",	1,	4,	0.56,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	5,	7,	3,	3,	0,	14,	4,	55,	10,	25,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	641,	48,	"Brent Isner",	2,	5,	0.47,	"",	"",	"",	"",	"x",	"",	"",	50,	45,	0,	0,	5,	8,	3,	1,	1,	14,	4,	56,	10,	25,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	642,	48,	"John Stamper",	0,	5,	0.47,	"",	"",	"",	"",	"",	"",	"",	52,	45,	0,	0,	3,	9,	2,	4,	0,	17,	4,	55,	10,	25,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	643,	48,	"David Knowles",	5,	7,	0.37,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	5,	6,	6,	1,	0,	14,	4,	54,	10,	25,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	644,	48,	"Merrill Wheeler",	1,	8,	0.31,	"",	"",	"x",	"",	"",	"",	"",	49,	49,	0,	0,	3,	5,	9,	1,	0,	18,	4,	54,	10,	26,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	645,	48,	"Steve Sillato",	7,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	46,	50,	0,	0,	5,	6,	4,	2,	1,	21,	4,	52,	10,	23,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	646,	48,	"Chip Chapman",	0,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	50,	56,	0,	0,	1,	9,	2,	3,	3,	17,	4,	59,	10,	30,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	647,	48,	"John Leite",	0,	11,	0.12,	"",	"x",	"",	"",	"",	"",	"",	43,	65,	0,	1,	3,	6,	3,	1,	4,	18,	4,	69,	10,	21,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	648,	48,	"Justin Kudela",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	52,	57,	0,	0,	0,	9,	3,	5,	1,	26,	4,	56,	10,	27,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	649,	48,	"Dave Rice",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	57,	55,	0,	0,	1,	6,	2,	7,	2,	20,	4,	62,	10,	30,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	650,	48,	"Dustin Schmidt",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	50,	65,	0,	0,	1,	5,	2,	8,	2,	19,	4,	68,	10,	28,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	651,	48,	"Patrick Affourtit",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	58,	63,	0,	0,	0,	5,	6,	2,	5,	18,	4,	73,	10,	30,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		[	652,	48,	"Jeff Gilligan",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"x",	72,	67,	0,	0,	0,	2,	4,	4,	8,	23,	4,	71,	10,	45,	4,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16,	],
		
		[	653,	49,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	40,	38,	0,	1,	9,	8,	0,	0,	0,	16,	5,	41,	9,	21,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	654,	49,	"Jason Strickland",	1,	1,	1.12,	"",	"",	"",	"",	"x",	"",	"",	45,	41,	0,	0,	9,	5,	3,	0,	1,	18,	5,	48,	9,	20,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	655,	49,	"Matt Bigelow",	0,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	1,	5,	6,	5,	1,	0,	17,	5,	50,	9,	22,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	656,	49,	"Sam Steinberg",	4,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	40,	46,	0,	0,	6,	9,	3,	0,	0,	19,	5,	43,	9,	24,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	657,	49,	"Chris Roebuck",	2,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	4,	9,	5,	0,	0,	21,	5,	44,	9,	25,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	658,	49,	"Jay Sutter",	1,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	43,	48,	0,	0,	4,	9,	4,	1,	0,	19,	5,	46,	9,	26,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	659,	49,	"Joe Milacek",	0,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	4,	9,	3,	2,	0,	20,	5,	48,	9,	24,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	660,	49,	"John Leite",	0,	7,	0.37,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	5,	6,	5,	2,	0,	18,	5,	47,	9,	28,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	661,	49,	"Jeff Beckman",	9,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	47,	42,	0,	0,	7,	5,	5,	1,	0,	18,	5,	46,	9,	25,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	662,	49,	"Gary Sutter",	3,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	45,	50,	0,	0,	3,	8,	5,	2,	0,	20,	5,	48,	9,	27,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	663,	49,	"John Stamper",	0,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	0,	11,	5,	2,	0,	20,	5,	53,	9,	25,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	664,	49,	"Bill Ludwig",	6,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	45,	48,	0,	1,	6,	4,	3,	3,	1,	20,	5,	49,	9,	24,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	665,	49,	"Brent Isner",	1,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	2,	9,	4,	2,	1,	18,	5,	52,	9,	28,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	666,	49,	"Justin Kudela",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	49,	56,	0,	0,	1,	9,	2,	4,	2,	21,	5,	57,	9,	27,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	667,	49,	"Brad Wallace",	0,	14,	0.03,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	0,	8,	5,	3,	2,	21,	5,	56,	9,	30,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	668,	49,	"Graydon Spanner",	0,	14,	0.03,	"",	"",	"",	"",	"",	"",	"",	52,	55,	0,	0,	4,	3,	4,	3,	4,	17,	5,	62,	9,	28,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	669,	49,	"Trevor Boyd",	0,	14,	0.03,	"",	"",	"x",	"",	"",	"",	"",	53,	54,	0,	0,	1,	6,	4,	6,	1,	21,	5,	56,	9,	30,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	670,	49,	"Scott Hall",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	57,	52,	0,	0,	3,	3,	5,	4,	3,	25,	5,	53,	9,	31,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	671,	49,	"Braedon Crowe",	1,	18,	0,	"",	"",	"",	"",	"",	"",	"",	55,	55,	0,	0,	0,	5,	8,	2,	3,	23,	5,	56,	9,	31,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	672,	49,	"Chip Chapman",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	57,	54,	0,	0,	2,	4,	5,	4,	3,	23,	5,	54,	9,	34,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	673,	49,	"Josh Stephens",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	57,	54,	0,	1,	0,	4,	5,	5,	3,	23,	5,	61,	9,	27,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	674,	49,	"Jonathan Stone",	7,	21,	0,	"",	"",	"",	"",	"",	"",	"",	54,	51,	0,	0,	2,	6,	4,	5,	1,	21,	5,	54,	9,	30,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	675,	49,	"Ken Byers",	5,	22,	0,	"",	"",	"",	"",	"",	"",	"",	50,	59,	0,	0,	1,	6,	4,	4,	3,	19,	5,	60,	9,	30,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	676,	49,	"Jeff Gilligan",	0,	23,	0,	"",	"x",	"",	"",	"",	"x",	"",	55,	65,	0,	0,	1,	1,	7,	5,	4,	23,	5,	67,	9,	30,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	677,	49,	"Patrick Affourtit",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	63,	58,	0,	0,	1,	2,	5,	4,	6,	27,	5,	66,	9,	28,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	678,	49,	"Dustin Schmidt",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	62,	61,	0,	0,	1,	1,	7,	3,	6,	22,	5,	66,	9,	35,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	679,	49,	"Doug Short",	5,	26,	0,	"",	"",	"",	"",	"",	"",	"",	65,	62,	0,	0,	0,	1,	4,	7,	6,	27,	5,	64,	9,	36,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		[	680,	49,	"Chuck Jackson",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"x",	88,	94,	0,	0,	0,	2,	0,	2,	14,	29,	5,	104,	9,	49,	4,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28,	],
		
		[	681,	50,	"Andy Nentwich",	4,	1,	1.26,	"",	"",	"",	"x",	"",	"x",	"",	40,	42,	0,	1,	7,	9,	1,	0,	0,	14,	4,	48,	10,	20,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	682,	50,	"David Knowles",	4,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	40,	45,	0,	1,	7,	6,	4,	0,	0,	13,	4,	47,	10,	25,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	683,	50,	"John Leite",	0,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	47,	44,	0,	0,	3,	11,	4,	0,	0,	18,	4,	50,	10,	23,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	684,	50,	"Steve Sillato",	7,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	0,	6,	10,	2,	0,	0,	15,	4,	50,	10,	21,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	685,	50,	"Brent Isner",	1,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	49,	45,	0,	1,	3,	7,	5,	2,	0,	19,	4,	52,	10,	23,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	686,	50,	"Joe Milacek",	0,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	50,	45,	0,	0,	2,	11,	3,	2,	0,	18,	4,	49,	10,	28,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	687,	50,	"Chris Roebuck",	2,	7,	0.42,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	1,	12,	5,	0,	0,	16,	4,	53,	10,	25,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	688,	50,	"Jason Strickland",	1,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	45,	51,	0,	0,	5,	6,	4,	2,	1,	17,	4,	55,	10,	24,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	689,	50,	"John Stamper",	0,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	49,	51,	0,	0,	1,	9,	5,	3,	0,	21,	4,	54,	10,	25,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	690,	50,	"Merrill Wheeler",	0,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	53,	47,	0,	1,	3,	7,	4,	1,	2,	18,	4,	55,	10,	27,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	691,	50,	"Jeff Beckman",	8,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	0,	4,	8,	4,	2,	0,	20,	4,	51,	10,	23,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	692,	50,	"Brad Wallace",	0,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	48,	54,	0,	0,	3,	4,	8,	2,	1,	23,	4,	53,	10,	26,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	693,	50,	"Justin Kudela",	0,	11,	0.09,	"",	"x",	"",	"",	"",	"",	"",	47,	55,	0,	0,	2,	7,	4,	5,	0,	18,	4,	57,	10,	27,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	694,	50,	"Scott Hall",	0,	14,	0.05,	"",	"",	"x",	"",	"",	"",	"",	51,	52,	0,	0,	3,	5,	4,	6,	0,	17,	4,	59,	10,	27,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	695,	50,	"Josh Stephens",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	50,	56,	0,	0,	2,	6,	4,	4,	2,	17,	4,	59,	10,	30,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	696,	50,	"Ken Byers",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	50,	57,	0,	0,	2,	6,	4,	3,	3,	20,	4,	60,	10,	27,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	697,	50,	"Braedon Crowe",	0,	17,	0,	"",	"",	"",	"",	"x",	"",	"",	59,	51,	0,	0,	1,	3,	8,	5,	1,	21,	4,	62,	10,	27,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	698,	50,	"Brian Zimmerschied",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	53,	58,	0,	0,	1,	5,	6,	3,	3,	17,	4,	63,	10,	31,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	699,	50,	"Doug Short",	4,	19,	0,	"",	"",	"",	"",	"",	"",	"",	59,	59,	0,	0,	0,	5,	5,	3,	5,	20,	4,	70,	10,	28,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	700,	50,	"Dustin Schmidt",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	61,	62,	0,	0,	1,	7,	1,	1,	8,	20,	4,	66,	10,	37,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	701,	50,	"Jeff Gilligan",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	66,	58,	0,	0,	2,	1,	4,	4,	7,	21,	4,	71,	10,	32,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	702,	50,	"Patrick Affourtit",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	65,	59,	0,	0,	0,	4,	4,	4,	6,	23,	4,	70,	10,	31,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		[	703,	50,	"Chuck Jackson",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"x",	80,	77,	0,	0,	0,	1,	3,	2,	12,	31,	4,	91,	10,	35,	4,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23,	],
		
		[	704,	51,	"Matt Bigelow",	0,	1,	1.71,	"W",	"",	"",	"",	"x",	"",	"",	47,	43,	0,	0,	5,	9,	2,	2,	0,	18,	5,	49,	9,	23,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	705,	51,	"Jason Strickland",	1,	2,	1.05,	"L",	"",	"",	"",	"",	"x",	"",	46,	43,	0,	1,	4,	9,	3,	0,	1,	18,	5,	48,	9,	23,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	706,	51,	"Jay Sutter",	1,	2,	1.05,	"L",	"",	"",	"",	"",	"",	"",	47,	42,	0,	0,	5,	9,	3,	1,	0,	18,	5,	47,	9,	24,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	707,	51,	"Jared Pickens",	0,	4,	0.86,	"",	"",	"",	"",	"",	"",	"",	48,	45,	0,	0,	2,	10,	6,	0,	0,	21,	5,	47,	9,	25,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	708,	51,	"Steve Sillato",	7,	5,	0.67,	"",	"",	"",	"",	"",	"",	"",	47,	40,	0,	0,	6,	8,	4,	0,	0,	20,	5,	43,	9,	24,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	709,	51,	"Sam Steinberg",	4,	5,	0.67,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	2,	4,	5,	6,	0,	1,	21,	5,	47,	9,	22,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	710,	51,	"Brent Isner",	0,	5,	0.67,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	4,	8,	3,	3,	0,	19,	5,	51,	9,	24,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	711,	51,	"Connor Mazza",	10,	8,	0.48,	"",	"",	"",	"x",	"",	"",	"",	41,	44,	0,	1,	6,	7,	4,	0,	0,	20,	5,	43,	9,	22,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	712,	51,	"Andy Nentwich",	5,	9,	0.38,	"",	"",	"",	"",	"",	"",	"",	47,	45,	0,	0,	5,	5,	8,	0,	0,	24,	5,	46,	9,	22,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	713,	51,	"Brian Zimmerschied",	0,	10,	0.24,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	2,	10,	3,	1,	2,	21,	5,	51,	9,	26,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	714,	51,	"John Leite",	0,	10,	0.24,	"",	"",	"",	"",	"",	"",	"",	53,	45,	0,	1,	3,	6,	4,	3,	1,	23,	5,	53,	9,	22,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	715,	51,	"Justin Kudela",	0,	12,	0.1,	"",	"",	"",	"",	"",	"",	"",	49,	50,	0,	0,	1,	8,	7,	2,	0,	22,	5,	51,	9,	26,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	716,	51,	"Graydon Spanner",	0,	13,	0.09,	"",	"",	"",	"",	"",	"",	"",	49,	52,	0,	0,	1,	9,	5,	1,	2,	20,	5,	53,	9,	28,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	717,	51,	"Josh Stephens",	0,	14,	0.07,	"",	"",	"x",	"",	"",	"",	"",	54,	49,	0,	0,	2,	5,	7,	3,	1,	20,	5,	57,	9,	26,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	718,	51,	"Chip Chapman",	0,	15,	0.05,	"",	"",	"",	"",	"",	"",	"",	53,	51,	0,	0,	1,	7,	6,	2,	2,	23,	5,	53,	9,	28,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	719,	51,	"John Stamper",	0,	16,	0.03,	"",	"",	"",	"",	"",	"",	"",	52,	53,	0,	0,	2,	3,	9,	3,	1,	27,	5,	52,	9,	26,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	720,	51,	"Doug Short",	4,	17,	0,	"",	"",	"",	"",	"",	"",	"",	51,	51,	0,	0,	4,	4,	5,	3,	2,	25,	5,	48,	9,	29,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	721,	51,	"Tony Perrin",	5,	18,	0,	"",	"",	"",	"",	"",	"",	"",	50,	53,	0,	0,	4,	5,	6,	0,	3,	24,	5,	49,	9,	30,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	722,	51,	"Gary Sutter",	2,	19,	0,	"",	"",	"",	"",	"",	"",	"",	56,	51,	0,	0,	0,	4,	11,	2,	1,	22,	5,	57,	9,	28,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	723,	51,	"Scott Hall",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	54,	55,	0,	0,	1,	3,	9,	3,	2,	24,	5,	54,	9,	31,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	724,	51,	"Bryan Sockol",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	56,	56,	0,	0,	1,	5,	5,	4,	3,	26,	5,	58,	9,	28,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	725,	51,	"Dustin Schmidt",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	62,	56,	0,	0,	1,	4,	5,	4,	4,	21,	5,	63,	9,	34,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	726,	51,	"Braedon Crowe",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	62,	60,	0,	0,	0,	5,	3,	3,	7,	27,	5,	63,	9,	32,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	727,	51,	"Patrick Affourtit",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	62,	63,	0,	0,	0,	2,	4,	5,	7,	26,	5,	67,	9,	32,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	728,	51,	"Jeff Gilligan",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	70,	63,	0,	0,	0,	4,	4,	2,	8,	21,	5,	75,	9,	37,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		[	729,	51,	"Chuck Jackson",	0,	26,	0,	"",	"x",	"",	"",	"",	"",	"x",	86,	91,	0,	0,	1,	1,	1,	1,	14,	46,	5,	89,	9,	42,	4,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26,	],
		
		[	730,	52,	"Matt Bigelow",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	40,	48,	0,	0,	8,	5,	3,	1,	1,	18,	4,	59,	12,	11,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	731,	52,	"Andy Nentwich",	5,	2,	0.83,	"",	"",	"",	"x",	"",	"",	"",	39,	45,	0,	1,	6,	9,	1,	0,	1,	18,	4,	57,	12,	9,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	732,	52,	"David Knowles",	5,	2,	0.83,	"",	"",	"",	"x",	"",	"",	"",	42,	42,	0,	0,	6,	10,	2,	0,	0,	14,	4,	57,	12,	13,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	733,	52,	"Jason Strickland",	1,	4,	0.68,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	0,	3,	11,	3,	1,	0,	17,	4,	62,	12,	11,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	734,	52,	"Sam Steinberg",	4,	5,	0.6,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	1,	3,	7,	7,	0,	0,	17,	4,	62,	12,	11,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	735,	52,	"Merrill Wheeler",	0,	6,	0.53,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	5,	4,	6,	3,	0,	16,	4,	65,	12,	14,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	736,	52,	"Joe Milacek",	0,	7,	0.45,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	0,	4,	5,	7,	1,	1,	12,	4,	71,	12,	13,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	737,	52,	"Steve Sillato",	7,	8,	0.34,	"",	"",	"",	"",	"",	"",	"",	42,	48,	0,	0,	4,	9,	4,	1,	0,	14,	4,	64,	12,	12,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	738,	52,	"John Leite",	0,	8,	0.34,	"",	"",	"",	"",	"",	"",	"",	47,	50,	0,	0,	4,	6,	5,	1,	2,	17,	4,	66,	12,	14,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	739,	52,	"Brad Wallace",	0,	10,	0.23,	"",	"",	"",	"",	"x",	"",	"",	48,	50,	0,	0,	1,	8,	7,	2,	0,	18,	4,	68,	12,	12,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	740,	52,	"Scott Hall",	0,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	50,	50,	0,	0,	2,	8,	4,	2,	2,	15,	4,	68,	12,	17,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	741,	52,	"Jared Pickens",	0,	12,	0.08,	"",	"",	"x",	"",	"",	"",	"",	54,	48,	0,	0,	3,	7,	4,	2,	2,	15,	4,	74,	12,	13,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	742,	52,	"John Stamper",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	50,	53,	0,	0,	1,	6,	8,	1,	2,	24,	4,	68,	12,	11,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	743,	52,	"Jonathan Stone",	6,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	49,	51,	0,	0,	3,	7,	5,	1,	2,	15,	4,	74,	12,	11,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	744,	52,	"Ken Byers",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	51,	55,	0,	0,	1,	6,	7,	1,	3,	19,	4,	74,	12,	13,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	745,	52,	"Josh Stephens",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	55,	53,	0,	0,	1,	4,	7,	4,	2,	16,	4,	79,	12,	13,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	746,	52,	"Graydon Spanner",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	53,	57,	0,	0,	3,	5,	2,	5,	3,	17,	4,	75,	12,	18,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	747,	52,	"Dustin Schmidt",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	54,	58,	0,	0,	0,	5,	6,	4,	3,	19,	4,	80,	12,	13,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	748,	52,	"Justin Kudela",	0,	18,	0,	"",	"",	"",	"",	"",	"x",	"",	50,	62,	0,	0,	5,	1,	6,	2,	4,	16,	4,	80,	12,	16,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	749,	52,	"Jeff Gilligan",	0,	20,	0,	"",	"x",	"",	"",	"",	"",	"",	54,	67,	0,	0,	3,	1,	4,	4,	6,	21,	4,	90,	12,	10,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	750,	52,	"Patrick Affourtit",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	59,	62,	0,	0,	1,	0,	6,	6,	5,	25,	4,	80,	12,	16,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	751,	52,	"Tony Perrin",	1,	22,	0,	"",	"",	"",	"",	"",	"",	"",	59,	64,	0,	0,	2,	0,	5,	4,	7,	20,	4,	88,	12,	15,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		[	752,	52,	"Brian Zimmerschied",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"x",	58,	69,	0,	0,	0,	3,	6,	3,	6,	24,	4,	83,	12,	20,	2,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23,	],
		
		[	753,	53,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	39,	38,	0,	2,	9,	6,	1,	0,	0,	11,	3,	57,	13,	9,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	754,	53,	"John Leite",	0,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	41,	41,	0,	0,	9,	7,	2,	0,	0,	13,	3,	59,	13,	10,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	755,	53,	"Jason Strickland",	0,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	44,	39,	0,	2,	5,	8,	3,	0,	0,	12,	3,	59,	13,	12,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	756,	53,	"Joe Milacek",	0,	3,	0.7,	"",	"",	"",	"",	"",	"x",	"",	40,	45,	0,	3,	3,	8,	3,	1,	0,	11,	3,	60,	13,	14,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	757,	53,	"Brian Zimmerschied",	0,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	0,	8,	6,	3,	1,	0,	13,	3,	61,	13,	12,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	758,	53,	"Andy Nentwich",	5,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	42,	39,	0,	0,	10,	7,	0,	1,	0,	11,	3,	59,	13,	11,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	759,	53,	"David Knowles",	5,	6,	0.46,	"",	"",	"",	"",	"",	"",	"",	42,	40,	1,	0,	7,	7,	3,	0,	0,	14,	3,	59,	13,	9,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	760,	53,	"Matt Bigelow",	0,	6,	0.46,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	1,	5,	8,	3,	1,	0,	13,	3,	63,	13,	11,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	761,	53,	"Jeff Beckman",	8,	8,	0.32,	"",	"",	"",	"",	"",	"",	"",	40,	41,	0,	0,	8,	10,	0,	0,	0,	12,	3,	59,	13,	10,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	762,	53,	"Jay Sutter",	1,	8,	0.32,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	0,	8,	5,	3,	2,	0,	13,	3,	65,	13,	10,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	763,	53,	"Doug Short",	3,	10,	0.14,	"",	"",	"",	"",	"x",	"",	"",	48,	39,	0,	1,	5,	7,	5,	0,	0,	13,	3,	63,	13,	11,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	764,	53,	"Chris Roebuck",	2,	10,	0.14,	"",	"",	"",	"",	"",	"",	"",	48,	40,	0,	3,	3,	7,	3,	1,	1,	14,	3,	66,	13,	8,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	765,	53,	"Jared Pickens",	0,	10,	0.14,	"",	"",	"",	"",	"",	"",	"",	43,	47,	0,	2,	6,	2,	5,	3,	0,	11,	3,	70,	13,	9,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	766,	53,	"Merrill Wheeler",	0,	13,	0.06,	"",	"",	"x",	"",	"",	"",	"",	45,	46,	0,	0,	6,	6,	4,	2,	0,	13,	3,	66,	13,	12,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	767,	53,	"Gary Sutter",	2,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	49,	41,	0,	0,	4,	11,	1,	2,	0,	12,	3,	66,	13,	12,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	768,	53,	"Bill Ludwig",	4,	15,	0.04,	"",	"x",	"",	"",	"",	"",	"",	41,	48,	0,	0,	7,	7,	3,	0,	1,	11,	3,	66,	13,	12,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	769,	53,	"Brad Wallace",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	49,	45,	0,	1,	3,	9,	2,	2,	1,	14,	3,	69,	13,	11,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	770,	53,	"Scott Hall",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	47,	49,	0,	1,	2,	5,	9,	1,	0,	15,	3,	68,	13,	13,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	771,	53,	"Tony Perrin",	1,	18,	0,	"",	"",	"",	"",	"",	"",	"",	51,	48,	0,	0,	5,	4,	5,	3,	1,	12,	3,	73,	13,	14,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	772,	53,	"Bryan Sockol",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	2,	1,	6,	5,	1,	3,	13,	3,	75,	13,	13,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	773,	53,	"Steve Bongard",	12,	20,	0,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	1,	6,	3,	7,	1,	0,	13,	3,	68,	13,	9,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	774,	53,	"Josh Stephens",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	59,	43,	0,	1,	2,	8,	5,	0,	2,	11,	3,	78,	13,	13,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	775,	53,	"Ken Byers",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	48,	54,	0,	1,	1,	6,	6,	3,	1,	14,	3,	78,	13,	10,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	776,	53,	"Justin Kudela",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	56,	47,	0,	0,	2,	7,	5,	2,	2,	15,	3,	72,	13,	16,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	777,	53,	"Patrick Affourtit",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	58,	57,	0,	0,	0,	3,	8,	4,	3,	15,	3,	85,	13,	15,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		[	778,	53,	"Jeff Gilligan",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"x",	63,	54,	0,	0,	2,	3,	2,	8,	3,	14,	3,	88,	13,	15,	2,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26,	],
		
		[	779,	54,	"Brent Isner",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	44,	40,	0,	1,	7,	7,	3,	0,	0,	14,	4,	50,	10,	20,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	780,	54,	"Chris Roebuck",	3,	2,	0.9,	"",	"",	"",	"x",	"",	"",	"",	42,	40,	1,	0,	9,	4,	4,	0,	0,	15,	4,	47,	10,	20,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	781,	54,	"Matt Keller",	3,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	41,	43,	0,	1,	9,	4,	3,	1,	0,	13,	4,	45,	10,	26,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	782,	54,	"Joe Milacek",	0,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	42,	45,	0,	0,	7,	7,	4,	0,	0,	14,	4,	46,	10,	27,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	783,	54,	"David Knowles",	6,	5,	0.6,	"",	"",	"",	"x",	"",	"",	"",	41,	41,	0,	1,	8,	7,	2,	0,	0,	13,	4,	47,	10,	22,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	784,	54,	"Merrill Wheeler",	0,	6,	0.53,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	9,	4,	3,	1,	1,	12,	4,	53,	10,	24,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	785,	54,	"Jason Strickland",	2,	7,	0.38,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	4,	11,	3,	0,	0,	16,	4,	49,	10,	24,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	786,	54,	"Matt Bigelow",	1,	7,	0.38,	"",	"",	"",	"",	"",	"",	"",	47,	43,	0,	1,	5,	6,	5,	1,	0,	13,	4,	52,	10,	25,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	787,	54,	"Scott Hall",	0,	7,	0.38,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	4,	9,	5,	0,	0,	16,	4,	49,	10,	26,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	788,	54,	"Connor Mazza",	10,	10,	0.15,	"",	"",	"",	"",	"",	"",	"",	44,	39,	0,	1,	8,	6,	3,	0,	0,	18,	4,	44,	10,	21,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	789,	54,	"Andy Nentwich",	6,	10,	0.15,	"",	"",	"",	"",	"",	"",	"",	44,	43,	0,	0,	6,	9,	3,	0,	0,	14,	4,	51,	10,	22,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	790,	54,	"Jared Pickens",	0,	10,	0.15,	"",	"",	"",	"",	"",	"",	"",	42,	51,	0,	1,	4,	7,	5,	0,	1,	17,	4,	51,	10,	25,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	791,	54,	"Jay Sutter",	1,	13,	0.07,	"",	"",	"",	"",	"",	"x",	"",	48,	45,	0,	0,	4,	9,	3,	2,	0,	16,	4,	50,	10,	27,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	792,	54,	"Sam Steinberg",	3,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	42,	50,	0,	0,	6,	8,	2,	1,	1,	17,	4,	54,	10,	21,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	793,	54,	"Steve Sillato",	5,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	44,	47,	0,	0,	3,	11,	4,	0,	0,	13,	4,	53,	10,	25,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	794,	54,	"Jeff Beckman",	8,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	1,	5,	7,	4,	1,	0,	15,	4,	49,	10,	25,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	795,	54,	"Brad Wallace",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	6,	4,	5,	2,	1,	13,	4,	59,	10,	25,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	796,	54,	"Steve Bongard",	2,	18,	0,	"",	"x",	"",	"",	"",	"",	"",	41,	55,	0,	0,	6,	4,	5,	2,	1,	19,	4,	52,	10,	25,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	797,	54,	"Todd Hamilton",	1,	18,	0,	"",	"",	"x",	"",	"",	"",	"",	50,	47,	0,	1,	2,	8,	4,	2,	1,	17,	4,	60,	10,	20,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	798,	54,	"Gary Sutter",	1,	20,	0,	"",	"",	"",	"",	"",	"",	"",	50,	48,	0,	1,	2,	7,	5,	2,	1,	22,	4,	49,	10,	27,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	799,	54,	"Ryan Chiarito",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	52,	47,	0,	1,	1,	10,	3,	1,	2,	13,	4,	57,	10,	29,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	800,	54,	"John Leite",	1,	22,	0,	"",	"",	"",	"",	"",	"",	"",	53,	47,	0,	0,	6,	5,	2,	3,	2,	16,	4,	58,	10,	26,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	801,	54,	"Brian Zimmerschied",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	3,	5,	6,	3,	1,	18,	4,	56,	10,	28,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	802,	54,	"John Stamper",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	47,	56,	0,	1,	1,	8,	3,	3,	2,	22,	4,	57,	10,	24,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	803,	54,	"Ken Byers",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	1,	8,	4,	4,	1,	17,	4,	59,	10,	30,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	804,	54,	"Josh Stephens",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	58,	50,	0,	0,	3,	3,	7,	3,	2,	19,	4,	58,	10,	31,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	805,	54,	"Bryan Sockol",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	52,	59,	0,	0,	1,	6,	5,	3,	3,	24,	4,	63,	10,	24,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	806,	54,	"Justin Kudela",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	50,	61,	0,	0,	1,	7,	7,	1,	2,	16,	4,	63,	10,	32,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	807,	54,	"Jeff Gilligan",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	55,	58,	0,	0,	2,	6,	4,	0,	6,	19,	4,	67,	10,	27,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	808,	54,	"Doug Short",	2,	30,	0,	"",	"",	"",	"",	"x",	"",	"",	54,	58,	0,	0,	3,	3,	5,	6,	1,	18,	4,	70,	10,	24,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	809,	54,	"Patrick Affourtit",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	61,	58,	0,	0,	0,	3,	6,	5,	4,	19,	4,	70,	10,	30,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	810,	54,	"Bob Krause",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"x",	61,	60,	0,	0,	0,	4,	4,	6,	4,	26,	4,	65,	10,	30,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		[	811,	54,	"Dustin Schmidt",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"x",	60,	61,	0,	0,	0,	6,	3,	4,	5,	26,	4,	66,	10,	29,	4,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33,	],
		
		[	812,	55,	"Matt Bigelow",	1,	1,	1.35,	"",	"",	"",	"x",	"",	"",	"",	39,	44,	0,	1,	8,	5,	3,	1,	0,	13,	4,	58,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	813,	55,	"Ryan Chiarito",	0,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	1,	6,	5,	6,	0,	0,	17,	4,	57,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	814,	55,	"Jay Sutter",	1,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	0,	5,	10,	3,	0,	0,	15,	4,	59,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	815,	55,	"John Leite",	0,	4,	0.68,	"",	"",	"",	"",	"",	"x",	"",	48,	40,	0,	0,	5,	9,	3,	1,	0,	15,	4,	59,	12,	14,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	816,	55,	"David Knowles",	5,	5,	0.6,	"",	"",	"",	"",	"",	"",	"",	44,	40,	0,	0,	7,	9,	1,	1,	0,	16,	4,	56,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	817,	55,	"Jason Strickland",	2,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	0,	6,	7,	4,	1,	0,	14,	4,	59,	12,	15,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	818,	55,	"Joe Milacek",	1,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	1,	5,	6,	4,	2,	0,	16,	4,	62,	12,	11,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	819,	55,	"Connor Mazza",	10,	8,	0.38,	"",	"x",	"",	"x",	"",	"",	"",	38,	45,	0,	1,	7,	7,	2,	1,	0,	11,	4,	61,	12,	11,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	820,	55,	"Josh Stephens",	0,	9,	0.3,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	3,	7,	5,	2,	1,	18,	4,	66,	12,	13,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	821,	55,	"Chris Roebuck",	5,	10,	0.23,	"",	"",	"",	"",	"",	"",	"",	45,	48,	0,	0,	5,	7,	3,	2,	1,	15,	4,	66,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	822,	55,	"Gary Sutter",	1,	11,	0.11,	"",	"",	"x",	"",	"",	"",	"",	53,	45,	0,	0,	1,	10,	4,	2,	1,	17,	4,	69,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	823,	55,	"Todd Hamilton",	1,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	51,	47,	0,	1,	3,	5,	4,	4,	1,	20,	4,	66,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	824,	55,	"Bill Ludwig",	4,	13,	0.05,	"",	"",	"",	"",	"x",	"",	"",	48,	48,	0,	0,	3,	7,	6,	1,	1,	19,	4,	64,	12,	13,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	825,	55,	"Steve Bongard",	2,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	51,	47,	0,	0,	1,	9,	6,	1,	1,	16,	4,	69,	12,	13,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	826,	55,	"Brad Wallace",	0,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	52,	48,	0,	0,	4,	4,	7,	2,	1,	16,	4,	66,	12,	18,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	827,	55,	"Jared Pickens",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	54,	48,	0,	0,	1,	8,	4,	4,	1,	18,	4,	70,	12,	14,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	828,	55,	"Doug Short",	2,	17,	0,	"",	"",	"",	"",	"",	"",	"",	48,	54,	0,	1,	0,	7,	6,	3,	1,	16,	4,	74,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	829,	55,	"Scott Hall",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	51,	53,	0,	0,	1,	7,	4,	5,	1,	25,	4,	67,	12,	12,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	830,	55,	"John Stamper",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	60,	49,	0,	0,	0,	6,	6,	3,	3,	21,	4,	75,	12,	13,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	831,	55,	"Patrick Affourtit",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	58,	63,	0,	0,	0,	3,	5,	5,	5,	22,	4,	81,	12,	18,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	832,	55,	"Jeff Gilligan",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	61,	61,	0,	0,	2,	1,	4,	3,	8,	19,	4,	83,	12,	20,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		[	833,	55,	"Bob Krause",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"x",	64,	62,	0,	0,	0,	3,	4,	5,	6,	18,	4,	90,	12,	18,	2,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22,	],
		
		[	834,	56,	"Joe Milacek",	1,	1,	1.12,	"W",	"",	"",	"",	"",	"",	"",	48,	41,	0,	0,	7,	7,	3,	0,	1,	16,	4,	50,	10,	23,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	835,	56,	"Jason Strickland",	2,	2,	0.74,	"L",	"",	"",	"",	"",	"",	"",	46,	42,	0,	0,	6,	8,	4,	0,	0,	14,	4,	51,	10,	23,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	836,	56,	"Steve Sillato",	5,	3,	0.62,	"",	"",	"",	"x",	"",	"",	"",	48,	38,	0,	0,	8,	6,	4,	0,	0,	14,	4,	47,	10,	25,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	837,	56,	"Matt Bigelow",	2,	4,	0.56,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	1,	5,	8,	2,	1,	1,	15,	4,	51,	10,	24,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	838,	56,	"Ryan Chiarito",	1,	5,	0.5,	"",	"",	"",	"",	"",	"",	"",	44,	48,	0,	1,	3,	9,	3,	2,	0,	19,	4,	50,	10,	23,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	839,	56,	"Matt Keller",	4,	6,	0.4,	"",	"",	"",	"",	"x",	"",	"",	49,	41,	0,	1,	5,	5,	7,	0,	0,	15,	4,	52,	10,	23,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	840,	56,	"Todd Hamilton",	1,	6,	0.4,	"",	"",	"",	"",	"",	"x",	"",	45,	48,	0,	1,	3,	7,	6,	1,	0,	15,	4,	54,	10,	24,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	841,	56,	"Connor Mazza",	10,	8,	0.28,	"",	"",	"x",	"x",	"",	"",	"",	46,	40,	0,	1,	9,	4,	2,	1,	1,	16,	4,	48,	10,	22,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	842,	56,	"Chris Roebuck",	5,	8,	0.28,	"",	"",	"",	"",	"",	"",	"",	47,	44,	0,	0,	8,	3,	5,	2,	0,	17,	4,	51,	10,	23,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	843,	56,	"Merrill Wheeler",	1,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	50,	46,	0,	0,	6,	4,	4,	4,	0,	16,	4,	56,	10,	24,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	844,	56,	"David Knowles",	5,	11,	0.12,	"",	"",	"",	"",	"",	"",	"",	50,	47,	0,	0,	1,	12,	3,	1,	1,	17,	4,	53,	10,	27,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	845,	56,	"Justin Kudela",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	3,	4,	6,	3,	2,	16,	4,	64,	10,	27,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	846,	56,	"Doug Short",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	54,	56,	0,	0,	3,	5,	5,	1,	4,	16,	4,	69,	10,	25,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	847,	56,	"Dustin Schmidt",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	71,	54,	0,	0,	1,	5,	4,	2,	6,	20,	4,	72,	10,	33,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	848,	56,	"Jeff Gilligan",	0,	15,	0.03,	"",	"x",	"",	"",	"",	"",	"",	64,	75,	0,	0,	2,	1,	4,	1,	10,	17,	4,	88,	10,	34,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		[	849,	56,	"Bob Krause",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"x",	78,	76,	0,	0,	0,	1,	3,	3,	11,	20,	4,	96,	10,	38,	4,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16,	],
		
		[	850,	57,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"x",	"",	"",	42,	37,	0,	3,	6,	8,	1,	0,	0,	13,	4,	47,	10,	19,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	851,	57,	"Anthony Cable",	0,	1,	1.12,	"",	"",	"",	"",	"",	"",	"",	41,	43,	0,	0,	8,	8,	2,	0,	0,	14,	4,	48,	10,	22,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	852,	57,	"Joe Ritch",	0,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	38,	47,	0,	1,	8,	5,	3,	1,	0,	14,	4,	48,	10,	23,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	853,	57,	"Justin Scribner",	8,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	37,	43,	0,	2,	7,	8,	1,	0,	0,	15,	4,	46,	10,	19,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	854,	57,	"Ben Reeb",	5,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	40,	44,	0,	0,	7,	10,	1,	0,	0,	13,	4,	47,	10,	24,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	855,	57,	"Zac Laumer",	5,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	37,	47,	0,	2,	7,	6,	1,	2,	0,	16,	4,	47,	10,	21,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	856,	57,	"Sam Palumbo",	2,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	37,	50,	0,	1,	8,	5,	2,	1,	1,	13,	4,	47,	10,	27,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	857,	57,	"Robert McArthur",	6,	7,	0.37,	"",	"",	"",	"",	"",	"",	"",	40,	44,	0,	3,	4,	8,	2,	1,	0,	13,	4,	50,	10,	21,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	858,	57,	"Merrill Wheeler",	1,	8,	0.28,	"",	"",	"",	"",	"",	"",	"",	48,	43,	0,	1,	2,	10,	5,	0,	0,	15,	4,	52,	10,	24,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	859,	57,	"Todd Hamilton",	0,	8,	0.28,	"",	"",	"",	"",	"",	"",	"",	45,	47,	0,	0,	4,	8,	6,	0,	0,	15,	4,	53,	10,	24,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	860,	57,	"Ryan Chiarito",	0,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	0,	6,	8,	1,	2,	1,	15,	4,	51,	10,	27,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	861,	57,	"Matt Keller",	4,	11,	0.12,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	0,	6,	9,	1,	1,	1,	14,	4,	49,	10,	27,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	862,	57,	"Jason Strickland",	2,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	42,	51,	0,	0,	5,	6,	6,	1,	0,	16,	4,	53,	10,	24,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	863,	57,	"John Leite",	1,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	3,	9,	5,	1,	0,	17,	4,	51,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	864,	57,	"Matt Bigelow",	3,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	43,	50,	0,	0,	3,	11,	2,	2,	0,	16,	4,	52,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	865,	57,	"David Knowles",	5,	15,	0.02,	"",	"",	"",	"",	"",	"",	"",	42,	50,	0,	2,	3,	7,	3,	3,	0,	15,	4,	55,	10,	22,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	866,	57,	"Doug Short",	0,	15,	0.02,	"",	"",	"",	"",	"",	"",	"",	45,	52,	0,	0,	3,	10,	2,	1,	2,	18,	4,	54,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	867,	57,	"Jonathan Reeb",	6,	17,	0,	"",	"",	"",	"",	"",	"",	"",	43,	49,	0,	0,	7,	4,	5,	2,	0,	15,	4,	52,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	868,	57,	"Brent Isner",	3,	17,	0,	"",	"",	"",	"",	"",	"",	"",	48,	47,	0,	1,	2,	8,	6,	0,	1,	20,	4,	51,	10,	24,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	869,	57,	"Josh Stephens",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	3,	5,	9,	1,	0,	17,	4,	55,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	870,	57,	"Andy Klausing",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	45,	54,	0,	0,	3,	7,	6,	0,	2,	17,	4,	57,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	871,	57,	"Tim Collins",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	54,	45,	0,	1,	2,	8,	4,	1,	2,	15,	4,	51,	10,	33,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	872,	57,	"Brian BenVenuto",	0,	22,	0,	"",	"",	"x",	"",	"",	"",	"",	51,	51,	0,	0,	1,	8,	5,	4,	0,	21,	4,	56,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	873,	57,	"James Treboni",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	49,	53,	0,	0,	3,	7,	4,	2,	2,	21,	4,	57,	10,	24,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	874,	57,	"Zachary Dunham",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	3,	5,	7,	1,	2,	25,	4,	55,	10,	22,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	875,	57,	"John Stamper",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	53,	51,	0,	0,	1,	6,	9,	1,	1,	20,	4,	58,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	876,	57,	"Charles Fitch",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	53,	52,	0,	0,	4,	3,	7,	3,	1,	19,	4,	60,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	877,	57,	"Ian Schambach",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	60,	48,	0,	0,	2,	6,	4,	3,	3,	17,	4,	60,	10,	31,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	878,	57,	"Mike Hardie",	7,	28,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	2,	8,	3,	4,	1,	21,	4,	53,	10,	28,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	879,	57,	"Riley Saelens",	5,	29,	0,	"",	"",	"",	"",	"",	"",	"",	56,	50,	0,	0,	2,	6,	3,	6,	1,	17,	4,	59,	10,	30,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	880,	57,	"Mathew Mayo",	4,	29,	0,	"",	"",	"",	"",	"",	"",	"",	50,	57,	0,	0,	2,	6,	5,	3,	2,	23,	4,	57,	10,	27,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	881,	57,	"Dylan Harbolt",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	53,	58,	0,	0,	1,	5,	5,	4,	3,	23,	4,	61,	10,	27,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	882,	57,	"Dustin Schmidt",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	52,	60,	0,	0,	0,	8,	3,	4,	3,	19,	4,	66,	10,	27,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	883,	57,	"Jason Smelser",	0,	32,	0,	"",	"",	"",	"",	"",	"x",	"",	50,	62,	0,	0,	3,	4,	3,	2,	6,	19,	4,	61,	10,	32,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	884,	57,	"Mike Galvin",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	54,	61,	0,	0,	1,	2,	7,	5,	3,	25,	4,	65,	10,	25,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	885,	57,	"Jacob Wollenberg",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	58,	58,	0,	0,	2,	1,	8,	2,	5,	23,	4,	61,	10,	32,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	886,	57,	"Justin Butt",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	53,	65,	0,	0,	1,	3,	3,	9,	2,	19,	4,	67,	10,	32,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	887,	57,	"Jeff Gilligan",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	64,	55,	0,	0,	0,	4,	4,	6,	4,	19,	4,	69,	10,	31,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	888,	57,	"Matt Arrasmith",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	56,	63,	0,	1,	1,	5,	2,	2,	7,	22,	4,	69,	10,	28,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	889,	57,	"Jason Tolman",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	62,	59,	0,	1,	1,	1,	5,	4,	6,	23,	4,	72,	10,	26,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	890,	57,	"Joe Kelly",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	62,	60,	0,	0,	2,	3,	3,	5,	5,	21,	4,	62,	10,	39,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	891,	57,	"Brice Darbyshire",	0,	41,	0,	"",	"x",	"",	"",	"",	"",	"",	55,	69,	0,	0,	1,	4,	4,	2,	7,	20,	4,	68,	10,	36,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	892,	57,	"Tim Koruna",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	68,	64,	0,	0,	0,	3,	3,	4,	8,	27,	4,	70,	10,	35,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		[	893,	57,	"William Sorokas",	0,	43,	0,	"",	"",	"",	"",	"",	"",	"x",	71,	64,	0,	0,	0,	3,	2,	4,	9,	25,	4,	79,	10,	31,	4,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44,	],
		
		[	894,	58,	"Jay Sutter",	1,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	46,	42,	0,	1,	4,	9,	4,	0,	0,	13,	4,	50,	10,	25,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	895,	58,	"Robert McArthur",	5,	2,	0.77,	"",	"",	"",	"x",	"",	"",	"",	42,	44,	0,	1,	6,	8,	2,	1,	0,	12,	4,	49,	10,	25,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	896,	58,	"Ryan Chiarito",	0,	2,	0.77,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	0,	4,	9,	5,	0,	0,	14,	4,	54,	10,	23,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	897,	58,	"Brent Isner",	3,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	49,	41,	0,	1,	5,	8,	2,	1,	1,	13,	4,	52,	10,	25,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	898,	58,	"Zac Laumer",	5,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	0,	6,	9,	2,	1,	0,	14,	4,	53,	10,	21,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	899,	58,	"Ben Reeb",	5,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	4,	11,	3,	0,	0,	15,	4,	50,	10,	24,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	900,	58,	"John Stamper",	0,	7,	0.42,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	0,	2,	9,	6,	1,	0,	15,	4,	56,	10,	25,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	901,	58,	"Jason Smelser",	0,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	44,	53,	0,	0,	6,	3,	5,	4,	0,	17,	4,	55,	10,	25,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	902,	58,	"Matt Bigelow",	3,	9,	0.28,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	0,	2,	8,	8,	0,	0,	17,	4,	53,	10,	26,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	903,	58,	"Josh Stephens",	0,	10,	0.21,	"",	"",	"",	"",	"",	"",	"",	47,	53,	0,	0,	2,	5,	10,	1,	0,	19,	4,	55,	10,	26,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	904,	58,	"John Leite",	1,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	53,	47,	0,	0,	2,	8,	5,	2,	1,	15,	4,	57,	10,	28,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	905,	58,	"Doug Short",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	1,	7,	7,	3,	0,	20,	4,	55,	10,	27,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	906,	58,	"Kasey Lacourse",	0,	12,	0.07,	"",	"",	"",	"",	"",	"x",	"",	50,	52,	0,	1,	1,	6,	6,	3,	1,	15,	4,	57,	10,	30,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	907,	58,	"Rob Hamilton",	7,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	47,	49,	0,	0,	4,	7,	5,	1,	1,	15,	4,	54,	10,	27,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	908,	58,	"Joe Milacek",	1,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	51,	52,	0,	0,	3,	6,	4,	3,	2,	15,	4,	58,	10,	30,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	909,	58,	"Jason Strickland",	2,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	53,	49,	0,	0,	2,	7,	5,	3,	1,	16,	4,	56,	10,	30,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	910,	58,	"Mathew Mayo",	2,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	49,	53,	0,	0,	1,	8,	5,	4,	0,	18,	4,	57,	10,	27,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	911,	58,	"Matt Subosits",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	52,	52,	0,	0,	5,	3,	5,	3,	2,	17,	4,	58,	10,	29,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	912,	58,	"Justin Scribner",	9,	19,	0,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	3,	10,	2,	1,	2,	17,	4,	56,	10,	24,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	913,	58,	"Gary Sutter",	1,	19,	0,	"",	"",	"",	"",	"",	"",	"",	57,	48,	0,	0,	2,	4,	8,	3,	1,	18,	4,	61,	10,	26,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	914,	58,	"Ian Schambach",	0,	21,	0,	"",	"",	"x",	"",	"",	"",	"",	49,	60,	0,	0,	3,	5,	5,	3,	2,	14,	4,	64,	10,	31,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	915,	58,	"Todd Hamilton",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	56,	53,	0,	0,	0,	9,	2,	4,	3,	16,	4,	65,	10,	28,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	916,	58,	"Bryan Riegger",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	53,	57,	0,	0,	0,	8,	4,	3,	3,	19,	4,	63,	10,	28,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	917,	58,	"Sam Palumbo",	2,	24,	0,	"",	"",	"",	"",	"x",	"",	"",	54,	55,	0,	0,	0,	6,	8,	3,	1,	20,	4,	60,	10,	29,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	918,	58,	"Charles Fitch",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	57,	54,	0,	0,	1,	5,	5,	5,	2,	19,	4,	62,	10,	30,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	919,	58,	"Brian BenVenuto",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	53,	59,	0,	0,	1,	4,	6,	5,	2,	20,	4,	60,	10,	32,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	920,	58,	"Mike Galvin",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	54,	58,	0,	0,	0,	4,	7,	6,	1,	21,	4,	63,	10,	28,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	921,	58,	"Andy Klausing",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	56,	61,	0,	0,	1,	3,	4,	7,	3,	22,	4,	63,	10,	32,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	922,	58,	"Luke Eschenbrenner",	1,	29,	0,	"",	"",	"",	"",	"",	"",	"",	64,	62,	0,	0,	2,	0,	5,	5,	6,	22,	4,	65,	10,	39,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	923,	58,	"Justin Butt",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	67,	60,	0,	0,	1,	3,	4,	5,	5,	22,	4,	65,	10,	40,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	924,	58,	"Matt Arrasmith",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	70,	60,	0,	0,	0,	4,	3,	3,	8,	17,	4,	75,	10,	38,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	925,	58,	"William Sorokas",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	65,	66,	0,	0,	0,	3,	3,	5,	7,	17,	4,	72,	10,	42,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	926,	58,	"Tim Blausey",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	59,	72,	0,	0,	0,	2,	6,	3,	7,	21,	4,	74,	10,	36,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	927,	58,	"Patrick Affourtit",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	69,	63,	0,	0,	0,	0,	2,	10,	6,	23,	4,	73,	10,	36,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	928,	58,	"Dustin Schmidt",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	62,	71,	0,	0,	1,	1,	2,	7,	7,	22,	4,	73,	10,	38,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	929,	58,	"Ray Vaught",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	68,	68,	0,	0,	0,	1,	3,	4,	10,	24,	4,	74,	10,	38,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	930,	58,	"Scott Mulligan",	0,	37,	0,	"",	"x",	"",	"",	"",	"",	"",	61,	76,	0,	0,	0,	5,	1,	5,	7,	18,	4,	76,	10,	43,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	931,	58,	"Brice Darbyshire",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	68,	70,	0,	0,	0,	1,	3,	5,	9,	21,	4,	83,	10,	34,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		[	932,	58,	"Jeff Gilligan",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"x",	69,	73,	0,	0,	1,	2,	1,	4,	10,	21,	4,	82,	10,	39,	4,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39,	],
		
		[	933,	59,	"Ben Reeb",	5,	1,	1.35,	"",	"",	"",	"x",	"",	"",	"",	39,	43,	0,	3,	5,	9,	0,	0,	1,	12,	4,	43,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	934,	59,	"John Stamper",	0,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	43,	47,	0,	1,	4,	9,	3,	0,	1,	17,	4,	52,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	935,	59,	"Steve Sillato",	3,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	0,	6,	7,	5,	0,	0,	16,	4,	50,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	936,	59,	"Gary Sutter",	0,	4,	0.64,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	0,	4,	9,	3,	2,	0,	18,	4,	52,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	937,	59,	"Todd Hamilton",	0,	4,	0.64,	"",	"",	"",	"",	"",	"",	"",	44,	49,	0,	1,	2,	10,	3,	2,	0,	17,	4,	51,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	938,	59,	"Connor Mazza",	10,	6,	0.53,	"",	"",	"",	"",	"",	"",	"",	40,	44,	0,	2,	6,	7,	2,	1,	0,	16,	4,	48,	10,	20,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	939,	59,	"Jonathan Reeb",	6,	7,	0.38,	"",	"",	"",	"",	"",	"",	"",	41,	49,	0,	0,	4,	10,	4,	0,	0,	15,	4,	50,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	940,	59,	"Ryan Chiarito",	1,	7,	0.38,	"",	"",	"",	"",	"",	"",	"",	44,	51,	0,	0,	3,	10,	3,	1,	1,	15,	4,	56,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	941,	59,	"Doug Short",	0,	7,	0.38,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	1,	4,	3,	8,	2,	0,	19,	4,	53,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	942,	59,	"Mathew Mayo",	2,	10,	0.23,	"",	"",	"",	"",	"",	"",	"",	42,	53,	0,	1,	3,	7,	4,	3,	0,	15,	4,	54,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	943,	59,	"David Knowles",	5,	11,	0.1,	"",	"x",	"",	"",	"",	"",	"",	38,	55,	0,	1,	6,	6,	2,	2,	1,	18,	4,	53,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	944,	59,	"Matt Bigelow",	3,	11,	0.1,	"",	"",	"",	"",	"",	"",	"",	44,	51,	0,	0,	4,	7,	5,	2,	0,	17,	4,	53,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	945,	59,	"Jason Strickland",	2,	11,	0.1,	"",	"",	"",	"",	"",	"",	"",	45,	51,	0,	0,	1,	12,	3,	2,	0,	18,	4,	52,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	946,	59,	"Jay Sutter",	2,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	50,	48,	0,	1,	0,	7,	10,	0,	0,	15,	4,	56,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	947,	59,	"Sam Palumbo",	2,	14,	0.04,	"",	"",	"",	"",	"x",	"",	"",	49,	49,	0,	0,	4,	7,	4,	2,	1,	17,	4,	56,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	948,	59,	"Joe Milacek",	1,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	44,	55,	0,	2,	2,	5,	6,	1,	2,	20,	4,	56,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	949,	59,	"Graydon Spanner",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	50,	50,	0,	1,	2,	5,	6,	4,	0,	21,	4,	56,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	950,	59,	"Matt Keller",	3,	18,	0,	"",	"",	"",	"",	"",	"",	"",	47,	51,	0,	1,	3,	5,	6,	2,	1,	21,	4,	55,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	951,	59,	"Joe Ritch",	2,	19,	0,	"",	"",	"",	"",	"",	"",	"",	52,	48,	0,	0,	5,	5,	4,	3,	1,	17,	4,	60,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	952,	59,	"Merrill Wheeler",	1,	20,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	2,	6,	7,	2,	1,	20,	4,	58,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	953,	59,	"Andy Klausing",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	51,	52,	0,	0,	0,	8,	7,	3,	0,	20,	4,	57,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	954,	59,	"David Orr",	0,	22,	0,	"",	"",	"x",	"",	"",	"",	"",	57,	48,	0,	0,	3,	6,	3,	4,	2,	22,	4,	57,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	955,	59,	"Dustin Schmidt",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	2,	3,	8,	4,	1,	21,	4,	59,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	956,	59,	"James Treboni",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	52,	55,	0,	0,	1,	6,	9,	0,	2,	17,	4,	62,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	957,	59,	"Kasey Lacourse",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	47,	60,	0,	0,	1,	7,	5,	2,	3,	22,	4,	57,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	958,	59,	"Justin Higgins",	12,	26,	0,	"",	"",	"",	"",	"",	"",	"",	44,	52,	0,	0,	5,	6,	6,	0,	1,	17,	4,	56,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	959,	59,	"Charles Fitch",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	58,	50,	0,	0,	1,	6,	8,	0,	3,	22,	4,	61,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	960,	59,	"Riley Saelens",	3,	28,	0,	"",	"",	"",	"",	"",	"",	"",	52,	54,	0,	1,	1,	4,	7,	4,	1,	16,	4,	64,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	961,	59,	"Marc Johnson",	13,	29,	0,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	3,	7,	6,	2,	0,	16,	4,	57,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	962,	59,	"Robert McArthur",	5,	30,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	6,	4,	1,	4,	3,	16,	4,	56,	10,	34,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	963,	59,	"Bryan Riegger",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	59,	52,	0,	0,	0,	6,	8,	2,	2,	20,	4,	64,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	964,	59,	"Matt Arrasmith",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	59,	54,	0,	0,	0,	4,	6,	7,	1,	19,	4,	65,	10,	29,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	965,	59,	"Mike Galvin",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	57,	58,	0,	0,	3,	1,	5,	6,	3,	18,	4,	64,	10,	33,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	966,	59,	"Zachary Dunham",	0,	33,	0,	"",	"",	"",	"",	"",	"x",	"",	56,	59,	0,	0,	2,	3,	5,	4,	4,	20,	4,	67,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	967,	59,	"Dylan Harbolt",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	57,	59,	0,	0,	1,	3,	6,	4,	4,	20,	4,	68,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	968,	59,	"Justin Kudela",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	62,	54,	0,	1,	0,	3,	7,	3,	4,	23,	4,	65,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	969,	59,	"Ian Schambach",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	58,	60,	0,	0,	1,	5,	4,	4,	4,	19,	4,	72,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	970,	59,	"Adam Sheppard",	5,	38,	0,	"",	"",	"",	"",	"",	"",	"",	58,	56,	0,	0,	2,	2,	4,	8,	2,	25,	4,	61,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	971,	59,	"Ken Byers",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	55,	64,	0,	0,	1,	4,	4,	4,	5,	23,	4,	67,	10,	29,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	972,	59,	"Jeff Gilligan",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	61,	61,	0,	0,	1,	3,	5,	4,	5,	21,	4,	74,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	973,	59,	"Jason Tolman",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"",	68,	55,	0,	0,	2,	1,	6,	3,	6,	22,	4,	64,	10,	37,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	974,	59,	"Scott Mulligan",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	62,	63,	0,	0,	0,	4,	3,	7,	4,	21,	4,	75,	10,	29,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	975,	59,	"Patrick Affourtit",	0,	43,	0,	"",	"",	"",	"",	"",	"",	"",	66,	65,	0,	0,	0,	2,	4,	4,	8,	28,	4,	73,	10,	30,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		[	976,	59,	"William Sorokas",	0,	44,	0,	"",	"",	"",	"",	"",	"",	"x",	64,	77,	0,	0,	0,	1,	4,	2,	11,	31,	4,	72,	10,	38,	4,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44,	],
		
		[	977,	60,	"Matt Keller",	3,	1,	1.35,	"",	"",	"",	"x",	"",	"",	"",	43,	40,	0,	0,	10,	5,	3,	0,	0,	13,	4,	48,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	978,	60,	"Doug Short",	0,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	42,	45,	0,	0,	6,	9,	3,	0,	0,	16,	4,	48,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	979,	60,	"Steve Sillato",	2,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	39,	47,	0,	2,	2,	12,	2,	0,	0,	16,	4,	48,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	980,	60,	"Todd Hamilton",	0,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	0,	7,	6,	5,	0,	0,	18,	4,	48,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	981,	60,	"Joe Ritch",	2,	5,	0.6,	"",	"",	"",	"",	"",	"",	"",	47,	40,	0,	1,	6,	8,	1,	2,	0,	13,	4,	47,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	982,	60,	"Mathew Mayo",	1,	6,	0.53,	"",	"",	"",	"",	"",	"",	"",	42,	48,	0,	0,	6,	7,	4,	1,	0,	18,	4,	48,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	983,	60,	"Joe Milacek",	1,	7,	0.45,	"",	"",	"",	"",	"",	"x",	"",	45,	46,	0,	0,	4,	10,	3,	1,	0,	14,	4,	51,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	984,	60,	"Jonathan Reeb",	6,	8,	0.34,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	1,	4,	11,	1,	1,	0,	15,	4,	50,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	985,	60,	"Ryan Chiarito",	1,	8,	0.34,	"",	"",	"",	"",	"",	"",	"",	44,	48,	0,	0,	5,	9,	2,	1,	1,	17,	4,	53,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	986,	60,	"Zac Laumer",	5,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	42,	47,	0,	1,	6,	7,	2,	1,	1,	14,	4,	47,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	987,	60,	"Jason Strickland",	2,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	47,	45,	0,	0,	4,	10,	2,	2,	0,	16,	4,	52,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	988,	60,	"Ben Reeb",	6,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	43,	46,	0,	0,	3,	13,	2,	0,	0,	16,	4,	48,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	989,	60,	"Connor Mazza",	10,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	0,	8,	7,	3,	0,	0,	14,	4,	46,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	990,	60,	"David Knowles",	5,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	7,	5,	5,	1,	0,	18,	4,	49,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	991,	60,	"John Leite",	1,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	46,	48,	0,	0,	5,	8,	2,	2,	1,	15,	4,	56,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	992,	60,	"Merrill Wheeler",	0,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	48,	47,	0,	0,	4,	8,	3,	3,	0,	15,	4,	57,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	993,	60,	"Justin Higgins",	10,	17,	0,	"",	"",	"",	"",	"x",	"",	"",	42,	44,	0,	1,	5,	9,	3,	0,	0,	14,	4,	50,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	994,	60,	"Robert McArthur",	5,	17,	0,	"",	"",	"",	"",	"",	"",	"",	43,	48,	0,	1,	4,	8,	4,	0,	1,	16,	4,	53,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	995,	60,	"Matt Bigelow",	3,	17,	0,	"",	"",	"",	"",	"",	"",	"",	49,	44,	0,	2,	4,	4,	5,	3,	0,	18,	4,	55,	10,	20,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	996,	60,	"Brent Isner",	5,	20,	0,	"",	"",	"x",	"",	"",	"",	"",	43,	49,	0,	0,	5,	7,	5,	1,	0,	15,	4,	53,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	997,	60,	"John Stamper",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	52,	46,	0,	0,	1,	10,	5,	2,	0,	18,	4,	55,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	998,	60,	"Dylan Harbolt",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	52,	48,	0,	1,	3,	6,	4,	2,	2,	15,	4,	57,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	999,	60,	"Graydon Spanner",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	51,	49,	0,	0,	2,	8,	6,	1,	1,	17,	4,	60,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1000,	60,	"James Treboni",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	5,	6,	2,	4,	1,	18,	4,	53,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1001,	60,	"Jason Smelser",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	53,	48,	0,	0,	4,	5,	4,	4,	1,	15,	4,	57,	10,	29,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1002,	60,	"Scott Hall",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	46,	56,	0,	0,	5,	3,	4,	5,	1,	15,	4,	59,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1003,	60,	"Seth Wehner",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	51,	53,	0,	0,	2,	8,	3,	2,	3,	18,	4,	59,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1004,	60,	"David Orr",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	54,	52,	0,	0,	0,	6,	8,	4,	0,	18,	4,	60,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1005,	60,	"Justin Kudela",	0,	28,	0,	"",	"x",	"",	"",	"",	"",	"",	46,	60,	0,	1,	2,	6,	5,	2,	2,	22,	4,	58,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1006,	60,	"Josh Stephens",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	50,	59,	0,	1,	0,	9,	3,	1,	4,	22,	4,	60,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1007,	60,	"Dustin Schmidt",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	54,	56,	0,	0,	3,	4,	3,	5,	3,	16,	4,	64,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1008,	60,	"Mike Galvin",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	52,	60,	0,	0,	1,	3,	7,	6,	1,	22,	4,	61,	10,	29,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1009,	60,	"Scott Mulligan",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	53,	59,	0,	0,	1,	6,	4,	4,	3,	18,	4,	66,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1010,	60,	"Tim Blausey",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	58,	56,	0,	0,	2,	2,	6,	4,	4,	21,	4,	60,	10,	33,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1011,	60,	"Jeff Gilligan",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	55,	63,	0,	1,	1,	2,	6,	3,	5,	17,	4,	69,	10,	32,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1012,	60,	"Matt Arrasmith",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	60,	60,	0,	0,	1,	1,	9,	2,	5,	24,	4,	69,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1013,	60,	"Patrick Affourtit",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	57,	63,	0,	0,	0,	1,	9,	5,	3,	20,	4,	67,	10,	33,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		[	1014,	60,	"Jason Tolman",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"x",	63,	66,	0,	0,	1,	3,	3,	4,	7,	17,	4,	73,	10,	39,	4,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38,	],
		
		[	1015,	61,	"Steve Sillato",	2,	1,	1.26,	"W",	"",	"",	"x",	"",	"",	"",	41,	40,	0,	0,	9,	9,	0,	0,	0,	13,	4,	46,	10,	22,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1016,	61,	"Ryan Chiarito",	1,	2,	0.84,	"L",	"",	"",	"",	"",	"",	"",	44,	38,	0,	1,	10,	3,	4,	0,	0,	13,	4,	47,	10,	22,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1017,	61,	"Anthony Cable",	0,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	42,	43,	0,	1,	9,	5,	1,	1,	1,	13,	4,	52,	10,	20,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1018,	61,	"Doug Short",	0,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	42,	46,	0,	0,	7,	8,	1,	2,	0,	14,	4,	52,	10,	22,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1019,	61,	"Robert McArthur",	5,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	43,	41,	0,	0,	8,	8,	2,	0,	0,	15,	4,	48,	10,	21,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1020,	61,	"Jason Strickland",	2,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	1,	5,	8,	4,	0,	0,	17,	4,	47,	10,	23,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1021,	61,	"Ben Reeb",	6,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	48,	37,	0,	2,	5,	9,	0,	2,	0,	16,	4,	47,	10,	22,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1022,	61,	"Todd Hamilton",	0,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	44,	47,	0,	0,	8,	5,	3,	1,	1,	18,	4,	52,	10,	21,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1023,	61,	"Jay Sutter",	2,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	7,	7,	2,	1,	1,	13,	4,	52,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1024,	61,	"Joe Milacek",	1,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	41,	50,	0,	0,	8,	4,	4,	1,	1,	16,	4,	50,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1025,	61,	"Mathew Mayo",	1,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	42,	50,	0,	2,	6,	4,	4,	0,	2,	16,	4,	54,	10,	22,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1026,	61,	"Justin Scribner",	9,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	0,	6,	11,	1,	0,	0,	14,	4,	47,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1027,	61,	"Gary Sutter",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	45,	49,	0,	2,	2,	9,	3,	0,	2,	16,	4,	53,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1028,	61,	"Matt Keller",	4,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	43,	48,	0,	2,	2,	8,	5,	1,	0,	20,	4,	46,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1029,	61,	"David Knowles",	5,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	2,	6,	6,	1,	2,	1,	19,	4,	52,	10,	19,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1030,	61,	"Zac Laumer",	4,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	47,	44,	0,	0,	6,	7,	3,	2,	0,	16,	4,	51,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1031,	61,	"Steven Baybutt",	2,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	42,	51,	0,	0,	8,	5,	1,	3,	1,	15,	4,	55,	10,	23,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1032,	61,	"David Orr",	0,	18,	0,	"",	"",	"",	"",	"",	"x",	"",	46,	50,	0,	0,	6,	4,	4,	4,	0,	17,	4,	54,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1033,	61,	"Jonathan Reeb",	6,	19,	0,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	0,	7,	7,	1,	2,	1,	13,	4,	48,	10,	30,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1034,	61,	"Jason Smelser",	0,	20,	0,	"",	"",	"x",	"",	"",	"",	"",	55,	43,	0,	0,	4,	6,	6,	1,	1,	18,	4,	54,	10,	26,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1035,	61,	"Justin Kudela",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	49,	50,	0,	0,	3,	7,	4,	4,	0,	18,	4,	56,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1036,	61,	"Joe Ritch",	2,	22,	0,	"",	"",	"",	"",	"",	"",	"",	51,	47,	0,	1,	5,	4,	3,	3,	2,	23,	4,	52,	10,	23,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1037,	61,	"Sam Palumbo",	2,	22,	0,	"",	"",	"",	"",	"",	"",	"",	47,	51,	0,	0,	5,	5,	4,	3,	1,	19,	4,	54,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1038,	61,	"Merrill Wheeler",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	49,	52,	0,	0,	4,	5,	6,	2,	1,	18,	4,	60,	10,	23,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1039,	61,	"Justin Higgins",	10,	25,	0,	"",	"",	"",	"",	"x",	"",	"",	43,	49,	0,	0,	7,	5,	3,	3,	0,	17,	4,	52,	10,	23,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1040,	61,	"Charles Fitch",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	1,	3,	4,	4,	5,	1,	20,	4,	58,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1041,	61,	"James Treboni",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	49,	53,	0,	0,	4,	5,	6,	0,	3,	18,	4,	59,	10,	25,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1042,	61,	"Joshua Treadway",	9,	28,	0,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	0,	6,	6,	4,	0,	2,	15,	4,	54,	10,	26,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1043,	61,	"Graydon Spanner",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	55,	49,	0,	1,	3,	2,	7,	3,	2,	14,	4,	60,	10,	30,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1044,	61,	"John Stamper",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	49,	58,	0,	0,	2,	5,	7,	1,	3,	20,	4,	59,	10,	28,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1045,	61,	"Mike Galvin",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	54,	53,	0,	0,	1,	8,	3,	4,	2,	17,	4,	61,	10,	29,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1046,	61,	"Seth Wehner",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	53,	55,	0,	0,	3,	6,	2,	4,	3,	13,	4,	60,	10,	35,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1047,	61,	"Dylan Harbolt",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	55,	54,	0,	0,	1,	5,	7,	3,	2,	21,	4,	60,	10,	28,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1048,	61,	"Scott Hall",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	55,	56,	0,	0,	0,	8,	2,	6,	2,	21,	4,	60,	10,	30,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1049,	61,	"Matt Bigelow",	2,	35,	0,	"",	"x",	"",	"",	"",	"",	"",	47,	63,	0,	0,	5,	5,	2,	3,	3,	15,	4,	71,	10,	24,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1050,	61,	"Ian Schambach",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	58,	55,	0,	0,	3,	2,	6,	3,	4,	21,	4,	64,	10,	28,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1051,	61,	"Tim Koruna",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	54,	59,	0,	0,	1,	3,	9,	2,	3,	20,	4,	61,	10,	32,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1052,	61,	"Dustin Schmidt",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	59,	62,	0,	0,	0,	2,	6,	6,	4,	23,	4,	65,	10,	33,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1053,	61,	"Jacob Wollenberg",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	63,	60,	0,	0,	0,	3,	5,	7,	3,	22,	4,	70,	10,	31,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1054,	61,	"Patrick Affourtit",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	67,	57,	0,	0,	0,	1,	5,	9,	3,	24,	4,	68,	10,	32,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		[	1055,	61,	"Jeff Gilligan",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"x",	76,	64,	0,	0,	0,	1,	4,	5,	8,	26,	4,	82,	10,	32,	4,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41,	],
		
		[	1056,	62,	"Matt Keller",	4,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	36,	39,	0,	3,	10,	3,	2,	0,	0,	13,	4,	48,	11,	14,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1057,	62,	"Todd Hamilton",	0,	1,	1.71,	"",	"",	"",	"",	"",	"",	"",	40,	43,	0,	0,	7,	10,	1,	0,	0,	16,	4,	50,	11,	17,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1058,	62,	"Steven Baybutt",	1,	2,	1.14,	"",	"",	"",	"",	"",	"",	"",	44,	39,	0,	1,	7,	7,	3,	0,	0,	16,	4,	50,	11,	17,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1059,	62,	"Brent Isner",	1,	3,	0.95,	"",	"",	"",	"",	"",	"",	"",	42,	42,	0,	2,	3,	11,	2,	0,	0,	13,	4,	53,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1060,	62,	"Gary Sutter",	0,	4,	0.86,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	0,	6,	8,	4,	0,	0,	14,	4,	55,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1061,	62,	"Steve Sillato",	5,	5,	0.67,	"",	"",	"",	"",	"",	"",	"",	41,	42,	0,	0,	7,	10,	1,	0,	0,	15,	4,	50,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1062,	62,	"Robert McArthur",	6,	5,	0.67,	"",	"",	"",	"",	"",	"",	"",	42,	40,	0,	0,	8,	9,	1,	0,	0,	15,	4,	52,	11,	15,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1063,	62,	"Ryan Chiarito",	3,	5,	0.67,	"",	"",	"",	"",	"",	"",	"",	42,	43,	0,	1,	7,	6,	3,	1,	0,	13,	4,	50,	11,	22,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1064,	62,	"Doug Short",	0,	8,	0.48,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	5,	8,	5,	0,	0,	16,	4,	55,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1065,	62,	"Matt Bigelow",	2,	9,	0.38,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	4,	10,	4,	0,	0,	15,	4,	57,	11,	17,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1066,	62,	"John Leite",	1,	10,	0.24,	"",	"",	"",	"",	"",	"",	"",	48,	43,	0,	1,	4,	8,	3,	1,	1,	16,	4,	53,	11,	22,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1067,	62,	"Eric Heberle",	0,	10,	0.24,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	5,	7,	5,	0,	1,	17,	4,	59,	11,	16,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1068,	62,	"Connor Mazza",	9,	12,	0.1,	"",	"",	"",	"",	"x",	"",	"",	40,	44,	0,	2,	7,	5,	2,	2,	0,	14,	4,	55,	11,	15,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1069,	62,	"Ben Reeb",	6,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	1,	5,	6,	6,	0,	0,	13,	4,	55,	11,	20,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1070,	62,	"Jason Strickland",	2,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	44,	48,	0,	0,	3,	10,	4,	1,	0,	16,	4,	57,	11,	19,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1071,	62,	"John Stamper",	0,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	44,	50,	0,	0,	3,	9,	4,	2,	0,	18,	4,	56,	11,	20,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1072,	62,	"Jay Sutter",	2,	16,	0.03,	"",	"",	"",	"",	"",	"",	"",	48,	45,	0,	1,	1,	12,	3,	0,	1,	17,	4,	57,	11,	19,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1073,	62,	"Sam Palumbo",	2,	16,	0.03,	"",	"x",	"",	"",	"",	"",	"",	42,	51,	0,	1,	4,	7,	4,	1,	1,	14,	4,	59,	11,	20,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1074,	62,	"David Knowles",	5,	18,	0,	"",	"",	"x",	"",	"",	"",	"",	46,	46,	0,	0,	5,	7,	5,	0,	1,	16,	4,	58,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1075,	62,	"Jason Smelser",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	3,	7,	5,	2,	1,	18,	4,	62,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1076,	62,	"Joe Milacek",	2,	20,	0,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	4,	7,	4,	2,	1,	16,	4,	58,	11,	23,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1077,	62,	"Scott Hall",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	2,	6,	6,	3,	1,	20,	4,	64,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1078,	62,	"Joshua Treadway",	9,	22,	0,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	1,	4,	5,	5,	3,	0,	18,	4,	58,	11,	18,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1079,	62,	"Justin Kudela",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	55,	50,	0,	0,	5,	3,	4,	2,	4,	15,	4,	70,	11,	20,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1080,	62,	"Mathew Mayo",	2,	24,	0,	"",	"",	"",	"",	"",	"",	"",	54,	50,	0,	0,	3,	5,	4,	4,	2,	15,	4,	66,	11,	23,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1081,	62,	"Ian Schambach",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	55,	52,	0,	0,	1,	6,	5,	4,	2,	19,	4,	69,	11,	19,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1082,	62,	"Josh Stephens",	0,	25,	0,	"",	"",	"",	"",	"",	"x",	"",	54,	53,	0,	0,	2,	4,	6,	4,	2,	15,	4,	72,	11,	20,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1083,	62,	"John Barry",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	53,	55,	0,	0,	2,	7,	4,	3,	2,	16,	4,	66,	11,	26,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1084,	62,	"Kasey Lacourse",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	57,	52,	0,	0,	0,	5,	8,	3,	2,	18,	4,	69,	11,	22,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1085,	62,	"Justin Scribner",	8,	29,	0,	"",	"",	"",	"",	"",	"",	"",	48,	54,	0,	0,	0,	11,	2,	4,	1,	20,	4,	61,	11,	21,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1086,	62,	"Dustin Schmidt",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	53,	57,	0,	0,	0,	4,	10,	3,	1,	19,	4,	66,	11,	25,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1087,	62,	"Matt Arrasmith",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	58,	57,	0,	0,	0,	2,	8,	6,	2,	19,	4,	70,	11,	26,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1088,	62,	"Jeff Gilligan",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	61,	62,	0,	0,	0,	5,	4,	5,	4,	22,	4,	74,	11,	27,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1089,	62,	"Patrick Affourtit",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	62,	63,	0,	0,	0,	0,	10,	1,	7,	20,	4,	80,	11,	25,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		[	1090,	62,	"Karl Schedler",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"x",	64,	64,	0,	0,	0,	2,	5,	4,	7,	23,	4,	78,	11,	27,	3,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35,	],
		
		[	1091,	63,	"John Leite",	1,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	41,	42,	0,	0,	9,	7,	2,	0,	0,	14,	4,	47,	10,	22,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1092,	63,	"Matt Subosits",	0,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	44,	41,	0,	4,	3,	7,	2,	2,	0,	16,	4,	45,	10,	24,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1093,	63,	"Todd Hamilton",	2,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	44,	41,	0,	1,	6,	9,	1,	1,	0,	17,	4,	45,	10,	23,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1094,	63,	"Justin Scribner",	8,	4,	0.6,	"",	"",	"",	"x",	"",	"x",	"",	42,	39,	0,	3,	7,	4,	4,	0,	0,	14,	4,	46,	10,	21,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1095,	63,	"Jason Strickland",	1,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	0,	3,	14,	1,	0,	0,	14,	4,	50,	10,	24,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1096,	63,	"Tim Collins",	0,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	5,	10,	2,	1,	0,	16,	4,	50,	10,	23,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1097,	63,	"Robert McArthur",	6,	7,	0.34,	"",	"",	"",	"",	"x",	"",	"",	42,	42,	0,	4,	2,	9,	2,	1,	0,	15,	4,	51,	10,	18,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1098,	63,	"Steve Sillato",	5,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	0,	7,	9,	2,	0,	0,	16,	4,	46,	10,	23,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1099,	63,	"Joe Milacek",	1,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	47,	42,	0,	1,	6,	7,	1,	3,	0,	17,	4,	52,	10,	20,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1100,	63,	"Gary Sutter",	0,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	0,	4,	10,	4,	0,	0,	16,	4,	50,	10,	24,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1101,	63,	"Jay Sutter",	2,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	48,	41,	0,	1,	6,	7,	2,	1,	1,	18,	4,	44,	10,	27,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1102,	63,	"John Stamper",	0,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	0,	4,	10,	3,	1,	0,	17,	4,	51,	10,	23,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1103,	63,	"Graydon Spanner",	0,	13,	0.07,	"",	"",	"x",	"",	"",	"",	"",	45,	47,	0,	0,	3,	11,	3,	1,	0,	15,	4,	53,	10,	24,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1104,	63,	"Dan Nelson",	5,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	1,	5,	6,	6,	0,	0,	16,	4,	52,	10,	21,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1105,	63,	"Steven Baybutt",	4,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	0,	7,	6,	3,	2,	0,	19,	4,	48,	10,	23,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1106,	63,	"Doug Short",	1,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	45,	48,	0,	0,	2,	12,	3,	1,	0,	17,	4,	52,	10,	24,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1107,	63,	"Matt Bigelow",	2,	17,	0,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	7,	3,	6,	1,	1,	15,	4,	55,	10,	24,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1108,	63,	"Andy Klausing",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	52,	49,	0,	0,	4,	6,	3,	4,	1,	20,	4,	56,	10,	25,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1109,	63,	"Ben Reeb",	6,	19,	0,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	0,	3,	8,	6,	0,	1,	17,	4,	56,	10,	23,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1110,	63,	"Eric Heberle",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	58,	51,	0,	0,	5,	3,	3,	4,	3,	16,	4,	67,	10,	26,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1111,	63,	"Scott Howland",	0,	21,	0,	"",	"x",	"",	"",	"",	"",	"",	54,	60,	0,	0,	2,	4,	5,	4,	3,	19,	4,	72,	10,	23,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1112,	63,	"Tim Koruna",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	59,	58,	0,	0,	1,	6,	3,	4,	4,	18,	4,	69,	10,	30,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1113,	63,	"Jason Tolman",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	60,	58,	0,	0,	2,	5,	4,	2,	5,	20,	4,	70,	10,	28,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1114,	63,	"Matt Arrasmith",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	65,	57,	0,	0,	1,	1,	6,	6,	4,	21,	4,	68,	10,	33,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1115,	63,	"Dustin Schmidt",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	63,	63,	0,	0,	0,	5,	1,	7,	5,	23,	4,	68,	10,	35,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		[	1116,	63,	"Jeff Gilligan",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"x",	72,	60,	0,	0,	0,	2,	5,	4,	7,	25,	4,	74,	10,	33,	4,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26,	],
		
		[	1117,	64,	"Steve Sillato",	6,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	39,	40,	0,	0,	12,	5,	1,	0,	0,	14,	4,	45,	10,	20,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1118,	64,	"Doug Short",	1,	1,	1.12,	"",	"",	"",	"",	"",	"",	"",	42,	40,	0,	1,	8,	7,	2,	0,	0,	13,	4,	46,	10,	23,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1119,	64,	"Jay Sutter",	2,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	44,	41,	0,	1,	8,	4,	5,	0,	0,	14,	4,	50,	10,	21,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1120,	64,	"Robert McArthur",	6,	3,	0.62,	"",	"",	"",	"",	"",	"x",	"",	43,	41,	0,	1,	6,	9,	2,	0,	0,	14,	4,	47,	10,	23,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1121,	64,	"Ryan Chiarito",	5,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	44,	42,	0,	1,	4,	11,	2,	0,	0,	16,	4,	47,	10,	23,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1122,	64,	"Todd Hamilton",	4,	4,	0.5,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	0,	7,	9,	1,	0,	1,	14,	4,	47,	10,	26,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1123,	64,	"Matt Bigelow",	0,	4,	0.5,	"",	"",	"",	"",	"x",	"",	"",	50,	41,	0,	1,	6,	4,	5,	2,	0,	17,	4,	50,	10,	24,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1124,	64,	"Gary Sutter",	0,	7,	0.37,	"",	"",	"",	"",	"",	"",	"",	45,	47,	0,	0,	4,	9,	4,	1,	0,	16,	4,	52,	10,	24,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1125,	64,	"David Knowles",	4,	8,	0.31,	"",	"x",	"",	"",	"",	"",	"",	42,	47,	0,	1,	6,	4,	7,	0,	0,	17,	4,	50,	10,	22,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1126,	64,	"Eric Heberle",	0,	9,	0.25,	"",	"x",	"",	"",	"",	"",	"",	45,	50,	0,	1,	5,	4,	4,	4,	0,	14,	4,	54,	10,	27,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1127,	64,	"Merrill Wheeler",	0,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	0,	4,	6,	6,	2,	0,	18,	4,	52,	10,	26,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1128,	64,	"Graydon Spanner",	0,	11,	0.12,	"",	"",	"x",	"",	"",	"",	"",	49,	51,	0,	0,	3,	9,	2,	3,	1,	15,	4,	59,	10,	26,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1129,	64,	"Joshua Treadway",	9,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	1,	3,	6,	8,	0,	0,	15,	4,	52,	10,	26,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1130,	64,	"Justin Scribner",	8,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	45,	49,	0,	1,	6,	5,	2,	3,	1,	13,	4,	55,	10,	26,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1131,	64,	"Jason Smelser",	0,	12,	0.05,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	0,	7,	10,	1,	0,	20,	4,	57,	10,	25,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1132,	64,	"Jason Strickland",	2,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	53,	48,	0,	0,	2,	8,	4,	3,	1,	18,	4,	56,	10,	27,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1133,	64,	"Steve Friday",	1,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	3,	4,	6,	5,	0,	17,	4,	58,	10,	28,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1134,	64,	"Justin Kudela",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	56,	48,	0,	0,	2,	8,	4,	2,	2,	16,	4,	62,	10,	26,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1135,	64,	"Scott Hall",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	51,	53,	0,	0,	2,	8,	3,	4,	1,	17,	4,	57,	10,	30,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1136,	64,	"Patrick Affourtit",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	54,	51,	0,	0,	3,	3,	8,	2,	2,	13,	4,	62,	10,	30,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1137,	64,	"Seth Wehner",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	55,	53,	0,	0,	1,	7,	5,	2,	3,	15,	4,	65,	10,	28,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1138,	64,	"Mike Galvin",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	56,	54,	0,	0,	1,	6,	5,	3,	3,	22,	4,	61,	10,	27,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		[	1139,	64,	"Jeff Gilligan",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"x",	65,	59,	0,	0,	1,	1,	5,	7,	4,	19,	4,	74,	10,	31,	4,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23,	],
		
		[	1140,	65,	"Connor Mazza",	9,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	38,	39,	0,	2,	9,	6,	1,	0,	0,	13,	4,	49,	11,	15,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1141,	65,	"Jason Strickland",	1,	1,	1.35,	"W",	"",	"",	"",	"",	"",	"",	39,	43,	0,	1,	8,	6,	3,	0,	0,	11,	4,	54,	11,	17,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1142,	65,	"Nick Johnston",	3,	2,	0.9,	"L",	"",	"",	"",	"",	"",	"",	40,	40,	0,	0,	11,	5,	2,	0,	0,	12,	4,	53,	11,	15,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1143,	65,	"David Knowles",	2,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	0,	5,	12,	1,	0,	0,	16,	4,	51,	11,	18,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1144,	65,	"Jay Sutter",	3,	4,	0.68,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	0,	10,	4,	2,	2,	0,	13,	4,	53,	11,	19,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1145,	65,	"Ben Reeb",	6,	5,	0.6,	"",	"",	"",	"",	"",	"",	"",	41,	43,	0,	1,	7,	7,	2,	1,	0,	15,	4,	53,	11,	16,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1146,	65,	"Justin Scribner",	8,	6,	0.49,	"",	"",	"",	"",	"",	"x",	"",	43,	40,	0,	1,	8,	5,	4,	0,	0,	13,	4,	54,	11,	16,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1147,	65,	"Steve Sillato",	8,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	44,	39,	0,	2,	7,	6,	2,	0,	1,	14,	4,	55,	11,	14,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1148,	65,	"Tim Collins",	0,	8,	0.38,	"",	"",	"",	"",	"",	"",	"",	46,	46,	0,	0,	3,	10,	4,	1,	0,	17,	4,	58,	11,	17,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1149,	65,	"Matt Keller",	7,	9,	0.26,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	0,	7,	8,	2,	1,	0,	13,	4,	57,	11,	16,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1150,	65,	"Steven Baybutt",	2,	9,	0.26,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	5,	7,	5,	1,	0,	17,	4,	54,	11,	20,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1151,	65,	"Matt Bigelow",	0,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	0,	3,	8,	5,	2,	0,	21,	4,	57,	11,	17,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1152,	65,	"Jason Smelser",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	1,	5,	5,	2,	3,	2,	18,	4,	61,	11,	17,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1153,	65,	"Brian Zimmerschied",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	46,	51,	0,	0,	3,	6,	7,	2,	0,	18,	4,	59,	11,	20,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1154,	65,	"Joe Milacek",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	51,	46,	1,	1,	1,	6,	5,	3,	1,	18,	4,	62,	11,	17,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1155,	65,	"Doug Short",	4,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	51,	43,	0,	0,	3,	9,	4,	2,	0,	17,	4,	56,	11,	21,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1156,	65,	"Gary Sutter",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	46,	52,	0,	0,	3,	6,	7,	1,	1,	18,	4,	62,	11,	18,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1157,	65,	"Scott Hall",	0,	17,	0,	"",	"",	"x",	"",	"",	"",	"",	50,	49,	0,	0,	1,	9,	5,	3,	0,	18,	4,	63,	11,	18,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1158,	65,	"Matt Arrasmith",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	48,	52,	0,	0,	3,	4,	8,	3,	0,	18,	4,	61,	11,	21,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1159,	65,	"Chris Roebuck",	5,	19,	0,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	0,	1,	12,	3,	1,	1,	18,	4,	58,	11,	20,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1160,	65,	"Eric Heberle",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	46,	55,	0,	0,	4,	4,	6,	2,	2,	16,	4,	67,	11,	18,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1161,	65,	"Doug Dickenson",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	49,	53,	0,	0,	2,	4,	10,	1,	1,	18,	4,	62,	11,	22,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1162,	65,	"Robert McArthur",	6,	22,	0,	"",	"",	"",	"",	"x",	"",	"",	50,	47,	0,	1,	3,	7,	3,	3,	1,	17,	4,	63,	11,	17,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1163,	65,	"Steven Merrill",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	52,	51,	0,	0,	4,	3,	6,	3,	2,	14,	4,	71,	11,	18,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1164,	65,	"Tim Koruna",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	54,	49,	0,	0,	1,	8,	4,	4,	1,	21,	4,	61,	11,	21,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1165,	65,	"Mathew Mayo",	2,	25,	0,	"",	"",	"",	"",	"",	"",	"",	46,	56,	0,	0,	2,	6,	7,	2,	1,	17,	4,	61,	11,	24,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1166,	65,	"Justin Duffie",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	54,	53,	0,	0,	3,	7,	2,	3,	3,	15,	4,	68,	11,	24,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1167,	65,	"Luke Maurer",	1,	27,	0,	"",	"x",	"",	"",	"",	"",	"",	49,	61,	0,	0,	1,	4,	7,	4,	2,	19,	4,	70,	11,	21,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1168,	65,	"Justin Kudela",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	53,	61,	0,	0,	0,	5,	6,	3,	4,	22,	4,	70,	11,	22,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1169,	65,	"Joe Faga",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	58,	58,	0,	0,	0,	4,	6,	3,	5,	20,	4,	71,	11,	25,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1170,	65,	"Patrick Affourtit",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	56,	60,	0,	0,	1,	3,	6,	5,	3,	20,	4,	72,	11,	24,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1171,	65,	"Dustin Schmidt",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	58,	59,	0,	0,	2,	4,	4,	4,	4,	17,	4,	74,	11,	26,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1172,	65,	"Jeff Gilligan",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	58,	62,	0,	0,	1,	1,	7,	4,	5,	18,	4,	77,	11,	25,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		[	1173,	65,	"David Korzan",	1,	33,	0,	"",	"",	"",	"",	"",	"",	"x",	63,	60,	0,	0,	2,	1,	4,	6,	5,	17,	4,	81,	11,	25,	3,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34,	],
		
		[	1174,	66,	"Connor Mazza",	8,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	38,	38,	0,	2,	10,	6,	0,	0,	0,	14,	4,	40,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1175,	66,	"Ben Reeb",	6,	0,	0,	"",	"",	"",	"",	"",	"",	"",	37,	42,	0,	1,	11,	5,	0,	1,	0,	13,	4,	46,	10,	20,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1176,	66,	"Matt Bigelow",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	38,	42,	0,	1,	10,	5,	2,	0,	0,	13,	4,	47,	10,	20,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1177,	66,	"David Knowles",	1,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	41,	39,	0,	0,	11,	6,	1,	0,	0,	14,	4,	46,	10,	20,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1178,	66,	"Robert McArthur",	6,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	38,	43,	0,	3,	7,	6,	1,	0,	1,	13,	4,	48,	10,	20,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1179,	66,	"Tim Collins",	0,	3,	0.71,	"",	"",	"",	"",	"",	"",	"",	42,	45,	0,	2,	7,	3,	4,	2,	0,	11,	4,	55,	10,	21,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1180,	66,	"Steve Sillato",	8,	5,	0.49,	"",	"",	"",	"",	"",	"",	"",	40,	41,	0,	1,	9,	7,	0,	1,	0,	13,	4,	46,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1181,	66,	"Anthony Cable",	6,	5,	0.49,	"",	"",	"",	"",	"x",	"",	"",	41,	42,	0,	1,	6,	10,	1,	0,	0,	15,	4,	45,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1182,	66,	"Brad Schimmoeller",	1,	5,	0.49,	"",	"",	"",	"",	"",	"",	"",	47,	41,	0,	0,	8,	6,	2,	2,	0,	14,	4,	49,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1183,	66,	"Jason Smelser",	0,	5,	0.49,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	5,	10,	2,	1,	0,	14,	4,	49,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1184,	66,	"Arun RajanBabu",	0,	9,	0.3,	"",	"",	"",	"",	"",	"",	"",	44,	47,	0,	1,	5,	7,	2,	3,	0,	14,	4,	51,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1185,	66,	"Steven Baybutt",	2,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	43,	49,	0,	0,	6,	6,	5,	0,	1,	17,	4,	50,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1186,	66,	"Joe Milacek",	0,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	45,	49,	0,	1,	5,	4,	6,	1,	1,	14,	4,	52,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1187,	66,	"Jason Strickland",	4,	12,	0.08,	"",	"",	"",	"",	"",	"x",	"",	46,	48,	0,	1,	5,	4,	5,	3,	0,	12,	4,	57,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1188,	66,	"Mathew Mayo",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	51,	51,	0,	0,	2,	4,	10,	2,	0,	17,	4,	61,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1189,	66,	"Steven Merrill",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	44,	58,	0,	1,	2,	7,	3,	3,	2,	21,	4,	59,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1190,	66,	"Brett Ewing",	2,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	48,	53,	0,	1,	1,	6,	7,	2,	1,	18,	4,	58,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1191,	66,	"Chad King",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	55,	48,	0,	0,	3,	6,	4,	3,	2,	17,	4,	59,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1192,	66,	"Justin Scribner",	8,	17,	0,	"",	"",	"x",	"",	"",	"",	"",	49,	47,	0,	0,	1,	12,	4,	0,	1,	17,	4,	55,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1193,	66,	"Fred Miller",	7,	18,	0,	"",	"",	"",	"",	"",	"",	"",	47,	51,	0,	0,	5,	5,	5,	2,	1,	17,	4,	50,	10,	31,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1194,	66,	"Eric Heberle",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	49,	56,	0,	0,	0,	7,	7,	4,	0,	18,	4,	57,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1195,	66,	"Doug Short",	4,	20,	0,	"",	"",	"",	"",	"",	"",	"",	51,	53,	0,	0,	2,	6,	7,	1,	2,	16,	4,	60,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1196,	66,	"Jay Patel",	2,	21,	0,	"",	"",	"",	"",	"",	"",	"",	52,	57,	0,	0,	2,	5,	4,	4,	3,	20,	4,	61,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1197,	66,	"Steve Friday",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	54,	57,	0,	0,	2,	7,	3,	1,	5,	22,	4,	59,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1198,	66,	"Justin Kudela",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	55,	60,	0,	0,	2,	4,	6,	1,	5,	15,	4,	69,	10,	31,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1199,	66,	"Jeff Gilligan",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	53,	63,	0,	0,	1,	5,	4,	4,	4,	17,	4,	64,	10,	35,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1200,	66,	"Patrick Affourtit",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	54,	62,	0,	0,	0,	3,	8,	3,	4,	21,	4,	64,	10,	31,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1201,	66,	"Joe Faga",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	54,	63,	0,	0,	0,	5,	6,	3,	4,	21,	4,	62,	10,	34,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1202,	66,	"Dustin Schmidt",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	56,	67,	0,	0,	0,	3,	7,	2,	6,	21,	4,	71,	10,	31,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1203,	66,	"Tim Koruna",	0,	28,	0,	"",	"x",	"",	"",	"",	"",	"",	55,	75,	0,	0,	1,	4,	2,	5,	6,	26,	4,	69,	10,	35,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		[	1204,	66,	"Justin Duffie",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"x",	66,	66,	0,	0,	1,	4,	1,	4,	8,	24,	4,	70,	10,	38,	4,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31,	],
		
		[	1205,	67,	"David Knowles",	4,	1,	1.12,	"",	"",	"",	"x",	"",	"",	"",	38,	42,	0,	1,	9,	7,	1,	0,	0,	14,	4,	46,	10,	20,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1206,	67,	"Tim Collins",	0,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	1,	7,	7,	2,	1,	0,	15,	4,	48,	10,	22,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1207,	67,	"Steven Baybutt",	2,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	42,	42,	0,	1,	8,	6,	2,	1,	0,	16,	4,	47,	10,	21,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1208,	67,	"Graydon Spanner",	0,	4,	0.56,	"",	"",	"",	"",	"",	"",	"",	42,	46,	0,	1,	5,	9,	1,	2,	0,	15,	4,	49,	10,	24,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1209,	67,	"Jason Strickland",	4,	5,	0.47,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	0,	7,	7,	4,	0,	0,	17,	4,	48,	10,	22,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1210,	67,	"Matt Bigelow",	2,	5,	0.47,	"",	"",	"",	"",	"",	"",	"",	40,	49,	0,	2,	6,	6,	1,	1,	2,	13,	4,	51,	10,	25,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1211,	67,	"Robert McArthur",	6,	7,	0.37,	"",	"",	"",	"",	"",	"x",	"",	40,	46,	0,	2,	4,	10,	0,	2,	0,	12,	4,	50,	10,	24,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1212,	67,	"Ben Reeb",	7,	8,	0.28,	"",	"",	"",	"",	"",	"",	"",	44,	42,	0,	0,	8,	6,	4,	0,	0,	15,	4,	47,	10,	24,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1213,	67,	"Matt Keller",	7,	8,	0.28,	"",	"",	"x",	"",	"x",	"",	"",	43,	43,	1,	1,	4,	7,	5,	0,	0,	16,	4,	46,	10,	24,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1214,	67,	"Jay Sutter",	3,	10,	0.16,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	10,	4,	0,	3,	1,	13,	4,	51,	10,	28,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1215,	67,	"Brett Ewing",	0,	10,	0.16,	"",	"",	"",	"",	"",	"",	"",	45,	50,	0,	0,	5,	6,	5,	1,	1,	17,	4,	50,	10,	28,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1216,	67,	"Jason Smelser",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	0,	3,	9,	4,	1,	1,	17,	4,	55,	10,	24,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1217,	67,	"Steve Friday",	0,	12,	0.06,	"",	"",	"",	"",	"",	"",	"",	46,	50,	0,	0,	4,	8,	3,	2,	1,	14,	4,	54,	10,	28,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1218,	67,	"John Young",	7,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	39,	54,	0,	1,	9,	6,	1,	0,	1,	13,	4,	58,	10,	22,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1219,	67,	"Justin Kudela",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	47,	53,	0,	0,	3,	4,	10,	0,	1,	19,	4,	58,	10,	23,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1220,	67,	"Gary Sutter",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	52,	49,	0,	0,	2,	8,	5,	2,	1,	19,	4,	57,	10,	25,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1221,	67,	"Justin Scribner",	8,	17,	0,	"",	"",	"",	"",	"",	"",	"",	44,	51,	0,	0,	5,	6,	5,	1,	1,	16,	4,	52,	10,	27,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1222,	67,	"Corinne Bigelow",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	49,	55,	0,	0,	0,	11,	1,	5,	1,	19,	4,	55,	10,	30,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1223,	67,	"Eric Heberle",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	3,	4,	5,	4,	2,	16,	4,	56,	10,	34,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1224,	67,	"Patrick Affourtit",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	53,	59,	0,	0,	1,	3,	7,	5,	2,	17,	4,	66,	10,	29,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1225,	67,	"Fred Miller",	6,	21,	0,	"",	"",	"",	"",	"",	"",	"",	53,	55,	0,	0,	1,	8,	5,	1,	3,	16,	4,	59,	10,	33,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1226,	67,	"Joe Faga",	0,	22,	0,	"",	"x",	"",	"",	"",	"",	"",	51,	67,	0,	0,	0,	4,	9,	2,	3,	19,	4,	64,	10,	35,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1227,	67,	"Justin Duffie",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	63,	58,	0,	0,	1,	5,	3,	4,	5,	22,	4,	65,	10,	34,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		[	1228,	67,	"Jeff Gilligan",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"x",	61,	65,	0,	0,	1,	4,	3,	5,	5,	18,	4,	69,	10,	39,	4,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24,	],
		
		[	1229,	68,	"Todd Hamilton",	4,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	42,	37,	1,	2,	7,	5,	3,	0,	0,	19,	5,	39,	8,	21,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1230,	68,	"Matt Keller",	7,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	40,	40,	0,	3,	7,	5,	3,	0,	0,	18,	5,	36,	8,	26,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1231,	68,	"Joe Milacek",	0,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	41,	47,	0,	1,	9,	5,	0,	0,	3,	24,	5,	36,	8,	28,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1232,	68,	"Robert McArthur",	6,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	42,	41,	0,	0,	8,	9,	1,	0,	0,	19,	5,	37,	8,	27,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1233,	68,	"Brad Schimmoeller",	1,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	4,	11,	3,	0,	0,	20,	5,	40,	8,	29,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1234,	68,	"Steve Sillato",	8,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	40,	43,	0,	2,	5,	10,	0,	1,	0,	19,	5,	35,	8,	29,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1235,	68,	"Tim Collins",	3,	6,	0.46,	"",	"",	"",	"",	"",	"",	"",	43,	47,	0,	0,	6,	7,	4,	1,	0,	20,	5,	42,	8,	28,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1236,	68,	"Mathew Mayo",	0,	6,	0.46,	"",	"",	"",	"",	"x",	"",	"",	48,	45,	0,	0,	4,	8,	5,	1,	0,	21,	5,	43,	8,	29,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1237,	68,	"Jason Strickland",	5,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	2,	4,	6,	5,	1,	0,	18,	5,	39,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1238,	68,	"Justin Scribner",	6,	9,	0.28,	"",	"",	"",	"",	"",	"",	"",	43,	46,	0,	0,	7,	6,	4,	1,	0,	20,	5,	40,	8,	29,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1239,	68,	"Jay Sutter",	3,	10,	0.21,	"",	"",	"",	"",	"",	"x",	"",	44,	49,	0,	1,	3,	9,	3,	1,	1,	23,	5,	38,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1240,	68,	"Nick Johnston",	5,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	44,	49,	0,	0,	6,	7,	3,	1,	1,	23,	5,	42,	8,	28,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1241,	68,	"Gary Sutter",	0,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	45,	53,	0,	0,	5,	3,	7,	3,	0,	22,	5,	44,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1242,	68,	"Graydon Spanner",	0,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	47,	51,	0,	0,	3,	7,	5,	3,	0,	21,	5,	47,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1243,	68,	"Jason Smelser",	0,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	50,	48,	0,	2,	2,	3,	8,	3,	0,	20,	5,	46,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1244,	68,	"David Knowles",	7,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	45,	47,	0,	0,	4,	8,	6,	0,	0,	20,	5,	42,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1245,	68,	"Justin Duffie",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	52,	47,	0,	1,	2,	4,	9,	2,	0,	22,	5,	44,	8,	33,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1246,	68,	"Brian Zimmerschied",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	48,	51,	0,	0,	4,	4,	7,	3,	0,	18,	5,	47,	8,	34,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1247,	68,	"Corinne Bigelow",	0,	18,	0,	"",	"",	"x",	"",	"",	"",	"",	52,	48,	0,	1,	3,	3,	7,	4,	0,	23,	5,	46,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1248,	68,	"Brett Ewing",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	46,	54,	0,	1,	1,	7,	5,	4,	0,	21,	5,	48,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1249,	68,	"Connor Mazza",	10,	20,	0,	"",	"",	"",	"",	"",	"",	"",	44,	47,	0,	1,	6,	8,	1,	1,	1,	26,	5,	40,	8,	25,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1250,	68,	"Steven Merrill",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	46,	55,	0,	1,	2,	6,	5,	2,	2,	23,	5,	44,	8,	34,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1251,	68,	"Elliot Mork",	5,	22,	0,	"",	"",	"",	"",	"",	"",	"",	43,	54,	0,	0,	5,	5,	5,	2,	1,	23,	5,	44,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1252,	68,	"Justin Kudela",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	48,	54,	0,	0,	3,	4,	7,	4,	0,	19,	5,	48,	8,	35,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1253,	68,	"Brent Huddleston",	10,	24,	0,	"",	"",	"",	"",	"",	"",	"",	41,	52,	0,	1,	3,	9,	3,	1,	1,	24,	5,	37,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1254,	68,	"Matt Arrasmith",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	51,	52,	0,	0,	2,	7,	4,	4,	1,	21,	5,	49,	8,	33,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1255,	68,	"Matt Bigelow",	3,	26,	0,	"",	"",	"",	"",	"",	"",	"",	48,	53,	0,	1,	4,	4,	5,	1,	3,	22,	5,	46,	8,	33,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1256,	68,	"Chris Pike",	4,	26,	0,	"",	"",	"",	"",	"",	"",	"",	47,	53,	0,	0,	3,	5,	8,	1,	1,	26,	5,	39,	8,	35,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1257,	68,	"Sundar Digumarthy",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	50,	54,	0,	0,	1,	6,	7,	4,	0,	24,	5,	46,	8,	34,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1258,	68,	"Patrick Affourtit",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	52,	53,	0,	0,	2,	4,	8,	3,	1,	24,	5,	45,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1259,	68,	"Nick Poe",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	53,	56,	0,	0,	0,	5,	9,	3,	1,	25,	5,	46,	8,	38,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1260,	68,	"Joe Faga",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	57,	60,	0,	0,	0,	5,	2,	8,	3,	26,	5,	53,	8,	38,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1261,	68,	"Jay Patel",	1,	32,	0,	"",	"",	"",	"",	"",	"",	"",	59,	59,	0,	0,	0,	2,	8,	6,	2,	25,	5,	57,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1262,	68,	"Jason Tolman",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	64,	62,	0,	0,	1,	1,	3,	7,	6,	27,	5,	56,	8,	43,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		[	1263,	68,	"Jeff Gilligan",	0,	34,	0,	"",	"x",	"",	"",	"",	"",	"x",	66,	89,	0,	0,	0,	0,	3,	5,	10,	35,	5,	73,	8,	47,	5,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35,	],
		
		[	1264,	69,	"David Knowles",	7,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	37,	35,	0,	2,	14,	2,	0,	0,	0,	12,	4,	40,	10,	20,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1265,	69,	"Ben Reeb",	7,	0,	0,	"",	"",	"",	"",	"",	"x",	"",	38,	40,	0,	2,	10,	4,	2,	0,	0,	12,	4,	44,	10,	22,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1266,	69,	"Brad Schimmoeller",	1,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	42,	39,	0,	1,	10,	4,	3,	0,	0,	13,	4,	45,	10,	23,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1267,	69,	"Steven Baybutt",	4,	2,	0.77,	"",	"",	"",	"",	"",	"",	"",	41,	39,	0,	2,	7,	8,	1,	0,	0,	14,	4,	45,	10,	21,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1268,	69,	"Joe Milacek",	1,	2,	0.77,	"",	"",	"",	"",	"",	"",	"",	42,	41,	0,	0,	10,	5,	3,	0,	0,	14,	4,	47,	10,	22,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1269,	69,	"Anthony Cable",	5,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	39,	43,	0,	1,	7,	9,	1,	0,	0,	14,	4,	44,	10,	24,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1270,	69,	"Steve Sillato",	8,	5,	0.56,	"",	"",	"",	"",	"",	"",	"",	42,	38,	0,	3,	8,	3,	4,	0,	0,	12,	4,	43,	10,	25,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1271,	69,	"Doug Short",	4,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	0,	7,	9,	2,	0,	0,	14,	4,	48,	10,	23,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1272,	69,	"Jason Strickland",	5,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	44,	42,	0,	0,	9,	6,	2,	0,	1,	14,	4,	45,	10,	27,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1273,	69,	"Jason Smelser",	0,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	0,	4,	9,	5,	0,	0,	16,	4,	49,	10,	26,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1274,	69,	"Robert McArthur",	6,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	45,	41,	0,	0,	5,	12,	1,	0,	0,	15,	4,	48,	10,	23,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1275,	69,	"Mathew Mayo",	0,	9,	0.25,	"",	"",	"",	"",	"",	"",	"",	48,	44,	0,	0,	5,	7,	5,	1,	0,	15,	4,	54,	10,	23,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1276,	69,	"Justin Scribner",	6,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	40,	47,	0,	2,	5,	7,	2,	2,	0,	14,	4,	47,	10,	26,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1277,	69,	"Todd Hamilton",	6,	12,	0.07,	"",	"",	"",	"",	"x",	"",	"",	46,	46,	0,	0,	6,	7,	2,	3,	0,	18,	4,	50,	10,	24,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1278,	69,	"Matt Bigelow",	3,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	42,	54,	0,	0,	5,	7,	5,	0,	1,	14,	4,	56,	10,	26,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1279,	69,	"Brett Ewing",	0,	14,	0.04,	"",	"",	"x",	"",	"",	"",	"",	47,	53,	0,	0,	2,	10,	3,	1,	2,	17,	4,	58,	10,	25,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1280,	69,	"Paul Miller",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	50,	50,	0,	0,	4,	5,	5,	3,	1,	15,	4,	57,	10,	28,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1281,	69,	"Brent Huddleston",	9,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	47,	45,	0,	0,	5,	8,	4,	0,	1,	15,	4,	53,	10,	24,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1282,	69,	"Elliot Mork",	4,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	45,	52,	0,	0,	4,	8,	3,	1,	2,	16,	4,	54,	10,	27,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1283,	69,	"Chris Pike",	3,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	3,	6,	7,	2,	0,	18,	4,	52,	10,	28,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1284,	69,	"Justin Kudela",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	45,	57,	0,	0,	2,	9,	3,	3,	1,	18,	4,	59,	10,	25,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1285,	69,	"Patrick Affourtit",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	1,	6,	9,	1,	1,	20,	4,	55,	10,	28,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1286,	69,	"Steve Friday",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	49,	54,	0,	0,	4,	5,	3,	4,	2,	16,	4,	61,	10,	26,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1287,	69,	"Fred Miller",	6,	22,	0,	"",	"",	"",	"",	"",	"",	"",	46,	52,	0,	0,	4,	8,	1,	4,	1,	18,	4,	52,	10,	28,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1288,	69,	"Steven Merrill",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	49,	56,	0,	0,	1,	6,	6,	5,	0,	17,	4,	62,	10,	26,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1289,	69,	"Matt Arrasmith",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	52,	56,	0,	0,	3,	3,	6,	3,	3,	15,	4,	63,	10,	30,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1290,	69,	"Corinne Bigelow",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	54,	57,	0,	0,	3,	1,	6,	6,	2,	17,	4,	61,	10,	33,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1291,	69,	"Luke Maurer",	1,	26,	0,	"",	"x",	"",	"",	"",	"",	"",	47,	65,	0,	0,	3,	4,	6,	2,	3,	19,	4,	61,	10,	32,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1292,	69,	"Jason Tolman",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	57,	58,	0,	0,	0,	5,	6,	5,	2,	23,	4,	64,	10,	28,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		[	1293,	69,	"Jeff Gilligan",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"x",	61,	72,	0,	0,	1,	2,	3,	5,	7,	20,	4,	77,	10,	36,	4,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30,	],
		
		[	1294,	70,	"Jason Smelser",	0,	1,	1.71,	"",	"",	"",	"",	"",	"",	"",	42,	46,	0,	0,	7,	8,	1,	2,	0,	15,	4,	49,	10,	24,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1295,	70,	"Anthony Cable",	6,	2,	1.14,	"",	"",	"",	"",	"",	"",	"",	42,	41,	0,	0,	10,	6,	1,	1,	0,	14,	4,	47,	10,	22,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1296,	70,	"Connor Mazza",	10,	3,	0.9,	"",	"",	"",	"x",	"x",	"",	"",	38,	42,	0,	1,	10,	5,	2,	0,	0,	13,	4,	47,	10,	20,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1297,	70,	"Matt Bigelow",	3,	3,	0.9,	"",	"",	"",	"",	"",	"",	"",	41,	46,	0,	0,	9,	6,	1,	1,	1,	13,	4,	51,	10,	23,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1298,	70,	"Ben Reeb",	8,	5,	0.71,	"",	"",	"",	"",	"",	"",	"",	41,	42,	0,	0,	11,	5,	1,	0,	1,	14,	4,	43,	10,	26,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1299,	70,	"Doug Short",	4,	5,	0.71,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	0,	6,	9,	3,	0,	0,	16,	4,	50,	10,	21,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1300,	70,	"Steve Sillato",	9,	7,	0.57,	"",	"",	"",	"",	"",	"",	"",	41,	43,	0,	0,	9,	7,	1,	1,	0,	14,	4,	46,	10,	24,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1301,	70,	"Jason Strickland",	4,	8,	0.48,	"",	"",	"",	"",	"",	"",	"",	47,	43,	0,	1,	3,	11,	2,	0,	1,	14,	4,	53,	10,	23,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1302,	70,	"Elliot Mork",	4,	9,	0.38,	"",	"",	"",	"",	"",	"x",	"",	46,	45,	1,	1,	3,	6,	5,	2,	0,	14,	4,	50,	10,	27,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1303,	70,	"Justin Scribner",	4,	10,	0.29,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	5,	7,	5,	1,	0,	15,	4,	52,	10,	25,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1304,	70,	"Tim Collins",	3,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	4,	8,	3,	3,	0,	18,	4,	53,	10,	24,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1305,	70,	"Graydon Spanner",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	4,	8,	1,	4,	1,	22,	4,	49,	10,	27,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1306,	70,	"Brad Schimmoeller",	3,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	1,	4,	4,	5,	4,	0,	20,	4,	56,	10,	21,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1307,	70,	"Steven Baybutt",	7,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	45,	48,	0,	1,	4,	8,	2,	2,	1,	15,	4,	53,	10,	25,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1308,	70,	"Jay Sutter",	3,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	4,	6,	5,	3,	0,	20,	4,	54,	10,	23,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1309,	70,	"Robert McArthur",	6,	16,	0.03,	"",	"x",	"",	"",	"",	"",	"",	44,	51,	0,	0,	5,	8,	1,	3,	1,	16,	4,	55,	10,	24,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1310,	70,	"Robby Thompson",	0,	16,	0.03,	"",	"",	"x",	"",	"",	"",	"",	50,	51,	0,	1,	1,	6,	8,	0,	2,	18,	4,	57,	10,	26,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1311,	70,	"Sundar Digumarthy",	0,	16,	0.03,	"",	"",	"",	"",	"",	"",	"",	49,	52,	0,	0,	2,	5,	9,	2,	0,	20,	4,	57,	10,	24,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1312,	70,	"Seth Wehner",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	53,	49,	0,	2,	1,	5,	4,	5,	1,	16,	4,	55,	10,	31,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1313,	70,	"Patrick Affourtit",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	51,	52,	0,	0,	1,	7,	7,	2,	1,	17,	4,	59,	10,	27,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1314,	70,	"Mathew Mayo",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	54,	51,	0,	0,	2,	9,	1,	3,	3,	15,	4,	64,	10,	26,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1315,	70,	"Steven Merrill",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	58,	47,	0,	0,	2,	6,	5,	3,	2,	17,	4,	58,	10,	30,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1316,	70,	"Matt Keller",	8,	23,	0,	"",	"",	"",	"",	"",	"",	"",	54,	44,	0,	0,	4,	6,	6,	1,	1,	22,	4,	50,	10,	26,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1317,	70,	"Joe Milacek",	2,	23,	0,	"",	"",	"",	"",	"",	"",	"",	56,	48,	0,	1,	1,	7,	4,	3,	2,	18,	4,	58,	10,	28,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1318,	70,	"Chris Pike",	3,	25,	0,	"",	"",	"",	"",	"",	"",	"",	57,	47,	0,	1,	3,	6,	3,	1,	4,	15,	4,	66,	10,	23,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1319,	70,	"Matt Arrasmith",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	55,	53,	0,	0,	2,	5,	4,	5,	2,	16,	4,	62,	10,	30,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1320,	70,	"Brent Huddleston",	9,	27,	0,	"",	"",	"",	"",	"",	"",	"",	51,	51,	0,	0,	2,	7,	4,	5,	0,	18,	4,	59,	10,	25,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1321,	70,	"Gary Sutter",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	57,	55,	0,	0,	3,	2,	7,	2,	4,	21,	4,	62,	10,	29,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1322,	70,	"Brett Ewing",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	58,	55,	0,	0,	1,	6,	4,	2,	5,	19,	4,	58,	10,	36,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1323,	70,	"Paul Miller",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	57,	56,	0,	0,	3,	4,	4,	2,	5,	15,	4,	61,	10,	37,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1324,	70,	"Joe Faga",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	63,	57,	0,	0,	1,	1,	8,	4,	4,	18,	4,	71,	10,	31,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1325,	70,	"Corinne Bigelow",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	61,	60,	0,	0,	2,	2,	4,	5,	5,	16,	4,	70,	10,	35,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1326,	70,	"Jeff Gilligan",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	61,	63,	0,	0,	1,	3,	5,	3,	6,	17,	4,	72,	10,	35,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1327,	70,	"Jay Patel",	1,	33,	0,	"",	"",	"",	"",	"",	"",	"",	62,	61,	0,	0,	0,	6,	4,	0,	8,	22,	4,	69,	10,	32,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1328,	70,	"Eric Heberle",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"x",	66,	62,	0,	0,	2,	2,	2,	5,	7,	19,	4,	70,	10,	39,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		[	1329,	70,	"Justin Duffie",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"x",	63,	65,	0,	0,	1,	3,	4,	3,	7,	19,	4,	72,	10,	37,	4,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36,	],
		
		[	1330,	71,	"Jay Sutter",	3,	0,	0,	"",	"",	"",	"",	"",	"",	"",	39,	39,	0,	0,	11,	7,	0,	0,	0,	17,	5,	40,	9,	21,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1331,	71,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"",	"x",	"",	38,	39,	0,	1,	11,	5,	1,	0,	0,	18,	5,	40,	9,	19,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1332,	71,	"Jason Smelser",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	45,	41,	0,	1,	5,	9,	2,	1,	0,	20,	5,	43,	9,	23,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1333,	71,	"Brad Schimmoeller",	3,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	43,	41,	0,	0,	7,	9,	2,	0,	0,	19,	5,	44,	9,	21,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1334,	71,	"Joe Milacek",	2,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	1,	3,	11,	3,	0,	0,	18,	5,	45,	9,	24,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1335,	71,	"Eric Heberle",	0,	4,	0.64,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	0,	7,	6,	3,	1,	1,	19,	5,	48,	9,	23,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1336,	71,	"Doug Short",	4,	4,	0.64,	"",	"",	"",	"",	"x",	"",	"",	46,	40,	0,	0,	9,	5,	2,	2,	0,	17,	5,	48,	9,	21,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1337,	71,	"Steven Baybutt",	7,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	43,	41,	0,	0,	9,	5,	4,	0,	0,	19,	5,	41,	9,	24,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1338,	71,	"Jason Strickland",	4,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	44,	43,	0,	1,	6,	6,	4,	1,	0,	19,	5,	45,	9,	23,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1339,	71,	"Justin Scribner",	4,	8,	0.34,	"",	"x",	"",	"",	"",	"",	"",	40,	48,	0,	0,	8,	6,	1,	3,	0,	19,	5,	42,	9,	27,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1340,	71,	"Matt Bigelow",	4,	8,	0.34,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	1,	5,	8,	2,	2,	0,	21,	5,	44,	9,	23,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1341,	71,	"Ben Reeb",	8,	10,	0.23,	"",	"",	"",	"",	"",	"",	"",	46,	39,	0,	0,	9,	6,	1,	2,	0,	18,	5,	43,	9,	24,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1342,	71,	"David Knowles",	11,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	41,	42,	0,	0,	8,	8,	2,	0,	0,	18,	5,	43,	9,	22,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1343,	71,	"Steve Sillato",	8,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	45,	41,	0,	0,	6,	10,	1,	1,	0,	20,	5,	41,	9,	25,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1344,	71,	"Todd Hamilton",	6,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	48,	41,	0,	1,	5,	7,	3,	2,	0,	21,	5,	44,	9,	24,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1345,	71,	"Gary Sutter",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	49,	48,	0,	0,	2,	10,	3,	2,	1,	20,	5,	48,	9,	29,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1346,	71,	"Brent Huddleston",	9,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	9,	3,	5,	0,	1,	19,	5,	46,	9,	24,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1347,	71,	"Graydon Spanner",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	2,	10,	1,	5,	0,	23,	5,	49,	9,	26,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1348,	71,	"Mathew Mayo",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	46,	52,	0,	1,	1,	7,	6,	3,	0,	21,	5,	48,	9,	29,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1349,	71,	"Fred Miller",	4,	18,	0,	"",	"",	"x",	"",	"",	"",	"",	47,	49,	0,	0,	6,	4,	6,	1,	1,	21,	5,	50,	9,	25,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1350,	71,	"Chris Pike",	2,	19,	0,	"",	"",	"",	"",	"",	"",	"",	50,	49,	0,	0,	1,	8,	7,	2,	0,	22,	5,	51,	9,	26,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1351,	71,	"Sundar Digumarthy",	0,	20,	0,	"",	"x",	"",	"",	"",	"",	"",	47,	55,	0,	0,	3,	5,	5,	4,	1,	23,	5,	52,	9,	27,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1352,	71,	"Paul Miller",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	51,	52,	0,	0,	3,	3,	7,	5,	0,	29,	5,	46,	9,	28,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1353,	71,	"Justin Kudela",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	54,	50,	0,	0,	2,	4,	8,	3,	1,	24,	5,	54,	9,	26,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1354,	71,	"Matt Arrasmith",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	51,	54,	0,	0,	1,	6,	6,	4,	1,	22,	5,	56,	9,	27,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1355,	71,	"Patrick Affourtit",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	2,	3,	7,	5,	1,	25,	5,	56,	9,	26,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1356,	71,	"Robby Thompson",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	54,	54,	0,	0,	1,	7,	3,	5,	2,	22,	5,	54,	9,	32,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1357,	71,	"Joe Faga",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	59,	52,	0,	0,	2,	2,	6,	6,	2,	24,	5,	56,	9,	31,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1358,	71,	"Nick Poe",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	57,	56,	0,	0,	0,	3,	10,	2,	3,	25,	5,	59,	9,	29,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1359,	71,	"Corinne Bigelow",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	62,	52,	0,	0,	2,	3,	4,	6,	3,	25,	5,	59,	9,	30,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1360,	71,	"Justin Duffie",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	55,	62,	0,	0,	1,	4,	2,	8,	3,	23,	5,	58,	9,	36,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		[	1361,	71,	"Jeff Gilligan",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"x",	68,	63,	0,	0,	0,	2,	3,	5,	8,	30,	5,	68,	9,	33,	4,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32,	],
		
		[	1362,	72,	"Brad Schimmoeller",	4,	1,	1.12,	"W",	"",	"",	"x",	"",	"x",	"",	41,	42,	0,	0,	8,	7,	3,	0,	0,	13,	4,	59,	12,	11,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1363,	72,	"Justin Scribner",	1,	2,	0.74,	"L",	"",	"",	"",	"",	"",	"",	43,	43,	0,	1,	7,	4,	5,	1,	0,	15,	4,	59,	12,	12,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1364,	72,	"Matt Bigelow",	4,	3,	0.59,	"",	"",	"",	"",	"",	"",	"",	46,	40,	0,	1,	5,	8,	3,	1,	0,	16,	4,	58,	12,	12,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1365,	72,	"Brian Zimmerschied",	0,	3,	0.59,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	1,	6,	2,	8,	1,	0,	19,	4,	60,	12,	11,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1366,	72,	"Joe Milacek",	2,	5,	0.5,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	1,	5,	7,	3,	1,	1,	16,	4,	62,	12,	11,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1367,	72,	"Nick Johnston",	5,	6,	0.43,	"",	"",	"",	"",	"",	"",	"",	47,	40,	0,	0,	5,	10,	2,	1,	0,	14,	4,	59,	12,	14,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1368,	72,	"Ben Reeb",	8,	7,	0.28,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	1,	6,	6,	5,	0,	0,	16,	4,	59,	12,	10,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1369,	72,	"Fred Miller",	4,	7,	0.28,	"",	"",	"",	"",	"",	"",	"",	47,	42,	0,	0,	6,	7,	3,	2,	0,	19,	4,	59,	12,	11,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1370,	72,	"Jason Strickland",	4,	7,	0.28,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	5,	8,	4,	1,	0,	18,	4,	60,	12,	11,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1371,	72,	"Elliot Mork",	3,	7,	0.28,	"",	"",	"",	"",	"x",	"",	"",	44,	46,	0,	0,	5,	8,	4,	0,	1,	14,	4,	61,	12,	15,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1372,	72,	"Robert McArthur",	6,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	47,	41,	0,	0,	5,	9,	3,	1,	0,	16,	4,	60,	12,	12,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1373,	72,	"Doug Short",	4,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	3,	10,	5,	0,	0,	18,	4,	60,	12,	12,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1374,	72,	"Graydon Spanner",	0,	11,	0.08,	"",	"",	"",	"",	"",	"",	"",	51,	43,	0,	0,	3,	8,	5,	2,	0,	19,	4,	63,	12,	12,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1375,	72,	"Mathew Mayo",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	0,	3,	8,	5,	1,	1,	15,	4,	67,	12,	13,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1376,	72,	"Sundar Digumarthy",	0,	14,	0.04,	"",	"",	"x",	"",	"",	"",	"",	46,	49,	0,	0,	2,	8,	7,	1,	0,	16,	4,	67,	12,	12,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1377,	72,	"David Knowles",	11,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	1,	5,	7,	4,	1,	0,	17,	4,	57,	12,	13,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1378,	72,	"Steven Baybutt",	7,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	4,	8,	5,	1,	0,	21,	4,	59,	12,	11,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1379,	72,	"Eric Heberle",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	51,	48,	0,	0,	3,	7,	3,	4,	1,	21,	4,	63,	12,	15,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1380,	72,	"Patrick Affourtit",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	48,	52,	0,	0,	2,	7,	5,	3,	1,	16,	4,	70,	12,	14,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1381,	72,	"Matt Arrasmith",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	0,	8,	8,	1,	1,	21,	4,	67,	12,	13,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1382,	72,	"Justin Kudela",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	1,	9,	3,	4,	1,	18,	4,	72,	12,	12,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1383,	72,	"Jason Smelser",	2,	21,	0,	"",	"",	"",	"",	"",	"",	"",	57,	43,	0,	0,	4,	6,	4,	2,	2,	15,	4,	69,	12,	16,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1384,	72,	"Corinne Bigelow",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	56,	49,	0,	0,	1,	6,	7,	2,	2,	19,	4,	71,	12,	15,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1385,	72,	"Ian Schambach",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	52,	55,	0,	0,	3,	5,	6,	1,	3,	20,	4,	64,	12,	23,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1386,	72,	"Paul Miller",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	54,	57,	0,	0,	1,	5,	6,	4,	2,	17,	4,	80,	12,	14,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1387,	72,	"Jay Patel",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	60,	55,	0,	0,	1,	2,	6,	6,	3,	20,	4,	77,	12,	18,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1388,	72,	"Joe Faga",	0,	27,	0,	"",	"x",	"",	"",	"",	"",	"",	56,	61,	0,	0,	0,	4,	5,	6,	3,	22,	4,	79,	12,	16,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		[	1389,	72,	"Jeff Gilligan",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"x",	57,	61,	0,	0,	2,	3,	2,	7,	4,	18,	4,	85,	12,	15,	2,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28,	],
		
		[	1390,	73,	"John Young",	6,	1,	1.12,	"",	"",	"",	"x",	"",	"",	"",	40,	41,	0,	2,	8,	5,	3,	0,	0,	14,	4,	46,	10,	21,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1391,	73,	"Christopher Dillon",	3,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	44,	41,	0,	2,	5,	7,	4,	0,	0,	17,	4,	49,	10,	19,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1392,	73,	"Brandon Clarke",	6,	3,	0.59,	"",	"",	"",	"",	"",	"",	"",	43,	40,	0,	1,	9,	4,	4,	0,	0,	12,	4,	48,	10,	23,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1393,	73,	"Matt Bigelow",	4,	3,	0.59,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	1,	6,	9,	1,	1,	0,	14,	4,	46,	10,	25,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1394,	73,	"Ben Reeb",	8,	5,	0.5,	"",	"",	"",	"",	"",	"",	"",	40,	42,	0,	0,	9,	8,	1,	0,	0,	15,	4,	44,	10,	23,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1395,	73,	"Jason Strickland",	4,	6,	0.4,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	2,	5,	6,	4,	1,	0,	13,	4,	51,	10,	23,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1396,	73,	"Graydon Spanner",	0,	6,	0.4,	"",	"",	"",	"",	"",	"",	"",	47,	44,	0,	0,	7,	5,	4,	2,	0,	13,	4,	55,	10,	23,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1397,	73,	"Brad Bever",	4,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	41,	47,	0,	1,	3,	12,	1,	1,	0,	16,	4,	48,	10,	24,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1398,	73,	"Dana Rose",	4,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	46,	42,	0,	3,	4,	6,	3,	1,	1,	16,	4,	50,	10,	22,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1399,	73,	"Kurt Ritzman",	4,	8,	0.25,	"",	"",	"",	"",	"",	"",	"",	40,	48,	0,	1,	5,	7,	5,	0,	0,	16,	4,	50,	10,	22,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1400,	73,	"David Knowles",	11,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	41,	41,	0,	1,	8,	7,	2,	0,	0,	15,	4,	45,	10,	22,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1401,	73,	"Mathew Mayo",	0,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	51,	42,	0,	1,	4,	8,	3,	1,	1,	17,	4,	52,	10,	24,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1402,	73,	"Brad Schimmoeller",	5,	13,	0.04,	"",	"",	"",	"",	"",	"",	"",	43,	46,	0,	0,	6,	7,	5,	0,	0,	15,	4,	51,	10,	23,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1403,	73,	"Brent Isner",	3,	13,	0.04,	"",	"",	"",	"",	"",	"x",	"",	47,	44,	0,	1,	4,	9,	3,	0,	1,	15,	4,	51,	10,	25,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1404,	73,	"Justin Scribner",	2,	13,	0.04,	"",	"",	"",	"",	"",	"",	"",	40,	52,	0,	1,	5,	6,	4,	1,	1,	18,	4,	49,	10,	25,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1405,	73,	"Steve Sillato",	8,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	42,	45,	0,	1,	7,	7,	2,	0,	1,	15,	4,	51,	10,	21,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1406,	73,	"Connor Mazza",	10,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	42,	43,	0,	1,	7,	7,	2,	1,	0,	15,	4,	48,	10,	22,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1407,	73,	"Joe Milacek",	2,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	6,	7,	1,	4,	0,	14,	4,	49,	10,	30,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1408,	73,	"Derek Shannon",	11,	19,	0,	"",	"",	"",	"",	"",	"",	"",	44,	42,	0,	1,	5,	9,	3,	0,	0,	15,	4,	49,	10,	22,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1409,	73,	"Chris Pike",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	1,	2,	6,	7,	2,	0,	14,	4,	56,	10,	27,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1410,	73,	"Marty Leedy",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	51,	46,	0,	1,	4,	6,	4,	2,	1,	14,	4,	61,	10,	22,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1411,	73,	"Matthew Schaade",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	51,	46,	1,	0,	2,	6,	7,	1,	1,	16,	4,	55,	10,	26,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1412,	73,	"Elliot Mork",	2,	23,	0,	"",	"",	"",	"",	"x",	"",	"",	47,	49,	0,	0,	4,	7,	5,	1,	1,	17,	4,	56,	10,	23,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1413,	73,	"Steve Friday",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	50,	48,	0,	0,	4,	6,	6,	1,	1,	17,	4,	56,	10,	25,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1414,	73,	"Gregory Hetterscheidt",	13,	25,	0,	"",	"",	"",	"",	"",	"",	"",	42,	44,	0,	0,	7,	9,	1,	1,	0,	14,	4,	51,	10,	21,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1415,	73,	"Steven Baybutt",	6,	25,	0,	"",	"",	"",	"",	"",	"",	"",	50,	43,	0,	1,	5,	6,	4,	1,	1,	16,	4,	48,	10,	29,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1416,	73,	"Alex Fredericks",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	50,	49,	0,	0,	3,	5,	8,	2,	0,	21,	4,	51,	10,	27,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1417,	73,	"Nick Poe",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	48,	52,	0,	1,	2,	4,	8,	3,	0,	16,	4,	61,	10,	23,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1418,	73,	"Sundar Digumarthy",	0,	28,	0,	"",	"",	"x",	"",	"",	"",	"",	48,	52,	0,	0,	4,	6,	5,	1,	2,	20,	4,	52,	10,	28,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1419,	73,	"Jason Smelser",	2,	30,	0,	"",	"",	"",	"",	"",	"",	"",	50,	49,	0,	0,	2,	7,	7,	2,	0,	16,	4,	56,	10,	27,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1420,	73,	"Matt Arrasmith",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	2,	8,	4,	3,	1,	17,	4,	59,	10,	25,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1421,	73,	"Fred Miller",	4,	32,	0,	"",	"",	"",	"",	"",	"",	"",	52,	46,	0,	0,	3,	7,	7,	0,	1,	17,	4,	51,	10,	30,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1422,	73,	"Robert McArthur",	6,	33,	0,	"",	"",	"",	"",	"",	"",	"",	50,	48,	0,	0,	4,	5,	6,	3,	0,	16,	4,	54,	10,	28,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1423,	73,	"Josh Stephens",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	50,	54,	0,	0,	0,	8,	7,	2,	1,	17,	4,	58,	10,	29,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1424,	73,	"Justin Kudela",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	53,	51,	0,	0,	3,	3,	7,	5,	0,	22,	4,	58,	10,	24,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1425,	73,	"Corinne Bigelow",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	51,	54,	0,	0,	3,	4,	5,	5,	1,	16,	4,	60,	10,	29,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1426,	73,	"Michael McGuire",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	56,	51,	0,	0,	1,	6,	6,	3,	2,	20,	4,	60,	10,	27,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1427,	73,	"Robby Thompson",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	50,	57,	0,	0,	0,	5,	11,	0,	2,	19,	4,	61,	10,	27,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1428,	73,	"Eric Heberle",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	60,	48,	0,	0,	1,	7,	6,	2,	2,	22,	4,	56,	10,	30,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1429,	73,	"Bradley Rose",	6,	40,	0,	"",	"",	"",	"",	"",	"",	"",	53,	51,	0,	0,	3,	4,	5,	6,	0,	18,	4,	62,	10,	24,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1430,	73,	"Michael Perry",	5,	40,	0,	"",	"",	"",	"",	"",	"",	"",	48,	57,	0,	0,	2,	7,	3,	5,	1,	21,	4,	59,	10,	25,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1431,	73,	"Brent Huddleston",	9,	42,	0,	"",	"x",	"",	"",	"",	"",	"",	44,	58,	0,	0,	4,	7,	2,	2,	3,	15,	4,	62,	10,	25,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1432,	73,	"Christopher Martin",	4,	42,	0,	"",	"",	"",	"",	"",	"",	"",	49,	58,	0,	0,	1,	6,	7,	2,	2,	22,	4,	59,	10,	26,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1433,	73,	"Doug Dickenson",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	55,	56,	0,	0,	4,	3,	6,	1,	4,	28,	4,	56,	10,	27,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1434,	73,	"Justin Liu",	0,	45,	0,	"",	"",	"",	"",	"",	"",	"",	60,	53,	0,	0,	2,	2,	8,	4,	2,	24,	4,	63,	10,	26,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1435,	73,	"Paul Miller",	0,	45,	0,	"",	"",	"",	"",	"",	"",	"",	57,	56,	0,	1,	3,	3,	2,	5,	4,	20,	4,	63,	10,	30,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1436,	73,	"Joe Faga",	0,	47,	0,	"",	"",	"",	"",	"",	"",	"",	58,	56,	0,	0,	1,	5,	4,	5,	3,	22,	4,	64,	10,	28,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1437,	73,	"Ian Schambach",	0,	48,	0,	"",	"",	"",	"",	"",	"",	"",	59,	56,	0,	0,	0,	5,	6,	5,	2,	18,	4,	67,	10,	30,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1438,	73,	"Jim McGuire",	0,	49,	0,	"",	"",	"",	"",	"",	"",	"",	57,	59,	0,	0,	1,	2,	8,	3,	4,	21,	4,	62,	10,	33,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1439,	73,	"Tavis Nelson",	0,	49,	0,	"",	"",	"",	"",	"",	"",	"",	60,	56,	0,	0,	1,	5,	3,	5,	4,	22,	4,	62,	10,	32,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1440,	73,	"Patrick Affourtit",	0,	51,	0,	"",	"",	"",	"",	"",	"",	"",	58,	59,	0,	0,	0,	3,	6,	6,	3,	22,	4,	66,	10,	29,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1441,	73,	"Tim Blausey",	0,	52,	0,	"",	"",	"",	"",	"",	"",	"",	57,	63,	0,	1,	1,	1,	5,	4,	6,	22,	4,	70,	10,	28,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1442,	73,	"David Kunkleman",	0,	53,	0,	"",	"",	"",	"",	"",	"",	"",	61,	65,	0,	0,	1,	3,	4,	3,	7,	20,	4,	70,	10,	36,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1443,	73,	"Ian Willinger",	0,	54,	0,	"",	"",	"",	"",	"",	"",	"",	67,	61,	0,	0,	0,	4,	4,	5,	5,	19,	4,	70,	10,	39,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1444,	73,	"Keith Overly",	0,	55,	0,	"",	"",	"",	"",	"",	"",	"",	70,	62,	0,	0,	0,	3,	3,	3,	9,	20,	4,	78,	10,	34,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		[	1445,	73,	"Jeff Gilligan",	0,	56,	0,	"",	"",	"",	"",	"",	"",	"x",	66,	70,	0,	0,	0,	1,	2,	7,	8,	22,	4,	78,	10,	36,	4,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56,	],
		
		[	1446,	74,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"x",	"",	"",	39,	40,	0,	2,	8,	7,	1,	0,	0,	13,	4,	46,	10,	20,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1447,	74,	"Gregory Hetterscheidt",	12,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	41,	38,	0,	2,	8,	7,	1,	0,	0,	14,	4,	43,	10,	22,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1448,	74,	"Joe Milacek",	2,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	41,	41,	0,	0,	10,	6,	2,	0,	0,	13,	4,	47,	10,	22,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1449,	74,	"Ben Reeb",	8,	2,	0.77,	"",	"",	"",	"",	"",	"",	"",	39,	41,	0,	1,	9,	7,	1,	0,	0,	14,	4,	42,	10,	24,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1450,	74,	"Brent Isner",	3,	2,	0.77,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	0,	7,	9,	2,	0,	0,	15,	4,	49,	10,	21,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1451,	74,	"Graydon Spanner",	0,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	43,	46,	0,	2,	3,	8,	4,	1,	0,	14,	4,	52,	10,	23,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1452,	74,	"John Young",	7,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	42,	41,	0,	0,	8,	9,	1,	0,	0,	15,	4,	44,	10,	24,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1453,	74,	"Brad Schimmoeller",	5,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	44,	41,	0,	0,	9,	5,	4,	0,	0,	15,	4,	49,	10,	21,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1454,	74,	"Brian Rue",	1,	7,	0.42,	"",	"",	"",	"",	"",	"",	"",	46,	44,	0,	0,	7,	7,	2,	1,	1,	16,	4,	45,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1455,	74,	"Justin Scribner",	1,	8,	0.35,	"",	"",	"",	"",	"",	"",	"",	50,	41,	0,	2,	6,	4,	2,	3,	1,	19,	4,	46,	10,	26,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1456,	74,	"Doug Short",	4,	9,	0.28,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	0,	6,	7,	5,	0,	0,	15,	4,	50,	10,	24,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1457,	74,	"Brandon Clarke",	6,	10,	0.21,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	1,	3,	11,	3,	0,	0,	17,	4,	47,	10,	24,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1458,	74,	"Tim Collins",	3,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	46,	46,	0,	0,	3,	10,	5,	0,	0,	16,	4,	51,	10,	25,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1459,	74,	"Sundar Digumarthy",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	0,	1,	10,	7,	0,	0,	20,	4,	51,	10,	25,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1460,	74,	"Steve Sillato",	8,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	6,	9,	2,	0,	1,	17,	4,	49,	10,	23,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1461,	74,	"Derek Shannon",	7,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	46,	44,	0,	0,	4,	10,	4,	0,	0,	15,	4,	50,	10,	25,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1462,	74,	"Elliot Mork",	2,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	4,	8,	3,	3,	0,	15,	4,	51,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1463,	74,	"Matt Bigelow",	5,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	0,	6,	6,	4,	1,	1,	17,	4,	49,	10,	27,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1464,	74,	"Justin Kudela",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	5,	4,	6,	2,	1,	16,	4,	53,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1465,	74,	"Kevin George",	4,	18,	0,	"",	"",	"",	"",	"",	"",	"",	52,	43,	0,	1,	3,	9,	1,	3,	1,	16,	4,	50,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1466,	74,	"Marty Leedy",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	51,	48,	0,	0,	2,	7,	8,	0,	1,	17,	4,	56,	10,	26,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1467,	74,	"David Knowles",	11,	20,	0,	"",	"",	"",	"",	"",	"",	"",	50,	39,	0,	0,	6,	9,	1,	2,	0,	15,	4,	49,	10,	25,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1468,	74,	"Bradley Rose",	3,	20,	0,	"",	"",	"",	"",	"",	"",	"",	49,	48,	0,	0,	3,	7,	6,	2,	0,	18,	4,	53,	10,	26,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1469,	74,	"Christopher Dillon",	3,	22,	0,	"",	"",	"",	"",	"",	"",	"",	50,	48,	0,	0,	7,	3,	4,	2,	2,	21,	4,	51,	10,	26,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1470,	74,	"Jason Smelser",	2,	22,	0,	"",	"",	"",	"",	"",	"",	"",	50,	49,	0,	0,	2,	9,	4,	2,	1,	17,	4,	53,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1471,	74,	"Jim McGuire",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	54,	47,	0,	1,	2,	5,	6,	3,	1,	17,	4,	57,	10,	27,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1472,	74,	"Fred Miller",	2,	25,	0,	"",	"",	"",	"",	"",	"",	"",	53,	47,	0,	0,	3,	6,	8,	0,	1,	21,	4,	56,	10,	23,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1473,	74,	"Chris Pike",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	1,	8,	5,	3,	1,	17,	4,	56,	10,	30,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1474,	74,	"Mathew Mayo",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	49,	54,	0,	0,	2,	8,	4,	2,	2,	18,	4,	56,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1475,	74,	"Jason Strickland",	3,	28,	0,	"",	"",	"x",	"",	"",	"x",	"",	53,	48,	0,	1,	3,	4,	6,	2,	2,	18,	4,	56,	10,	27,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1476,	74,	"Brent Huddleston",	9,	29,	0,	"",	"",	"",	"",	"",	"",	"",	50,	46,	0,	0,	5,	5,	5,	3,	0,	13,	4,	58,	10,	25,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1477,	74,	"Eric Heberle",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	63,	45,	0,	0,	4,	3,	4,	6,	1,	19,	4,	56,	10,	33,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1478,	74,	"Justin Liu",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	54,	54,	0,	0,	1,	4,	8,	4,	1,	17,	4,	64,	10,	27,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1479,	74,	"Ty Wilson",	7,	32,	0,	"",	"",	"",	"",	"",	"",	"",	55,	49,	0,	0,	2,	5,	6,	5,	0,	18,	4,	59,	10,	27,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1480,	74,	"Michael Isfort",	4,	32,	0,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	1,	5,	7,	4,	1,	19,	4,	59,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1481,	74,	"Michael McGuire",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	54,	57,	0,	0,	0,	6,	4,	7,	1,	18,	4,	65,	10,	28,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1482,	74,	"Matt Arrasmith",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	55,	58,	0,	0,	1,	6,	3,	5,	3,	19,	4,	63,	10,	31,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1483,	74,	"Matt Keller",	8,	36,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	2,	6,	4,	4,	2,	19,	4,	58,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1484,	74,	"Steven Murtanovski",	2,	36,	0,	"",	"",	"",	"",	"",	"",	"",	64,	48,	0,	0,	2,	4,	5,	3,	4,	20,	4,	65,	10,	27,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1485,	74,	"Merrill Wheeler",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	60,	54,	0,	0,	0,	7,	5,	0,	6,	20,	4,	63,	10,	31,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1486,	74,	"Ryan Coady",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	60,	56,	0,	0,	0,	6,	5,	3,	4,	18,	4,	62,	10,	36,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1487,	74,	"Seth Wehner",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	54,	62,	0,	1,	1,	2,	8,	2,	4,	17,	4,	65,	10,	34,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1488,	74,	"Joe Faga",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"",	56,	61,	0,	0,	0,	3,	7,	5,	3,	19,	4,	66,	10,	32,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1489,	74,	"Steve Friday",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	59,	59,	0,	0,	0,	6,	4,	3,	5,	17,	4,	72,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1490,	74,	"Dan White",	0,	43,	0,	"",	"",	"",	"",	"",	"",	"",	59,	60,	0,	0,	1,	4,	6,	4,	3,	21,	4,	69,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1491,	74,	"Paul Miller",	0,	43,	0,	"",	"",	"",	"",	"",	"",	"",	57,	62,	0,	0,	1,	2,	7,	3,	5,	23,	4,	66,	10,	30,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1492,	74,	"David Kunkleman",	0,	45,	0,	"",	"",	"",	"",	"",	"",	"",	66,	55,	0,	0,	2,	2,	7,	2,	5,	17,	4,	65,	10,	39,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1493,	74,	"Tavis Nelson",	0,	45,	0,	"",	"",	"",	"",	"",	"",	"",	60,	61,	0,	0,	0,	2,	5,	7,	4,	26,	4,	66,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1494,	74,	"Ian Willinger",	0,	47,	0,	"",	"",	"",	"",	"",	"",	"",	61,	61,	0,	0,	1,	2,	4,	6,	5,	21,	4,	69,	10,	32,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1495,	74,	"Keith Overly",	0,	47,	0,	"",	"",	"",	"",	"",	"",	"",	60,	62,	0,	0,	1,	1,	6,	6,	4,	25,	4,	68,	10,	29,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1496,	74,	"Tim Blausey",	0,	49,	0,	"",	"",	"",	"",	"",	"",	"",	58,	65,	0,	0,	1,	6,	4,	1,	6,	16,	4,	72,	10,	35,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1497,	74,	"Corinne Bigelow",	0,	50,	0,	"",	"",	"",	"",	"",	"",	"",	61,	63,	0,	1,	1,	3,	1,	5,	7,	24,	4,	69,	10,	31,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1498,	74,	"Josh Stephens",	0,	51,	0,	"",	"",	"",	"",	"",	"",	"",	60,	65,	0,	0,	2,	4,	3,	2,	7,	26,	4,	63,	10,	36,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1499,	74,	"Jeff Gilligan",	0,	52,	0,	"",	"",	"",	"",	"",	"",	"",	64,	64,	0,	0,	0,	1,	4,	10,	3,	25,	4,	72,	10,	31,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		[	1500,	74,	"Emily Valandingham",	0,	53,	0,	"",	"x",	"",	"",	"",	"",	"x",	86,	95,	0,	0,	0,	0,	1,	1,	16,	30,	4,	97,	10,	54,	4,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55,	],
		
		[	1501,	75,	"Gregory Hetterscheidt",	12,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	34,	39,	1,	2,	11,	3,	1,	0,	0,	14,	4,	41,	10,	18,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1502,	75,	"David Knowles",	11,	0,	0,	"",	"",	"",	"",	"",	"",	"",	39,	40,	0,	3,	5,	10,	0,	0,	0,	13,	4,	47,	10,	19,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1503,	75,	"Elliot Mork",	1,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	39,	46,	0,	0,	7,	9,	2,	0,	0,	15,	4,	48,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1504,	75,	"Brent Huddleston",	5,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	38,	44,	0,	2,	5,	10,	1,	0,	0,	14,	4,	46,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1505,	75,	"Steve Sillato",	6,	3,	0.68,	"",	"",	"",	"",	"",	"",	"",	38,	44,	0,	1,	10,	4,	2,	1,	0,	16,	4,	45,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1506,	75,	"Matt Keller",	8,	3,	0.68,	"",	"",	"",	"",	"",	"",	"",	39,	41,	0,	2,	10,	3,	2,	1,	0,	13,	4,	46,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1507,	75,	"Christopher Dillon",	3,	3,	0.68,	"",	"",	"",	"",	"",	"",	"",	42,	43,	0,	2,	3,	11,	2,	0,	0,	16,	4,	48,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1508,	75,	"Ben Reeb",	9,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	41,	39,	0,	1,	8,	9,	0,	0,	0,	11,	4,	47,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1509,	75,	"Brad Bever",	3,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	41,	45,	0,	0,	6,	10,	2,	0,	0,	14,	4,	49,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1510,	75,	"Steven Baybutt",	6,	8,	0.26,	"",	"",	"",	"",	"",	"",	"",	44,	40,	0,	1,	9,	5,	2,	0,	1,	16,	4,	47,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1511,	75,	"Matt Bigelow",	3,	8,	0.26,	"",	"",	"",	"",	"x",	"",	"",	41,	46,	0,	2,	6,	4,	5,	1,	0,	16,	4,	53,	10,	18,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1512,	75,	"Tim Collins",	3,	8,	0.26,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	1,	5,	8,	4,	0,	0,	17,	4,	47,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1513,	75,	"Brian Rue",	1,	8,	0.26,	"",	"",	"",	"",	"",	"",	"",	48,	41,	0,	2,	3,	8,	4,	1,	0,	15,	4,	52,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1514,	75,	"Justin Scribner",	1,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	44,	48,	0,	1,	5,	6,	3,	3,	0,	17,	4,	51,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1515,	75,	"Ian Schambach",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	45,	48,	0,	1,	3,	8,	4,	2,	0,	17,	4,	54,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1516,	75,	"Matthew Schaade",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	5,	7,	5,	0,	1,	15,	4,	57,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1517,	75,	"Brandon Clarke",	6,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	45,	43,	0,	0,	8,	5,	4,	1,	0,	16,	4,	51,	10,	21,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1518,	75,	"Brad Schimmoeller",	5,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	7,	8,	1,	1,	1,	12,	4,	54,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1519,	75,	"Robert McArthur",	6,	17,	0,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	5,	10,	2,	1,	0,	16,	4,	49,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1520,	75,	"Graydon Spanner",	1,	18,	0,	"",	"",	"",	"",	"",	"",	"",	52,	43,	0,	1,	3,	9,	2,	2,	1,	14,	4,	58,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1521,	75,	"Jason Smelser",	1,	19,	0,	"",	"",	"",	"",	"",	"",	"",	43,	53,	0,	1,	5,	4,	4,	3,	1,	21,	4,	53,	10,	22,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1522,	75,	"Justin Kudela",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	47,	50,	0,	0,	3,	7,	6,	2,	0,	17,	4,	56,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1523,	75,	"Joe Milacek",	4,	21,	0,	"",	"",	"",	"",	"",	"",	"",	45,	49,	0,	0,	5,	7,	3,	3,	0,	15,	4,	53,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1524,	75,	"Justin Liu",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	46,	52,	0,	0,	3,	7,	5,	3,	0,	16,	4,	56,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1525,	75,	"Jason Strickland",	3,	23,	0,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	1,	4,	6,	3,	3,	1,	18,	4,	55,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1526,	75,	"Mathew Mayo",	0,	23,	0,	"",	"",	"x",	"",	"",	"",	"",	49,	50,	0,	1,	1,	7,	7,	1,	1,	21,	4,	53,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1527,	75,	"Doug Short",	4,	25,	0,	"",	"",	"",	"",	"",	"",	"",	44,	53,	0,	0,	5,	6,	5,	0,	2,	18,	4,	55,	10,	24,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1528,	75,	"Kurt Ritzman",	4,	25,	0,	"",	"",	"",	"",	"",	"",	"",	50,	47,	0,	0,	4,	8,	3,	2,	1,	18,	4,	54,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1529,	75,	"Chris Pike",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	2,	7,	6,	2,	1,	21,	4,	55,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1530,	75,	"Michael Isfort",	1,	28,	0,	"",	"",	"",	"",	"",	"",	"",	50,	51,	0,	0,	1,	7,	9,	0,	1,	18,	4,	54,	10,	29,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1531,	75,	"Michael McGuire",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	1,	8,	6,	2,	1,	19,	4,	58,	10,	25,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1532,	75,	"Bradley Rose",	3,	30,	0,	"",	"",	"",	"",	"",	"",	"",	49,	51,	0,	0,	1,	8,	7,	2,	0,	17,	4,	55,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1533,	75,	"Dana Rose",	3,	30,	0,	"",	"",	"",	"",	"",	"",	"",	51,	49,	0,	2,	2,	5,	4,	3,	2,	18,	4,	59,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1534,	75,	"Keith Overly",	0,	32,	0,	"",	"x",	"",	"",	"",	"",	"",	47,	58,	0,	0,	2,	4,	9,	2,	1,	19,	4,	60,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1535,	75,	"Steve Friday",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	50,	57,	0,	0,	3,	5,	5,	2,	3,	20,	4,	64,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1536,	75,	"Brian Spangenberg",	7,	34,	0,	"",	"",	"",	"",	"",	"",	"",	46,	55,	0,	0,	4,	8,	2,	2,	2,	20,	4,	58,	10,	23,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1537,	75,	"Jim McGuire",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	50,	58,	0,	0,	1,	6,	5,	4,	2,	19,	4,	61,	10,	28,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1538,	75,	"Corinne Bigelow",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	55,	54,	0,	0,	1,	4,	7,	5,	1,	18,	4,	60,	10,	31,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1539,	75,	"Derek Shannon",	7,	37,	0,	"",	"",	"",	"",	"",	"",	"",	53,	51,	0,	0,	3,	7,	2,	3,	3,	22,	4,	56,	10,	26,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1540,	75,	"Tavis Nelson",	0,	37,	0,	"",	"",	"",	"",	"",	"x",	"",	51,	60,	0,	0,	2,	3,	7,	4,	2,	17,	4,	67,	10,	27,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1541,	75,	"Joe Faga",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	54,	58,	0,	0,	1,	3,	8,	3,	3,	19,	4,	61,	10,	32,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1542,	75,	"Matt Arrasmith",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	59,	55,	0,	0,	3,	2,	6,	3,	4,	19,	4,	64,	10,	31,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1543,	75,	"Patrick Affourtit",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	55,	59,	0,	0,	2,	4,	6,	2,	4,	19,	4,	66,	10,	29,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1544,	75,	"Eric Heberle",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	63,	57,	0,	0,	0,	3,	7,	4,	4,	20,	4,	68,	10,	32,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1545,	75,	"Nick Poe",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	58,	62,	0,	0,	1,	2,	5,	6,	4,	18,	4,	71,	10,	31,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1546,	75,	"David Kunkleman",	0,	44,	0,	"",	"",	"",	"",	"",	"",	"",	60,	63,	0,	0,	1,	3,	7,	1,	6,	23,	4,	66,	10,	34,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1547,	75,	"Paul Miller",	0,	44,	0,	"",	"",	"",	"",	"",	"",	"",	58,	65,	0,	0,	2,	1,	6,	3,	6,	16,	4,	74,	10,	33,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		[	1548,	75,	"Jeff Gilligan",	0,	46,	0,	"",	"",	"",	"",	"",	"",	"x",	63,	64,	0,	0,	0,	3,	4,	6,	5,	23,	4,	74,	10,	30,	4,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48,	],
		
		[	1549,	76,	"Derek Shannon",	6,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	41,	38,	0,	1,	10,	6,	1,	0,	0,	13,	4,	45,	10,	21,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1550,	76,	"Doug Short",	2,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	2,	4,	8,	3,	1,	0,	15,	4,	51,	10,	21,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1551,	76,	"Mathew Mayo",	0,	2,	0.83,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	2,	4,	6,	4,	2,	0,	15,	4,	55,	10,	20,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1552,	76,	"Sundar Digumarthy",	0,	2,	0.83,	"",	"",	"",	"",	"",	"",	"",	46,	44,	0,	1,	3,	10,	3,	1,	0,	13,	4,	55,	10,	22,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1553,	76,	"Elliot Mork",	3,	4,	0.64,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	0,	8,	5,	4,	1,	0,	13,	4,	49,	10,	26,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1554,	76,	"Justin Kudela",	0,	4,	0.64,	"",	"",	"",	"",	"",	"",	"",	46,	45,	0,	0,	5,	9,	3,	0,	1,	15,	4,	54,	10,	22,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1555,	76,	"Joe Milacek",	4,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	1,	7,	4,	4,	2,	0,	14,	4,	51,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1556,	76,	"Jason Strickland",	1,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	45,	47,	0,	0,	7,	7,	1,	1,	2,	16,	4,	52,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1557,	76,	"David Knowles",	11,	8,	0.3,	"",	"",	"",	"",	"",	"",	"",	42,	41,	0,	1,	6,	10,	1,	0,	0,	15,	4,	47,	10,	21,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1558,	76,	"Brian Rue",	1,	8,	0.3,	"",	"",	"",	"",	"",	"",	"",	47,	46,	0,	0,	3,	10,	4,	1,	0,	16,	4,	50,	10,	27,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1559,	76,	"Justin Scribner",	1,	8,	0.3,	"",	"",	"",	"",	"",	"",	"",	44,	49,	0,	1,	4,	6,	5,	2,	0,	18,	4,	52,	10,	23,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1560,	76,	"Bradley Rose",	3,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	5,	9,	2,	1,	1,	15,	4,	50,	10,	27,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1561,	76,	"Connor Mazza",	10,	12,	0.07,	"",	"",	"",	"",	"x",	"",	"",	44,	42,	0,	0,	8,	7,	2,	1,	0,	16,	4,	47,	10,	23,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1562,	76,	"Matt Bigelow",	3,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	44,	49,	0,	3,	3,	5,	3,	3,	1,	18,	4,	55,	10,	20,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1563,	76,	"Kurt Ritzman",	4,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	45,	48,	0,	0,	6,	6,	3,	3,	0,	16,	4,	54,	10,	23,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1564,	76,	"Matthew Schaade",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	51,	46,	0,	0,	3,	7,	6,	2,	0,	18,	4,	55,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1565,	76,	"John Young",	8,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	1,	5,	5,	7,	0,	0,	15,	4,	54,	10,	21,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1566,	76,	"Matt Keller",	9,	17,	0,	"",	"",	"",	"",	"",	"",	"",	51,	39,	0,	1,	7,	7,	2,	0,	1,	15,	4,	46,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1567,	76,	"Christopher Dillon",	3,	17,	0,	"",	"",	"",	"",	"",	"",	"",	50,	46,	0,	0,	3,	9,	4,	1,	1,	16,	4,	55,	10,	25,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1568,	76,	"Nicholas Jewson",	1,	17,	0,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	5,	5,	5,	1,	2,	17,	4,	52,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1569,	76,	"Ryan Coady",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	53,	46,	0,	1,	3,	7,	4,	0,	3,	18,	4,	57,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1570,	76,	"Brad Schimmoeller",	5,	21,	0,	"",	"",	"",	"",	"",	"",	"",	51,	45,	0,	0,	7,	5,	2,	1,	3,	13,	4,	59,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1571,	76,	"Dana Rose",	3,	21,	0,	"",	"",	"x",	"",	"",	"",	"",	48,	50,	0,	1,	3,	6,	4,	3,	1,	17,	4,	57,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1572,	76,	"Steve Sillato",	6,	23,	0,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	0,	3,	9,	3,	3,	0,	17,	4,	54,	10,	25,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1573,	76,	"Steven Baybutt",	6,	23,	0,	"",	"",	"",	"",	"",	"",	"",	47,	49,	0,	0,	5,	8,	2,	2,	1,	16,	4,	52,	10,	28,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1574,	76,	"Patrick Queen",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	54,	48,	0,	0,	2,	10,	2,	2,	2,	18,	4,	57,	10,	27,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1575,	76,	"Paul Miller",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	49,	53,	0,	0,	1,	8,	6,	2,	1,	16,	4,	60,	10,	26,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1576,	76,	"Corinne Bigelow",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	51,	52,	0,	0,	4,	5,	4,	3,	2,	18,	4,	56,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1577,	76,	"Jason Smelser",	1,	27,	0,	"",	"",	"",	"",	"",	"x",	"",	49,	53,	0,	1,	3,	5,	2,	6,	1,	13,	4,	63,	10,	26,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1578,	76,	"Michael Isfort",	1,	29,	0,	"",	"",	"",	"",	"",	"",	"",	53,	50,	0,	0,	2,	6,	5,	5,	0,	20,	4,	56,	10,	27,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1579,	76,	"Jim McGuire",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	50,	54,	0,	0,	3,	4,	7,	2,	2,	16,	4,	62,	10,	26,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1580,	76,	"Brian Spangenberg",	7,	31,	0,	"",	"",	"",	"",	"",	"",	"",	45,	53,	0,	0,	6,	4,	4,	2,	2,	19,	4,	52,	10,	27,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1581,	76,	"Tim Collins",	3,	31,	0,	"",	"",	"",	"",	"",	"",	"",	54,	48,	0,	1,	3,	4,	7,	1,	2,	18,	4,	60,	10,	24,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1582,	76,	"John Hanley",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	58,	48,	0,	1,	1,	5,	7,	3,	1,	19,	4,	57,	10,	30,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1583,	76,	"Marty Leedy",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	1,	7,	5,	3,	2,	17,	4,	62,	10,	27,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1584,	76,	"Robert McArthur",	6,	35,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	5,	8,	1,	1,	3,	17,	4,	59,	10,	26,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1585,	76,	"Joe Medici",	9,	36,	0,	"",	"",	"",	"",	"",	"",	"",	49,	51,	0,	0,	3,	7,	4,	3,	1,	17,	4,	60,	10,	23,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1586,	76,	"Jeff Gilligan",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	55,	57,	0,	0,	1,	3,	8,	4,	2,	20,	4,	63,	10,	29,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1587,	76,	"Matt Arrasmith",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	61,	54,	0,	0,	0,	4,	6,	5,	3,	17,	4,	68,	10,	30,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1588,	76,	"Patrick Affourtit",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	58,	57,	0,	0,	0,	2,	10,	4,	2,	21,	4,	63,	10,	31,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1589,	76,	"Michael Perry",	4,	40,	0,	"",	"",	"",	"",	"",	"",	"",	56,	57,	0,	0,	1,	3,	7,	6,	1,	26,	4,	57,	10,	30,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1590,	76,	"Dustin Schmidt",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"",	65,	60,	0,	0,	0,	3,	5,	4,	6,	19,	4,	67,	10,	39,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1591,	76,	"David Kunkleman",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	68,	60,	0,	0,	1,	2,	5,	6,	4,	21,	4,	79,	10,	28,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		[	1592,	76,	"Joe Faga",	0,	43,	0,	"",	"x",	"",	"",	"",	"",	"x",	61,	70,	0,	0,	0,	2,	7,	3,	6,	21,	4,	76,	10,	34,	4,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44,	],
		
		[	1593,	77,	"Matthew Schaade",	0,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	41,	45,	0,	1,	6,	8,	2,	1,	0,	22,	5,	38,	8,	26,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1594,	77,	"Kalib Amos",	0,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	0,	8,	6,	3,	1,	0,	20,	5,	38,	8,	29,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1595,	77,	"Jason Smelser",	1,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	0,	6,	9,	3,	0,	0,	18,	5,	39,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1596,	77,	"Steven Baybutt",	6,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	44,	39,	1,	1,	6,	7,	2,	1,	0,	17,	5,	38,	8,	28,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1597,	77,	"Matt Bigelow",	3,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	41,	45,	0,	1,	8,	4,	4,	1,	0,	19,	5,	36,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1598,	77,	"Connor Mazza",	10,	6,	0.35,	"",	"",	"",	"x",	"",	"",	"",	39,	41,	0,	4,	5,	7,	1,	1,	0,	19,	5,	39,	8,	22,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1599,	77,	"Brad Bever",	4,	6,	0.35,	"",	"",	"",	"",	"",	"",	"",	42,	44,	0,	3,	3,	8,	3,	1,	0,	20,	5,	41,	8,	25,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1600,	77,	"Tucker Wilkinson",	4,	6,	0.35,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	2,	3,	10,	3,	0,	0,	18,	5,	39,	8,	29,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1601,	77,	"Graydon Spanner",	1,	6,	0.35,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	2,	3,	7,	6,	0,	0,	19,	5,	38,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1602,	77,	"Justin Scribner",	1,	6,	0.35,	"",	"",	"",	"",	"",	"",	"",	41,	48,	0,	1,	4,	8,	5,	0,	0,	21,	5,	40,	8,	28,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1603,	77,	"Robert McArthur",	4,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	46,	41,	0,	1,	8,	4,	3,	2,	0,	19,	5,	44,	8,	24,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1604,	77,	"Jason Strickland",	1,	11,	0.11,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	5,	8,	5,	0,	0,	19,	5,	40,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1605,	77,	"Joe Milacek",	4,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	40,	48,	0,	1,	5,	8,	3,	1,	0,	21,	5,	36,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1606,	77,	"Kurt Ritzman",	3,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	47,	42,	0,	0,	5,	9,	4,	0,	0,	18,	5,	40,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1607,	77,	"Chris Pike",	0,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	43,	49,	0,	0,	5,	7,	5,	1,	0,	17,	5,	44,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1608,	77,	"Brent Huddleston",	5,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	1,	6,	7,	2,	2,	0,	18,	5,	40,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1609,	77,	"Christopher Dillon",	3,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	0,	6,	9,	1,	1,	1,	19,	5,	39,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1610,	77,	"David Knowles",	10,	18,	0,	"",	"",	"",	"",	"",	"",	"",	44,	40,	0,	1,	9,	4,	3,	1,	0,	20,	5,	37,	8,	27,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1611,	77,	"Derek Shannon",	6,	18,	0,	"",	"",	"",	"",	"",	"",	"",	45,	43,	0,	1,	4,	9,	4,	0,	0,	20,	5,	41,	8,	27,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1612,	77,	"Brent Isner",	4,	20,	0,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	7,	4,	5,	2,	0,	18,	5,	43,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1613,	77,	"Alex Fredericks",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	50,	46,	0,	0,	2,	10,	4,	2,	0,	19,	5,	41,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1614,	77,	"Tim Collins",	3,	22,	0,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	1,	3,	7,	5,	2,	0,	20,	5,	44,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1615,	77,	"Ryan Coady",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	4,	7,	5,	0,	2,	22,	5,	45,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1616,	77,	"Mathew Mayo",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	3,	5,	9,	1,	0,	23,	5,	47,	8,	28,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1617,	77,	"Nicholas Jewson",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	51,	47,	0,	1,	4,	5,	4,	2,	2,	22,	5,	41,	8,	35,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1618,	77,	"Sundar Digumarthy",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	46,	53,	0,	0,	3,	7,	6,	1,	1,	26,	5,	43,	8,	30,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1619,	77,	"Doug Short",	2,	27,	0,	"",	"",	"",	"",	"",	"",	"",	52,	46,	0,	0,	4,	5,	7,	1,	1,	23,	5,	44,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1620,	77,	"Ward Huddleston",	0,	27,	0,	"",	"",	"x",	"",	"",	"",	"",	46,	54,	0,	0,	1,	8,	8,	0,	1,	22,	5,	46,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1621,	77,	"Joe Medici",	6,	29,	0,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	0,	5,	6,	6,	0,	1,	21,	5,	39,	8,	35,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1622,	77,	"Marty Leedy",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	49,	52,	0,	1,	4,	4,	5,	1,	3,	20,	5,	49,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1623,	77,	"Fred Miller",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	3,	7,	5,	1,	2,	19,	5,	51,	8,	32,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1624,	77,	"Justin Kudela",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	48,	54,	0,	0,	4,	3,	8,	1,	2,	23,	5,	48,	8,	31,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1625,	77,	"Michael McGuire",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	51,	51,	0,	0,	2,	5,	8,	3,	0,	20,	5,	45,	8,	37,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1626,	77,	"Brian Spangenberg",	7,	34,	0,	"",	"",	"",	"",	"",	"",	"",	50,	46,	0,	1,	5,	3,	5,	4,	0,	23,	5,	44,	8,	29,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1627,	77,	"Seth Wehner",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	55,	48,	0,	0,	4,	6,	3,	1,	4,	20,	5,	48,	8,	35,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1628,	77,	"Ian Schambach",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	55,	50,	0,	1,	2,	5,	5,	2,	3,	18,	5,	48,	8,	39,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1629,	77,	"Keith Overly",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	56,	49,	0,	1,	1,	5,	5,	5,	1,	17,	5,	52,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1630,	77,	"Robby Thompson",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	47,	58,	0,	0,	4,	4,	5,	3,	2,	19,	5,	52,	8,	34,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1631,	77,	"Patrick Affourtit",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	50,	56,	0,	0,	1,	6,	7,	3,	1,	22,	5,	48,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1632,	77,	"Steve Friday",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	3,	5,	5,	3,	2,	20,	5,	48,	8,	38,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1633,	77,	"Corinne Bigelow",	0,	41,	0,	"",	"",	"",	"",	"x",	"",	"",	60,	47,	0,	0,	2,	5,	6,	3,	2,	22,	5,	49,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1634,	77,	"Matt Arrasmith",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"",	58,	49,	0,	0,	4,	2,	6,	5,	1,	27,	5,	44,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1635,	77,	"Eric Heberle",	0,	43,	0,	"",	"",	"",	"",	"",	"",	"",	54,	54,	0,	0,	3,	4,	6,	2,	3,	19,	5,	52,	8,	37,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1636,	77,	"John Hanley",	0,	44,	0,	"",	"",	"",	"",	"",	"x",	"",	50,	59,	0,	0,	2,	6,	4,	4,	2,	22,	5,	48,	8,	39,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1637,	77,	"Tavis Nelson",	0,	44,	0,	"",	"",	"",	"",	"",	"",	"",	51,	58,	0,	0,	1,	7,	5,	2,	3,	25,	5,	48,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1638,	77,	"Michael Perry",	4,	46,	0,	"",	"",	"",	"",	"",	"",	"",	55,	51,	0,	0,	0,	6,	9,	2,	1,	22,	5,	51,	8,	33,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1639,	77,	"Jeff Gilligan",	0,	47,	0,	"",	"",	"",	"",	"",	"",	"",	55,	56,	0,	0,	1,	4,	9,	1,	3,	28,	5,	47,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1640,	77,	"Kevin Bindel",	0,	47,	0,	"",	"",	"",	"",	"",	"",	"",	59,	52,	0,	0,	1,	3,	7,	6,	1,	25,	5,	51,	8,	35,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1641,	77,	"Paul Miller",	0,	49,	0,	"",	"x",	"",	"",	"",	"",	"",	50,	63,	0,	0,	1,	3,	7,	4,	3,	27,	5,	51,	8,	35,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1642,	77,	"Jim McGuire",	0,	50,	0,	"",	"",	"",	"",	"",	"",	"",	59,	55,	0,	0,	0,	3,	8,	5,	2,	26,	5,	52,	8,	36,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1643,	77,	"Patrick Queen",	0,	51,	0,	"",	"",	"",	"",	"",	"",	"",	55,	62,	0,	0,	1,	3,	5,	6,	3,	25,	5,	53,	8,	39,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1644,	77,	"Joe Faga",	0,	52,	0,	"",	"",	"",	"",	"",	"",	"",	60,	58,	0,	0,	1,	2,	6,	5,	4,	26,	5,	52,	8,	40,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1645,	77,	"David Kunkleman",	0,	53,	0,	"",	"",	"",	"",	"",	"",	"",	57,	63,	0,	0,	0,	5,	4,	5,	4,	27,	5,	53,	8,	40,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		[	1646,	77,	"Emily Valandingham",	0,	54,	0,	"",	"",	"",	"",	"",	"",	"x",	89,	77,	0,	0,	0,	0,	0,	3,	15,	35,	5,	76,	8,	55,	5,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54,	],
		
		[	1647,	78,	"Joe Milacek",	3,	0,	0,	"",	"",	"",	"",	"",	"",	"",	38,	39,	0,	1,	11,	6,	0,	0,	0,	14,	4,	42,	10,	21,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1648,	78,	"Connor Mazza",	10,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	40,	34,	0,	3,	11,	3,	1,	0,	0,	11,	4,	43,	10,	20,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1649,	78,	"Ben Reeb",	9,	0,	0,	"",	"",	"",	"",	"",	"",	"",	37,	39,	0,	2,	10,	6,	0,	0,	0,	15,	4,	41,	10,	20,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1650,	78,	"Robert McArthur",	2,	1,	1.71,	"",	"",	"",	"",	"",	"",	"",	36,	44,	0,	2,	10,	4,	1,	0,	1,	16,	4,	45,	10,	19,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1651,	78,	"Justin Scribner",	0,	2,	1.14,	"",	"",	"",	"",	"",	"",	"",	41,	43,	0,	1,	7,	7,	3,	0,	0,	18,	4,	44,	10,	22,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1652,	78,	"Elliot Mork",	2,	3,	0.95,	"",	"",	"",	"",	"",	"",	"",	44,	39,	0,	2,	6,	9,	0,	0,	1,	14,	4,	49,	10,	20,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1653,	78,	"Steve Sillato",	6,	4,	0.76,	"",	"",	"",	"",	"",	"",	"",	39,	42,	0,	1,	9,	7,	0,	1,	0,	15,	4,	47,	10,	19,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1654,	78,	"Brandon Clarke",	4,	4,	0.76,	"",	"",	"",	"",	"x",	"",	"",	42,	41,	0,	3,	6,	6,	1,	2,	0,	15,	4,	50,	10,	18,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1655,	78,	"Graydon Spanner",	0,	4,	0.76,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	0,	6,	9,	3,	0,	0,	16,	4,	48,	10,	23,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1656,	78,	"Brad Schimmoeller",	5,	7,	0.57,	"",	"",	"",	"",	"",	"",	"",	40,	43,	0,	0,	9,	8,	0,	1,	0,	14,	4,	44,	10,	25,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1657,	78,	"Tim Collins",	3,	8,	0.48,	"",	"",	"",	"",	"",	"",	"",	45,	41,	0,	1,	6,	7,	4,	0,	0,	17,	4,	47,	10,	22,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1658,	78,	"Kurt Ritzman",	2,	9,	0.33,	"",	"",	"",	"",	"",	"",	"",	45,	43,	0,	1,	6,	6,	4,	1,	0,	15,	4,	51,	10,	22,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1659,	78,	"Fred Miller",	0,	9,	0.33,	"",	"",	"",	"",	"",	"",	"",	43,	47,	0,	2,	4,	8,	1,	2,	1,	17,	4,	48,	10,	25,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1660,	78,	"John Young",	8,	11,	0.19,	"",	"",	"",	"",	"",	"",	"",	39,	44,	0,	1,	9,	5,	2,	1,	0,	14,	4,	46,	10,	23,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1661,	78,	"Matthew Schaade",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	44,	48,	0,	1,	4,	8,	3,	1,	1,	14,	4,	55,	10,	23,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1662,	78,	"Matt Bigelow",	3,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	6,	7,	5,	0,	0,	19,	4,	48,	10,	22,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1663,	78,	"Mathew Mayo",	0,	12,	0.08,	"",	"",	"",	"",	"",	"x",	"",	49,	43,	0,	1,	4,	7,	5,	0,	1,	15,	4,	52,	10,	25,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1664,	78,	"David Knowles",	10,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	41,	43,	0,	1,	7,	9,	0,	0,	1,	15,	4,	45,	10,	24,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1665,	78,	"Sundar Digumarthy",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	5,	6,	5,	2,	0,	17,	4,	53,	10,	24,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1666,	78,	"Tucker Wilkinson",	4,	17,	0,	"",	"",	"",	"",	"",	"",	"",	42,	49,	0,	1,	6,	5,	4,	1,	1,	19,	4,	49,	10,	23,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1667,	78,	"Jason Strickland",	1,	17,	0,	"",	"",	"",	"",	"",	"",	"",	45,	49,	0,	0,	4,	8,	4,	2,	0,	16,	4,	53,	10,	25,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1668,	78,	"Marty Leedy",	0,	19,	0,	"",	"",	"x",	"",	"",	"",	"",	48,	50,	0,	0,	4,	5,	6,	3,	0,	18,	4,	55,	10,	25,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1669,	78,	"Brian Spangenberg",	5,	20,	0,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	2,	4,	4,	4,	4,	0,	18,	4,	51,	10,	25,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1670,	78,	"Eric Heberle",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	49,	50,	0,	0,	3,	7,	5,	2,	1,	15,	4,	56,	10,	28,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1671,	78,	"Kalib Amos",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	49,	50,	0,	0,	4,	6,	4,	3,	1,	21,	4,	53,	10,	25,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1672,	78,	"Paul Miller",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	52,	49,	0,	1,	1,	9,	3,	1,	3,	22,	4,	56,	10,	23,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1673,	78,	"Dana Rose",	3,	24,	0,	"",	"",	"",	"",	"",	"",	"",	48,	51,	0,	0,	2,	9,	4,	2,	1,	19,	4,	52,	10,	28,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1674,	78,	"Seth Wehner",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	49,	55,	0,	0,	4,	4,	6,	2,	2,	19,	4,	54,	10,	31,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1675,	78,	"Bradley Rose",	3,	26,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	2,	8,	4,	2,	2,	19,	4,	53,	10,	30,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1676,	78,	"John Hanley",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	49,	56,	0,	0,	1,	7,	6,	3,	1,	18,	4,	59,	10,	28,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1677,	78,	"Ryan Coady",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	55,	50,	0,	0,	0,	7,	7,	4,	0,	19,	4,	57,	10,	29,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1678,	78,	"Kevin Bindel",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	2,	5,	6,	3,	2,	21,	4,	56,	10,	29,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1679,	78,	"Patrick Affourtit",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	55,	51,	0,	0,	1,	6,	6,	4,	1,	21,	4,	57,	10,	28,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1680,	78,	"Ian Schambach",	0,	31,	0,	"",	"x",	"",	"",	"",	"",	"",	49,	58,	0,	0,	3,	5,	4,	4,	2,	24,	4,	57,	10,	26,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1681,	78,	"Corinne Bigelow",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	53,	55,	0,	0,	1,	8,	4,	1,	4,	17,	4,	60,	10,	31,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1682,	78,	"David Kunkleman",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	56,	57,	0,	0,	0,	5,	6,	4,	3,	17,	4,	68,	10,	28,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1683,	78,	"Jeff Gilligan",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	55,	59,	0,	0,	3,	2,	4,	5,	4,	20,	4,	65,	10,	29,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1684,	78,	"Joe Faga",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	54,	62,	0,	0,	1,	4,	5,	3,	5,	22,	4,	60,	10,	34,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		[	1685,	78,	"Dustin Schmidt",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"x",	56,	62,	0,	0,	1,	4,	4,	5,	4,	18,	4,	67,	10,	33,	4,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39,	],
		
		[	1686,	79,	"Steve Sillato",	5,	0,	0,	"",	"",	"",	"x",	"x",	"",	"",	38,	41,	0,	0,	13,	4,	0,	1,	0,	16,	4,	43,	10,	20,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1687,	79,	"Fred Miller",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	39,	50,	0,	0,	8,	6,	1,	3,	0,	15,	4,	52,	10,	22,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1688,	79,	"Tim Collins",	3,	2,	0.78,	"",	"",	"",	"",	"",	"",	"",	42,	45,	0,	2,	7,	4,	3,	1,	1,	12,	4,	49,	10,	26,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1689,	79,	"Justin Scribner",	2,	2,	0.78,	"",	"",	"",	"",	"",	"",	"",	47,	41,	0,	1,	7,	6,	2,	1,	1,	16,	4,	50,	10,	22,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1690,	79,	"Bradley Rose",	1,	2,	0.78,	"",	"",	"",	"",	"",	"",	"",	47,	42,	0,	1,	3,	11,	2,	1,	0,	16,	4,	48,	10,	25,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1691,	79,	"Robert McArthur",	3,	5,	0.45,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	0,	6,	9,	2,	1,	0,	17,	4,	49,	10,	22,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1692,	79,	"Brandon Clarke",	5,	5,	0.45,	"",	"",	"",	"",	"",	"",	"",	40,	46,	0,	2,	6,	6,	3,	0,	1,	15,	4,	51,	10,	20,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1693,	79,	"Doug Short",	2,	5,	0.45,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	1,	3,	10,	4,	0,	0,	17,	4,	50,	10,	22,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1694,	79,	"Brent Huddleston",	1,	5,	0.45,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	6,	7,	4,	1,	0,	15,	4,	54,	10,	21,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1695,	79,	"Jason Strickland",	1,	5,	0.45,	"",	"",	"",	"",	"",	"",	"",	42,	48,	0,	0,	8,	5,	3,	1,	1,	13,	4,	50,	10,	27,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1696,	79,	"Dana Rose",	3,	10,	0.23,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	1,	3,	11,	2,	1,	0,	15,	4,	51,	10,	23,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1697,	79,	"Gregory Hetterscheidt",	13,	11,	0.1,	"",	"",	"",	"",	"",	"",	"",	41,	40,	0,	1,	8,	8,	1,	0,	0,	16,	4,	44,	10,	21,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1698,	79,	"Elliot Mork",	4,	11,	0.1,	"",	"",	"",	"",	"",	"",	"",	44,	46,	0,	0,	5,	9,	3,	1,	0,	18,	4,	50,	10,	22,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1699,	79,	"Chris Pike",	0,	11,	0.1,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	0,	3,	9,	5,	1,	0,	17,	4,	51,	10,	26,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1700,	79,	"Sundar Digumarthy",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	1,	2,	9,	4,	1,	1,	17,	4,	53,	10,	25,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1701,	79,	"Doug Hart",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	53,	43,	0,	1,	3,	7,	4,	2,	1,	15,	4,	55,	10,	26,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1702,	79,	"Hamza Khaliq",	15,	16,	0.02,	"",	"",	"",	"",	"",	"x",	"",	39,	43,	0,	2,	8,	6,	1,	0,	1,	12,	4,	48,	10,	22,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1703,	79,	"Kalib Amos",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	44,	53,	0,	0,	4,	9,	3,	0,	2,	17,	4,	57,	10,	23,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1704,	79,	"Mathew Mayo",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	51,	46,	0,	1,	3,	7,	4,	1,	2,	15,	4,	56,	10,	26,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1705,	79,	"Michael McGuire",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	52,	45,	0,	0,	4,	6,	5,	3,	0,	16,	4,	56,	10,	25,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1706,	79,	"Graydon Spanner",	0,	20,	0,	"",	"",	"x",	"",	"",	"",	"",	48,	50,	0,	0,	4,	5,	6,	3,	0,	19,	4,	54,	10,	25,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1707,	79,	"Justin Kudela",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	51,	50,	0,	0,	5,	4,	4,	3,	2,	14,	4,	61,	10,	26,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1708,	79,	"John Hanley",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	50,	53,	0,	0,	2,	5,	7,	4,	0,	20,	4,	56,	10,	27,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1709,	79,	"Seth Wehner",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	49,	54,	0,	0,	4,	2,	8,	3,	1,	19,	4,	55,	10,	29,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1710,	79,	"Tucker Wilkinson",	4,	24,	0,	"",	"",	"",	"",	"",	"",	"",	49,	51,	0,	1,	3,	4,	7,	1,	2,	21,	4,	54,	10,	25,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1711,	79,	"Marty Leedy",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	50,	54,	0,	1,	2,	7,	4,	1,	3,	16,	4,	59,	10,	29,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1712,	79,	"Paul Miller",	0,	24,	0,	"",	"x",	"",	"",	"",	"",	"",	46,	58,	0,	0,	2,	8,	3,	2,	3,	19,	4,	58,	10,	27,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1713,	79,	"Tavis Nelson",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	49,	55,	0,	0,	2,	5,	7,	3,	1,	20,	4,	56,	10,	28,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1714,	79,	"Michael Perry",	2,	28,	0,	"",	"",	"",	"",	"",	"",	"",	55,	50,	0,	1,	2,	7,	2,	3,	3,	26,	4,	57,	10,	22,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1715,	79,	"David Kunkleman",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	4,	5,	3,	3,	3,	16,	4,	58,	10,	33,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1716,	79,	"Steve Friday",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	55,	53,	0,	0,	2,	6,	4,	4,	2,	18,	4,	65,	10,	25,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1717,	79,	"Jason Smelser",	2,	31,	0,	"",	"",	"",	"",	"",	"",	"",	56,	51,	0,	0,	2,	7,	3,	3,	3,	18,	4,	58,	10,	31,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1718,	79,	"David Lacki",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	56,	54,	0,	0,	2,	5,	3,	5,	3,	23,	4,	63,	10,	24,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1719,	79,	"Joe Faga",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	58,	52,	0,	0,	0,	7,	6,	3,	2,	18,	4,	66,	10,	26,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1720,	79,	"Ryan Coady",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	53,	57,	0,	0,	0,	7,	4,	5,	2,	20,	4,	63,	10,	27,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1721,	79,	"Eric Heberle",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	58,	53,	0,	0,	2,	1,	10,	2,	3,	21,	4,	58,	10,	32,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1722,	79,	"John Young",	8,	36,	0,	"",	"",	"",	"",	"",	"",	"",	56,	48,	0,	2,	3,	3,	6,	1,	3,	20,	4,	63,	10,	21,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1723,	79,	"Kevin Bindel",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	56,	57,	0,	0,	0,	6,	6,	2,	4,	21,	4,	60,	10,	32,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1724,	79,	"Patrick Affourtit",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	57,	61,	0,	0,	0,	3,	7,	4,	4,	22,	4,	67,	10,	29,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1725,	79,	"Dustin Schmidt",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	60,	62,	0,	0,	1,	2,	6,	3,	6,	17,	4,	71,	10,	34,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1726,	79,	"Jeff Gilligan",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	59,	67,	0,	0,	1,	1,	7,	3,	6,	23,	4,	72,	10,	31,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		[	1727,	79,	"Alex Passafiume",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"x",	79,	75,	0,	0,	0,	0,	3,	4,	11,	36,	4,	87,	10,	31,	4,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42,	],
		
		[	1728,	80,	"Connor Mazza",	11,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	39,	39,	1,	0,	10,	6,	1,	0,	0,	15,	4,	42,	10,	21,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1729,	80,	"Tim Collins",	1,	1,	1.12,	"",	"",	"",	"",	"",	"",	"",	40,	41,	0,	0,	11,	5,	2,	0,	0,	13,	4,	46,	10,	22,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1730,	80,	"Graydon Spanner",	0,	2,	0.68,	"",	"",	"",	"",	"",	"",	"",	43,	41,	0,	2,	6,	7,	2,	1,	0,	13,	4,	50,	10,	21,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1731,	80,	"Jason Strickland",	0,	2,	0.68,	"",	"",	"",	"",	"",	"",	"",	43,	41,	0,	0,	8,	8,	2,	0,	0,	13,	4,	47,	10,	24,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1732,	80,	"Robert McArthur",	4,	4,	0.56,	"",	"",	"",	"",	"",	"",	"",	40,	41,	0,	0,	10,	7,	1,	0,	0,	13,	4,	46,	10,	22,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1733,	80,	"Brandon Clarke",	5,	5,	0.5,	"",	"x",	"",	"",	"",	"",	"",	36,	45,	0,	2,	7,	7,	2,	0,	0,	14,	4,	46,	10,	21,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1734,	80,	"Fred Miller",	0,	6,	0.43,	"",	"",	"",	"",	"",	"",	"",	43,	44,	0,	0,	7,	7,	4,	0,	0,	14,	4,	47,	10,	26,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1735,	80,	"Justin Scribner",	2,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	40,	46,	0,	1,	8,	5,	2,	2,	0,	15,	4,	48,	10,	23,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1736,	80,	"Jason Smelser",	0,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	43,	45,	0,	1,	5,	8,	3,	1,	0,	16,	4,	50,	10,	22,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1737,	80,	"Sundar Digumarthy",	0,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	0,	5,	10,	3,	0,	0,	17,	4,	48,	10,	23,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1738,	80,	"Kalib Amos",	0,	10,	0.19,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	0,	6,	8,	3,	1,	0,	15,	4,	49,	10,	25,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1739,	80,	"David Knowles",	7,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	39,	44,	0,	0,	9,	7,	2,	0,	0,	14,	4,	47,	10,	22,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1740,	80,	"Elliot Mork",	4,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	41,	45,	0,	0,	8,	8,	1,	0,	1,	14,	4,	50,	10,	22,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1741,	80,	"Steven Baybutt",	5,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	0,	5,	12,	1,	0,	0,	16,	4,	47,	10,	23,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1742,	80,	"Ian Schambach",	0,	13,	0.05,	"",	"",	"",	"",	"",	"",	"",	44,	47,	0,	0,	4,	11,	2,	0,	1,	16,	4,	53,	10,	22,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1743,	80,	"John Young",	8,	15,	0.03,	"",	"",	"x",	"",	"",	"",	"",	41,	43,	0,	0,	7,	10,	1,	0,	0,	16,	4,	45,	10,	23,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1744,	80,	"Joe Milacek",	6,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	41,	49,	0,	0,	8,	5,	4,	0,	1,	14,	4,	52,	10,	24,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1745,	80,	"Bradley Rose",	2,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	46,	48,	0,	0,	6,	7,	0,	5,	0,	21,	4,	50,	10,	23,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1746,	80,	"John Hanley",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	52,	46,	0,	0,	3,	8,	3,	4,	0,	17,	4,	54,	10,	27,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1747,	80,	"Brad Schimmoeller",	5,	19,	0,	"",	"",	"",	"",	"",	"",	"",	46,	48,	0,	0,	2,	11,	4,	1,	0,	15,	4,	55,	10,	24,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1748,	80,	"Michael Perry",	2,	20,	0,	"",	"",	"",	"",	"",	"",	"",	52,	46,	0,	1,	3,	6,	5,	2,	1,	19,	4,	54,	10,	25,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1749,	80,	"Mathew Mayo",	0,	20,	0,	"",	"",	"",	"",	"x",	"x",	"",	46,	54,	0,	3,	1,	2,	10,	1,	1,	17,	4,	63,	10,	20,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1750,	80,	"Doug Short",	2,	22,	0,	"",	"",	"",	"",	"",	"",	"",	51,	48,	0,	0,	3,	5,	8,	2,	0,	16,	4,	55,	10,	28,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1751,	80,	"Jeff Gilligan",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	47,	55,	0,	0,	3,	5,	6,	3,	1,	21,	4,	54,	10,	27,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1752,	80,	"David Kunkleman",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	52,	51,	0,	0,	3,	8,	3,	1,	3,	18,	4,	56,	10,	29,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1753,	80,	"Eric Heberle",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	51,	52,	0,	0,	6,	3,	4,	2,	3,	15,	4,	63,	10,	25,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1754,	80,	"Paul Miller",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	52,	51,	0,	0,	2,	4,	9,	3,	0,	17,	4,	58,	10,	28,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1755,	80,	"Joe Faga",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	50,	55,	0,	0,	2,	4,	8,	3,	1,	18,	4,	61,	10,	26,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1756,	80,	"Marty Leedy",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	49,	56,	0,	0,	1,	7,	6,	3,	1,	17,	4,	61,	10,	27,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		[	1757,	80,	"Patrick Affourtit",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"x",	56,	58,	0,	0,	0,	4,	7,	4,	3,	20,	4,	63,	10,	31,	4,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30,	],
		
		[	1758,	81,	"Brandon Clarke",	6,	1,	1.12,	"",	"",	"",	"x",	"",	"",	"",	41,	40,	0,	1,	10,	5,	1,	1,	0,	13,	4,	46,	10,	22,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1759,	81,	"Tony Rose",	5,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	42,	41,	0,	2,	8,	5,	1,	2,	0,	15,	4,	50,	10,	18,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1760,	81,	"Steve Sillato",	4,	3,	0.59,	"",	"",	"",	"",	"",	"",	"",	45,	41,	1,	0,	4,	10,	3,	0,	0,	15,	4,	51,	10,	20,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1761,	81,	"David Knowles",	7,	3,	0.59,	"",	"",	"",	"",	"",	"",	"",	44,	39,	0,	1,	6,	10,	1,	0,	0,	14,	4,	48,	10,	21,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1762,	81,	"Dana Rose",	2,	5,	0.47,	"",	"",	"",	"",	"",	"",	"",	47,	43,	0,	0,	7,	5,	5,	1,	0,	16,	4,	53,	10,	21,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1763,	81,	"Matt Sleeper",	0,	5,	0.47,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	4,	10,	2,	2,	0,	18,	4,	51,	10,	23,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1764,	81,	"Doug Hart",	0,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	48,	45,	0,	0,	6,	6,	4,	1,	1,	14,	4,	57,	10,	22,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1765,	81,	"Steven Baybutt",	4,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	48,	41,	0,	1,	4,	8,	5,	0,	0,	18,	4,	50,	10,	21,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1766,	81,	"Tim Tribbie",	1,	7,	0.31,	"",	"",	"",	"",	"",	"",	"",	46,	46,	0,	1,	2,	11,	2,	2,	0,	16,	4,	55,	10,	21,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1767,	81,	"David Moore",	0,	10,	0.12,	"",	"",	"",	"",	"",	"",	"",	49,	45,	0,	0,	4,	6,	8,	0,	0,	18,	4,	50,	10,	26,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1768,	81,	"Kurt Ritzman",	2,	10,	0.12,	"",	"",	"",	"",	"",	"",	"",	41,	51,	0,	3,	2,	8,	2,	1,	2,	19,	4,	49,	10,	24,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1769,	81,	"Sundar Digumarthy",	0,	10,	0.12,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	0,	5,	6,	5,	2,	0,	16,	4,	55,	10,	23,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1770,	81,	"Jason Smelser",	0,	13,	0.04,	"",	"",	"",	"",	"",	"",	"",	51,	44,	0,	0,	5,	6,	4,	3,	0,	21,	4,	52,	10,	22,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1771,	81,	"Jay Sutter",	5,	13,	0.04,	"",	"",	"",	"",	"",	"",	"",	46,	44,	0,	2,	6,	6,	1,	1,	2,	12,	4,	51,	10,	27,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1772,	81,	"Justin Scribner",	2,	13,	0.04,	"",	"",	"",	"",	"",	"",	"",	46,	47,	0,	2,	2,	7,	6,	0,	1,	17,	4,	53,	10,	23,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1773,	81,	"Matt Bigelow",	2,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	46,	48,	0,	0,	4,	7,	6,	1,	0,	19,	4,	51,	10,	24,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1774,	81,	"Robert McArthur",	6,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	0,	7,	5,	5,	1,	0,	16,	4,	51,	10,	23,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1775,	81,	"John Young",	8,	18,	0,	"",	"",	"",	"",	"",	"",	"",	47,	43,	0,	1,	3,	9,	5,	0,	0,	16,	4,	50,	10,	24,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1776,	81,	"Derek Shannon",	5,	19,	0,	"",	"",	"",	"",	"",	"",	"",	50,	44,	0,	0,	7,	4,	4,	2,	1,	15,	4,	56,	10,	23,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1777,	81,	"Tucker Wilkinson",	4,	19,	0,	"",	"",	"",	"",	"",	"",	"",	52,	43,	0,	0,	5,	4,	8,	1,	0,	15,	4,	55,	10,	25,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1778,	81,	"Devin Johnson",	5,	21,	0,	"",	"",	"",	"",	"x",	"",	"",	47,	48,	0,	0,	3,	8,	6,	1,	0,	19,	4,	53,	10,	23,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1779,	81,	"John Hanley",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	52,	48,	0,	1,	4,	4,	4,	3,	2,	13,	4,	57,	10,	30,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1780,	81,	"Elliot Mork",	4,	23,	0,	"",	"",	"",	"",	"",	"",	"",	46,	52,	0,	0,	4,	6,	5,	2,	1,	19,	4,	54,	10,	25,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1781,	81,	"Michael McGuire",	0,	23,	0,	"",	"",	"x",	"",	"",	"",	"",	51,	51,	0,	0,	1,	5,	11,	1,	0,	18,	4,	59,	10,	25,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1782,	81,	"Brad Schimmoeller",	5,	25,	0,	"",	"",	"",	"",	"",	"",	"",	53,	45,	0,	0,	4,	6,	5,	2,	1,	20,	4,	53,	10,	25,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1783,	81,	"Bradley Rose",	1,	25,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	1,	7,	7,	3,	0,	18,	4,	58,	10,	26,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1784,	81,	"Eric Heberle",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	46,	57,	0,	1,	2,	5,	5,	3,	2,	15,	4,	63,	10,	25,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1785,	81,	"Hamza Khaliq",	11,	25,	0,	"",	"",	"",	"",	"",	"x",	"",	49,	43,	0,	1,	5,	7,	2,	2,	1,	18,	4,	51,	10,	23,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1786,	81,	"Jason Strickland",	1,	25,	0,	"",	"",	"",	"",	"",	"",	"",	51,	51,	0,	0,	2,	8,	3,	4,	1,	17,	4,	60,	10,	25,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1787,	81,	"Mathew Mayo",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	52,	53,	0,	0,	1,	8,	4,	3,	2,	20,	4,	56,	10,	29,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1788,	81,	"Michael Perry",	2,	30,	0,	"",	"",	"",	"",	"",	"",	"",	50,	53,	0,	1,	0,	7,	6,	3,	1,	18,	4,	61,	10,	24,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1789,	81,	"Fred Miller",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	52,	54,	0,	0,	3,	4,	8,	1,	2,	23,	4,	56,	10,	27,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1790,	81,	"Joe Milacek",	6,	32,	0,	"",	"",	"",	"",	"",	"",	"",	53,	47,	0,	0,	4,	6,	5,	1,	2,	17,	4,	58,	10,	25,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1791,	81,	"Joshua Treadway",	8,	34,	0,	"",	"",	"",	"",	"",	"",	"",	48,	51,	0,	0,	5,	4,	5,	3,	1,	15,	4,	62,	10,	22,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1792,	81,	"Marty Leedy",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	56,	51,	0,	0,	3,	4,	6,	2,	3,	16,	4,	61,	10,	30,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1793,	81,	"Jim McGuire",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	58,	51,	0,	0,	2,	5,	4,	4,	3,	18,	4,	61,	10,	30,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1794,	81,	"Patrick Affourtit",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	56,	53,	0,	0,	0,	7,	5,	4,	2,	17,	4,	66,	10,	26,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1795,	81,	"Josh Belknap",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	50,	60,	0,	1,	0,	8,	3,	2,	4,	17,	4,	66,	10,	27,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1796,	81,	"David Kunkleman",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	63,	50,	0,	1,	3,	2,	7,	1,	4,	20,	4,	61,	10,	32,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1797,	81,	"Justin Kudela",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	58,	55,	0,	0,	1,	7,	3,	5,	2,	20,	4,	61,	10,	32,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1798,	81,	"Kalib Amos",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	57,	56,	0,	0,	1,	3,	7,	4,	3,	23,	4,	60,	10,	30,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1799,	81,	"Troy Wagner",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	53,	64,	0,	0,	2,	2,	6,	4,	4,	22,	4,	65,	10,	30,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1800,	81,	"Joe Faga",	0,	43,	0,	"",	"",	"",	"",	"",	"",	"",	63,	57,	0,	0,	1,	5,	4,	1,	7,	15,	4,	72,	10,	33,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1801,	81,	"Corinne Bigelow",	0,	44,	0,	"",	"",	"",	"",	"",	"",	"",	65,	58,	0,	0,	0,	5,	4,	2,	7,	26,	4,	61,	10,	36,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1802,	81,	"Matt Arrasmith",	0,	45,	0,	"",	"",	"",	"",	"",	"",	"",	60,	64,	0,	0,	1,	2,	4,	4,	7,	23,	4,	71,	10,	30,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1803,	81,	"David Lacki",	0,	46,	0,	"",	"",	"",	"",	"",	"",	"",	63,	62,	0,	1,	0,	1,	6,	5,	5,	24,	4,	74,	10,	27,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1804,	81,	"Justin Tuente",	0,	47,	0,	"",	"x",	"",	"",	"",	"",	"",	61,	79,	0,	0,	0,	2,	5,	1,	10,	24,	4,	82,	10,	34,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		[	1805,	81,	"Jeff Gilligan",	0,	48,	0,	"",	"",	"",	"",	"",	"",	"x",	76,	76,	0,	0,	0,	2,	1,	2,	13,	28,	4,	85,	10,	39,	4,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48,	],
		
		[	1806,	82,	"Steve Sillato",	3,	1,	1.26,	"",	"",	"",	"x",	"",	"",	"",	42,	39,	0,	2,	9,	3,	4,	0,	0,	15,	4,	46,	10,	20,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1807,	82,	"Jason Smelser",	0,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	44,	43,	0,	1,	4,	11,	1,	1,	0,	15,	4,	49,	10,	23,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1808,	82,	"David Knowles",	7,	3,	0.7,	"",	"",	"",	"",	"",	"",	"",	41,	41,	0,	3,	7,	3,	5,	0,	0,	18,	4,	46,	10,	18,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1809,	82,	"Christopher Dillon",	3,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	44,	43,	0,	0,	8,	7,	1,	2,	0,	15,	4,	51,	10,	21,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1810,	82,	"Kalib Amos",	0,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	1,	4,	8,	4,	1,	0,	15,	4,	51,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1811,	82,	"David Moore",	0,	6,	0.49,	"",	"",	"",	"",	"",	"",	"",	49,	42,	0,	0,	5,	7,	6,	0,	0,	18,	4,	47,	10,	26,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1812,	82,	"Dana Rose",	2,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	1,	3,	9,	5,	0,	0,	14,	4,	51,	10,	25,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1813,	82,	"Devin Johnson",	4,	7,	0.39,	"",	"",	"",	"",	"",	"",	"",	46,	42,	0,	3,	4,	6,	3,	1,	1,	17,	4,	49,	10,	22,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1814,	82,	"Derek Shannon",	5,	9,	0.28,	"",	"",	"",	"",	"",	"",	"",	44,	44,	0,	1,	5,	8,	3,	1,	0,	17,	4,	48,	10,	23,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1815,	82,	"Justin Scribner",	2,	10,	0.18,	"",	"",	"",	"",	"",	"",	"",	47,	45,	0,	1,	5,	7,	3,	1,	1,	16,	4,	48,	10,	28,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1816,	82,	"Tony Rose",	6,	10,	0.18,	"",	"",	"",	"",	"",	"",	"",	47,	41,	0,	1,	8,	3,	4,	2,	0,	14,	4,	49,	10,	25,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1817,	82,	"Chris Pike",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	50,	45,	0,	1,	4,	6,	4,	2,	1,	16,	4,	54,	10,	25,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1818,	82,	"Steven Baybutt",	4,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	0,	5,	9,	2,	2,	0,	13,	4,	50,	10,	28,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1819,	82,	"Brad Rose",	0,	14,	0.04,	"",	"",	"",	"",	"x",	"",	"",	50,	46,	0,	0,	6,	6,	1,	4,	1,	17,	4,	55,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1820,	82,	"Jason Strickland",	0,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	1,	2,	6,	8,	1,	0,	16,	4,	53,	10,	27,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1821,	82,	"Robert McArthur",	6,	14,	0.04,	"",	"",	"",	"",	"",	"",	"",	43,	47,	0,	3,	5,	3,	3,	4,	0,	18,	4,	49,	10,	23,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1822,	82,	"Brad Schimmoeller",	5,	17,	0,	"",	"",	"",	"",	"",	"",	"",	50,	42,	0,	0,	4,	11,	1,	1,	1,	16,	4,	51,	10,	25,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1823,	82,	"Todd Hamilton",	6,	17,	0,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	2,	4,	4,	7,	1,	0,	16,	4,	49,	10,	26,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1824,	82,	"Tucker Wilkinson",	4,	17,	0,	"",	"",	"",	"",	"",	"",	"",	44,	49,	0,	0,	6,	7,	2,	2,	1,	18,	4,	53,	10,	22,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1825,	82,	"Doug Hart",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	4,	6,	5,	2,	1,	19,	4,	55,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1826,	82,	"Elliot Mork",	4,	20,	0,	"",	"",	"",	"",	"",	"x",	"",	44,	50,	0,	1,	5,	5,	4,	2,	1,	16,	4,	52,	10,	26,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1827,	82,	"John Young",	7,	20,	0,	"",	"",	"",	"",	"",	"",	"",	42,	49,	0,	1,	4,	7,	5,	1,	0,	15,	4,	50,	10,	26,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1828,	82,	"Dan Loper",	6,	23,	0,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	2,	2,	7,	5,	1,	1,	15,	4,	55,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1829,	82,	"Joe Milacek",	6,	23,	0,	"",	"",	"x",	"",	"",	"",	"",	51,	43,	0,	1,	2,	8,	6,	1,	0,	18,	4,	51,	10,	25,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1830,	82,	"Joshua Treadway",	6,	23,	0,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	1,	4,	6,	5,	1,	1,	13,	4,	52,	10,	29,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1831,	82,	"Brandon Clarke",	7,	26,	0,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	2,	11,	4,	1,	0,	20,	4,	51,	10,	23,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1832,	82,	"Kurt Ritzman",	1,	27,	0,	"",	"",	"",	"",	"",	"",	"",	55,	46,	0,	1,	4,	5,	4,	2,	2,	21,	4,	56,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1833,	82,	"Jim McGuire",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	55,	48,	0,	0,	4,	5,	3,	5,	1,	16,	4,	58,	10,	29,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1834,	82,	"Sundar Digumarthy",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	50,	54,	0,	0,	6,	2,	4,	2,	4,	21,	4,	56,	10,	27,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1835,	82,	"Tim Collins",	3,	30,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	1,	1,	7,	4,	4,	1,	18,	4,	57,	10,	27,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1836,	82,	"Patrick Affourtit",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	52,	53,	0,	0,	1,	5,	9,	2,	1,	19,	4,	57,	10,	29,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1837,	82,	"Doug Short",	1,	30,	0,	"",	"",	"",	"",	"",	"",	"",	55,	49,	0,	1,	3,	6,	4,	3,	1,	27,	4,	53,	10,	24,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1838,	82,	"John Hanley",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	49,	57,	0,	0,	3,	7,	0,	5,	3,	22,	4,	61,	10,	23,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1839,	82,	"Eric Heberle",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	56,	51,	0,	0,	3,	3,	6,	4,	2,	17,	4,	59,	10,	31,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1840,	82,	"Michael Rocco",	0,	34,	0,	"",	"x",	"",	"",	"",	"",	"",	49,	58,	0,	1,	2,	7,	2,	2,	4,	16,	4,	60,	10,	31,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1841,	82,	"Ben Gramza",	4,	36,	0,	"",	"",	"",	"",	"",	"",	"",	57,	48,	0,	0,	3,	5,	5,	3,	2,	21,	4,	62,	10,	22,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1842,	82,	"Matt Arrasmith",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	52,	58,	0,	0,	4,	1,	8,	2,	3,	15,	4,	61,	10,	34,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1843,	82,	"David Kunkleman",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	53,	60,	0,	0,	0,	5,	6,	4,	3,	19,	4,	64,	10,	30,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1844,	82,	"Jeff Gilligan",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	55,	60,	0,	0,	1,	4,	6,	3,	4,	24,	4,	64,	10,	27,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1845,	82,	"Fred Miller",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	61,	57,	0,	0,	0,	5,	5,	3,	5,	22,	4,	64,	10,	32,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1846,	82,	"Michael Perry",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	58,	60,	0,	0,	0,	6,	3,	5,	4,	27,	4,	65,	10,	26,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1847,	82,	"Tavis Nelson",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	59,	59,	0,	0,	0,	7,	4,	2,	5,	18,	4,	70,	10,	30,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1848,	82,	"Zachary Amos",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	60,	58,	0,	0,	2,	3,	4,	4,	5,	18,	4,	73,	10,	27,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		[	1849,	82,	"Emily Valandingham",	0,	44,	0,	"",	"",	"",	"",	"",	"",	"x",	64,	66,	0,	0,	0,	1,	8,	3,	6,	23,	4,	68,	10,	39,	4,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44,	],
		
		[	1850,	83,	"David Knowles",	7,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	38,	37,	0,	3,	10,	4,	1,	0,	0,	14,	4,	41,	10,	20,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1851,	83,	"Jay Carleton",	12,	0,	0,	"",	"",	"",	"",	"",	"",	"",	39,	37,	0,	2,	10,	6,	0,	0,	0,	14,	4,	44,	10,	18,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1852,	83,	"Jay Sutter",	5,	0,	0,	"",	"",	"",	"",	"",	"",	"",	38,	40,	0,	1,	11,	5,	1,	0,	0,	14,	4,	43,	10,	21,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1853,	83,	"Elliot Mork",	4,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	39,	41,	0,	4,	6,	5,	2,	1,	0,	15,	4,	43,	10,	22,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1854,	83,	"Jason Smelser",	1,	2,	0.9,	"",	"",	"",	"",	"",	"",	"",	47,	40,	0,	0,	8,	6,	3,	1,	0,	16,	4,	45,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1855,	83,	"Doug Hart",	0,	3,	0.64,	"",	"",	"",	"",	"",	"",	"",	46,	43,	0,	1,	5,	8,	2,	2,	0,	16,	4,	50,	10,	23,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1856,	83,	"Kurt Ritzman",	0,	3,	0.64,	"",	"",	"",	"",	"",	"",	"",	44,	45,	0,	0,	9,	5,	1,	2,	1,	14,	4,	51,	10,	24,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1857,	83,	"Matthew Schaade",	0,	3,	0.64,	"",	"",	"",	"",	"",	"",	"",	41,	48,	0,	0,	8,	6,	2,	1,	1,	12,	4,	50,	10,	27,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1858,	83,	"Tony Rose",	6,	3,	0.64,	"",	"",	"",	"",	"",	"",	"",	39,	44,	0,	0,	11,	6,	0,	0,	1,	14,	4,	49,	10,	20,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1859,	83,	"Christopher Dillon",	3,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	44,	43,	0,	1,	5,	8,	4,	0,	0,	18,	4,	46,	10,	23,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1860,	83,	"Doug Short",	1,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	1,	3,	11,	2,	1,	0,	16,	4,	49,	10,	24,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1861,	83,	"Justin Scribner",	2,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	46,	42,	0,	0,	7,	8,	1,	2,	0,	15,	4,	51,	10,	22,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1862,	83,	"Steve Sillato",	3,	7,	0.34,	"",	"",	"",	"",	"",	"",	"",	46,	41,	0,	1,	9,	3,	3,	1,	1,	15,	4,	50,	10,	22,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1863,	83,	"David Moore",	0,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	48,	43,	0,	0,	7,	4,	6,	1,	0,	13,	4,	52,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1864,	83,	"Connor Mazza",	11,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	41,	40,	0,	3,	8,	3,	3,	1,	0,	14,	4,	43,	10,	24,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1865,	83,	"Dana Rose",	1,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	48,	44,	0,	1,	4,	9,	3,	0,	1,	14,	4,	57,	10,	21,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1866,	83,	"Gregory Hetterscheidt",	13,	13,	0.06,	"",	"x",	"",	"",	"",	"x",	"",	36,	44,	0,	1,	11,	3,	3,	0,	0,	13,	4,	44,	10,	23,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1867,	83,	"Eric Heberle",	0,	15,	0.03,	"",	"",	"",	"",	"x",	"",	"",	44,	50,	0,	0,	6,	6,	3,	2,	1,	13,	4,	55,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1868,	83,	"Jason Strickland",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	3,	9,	5,	1,	0,	18,	4,	48,	10,	28,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1869,	83,	"Kalib Amos",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	53,	42,	0,	0,	4,	6,	7,	1,	0,	18,	4,	52,	10,	25,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1870,	83,	"Derek Shannon",	4,	18,	0,	"",	"",	"",	"",	"",	"",	"",	44,	48,	0,	0,	8,	5,	1,	3,	1,	17,	4,	49,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1871,	83,	"Graydon Spanner",	2,	18,	0,	"",	"",	"",	"",	"",	"",	"",	50,	44,	0,	2,	3,	8,	1,	3,	1,	15,	4,	54,	10,	25,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1872,	83,	"Jim McGuire",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	51,	45,	0,	0,	5,	6,	4,	2,	1,	18,	4,	54,	10,	24,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1873,	83,	"Michael McGuire",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	48,	48,	0,	1,	1,	8,	7,	1,	0,	16,	4,	55,	10,	25,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1874,	83,	"Paul Miller",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	51,	45,	0,	1,	4,	6,	4,	2,	1,	18,	4,	55,	10,	23,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1875,	83,	"Joe Milacek",	6,	23,	0,	"",	"",	"",	"",	"",	"",	"",	48,	43,	0,	0,	5,	9,	3,	0,	1,	13,	4,	52,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1876,	83,	"Matt Bigelow",	2,	24,	0,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	1,	4,	6,	4,	1,	2,	16,	4,	54,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1877,	83,	"Brad Rose",	0,	25,	0,	"",	"",	"x",	"",	"",	"",	"",	52,	47,	0,	0,	2,	9,	4,	2,	1,	16,	4,	56,	10,	27,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1878,	83,	"Mathew Mayo",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	54,	49,	0,	0,	4,	6,	5,	2,	1,	19,	4,	58,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1879,	83,	"Matt Sleeper",	0,	26,	0,	"",	"",	"",	"",	"",	"",	"",	57,	46,	0,	0,	1,	10,	3,	3,	1,	17,	4,	56,	10,	30,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1880,	83,	"Steven Baybutt",	3,	26,	0,	"",	"",	"",	"",	"",	"",	"",	57,	43,	0,	2,	2,	4,	7,	2,	1,	19,	4,	55,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1881,	83,	"Corinne Bigelow",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	55,	49,	0,	1,	1,	8,	3,	3,	2,	17,	4,	61,	10,	26,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1882,	83,	"David Lacki",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	52,	53,	0,	0,	3,	4,	5,	5,	1,	20,	4,	57,	10,	28,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1883,	83,	"Fred Miller",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	57,	48,	0,	0,	4,	4,	5,	3,	2,	22,	4,	56,	10,	27,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1884,	83,	"Mike Freeland",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	52,	54,	0,	0,	3,	4,	4,	6,	1,	21,	4,	58,	10,	27,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1885,	83,	"Brian Tiemeier",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	51,	56,	0,	0,	0,	8,	4,	5,	1,	17,	4,	59,	10,	31,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1886,	83,	"David Kunkleman",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	60,	48,	0,	1,	3,	4,	5,	2,	3,	17,	4,	57,	10,	34,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1887,	83,	"Justin Kudela",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	62,	51,	0,	1,	1,	8,	1,	2,	5,	19,	4,	63,	10,	31,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1888,	83,	"Brent Ferrell",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	59,	57,	0,	0,	2,	1,	7,	4,	4,	18,	4,	69,	10,	29,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1889,	83,	"Kevin Bindel",	0,	36,	0,	"",	"",	"",	"",	"",	"",	"",	59,	57,	0,	0,	2,	2,	6,	5,	3,	20,	4,	67,	10,	29,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1890,	83,	"Matt Arrasmith",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	59,	58,	0,	0,	0,	6,	4,	5,	3,	18,	4,	70,	10,	29,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1891,	83,	"Jeff Gilligan",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	64,	57,	0,	0,	1,	6,	1,	5,	5,	20,	4,	64,	10,	37,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1892,	83,	"Patrick Affourtit",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	63,	58,	0,	0,	1,	1,	8,	6,	2,	18,	4,	74,	10,	29,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1893,	83,	"Joe Faga",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"",	66,	66,	0,	0,	0,	2,	5,	4,	7,	27,	4,	78,	10,	27,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1894,	83,	"Gary Grant",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"",	67,	68,	0,	0,	0,	4,	3,	5,	6,	19,	4,	73,	10,	43,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		[	1895,	83,	"Michael Skaff",	0,	43,	0,	"",	"",	"",	"",	"",	"",	"x",	84,	67,	0,	0,	1,	1,	7,	2,	7,	21,	4,	87,	10,	43,	4,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46,	],
		
		[	1896,	84,	"Jason Strickland",	0,	1,	1.35,	"",	"",	"",	"",	"",	"",	"",	41,	41,	0,	0,	11,	4,	3,	0,	0,	14,	4,	45,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1897,	84,	"Steve Sillato",	3,	2,	0.9,	"",	"",	"",	"x",	"",	"x",	"",	38,	42,	0,	2,	9,	4,	3,	0,	0,	12,	4,	47,	10,	21,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1898,	84,	"Doug Hart",	0,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	41,	43,	0,	2,	5,	8,	3,	0,	0,	17,	4,	45,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1899,	84,	"Kurt Ritzman",	0,	4,	0.68,	"",	"",	"",	"",	"",	"",	"",	41,	45,	0,	3,	3,	7,	5,	0,	0,	16,	4,	44,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1900,	84,	"Brandon Clarke",	7,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	43,	37,	0,	1,	9,	7,	1,	0,	0,	14,	4,	45,	10,	21,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1901,	84,	"David Moore",	0,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	42,	45,	0,	0,	6,	9,	3,	0,	0,	16,	4,	49,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1902,	84,	"Doug Short",	1,	5,	0.53,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	0,	5,	12,	1,	0,	0,	16,	4,	48,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1903,	84,	"Brad Schimmoeller",	3,	8,	0.38,	"",	"",	"",	"",	"",	"",	"",	43,	42,	0,	0,	7,	9,	2,	0,	0,	14,	4,	49,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1904,	84,	"Brent Huddleston",	1,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	41,	47,	0,	2,	7,	5,	0,	3,	1,	13,	4,	55,	10,	20,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1905,	84,	"Justin Scribner",	2,	9,	0.23,	"",	"",	"",	"",	"",	"",	"",	41,	46,	0,	0,	9,	6,	2,	0,	1,	14,	4,	46,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1906,	84,	"Mike Freeland",	0,	9,	0.23,	"",	"x",	"",	"",	"",	"",	"",	39,	50,	0,	2,	4,	8,	1,	3,	0,	13,	4,	52,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1907,	84,	"Eric Heberle",	0,	12,	0.08,	"",	"",	"",	"",	"",	"",	"",	48,	42,	0,	0,	6,	8,	2,	2,	0,	14,	4,	51,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1908,	84,	"Derek Shannon",	4,	13,	0.07,	"",	"",	"",	"",	"",	"",	"",	40,	47,	0,	1,	7,	6,	3,	0,	1,	15,	4,	49,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1909,	84,	"David Knowles",	9,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	38,	45,	0,	0,	9,	7,	2,	0,	0,	15,	4,	46,	10,	22,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1910,	84,	"Brent Isner",	4,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	41,	48,	0,	1,	6,	5,	5,	1,	0,	16,	4,	50,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1911,	84,	"Jason Smelser",	1,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	5,	8,	3,	2,	0,	17,	4,	48,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1912,	84,	"Michael Perry",	0,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	50,	43,	0,	0,	3,	10,	4,	1,	0,	16,	4,	53,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1913,	84,	"Chris Pike",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	4,	7,	6,	1,	0,	16,	4,	51,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1914,	84,	"Jim McGuire",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	47,	47,	0,	0,	4,	6,	8,	0,	0,	19,	4,	52,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1915,	84,	"Justin Liu",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	48,	46,	0,	0,	3,	9,	5,	1,	0,	19,	4,	51,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1916,	84,	"Robert McArthur",	6,	18,	0,	"",	"",	"",	"",	"x",	"",	"",	41,	47,	0,	0,	7,	7,	3,	1,	0,	13,	4,	52,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1917,	84,	"Elliot Mork",	5,	22,	0,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	1,	3,	10,	3,	1,	0,	17,	4,	49,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1918,	84,	"Nicholas Jewson",	0,	22,	0,	"",	"",	"x",	"",	"",	"",	"",	46,	49,	0,	0,	5,	9,	2,	0,	2,	15,	4,	52,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1919,	84,	"Patrick Affourtit",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	47,	48,	0,	1,	1,	10,	4,	2,	0,	18,	4,	54,	10,	23,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1920,	84,	"Paul Miller",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	53,	42,	0,	1,	5,	5,	4,	1,	2,	17,	4,	47,	10,	31,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1921,	84,	"Hamza Khaliq",	11,	26,	0,	"",	"",	"",	"",	"",	"",	"",	43,	42,	1,	1,	8,	3,	3,	1,	1,	14,	4,	46,	10,	25,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1922,	84,	"Ben Gramza",	3,	27,	0,	"",	"",	"",	"",	"",	"",	"",	44,	50,	0,	0,	7,	7,	1,	1,	2,	15,	4,	55,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1923,	84,	"Sundar Digumarthy",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	47,	50,	0,	0,	1,	11,	4,	2,	0,	18,	4,	53,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1924,	84,	"Joe Faga",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	48,	50,	0,	0,	4,	4,	8,	2,	0,	14,	4,	56,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1925,	84,	"Justin Kudela",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	49,	50,	0,	0,	4,	5,	5,	4,	0,	16,	4,	53,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1926,	84,	"Mathew Mayo",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	50,	50,	0,	0,	5,	4,	5,	2,	2,	19,	4,	57,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1927,	84,	"Tucker Wilkinson",	4,	32,	0,	"",	"",	"",	"",	"",	"",	"",	48,	49,	0,	0,	4,	5,	7,	2,	0,	16,	4,	54,	10,	27,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1928,	84,	"Martin Dillinger",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	2,	5,	9,	1,	1,	17,	4,	61,	10,	24,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1929,	84,	"Matt Arrasmith",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	0,	3,	6,	4,	4,	1,	15,	4,	58,	10,	29,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1930,	84,	"Matt Simyak",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	47,	56,	0,	0,	2,	7,	5,	3,	1,	16,	4,	57,	10,	30,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1931,	84,	"Tim Collins",	3,	35,	0,	"",	"",	"",	"",	"",	"",	"",	50,	50,	0,	1,	2,	6,	5,	3,	1,	15,	4,	59,	10,	26,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1932,	84,	"Christine Rinella",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	51,	54,	0,	0,	1,	7,	5,	4,	1,	19,	4,	58,	10,	28,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1933,	84,	"David Kunkleman",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	53,	54,	0,	0,	1,	7,	5,	3,	2,	20,	4,	58,	10,	29,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1934,	84,	"Joshua Treadway",	2,	39,	0,	"",	"",	"",	"",	"",	"",	"",	54,	54,	0,	0,	2,	4,	7,	4,	1,	17,	4,	59,	10,	32,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1935,	84,	"Tavis Nelson",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	60,	57,	0,	0,	0,	2,	8,	5,	3,	19,	4,	67,	10,	31,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		[	1936,	84,	"Jeff Gilligan",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"x",	58,	67,	0,	0,	1,	2,	6,	3,	6,	24,	4,	69,	10,	32,	4,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41,	],
		
		[	1937,	85,	"Connor Mazza",	11,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	42,	37,	1,	2,	6,	7,	2,	0,	0,	16,	4,	44,	10,	19,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1938,	85,	"Fred Miller",	0,	1,	1.26,	"",	"",	"",	"",	"",	"",	"",	39,	43,	0,	3,	7,	5,	2,	0,	1,	16,	4,	46,	10,	20,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1939,	85,	"Steve Sillato",	3,	2,	0.84,	"",	"",	"",	"",	"",	"",	"",	41,	39,	0,	2,	9,	4,	3,	0,	0,	13,	4,	48,	10,	19,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1940,	85,	"Brent Huddleston",	2,	3,	0.7,	"",	"",	"",	"",	"",	"x",	"",	40,	42,	0,	0,	12,	4,	1,	0,	1,	13,	4,	48,	10,	21,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1941,	85,	"Derek Shannon",	3,	4,	0.63,	"",	"",	"",	"",	"",	"",	"",	42,	42,	0,	1,	8,	5,	4,	0,	0,	13,	4,	50,	10,	21,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1942,	85,	"Kurt Ritzman",	0,	5,	0.49,	"",	"x",	"",	"",	"",	"",	"",	41,	47,	0,	1,	4,	9,	4,	0,	0,	14,	4,	51,	10,	23,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1943,	85,	"Steven Baybutt",	3,	5,	0.49,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	1,	9,	2,	6,	0,	0,	14,	4,	51,	10,	20,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1944,	85,	"Tony Rose",	5,	5,	0.49,	"",	"",	"",	"",	"",	"",	"",	43,	40,	0,	2,	7,	5,	4,	0,	0,	14,	4,	48,	10,	21,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1945,	85,	"David Moore",	0,	8,	0.32,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	5,	9,	4,	0,	0,	16,	4,	51,	10,	22,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1946,	85,	"Elliot Mork",	5,	8,	0.32,	"",	"",	"",	"",	"x",	"",	"",	43,	41,	0,	2,	8,	4,	2,	2,	0,	13,	4,	49,	10,	22,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1947,	85,	"Jason Strickland",	2,	10,	0.21,	"",	"",	"",	"",	"",	"",	"",	43,	46,	0,	0,	8,	6,	2,	1,	1,	15,	4,	51,	10,	23,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1948,	85,	"Doug Short",	1,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	48,	43,	0,	0,	4,	11,	2,	0,	1,	16,	4,	49,	10,	26,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1949,	85,	"Robert McArthur",	6,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	1,	9,	4,	1,	2,	1,	13,	4,	48,	10,	26,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1950,	85,	"Tim Collins",	3,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	0,	3,	13,	1,	1,	0,	15,	4,	53,	10,	22,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1951,	85,	"Sundar Digumarthy",	0,	14,	0.05,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	1,	2,	7,	7,	1,	0,	15,	4,	53,	10,	27,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1952,	85,	"Christopher Dillon",	3,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	49,	44,	0,	1,	4,	6,	5,	2,	0,	15,	4,	54,	10,	24,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1953,	85,	"Jim McGuire",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	47,	50,	0,	0,	3,	8,	5,	1,	1,	17,	4,	56,	10,	24,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1954,	85,	"Doug Hart",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	53,	45,	0,	0,	7,	3,	4,	3,	1,	15,	4,	58,	10,	25,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1955,	85,	"Paul Miller",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	49,	49,	0,	0,	5,	7,	0,	5,	1,	22,	4,	48,	10,	28,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1956,	85,	"David Kunkleman",	0,	19,	0,	"",	"",	"x",	"",	"",	"",	"",	48,	52,	0,	0,	3,	6,	5,	4,	0,	16,	4,	57,	10,	27,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1957,	85,	"Brad Schimmoeller",	4,	20,	0,	"",	"",	"",	"",	"",	"",	"",	49,	48,	0,	1,	4,	6,	3,	3,	1,	18,	4,	54,	10,	25,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1958,	85,	"Eric Heberle",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	1,	7,	8,	1,	1,	18,	4,	57,	10,	27,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1959,	85,	"Matthew Schaade",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	50,	52,	0,	1,	3,	5,	5,	2,	2,	16,	4,	63,	10,	23,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1960,	85,	"Joe Faga",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	56,	48,	0,	0,	3,	3,	9,	1,	2,	17,	4,	62,	10,	25,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1961,	85,	"Justin Scribner",	2,	24,	0,	"",	"",	"",	"",	"",	"",	"",	58,	46,	0,	1,	3,	5,	6,	0,	3,	20,	4,	60,	10,	24,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1962,	85,	"John Hanley",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	51,	57,	0,	0,	0,	7,	7,	2,	2,	17,	4,	61,	10,	30,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1963,	85,	"Kevin Bindel",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	58,	50,	0,	0,	2,	3,	8,	3,	2,	18,	4,	65,	10,	25,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1964,	85,	"Martin Dillinger",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	56,	53,	0,	0,	0,	5,	8,	4,	1,	20,	4,	61,	10,	28,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1965,	85,	"Matt Arrasmith",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	57,	52,	0,	0,	1,	7,	3,	5,	2,	22,	4,	60,	10,	27,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1966,	85,	"Mike Freeland",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	54,	55,	0,	0,	1,	9,	3,	1,	4,	19,	4,	64,	10,	26,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1967,	85,	"Patrick Affourtit",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	55,	54,	0,	0,	1,	6,	4,	5,	2,	18,	4,	62,	10,	29,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1968,	85,	"Doug Calamari",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	56,	54,	0,	0,	0,	6,	5,	6,	1,	21,	4,	61,	10,	28,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1969,	85,	"Brent Ferrell",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"x",	55,	59,	0,	0,	0,	5,	3,	9,	1,	20,	4,	67,	10,	27,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		[	1970,	85,	"Michael Perry",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"x",	57,	57,	0,	1,	1,	3,	3,	7,	3,	21,	4,	65,	10,	28,	4,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34,	],
		
		[	1971,	86,	"Chris Pike",	0,	1,	1.71,	"",	"",	"",	"",	"",	"",	"",	39,	44,	0,	2,	6,	7,	3,	0,	0,	14,	4,	46,	10,	23,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1972,	86,	"Doug Hart",	0,	2,	1.14,	"",	"",	"",	"",	"",	"",	"",	42,	44,	0,	1,	4,	11,	2,	0,	0,	16,	4,	46,	10,	24,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1973,	86,	"Doug Short",	1,	3,	0.86,	"",	"",	"",	"",	"",	"",	"",	44,	42,	0,	0,	7,	8,	3,	0,	0,	16,	4,	48,	10,	22,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1974,	86,	"Jason Smelser",	1,	3,	0.86,	"",	"",	"",	"",	"",	"",	"",	41,	45,	0,	0,	6,	10,	2,	0,	0,	13,	4,	51,	10,	22,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1975,	86,	"Steve Sillato",	3,	3,	0.86,	"",	"",	"",	"",	"",	"",	"",	42,	42,	0,	2,	6,	7,	2,	1,	0,	14,	4,	52,	10,	18,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1976,	86,	"Ben Gramza",	3,	6,	0.57,	"",	"",	"",	"",	"",	"",	"",	45,	40,	0,	0,	9,	5,	4,	0,	0,	17,	4,	46,	10,	22,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1977,	86,	"Jason Strickland",	4,	6,	0.57,	"",	"",	"",	"",	"",	"",	"",	39,	45,	0,	1,	7,	7,	3,	0,	0,	14,	4,	47,	10,	23,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1978,	86,	"Justin Scribner",	2,	6,	0.57,	"",	"",	"",	"",	"",	"",	"",	42,	44,	0,	0,	9,	6,	1,	2,	0,	13,	4,	51,	10,	22,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1979,	86,	"John Young",	7,	9,	0.33,	"",	"",	"",	"x",	"",	"",	"",	41,	41,	0,	0,	10,	6,	2,	0,	0,	15,	4,	47,	10,	20,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1980,	86,	"Steven Baybutt",	4,	9,	0.33,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	0,	7,	9,	2,	0,	0,	14,	4,	49,	10,	22,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1981,	86,	"Elliot Mork",	5,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	41,	44,	0,	0,	7,	9,	2,	0,	0,	16,	4,	46,	10,	23,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1982,	86,	"Michael Perry",	0,	11,	0.14,	"",	"",	"",	"",	"",	"",	"",	42,	48,	0,	0,	6,	7,	4,	1,	0,	17,	4,	50,	10,	23,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1983,	86,	"Paul Miller",	0,	13,	0.09,	"",	"",	"",	"",	"",	"x",	"",	44,	47,	0,	1,	4,	8,	3,	2,	0,	16,	4,	48,	10,	27,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1984,	86,	"Tim Collins",	3,	14,	0.07,	"",	"",	"",	"",	"",	"",	"",	50,	39,	0,	0,	7,	7,	3,	0,	1,	15,	4,	50,	10,	24,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1985,	86,	"Brent Huddleston",	4,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	41,	48,	0,	1,	3,	10,	4,	0,	0,	18,	4,	48,	10,	23,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1986,	86,	"Kurt Ritzman",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	49,	44,	0,	0,	4,	10,	2,	1,	1,	13,	4,	53,	10,	27,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1987,	86,	"Sundar Digumarthy",	0,	15,	0.04,	"",	"",	"",	"",	"",	"",	"",	43,	50,	0,	1,	3,	8,	5,	0,	1,	17,	4,	48,	10,	28,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1988,	86,	"Jay Carleton",	12,	18,	0,	"",	"",	"",	"",	"",	"",	"",	40,	43,	0,	2,	6,	8,	1,	1,	0,	17,	4,	46,	10,	20,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1989,	86,	"Justin Kudela",	0,	18,	0,	"",	"",	"x",	"",	"",	"",	"",	46,	49,	0,	0,	5,	6,	4,	3,	0,	17,	4,	54,	10,	24,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1990,	86,	"Kalib Amos",	0,	18,	0,	"",	"",	"",	"",	"",	"",	"",	46,	49,	0,	0,	3,	10,	3,	1,	1,	16,	4,	55,	10,	24,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1991,	86,	"Michael McGuire",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	46,	50,	0,	0,	4,	6,	7,	0,	1,	17,	4,	51,	10,	28,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1992,	86,	"Mathew Mayo",	0,	22,	0,	"",	"",	"",	"",	"x",	"",	"",	52,	49,	0,	0,	4,	6,	4,	3,	1,	19,	4,	59,	10,	23,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1993,	86,	"David Kunkleman",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	46,	57,	0,	2,	1,	6,	4,	1,	4,	15,	4,	60,	10,	28,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1994,	86,	"Patrick Affourtit",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	53,	52,	0,	0,	0,	8,	7,	1,	2,	20,	4,	57,	10,	28,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1995,	86,	"David Lacki",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	49,	58,	0,	0,	3,	4,	5,	4,	2,	18,	4,	60,	10,	29,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1996,	86,	"Joe Faga",	0,	25,	0,	"",	"",	"",	"",	"",	"",	"",	52,	55,	0,	0,	2,	6,	3,	6,	1,	17,	4,	61,	10,	29,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1997,	86,	"Fred Miller",	2,	27,	0,	"",	"",	"",	"",	"",	"",	"",	53,	53,	0,	0,	0,	9,	6,	1,	2,	16,	4,	59,	10,	31,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1998,	86,	"Kevin Bindel",	0,	27,	0,	"",	"",	"",	"",	"",	"",	"",	52,	56,	0,	0,	2,	2,	8,	6,	0,	20,	4,	61,	10,	27,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	1999,	86,	"Martin Dillinger",	0,	29,	0,	"",	"",	"",	"",	"",	"",	"",	54,	61,	0,	0,	1,	4,	4,	5,	4,	18,	4,	67,	10,	30,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	2000,	86,	"Jeff Gilligan",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	62,	61,	0,	0,	0,	1,	8,	4,	5,	19,	4,	70,	10,	34,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	2001,	86,	"Michael Skaff",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	57,	67,	0,	0,	0,	5,	3,	5,	5,	31,	4,	65,	10,	28,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		[	2002,	86,	"Matt Arrasmith",	0,	32,	0,	"",	"x",	"",	"",	"",	"",	"x",	55,	73,	0,	0,	1,	2,	8,	2,	5,	27,	4,	64,	10,	37,	4,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32,	],
		
		[	2003,	87,	"Brad Schimmoeller",	2,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	38,	41,	0,	2,	8,	7,	0,	1,	0,	13,	4,	49,	11,	17,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2004,	87,	"Joe Milacek",	3,	1,	1.35,	"W",	"",	"",	"",	"",	"",	"",	39,	43,	0,	2,	8,	5,	2,	0,	1,	14,	4,	48,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2005,	87,	"Christopher Dillon",	3,	2,	0.9,	"L",	"",	"",	"",	"",	"",	"",	41,	41,	0,	2,	6,	7,	3,	0,	0,	14,	4,	52,	11,	16,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2006,	87,	"Steven Baybutt",	3,	3,	0.75,	"",	"",	"",	"",	"",	"",	"",	39,	44,	0,	3,	3,	9,	3,	0,	0,	13,	4,	52,	11,	18,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2007,	87,	"Justin Scribner",	2,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	47,	38,	0,	1,	7,	8,	1,	0,	1,	18,	4,	49,	11,	18,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2008,	87,	"Kurt Ritzman",	0,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	45,	42,	0,	0,	5,	10,	3,	0,	0,	14,	4,	55,	11,	18,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2009,	87,	"Todd Hamilton",	6,	4,	0.6,	"",	"",	"",	"",	"",	"",	"",	43,	38,	0,	0,	11,	5,	1,	1,	0,	12,	4,	50,	11,	19,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2010,	87,	"Matt Bigelow",	2,	7,	0.41,	"",	"",	"",	"",	"x",	"",	"",	44,	42,	0,	2,	5,	6,	4,	1,	0,	16,	4,	56,	11,	14,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2011,	87,	"Robert McArthur",	6,	7,	0.41,	"",	"",	"",	"",	"",	"",	"",	40,	42,	0,	3,	4,	8,	3,	0,	0,	17,	4,	49,	11,	16,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2012,	87,	"Brandon Clarke",	7,	9,	0.26,	"",	"",	"",	"",	"",	"",	"",	45,	38,	0,	3,	4,	7,	4,	0,	0,	14,	4,	51,	11,	18,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2013,	87,	"David Knowles",	8,	9,	0.26,	"",	"",	"",	"",	"",	"x",	"",	42,	40,	0,	1,	6,	10,	1,	0,	0,	15,	4,	52,	11,	15,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2014,	87,	"Derek Shannon",	4,	11,	0.15,	"",	"",	"",	"",	"",	"",	"",	48,	39,	0,	2,	6,	7,	1,	0,	2,	17,	4,	51,	11,	19,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2015,	87,	"Eric Heberle",	0,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	49,	43,	0,	0,	5,	8,	3,	1,	1,	14,	4,	59,	11,	19,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2016,	87,	"Tucker Wilkinson",	3,	12,	0.07,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	6,	6,	6,	0,	0,	17,	4,	55,	11,	17,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2017,	87,	"Doug Hart",	0,	14,	0.05,	"",	"x",	"",	"",	"",	"",	"",	43,	51,	0,	0,	5,	4,	8,	1,	0,	14,	4,	63,	11,	17,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2018,	87,	"Ben Gramza",	3,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	48,	44,	0,	0,	4,	8,	5,	1,	0,	16,	4,	58,	11,	18,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2019,	87,	"Tim Collins",	3,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	48,	44,	0,	1,	4,	9,	1,	2,	1,	16,	4,	60,	11,	16,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2020,	87,	"Chris Pike",	0,	17,	0,	"",	"",	"",	"",	"",	"",	"",	49,	47,	0,	0,	1,	10,	6,	1,	0,	18,	4,	61,	11,	17,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2021,	87,	"Connor Mazza",	11,	17,	0,	"",	"",	"",	"",	"",	"",	"",	40,	45,	0,	1,	8,	4,	4,	1,	0,	13,	4,	52,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2022,	87,	"Jay Sutter",	7,	17,	0,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	4,	11,	2,	1,	0,	14,	4,	56,	11,	19,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2023,	87,	"John Young",	7,	17,	0,	"",	"",	"",	"",	"",	"",	"",	45,	44,	0,	0,	5,	9,	3,	1,	0,	15,	4,	55,	11,	19,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2024,	87,	"David Lacki",	0,	21,	0,	"",	"",	"x",	"",	"",	"",	"",	49,	48,	0,	0,	4,	5,	6,	3,	0,	16,	4,	61,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2025,	87,	"Michael Rocco",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	50,	47,	0,	1,	2,	7,	5,	2,	1,	18,	4,	62,	11,	17,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2026,	87,	"Sundar Digumarthy",	0,	21,	0,	"",	"",	"",	"",	"",	"",	"",	50,	47,	0,	1,	2,	7,	4,	4,	0,	19,	4,	58,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2027,	87,	"David Moore",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"",	51,	47,	0,	0,	2,	8,	6,	1,	1,	20,	4,	58,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2028,	87,	"Doug Short",	1,	24,	0,	"",	"",	"",	"",	"",	"",	"",	46,	51,	0,	0,	2,	7,	8,	1,	0,	16,	4,	64,	11,	17,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2029,	87,	"Jason Smelser",	2,	24,	0,	"",	"",	"",	"",	"",	"",	"",	51,	45,	1,	0,	3,	8,	3,	1,	2,	12,	4,	61,	11,	23,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2030,	87,	"Devin Johnson",	4,	27,	0,	"",	"",	"",	"",	"",	"",	"",	49,	46,	0,	0,	4,	6,	6,	2,	0,	17,	4,	55,	11,	23,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2031,	87,	"Elliot Mork",	5,	28,	0,	"",	"",	"",	"",	"",	"",	"",	47,	48,	0,	1,	4,	6,	2,	5,	0,	14,	4,	61,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2032,	87,	"Michael McGuire",	0,	28,	0,	"",	"",	"",	"",	"",	"",	"",	52,	48,	0,	0,	1,	6,	10,	1,	0,	17,	4,	62,	11,	21,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2033,	87,	"Michael Perry",	0,	30,	0,	"",	"",	"",	"",	"",	"",	"",	52,	50,	0,	0,	4,	3,	8,	1,	2,	22,	4,	59,	11,	21,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2034,	87,	"Mike Freeland",	0,	31,	0,	"",	"",	"",	"",	"",	"",	"",	54,	49,	0,	0,	3,	6,	4,	3,	2,	15,	4,	69,	11,	19,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2035,	87,	"Patrick Affourtit",	0,	32,	0,	"",	"",	"",	"",	"",	"",	"",	51,	53,	0,	0,	2,	5,	7,	2,	2,	20,	4,	63,	11,	21,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2036,	87,	"Jim McGuire",	0,	33,	0,	"",	"",	"",	"",	"",	"",	"",	53,	52,	0,	0,	0,	4,	12,	2,	0,	19,	4,	66,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2037,	87,	"Matt Arrasmith",	0,	34,	0,	"",	"",	"",	"",	"",	"",	"",	59,	49,	0,	0,	1,	6,	6,	3,	2,	23,	4,	64,	11,	21,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2038,	87,	"David Kunkleman",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	55,	54,	0,	0,	0,	5,	9,	2,	2,	22,	4,	64,	11,	23,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2039,	87,	"Jeff Gilligan",	0,	35,	0,	"",	"",	"",	"",	"",	"",	"",	54,	55,	0,	0,	2,	5,	5,	3,	3,	16,	4,	73,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2040,	87,	"Joe Faga",	0,	37,	0,	"",	"",	"",	"",	"",	"",	"",	56,	54,	0,	0,	0,	4,	8,	5,	1,	19,	4,	69,	11,	22,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2041,	87,	"Corinne Bigelow",	0,	38,	0,	"",	"",	"",	"",	"",	"",	"",	56,	56,	0,	0,	0,	4,	6,	7,	1,	21,	4,	71,	11,	20,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2042,	87,	"Michael Skaff",	0,	39,	0,	"",	"",	"",	"",	"",	"",	"",	59,	55,	0,	0,	3,	3,	2,	6,	4,	20,	4,	68,	11,	26,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2043,	87,	"Doug Calamari",	0,	40,	0,	"",	"",	"",	"",	"",	"",	"",	56,	59,	0,	0,	1,	3,	5,	6,	3,	24,	4,	69,	11,	22,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2044,	87,	"Justin Kudela",	0,	41,	0,	"",	"",	"",	"",	"",	"",	"",	56,	61,	0,	0,	0,	7,	5,	2,	4,	18,	4,	74,	11,	25,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		[	2045,	87,	"Tavis Nelson",	0,	42,	0,	"",	"",	"",	"",	"",	"",	"x",	61,	59,	0,	0,	0,	3,	3,	8,	4,	20,	4,	78,	11,	22,	3,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43,	],
		
		[	2046,	88,	"David Knowles",	9,	0,	0,	"",	"",	"",	"x",	"",	"",	"",	38,	41,	0,	0,	10,	8,	0,	0,	0,	15,	4,	47,	11,	17,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2047,	88,	"Matt Bigelow",	2,	1,	1.12,	"",	"",	"",	"",	"",	"",	"",	44,	37,	0,	4,	3,	9,	1,	1,	0,	12,	4,	53,	11,	16,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2048,	88,	"John Young",	5,	2,	0.74,	"",	"",	"",	"",	"",	"",	"",	40,	44,	0,	0,	8,	7,	3,	0,	0,	14,	4,	54,	11,	16,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2049,	88,	"Jay Sutter",	7,	3,	0.62,	"",	"",	"",	"",	"",	"",	"",	43,	43,	0,	0,	6,	9,	3,	0,	0,	16,	4,	54,	11,	16,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2050,	88,	"Brandon Clarke",	7,	4,	0.43,	"",	"",	"",	"",	"",	"",	"",	46,	41,	0,	0,	8,	6,	2,	2,	0,	16,	4,	52,	11,	19,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2051,	88,	"Brent Huddleston",	4,	4,	0.43,	"",	"",	"",	"",	"x",	"",	"",	44,	46,	0,	0,	10,	3,	2,	0,	3,	15,	4,	52,	11,	23,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2052,	88,	"Justin Scribner",	3,	4,	0.43,	"",	"x",	"",	"",	"",	"",	"",	43,	48,	0,	0,	5,	6,	7,	0,	0,	16,	4,	56,	11,	19,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2053,	88,	"Steve Sillato",	3,	4,	0.43,	"",	"",	"",	"",	"",	"",	"",	45,	46,	0,	1,	3,	8,	5,	1,	0,	15,	4,	57,	11,	19,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2054,	88,	"Sundar Digumarthy",	0,	4,	0.43,	"",	"",	"",	"",	"",	"",	"",	46,	48,	0,	0,	4,	7,	5,	2,	0,	16,	4,	58,	11,	20,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2055,	88,	"Elliot Mork",	5,	9,	0.22,	"",	"",	"",	"",	"",	"",	"",	45,	45,	0,	1,	4,	7,	5,	1,	0,	17,	4,	53,	11,	20,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2056,	88,	"John Hanley",	0,	9,	0.22,	"",	"",	"",	"",	"",	"",	"",	47,	48,	0,	0,	5,	7,	2,	3,	1,	19,	4,	56,	11,	20,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2057,	88,	"Doug Hart",	0,	11,	0.09,	"",	"",	"x",	"",	"",	"",	"",	46,	50,	0,	0,	3,	8,	4,	3,	0,	17,	4,	57,	11,	22,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2058,	88,	"Steven Baybutt",	5,	11,	0.09,	"",	"",	"",	"",	"",	"",	"",	43,	48,	0,	0,	5,	8,	3,	2,	0,	17,	4,	55,	11,	19,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2059,	88,	"Chris Pike",	0,	13,	0.06,	"",	"",	"",	"",	"",	"",	"",	50,	47,	0,	0,	2,	8,	7,	0,	1,	16,	4,	63,	11,	18,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2060,	88,	"Graydon Spanner",	2,	14,	0.04,	"",	"",	"",	"",	"",	"x",	"",	50,	46,	0,	1,	4,	3,	7,	3,	0,	14,	4,	64,	11,	18,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2061,	88,	"Robert McArthur",	7,	15,	0.03,	"",	"",	"",	"",	"",	"",	"",	50,	42,	0,	1,	5,	6,	4,	0,	2,	19,	4,	55,	11,	18,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2062,	88,	"Doug Short",	1,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	53,	47,	0,	0,	5,	5,	5,	1,	2,	21,	4,	56,	11,	23,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2063,	88,	"Eric Heberle",	0,	16,	0.02,	"",	"",	"",	"",	"",	"",	"",	53,	48,	0,	0,	4,	6,	3,	4,	1,	17,	4,	59,	11,	25,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2064,	88,	"Joe Milacek",	6,	18,	0,	"",	"",	"",	"",	"",	"",	"",	51,	50,	0,	0,	4,	4,	6,	3,	1,	15,	4,	66,	11,	20,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2065,	88,	"Michael Perry",	0,	19,	0,	"",	"",	"",	"",	"",	"",	"",	54,	55,	0,	0,	1,	4,	7,	4,	2,	20,	4,	70,	11,	19,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2066,	88,	"Mike Freeland",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	62,	55,	0,	0,	2,	1,	6,	5,	4,	22,	4,	75,	11,	20,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2067,	88,	"Tavis Nelson",	0,	20,	0,	"",	"",	"",	"",	"",	"",	"",	62,	55,	0,	0,	1,	3,	5,	5,	4,	25,	4,	69,	11,	23,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2068,	88,	"Joe Faga",	0,	22,	0,	"",	"",	"",	"",	"",	"",	"",	63,	58,	0,	0,	0,	2,	8,	4,	4,	19,	4,	77,	11,	25,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2069,	88,	"Michael Skaff",	0,	23,	0,	"",	"",	"",	"",	"",	"",	"",	62,	66,	0,	0,	1,	1,	2,	7,	7,	28,	4,	74,	11,	26,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],
		[	2070,	88,	"Jeff Gilligan",	0,	24,	0,	"",	"",	"",	"",	"",	"",	"x",	66,	68,	0,	0,	0,	2,	2,	4,	10,	23,	4,	85,	11,	26,	3,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25,	],

	];
	
	for (x = 0; x < Filters.length; x++) {
		if (Filters[x] != undefined && Filters[x] != '') {
			arrParticipants = arrParticipants.filter(participant => participant[x] == Filters[x]);
		}
	}
	
	return arrParticipants;
}

function getData_Seasons() {
	return [
		2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,
		//2023,
	].sort();
}

function getData_Tournaments(Filters) {
    /*
		0 = Tournament ID
		1 = Course Name
		2 = Event Name
		3 = Event Date
		4 = IsMajor?
		5 = Season
		6 = Month
		7 = Field Size
	*/
	
	let arrTournaments = [
        [	1,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12	],
        [	2,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13	],
        [	3,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11	],
        [	4,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11	],
        [	5,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11	],
        [	6,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12	],
        [	7,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13	],
        [	8,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9	],
        [	9,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26	],
        [	10,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18	],
        [	11,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19	],
        [	12,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14	],
        [	13,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21	],
        [	14,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19	],
        [	15,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15	],
        [	16,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10	],
        [	17,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9	],
        [	18,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6	],
        [	19,	"Kyber Run",	"F.U. Open",	"06-08-2014",	"Y",	2014,	"June",	4	],
        [	20,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6	],
        [	21,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6	],
        [	22,	"Chapel Hill",	"MGA Championship",	"08-17-2014",	"Y",	2014,	"August",	5	],
        [	23,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6	],
        [	24,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6	],
        [	25,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8	],
        [	26,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9	],
        [	27,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12	],
        [	28,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12	],
        [	29,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11	],
        [	30,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17	],
        [	31,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16	],
        [	32,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11	],
        [	33,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20	],
        [	34,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19	],
        [	35,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17	],
        [	36,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12	],
        [	37,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17	],
        [	38,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17	],
        [	39,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19	],
        [	40,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15	],
        [	41,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22	],
        [	42,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17	],
        [	43,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16	],
        [	44,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21	],
        [	45,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16	],
        [	46,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14	],
        [	47,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16	],
        [	48,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16	],
        [	49,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28	],
        [	50,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23	],
        [	51,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26	],
        [	52,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23	],
        [	53,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26	],
        [	54,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33	],
        [	55,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22	],
        [	56,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16	],
        [	57,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44	],
        [	58,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39	],
        [	59,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44	],
        [	60,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38	],
        [	61,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41	],
        [	62,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35	],
        [	63,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26	],
        [	64,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23	],
        [	65,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34	],
        [	66,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31	],
        [	67,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24	],
        [	68,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35	],
        [	69,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30	],
        [	70,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36	],
        [	71,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32	],
        [	72,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28	],
        [	73,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56	],
        [	74,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55	],
        [	75,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48	],
        [	76,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44	],
        [	77,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54	],
        [	78,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39	],
        [	79,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42	],
        [	80,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30	],
        [	81,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48	],
        [	82,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44	],
        [	83,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46	],
        [	84,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41	],
        [	85,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34	],
        [	86,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32	],
        [	87,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43	],
        [	88,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25	],
    ];
	
	for (x = 0; x < Filters.length; x++) {
		if (Filters[x] != undefined && Filters[x] != '') {
			arrTournaments = arrTournaments.filter(tourney => tourney[x] == Filters[x]);
		}
	}
	
	return arrTournaments;
}

function getEventName(pEventIndex) {
	switch (pEventIndex) {
		case '-1'	: return 'All Events'; break;
		case '-2'	: return 'All Majors'; break;
		case '-3'	: return 'All Non-Majors'; break;
	}
	
	const arrEvents = getData_Events();
	return arrEvents[pEventIndex];
}

function getGolferName(pGolferIndex) {
	switch (pGolferIndex) {
		case '-1'	: return 'All Golfers'; break;
	}
	
	const arrGolfers = getData_Golfers();
	return arrGolfers[pGolferIndex];
}

function getSeasonMoneyList(URL) {
	var arrFilters = new Array();
	var arrSeasonArray = new Array();
	const earningsByGolfer = new Map();
	
	for (let x = URL[1]; x <= URL[2]; x++) {
		if (URL[4] == '-2') {arrFilters[31] = 'Y';}
		else if (URL[4] == '-3') {arrFilters[31] = 'N';}
		else if (URL[4] != '-1') {arrFilters[29] = getEventName(URL[4]);}
		
		if (URL[3] != '-1') {arrFilters[2] = getGolferName(URL[3]);}
		if (URL[5] != '-1') {arrFilters[28] = getCourseName(URL[5]);}
		
		arrFilters[32] = x;
		arrSeasonArray = getData_Participants(arrFilters);
		
		for (let i = 0; i < arrSeasonArray.length; i++) {
		  const golfer = arrSeasonArray[i][2];
		  const earnings = arrSeasonArray[i][5];
		  
		  if (!earningsByGolfer.has(golfer)) {
			earningsByGolfer.set(golfer, { earnings: 0, eventCount: 0 });
		  }
		  
		  earningsByGolfer.get(golfer).earnings += earnings;
		  earningsByGolfer.get(golfer).eventCount++;
		}
	}

	var arrReturnArray = Array.from(earningsByGolfer, ([golfer, earningsObj]) => {
	  const earnings = earningsObj.earnings.toFixed(2);
	  const eventCount = earningsObj.eventCount;
	  return [golfer, earnings, eventCount];
	}).filter(([, earnings]) => parseFloat(earnings) > 0);
	
	arrReturnArray.sort(function(a,b) {return b[1]-a[1]});
	
	var varPositionHold	= 0;
	var varEarningsHold	= 0;
	var varReturnIndex = 0;
	
	for (pl = 0; pl < arrReturnArray.length; pl++) {
		
		if (varEarningsHold != arrReturnArray[varReturnIndex][1]) {
			varEarningsHold = arrReturnArray[varReturnIndex][1];
			varPositionHold = (pl + 1);
			arrReturnArray[varReturnIndex][3] = (pl + 1);
		} else {
			arrReturnArray[varReturnIndex][3] = varPositionHold;
		}
		
		varReturnIndex++;
	}
	
	return arrReturnArray;
}

function getURLParsed(URL) {
	const { searchParams } = URL;

	const varURL = URL.toString();
	const varURLslash = varURL.lastIndexOf('/');
	const varURLhtml = varURL.indexOf(".html");

	const arrReturnArray = [];
	
	/*
		arrReturnArray[0]	=	Page Name
		arrReturnArray[1]	=	Season Begin
		arrReturnArray[2]	=	Season End
		arrReturnArray[3]	=	Golfer Index
		arrReturnArray[4]	=	Event Index
		arrReturnArray[5]	=	Course Index
		arrReturnArray[6]	=	Current Record Value
		arrReturnArray[7]	=	Finishing Position
		arrReturnArray[8]	=	Score Type
		arrReturnArray[9]	=	Score Type Action
		arrReturnArray[10]	=	Specific Season
		arrReturnArray[11]	=	Hide Display and Search
	*/

	arrReturnArray[0] = varURL.substring(varURLslash + 1, varURL.lastIndexOf('.html') + 5);
	arrReturnArray[1] = searchParams.get("sb") ?? 2012;
	arrReturnArray[2] = searchParams.get("se") ?? getCurrentSeason();
	arrReturnArray[3] = searchParams.get("g") ?? '-1';
	arrReturnArray[4] = searchParams.get("e") ?? '-1';
	/*
	arrReturnArray[4] = searchParams.get("e") == "-1" ? "All Events"
		: searchParams.get("e") == "-2" ? "All Majors"
		: searchParams.get("e") == "-3" ? "All Non-Majors"
		: searchParams.get("e") ?? "UNK";
	*/
	arrReturnArray[5] = searchParams.get("c") ?? '-1';
	arrReturnArray[6] = searchParams.get("rec");
	arrReturnArray[7] = searchParams.get("pos");
	arrReturnArray[8] = searchParams.get("t");
	arrReturnArray[9] = searchParams.get("a");
	arrReturnArray[10] = searchParams.get("s") ?? getCurrentSeason();
	arrReturnArray[11] = searchParams.get("hdn");

	return arrReturnArray;
}

function globalVariable(VarName) {
	switch (VarName) {
		case 'Site_BGColor':	return 'white'; break;
		case 'Site_Title':		return 'Site rewrite in progress'; break;
		
		default:				return 'NOPE';
	}
}

function html_NavigationPanel() {
	document.write('<nav class="navbar navbar-inverse navbar-fixed-top">');
	document.write('	<div class="container-fluid">');
	document.write('		<div class="navbar-header">');
	document.write('			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">');
	document.write('				<span class="icon-bar"></span>');
	document.write('				<span class="icon-bar"></span>');
	document.write('				<span class="icon-bar"></span>');
	document.write('			</button>');
	document.write('			<a class="navbar-brand" href="index_new.html">Home</a>');
	document.write('		</div>');
	document.write('		<div class="collapse navbar-collapse" id="myNavbar">');
	document.write('			<ul class="nav navbar-nav">');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Stats <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Current Season Stats</a></li>');
	document.write('						<li><a href="golferdetails.html">Golfer Stats</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Course Stats</a></li>');
	document.write('						<!--<li><a href="#">Event Stats</a></li>-->');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Chapter Stats</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li><a href="#" style="text-decoration: line-through;">Event Results</a></li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Records <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Scoring Records</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Placement Records</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Awards Records</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Chapter Records</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Lists <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Event Scorecards</a></li>');
	document.write('						<li><a href="eventchampions.html">Event Champions</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Social Media <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="https://www.facebook.com/ColumbusMga" target="_fb"><span class="fa fa-facebook-square"></span>&nbsp;&nbsp;Facebook</a></li>');
	document.write('						<li><a href="https://twitter.com/mgacolumbus" target="_tw"><span class="fa fa-twitter-square"></span>&nbsp;&nbsp;Twitter</a></li>');
	document.write('						<li><a href="https://www.instagram.com/mgacolumbus/" target="_ig"><span class="fa fa-instagram"></span>&nbsp;&nbsp;Instagram</a></li>');
	document.write('						<li><a href="https://discord.gg/ygQmfyv" target="_ds"><img src="images/discord2.png" width="19px" height="19px" />&nbsp;&nbsp;Discord</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('				<li class="dropdown">');
	document.write('					<a class="dropdown-toggle" data-toggle="dropdown" href="#">Misc. Stuff <span class="caret"></span></a>');
	document.write('					<ul class="dropdown-menu navbar-nav" style="background-color: #292929;">');
	document.write('						<li><a href="https://mgatour.com/chapters/contact-leader/1154" target="_em"><span class="fa fa-envelope"></span>&nbsp;&nbsp;Contact Us</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Chapter Rules</a></li>');
	document.write('						<li><a href="#" style="text-decoration: line-through;">Calendar</a></li>');
	document.write('					</ul>');
	document.write('				</li>');
	document.write('			</ul>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('</nav>');
}

function html_Footer() {
	document.write('<footer class="w3-container w3-padding-16 w3-' + globalVariable('Site_BGColor') + '">');
    document.write('	<p style="text-align: center;">');
	document.write('		Powered by <a href="https://www.w3schools.com/" target="_blank">w3schools</a>');
	document.write('	</p>');
	document.write('</footer>');
}

function html_RecordDisplayBox(Golfer, Event, Course, SeasonBegin, SeasonEnd, optHideBox) {
	/**---------------------------------------------------------------------**/
		var pGolfer			=	arguments[0];
		var pEvent			=	arguments[1];
		var pCourse			=	arguments[2];
		var pSeasonBegin	=	arguments[3];
		var pSeasonEnd		=	arguments[4];
		var pHideBox		=	arguments[5];
	/**---------------------------------------------------------------------**/
	
	if (pHideBox != 1) {
	
		document.write('<div class="w3-half">');
		document.write('	<p><strong>Displaying:</p>');
		document.write('	<table class="w3-table w3-white">');
		document.write('		<tr>');
		document.write('			<td width="40px">Golfer:</td>');
		document.write('			<td width="200px">' + getGolferName(pGolfer) + '<br /></td>');
		document.write('		</tr>');
		document.write('		<tr>');
		document.write('			<td width="40px">Event:</td>');
		document.write('			<td width="200px">' + getEventName(pEvent) + '<br /></td>');
		document.write('		</tr>');
		document.write('		<tr>');
		document.write('			<td width="40px">Course:</td>');
		document.write('			<td width="200px">' + getCourseName(pCourse) + '<br /></td>');
		document.write('		</tr>');
		document.write('		<tr>');
		document.write('			<td width="40px">Seasons:</td>');
		document.write('			<td width="200px">' + pSeasonBegin + '&nbsp;&nbsp;to&nbsp;&nbsp;' + pSeasonEnd + '</td>');
		document.write('		</tr>');
		document.write('	</table></strong>');
		document.write('</div>');
	}
}

function html_RecordSearchBox(PageName, optPosition, optScoreType, optScoreActionType, optRecord, optHideBox) {
	
		var pPageName			=	arguments[0];
		var pPosition			=	arguments[1];
		var pScoreType			=	arguments[2];
		var pScoreActionType	=	arguments[3];
		var pRecord				=	arguments[4];
		var pHideBox			=	arguments[5];
		
		var arrGolfers			=	new Array();		arrGolfers		=	getData_Golfers();
		var arrCourses			=	new Array();		arrCourses		=	getData_Courses();
		var arrEvents			=	new Array();		arrEvents		=	getData_Events();
		var arrSeasons			=	new Array();		arrSeasons		=	getData_Seasons();
	
	
	if (pHideBox != 1) {
	
		document.write('<div class="w3-half">');
		document.write('	<form action="' + pPageName + '" method="get">');
		
		if (pPosition != undefined) {
			document.write('		<input type="hidden" name="pos" value="' + pPosition + '" />');
		}
		
		if (pScoreType != undefined) {
			document.write('		<input type="hidden" name="t" value="' + pScoreType + '" />');
		}
		
		if (pScoreActionType != undefined) {
			document.write('		<input type="hidden" name="a" value="' + pScoreActionType + '" />');
		}
		
		if (pRecord != undefined) {
			document.write('		<input type="hidden" name="rec" value="' + pScoreActionType + '" />');
		}
		
		document.write('		<p><strong>Search For:</strong></p>');
		document.write('		<table class="w3-table w3-light-gray">');
		document.write('			<tr>');
		document.write('				<td width="40px">Golfer:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="g">');
		document.write('						<option value="-1">-- All Golfers --</option>');
		
							for (z = 0; z < arrGolfers.length; z++) {
								document.write('<option value="' + z + '">' + arrGolfers[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">Event:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="e">');
		document.write('						<option value="-1">-- All Events --</option>');
		document.write('						<option value="-2">-- All Majors --</option>');
		document.write('						<option value="-3">-- All Non-Majors --</option>');
		
							for (z = 0; z < arrEvents.length; z++) {
								document.write('<option value="' + z + '">' + arrEvents[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">Course:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="c">');
		document.write('						<option value="-1">-- All Courses --</option>');
		
							for (z = 0; z < arrCourses.length; z++) {
								document.write('<option value="' + z + '">' + arrCourses[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">Seasons:</td>');
		document.write('				<td width="200px">');
		document.write('					<select name="sb">');

							for (z = 0; z < arrSeasons.length; z++) {
								document.write('<option value="' + arrSeasons[z] + '">' + arrSeasons[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('					&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;');
		document.write('					<select name="se">');
		
							arrSeasons.reverse();
							
							for (z = 0; z < arrSeasons.length; z++) {
								document.write('<option value="' + arrSeasons[z] + '">' + arrSeasons[z] + '</option>');
							}
		
		document.write('					</select>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('			<tr>');
		document.write('				<td width="40px">&nbsp;</td>');
		document.write('				<td width="200px">');
		document.write('					<input type="submit" value="Search..."/>');
		document.write('				</td>');
		document.write('			</tr>');
		document.write('		</table>');
		document.write('	</form>');
		document.write('</div>');
	}
}

function html_SiteHeader() {
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
	document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">');
	document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>');
	document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>');
	document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
	
	//document.write('<meta charset="UTF-8">');
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
	document.write('<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">');
	document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">');
	document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
	
	document.write('<title>' + globalVariable('Site_Title') + '</title>');
	
	document.write('<style>');
	document.write('html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}');
	document.write('footer {background-color: #b2b2b2; padding: 25px;}')
	document.write('.navbar {border-radius: 0; background-color: #191919;}')
	document.write('.panel_heading_ext {text-align: center;}')
	document.write('.panel_footer_ext {background-color: #c2c2c2; text-align: center;}')
	document.write('.table-condensed_ext {font-size: 12px; font-weight: bold;}')
	document.write('</style>');
}