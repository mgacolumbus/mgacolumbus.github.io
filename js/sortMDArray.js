function sortMDArray(arr, sortcol, sortdir) {
	/**---------------------------------------------------------------------**/
		var arrArray	=	arguments[0];
		var varX		=	arguments[1];
		var varAscDesc	=	arguments[2];

		var arrDisplay	=	new Array();
	/**---------------------------------------------------------------------**/

	arrGolfers		= arrArray[0];
	arrStats		= arrArray[1];
	arrExtraInfo	= arrArray[2];

	for (z = 0; z < arrGolfers.length; z++)
	{
		tmpGolfer		= arrGolfers[z];
		tmpStat			= arrStats[z];
		tmpExtraInfo	= arrExtraInfo[z];

		arrDisplay[z]	= new Array();

		arrDisplay[z][0] = tmpGolfer;
		arrDisplay[z][1] = tmpStat;
		arrDisplay[z][2] = tmpExtraInfo;
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