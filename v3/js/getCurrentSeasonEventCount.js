function getCurrentSeasonEventCount() {
	var URL = new Array();
	const seasons = getData_Seasons();
	
	URL[5] = seasons[seasons.length - 1];
	const tournaments = getData_Tournaments(URL);
	
	return tournaments.length;
}