function getSeasonChampionBGColor(EventIndex) {
	/**---------------------------------------------------------------------**/
		var pEventIndex		=	arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch (pEventIndex) {
		case 0:		{return "w3-red";}
		case 1:		{return "w3-green";}
		case 2:		{return "w3-teal";}
		case 3:		{return "w3-dark-grey";}
		case 4:		{return "w3-blue-grey";}
		case 5:		{return "w3-deep-orange";}
		case 6:		{return "w3-brown";}
		case 7:		{return "w3-black";}
		default:	{return "w3-black";}
	}
}