/********************************************************************************************/
/********************************************************************************************/


function getRecordNumberFormat(RecordID) {
    var pRecordID = arguments[0] * 1;

    switch(pRecordID) {
        case  25:
        case  26:
		case  27:
		case  28:
		case  29:	return "Earnings";
        default:    return "";
    }
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordSortOrder(RecordID) {
	var pRecordID = arguments[0] * 1;
	
	switch(pRecordID) {
		case  30:
		case  31:
		case  32:
		case  33:
		case  34:
		case  35:
		case  36:
		case  37:	return "asc";
		default:    return "desc";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordDisplayOrder(RecordID) {
	var pRecordID = arguments[0] * 1;
	
	switch(pRecordID) {
		default:    return pRecordID;
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordHeader(RecordID) {
	var pRecordID = arguments[0] * 1;

	switch (pRecordID) {
		case   1:	return "Most Wins";
		case   2:	return "Most Wins / Single Season";
		case   3:	return "Most Runner-Ups";
		case   4:	return "Most Runner-Ups / Single Season";
		case   5:	return "Most Runner-Ups / Single Season / No Wins";
		case   6:	return "Most Runner-Ups / No Wins in Range";
		case   7:	return "Most Runner-Ups / No Wins in Career";
		case   8:	return "Most Top 2s";
        case   9:   return "Most Top 2s / Single Season"
		case  10:	return "Most Top 3s";
        case  11:   return "Most Top 3s / Single Season"
		case  12:	return "Most Top 3s / Single Season / No Wins";
		case  13:	return "Most Top 3s / No Wins in Range";
		case  14:	return "Most Top 3s / No Wins in Career";
		case  15:	return "Most Top 5s";
        case  16:   return "Most Top 5s / Single Season"
		case  17:	return "Most Top 5s / Single Season / No Wins";
		case  18:	return "Most Top 5s / No Wins in Range";
		case  19:	return "Most Top 5s / No Wins in Career";
		case  20:	return "Most Top 10s";
        case  21:   return "Most Top 10s / Single Season"
		case  22:	return "Most Top 10s / Single Season / No Wins";
		case  23:	return "Most Top 10s / No Wins in Range";
		case  24:	return "Most Top 10s / No Wins in Career";
        case  25:   return "Most Earnings";
		case  26:   return "Most Earnings / Single Season";
		case  27:   return "Most Earnings / Single Season / No Wins";
		case  28:	return "Most Earnings / No Wins in Range";
		case  29:	return "Most Earnings / No Wins in Career";
		case  30:	return "Lowest Round (Gross)";
		case  31:	return "Lowest Round (Gross) / No Wins in Range"
		case  32:	return "Lowest Round (Gross) / No DQ's in Range"
		case  33:	return "Lowest Round (Gross) / No Wins or DQ's in Range"
		case  34:	return "Lowest Round (Net)";
		case  35:	return "Lowest Round (Net) / No Wins in Range"
		case  36:	return "Lowest Round (Net) / No DQ's in Range"
		case  37:	return "Lowest Round (Net) / No Wins or DQ's in Range"
		case  38:	return "Most Par or Better"
		case  39:	return "Most Par or Better / Single Season"
		case  40:	return "Most Par or Better / Single Event"
		case  41:	return "Most Consecutive Par or Better"
		case  42:	return "Highest % Par or Better"
		case  43:	return "Highest % Par or Better / Single Season"
		case  44:	return "Most Bogey or Better"
		case  45:	return "Most Bogey or Better / Single Season"
		case  46:	return "Most Bogey or Better / Single Event"
		case  47:	return "Most Consecutive Bogey or Better"
		case  48:	return "Highest % Bogey or Better"
		case  49:	return "Highest % Bogey or Better / Single Season"
		case  50:	return "Most Eagles"
		case  51:	return "Most Eagles / Single Season"
		case  52:	return "Most Eagles / Single Event"
		case  53:	return "Most Consecutive Eagles"
		case  54:	return "Highest % Eagles"
		case  55:	return "Highest % Eagles / Single Season"
		case  56:	return "Most Birdies"
		case  57:	return "Most Birdies / Single Season"
		case  58:	return "Most Birdies / Single Event"
		case  59:	return "Most Consecutive Birdies"
		case  60:	return "Highest % Birdies"
		case  61:	return "Highest % Birdies / Single Season"
		case  62:	return "Most Pars"
		case  63:	return "Most Pars / Single Season"
		case  64:	return "Most Pars / Single Event"
		case  65:	return "Most Consecutive Pars"
		case  66:	return "Highest % Pars"
		case  67:	return "Highest % Pars / Single Season"
		case  68:	return "Most Bogeys"
		case  69:	return "Most Bogeys / Single Season"
		case  70:	return "Most Bogeys / Single Event"
		case  71:	return "Most Consecutive Bogeys"
		case  72:	return "Highest % Bogeys"
		case  73:	return "Highest % Bogeys / Single Season"
		case  74:	return "Most Double Bogeys"
		case  75:	return "Most Double Bogeys / Single Season"
		case  76:	return "Most Double Bogeys / Single Event"
		case  77:	return "Most Consecutive Double Bogeys"
		case  78:	return "Highest % Double Bogeys"
		case  79:	return "Highest % Double Bogeys / Single Season"
		case  80:	return "Most Triple Bogeys"
		case  81:	return "Most Triple Bogeys / Single Season"
		case  82:	return "Most Triple Bogeys / Single Event"
		case  83:	return "Most Consecutive Triple Bogeys"
		case  84:	return "Highest % Triple Bogeys"
		case  85:	return "Highest % Triple Bogeys / Single Season"
		case  86:	return "Most Worse Bogeys"
		case  87:	return "Most Worse Bogeys / Single Season"
		case  88:	return "Most Worse Bogeys / Single Event"
		case  89:	return "Most Consecutive Worse Bogeys"
		case  90:	return "Highest % Worse Bogeys"
		case  91:	return "Highest % Worse Bogeys / Single Season"

        default:    return "N/A";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordData(Record, Event, Course, SeasonBegin, SeasonEnd) {
	var varRecord = arguments[0] * 1;	var varEvent = arguments[1];	var varCourse = arguments[2];
	var varSeason1 = arguments[3];		var varSeason2 = arguments[4];
	
	var arrRecordData = new Array();
	
	switch (varRecord) {
		case   1:	return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,1);
		case   2:	return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,1);
		case   3:	return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case   4:	return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case   5:	return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case   6:	return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case   7:	return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case   8:	return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,2);
        case   9:   return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,2);
        case  10:   return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,3);
        case  11:   return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,3);
		case  12:	return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,3);
		case  13:	return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,3);
		case  14:	return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,3);
        case  15:   return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,5);
        case  16:   return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  17:	return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  18:	return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  19:	return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  20:   return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  21:   return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  22:	return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  23:	return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  24:	return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  25:   return getRecord_MostEarnings_Range(varEvent,varCourse,varSeason1,varSeason2);
		case  26:   return getRecord_MostEarnings_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case  27:   return getRecord_MostEarnings_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  28:   return getRecord_MostEarnings_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  29:   return getRecord_MostEarnings_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  30:	return getRecord_LowRound_Range_Gross(varEvent,varCourse,varSeason1,varSeason2);
		case  31:	return getRecord_LowRound_Range_Gross_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  32:	return getRecord_LowRound_Range_Gross_NoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  33:	return getRecord_LowRound_Range_Gross_NoWinsNoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  34:	return getRecord_LowRound_Range_Net(varEvent,varCourse,varSeason1,varSeason2);
		case  35:	return getRecord_LowRound_Range_Net_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  36:	return getRecord_LowRound_Range_Net_NoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  37:	return getRecord_LowRound_Range_Net_NoWinsNoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  38:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  39:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  40:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  41:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  42:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  43:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  44:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  45:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  46:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  47:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  48:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  49:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  50:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  51:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  52:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  53:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  54:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  55:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  56:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  57:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  58:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  59:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  60:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  61:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  62:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  63:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  64:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  65:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  66:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  67:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  68:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  69:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  70:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  71:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  72:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  73:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  74:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  75:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  76:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  77:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  78:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  79:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  80:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  81:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  82:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  83:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  84:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  85:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  86:	return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  87:	return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  88:	return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  89:	return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  90:	return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  91:	return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordHeaderBreak(RecordID) {
	var pRecordID = arguments[0] * 1;
	
	pRecordID = getRecordDisplayOrder(pRecordID);
	
	switch (pRecordID) {
		case   2:	case   7:	case   9:	case  14:	case  19:	case  24:	case  29:
		case  33:	case  37:	case  43:	case  49:	case  55:	case  61:	case  67:
		case  73:	case  79:	case  85:	case  91:	return true;

        default:    return false;
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordCategoryHeader(RecordID) {
    var pRecordID = arguments[0] * 1;

    switch(pRecordID) {
        case   1:	return "Placement Records";
        case  25:	return "Earnings Records";
		case  30:	return "Scoring Records";
        default:    return "N/A";
    }
}


/********************************************************************************************/
/********************************************************************************************/


function processRecordSummary(RecordID, Event, Course, SeasonBegin, SeasonEnd) {
	var pRecordID = arguments[0] * 1;	var pEvent = arguments[1];		var pCourse = arguments[2];
	var pSeasonBegin = arguments[3];	var pSeasonEnd = arguments[4];

	processRecordSummaryDisplay(
				getRecordData(pRecordID,pEvent,pCourse,pSeasonBegin,pSeasonEnd)
			,	getRecordSortOrder(pRecordID)
            ,   getRecordNumberFormat(pRecordID)
	);
}


/********************************************************************************************/
/********************************************************************************************/


function processRecordSummaryDisplay(RecordsArray, SortOrder, optRecordType) {
	var pRecords = arguments[0];	var pSortOrder = arguments[1];	var pRecordType = arguments[2];
	
	var varRecordStat = 0;		var varNamesList = "";		var varDisplayCounter = 0;
	
	var arrGolfers = new Array();	var arrStats = new Array();		var arrSeasons = new Array();
	var arrExtraInfo = new Array();		var arrDisplay = new Array();
	
	arrGolfers = pRecords[0];	arrStats = pRecords[1];		arrSeasons = pRecords[2];	arrExtraInfo = pRecords[3];
	
	if (pRecordType == null) {
		pRecordType = "";
	}

    arrDisplay[0] = new Array();

    arrDisplay[0][0] = "N/A";
	arrDisplay[0][1] = "-";
	arrDisplay[0][2] = "-";
	arrDisplay[0][3] = "-";

	for (z = 0; z < arrGolfers.length; z++)
	{
		if (arrStats[z] > 0) {
			tmpGolfer = arrGolfers[z];
			tmpStat = arrStats[z];
			tmpSeason = arrSeasons[z];
			tmpExtraInfo = arrExtraInfo[z];
						
			arrDisplay[varDisplayCounter] = new Array();
			
			arrDisplay[varDisplayCounter][0] = tmpGolfer;
			arrDisplay[varDisplayCounter][1] = tmpStat;
			arrDisplay[varDisplayCounter][2] = tmpSeason;
			arrDisplay[varDisplayCounter][3] = tmpExtraInfo;
			
			varDisplayCounter++
		}
	}

	arrDisplay = sortMDArray(arrDisplay, 1, pSortOrder);
	varRecordStat = formatNumber(pRecordType, arrDisplay[0][1]);
	varNamesList = "";
	arrDisplay = sortMDArray(arrDisplay, 0, "asc");
	
	document.write("<td align='center'>" + varRecordStat + "</td>");
	document.write("<td align='center'>");

	for (z = 0; z < arrDisplay.length; z++) {
		if (varRecordStat == 0) {
			varNamesList = "-";
			break;
		} else {
			if (formatNumber(pRecordType, arrDisplay[z][1]) == varRecordStat) {
				if (varNamesList.indexOf(arrDisplay[z][0]) < 0) {
					varNamesList += arrDisplay[z][0] + "<br />";
				}
			}
		}
	}

	document.write(varNamesList + "</td>");
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
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostFinishPositional_Range(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pPosBegin = arguments[4];	var pPosEnd = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[g] = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);
			vRoundPosHold = aRounds[r][4];

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vEventCounter++;
				
				if (vRoundPosHold >= pPosBegin && vRoundPosHold <= pPosEnd) {
					aReturnStat[g]++;
				}
			}
		}
		
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vEventCounter + " events";
	}
	
	if (pPosBegin == pPosEnd) {
		switch (pPosBegin) {
			case   1:	vReturnTitle = "Most Tournament Wins"; break;
			case   2:	vReturnTitle = "Most Runner-Ups"; break;
		}
	} else {
		if (pPosBegin == 1) {
			vReturnTitle = "Most Top " + pPosEnd + "s";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostFinishPositional_Range_NoWins(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pPosBegin = arguments[4];	var pPosEnd = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[g] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);
			vRoundPosHold = aRounds[r][4];

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if (aRounds[r][4] == 1) {
					fIsWinner = true;
					aReturnStat[g] = 0;
					break;
				}
				
				vEventCounter++;
				
				if (vRoundPosHold >= pPosBegin && vRoundPosHold <= pPosEnd) {
					aReturnStat[g]++;
				}
			}
		}
		
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vEventCounter + " events";
	}
	
	if (pPosBegin == pPosEnd) {
		switch (pPosBegin) {
			case   1:	vReturnTitle = "Most Tournament Wins"; break;
			case   2:	vReturnTitle = "Most Runner-Ups"; break;
		}
	} else {
		if (pPosBegin == 1) {
			vReturnTitle = "Most Top " + pPosEnd + "s";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostFinishPositional_Career_NoWins(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pPosBegin = arguments[4];	var pPosEnd = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins in Career]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[g] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);
			vRoundPosHold = aRounds[r][4];
			
			if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
				fIsWinner = true;
				aReturnStat[g] = 0;
				break;
			}

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vEventCounter++;
				
				if (vRoundPosHold >= pPosBegin && vRoundPosHold <= pPosEnd) {
					aReturnStat[g]++;
				}
			}
		}
		
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vEventCounter + " events";
	}
	
	if (pPosBegin == pPosEnd) {
		switch (pPosBegin) {
			case   1:	vReturnTitle = "Most Tournament Wins"; break;
			case   2:	vReturnTitle = "Most Runner-Ups"; break;
		}
	} else {
		if (pPosBegin == 1) {
			vReturnTitle = "Most Top " + pPosEnd + "s";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostFinishPositional_SingleSeason(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pPosBegin = arguments[4];	var pPosEnd = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	var aSeasons = new Array();		aSeasons = getData_Seasons().reverse();
	
	var aReturnStat = new Array();		var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vSeasonHold = 0;	var vSeasonLoopHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;
	
	/**---------------------------------------------------------------------**/
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			vReturnIndex++;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				vSeasonHold = aRounds[r][0].substr(6,9);
				vRoundPosHold = aRounds[r][4];

				if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,vSeasonLoopHold)) {
					
					vEventCounter++;
					
					if (vRoundPosHold >= pPosBegin && vRoundPosHold <= pPosEnd) {
						aReturnStat[vReturnIndex]++;
					}
				}
			}
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = vSeasonLoopHold;
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
		}
	}
	
	if (pPosBegin == pPosEnd) {
		switch (pPosBegin) {
			case   1:	vReturnTitle = "Most Tournament Wins"; break;
			case   2:	vReturnTitle = "Most Runner-Ups"; break;
		}
	} else {
		if (pPosBegin == 1) {
			vReturnTitle = "Most Top " + pPosEnd + "s";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostFinishPositional_SingleSeason_NoWins(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pPosBegin = arguments[4];	var pPosEnd = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	var aSeasons = new Array();		aSeasons = getData_Seasons().reverse();
	
	var aReturnStat = new Array();		var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Season without a Win]</div>";
	
	var vSeasonHold = 0;	var vSeasonLoopHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;
	var fIsWinner = false;
	
	/**---------------------------------------------------------------------**/
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			vReturnIndex++;
			aReturnStat[vReturnIndex] = 0;
			
			if (fIsWinner == true) {
				fIsWinner = false;
			}
			
			for (r = 0; r < aRounds.length; r++) {
				
				vSeasonHold = aRounds[r][0].substr(6,9);
				vRoundPosHold = aRounds[r][4];
				
				if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,vSeasonLoopHold)) {
					
					if (aRounds[r][4] == 1 && vSeasonLoopHold == vSeasonHold) {
						fIsWinner = true;
						aReturnStat[vReturnIndex] = 0;
						break;
					}
					
					vEventCounter++;
					
					if (vRoundPosHold >= pPosBegin && vRoundPosHold <= pPosEnd) {
						aReturnStat[vReturnIndex]++;
					}
				}
			}
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = vSeasonLoopHold;
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
		}
	}
	
	if (pPosBegin == pPosEnd) {
		switch (pPosBegin) {
			case   2:	vReturnTitle = "Most Runner-Ups"; break;
		}
	} else {
		if (pPosBegin == 1) {
			vReturnTitle = "Most Top " + pPosEnd + "s";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_Range(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "";
	
	var vSeasonHold = 0;	var vEventCounter = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[g] = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vEventCounter++;
				aReturnStat[g] += aRounds[r][6];
			}
		}
		
        aReturnStat[g] = parseFloat(aReturnStat[g].toFixed(2));
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vEventCounter + " events";
	}
	
	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	var aSeasons = new Array();		aSeasons = getData_Seasons().reverse();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;	var vSeasonLoopHold = 0;	var vRoundPosHold = 0;
	
	/**---------------------------------------------------------------------**/

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			vReturnIndex++;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				vSeasonHold = aRounds[r][0].substr(6,9);
				vRoundPosHold = aRounds[r][4];

				if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,vSeasonLoopHold)) {

					vEventCounter++;
					aReturnStat[vReturnIndex] += aRounds[r][6];
				}
			}
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnStat[vReturnIndex] = parseFloat(aReturnStat[vReturnIndex].toFixed(2));
			aReturnSeason[vReturnIndex] = vSeasonLoopHold;
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
		}
	}
	
	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_SingleSeason_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	var aSeasons = new Array();		aSeasons = getData_Seasons().reverse();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;	var vSeasonLoopHold = 0;	var vRoundPosHold = 0;
	var fIsWinner = false;
	
	/**---------------------------------------------------------------------**/

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			vReturnIndex++;
			aReturnStat[vReturnIndex] = 0;
			
			if (fIsWinner == true) {
				fIsWinner = false;
			}
			
			for (r = 0; r < aRounds.length; r++) {
				
				vSeasonHold = aRounds[r][0].substr(6,9);
				vRoundPosHold = aRounds[r][4];

				if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,vSeasonLoopHold)) {

					if (aRounds[r][4] == 1 && vSeasonLoopHold == vSeasonHold) {
						fIsWinner = true;
						aReturnStat[vReturnIndex] = 0;
						break;
					}
					
					vEventCounter++;
					aReturnStat[vReturnIndex] += aRounds[r][6];
				}
			}
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnStat[vReturnIndex] = parseFloat(aReturnStat[vReturnIndex].toFixed(2));
			aReturnSeason[vReturnIndex] = vSeasonLoopHold;
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
		}
	}
	
	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_Range_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[g] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if (aRounds[r][4] == 1) {
					fIsWinner = true;
					aReturnStat[g] = 0;
					break;
				}
				
				vEventCounter++;
				aReturnStat[g] += aRounds[r][6];
			}
		}
		
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vEventCounter + " events";
	}

	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_Career_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins in Career]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[g] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);
			
			if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
				fIsWinner = true;
				aReturnStat[g] = 0;
				break;
			}

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vEventCounter++;
				aReturnStat[g] += aRounds[r][6];
			}
		}
		
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vEventCounter + " events";
	}

	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal;
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal + aRounds[r][7];
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
					fIsWinner = true;
					break;
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal;
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}		
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
					fIsWinner = true;
					break;
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal + aRounds[r][7];
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}		
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No DQ's in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if (aRounds[r][4] == 0 && aRounds[r][3] == aGolfers[g]) {
					fIsWinner = true;
					break;
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal;
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}		
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No DQ's in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if (aRounds[r][4] == 0 && aRounds[r][3] == aGolfers[g]) {
					fIsWinner = true;
					break;
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal + aRounds[r][7];
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}		
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins or DQ's in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if ((aRounds[r][4] == 0 || aRounds[r][4] == 1) && aRounds[r][3] == aGolfers[g]) {
					fIsWinner = true;
					break;
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal;
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}		
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[No Wins or DQ's in Date Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				if ((aRounds[r][4] == 0 || aRounds[r][4] == 1) && aRounds[r][3] == aGolfers[g]) {
					fIsWinner = true;
					break;
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vReturnIndex++;
				aReturnStat[vReturnIndex] = 0;
				vRoundTotal = 0;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				aReturnStat[vReturnIndex] = vRoundTotal + aRounds[r][7];
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold;
				aReturnExtraInfo[vReturnIndex] = aRounds[r][1];
			}
		}		
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostScoreType_FullRound_Range(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pOperator = arguments[4];	var pTarget = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "";
	
	var vSeasonHold = 0;	var vHoleCounter = 0;	var vTotal = 0;		var vOffset = 0;	var vPercent = 0;
	
	/**---------------------------------------------------------------------**/
	
	vOffset = getParOffset(pTarget);

	for (g = 0; g < aGolfers.length; g++) {
		
		aReturnStat[g] = 0;
		vTotal = 0;
		vHoleCounter = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				for (z = 0; z < 18; z++) {
					
					vHoleCounter++;
					
					if (pOperator == "=") {
						if (aRounds[r][z + 8] == aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
					if (pOperator == ">") {
						if (aRounds[r][z + 8] > aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
					if (pOperator == "<") {
						if (aRounds[r][z + 8] < aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
				}
			}
		}
		
		vPercent = (vTotal / vHoleCounter) * 100;
		vPercent = Math.round(vPercent * 1000) / 1000;
		
		aReturnStat[g] = vTotal;
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vHoleCounter + " Holes<br />( " + vPercent.toFixed(3) + " % )";
	}
	
	if (pOperator == "=") {
		if (pTarget == "DblBogey") {
			vReturnTitle = "Most Double Bogeys";
		} else if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Triple Bogeys";
		} else {
			vReturnTitle = "Most " + pTarget + "s";
		}
	} else if (pOperator == "<") {
		if (pTarget == "Bogey") {
			vReturnTitle = "Most Par or Better";
		} else if (pTarget == "DblBogey") {
			vReturnTitle = "Most Bogey or Better";
		}
	} else {
		if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Worse Bogeys";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostScoreType_FullRound_Range_SingleSeason(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pOperator = arguments[4];	var pTarget = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	var aSeasons = new Array();		aSeasons = getData_Seasons().reverse();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vSeasonHold = 0;	var vHoleCounter = 0;	var vTotal = 0;		var vOffset = 0;	var vPercent = 0;
	var vSeasonLoopHold = 0;
	
	/**---------------------------------------------------------------------**/
	
	vOffset = getParOffset(pTarget);
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vReturnIndex++;
			vTotal = 0;
			vHoleCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				vSeasonHold = aRounds[r][0].substr(6,9);

				if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,vSeasonLoopHold)) {
					
					for (z = 0; z < 18; z++) {
						
						vHoleCounter++;
						
						if (pOperator == "=") {
							if (aRounds[r][z + 8] == aRounds[r][z + 26] + vOffset) {
								vTotal++;
							}
						}
						if (pOperator == ">") {
							if (aRounds[r][z + 8] > aRounds[r][z + 26] + vOffset) {
								vTotal++;
							}
						}
						if (pOperator == "<") {
							if (aRounds[r][z + 8] < aRounds[r][z + 26] + vOffset) {
								vTotal++;
							}
						}
					}
				}
			}
			
			vPercent = (vTotal / vHoleCounter) * 100;
			vPercent = Math.round(vPercent * 1000) / 1000;
			
			aReturnStat[vReturnIndex] = vTotal;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = vSeasonLoopHold;
			aReturnExtraInfo[vReturnIndex] = vHoleCounter + " Holes<br />( " + vPercent.toFixed(3) + " % )";
		}
	}
	
	if (pOperator == "=") {
		if (pTarget == "DblBogey") {
			vReturnTitle = "Most Double Bogeys";
		} else if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Triple Bogeys";
		} else {
			vReturnTitle = "Most " + pTarget + "s";
		}
	} else if (pOperator == "<") {
		if (pTarget == "Bogey") {
			vReturnTitle = "Most Par or Better";
		} else if (pTarget == "DblBogey") {
			vReturnTitle = "Most Bogey or Better";
		}
	} else {
		if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Worse Bogeys";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostScoreType_FullRound_Range_SingleEvent(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pOperator = arguments[4];	var pTarget = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Event]</div>";
	
	var vSeasonHold = 0;	var vTotal = 0;		var vOffset = 0;
	
	/**---------------------------------------------------------------------**/
	
	vOffset = getParOffset(pTarget);
	
	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {
			
			vReturnIndex++;
			vTotal = 0;
			aReturnStat[vReturnIndex] = 0;
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				for (z = 0; z < 18; z++) {
					
					if (pOperator == "=") {
						if (aRounds[r][z + 8] == aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
					if (pOperator == ">") {
						if (aRounds[r][z + 8] > aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
					if (pOperator == "<") {
						if (aRounds[r][z + 8] < aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
				}
			}
			
			aReturnStat[vReturnIndex] = vTotal;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = vSeasonHold + " " + aRounds[r][1];
			aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
		}
	}

	if (pOperator == "=") {
		if (pTarget == "DblBogey") {
			vReturnTitle = "Most Double Bogeys";
		} else if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Triple Bogeys";
		} else {
			vReturnTitle = "Most " + pTarget + "s";
		}
	} else if (pOperator == "<") {
		if (pTarget == "Bogey") {
			vReturnTitle = "Most Par or Better";
		} else if (pTarget == "DblBogey") {
			vReturnTitle = "Most Bogey or Better";
		}
	} else {
		if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Worse Bogeys";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostScoreType_Consecutive_Range(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pOperator = arguments[4];	var pTarget = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "";
	
	var vSeasonHold = 0;	var vTotal = 0;		var vOffset = 0;	var vKeepCounting = true;
	
	/**---------------------------------------------------------------------**/
	
	vOffset = getParOffset(pTarget);

	for (g = 0; g < aGolfers.length; g++) {
		
		vTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);
			
			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				aReturnStat[vReturnIndex] = 0;
				
				for (z = 0; z < 18; z++) {
					if (pOperator == "=") {
						if (aRounds[r][z + 8] == aRounds[r][z + 26] + vOffset) {
							vTotal++;
						} else {
							vKeepCounting = false;
						}
					}
					if (pOperator == ">") {
						if (aRounds[r][z + 8] > aRounds[r][z + 26] + vOffset) {
							vTotal++;
						} else {
							vKeepCounting = false;
						}
					}
					if (pOperator == "<") {
						if (aRounds[r][z + 8] < aRounds[r][z + 26] + vOffset) {
							vTotal++;
						} else {
							vKeepCounting = false;
						}
					}
					
					if (vKeepCounting == false) {
						if (vTotal > 1) {
							aReturnStat[vReturnIndex] = vTotal;
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = "-";
							aReturnExtraInfo[vReturnIndex] = "-";
							
							vReturnIndex++;
						}
							vKeepCounting = true;
							vTotal = 0;
					}
				}
			}		
		}
	}

	if (pOperator == "=") {
		if (pTarget == "DblBogey") {
			vReturnTitle = "Most Consecutive Double Bogeys";
		} else if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Consecutive Triple Bogeys";
		} else {
			vReturnTitle = "Most Consecutive " + pTarget + "s";
		}
	} else if (pOperator == "<") {
		if (pTarget == "Bogey") {
			vReturnTitle = "Most Consecutive Par or Better";
		} else if (pTarget == "DblBogey") {
			vReturnTitle = "Most Consecutive Bogey or Better";
		}
	} else {
		if (pTarget == "TrpBogey") {
			vReturnTitle = "Most Consecutive Worse Bogeys";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
			
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostScoreType_FullRound_Range_Percent(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pOperator = arguments[4];	var pTarget = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events]</div>";
	
	var vSeasonHold = 0;	var vHoleCounter = 0;	var vTotal = 0;		var vOffset = 0;	var vPercent = 0;
	
	/**---------------------------------------------------------------------**/
	
	vOffset = getParOffset(pTarget);

	for (g = 0; g < aGolfers.length; g++) {
		
		aReturnStat[g] = 0;
		vTotal = 0;
		vHoleCounter = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				for (z = 0; z < 18; z++) {
					
					vHoleCounter++;
					
					if (pOperator == "=") {
						if (aRounds[r][z + 8] == aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
					if (pOperator == ">") {
						if (aRounds[r][z + 8] > aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
					if (pOperator == "<") {
						if (aRounds[r][z + 8] < aRounds[r][z + 26] + vOffset) {
							vTotal++;
						}
					}
				}
			}
		}
		
		vPercent = (vTotal / vHoleCounter) * 100;
		vPercent = Math.round(vPercent * 1000) / 1000;
		
		if (vHoleCounter < 54) {
			vTotal = 0;
			vPercent = 0;
		}
		
		aReturnStat[g] = vPercent;
		aReturnSeason[g] = "-";
		aReturnExtraInfo[g] = vTotal + " Total<br />" + vHoleCounter + " Holes";
	}
	
	if (pOperator == "=") {
		if (pTarget == "DblBogey") {
			vReturnTitle = "Highest % Double Bogeys";
		} else if (pTarget == "TrpBogey") {
			vReturnTitle = "Highest % Triple Bogeys";
		} else {
			vReturnTitle = "Highest % " + pTarget + "s";
		}
	} else if (pOperator == "<") {
		if (pTarget == "Bogey") {
			vReturnTitle = "Highest % Par or Better";
		} else if (pTarget == "DblBogey") {
			vReturnTitle = "Highest % Bogey or Better";
		}
	} else {
		if (pTarget == "TrpBogey") {
			vReturnTitle = "Highest % Worse Bogeys";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pOperator = arguments[4];	var pTarget = arguments[5];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	var aSeasons = new Array();		aSeasons = getData_Seasons().reverse();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Season] [Minimum 3 Events]</div>";
	
	var vSeasonHold = 0;	var vHoleCounter = 0;	var vTotal = 0;		var vOffset = 0;	var vPercent = 0;
	var vSeasonLoopHold = 0;
	
	/**---------------------------------------------------------------------**/
	
	vOffset = getParOffset(pTarget);
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vReturnIndex++;
			vTotal = 0;
			vHoleCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				vSeasonHold = aRounds[r][0].substr(6,9);

				if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,vSeasonLoopHold)) {
					
					for (z = 0; z < 18; z++) {
						
						vHoleCounter++;
						
						if (pOperator == "=") {
							if (aRounds[r][z + 8] == aRounds[r][z + 26] + vOffset) {
								vTotal++;
							}
						}
						if (pOperator == ">") {
							if (aRounds[r][z + 8] > aRounds[r][z + 26] + vOffset) {
								vTotal++;
							}
						}
						if (pOperator == "<") {
							if (aRounds[r][z + 8] < aRounds[r][z + 26] + vOffset) {
								vTotal++;
							}
						}
					}
				}
			}
			
			vPercent = (vTotal / vHoleCounter) * 100;
			vPercent = Math.round(vPercent * 1000) / 1000;
			
			if (vHoleCounter < 54) {
				vTotal = 0;
				vPercent = 0;
			}
			
			aReturnStat[vReturnIndex] = vPercent;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = vSeasonLoopHold;
			aReturnExtraInfo[vReturnIndex] = vTotal + " Total<br />" + vHoleCounter + " Holes";
		}
	}
	
	if (pOperator == "=") {
		if (pTarget == "DblBogey") {
			vReturnTitle = "Highest % Double Bogeys";
		} else if (pTarget == "TrpBogey") {
			vReturnTitle = "Highest % Triple Bogeys";
		} else {
			vReturnTitle = "Highest % " + pTarget + "s";
		}
	} else if (pOperator == "<") {
		if (pTarget == "Bogey") {
			vReturnTitle = "Highest % Par or Better";
		} else if (pTarget == "DblBogey") {
			vReturnTitle = "Highest % Bogey or Better";
		}
	} else {
		if (pTarget == "TrpBogey") {
			vReturnTitle = "Highest % Worse Bogeys";
		}
	}
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/