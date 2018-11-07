function displayGolferInfo(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	arrDisplay = getGolferEventCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferEvents").innerHTML = arrDisplay[0];
	document.getElementById("GolferEventsMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferEventsNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferWinCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferWins").innerHTML = arrDisplay[0];
	document.getElementById("GolferWinsMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferWinsNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferRunnerUpCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferRunnerUps").innerHTML = arrDisplay[0];
	document.getElementById("GolferRunnerUpsMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferRunnerUpsNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferDQCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferDQs").innerHTML = arrDisplay[0];
	document.getElementById("GolferDQsMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferDQsNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferTopXCount(arguments[0],arguments[1],arguments[2],arguments[3],5,arguments[4]);
	document.getElementById("GolferTop5s").innerHTML = arrDisplay[0];
	document.getElementById("GolferTop5sMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferTop5sNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferTopXCount(arguments[0],arguments[1],arguments[2],arguments[3],10,arguments[4]);
	document.getElementById("GolferTop10s").innerHTML = arrDisplay[0];
	document.getElementById("GolferTop10sMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferTop10sNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferEarnings(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferEarnings").innerHTML = arrDisplay[0].toFixed(2);
	document.getElementById("GolferEarningsMajor").innerHTML = arrDisplay[1].toFixed(2);
	document.getElementById("GolferEarningsNonMajor").innerHTML = arrDisplay[2].toFixed(2);

	arrDisplay = getGolferTopXCount(arguments[0],arguments[1],arguments[2],arguments[3],16,arguments[4]);
	document.getElementById("GolferCashes").innerHTML = arrDisplay[0];
	document.getElementById("GolferCashesMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferCashesNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferAvgScoreGross(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferAvgScoreGross").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgScoreGrossMajor").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgScoreGrossNonMajor").innerHTML = arrDisplay[2].toFixed(3);

	arrDisplay = getGolferAvgScoreNet(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferAvgScoreNet").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgScoreNetMajor").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgScoreNetNonMajor").innerHTML = arrDisplay[2].toFixed(3);

	arrDisplay = getGolferAvgScoreForPar(arguments[0],arguments[1],arguments[2],arguments[3],3,arguments[4]);
	document.getElementById("GolferAvgScorePar3").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgScorePar3Major").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgScorePar3NonMajor").innerHTML = arrDisplay[2].toFixed(3);

	arrDisplay = getGolferAvgScoreForPar(arguments[0],arguments[1],arguments[2],arguments[3],4,arguments[4]);
	document.getElementById("GolferAvgScorePar4").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgScorePar4Major").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgScorePar4NonMajor").innerHTML = arrDisplay[2].toFixed(3);

	arrDisplay = getGolferAvgScoreForPar(arguments[0],arguments[1],arguments[2],arguments[3],5,arguments[4]);
	document.getElementById("GolferAvgScorePar5").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgScorePar5Major").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgScorePar5NonMajor").innerHTML = arrDisplay[2].toFixed(3);

	arrDisplay = getGolferAvgFinish(arguments[0],arguments[1],arguments[2],arguments[3],5,arguments[4]);
	document.getElementById("GolferAvgFinish").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgFinishMajor").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgFinishNonMajor").innerHTML = arrDisplay[2].toFixed(3);
}

/********************************************************************************************/

