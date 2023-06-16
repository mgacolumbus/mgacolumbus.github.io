function getCurrentSeason() {
	const seasons = getData_Seasons();
	return seasons[seasons.length - 1];
}