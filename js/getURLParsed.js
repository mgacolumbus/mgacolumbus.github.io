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
		arrReturnArray[12]	=	Minimum Events
		arrReturnArray[13]	=	Par
		arrReturnArray[14]	=	Gross / Net
		arrReturnArray[15]	=	Is a Percentage Calculation?
		arrReturnArray[16]	=	Is Single Season?
		arrReturnArray[17]	=	Is Single Event?
		arrReturnArray[18]	=	Filter List Setting
		arrReturnArray[19]	=	Minimum Holes Played
		arrReturnArray[20]	=	Award Type
		arrReturnArray[21]	=	Sort direction
		arrReturnArray[22]	=	Participant ID
	*/

	arrReturnArray[0] = varURL.substring(varURLslash + 1, varURL.lastIndexOf('.html') + 5);
	arrReturnArray[1] = searchParams.get("sb") ?? 2012;
	arrReturnArray[2] = searchParams.get("se") ?? getCurrentSeason();
	arrReturnArray[3] = searchParams.get("g") ?? '-1';
	arrReturnArray[4] = searchParams.get("e") ?? '-1';
	arrReturnArray[5] = searchParams.get("c") ?? '-1';
	arrReturnArray[6] = searchParams.get("rec");
	arrReturnArray[7] = searchParams.get("pos");
	arrReturnArray[8] = searchParams.get("t");
	arrReturnArray[9] = searchParams.get("a");
	arrReturnArray[10] = searchParams.get("s") ?? getCurrentSeason();
	arrReturnArray[11] = searchParams.get("hdn");
	arrReturnArray[12] = searchParams.get("min") ?? 1;
	arrReturnArray[13] = searchParams.get("p") ?? '-1';
	arrReturnArray[14] = searchParams.get("gn") ?? 'Gross';
	arrReturnArray[15] = searchParams.get("perc") ?? 'N';
	arrReturnArray[16] = searchParams.get("ss") ?? 'N';
	arrReturnArray[17] = searchParams.get("sev") ?? 'N';
	arrReturnArray[18] = searchParams.get("fl") ?? 210;
	arrReturnArray[19] = searchParams.get("mh") ?? 1;
	arrReturnArray[20] = searchParams.get("aw") ?? "tot";
	arrReturnArray[21] = searchParams.get("srt") ?? "d";
	arrReturnArray[22] = searchParams.get("pid");

	return arrReturnArray;
}