function changeGolferDropdown(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	displayGolferInfo(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
}

/********************************************************************************************/

function changeEventDropdown(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	displayGolferInfo(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
}

/********************************************************************************************/

function changeCourseDropdown(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	displayGolferInfo(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
}

/********************************************************************************************/

function changeSeasonDropdown(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	displayGolferInfo(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
}

/********************************************************************************************/

function changeSeason2Dropdown(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	displayGolferInfo(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
}

/********************************************************************************************/

function checkDropdownSelections(Golfer, Event, Course, SeasonBegin, RoundArray, X, SeasonEnd) {
	var varGolferName		= arguments[0];
	var varEventName		= arguments[1];
	var varCourseName		= arguments[2];
	var varSeason			= arguments[3];
	var arrGolferRounds		= arguments[4];
	var varX				= arguments[5];
	var varSeason2			= arguments[6];
	
	var varSeasonTemp = arrGolferRounds[varX][0].substr(6,9);
	
	if (arrGolferRounds[varX][3] == varGolferName || varGolferName == "") {
		if (arrGolferRounds[varX][1] == varEventName || varEventName == "") {
			if (arrGolferRounds[varX][2] == varCourseName || varCourseName == "") {
				if (varSeasonTemp >= varSeason && varSeasonTemp <= varSeason2) {
					return true;
				}
			}
		}
	}
	
	return false;
}

/********************************************************************************************/

function getGolferEventCount(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		 arrGolferRounds	=	getData_Rounds();
	var varEventCount		=	new Array();
	
	varEventCount[0] = 0;
	varEventCount[1] = 0;
	varEventCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			
			varEventCount[0]++;
			
			if (checkMajor(arrGolferRounds, x) == 1) {
				varEventCount[1]++;
			}			
			if (checkMajor(arrGolferRounds, x) == 0) {
				varEventCount[2]++;
			}
		}
	}

	return [varEventCount[0],varEventCount[1],varEventCount[2]];
}

/********************************************************************************************/

function getGolferWinCount(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varWinCount			=	new Array();
	
	varWinCount[0] = 0;
	varWinCount[1] = 0;
	varWinCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			if (arrGolferRounds[x][4] == 1) {
				
				varWinCount[0]++;
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					varWinCount[1]++;
				}
				if (checkMajor(arrGolferRounds, x) == 0) {
					varWinCount[2]++;
				}
			}
		}
	}

	return [varWinCount[0],varWinCount[1],varWinCount[2]];
	
}

/********************************************************************************************/

function getGolferRunnerUpCount(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varRunnerUpCount	=	new Array();
	
	varRunnerUpCount[0] = 0;
	varRunnerUpCount[1]	= 0;
	varRunnerUpCount[2]	= 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			if (arrGolferRounds[x][4] == 2)
			{
				varRunnerUpCount[0]++;
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					varRunnerUpCount[1]++;
				}
				if (checkMajor(arrGolferRounds, x) == 0) {
					varRunnerUpCount[2]++;
				}
			}
		}
	}

	return [varRunnerUpCount[0],varRunnerUpCount[1],varRunnerUpCount[2]];
}

/********************************************************************************************/

function getGolferDQCount(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varDQCount			=	new Array();
	
	varDQCount[0] = 0;
	varDQCount[1] = 0;
	varDQCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			if (arrGolferRounds[x][4] == 0) {
				
				varDQCount[0]++;
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					varDQCount[1]++;
				}
				if (checkMajor(arrGolferRounds, x) == 0) {
					varDQCount[2]++;
				}
			}
		}
	}

	return [varDQCount[0],varDQCount[1],varDQCount[2]];
}

/********************************************************************************************/

function getGolferTopXCount(Golfer, Event, Course, SeasonBegin, TopX, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varTopXCount		=	new Array();
	
	varTopXCount[0] = 0;
	varTopXCount[1] = 0;
	varTopXCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++)
	{
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[5])) {
		    if (arrGolferRounds[x][4] <= arguments[4]) {
				if (arrGolferRounds[x][4] > 0) {
					
					varTopXCount[0]++;
					
					if (checkMajor(arrGolferRounds, x) == 1) {
						varTopXCount[1]++;
					}
					if (checkMajor(arrGolferRounds, x) == 0) {
						varTopXCount[2]++;
					}
				}
			}
		}
	}

	return [varTopXCount[0],varTopXCount[1],varTopXCount[2]];
}

/********************************************************************************************/

function getGolferEarnings(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varEarnings			=	new Array();
	
	varEarnings[0] = 0;
	varEarnings[1] = 0;
	varEarnings[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			
			varEarnings[0] += arrGolferRounds[x][6];
			
			if (checkMajor(arrGolferRounds, x) == 1) {
				varEarnings[1] += arrGolferRounds[x][6];
			}
			if (checkMajor(arrGolferRounds, x) == 0) {
				varEarnings[2] += arrGolferRounds[x][6];
			}
		}
	}

	return [varEarnings[0],varEarnings[1],varEarnings[2]];
}

