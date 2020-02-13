function getData_SingleSeasonRecordsList() {
	
	/*
		arrArray[0]		=	Record Title
		arrArray[1]		=	Link
		arrArray[2]		=	Icon to be displayed
		arrArray[3]		=	Color of the icon
	*/
	
	return [
		[
			"Most Wins"
			, "record_single_season_position.html?pos=1&sb=2012&se=" + getCurrentSeason()
			, "fa-trophy"
			, "yellow"
		]
		,[
			"Most \"Earnings\""
			, "record_single_season_earnings.html?sb=2012&se=" + getCurrentSeason()
			, "fa-money"
			, "green"
		]
		,[
			"Most Par or Better"
			, "record_single_season_scoretype.html?t=4&a=1&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Bogey or Better"
			, "record_single_season_scoretype.html?t=5&a=1&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Eagles"
			, "record_single_season_scoretype.html?t=1&a=0&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Birdies"
			, "record_single_season_scoretype.html?t=2&a=0&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Pars"
			, "record_single_season_scoretype.html?t=3&a=0&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Bogeys"
			, "record_single_season_scoretype.html?t=4&a=0&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Double Bogeys"
			, "record_single_season_scoretype.html?t=5&a=0&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Triple Bogeys"
			, "record_single_season_scoretype.html?t=6&a=0&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Worse Bogeys"
			, "record_single_season_scoretype.html?t=6&a=2&sb=2012&se=" + getCurrentSeason()
			, "fa-check-square"
			, "blue"
		]
	]
}