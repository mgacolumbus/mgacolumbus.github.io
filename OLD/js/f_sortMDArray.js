function sortMDArray(arr, sortcol, sortdir) {
	/**---------------------------------------------------------------------**/
		var arrArray	=	arguments[0];
		var varX		=	arguments[1];
		var varAscDesc	=	arguments[2];

		var arrDisplay	=	new Array();
	/**---------------------------------------------------------------------**/

	arrGolfers		= arrArray[0];
	arrStats		= arrArray[1];
	arrSeasons		= arrArray[2];
	arrExtraInfo	= arrArray[3];
	arrEvents		= arrArray[4];

	for (z = 0; z < arrGolfers.length; z++)
	{
		tmpGolfer		= arrGolfers[z];
		tmpStat			= arrStats[z];
		tmpSeason		= arrSeasons[z];
		tmpExtraInfo	= arrExtraInfo[z];
		tmpEvents		= arrEvents[z];

		arrDisplay[z]	= new Array();

		arrDisplay[z][0] = tmpGolfer;
		arrDisplay[z][1] = tmpStat;
		arrDisplay[z][2] = tmpSeason;
		arrDisplay[z][3] = tmpExtraInfo;
		arrDisplay[z][4] = tmpEvents;
	}

	arrArray = arrDisplay;

	if (varAscDesc == "asc") {
		arrArray.sort(function(a, b) {
						var avalue = a[varX],
							bvalue = b[varX];
						if (avalue < bvalue) {
							return -1;
						}
						if (avalue > bvalue) {
							return 1;
						}
						return 0;
					});
	}
	else {
		arrArray.sort(function(a, b) {
						var avalue = a[varX],
							bvalue = b[varX];
						if (avalue < bvalue) {
							return 1;
						}
						if (avalue > bvalue) {
							return -1;
						}
						return 0;
					});
	}
	return arrArray;
	
}