/********************************************************************************************/

function getGolferAvgScoreGross(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varTotalScores		=	new Array();
	var varTotalRounds		=	new Array();
	var varTempTotal		=	0;
	var varTempMajor		=	0;
	var varTempNonMajor		=	0;
	
	varTotalScores[0] = 0;
	varTotalScores[1] = 0;
	varTotalScores[2] = 0;
	varTotalRounds[0] = 0;
	varTotalRounds[1] = 0;
	varTotalRounds[2] = 0;
	
	for (x = 0; x < arrGolferRounds.length; x++) {
		
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			for (z = 8; z <= 25; z++) {
				
				varTotalScores[0] += arrGolferRounds[x][z];
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					varTotalScores[1] += arrGolferRounds[x][z];
				}

				if (checkMajor(arrGolferRounds, x) == 0) {
					varTotalScores[2] += arrGolferRounds[x][z];
				}
			}
			
			varTotalRounds[0]++;
			
			if (checkMajor(arrGolferRounds, x) == 1) {
				varTotalRounds[1]++;
			}

			if (checkMajor(arrGolferRounds, x) == 0) {
				varTotalRounds[2]++;
			}
		}		
	}
	
	if (varTotalRounds[0] > 0) {
		varTempTotal = varTotalScores[0] / varTotalRounds[0];
		varTempTotal = Math.round(varTempTotal * 1000) / 1000;
	}
	if (varTotalRounds[1] > 0) {
		varTempMajor = varTotalScores[1] / varTotalRounds[1];
		varTempMajor = Math.round(varTempMajor * 1000) / 1000;
	}
	if (varTotalRounds[2] > 0) {
		varTempNonMajor = varTotalScores[2] / varTotalRounds[2];
		varTempNonMajor = Math.round(varTempNonMajor * 1000) / 1000;
	}
	
	return [varTempTotal, varTempMajor, varTempNonMajor];
}

/********************************************************************************************/

function getGolferAvgScoreNet(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varTotalScores		=	new Array();
	var varTotalRounds		=	new Array();
	var varTempTotal		=	0;
	var varTempMajor		=	0;
	var varTempNonMajor		=	0;
	
	varTotalScores[0] = 0;
	varTotalScores[1] = 0;
	varTotalScores[2] = 0;
	varTotalRounds[0] = 0;
	varTotalRounds[1] = 0;
	varTotalRounds[2] = 0;
	
	for (x = 0; x < arrGolferRounds.length; x++) {
		
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			for (z = 8; z <= 25; z++) {
				
				varTotalScores[0] += arrGolferRounds[x][z];
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					varTotalScores[1] += arrGolferRounds[x][z];
				}

				if (checkMajor(arrGolferRounds, x) == 0) {
					varTotalScores[2] += arrGolferRounds[x][z];
				}
			}
			
			varTotalRounds[0]++;
			varTotalScores[0] += arrGolferRounds[x][7];
			
			if (checkMajor(arrGolferRounds, x) == 1) {
				varTotalRounds[1]++;
				varTotalScores[1] += arrGolferRounds[x][7];
			}

			if (checkMajor(arrGolferRounds, x) == 0) {
				varTotalRounds[2]++;
				varTotalScores[2] += arrGolferRounds[x][7];
			}
		}		
	}
	
	if (varTotalRounds[0] > 0) {
		varTempTotal = varTotalScores[0] / varTotalRounds[0];
		varTempTotal = Math.round(varTempTotal * 1000) / 1000;
	}
	if (varTotalRounds[1] > 0) {
		varTempMajor = varTotalScores[1] / varTotalRounds[1];
		varTempMajor = Math.round(varTempMajor * 1000) / 1000;
	}
	if (varTotalRounds[2] > 0) {
		varTempNonMajor = varTotalScores[2] / varTotalRounds[2];
		varTempNonMajor = Math.round(varTempNonMajor * 1000) / 1000;
	}
	
	return [varTempTotal, varTempMajor, varTempNonMajor];
}

