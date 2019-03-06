/********************************************************************************************/

function getCurrentSeason() {
	var varCurrentSeason	=	0;
	var varSeasonTemp		=	0;
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	
	for (xx = 0; xx < arrRounds.length; xx++) {
		varSeasonTemp = arrRounds[xx][0].substr(6,9);
		
		if (varSeasonTemp > varCurrentSeason) {
			varCurrentSeason = varSeasonTemp;
		}
	}	
	
	return varCurrentSeason;
}

/********************************************************************************************/

function checkMajor(RoundsArray, X) {
	var arrGolferRounds		=	arguments[0];
	var varX				=	arguments[1];
	
	if (arrGolferRounds[varX][1] == "Bastards")			{ return true; }
	if (arrGolferRounds[varX][1] == "F.U. Open")		{ return true; }
	if (arrGolferRounds[varX][1] == "Bratish Open")		{ return true; }
	if (arrGolferRounds[varX][1] == "MGA Championship")	{ return true; }
	
	return false;
}

/********************************************************************************************/

function sortMDArray(arr, sortcol, sortdir) {
	var arrArray	=	arguments[0];
	var varX		=	arguments[1];
	var varAscDesc	=	arguments[2];
	
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

/********************************************************************************************/

function getSortOrder(RecordTitle) {
	if (arguments[0].indexOf("Most") > -1)		{ return "desc"; }
	if (arguments[0].indexOf("Highest") > -1)	{ return "desc"; }
	
	return "asc";
}

/********************************************************************************************/

function setSelectedValue(selectObj, valueToSet) {
	for (var i = 0; i < selectObj.options.length; i++) {
		if (selectObj.options[i].text== valueToSet) {
			selectObj.options[i].selected = true;
			return;
		}
	}
}


/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/



function getRecordTitle(MainTitle, optSingleSeason, optSingleEvent, optNoWins, optNoDQs, optTerm) {
	var varMainTitle		=	arguments[0];
	var varSingleSeason		=	arguments[1];
	var varSingleEvent		=	arguments[2];
	var varNoWins			=	arguments[3];
	var varNoDQs			=	arguments[4];
	var varTerm				=	arguments[5];

	if (varSingleSeason == 0) {
		if (varSingleEvent == 0) {
			if (varNoWins == 0) {
				if (varNoDQs == 0) {
					if (varTerm == "") {
						return varMainTitle;
					}
				}
			}
		}
	}
	
	varMainTitle = varMainTitle + "<div style='font-size: 0.6em;'>";
	
	if (varSingleSeason == 1) {
		varMainTitle = varMainTitle + "[Single Season]";
	}
	if (varSingleEvent == 1) {
		varMainTitle = varMainTitle + "[Single Event]";
	}
	if (varNoWins == 1) {
		if (varSingleSeason == 1) {
			varMainTitle = varMainTitle + "[No Wins in Season]";
		}
		else {
			varMainTitle = varMainTitle + "[No Wins in " + varTerm + "]";
		}
	}
	if (varNoDQs == 1) {
		if (varSingleSeason == 1) {
			varMainTitle = varMainTitle + "[No DQs in Season]";
		}
		else {
			varMainTitle = varMainTitle + "[No DQs in " + varTerm + "]";
		}
	}
	
	varMainTitle = varMainTitle + "</div>";
	
	return varMainTitle;
}

/********************************************************************************************/

function getScoreTypeTitle(Target, Comparison) {
	var varTarget		=	arguments[0];
	var varCompare		=	arguments[1];
	
	var varReturnTitle	=	"Unknown";
	
	if (varCompare == "=") {
		if (varTarget == "Eagle")		{varReturnTitle = "Most Eagles";}
		if (varTarget == "Birdie")		{varReturnTitle = "Most Birdies";}
		if (varTarget == "Par")			{varReturnTitle = "Most Pars";}
		if (varTarget == "Bogey")		{varReturnTitle = "Most Bogeys";}
		if (varTarget == "DblBogey")	{varReturnTitle = "Most Double Bogeys";}
		if (varTarget == "TrpBogey")	{varReturnTitle = "Most Triple Bogeys";}
	}
	if (varCompare == ">") {
		if (varTarget == "TrpBogey")	{varReturnTitle = "Most Worse Bogeys";}	
	}
	if (varCompare == "<") {
		if (varTarget == "Bogey")		{varReturnTitle = "Most Par or Better";}
		if (varTarget == "DblBogey")	{varReturnTitle = "Most Bogey or Better";}
	}
	
	return varReturnTitle;
}

/********************************************************************************************/

function getPositionalTitle(PositionBegin, PositionEnd) {
	var varBegin		=	arguments[0];
	var varEnd			=	arguments[1];
	
	var varReturnTitle	=	"Unknown";
	
	if (varBegin == 1){
		if (varEnd == 1)	{varReturnTitle = "Most Tournament Wins";}
		if (varEnd == 2)	{varReturnTitle = "Most Top 2 Finishes";}
		if (varEnd == 3)	{varReturnTitle = "Most Top 3 Finishes";}
		if (varEnd == 5)	{varReturnTitle = "Most Top 5 Finishes";}
		if (varEnd == 10)	{varReturnTitle = "Most Top 10 Finishes";}
		if (varEnd == 16)	{varReturnTitle = "Most Cashes";}
	}
	if (varBegin == 2) {
		if (varEnd == 2)	{varReturnTitle = "Most Runner-Up Finishes";}
	}
	if (varBegin == 17) {
		if (varEnd == 999)	{varReturnTitle = "Most Missed Cashes";}
	}
	
	return varReturnTitle;
}

/********************************************************************************************/

function getScoringTitle(Target, optNet) {
	var varTarget		=	arguments[0];
	var varNet			=	arguments[1];
	
	var varReturnTitle	=	"Unknown";
	
	if (varTarget == "Round")	{varReturnTitle = "Lowest Round";}
	
	if (varNet == 1)	{varReturnTitle = varReturnTitle + " (Net)";}
		else			{varReturnTitle = varReturnTitle + " (Gross)";}
	
	return varReturnTitle;
}

/********************************************************************************************/

function formatNumber(Title, NumberToFormat) {
	var varTitle			=	arguments[0];
	var varNumberToFormat	=	arguments[1];
	
	if (varTitle.indexOf("Earnings") > -1)	{ return varNumberToFormat.toFixed(2); }
	if (varTitle.indexOf("Score") > -1)		{ return varNumberToFormat.toFixed(3); }
	if (varTitle.indexOf("Avg") > -1)		{ return varNumberToFormat.toFixed(3); }
	
	return varNumberToFormat;
}

/********************************************************************************************/

function checkGolfer(RoundArray, GolferArray, X, Y) {
	var arrRounds	=	arguments[0];
	var arrGolfers	=	arguments[1];
	var varX		=	arguments[2];
	var varY		=	arguments[3];
	
	if (arrRounds[varY][3] == arrGolfers[varX]) {
		return true;
	}
	
	return false;
}

/********************************************************************************************/

function checkEvent(RoundArray, Event, X) {
	var arrRounds	=	arguments[0];
	var varEvent	=	arguments[1];
	var varX		=	arguments[2];
	
	if (varEvent == "All Events") {
		return true;
	}
	if (varEvent == arrRounds[varX][1]) {
		return true;
	}
	if (varEvent == "All Majors") {
		if (checkMajor(arrRounds, varX) == 1) {
			return true;
		}
	}
	if (varEvent == "All Non-Majors") {
		if (checkMajor(arrRounds, varX) == 0) {
			return true;
		}
	}
	
	return false;
}

/********************************************************************************************/

function checkCourse(RoundArray, Course, X) {
	var arrRounds	=	arguments[0];
	var varCourse	=	arguments[1];
	var varX		=	arguments[2];
	
	if (varCourse == "All Courses") {
		return true;
	}
	if (varCourse == arrRounds[varX][2]) {
		return true;
	}
	
	return false;
}

/********************************************************************************************/

function checkSeasonRange(SeasonBegin, SeasonEnd, SeasonToCheck, SeasonHold) {
	var varSeasonBegin		=	arguments[0];
	var varSeasonEnd		=	arguments[1];
	var varSeasonToCheck	=	arguments[2];
	var varSeasonHold		=	arguments[3];
	
	if (varSeasonHold == 0) {
		if (varSeasonBegin <= varSeasonToCheck) {
			if (varSeasonToCheck <= varSeasonEnd) {
				return true;
			}
		}
	}
	if (varSeasonHold == varSeasonToCheck) {
		if (varSeasonBegin <= varSeasonToCheck) {
			if (varSeasonToCheck <= varSeasonEnd) {
				return true;
			}
		}
	}
	
	return false;
}

/********************************************************************************************/

function checkValidRound(r, g, e, c, s, s1, s2, x, y, sh) {
	var arrRounds			=	arguments[0];
	var arrGolfers			=	arguments[1];
	var varEvent			=	arguments[2];
	var varCourse			=	arguments[3];
	var varSeasonToCheck	=	arguments[4];
	var varSeasonBegin		=	arguments[5];
	var varSeasonEnd		=	arguments[6];
	var varX				=	arguments[7];
	var varY				=	arguments[8];
	var varSeasonHold		=	arguments[9];
	
	if (checkGolfer(arrRounds, arrGolfers, varX, varY)) {
		if (checkSeasonRange(varSeasonBegin, varSeasonEnd, varSeasonToCheck, varSeasonHold)) {
			if (checkEvent(arrRounds, varEvent, varY)) {
				if (checkCourse(arrRounds, varCourse, varY)) {
					return true;
				}
			}
		}
	}
	
	return false;
}

/********************************************************************************************/

function checkPositionInRange(Position, SeasonBegin, SeasonEnd) {
	var varPos			=	arguments[0];
	var varRangeBegin	=	arguments[1];
	var varRangeEnd		=	arguments[2];

	if (varPos >= varRangeBegin) {
		if (varPos <= varRangeEnd) {
			return true;
		}
	}
	
	return false;
}

/********************************************************************************************/

function checkExclusionInRange(Golfer, Event, Course, SeasonBegin, SeasonEnd, optNoWins, optNoDQs) {
	var varGolfer		=	arguments[0];
	var varEvent		=	arguments[1];
	var varCourse		=	arguments[2];
	var varRangeBegin	=	arguments[3];
	var varRangeEnd		=	arguments[4];
	var varNoWin		=	arguments[5];
	var varNoDQ			=	arguments[6];
	
	var	arrRnds			=	new Array;
		arrRnds			=	getData_Rounds();
	var varSeasonTemp	=	0;
	
	for (q = 0; q < arrRnds.length; q++) {
		
		varSeasonTemp = arrRnds[q][0].substr(6,9);
		
		if (varGolfer == arrRnds[q][3]) {
			if (checkPositionInRange(varSeasonTemp,varRangeBegin,varRangeEnd)) {
				if (checkEvent(arrRnds,varEvent,q)) {
					if (checkCourse(arrRnds,varCourse,q)) {
						if (varNoWin == 1) {
							if (varNoDQ == 1) {
								if (arrRnds[q][4] == 1) {
									if (arrRnds[q][4] == 0) {
										return true;
									}
								}
							}
						}
						if (varNoWin == 1) {
							if (arrRnds[q][4] == 1) {
								return true;
							}
						}
						if (varNoDQ == 1) {
							if (arrRnds[q][4] == 0) {
								return true;
							}
						}
					}
				}
			}
		}
	}
	
	return false;
}

/********************************************************************************************/

function isExcluded(optTerm, Golfer, Event, Course, SeasonBegin, SeasonEnd, optNoWins, optNoDQs) {
	var varTerm			=	arguments[0];
	var varGolfer		=	arguments[1];
	var varEvent		=	arguments[2];
	var varCourse		=	arguments[3];
	var varSeason1		=	arguments[4];
	var varSeason2		=	arguments[5];
	var varNoWin		=	arguments[6];
	var varNoDQ			=	arguments[7];
	
	if (varTerm == "Career") {
		varSeason1 = 0;
		varSeason2 = 999999;
	}
	if (checkExclusionInRange(varGolfer,varEvent,varCourse,varSeason1,varSeason2,varNoWin,varNoDQ)) {
		return true;
	}
	
	return false;
}

/********************************************************************************************/

function getExtraInfoDetails(EventTitle, EventCount) {
	var varEventTitle	=	arguments[0];
	var varEventCount	=	arguments[1];
	
	var varReturnValue	=	"";
	
	if (varEventTitle == true) {
		
		varReturnValue = varReturnValue + varEventCount + " event";
		
		if (varEventCount > 1) {
			varReturnValue = varReturnValue + "s";
		}
	}
	
	return varReturnValue;
}

/********************************************************************************************/

function getParOffset(ScoreType) {
	var varScoreType	=	arguments[0];
	
	if (varScoreType.indexOf("Eagle") > -1)		{ return -2; }
	if (varScoreType.indexOf("Birdie") > -1)	{ return -1; }
	if (varScoreType.indexOf("Par") > -1)		{ return 0; }
	if (varScoreType.indexOf("TrpBogey") > -1)	{ return 3; }
	if (varScoreType.indexOf("DblBogey") > -1)	{ return 2; }
	if (varScoreType.indexOf("Bogey") > -1)		{ return 1; }
	
	return -999;
}

/********************************************************************************************/

function getRoundTotal(RoundArray, X, optNet) {
	var arrRound	=	new Array();
		arrRound	=	arguments[0];
	var varX		=	arguments[1];
	var varNet		=	arguments[2];
	
	var varTotal	=	0;
	
	for (r = 0; r < 18; r++) {
		varTotal += arrRound[varX][r + 8];
	}
	
	if (varNet == 1) {
		varTotal += arrRound[varX][7];
	}
	
	return varTotal;
}

/********************************************************************************************/

function getScoreTypeTotal(RoundArray, X, Offset, Comparison) {
	var arrRound	=	new Array();
		arrRound	=	arguments[0];
	var varX		=	arguments[1];
	var varOffset	=	arguments[2];
	var varCompare	=	arguments[3];
	
	var varTotal	=	0;

	for (r = 0; r < 18; r++) {
		if (varCompare == "=") {
			if (arrRound[varX][r + 8] == arrRound[varX][r + 26] + varOffset) {
				varTotal++;
			}
		}
		if (varCompare == ">") {
			if (arrRound[varX][r + 8] > arrRound[varX][r + 26] + varOffset) {
				varTotal++;
			}
		}
		if (varCompare == "<") {
			if (arrRound[varX][r + 8] < arrRound[varX][r + 26] + varOffset) {
				varTotal++;
			}
		}
	}
	
	return varTotal;
}



/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

function getRecord_MostEarnings(Event, Course, SeasonBegin, SeasonEnd, optNoWins, optTerm) {
	var varEvent			=	arguments[0];
	var varCourse			=	arguments[1];
	var varSeason1			=	arguments[2];
	var varSeason2			=	arguments[3];
	var varNoWin			=	arguments[4];
	var varTerm				=	arguments[5];
	
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	var arrGolfers			=	new Array();
		arrGolfers			=	getData_Golfers().sort();
	var arrStat				=	new Array();
	var arrYear				=	new Array();
	var arrExtraInfo		=	new Array();
	var varNoDQ				=	0;
	var varSeasonTemp		=	0;
	var varEventCount		=	0;
	var varSingleSeason		=	0;
	var varSingleEvent		=	0;
	var varReturnTitle		=	"Highest Earnings";
		varReturnTitle		=	getRecordTitle(varReturnTitle,varSingleSeason,varSingleEvent,varNoWin,varNoDQ,varTerm);

	for (x = 0; x < arrGolfers.length; x++) {
		
		arrStat[x] = 0;
		varEventCount = 0;
		
		for (y = 0; y < arrRounds.length; y++) {
			
			varSeasonTemp = arrRounds[y][0].substr(6,9);
			
			if (checkValidRound(arrRounds,arrGolfers,varEvent,varCourse,varSeasonTemp,varSeason1,varSeason2,x,y,0)) {
				arrStat[x] += arrRounds[y][6];
				varEventCount++;
			}
		}
		
		if (isExcluded(varTerm,arrGolfers[x],varEvent,varCourse,varSeason1,varSeason2,varNoWin)) {
			arrStat[x] = 0;
		}
		
		arrStat[x] = parseFloat(arrStat[x].toFixed(2));
		arrYear[x] = "-";
		arrExtraInfo[x] = getExtraInfoDetails(true,varEventCount);
	}
	
	return [arrGolfers, arrStat, arrYear, arrExtraInfo, varReturnTitle];
}

/********************************************************************************************/

function getRecord_MostEarnings_SingleSeason(Event, Course, SeasonBegin, SeasonEnd, optNoWins, optTerm) {
	var varEvent			=	arguments[0];
	var varCourse			=	arguments[1];
	var varSeason1			=	arguments[2];
	var varSeason2			=	arguments[3];
	var varNoWin			=	arguments[4];
	var varTerm				=	arguments[5];
	
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	var arrGolfers			=	new Array();
		arrGolfers			=	getData_Golfers().sort();
	var arrSeasonLoop		=	new Array();
		arrSeasonLoop		=	getData_Seasons().reverse();
	var arrStat				=	new Array();
	var arrYear				=	new Array();
	var arrExtraInfo		=	new Array();
	var arrResultGolfers	=	new Array();
	var varNoDQ				=	0;
	var varSeasonTemp		=	0;
	var varEventCount		=	0;
	var varSeasonHold		=	0;
	var varResultIndex		=	-1;
	var varSingleSeason		=	1;
	var varSingleEvent		=	0;
	var varReturnTitle		=	"Highest Earnings";
		varReturnTitle		=	getRecordTitle(varReturnTitle,varSingleSeason,varSingleEvent,varNoWin,varNoDQ,varTerm);
	
	for (z = 0; z < arrSeasonLoop.length; z++) {
		
		varSeasonHold = arrSeasonLoop[z];
		
		for (x = 0; x < arrGolfers.length; x++) {
			
			varEventCount = 0;
			varResultIndex++;
			arrStat[varResultIndex] = 0;
			
			for (y = 0; y < arrRounds.length; y++) {
				
				varSeasonTemp = arrRounds[y][0].substr(6,9);
				
				if (checkValidRound(arrRounds,arrGolfers,varEvent,varCourse,varSeasonTemp,varSeason1,varSeason2,x,y,varSeasonHold)) {
					arrStat[varResultIndex] += arrRounds[y][6];
					varEventCount++;
				}
			}
			
			if (isExcluded(varTerm,arrGolfers[x],varEvent,varCourse,varSeasonHold,varSeasonHold,varNoWin)) {
				arrStat[varResultIndex] = 0;
			}
			
			arrStat[varResultIndex] = parseFloat(arrStat[varResultIndex].toFixed(2));
			arrResultGolfers[varResultIndex] = arrGolfers[x];
			arrYear[varResultIndex] = varSeasonHold;
			arrExtraInfo[varResultIndex] = getExtraInfoDetails(true,varEventCount);
		}
	}
	
	return [arrResultGolfers, arrStat, arrYear, arrExtraInfo, varReturnTitle];
}

/********************************************************************************************/

function getRecord_ScoringMisc(Event, Course, SeasonBegin, SeasonEnd, Target, optNet, optNoWins, optNoDQs, optPar) {
	var varEvent			=	arguments[0];
	var varCourse			=	arguments[1];
	var varSeason1			=	arguments[2];
	var varSeason2			=	arguments[3];
	var varTarget			=	arguments[4];
	var varNet				=	arguments[5];
	var varNoWin			=	arguments[6];
	var varNoDQ				=	arguments[7];
	var varPar				=	arguments[8];
	
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	var arrGolfers			=	new Array();
		arrGolfers			=	getData_Golfers().sort();
	var arrStat				=	new Array();
	var arrYear				=	new Array();
	var arrExtraInfo		=	new Array();
	var arrResultGolfers	=	new Array();
	var varTerm				=	"Range"
	var varSeasonTemp		=	0;
	var varEventCount		=	0;
	var varTotal			=	0;
	var varResultIndex		=	0;
	var varSingleSeason		=	0;
	var varSingleEvent		=	0;
	var varReturnTitle		=	getScoringTitle(varTarget, varNet);
		varReturnTitle		=	getRecordTitle(varReturnTitle,varSingleSeason,varSingleEvent,varNoWin,varNoDQ,varTerm);
	
	arrStat[varResultIndex] = 0;

	for (x = 0; x < arrGolfers.length; x++) {
		
		varEventCount = 0;
		
		for (y = 0; y < arrRounds.length; y++) {
			
			varSeasonTemp = arrRounds[y][0].substr(6,9);
			
			if (checkValidRound(arrRounds,arrGolfers,varEvent,varCourse,varSeasonTemp,varSeason1,varSeason2,x,y,0)) {
				
				varResultIndex++;
				varEventCount++;
				arrStat[varResultIndex] = 0;
				varTotal = 0;

				if (varTarget == "Round") {
					varTotal = getRoundTotal(arrRounds,y,varNet);
				}
				
				if (varNoWin == 1 || varNoDQ == 1) {
					if (isExcluded("",arrGolfers[x],varEvent,varCourse,varSeason1,varSeason2,varNoWin,varNoDQ)) {
						varTotal = 0;
					}
				}
				
				arrStat[varResultIndex] = varTotal;
				arrResultGolfers[varResultIndex] = arrGolfers[x];
				arrYear[varResultIndex] = "-";
				arrExtraInfo[varResultIndex] = "-";
			}
		}
	}
	
	return [arrResultGolfers, arrStat, arrYear, arrExtraInfo, varReturnTitle];
}

/********************************************************************************************/

function getRecord_HoleScoringMisc(Event, Course, SeasonBegin, SeasonEnd, Target, optNet, optNoWins, optNoDQs, optPar) {
	var varEvent			=	arguments[0];
	var varCourse			=	arguments[1];
	var varSeason1			=	arguments[2];
	var varSeason2			=	arguments[3];
	var varTarget			=	arguments[4];
	var varNet				=	arguments[5];
	var varNoWin			=	arguments[6];
	var varNoDQ				=	arguments[7];
	var varPar				=	arguments[8];
	
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	var arrGolfers			=	new Array();
		arrGolfers			=	getData_Golfers().sort();
	var arrStat				=	new Array();
	var arrYear				=	new Array();
	var arrExtraInfo		=	new Array();
	var arrResultGolfers	=	new Array();
	var varTerm				=	""
	var varSeasonTemp		=	0;
	var varEventCount		=	0;
	var varTotal			=	0;
	var varResultIndex		=	-1;
	var varCompare 			=	varTarget[0];
	var varTarget			=	varTarget.slice(1, varTarget.length);
	var varOffset			=	getParOffset(varTarget);
	var varSingleSeason		=	0;
	var varSingleEvent		=	0;
	var varReturnTitle		=	getScoreTypeTitle(varTarget, varCompare);
		varReturnTitle		=	getRecordTitle(varReturnTitle,varSingleSeason,varSingleEvent,varNoWin,varNoDQ,varTerm);

	arrStat[varResultIndex] = 0;

	for (x = 0; x < arrGolfers.length; x++) {
		
		varEventCount = 0;
		varTotal = 0;
		varResultIndex++;
		arrStat[varResultIndex] = 0;	
		
		for (y = 0; y < arrRounds.length; y++) {
			
			varSeasonTemp = arrRounds[y][0].substr(6,9);
			
			if (checkValidRound(arrRounds,arrGolfers,varEvent,varCourse,varSeasonTemp,varSeason1,varSeason2,x,y,0)) {
				varEventCount++;
				varTotal += getScoreTypeTotal(arrRounds,y,varOffset,varCompare);
			}
		}
		arrStat[varResultIndex] = varTotal;
		arrResultGolfers[varResultIndex] = arrGolfers[x];
		arrYear[varResultIndex] = "-";
		arrExtraInfo[varResultIndex] = "-";
	}
	return [arrResultGolfers, arrStat, arrYear, arrExtraInfo, varReturnTitle];
}

/********************************************************************************************/

function getRecord_HoleScoringMisc_SingleSeason(Event, Course, SeasonBegin, SeasonEnd, Target, optNet, optNoWins, optNoDQs, optPar) {
	var varEvent			=	arguments[0];
	var varCourse			=	arguments[1];
	var varSeason1			=	arguments[2];
	var varSeason2			=	arguments[3];
	var varTarget			=	arguments[4];
	var varNet				=	arguments[5];
	var varNoWin			=	arguments[6];
	var varNoDQ				=	arguments[7];
	var varPar				=	arguments[8];
	
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	var arrGolfers			=	new Array();
		arrGolfers			=	getData_Golfers().sort();
	var arrStat				=	new Array();
	var arrYear				=	new Array();
	var arrExtraInfo		=	new Array();
	var arrResultGolfers	=	new Array();
	var arrSeasonLoop		=	new Array();
		arrSeasonLoop		=	getData_Seasons().reverse();
	var varSeasonHold		=	0;
	var varTerm				=	""
	var varSeasonTemp		=	0;
	var varEventCount		=	0;
	var varTotal			=	0;
	var varResultIndex		=	-1;
	var varCompare 			=	varTarget[0];
	var varTarget			=	varTarget.slice(1, varTarget.length);
	var varOffset			=	getParOffset(varTarget);
	var varSingleSeason		=	0;
	var varSingleEvent		=	0;
	var varReturnTitle		=	getScoreTypeTitle(varTarget, varCompare);
		varReturnTitle		=	getRecordTitle(varReturnTitle,varSingleSeason,varSingleEvent,varNoWin,varNoDQ,varTerm);

	arrStat[varResultIndex] = 0;

	for (z = 0; z < arrSeasonLoop.length; z++) {
		
		varSeasonHold = arrSeasonLoop[z];
		
		for (x = 0; x < arrGolfers.length; x++) {
			
			varEventCount = 0;
			varTotal = 0;
			varResultIndex++;
			arrStat[varResultIndex] = 0;	
			
			for (y = 0; y < arrRounds.length; y++) {
				
				varSeasonTemp = arrRounds[y][0].substr(6,9);
				
				if (checkValidRound(arrRounds,arrGolfers,varEvent,varCourse,varSeasonTemp,varSeason1,varSeason2,x,y,varSeasonHold)) {
					varEventCount++;
					varTotal += getScoreTypeTotal(arrRounds,y,varOffset,varCompare);
				}
			}
			arrStat[varResultIndex] = varTotal;
			arrResultGolfers[varResultIndex] = arrGolfers[x];
			arrYear[varResultIndex] = varSeasonHold;
			arrExtraInfo[varResultIndex] = getExtraInfoDetails(true,varEventCount);
		}
	}
	return [arrResultGolfers, arrStat, arrYear, arrExtraInfo, varReturnTitle];
}

/********************************************************************************************/

function getRecord_HoleScoringMisc_SingleEvent(Event, Course, SeasonBegin, SeasonEnd, Target, optNet, optNoWins, optNoDQs, optPar) {
	var varEvent			=	arguments[0];
	var varCourse			=	arguments[1];
	var varSeason1			=	arguments[2];
	var varSeason2			=	arguments[3];
	var varTarget			=	arguments[4];
	var varNet				=	arguments[5];
	var varNoWin			=	arguments[6];
	var varNoDQ				=	arguments[7];
	var varPar				=	arguments[8];
	
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	var arrGolfers			=	new Array();
		arrGolfers			=	getData_Golfers().sort();
	var arrStat				=	new Array();
	var arrYear				=	new Array();
	var arrExtraInfo		=	new Array();
	var arrResultGolfers	=	new Array();
	var arrSeasonLoop		=	new Array();
		arrSeasonLoop		=	getData_Seasons().reverse();
	var varSeasonHold		=	0;
	var varTerm				=	""
	var varSeasonTemp		=	0;
	var varDateHold			=	"";
	var varCourseHold		=	"";
	var varTotal			=	0;
	var varResultIndex		=	-1;
	var varCompare 			=	varTarget[0];
	var varTarget			=	varTarget.slice(1, varTarget.length);
	var varOffset			=	getParOffset(varTarget);
	var varSingleSeason		=	0;
	var varSingleEvent		=	0;
	var varReturnTitle		=	getScoreTypeTitle(varTarget, varCompare);
		varReturnTitle		=	getRecordTitle(varReturnTitle,varSingleSeason,varSingleEvent,varNoWin,varNoDQ,varTerm);

	for (x = 0; x < arrGolfers.length; x++) {
		
		for (y = 0; y < arrRounds.length; y++) {

			varResultIndex++;
			varDateHold = arrRounds[y][0];
			varCourseHold = arrRounds[y][2];
			arrStat[varResultIndex] = 0;
			varTotal = 0;
			varSeasonTemp = arrRounds[y][0].substr(6,9);
			
			if (checkValidRound(arrRounds,arrGolfers,varEvent,varCourse,varSeasonTemp,varSeason1,varSeason2,x,y,varSeasonHold)) {
				varTotal += getScoreTypeTotal(arrRounds,y,varOffset,varCompare);
				
				arrStat[varResultIndex] = varTotal;
				arrResultGolfers[varResultIndex] = arrGolfers[x];
				arrYear[varResultIndex] = varDateHold;
				arrExtraInfo[varResultIndex] = varCourseHold;
			}		
		}
	}
			
	return [arrResultGolfers, arrStat, arrYear, arrExtraInfo, varReturnTitle];
}

/********************************************************************************************/

function getRecord_HoleScoringMisc_Consecutive(Event, Course, SeasonBegin, SeasonEnd, Target, optNet, optNoWins, optNoDQs, optPar) {
	var varEvent			=	arguments[0];
	var varCourse			=	arguments[1];
	var varSeason1			=	arguments[2];
	var varSeason2			=	arguments[3];
	var varTarget			=	arguments[4];
	var varNet				=	arguments[5];
	var varNoWin			=	arguments[6];
	var varNoDQ				=	arguments[7];
	var varPar				=	arguments[8];
	
	var arrRounds			=	new Array();
		arrRounds			=	getData_Rounds();
	var arrGolfers			=	new Array();
		arrGolfers			=	getData_Golfers().sort();
	var arrStat				=	new Array();
	var arrYear				=	new Array();
	var arrExtraInfo		=	new Array();
	var arrResultGolfers	=	new Array();
	var arrSeasonLoop		=	new Array();
		arrSeasonLoop		=	getData_Seasons().reverse();
	var varSeasonHold		=	0;
	var varTerm				=	""
	var varSeasonTemp		=	0;
	var varTotal			=	0;
	var varResultIndex		=	0;
	var varCompare 			=	varTarget[0];
	var varTarget			=	varTarget.slice(1, varTarget.length);
	var varOffset			=	getParOffset(varTarget);
	var varSingleSeason		=	0;
	var varSingleEvent		=	0;
	var varReturnTitle		=	getScoreTypeTitle(varTarget, varCompare);
		//varReturnTitle		=	getRecordTitle(varReturnTitle,varSingleSeason,varSingleEvent,varNoWin,varNoDQ,varTerm);
	var varKeepCounting		=	true;

	for (x = 0; x < arrGolfers.length; x++) {
		
		varTotal = 0;
		
		for (y = 0; y < arrRounds.length; y++) {
			
			varSeasonTemp = arrRounds[y][0].substr(6,9);
			
			if (checkValidRound(arrRounds,arrGolfers,varEvent,varCourse,varSeasonTemp,varSeason1,varSeason2,x,y,varSeasonHold)) {
				
				arrStat[varResultIndex] = 0;
				
				for (r = 0; r < 18; r++) {
					if (varCompare == "=") {
						if (arrRounds[y][r + 8] == arrRounds[y][r + 26] + varOffset) {
							varTotal++;
						} else {
							varKeepCounting = false;
						}
					}
					if (varCompare == ">") {
						if (arrRounds[y][r + 8] > arrRounds[y][r + 26] + varOffset) {
							varTotal++;
						} else {
							varKeepCounting = false;
						}
					}
					if (varCompare == "<") {
						if (arrRounds[y][r + 8] < arrRounds[y][r + 26] + varOffset) {
							varTotal++;
						} else {
							varKeepCounting = false;
						}
					}
					
					if (varKeepCounting == false) {
						if (varTotal > 1) {
							//alert(arrGolfers[x] + " | " + varTotal);
							arrStat[varResultIndex] = varTotal;
							arrResultGolfers[varResultIndex] = arrGolfers[x];
							arrYear[varResultIndex] = "-";
							arrExtraInfo[varResultIndex] = "-";
							
							varResultIndex++;
						}
							varKeepCounting = true;
							varTotal = 0;
					}
				}
			}		
		}
	}
			
	return [arrResultGolfers, arrStat, arrYear, arrExtraInfo, varReturnTitle];
}

/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

function displayGolferInfo(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	arrDisplay = getGolferEventCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferEvents").innerHTML = arrDisplay[0];
	document.getElementById("GolferEventsMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferEventsNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferPosCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],1);
	document.getElementById("GolferWins").innerHTML = arrDisplay[0];
	document.getElementById("GolferWinsMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferWinsNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferPosCountPercent(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],1);
	document.getElementById("GolferWinsPerc").innerHTML = arrDisplay[0].toFixed(2) + " %";
	document.getElementById("GolferWinsMajorPerc").innerHTML = arrDisplay[1].toFixed(2) + " %";
	document.getElementById("GolferWinsNonMajorPerc").innerHTML = arrDisplay[2].toFixed(2) + " %";

	arrDisplay = getGolferPosCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],2);
	document.getElementById("GolferRunnerUps").innerHTML = arrDisplay[0];
	document.getElementById("GolferRunnerUpsMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferRunnerUpsNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferPosCountPercent(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],2);
	document.getElementById("GolferRunnerUpsPerc").innerHTML = arrDisplay[0].toFixed(2) + " %";
	document.getElementById("GolferRunnerUpsMajorPerc").innerHTML = arrDisplay[1].toFixed(2) + " %";
	document.getElementById("GolferRunnerUpsNonMajorPerc").innerHTML = arrDisplay[2].toFixed(2) + " %";

	arrDisplay =  getGolferPosCount(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],0);
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

	arrDisplay = getGolferEarningsAvg(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferEarningsAvg").innerHTML = arrDisplay[0].toFixed(2);
	document.getElementById("GolferEarningsMajorAvg").innerHTML = arrDisplay[1].toFixed(2);
	document.getElementById("GolferEarningsNonMajorAvg").innerHTML = arrDisplay[2].toFixed(2);

	arrDisplay = getGolferTopXCount(arguments[0],arguments[1],arguments[2],arguments[3],16,arguments[4]);
	document.getElementById("GolferCashes").innerHTML = arrDisplay[0];
	document.getElementById("GolferCashesMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferCashesNonMajor").innerHTML = arrDisplay[2];

	arrDisplay = getGolferAvgScore(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],false);
	document.getElementById("GolferAvgScoreGross").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgScoreGrossMajor").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgScoreGrossNonMajor").innerHTML = arrDisplay[2].toFixed(3);

	arrDisplay = getGolferAvgScore(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],true);
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

	arrDisplay = getGolferAvgFinish(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
	document.getElementById("GolferAvgFinish").innerHTML = arrDisplay[0].toFixed(3);
	document.getElementById("GolferAvgFinishMajor").innerHTML = arrDisplay[1].toFixed(3);
	document.getElementById("GolferAvgFinishNonMajor").innerHTML = arrDisplay[2].toFixed(3);
	
	arrDisplay = getGolferLowRound(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],false);
	document.getElementById("GolferLowRoundGross").innerHTML = arrDisplay[0];
	document.getElementById("GolferLowRoundGrossMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferLowRoundGrossNonMajor").innerHTML = arrDisplay[2];
	
	arrDisplay = getGolferLowRound(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],true);
	document.getElementById("GolferLowRoundNet").innerHTML = arrDisplay[0];
	document.getElementById("GolferLowRoundNetMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferLowRoundNetNonMajor").innerHTML = arrDisplay[2];
	
	arrDisplay = getGolferHighRound(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],false);
	document.getElementById("GolferHighRoundGross").innerHTML = arrDisplay[0];
	document.getElementById("GolferHighRoundGrossMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferHighRoundGrossNonMajor").innerHTML = arrDisplay[2];
	
	arrDisplay = getGolferHighRound(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],true);
	document.getElementById("GolferHighRoundNet").innerHTML = arrDisplay[0];
	document.getElementById("GolferHighRoundNetMajor").innerHTML = arrDisplay[1];
	document.getElementById("GolferHighRoundNetNonMajor").innerHTML = arrDisplay[2];
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
	var varGolferName		=	arguments[0];
	var varEventName		=	arguments[1];
	var varCourseName		=	arguments[2];
	var varSeason			=	arguments[3];
	var arrGolferRounds		=	arguments[4];
	var varX				=	arguments[5];
	var varSeason2			=	arguments[6];
	
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
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var varEventCount		=	new Array();
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	
	varEventCount[0] = 0;
	varEventCount[1] = 0;
	varEventCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
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

