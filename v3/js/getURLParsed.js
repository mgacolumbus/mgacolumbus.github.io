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