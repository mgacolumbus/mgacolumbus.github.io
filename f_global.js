function checkMajor(RoundsArray, X) {
	var arrGolferRounds		=	arguments[0];
	var varX				=	arguments[1];
	
	if (arrGolferRounds[varX][1] == "Bastards") {
		return true;
	}
	if (arrGolferRounds[varX][1] == "F.U. Open") {
		return true;
	}
	if (arrGolferRounds[varX][1] == "Bratish Open") {
		return true;
	}
	if (arrGolferRounds[varX][1] == "MGA Championship") {
		return true;
	}
	
	return false;
}



function sortMDArray(arr, sortcol, sortdir) {
	var arrArray		=	arguments[0];
	var varX			=	arguments[1];
	var varAscDesc		=	arguments[2];
	
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



function setSelectedValue(selectObj, valueToSet) {
	for (var i = 0; i < selectObj.options.length; i++) {
		if (selectObj.options[i].text== valueToSet) {
			selectObj.options[i].selected = true;
			return;
		}
	}
}