/********************************************************************************************/

function getGolferAvgScoreForPar(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varTotalScores		=	new Array();
	var varTotalRounds		=	new Array();
	var varTempTotal		=	0;
	var varTempMajor		=	0;
	var varTempNonMajor		=	0;
	
	varTotalScores[0] = 0;
	varTotalScores[1] = 0;
	varTotalScores[2] = 0;
	varTotalRounds[0] = 0;
	varTotalRounds[1] = 0;
	varTotalRounds[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[5])) {
			for (z = 8; z <= 25; z++) {
				
				q = z + 18;
				
				if (arrGolferRounds[x][q] == arguments[4]) {
					
					varTotalScores[0] += arrGolferRounds[x][z];
					varTotalRounds[0]++;
				
					if (checkMajor(arrGolferRounds, x) == 1) {
						varTotalScores[1] += arrGolferRounds[x][z];
						varTotalRounds[1]++;
					}

					if (checkMajor(arrGolferRounds, x) == 0) {
						varTotalScores[2] += arrGolferRounds[x][z];
						varTotalRounds[2]++;
					}
				}
			}
		}
	}
	
	if (varTotalRounds[0] > 0) {
		varTempTotal = varTotalScores[0] / varTotalRounds[0];
		varTempTotal = Math.round(varTempTotal * 1000) / 1000;
	}
	if (varTotalRounds[1] > 0) {
		varTempMajor = varTotalScores[1] / varTotalRounds[1];
		varTempMajor = Math.round(varTempMajor * 1000) / 1000;
	}
	if (varTotalRounds[2] > 0) {
		varTempNonMajor = varTotalScores[2] / varTotalRounds[2];
		varTempNonMajor = Math.round(varTempNonMajor * 1000) / 1000;
	}
	
	return [varTempTotal, varTempMajor, varTempNonMajor];
}

/********************************************************************************************/

function getGolferAvgFinish(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();		arrGolferRounds		=	getData_Rounds();
	var varAvgFinish		=	new Array();
	var varReturn			=	new Array();
	var varFinishTotal		=	new Array();
	var varRoundCount		=	new Array();
	var varTempAvg			=	0;
	var varTempMajor		=	0;
	var varTempNonMajor		=	0;
	
	varAvgFinish[0]		=	0;
	varAvgFinish[1]		=	0;
	varAvgFinish[2]		=	0;
	varFinishTotal[0]	=	0;
	varFinishTotal[1]	=	0;
	varFinishTotal[2]	=	0;
	varRoundCount[0]	=	0;
	varRoundCount[1]	=	0;
	varRoundCount[2]	=	0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		varSeasonTemp = arrGolferRounds[x][0].substr(6,9);
		
		if (checkDropdownSelections(arguments[0],arguments[1],arguments[2],arguments[3],arrGolferRounds,x,arguments[4])) {
			
			varFinishTotal[0] += arrGolferRounds[x][4];
			varRoundCount[0]++;
			
			if ( checkMajor(arrGolferRounds, x) == 1) {
				varFinishTotal[1] += arrGolferRounds[x][4];
				varRoundCount[1]++;
			}
			
			if ( checkMajor(arrGolferRounds, x) == 0) {
				varFinishTotal[2] += arrGolferRounds[x][4];
				varRoundCount[2]++;
			}
		}
	}
	
	if (varRoundCount[0] > 0) {
		varTempAvg = varFinishTotal[0] / varRoundCount[0];
		varTempAvg = Math.round(varTempAvg * 1000) / 1000;
	}
	if (varRoundCount[1] > 0)
	{
		varTempMajor = varFinishTotal[1] / varRoundCount[1];
		varTempMajor = Math.round(varTempMajor * 1000) / 1000;
	}
	if (varRoundCount[2] > 0)
	{
		varTempNonMajor = varFinishTotal[2] / varRoundCount[2];
		varTempNonMajor = Math.round(varTempNonMajor * 1000) / 1000;
	}

	return [varTempAvg, varTempMajor, varTempNonMajor];
}