function getGolferPosCount(Golfer, Event, Course, SeasonBegin, SeasonEnd, Pos) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var arrPosCount			=	new Array();
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	var varPos				=	arguments[5];
	
	arrPosCount[0] = 0;
	arrPosCount[1] = 0;
	arrPosCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
			if (arrGolferRounds[x][4] == varPos) {
				
				arrPosCount[0]++;
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					arrPosCount[1]++;
				}
				if (checkMajor(arrGolferRounds, x) == 0) {
					arrPosCount[2]++;
				}
			}
		}
	}

	return [arrPosCount[0],arrPosCount[1],arrPosCount[2]];
}

/********************************************************************************************/

function getGolferPosCountPercent(Golfer, Event, Course, SeasonBegin, SeasonEnd, Pos) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var arrEventCounts		=	new Array();
	var arrPosCount			=	new Array();
	var varTotal			=	0;
	var varTotMajor			=	0;
	var varTotNonMajor		=	0;
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	var varPos				=	arguments[5];
	
	arrPosCount[0] = 0;
	arrPosCount[1] = 0;
	arrPosCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
			if (arrGolferRounds[x][4] == varPos) {
				
				arrPosCount[0]++;
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					arrPosCount[1]++;
				}
				if (checkMajor(arrGolferRounds, x) == 0) {
					arrPosCount[2]++;
				}
			}
		}
	}
	
	arrEventCounts = getGolferEventCount(varGolfer,varEvent,varCourse,varSeasonBegin,varSeasonEnd);
	
	if (arrEventCounts[0] > 0) {
		varTotal = arrPosCount[0] / arrEventCounts[0];
		varTotal = Math.round(varTotal * 10000) / 100;
	}
	if (arrEventCounts[1] > 0) {
		varTotMajor = arrPosCount[1] / arrEventCounts[1];
		varTotMajor = Math.round(varTotMajor * 10000) / 100;
	}
	if (arrEventCounts[2] > 0) {
		varTotNonMajor = arrPosCount[2] / arrEventCounts[2];
		varTotNonMajor = Math.round(varTotNonMajor * 10000) / 100;
	}

	return [varTotal,varTotMajor,varTotNonMajor];
}

