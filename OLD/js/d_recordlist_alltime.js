function getData_AllTimeRecordsList() {
	
	/*
		arrArray[0]		=	Record Title
		arrArray[1]		=	Link
		arrArray[2]		=	Icon to be displayed
		arrArray[3]		=	Color of the icon
	*/

	return [
		[
			"Most Wins"
			, "record_total_position.html?pos=1"
			, "fa-trophy"
			, "yellow"
		]
		,[
			"Most Runner-Ups"
			, "record_total_position.html?pos=2"
			, "fa-trophy"
			, "yellow"
		]
		,[
			"Most \"Earnings\""
			, "record_total_earnings.html"
			, "fa-money"
			, "green"
		]
		,[
			"Most Par or Better"
			, "record_total_scoretype.html?t=4&a=1&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Bogey or Better"
			, "record_total_scoretype.html?t=5&a=1&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Eagles"
			, "record_total_scoretype.html?t=1&a=0&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Birdies"
			, "record_total_scoretype.html?t=2&a=0&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Pars"
			, "record_total_scoretype.html?t=3&a=0&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Bogeys"
			, "record_total_scoretype.html?t=4&a=0&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Double Bogeys"
			, "record_total_scoretype.html?t=5&a=0&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Triple Bogeys"
			, "record_total_scoretype.html?t=6&a=0&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
		,[
			"Most Worse Bogeys"
			, "record_total_scoretype.html?t=6&a=2&sb=2012&se=" + getCurrentSeason() + "&rec=0"
			, "fa-check-square"
			, "blue"
		]
	]
}