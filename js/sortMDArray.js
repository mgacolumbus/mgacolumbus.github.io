function sortMDArray(pDataArray, pSortColumn, pSortDirection) {
		var arrDataArray	= arguments[0];
		var X				= arguments[1];
		var vSortDirection	= arguments[2];

		var arrDisplay		= new Array();

	arrGolfers		= arrDataArray[0];
	arrStats		= arrDataArray[1];
	arrExtraInfo	= arrDataArray[2];

	for (z = 0; z < arrGolfers.length; z++)	{
		
		tmpGolfer		= arrGolfers[z];
		tmpStat			= arrStats[z];
		tmpExtraInfo	= arrExtraInfo[z];

		arrDisplay[z]	= new Array();

		arrDisplay[z][0] = tmpGolfer;
		arrDisplay[z][1] = tmpStat;
		arrDisplay[z][2] = tmpExtraInfo;
		
	}

	arrDataArray = arrDisplay;

	if (vSortDirection == "asc") {
		arrDataArray.sort(function(a, b) {
						var avalue = a[X],
							bvalue = b[X];
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
		arrDataArray.sort(function(a, b) {
						var avalue = a[X],
							bvalue = b[X];
						if (avalue < bvalue) {
							return 1;
						}
						if (avalue > bvalue) {
							return -1;
						}
						return 0;
					});
	}
	
	return arrDataArray;
	
}