/********************************************************************************************/

function getGolferTopXCount(Golfer, Event, Course, SeasonBegin, TopX, SeasonEnd) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var varTopXCount		=	new Array();
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varPos				=	arguments[4];
	var varSeasonEnd		=	arguments[5];
	
	varTopXCount[0] = 0;
	varTopXCount[1] = 0;
	varTopXCount[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
		    
			if (arrGolferRounds[x][4] <= varPos) {
				
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
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var varEarnings			=	new Array();
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	
	varEarnings[0] = 0;
	varEarnings[1] = 0;
	varEarnings[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
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

function getGolferEarningsAvg(Golfer, Event, Course, SeasonBegin, SeasonEnd) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var arrEventCounts		=	new Array();
	var arrEarnings			=	new Array();
	var varTotal			=	0;
	var varTotMajor			=	0;
	var varTotNonMajor		=	0;
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	
	arrEarnings[0] = 0;
	arrEarnings[1] = 0;
	arrEarnings[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
			arrEarnings[0] += arrGolferRounds[x][6];
			
			if (checkMajor(arrGolferRounds, x) == 1) {
				arrEarnings[1] += arrGolferRounds[x][6];
			}
			if (checkMajor(arrGolferRounds, x) == 0) {
				arrEarnings[2] += arrGolferRounds[x][6];
			}
		}
	}
	
	arrEventCounts = getGolferEventCount(varGolfer,varEvent,varCourse,varSeasonBegin,varSeasonEnd);
	
	if (arrEventCounts[0] > 0) {
		varTotal = arrEarnings[0] / arrEventCounts[0];
		varTotal = Math.round(varTotal * 1000) / 1000;
	}
	if (arrEventCounts[1] > 0) {
		varTotMajor = arrEarnings[1] / arrEventCounts[1];
		varTotMajor = Math.round(varTotMajor * 1000) / 1000;
	}
	if (arrEventCounts[2] > 0) {
		varTotNonMajor = arrEarnings[2] / arrEventCounts[2];
		varTotNonMajor = Math.round(varTotNonMajor * 1000) / 1000;
	}

	return [varTotal,varTotMajor,varTotNonMajor];
}

/********************************************************************************************/

function getGolferAvgScore(Golfer, Event, Course, SeasonBegin, SeasonEnd, isNet) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var varTotalScores		=	new Array();
	var varTotalRounds		=	new Array();
	var varTempTotal		=	0;
	var varTempMajor		=	0;
	var varTempNonMajor		=	0;
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	var varIsNet			=	arguments[5];
	
	varTotalScores[0] = 0;
	varTotalScores[1] = 0;
	varTotalScores[2] = 0;
	varTotalRounds[0] = 0;
	varTotalRounds[1] = 0;
	varTotalRounds[2] = 0;
	
	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
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
			
			if (varIsNet) {
				varTotalScores[0] += arrGolferRounds[x][7];
			}
			
			if (checkMajor(arrGolferRounds, x) == 1) {
				
				varTotalRounds[1]++;
				
				if (varIsNet) {
					varTotalScores[1] += arrGolferRounds[x][7];
				}
			}

			if (checkMajor(arrGolferRounds, x) == 0) {
				
				varTotalRounds[2]++;
				
				if (varIsNet) {
					varTotalScores[2] += arrGolferRounds[x][7];
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

function getGolferAvgScoreForPar(Golfer, Event, Course, SeasonBegin, Par, SeasonEnd) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var varTotalScores		=	new Array();
	var varTotalRounds		=	new Array();
	var varTempTotal		=	0;
	var varTempMajor		=	0;
	var varTempNonMajor		=	0;
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varPar				=	arguments[4];
	var varSeasonEnd		=	arguments[5];
	
	varTotalScores[0] = 0;
	varTotalScores[1] = 0;
	varTotalScores[2] = 0;
	varTotalRounds[0] = 0;
	varTotalRounds[1] = 0;
	varTotalRounds[2] = 0;

	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
			for (z = 8; z <= 25; z++) {
				
				q = z + 18;
				
				if (arrGolferRounds[x][q] == varPar) {
					
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
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var varAvgFinish		=	new Array();
	var varReturn			=	new Array();
	var varFinishTotal		=	new Array();
	var varRoundCount		=	new Array();
	var varTempAvg			=	0;
	var varTempMajor		=	0;
	var varTempNonMajor		=	0;
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	
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

		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {

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
	if (varRoundCount[1] > 0) {
		varTempMajor = varFinishTotal[1] / varRoundCount[1];
		varTempMajor = Math.round(varTempMajor * 1000) / 1000;
	}
	if (varRoundCount[2] > 0) {
		varTempNonMajor = varFinishTotal[2] / varRoundCount[2];
		varTempNonMajor = Math.round(varTempNonMajor * 1000) / 1000;
	}

	return [varTempAvg, varTempMajor, varTempNonMajor];
}

/********************************************************************************************/

function getGolferLowRound(Golfer, Event, Course, SeasonBegin, SeasonEnd, isNet) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var arrLowRound			=	new Array();
	var arrTotalScores		=	new Array();
	var arrLowRoundHold		=	new Array();
	var varReturn			=	0;
	var varReturnMajor		=	0;
	var varReturnNonMajor	=	0;
	var varPenalty			=	0;
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	var varIsNet			=	arguments[5];
	
	arrLowRoundHold[0]		=	999;
	arrLowRoundHold[1]		=	999;
	arrLowRoundHold[2]		=	999;
	
	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
			arrTotalScores[0]	=	0;
			arrTotalScores[1]	=	0;
			arrTotalScores[2]	=	0;
			varPenalty			=	0;
			
			if (varIsNet) {
				varPenalty = arrGolferRounds[x][7];
			}
			
			for (z = 8; z <= 25; z++) {
				
				arrTotalScores[0] += arrGolferRounds[x][z];
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					arrTotalScores[1] += arrGolferRounds[x][z];
				} else {
					arrTotalScores[1] = (999 + varPenalty);
				}

				if (checkMajor(arrGolferRounds, x) == 0) {
					arrTotalScores[2] += arrGolferRounds[x][z];
				} else {
					arrTotalScores[2] = (999 + varPenalty);
				}
			}
			
			arrTotalScores[0] = arrTotalScores[0] + varPenalty;
			arrTotalScores[1] = arrTotalScores[1] + varPenalty;
			arrTotalScores[2] = arrTotalScores[2] + varPenalty;
			
			if (arrTotalScores[0] < arrLowRoundHold[0]) {
				arrLowRoundHold[0] = arrTotalScores[0];
			}
			
			if (arrTotalScores[1] < arrLowRoundHold[1]) {
				arrLowRoundHold[1] = arrTotalScores[1];
			}
			
			if (arrTotalScores[2] < arrLowRoundHold[2]) {
				arrLowRoundHold[2] = arrTotalScores[2];
			}
		}
	}

	varReturn = arrLowRoundHold[0];
	
	if (arrLowRoundHold[1] != (999 + varPenalty)) {
		varReturnMajor = arrLowRoundHold[1];
	}
	
	if (arrLowRoundHold[2] != (999 + varPenalty)) {
		varReturnNonMajor = arrLowRoundHold[2];
	}
	
	return [varReturn, varReturnMajor, varReturnNonMajor];
}

/********************************************************************************************/

function getGolferHighRound(Golfer, Event, Course, SeasonBegin, SeasonEnd, isNet) {
	var arrGolferRounds		=	new Array();
		arrGolferRounds		=	getData_Rounds();
	var arrLowRound			=	new Array();
	var arrTotalScores		=	new Array();
	var arrLowRoundHold		=	new Array();
	var varReturn			=	0;
	var varReturnMajor		=	0;
	var varReturnNonMajor	=	0;
	var varPenalty			=	0;
	
	var varGolfer			=	arguments[0];
	var varEvent			=	arguments[1];
	var varCourse			=	arguments[2];
	var varSeasonBegin		=	arguments[3];
	var varSeasonEnd		=	arguments[4];
	var varIsNet			=	arguments[5];
	
	arrLowRoundHold[0]		=	0;
	arrLowRoundHold[1]		=	0;
	arrLowRoundHold[2]		=	0;
	
	for (x = 0; x < arrGolferRounds.length; x++) {
		
		if (checkDropdownSelections(varGolfer,varEvent,varCourse,varSeasonBegin,arrGolferRounds,x,varSeasonEnd)) {
			
			arrTotalScores[0]	=	0;
			arrTotalScores[1]	=	0;
			arrTotalScores[2]	=	0;
			varPenalty			=	0;
			
			if (varIsNet) {
				varPenalty = arrGolferRounds[x][7];
			}
			
			for (z = 8; z <= 25; z++) {
				
				arrTotalScores[0] += arrGolferRounds[x][z];
				
				if (checkMajor(arrGolferRounds, x) == 1) {
					arrTotalScores[1] += arrGolferRounds[x][z];
				} else {
					arrTotalScores[1] = (0 + varPenalty);
				}

				if (checkMajor(arrGolferRounds, x) == 0) {
					arrTotalScores[2] += arrGolferRounds[x][z];
				} else {
					arrTotalScores[2] = (0 + varPenalty);
				}
			}
			
			arrTotalScores[0] = arrTotalScores[0] + varPenalty;
			arrTotalScores[1] = arrTotalScores[1] + varPenalty;
			arrTotalScores[2] = arrTotalScores[2] + varPenalty;
			
			if (arrTotalScores[0] > arrLowRoundHold[0]) {
				arrLowRoundHold[0] = arrTotalScores[0];
			}
			
			if (arrTotalScores[1] > arrLowRoundHold[1]) {
				arrLowRoundHold[1] = arrTotalScores[1];
			}
			
			if (arrTotalScores[2] > arrLowRoundHold[2]) {
				arrLowRoundHold[2] = arrTotalScores[2];
			}
		}
	}

	varReturn = arrLowRoundHold[0];
	
	if (arrLowRoundHold[1] != (0 + varPenalty)) {
		varReturnMajor = arrLowRoundHold[1];
	}
	
	if (arrLowRoundHold[2] != (0 + varPenalty)) {
		varReturnNonMajor = arrLowRoundHold[2];
	}
	
	return [varReturn, varReturnMajor, varReturnNonMajor];
}
