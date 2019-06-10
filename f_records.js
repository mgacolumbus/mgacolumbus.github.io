/********************************************************************************************/
/********************************************************************************************/


function checkMajor_NoArray(Event) {
	/**---------------------------------------------------------------------**/
	var vEvent	= arguments[0];
	/**---------------------------------------------------------------------**/
	
	if (vEvent == "Bastards")			{ return true; }
	if (vEvent == "F.U. Open")			{ return true; }
	if (vEvent == "Bratish Open")		{ return true; }
	if (vEvent == "MGA Championship")	{ return true; }
	
	return false;
}


/********************************************************************************************/
/********************************************************************************************/


function getFullRoundScore(RoundArray, RoundIndex, IsNet) {
	/**---------------------------------------------------------------------**/
	var pRound			= arguments[0];
	var pRoundIndex		= arguments[1];
	var pIsNet			= arguments[2];
	/**---------------------------------------------------------------------**/
	
	return calcScore(pRound, pRoundIndex, 18, 0, pIsNet);;
}


/********************************************************************************************/
/********************************************************************************************/


function getNineHoleScore(RoundArray, RoundIndex, IsFrontNine) {
	/**---------------------------------------------------------------------**/
	var pRound			= arguments[0];
	var pRoundIndex		= arguments[1];
	var pIsFrontNine	= arguments[2];
	
	var vOffset	= 0;
	/**---------------------------------------------------------------------**/
	
	if (pIsFrontNine == false) {
		vOffset = 9;
	}
	
	return calcScore(pRound, pRoundIndex, 9, vOffset, false);
}


/********************************************************************************************/
/********************************************************************************************/


function calcScore(RoundArray, RoundIndex, NumOfHoles, HoleOffset, IsNet) {
	/**---------------------------------------------------------------------**/
	var pRound			= arguments[0];
	var pRoundIndex		= arguments[1];
	var pNumOfHoles		= arguments[2];
	var pOffset			= arguments[3];
	var pIsNet			= arguments[4];
	
	var x				= 0;
	var vScoreTotal		= 0;
	/**---------------------------------------------------------------------**/
	
	for (x = 0; x < pNumOfHoles; x++) {
		vScoreTotal += pRound[pRoundIndex][x + pOffset + 8];
	}
	
	if (pIsNet == true) {
		vScoreTotal += pRound[pRoundIndex][7];
	}
	
	return vScoreTotal;
}


/********************************************************************************************/
/********************************************************************************************/


function calcIsWinner(RoundArray, RoundIndex) {
	/**---------------------------------------------------------------------**/
	var pRound			= arguments[0];
	var pRoundIndex		= arguments[1];
	/**---------------------------------------------------------------------**/
	
	return pRound[pRoundIndex][4] == 1;
}


/********************************************************************************************/
/********************************************************************************************/


function calcIsDQ(RoundArray, RoundIndex) {
	/**---------------------------------------------------------------------**/
	var pRound			= arguments[0];
	var pRoundIndex		= arguments[1];
	/**---------------------------------------------------------------------**/
	
	return pRound[pRoundIndex][4] == 0;
}


/********************************************************************************************/
/********************************************************************************************/


function getParOffset(ScoreType) {
	/**---------------------------------------------------------------------**/
	var varScoreType	=	arguments[0];
	/**---------------------------------------------------------------------**/
	
	if (varScoreType.indexOf("Eagle") > -1)		{ return -2; }
	if (varScoreType.indexOf("Birdie") > -1)	{ return -1; }
	if (varScoreType.indexOf("Par") > -1)		{ return 0; }
	if (varScoreType.indexOf("TrpBogey") > -1)	{ return 3; }
	if (varScoreType.indexOf("DblBogey") > -1)	{ return 2; }
	if (varScoreType.indexOf("Bogey") > -1)		{ return 1; }
	
	return -999;
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordNumberFormat(RecordID) {
    /**---------------------------------------------------------------------**/
	var pRecordID = arguments[0] * 1;
	/**---------------------------------------------------------------------**/
    
	switch(pRecordID) {
        case  2500:
		case  2600:
		case  2700:
		case  2800:
		case  2900:		return "Earnings";
		
		case  2910:
		case  2915:
		case  2920:
		case  2925:
		case  2930:
		case  2945:
		case  2946:
		case  2947:
		case  2948:
		case  2952:
		case  2953:
		case  2954:
		case  2955:
		case  4200:
		case  4300:
		case  4800:
		case  4900:
		case  5400:
		case  5500:
		case  6000:
		case  6100:
		case  6600:
		case  6700:
		case  7200:
		case  7300:
		case  7800:
		case  7900:
		case  8400:
		case  8500:
		case  9000:
		case  9100:		
		case 10000:		
		case 10001:		
		case 10002:		
		case 10003:		
		case 10004:		
		case 10010:		
		case 10011:		
		case 10012:		
		case 10013:		return "Avg";
		
        default:		return "";
    }
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordSortOrder(RecordID) {
	/**---------------------------------------------------------------------**/
	var pRecordID = arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch(pRecordID) {
		case    12:
		case    13:
		case    17:
		case    37:
		case  2945:
		case  2946:
		case  2947:
		case  2948:
		case  2952:
		case  2953:
		case  2954:
		case  2955:
		case  3000:
		case  3100:
		case  3200:
		case  3300:
		case  3400:
		case  3500:
		case  3600:
		case  3700:
		case  3710:
		case  3720:		
		case  3730:
		case  3740:		
		case  3746:		
		case 10000:		
		case 10001:		
		case 10002:		
		case 10003:		
		case 10004:		
		case 10010:		
		case 10011:		
		case 10012:		
		case 10013:		return "asc";
		
		default:		return "desc";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordDisplayOrder(RecordID) {
	/**---------------------------------------------------------------------**/
	var pRecordID = arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch(pRecordID) {
		default:    	return pRecordID;
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordRules(RecordID) {
	/**---------------------------------------------------------------------**/
	var pRecordID = arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch(pRecordID) {
		case     9:
		case    16:
		case    21:
		case    26:
		case    31:
		case    36:
		case   700:		
		case   800:
		case   900:
		case  1000:
		case  1100:
		case  1200:
		case  2600:
		case  2915:
		case  3900:
		case  3910:
		case  3920:
		case  3930:
		case  3940:
		case  3950:
		case  3960:
		case  3970:
		case  3980:
		case  4300:		
		case  4310:		
		case  4320:		
		case  4330:		
		case  4340:		
		case  4350:		
		case  4360:		
		case  4370:		
		case  4380:		return "Single Season";
		
		case  1300:
		case  1400:
		case  1500:
		case  1600:
		case  2700:		
		case  2920:		return "Single Season<br />No Wins";
		
		case  1700:
		case  1800:
		case  1900:
		case  2000:
		case  2800:
		case  2925:
		case  2946:
		case  2953:
		case  3100:
		case  3500:		
		case  3720:		return "No Wins in Range";
		
		case  2100:
		case  2200:
		case  2300:
		case  2400:
		case  2900:		
		case  2930:		return "No Wins in Career";
		
		case  2947:
		case  2954:
		case  3200:
		case  3600:		
		case  3730:		return "No DQ's in Range";
		
		case  2948:
		case  2955:
		case  3300:
		case  3700:		
		case  3740:		return "No Wins in Range<br />No DQ's in Range";
		
		case  4000:
		case  4010:
		case  4020:
		case  4030:
		case  4040:
		case  4050:
		case  4060:
		case  4070:
		case  4080:		return "Single Event";
		
		case 10010:		return "Hole vs. Par";
		case 10011:		return "Hole vs. Par<br />Par 3's";
		case 10012:		return "Hole vs. Par<br />Par 4's";
		case 10013:		return "Hole vs. Par<br />Par 5's";
		
		case  4100:
		case  4110:
		case  4120:
		case  4130:
		case  4140:
		case  4150:
		case  4160:
		case  4170:
		case  4180:		return "Consecutive"
		
		case  4400:		
		case  4410:		
		case  4420:		
		case  4430:		
		case  4440:		
		case  4450:		
		case  4460:		
		case  4470:		
		case  4480:		
		case 10002:		return "Par 3's"
		
		case  4500:		
		case  4510:		
		case  4520:		
		case  4530:		
		case  4540:		
		case  4550:		
		case  4560:		
		case  4570:		
		case  4580:		
		case 10003:		return "Par 4's"
		
		case  4600:		
		case  4610:		
		case  4620:		
		case  4630:		
		case  4640:		
		case  4650:		
		case  4660:		
		case  4670:		
		case  4680:		
		case 10004:		return "Par 5's"
		
		default:		return "-";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordHeader(RecordID) {
	/**---------------------------------------------------------------------**/
	var pRecordID = arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch (pRecordID) {
		case   100:
		case   700:		return "Most Wins";
		
		case   200:
		case   800:
		case  1300:
		case  1700:
		case  2100:		return "Most Runner-Ups";
		
		case   300:
        case   900:		return "Most Top 2s";
		
		case   400:
        case  1000:
		case  1400:
		case  1800:
		case  2200:		return "Most Top 3s";
		
		case   500:
        case  1100:
		case  1500:
		case  1900:
		case  2300:		return "Most Top 5s";
		/*
		case   600:
        case  1200:
		case  1600:
		case  2000:
		case  2400:		return "Most Top 10s";
		*/
        case  2500:
		case  2600:
		case  2700:
		case  2800:
		case  2900:		return "Most Earnings";
		
		case  2910:		
		case  2915:		
		case  2920:		
		case  2925:		
		case  2930:		return "Average Earnings";
		
		case 10002:		
		case 10003:		
		case 10004:		
		case 10010:		
		case 10011:		
		case 10012:		
		case 10013:		return "Lowest Scoring Avg";
		
		case  2945:
		case  2946:
		case  2947:
		case  2948:		
		case 10000:		return "Lowest Scoring Avg (Gross)";
		//case  xx:		return "Lowest Scoring Avg (Gross) / No Wins in Career";
		//case  xx:		return "Lowest Scoring Avg (Gross) / No DQ's in Career";
		//case  xx:		return "Lowest Scoring Avg (Gross) / No Wins or DQ's in Career";
		//SINGLE SEASON
		
		case  2952:
		case  2953:
		case  2954:
		case  2955:		
		case 10001:		return "Lowest Scoring Avg (Net)";
		//case  xx:		return "Lowest Scoring Avg (Net) / No Wins in Career";
		//case  xx:		return "Lowest Scoring Avg (Net) / No DQ's in Career";
		//case  xx:		return "Lowest Scoring Avg (Net) / No Wins or DQ's in Career";
		//SINGLE SEASON
		
		case  3000:
		case  3100:
		case  3200:
		case  3300:		return "Lowest Round (Gross)"
		//case  xx:		return "Lowest Round (Gross) / No Wins in Career"
		//case  xx:		return "Lowest Round (Gross) / No DQ's in Career"
		//case  xx:		return "Lowest Round (Gross) / No Wins or DQ's in Career"
		
		case  3400:
		case  3500:
		case  3600:
		case  3700:		return "Lowest Round (Net)"
		//case  xx:		return "Lowest Round (Net) / No Wins in Career"
		//case  xx:		return "Lowest Round (Net) / No DQ's in Career"
		//case  xx:		return "Lowest Round (Net) / No Wins or DQ's in Career"
		
		//case  xx:		return "Lowest 9"
		//case  xx:		return "Lowest 9 / No Wins in Range"
		//case  xx:		return "Lowest 9 / No DQ's in Range"
		//case  xx:		return "Lowest 9 / No Wins or DQ's in Range"
		//case  xx:		return "Lowest 9 / No Wins in Career"
		//case  xx:		return "Lowest 9 / No DQ's in Career"
		//case  xx:		return "Lowest 9 / No Wins or DQ's in Career"
		
		//case 3760:		return "Lowest Par 3 Average";
		//case 3761:		return "Lowest Par 3 Average<br />[ Single Season ]";
		//case 3762:		return "Lowest Par 3 Average<br />[ Single Event ]";
		//case 3775:		return "Lowest Par 4 Average";
		//case 3790:		return "Lowest Par 5 Average";
		
		//case  xx:		return "Most Rounds Under Mar"
		//case  xx:		return "Most Rounds Under Mar / No Wins in Range"
		//case  xx:		return "Most Rounds Under Mar / No DQ's in Range"
		//case  xx:		return "Most Rounds Under Mar / No Wins or DQ's in Range"
		//case  xx:		return "Most Rounds Under Mar / No Wins in Career"
		//case  xx:		return "Most Rounds Under Mar / No DQ's in Career"
		//case  xx:		return "Most Rounds Under Mar / No Wins or DQ's in Career"
		//case  xx:		return "Most Par or Better / No Wins in Range"
		
		case  3710:
		case  3720:		
		case  3730:
		case  3740:		return "Lowest Nine Holes"
		
		case  3800:
		case  3900:
		case  4000:
		case  4100:		
		case  4400:		
		case  4500:		
		case  4600:		return "Most Par or Better"
		case  3810:
		case  3910:
		case  4010:		
		case  4110:		
		case  4410:		
		case  4510:		
		case  4610:		return "Most Bogey or Better"
		case  3820:
		case  3920:
		case  4020:		
		case  4120:		
		case  4420:		
		case  4520:		
		case  4620:		return "Most Eagles"
		case  3830:
		case  3930:
		case  4030:		
		case  4130:		
		case  4430:		
		case  4530:		
		case  4630:		return "Most Birdies"
		case  3840:
		case  3940:
		case  4040:		
		case  4140:		
		case  4440:		
		case  4540:		
		case  4640:		return "Most Pars"
		case  3850:
		case  3950:
		case  4050:		
		case  4150:		
		case  4450:		
		case  4550:		
		case  4650:		return "Most Bogeys"
		case  3860:
		case  3960:
		case  4060:		
		case  4160:		
		case  4460:		
		case  4560:		
		case  4660:		return "Most Double Bogeys"
		case  3870:
		case  3970:
		case  4070:		
		case  4170:		
		case  4470:		
		case  4570:		
		case  4670:		return "Most Triple Bogeys"
		case  3880:
		case  3980:
		case  4080:		
		case  4180:		
		case  4480:		
		case  4580:		
		case  4680:		return "Most Worse Bogeys"
		
		case  4200:		
		case  4300:		return "Highest % Par or Better"
		case  4210:		
		case  4310:		return "Highest % Bogey or Better"
		case  4220:		
		case  4320:		return "Highest % Eagles"
		case  4230:		
		case  4330:		return "Highest % Birdies"
		case  4240:		
		case  4340:		return "Highest % Pars"
		case  4250:		
		case  4350:		return "Highest % Bogeys"
		case  4260:		
		case  4360:		return "Highest % Double Bogeys"
		case  4270:		
		case  4370:		return "Highest % Triple Bogeys"
		case  4280:		
		case  4380:		return "Highest % Worse Bogeys"
		
		case     8:		
		case     9:		return "Most Meltdown Awards"
		case    10:		return "Biggest Meltdown"
		case    11:		return "Biggest Anti-Meltdown"
		case	12:		return "Lowest Meltdown Finish"
		case    13:		return "Lowest Meltdown Round"
		case    14:		return "Highest Meltdown Front Nine"
		case    15:		
		case    16:		return "Most Mediocre Awards"
		case    17:		return "Lowest Mediocre Round"
		case    20:		
		case    21:		return "Most Gross Awards"
		case    25:		
		case    26:		return "Most Long Drive Awards"
		case    30:		
		case    31:		return "Most Closest to the Pin Awards"
		case    35:		
		case    36:		return "Most Red Key Awards"
		case    37:		return "Lowest Red Key Round"
		
		case  3745:		return "Highest Winning Round"
		case  3746:		return "Lowest Non-Winning Round"
		
		case    50:		return "Largest Field Size"

        default:		return "N/A";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordData(Record, Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var varRecord		= arguments[0] * 1;
	var varEvent		= arguments[1];
	var varCourse		= arguments[2];
	var varSeason1		= arguments[3];
	var varSeason2		= arguments[4];
	
	var arrRecordData	= new Array();
	/**---------------------------------------------------------------------**/
	
	switch (varRecord) {
		case	 8:		return getRecord_Awards_MostMeltdowns(varEvent,varCourse,varSeason1,varSeason2);
		case	 9:		return getRecord_Awards_MostMeltdowns_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case    10:		return getRecord_Awards_BiggestMeltdown(varEvent,varCourse,varSeason1,varSeason2);
		case    11:		return getRecord_Awards_BiggestImprovement(varEvent,varCourse,varSeason1,varSeason2);
		case    12:		return getRecord_Awards_LowestMeltdownPosition(varEvent,varCourse,varSeason1,varSeason2);
		case    13:		return getRecord_Awards_LowestMeltdownScore(varEvent,varCourse,varSeason1,varSeason2);
		case    14:		return getRecord_Awards_HighestMeltdownFrontNine(varEvent,varCourse,varSeason1,varSeason2);
		case    15:		return getRecord_Awards_MostMediocres(varEvent,varCourse,varSeason1,varSeason2);
		case    16:		return getRecord_Awards_MostMediocres_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case    17:		return getRecord_Awards_LowestMediocreRound(varEvent,varCourse,varSeason1,varSeason2);
		case    20:		return getRecord_Awards_MostGross(varEvent,varCourse,varSeason1,varSeason2);
		case    21:		return getRecord_Awards_MostGross_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case    25:		return getRecord_Awards_MostLongDrives(varEvent,varCourse,varSeason1,varSeason2);
		case    26:		return getRecord_Awards_MostLongDrives_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case    30:		return getRecord_Awards_MostClosePins(varEvent,varCourse,varSeason1,varSeason2);
		case    31:		return getRecord_Awards_MostClosePins_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case    35:		return getRecord_Awards_MostRedKeys(varEvent,varCourse,varSeason1,varSeason2);
		case    36:		return getRecord_Awards_MostRedKeys_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case    37:		return getRecord_Awards_LowestRedKeyRound(varEvent,varCourse,varSeason1,varSeason2);
		
		case    50:		return getRecord_Chapter_LargestFieldSize(varEvent,varCourse,varSeason1,varSeason2);
		
		case   100:		return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,1);
		case   200:		return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case   300:		return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,2);
        case   400:		return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,3);
        case   500:		return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case   600:		return getRecord_MostFinishPositional_Range(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case   700:		return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,1);
		case   800:		return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,2,2);
        case   900:		return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,2);
        case  1000:		return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,3);
        case  1100:		return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  1200:		return getRecord_MostFinishPositional_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  1300:		return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case  1400:		return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,3);
		case  1500:		return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  1600:		return getRecord_MostFinishPositional_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  1700:		return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case  1800:		return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,3);
		case  1900:		return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  2000:		return getRecord_MostFinishPositional_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  2100:		return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,2,2);
		case  2200:		return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,3);
		case  2300:		return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,5);
		case  2400:		return getRecord_MostFinishPositional_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2,1,10);
		case  2500:		return getRecord_MostEarnings_Range(varEvent,varCourse,varSeason1,varSeason2);
		case  2600:		return getRecord_MostEarnings_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case  2700:		return getRecord_MostEarnings_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2800:		return getRecord_MostEarnings_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2900:		return getRecord_MostEarnings_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2910:		return getRecord_AvgEarnings_Range(varEvent,varCourse,varSeason1,varSeason2);
		case  2915:		return getRecord_AvgEarnings_SingleSeason(varEvent,varCourse,varSeason1,varSeason2);
		case  2920:		return getRecord_AvgEarnings_SingleSeason_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2925:		return getRecord_AvgEarnings_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2930:		return getRecord_AvgEarnings_Career_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2945:		return getRecord_LowRoundAvg_Range_Gross(varEvent,varCourse,varSeason1,varSeason2);
		case  2946:		return getRecord_LowRoundAvg_Range_Gross_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2947:		return getRecord_LowRoundAvg_Range_Gross_NoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  2948:		return getRecord_LowRoundAvg_Range_Gross_NoWinsNoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  2952:		return getRecord_LowRoundAvg_Range_Net(varEvent,varCourse,varSeason1,varSeason2);
		case  2953:		return getRecord_LowRoundAvg_Range_Net_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  2954:		return getRecord_LowRoundAvg_Range_Net_NoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  2955:		return getRecord_LowRoundAvg_Range_Net_NoWinsNoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  3000:		return getRecord_LowRound_Range_Gross(varEvent,varCourse,varSeason1,varSeason2);
		case  3100:		return getRecord_LowRound_Range_Gross_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  3200:		return getRecord_LowRound_Range_Gross_NoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  3300:		return getRecord_LowRound_Range_Gross_NoWinsNoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  3400:		return getRecord_LowRound_Range_Net(varEvent,varCourse,varSeason1,varSeason2);
		case  3500:		return getRecord_LowRound_Range_Net_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  3600:		return getRecord_LowRound_Range_Net_NoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  3700:		return getRecord_LowRound_Range_Net_NoWinsNoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  3710:		return getRecord_LowNine_Range(varEvent,varCourse,varSeason1,varSeason2);
		case  3720:		return getRecord_LowNine_Range_NoWins(varEvent,varCourse,varSeason1,varSeason2);
		case  3730:		return getRecord_LowNine_Range_NoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  3740:		return getRecord_LowNine_Range_NoWinsNoDQs(varEvent,varCourse,varSeason1,varSeason2);
		case  3745:		return getRecord_HighestWinningRound(varEvent,varCourse,varSeason1,varSeason2);
		case  3746:		return getRecord_LowestNonWinningRound(varEvent,varCourse,varSeason1,varSeason2);
		/*
		case  xxxx:		return getRecord_LowParAvg_Range(varEvent,varCourse,varSeason1,varSeason2,3);
		case  xxxx:		return getRecord_LowParAvg_Range(varEvent,varCourse,varSeason1,varSeason2,4);
		case  xxxx:		return getRecord_LowParAvg_Range(varEvent,varCourse,varSeason1,varSeason2,5);
		case  xxxx:		return getRecord_LowParAvg_Range_Season(varEvent,varCourse,varSeason1,varSeason2,3);
		case  xxxx:		return getRecord_LowParAvg_Range_Season(varEvent,varCourse,varSeason1,varSeason2,4);
		case  xxxx:		return getRecord_LowParAvg_Range_Season(varEvent,varCourse,varSeason1,varSeason2,5);
		case  xxxx:		return getRecord_LowParAvg_Range_Event(varEvent,varCourse,varSeason1,varSeason2,3);
		case  xxxx:		return getRecord_LowParAvg_Range_Event(varEvent,varCourse,varSeason1,varSeason2,4);
		case  xxxx:		return getRecord_LowParAvg_Range_Event(varEvent,varCourse,varSeason1,varSeason2,5);
		*/
		case  3800:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  3810:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  3820:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  3830:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  3840:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  3850:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  3860:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  3870:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  3880:		return getRecord_MostScoreType_FullRound_Range(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  3900:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  3910:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  3920:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  3930:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  3940:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  3950:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  3960:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  3970:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  3980:		return getRecord_MostScoreType_FullRound_Range_SingleSeason(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  4000:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  4010:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  4020:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  4030:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  4040:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  4050:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  4060:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  4070:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  4080:		return getRecord_MostScoreType_FullRound_Range_SingleEvent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  4100:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  4110:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  4120:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  4130:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  4140:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  4150:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  4160:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  4170:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  4180:		return getRecord_MostScoreType_Consecutive_Range(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  4200:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  4210:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  4220:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  4230:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  4240:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  4250:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  4260:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  4270:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  4280:		return getRecord_MostScoreType_FullRound_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  4300:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey");
		case  4310:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey");
		case  4320:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle");
		case  4330:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie");
		case  4340:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Par");
		case  4350:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey");
		case  4360:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey");
		case  4370:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey");
		case  4380:		return getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey");
		case  4400:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey",3);
		case  4410:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey",3);
		case  4420:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle",3);
		case  4430:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie",3);
		case  4440:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Par",3);
		case  4450:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey",3);
		case  4460:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey",3);
		case  4470:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey",3);
		case  4480:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey",3);
		case  4500:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey",4);
		case  4510:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey",4);
		case  4520:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle",4);
		case  4530:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie",4);
		case  4540:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Par",4);
		case  4550:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey",4);
		case  4560:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey",4);
		case  4570:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey",4);
		case  4580:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey",4);
		case  4600:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey",5);
		case  4610:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey",5);
		case  4620:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle",5);
		case  4630:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie",5);
		case  4640:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Par",5);
		case  4650:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey",5);
		case  4660:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey",5);
		case  4670:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey",5);
		case  4680:		return getRecord_MostScoreType_ParX_Range(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey",5);
		/*
		case  4700:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey",3);
		case  4710:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey",3);
		case  4720:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle",3);
		case  4730:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie",3);
		case  4740:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Par",3);
		case  4750:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey",3);
		case  4760:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey",3);
		case  4770:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey",3);
		case  4780:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey",3);
		case  4800:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey",4);
		case  4810:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey",4);
		case  4820:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle",4);
		case  4830:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie",4);
		case  4840:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Par",4);
		case  4850:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey",4);
		case  4860:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey",4);
		case  4870:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey",4);
		case  4880:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey",4);
		case  4900:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","Bogey",5);
		case  4910:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"<","DblBogey",5);
		case  4920:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Eagle",5);
		case  4930:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Birdie",5);
		case  4940:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Par",5);
		case  4950:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","Bogey",5);
		case  4960:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","DblBogey",5);
		case  4970:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,"=","TrpBogey",5);
		case  4980:		return getRecord_MostScoreType_ParX_Range_Percent(varEvent,varCourse,varSeason1,varSeason2,">","TrpBogey",5);
		*/
		case 10000:		return getRecord_CourseLowRoundAvg_Range_Gross(varEvent,varCourse,varSeason1,varSeason2);
		case 10001:		return getRecord_CourseLowRoundAvg_Range_Net(varEvent,varCourse,varSeason1,varSeason2);
		case 10002:		return getRecord_CourseLowRoundAvg_Range_ParX(varEvent,varCourse,varSeason1,varSeason2,3);
		case 10003:		return getRecord_CourseLowRoundAvg_Range_ParX(varEvent,varCourse,varSeason1,varSeason2,4);
		case 10004:		return getRecord_CourseLowRoundAvg_Range_ParX(varEvent,varCourse,varSeason1,varSeason2,5);
		case 10010:		return getRecord_CourseLowRoundAvg_Range_SingleHole(varEvent,varCourse,varSeason1,varSeason2);
		case 10011:		return getRecord_CourseLowRoundAvg_Range_SingleHole_ParX(varEvent,varCourse,varSeason1,varSeason2,3);
		case 10012:		return getRecord_CourseLowRoundAvg_Range_SingleHole_ParX(varEvent,varCourse,varSeason1,varSeason2,4);
		case 10013:		return getRecord_CourseLowRoundAvg_Range_SingleHole_ParX(varEvent,varCourse,varSeason1,varSeason2,5);
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordHeaderBreak(RecordID) {
	/**---------------------------------------------------------------------**/
	var pRecordID = arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	pRecordID = getRecordDisplayOrder(pRecordID);
	
	switch (pRecordID) {
		/*
		case   600:
		case  1200:
		case  1600:
		case  2000:
		case  2400:
		*/
		
		case    14:
		case    17:
		case    21:
		case    26:
		case    31:
		case    37:
		case    50:
		case   500:
		case  1100:
		case  1500:
		case  1900:
		case  2300:
		case  2900:
		case  2930:
		case  2948:
		case  2955:
		case  3300:
		case  3700:
		case  3740:
		case  3746:
		case  3880:
		case  3980:
		case  4080:
		case  4180:
		case  4280:
		case  4380:
		case  4480:
		case  4580:
		case  4680:		
		case 10001:
		case 10004:
		case 10013:		return true;
		

        default:		return false;
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordCategoryHeader(RecordID) {
	/**---------------------------------------------------------------------**/
	var pRecordID = arguments[0] * 1;
	/**---------------------------------------------------------------------**/
    
	switch(pRecordID) {
		case     8:		return "MGA Awards Records";
		case    50:		return "Chapter Records";
        case   100:		return "Placement Records";
        case  2500:		return "Earnings Records";
		case  2945:		return "Scoring Records";
		case  3800:		return "Score Type Records";
		case 10000:		return "Course Records";
		
        default:		return "N/A";
    }
}


/********************************************************************************************/
/********************************************************************************************/


function processRecordSummary(RecordID, Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pRecordID		= arguments[0] * 1;
	var pEvent			= arguments[1];
	var pCourse			= arguments[2];
	var pSeasonBegin	= arguments[3];
	var pSeasonEnd		= arguments[4];
	/**---------------------------------------------------------------------**/

	processRecordSummaryDisplay(
				getRecordData(pRecordID,pEvent,pCourse,pSeasonBegin,pSeasonEnd)
			,	getRecordSortOrder(pRecordID)
            ,   getRecordNumberFormat(pRecordID)
			,	getRecordRules(pRecordID)
	);
}


/********************************************************************************************/
/********************************************************************************************/


function processRecordSummaryDisplay(RecordsArray, SortOrder, optRecordType, RecordRules) {
	/**---------------------------------------------------------------------**/
	var pRecords			= arguments[0];
	var pSortOrder			= arguments[1];
	var pRecordType			= arguments[2];
	var pRecordRules		= arguments[3];
	
	var varRecordStat		= 0;
	var varNamesList		= "";
	var varDisplayCounter	= 0;
	
	var arrGolfers			= new Array();		arrGolfers		= pRecords[0];
	var arrStats			= new Array();		arrStats		= pRecords[1];
	var arrSeasons			= new Array();		arrSeasons		= pRecords[2];
	var arrExtraInfo		= new Array();		arrExtraInfo	= pRecords[3];
	var arrDisplay			= new Array();
	/**---------------------------------------------------------------------**/
	
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
	if (arrDisplay[0][1] != "-") {
		varRecordStat = formatNumber(pRecordType, arrDisplay[0][1]);
	}
	varNamesList = "";
	arrDisplay = sortMDArray(arrDisplay, 0, "asc");
	
	document.write("<td align='center'>" + pRecordRules + "</td>");
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


function getRecord_Awards_MostMeltdowns(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vReturnIndex		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							if (aRounds[r][44] == "x") {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Most Meltdown Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostMeltdowns_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
					
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								vEventCounter++;
							
								if (aRounds[r][44] == "x") {
									aReturnStat[vReturnIndex]++;
								}
							}
						}
					}
				}
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Meltdown Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_BiggestMeltdown(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vFront9				= 0;
	var vBack9				= 0;
	var vMeltdown			= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							vFront9 = getNineHoleScore(aRounds, r, true);
							vBack9 = getNineHoleScore(aRounds, r, false);
							vMeltdown = vBack9 - vFront9;
							
							if (vMeltdown > 0) {
								aReturnStat[vReturnIndex] = vMeltdown;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( ' + vFront9 + ' - ' + vBack9 + ' )';
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Biggest Meltdown" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_BiggestImprovement(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vFront9				= 0;
	var vBack9				= 0;
	var vImprovement		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							vFront9 = getNineHoleScore(aRounds, r, true);
							vBack9 = getNineHoleScore(aRounds, r, false);
							vImprovement = vFront9 - vBack9;
							
							if (vImprovement > 0) {
								aReturnStat[vReturnIndex] = vImprovement;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( ' + vFront9 + ' - ' + vBack9 + ' )';
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Biggest Anti-Meltdown" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_LowestMeltdownPosition(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vFront9				= 0;
	var vBack9				= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][44] == "x") {
								
								vFront9 = getNineHoleScore(aRounds, r, true);
								vBack9 = getNineHoleScore(aRounds, r, false);
								
								aReturnStat[vReturnIndex] = aRounds[r][4];
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( ' + vFront9 + ' - ' + vBack9 + ' )';
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Meltdown-Winning Finish" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_LowestMeltdownScore(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vFront9				= 0;
	var vBack9				= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][44] == "x") {
								
								vFront9 = getNineHoleScore(aRounds, r, true);
								vBack9 = getNineHoleScore(aRounds, r, false);
								
								aReturnStat[vReturnIndex] = vFront9 + vBack9;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( ' + vFront9 + ' - ' + vBack9 + ' )';
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Meltdown-Winning Round" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_HighestMeltdownFrontNine(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vFront9				= 0;
	var vBack9				= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][44] == "x") {
								
								vFront9 = getNineHoleScore(aRounds, r, true);
								vBack9 = getNineHoleScore(aRounds, r, false);
								
								aReturnStat[vReturnIndex] = vFront9;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( ' + vFront9 + ' - ' + vBack9 + ' )';
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Highest Meltdown-Winning Front 9" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostMediocres(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							if (aRounds[r][45] == "x") {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Most Mediocre Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostMediocres_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	var vRoundPosHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
					
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								vEventCounter++;
							
								if (aRounds[r][45] == "x") {
									aReturnStat[vReturnIndex]++;
								}
							}
						}
					}
				}
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Mediocre Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_LowestMediocreRound(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vRoundTotal			= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
							if (aRounds[r][45] == "x") {
								
								vRoundTotal = getFullRoundScore(aRounds, r, true);
								
								aReturnStat[vReturnIndex] = vRoundTotal;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Mediocre-Winning Round" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostGross(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							if (aRounds[r][46] == "x") {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Most Gross Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostGross_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
					
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								vEventCounter++;
							
								if (aRounds[r][46] == "x") {
									aReturnStat[vReturnIndex]++;
								}
							}
						}
					}
				}
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Gross Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostLongDrives(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundPosHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
							vEventCounter++;
							
							if (aRounds[r][47] == "x") {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Most Long Drive Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostLongDrives_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
					
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								vEventCounter++;
							
								if (aRounds[r][47] == "x") {
									aReturnStat[vReturnIndex]++;
								}
							}
						}
					}
				}
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Long Drive Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostClosePins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundPosHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
							vEventCounter++;
							
							if (aRounds[r][48] == "x") {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Most Closest to the Pin Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostClosePins_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
					
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								vEventCounter++;
							
								if (aRounds[r][48] == "x") {
									aReturnStat[vReturnIndex]++;
								}
							}
						}
					}
				}
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Closest to the Pin Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostRedKeys(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundPosHold		= 0;
	
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
							vEventCounter++;
							
							if (aRounds[r][49] == "x") {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Most Red Key Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_MostRedKeys_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
					
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								vEventCounter++;
							
								if (aRounds[r][49] == "x") {
									aReturnStat[vReturnIndex]++;
								}
							}
						}
					}
				}
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Red Key Awards" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Awards_LowestRedKeyRound(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vRoundTotal			= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {
			
			aReturnStat[vReturnIndex] = 0;

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
							if (aRounds[r][49] == "x") {
								
								vRoundTotal = getFullRoundScore(aRounds, r, true);
								
								aReturnStat[vReturnIndex] = vRoundTotal;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Red Key-Winning Round" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_Chapter_LargestFieldSize(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	var aDates				= new Array();
	var aEvents				= new Array();
	var aCourses			= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var vNewDateFlag		= true;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	var vEventDateHold		= "01-01-1900";
	
	var vSeasonHold			= 0;
	var vGolferCounter		= 0;
	var vReturnIndex		= 0;
	var vPercent			= 0;
	var vLoopCounter		= 0;
	
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (r = 0; r < aRounds.length; r++) {
				
		if (aRounds[r][2] == pCourse || vAllCourses) {
		
			if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
				vSeasonHold = aRounds[r][0].substr(6,9);
				
				if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
					
					for (l = 0; l < vLoopCounter; l++) {
						
						if (aRounds[r][0] == aDates[l]) {
							vNewDateFlag = false;
						}
					}
					
					if (vNewDateFlag == true) {
						aDates[vLoopCounter] = aRounds[r][0]; //date
						aEvents[vLoopCounter] = aRounds[r][1]; //event
						aCourses[vLoopCounter] = aRounds[r][2]; //course
						vLoopCounter++;
					}
					
					vNewDateFlag = true;
				}
			}
		}
	}
	
	for (d = 0; d < aDates.length; d++) {
		
		vGolferCounter = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aDates[d] == aRounds[r][0]) {
				vGolferCounter++;
			}
		}
		
		aReturnStat[vReturnIndex] = vGolferCounter; 
		aReturnGolfers[vReturnIndex] = aDates[d].substr(6,9) + ' ' + aEvents[d];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = aCourses[d];
		vReturnIndex++;
	}
	
	vReturnTitle = "Largest Field Size" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostFinishPositional_Range(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pPosBegin			= arguments[4];
	var pPosEnd				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vReturnIndex		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
				
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {

							vEventCounter++;
							
							if (aRounds[r][4] >= pPosBegin && aRounds[r][4] <= pPosEnd) {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
			vPercent = Math.round(vPercent * 10000) / 100;
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(2) + "% )";
			vReturnIndex++;
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


function getRecord_MostFinishPositional_SingleSeason(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pPosBegin			= arguments[4];
	var pPosEnd				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vSeasonHold			= 0;
	var vSeasonLoopHold		= 0;
	var vEventCounter		= 0;
	var vPercent			= 0;
	var vReturnIndex		= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		if (vSeasonLoopHold >= pSeasonBegin && vSeasonLoopHold <= pSeasonEnd) {
		
			for (g = 0; g < aGolfers.length; g++) {
				
				vEventCounter = 0;
				aReturnStat[vReturnIndex] = 0;
				
				for (r = 0; r < aRounds.length; r++) {
					
					if (aRounds[r][3] == aGolfers[g]) {
						
						if (aRounds[r][2] == pCourse || vAllCourses) {
							
							if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
								vSeasonHold = aRounds[r][0].substr(6,9);
								
								if (vSeasonHold == vSeasonLoopHold) {
												
									vEventCounter++;
									
									if (aRounds[r][4] >= pPosBegin && aRounds[r][4] <= pPosEnd) {
										aReturnStat[vReturnIndex]++;
									}
								}
							}
						}
					}
				}
				
				if (aReturnStat[vReturnIndex] > 0) {
					vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
					vPercent = Math.round(vPercent * 10000) / 100;
					
					aReturnGolfers[vReturnIndex] = aGolfers[g];
					aReturnSeason[vReturnIndex] = vSeasonLoopHold;
					aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(2) + "% )";
					vReturnIndex++;
				}
			}
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
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pPosBegin			= arguments[4];
	var pPosEnd				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var vIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season without a Win]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vSeasonLoopHold		= 0;
	var vEventCounter		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		if (vSeasonLoopHold >= pSeasonBegin && vSeasonLoopHold <= pSeasonEnd) {
		
			for (g = 0; g < aGolfers.length; g++) {
				
				vEventCounter = 0;
				aReturnStat[vReturnIndex] = 0;
				
				if (vIsWinner == true) {
					vIsWinner = false;
				}
				
				for (r = 0; r < aRounds.length; r++) {
					
					if (aRounds[r][3] == aGolfers[g]) {
						
						if (aRounds[r][2] == pCourse || vAllCourses) {
							
							if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
					
								vSeasonHold = aRounds[r][0].substr(6,9);
									
								if (vSeasonHold == vSeasonLoopHold) {

									if (aRounds[r][4] == 1 && vSeasonLoopHold == vSeasonHold) {
										vIsWinner = true;
										aReturnStat[vReturnIndex] = 0;
										break;
									}
									
									vEventCounter++;
									
									if (aRounds[r][4] >= pPosBegin && aRounds[r][4] <= pPosEnd) {
										aReturnStat[vReturnIndex]++;
									}
								}
							}
						}
					}
				}
				
				if (aReturnStat[vReturnIndex] > 0) {
					vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
					vPercent = Math.round(vPercent * 10000) / 100;
					
					aReturnGolfers[vReturnIndex] = aGolfers[g];
					aReturnSeason[vReturnIndex] = vSeasonLoopHold;
					aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(2) + "% )";
					vReturnIndex++;
				}
			}
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


function getRecord_MostFinishPositional_Range_NoWins(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pPosBegin			= arguments[4];
	var pPosEnd				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var vIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (vIsWinner == true) {
			vIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
						
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							if (aRounds[r][4] == 1) {
								vIsWinner = true;
								aReturnStat[vReturnIndex] = 0;
								break;
							}
							
							vEventCounter++;
							
							if (aRounds[r][4] >= pPosBegin && aRounds[r][4] <= pPosEnd) {
								aReturnStat[vReturnIndex]++;
							}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
			vPercent = Math.round(vPercent * 10000) / 100;
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(2) + "% )";
			vReturnIndex++;
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


function getRecord_MostFinishPositional_Career_NoWins(Event, Course, SeasonBegin, SeasonEnd, PositionBegin, PositionEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pPosBegin			= arguments[4];
	var pPosEnd				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Career]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
				fIsWinner = true;
				aReturnStat[vReturnIndex] = 0;
				break;
			}
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
								
								vEventCounter++;
								
								if (aRounds[r][4] >= pPosBegin && aRounds[r][4] <= pPosEnd) {
									aReturnStat[vReturnIndex]++;
								}
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
			vPercent = Math.round(vPercent * 10000) / 100;
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(2) + "% )";
			vReturnIndex++;
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


function getRecord_MostEarnings_Range(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {

		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {

					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							vEventCounter++;
							aReturnStat[vReturnIndex] += aRounds[r][6];
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
			vPercent = Math.round(vPercent * 1000) / 1000;
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(3) + " / event )";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
						
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonHold == vSeasonLoopHold) {

								vEventCounter++;
								aReturnStat[vReturnIndex] += aRounds[r][6];
							}
						}
					}
				}
			}
		
			if (aReturnStat[vReturnIndex] > 0) {
				vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
				vPercent = Math.round(vPercent * 1000) / 1000;
				
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(3) + " / event )";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_SingleSeason_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season without a Win]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			if (fIsWinner == true) {
				fIsWinner = false;
			}
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
						
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonHold == vSeasonLoopHold) {

								if (aRounds[r][4] == 1 && vSeasonLoopHold == vSeasonHold) {
									fIsWinner = true;
									aReturnStat[vReturnIndex] = 0;
									break;
								}
								
								vEventCounter++;
								aReturnStat[vReturnIndex] += aRounds[r][6];
							}
						}
					}
				}
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
				vPercent = Math.round(vPercent * 1000) / 1000;
				
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(3) + " / event )";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_Range_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";
	
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vReturnIndex		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
							if (aRounds[r][4] == 1) {
								fIsWinner = true;
								aReturnStat[vReturnIndex] = 0;
								break;
							}
							
							vEventCounter++;
							aReturnStat[vReturnIndex] += aRounds[r][6];
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
			vPercent = Math.round(vPercent * 1000) / 1000;
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(3) + " / event )";
			vReturnIndex++;
		}
	}

	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostEarnings_Career_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Career]</div>";
	
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vReturnIndex		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
				fIsWinner = true;
				aReturnStat[vReturnIndex] = 0;
				break;
			}

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							aReturnStat[vReturnIndex] += aRounds[r][6];
						}
					}
				}
			}
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			vPercent = (aReturnStat[vReturnIndex] / vEventCounter);
			vPercent = Math.round(vPercent * 1000) / 1000;
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events<br />( " + vPercent.toFixed(3) + " / event )";
			vReturnIndex++;
		}
	}

	vReturnTitle = "Most Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_AvgEarnings_Range(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events]</div>";
	
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vReturnIndex		= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							aReturnStat[vReturnIndex] += aRounds[r][6];
						}
					}
				}
			}
		}
		
		if (vEventCounter < 3) {
			aReturnStat[vReturnIndex] = 0;
		} else {
			aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex] / vEventCounter;
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnStat[vReturnIndex] = parseFloat(aReturnStat[vReturnIndex].toFixed(3));
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Average Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_AvgEarnings_SingleSeason(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season][Minimum 3 Events]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
						
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								vEventCounter++;
								aReturnStat[vReturnIndex] += aRounds[r][6];
							}
						}
					}
				}
			}
			
			if (vEventCounter < 3) {
				aReturnStat[vReturnIndex] = 0;
			} else {
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex] / vEventCounter;
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = parseFloat(aReturnStat[vReturnIndex].toFixed(3));
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Average Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_AvgEarnings_SingleSeason_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds = getData_Rounds();
	var aGolfers			= new Array();		aGolfers = getData_Golfers();
	var aSeasons			= new Array();		aSeasons = getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner 			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season without a Win][Minimum 3 Events]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vEventCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			if (fIsWinner == true) {
				fIsWinner = false;
			}
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
						
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {

								if (aRounds[r][4] == 1 && vSeasonLoopHold == vSeasonHold) {
									fIsWinner = true;
									aReturnStat[vReturnIndex] = 0;
									break;
								}
								
								vEventCounter++;
								aReturnStat[vReturnIndex] += aRounds[r][6];
							}
						}
					}
				}
			}
			
			if (vEventCounter < 3) {
				aReturnStat[vReturnIndex] = 0;
			} else {
				aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex] / vEventCounter;
			}
			
			if (aReturnStat[vReturnIndex] > 0) {
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnStat[vReturnIndex] = parseFloat(aReturnStat[vReturnIndex].toFixed(3));
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
				
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Average Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_AvgEarnings_Range_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Date Range][Minimum 3 Events]</div>";
	
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vReturnIndex		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							if (aRounds[r][4] == 1) {
								fIsWinner = true;
								aReturnStat[vReturnIndex] = 0;
								break;
							}
				
							vEventCounter++;
							aReturnStat[vReturnIndex] += aRounds[r][6];
						}
					}
				}
			}
		}
		
		if (vEventCounter < 3) {
			aReturnStat[vReturnIndex] = 0;
		} else {
			aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex] / vEventCounter;
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnStat[vReturnIndex] = parseFloat(aReturnStat[vReturnIndex].toFixed(3));
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			
			vReturnIndex++;
		}
	}

	vReturnTitle = "Average Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_AvgEarnings_Career_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Career][Minimum 3 Events]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
				fIsWinner = true;
				aReturnStat[vReturnIndex] = 0;
				break;
			}

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							aReturnStat[vReturnIndex] += aRounds[r][6];
						}
					}
				}
			}
		}
		
		if (vEventCounter < 3) {
			aReturnStat[vReturnIndex] = 0;
		} else {
			aReturnStat[vReturnIndex] = aReturnStat[vReturnIndex] / vEventCounter;
		}
		
		if (aReturnStat[vReturnIndex] > 0) {
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnStat[vReturnIndex] = parseFloat(aReturnStat[vReturnIndex].toFixed(3));
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " events";
			
			vReturnIndex++;
		}
	}

	vReturnTitle = "Average Earnings" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}

	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins in Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events][No DQ's in Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][4] == 0 && aRounds[r][3] == aGolfers[g]) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins or DQ's in Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if ((aRounds[r][4] == 0 || aRounds[r][4] == 1) && aRounds[r][3] == aGolfers[g]) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
							
							vRoundTotal += aRounds[r][7];
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}

	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins in Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][4] == 1 && aRounds[r][3] == aGolfers[g]) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
							
							vRoundTotal += aRounds[r][7];
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events][No DQ's in Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][4] == 0 && aRounds[r][3] == aGolfers[g]) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
							
							vRoundTotal += aRounds[r][7];
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins or DQ's in Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if ((aRounds[r][4] == 0 || aRounds[r][4] == 1) && aRounds[r][3] == aGolfers[g]) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
							
							vRoundTotal += aRounds[r][7];
						}
					}
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		if (vAverage > 0) {
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";

	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsWinner(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No DQ's in Date Range]</div>";

	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsDQ(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Gross_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins or DQ's in Date Range]</div>";

	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsDQ(aRounds, r) || calcIsWinner(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";

	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsWinner(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No DQ's in Date Range]</div>";

	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsDQ(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRound_Range_Net_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins or DQ's in Date Range]</div>";

	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsDQ(aRounds, r) || calcIsWinner(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getFullRoundScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Round (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowNine_Range(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Front 9 )';
							
							vReturnIndex++;
							
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Back 9 )';
							
							vReturnIndex++;
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Nine Holes" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowNine_Range_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins in Date Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsWinner(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Front 9 )';
							
							vReturnIndex++;
							
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Back 9 )';
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Nine Holes" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowNine_Range_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No DQ's in Date Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsDQ(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Front 9 )';
							
							vReturnIndex++;
							
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Back 9 )';
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Nine Holes" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowNine_Range_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var fIsWinner			= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Wins or DQ's in Date Range]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (calcIsWinner(aRounds, r) || calcIsDQ(aRounds, r)) {
								fIsWinner = true;
								break;
							}
						}
					}
				}
			}
		}
				
		if (fIsWinner == true) {
			continue;
		}		
				
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, true);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Front 9 )';
							
							vReturnIndex++;
							
							aReturnStat[vReturnIndex] = getNineHoleScore(aRounds, r, false);
							aReturnGolfers[vReturnIndex] = aGolfers[g];
							aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
							aReturnExtraInfo[vReturnIndex] = aRounds[r][2] + '<br />( Back 9 )';
							
							vReturnIndex++;
						}
					}		
				}
			}
		}
	}

	vReturnTitle = "Lowest Nine Holes" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_HighestWinningRound(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vRoundTotal			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][4] == 1) {
								
								vRoundTotal = getFullRoundScore(aRounds, r, true);
								
								aReturnStat[vReturnIndex] = vRoundTotal;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
								
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Highest Winning Round" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowestNonWinningRound(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[No Disqualifications]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vRoundTotal			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {

			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
							if (aRounds[r][4] > 1) {
								
								vRoundTotal = getFullRoundScore(aRounds, r, true);
								
								aReturnStat[vReturnIndex] = vRoundTotal;
								aReturnGolfers[vReturnIndex] = aGolfers[g];
								aReturnSeason[vReturnIndex] = vSeasonHold + ' ' + aRounds[r][1];
								aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
								
								vReturnIndex++;
							}
						}
					}
				}
			}
		}
	}

	vReturnTitle = "Lowest Non-Winning Round" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_MostScoreType_FullRound_Range(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pOperator			= arguments[4];
	var pTarget				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vTotal				= 0;
	var vOffset				= 0;
	var vPercent			= 0;
	var vReturnIndex		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	vOffset = getParOffset(pTarget);

	for (g = 0; g < aGolfers.length; g++) {
		
		aReturnStat[vReturnIndex] = 0;
		vTotal = 0;
		vHoleCounter = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
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
				}
			}
		}
		
		vPercent = (vTotal / vHoleCounter) * 100;
		vPercent = Math.round(vPercent * 1000) / 1000;
		
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnStat[vReturnIndex] = vTotal;
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vHoleCounter + " Holes<br />( " + vPercent.toFixed(3) + " % )";
		vReturnIndex++;
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


function getRecord_MostScoreType_FullRound_Range_SingleSeason(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pOperator			= arguments[4];
	var pTarget				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vTotal				= 0;
	var vOffset				= 0;
	var vPercent			= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	vOffset = getParOffset(pTarget);
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vTotal = 0;
			vHoleCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
						
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {
						
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
					}
				}
			}
			
			vPercent = (vTotal / vHoleCounter) * 100;
			vPercent = Math.round(vPercent * 1000) / 1000;
			
			aReturnStat[vReturnIndex] = vTotal;
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnSeason[vReturnIndex] = vSeasonLoopHold;
			aReturnExtraInfo[vReturnIndex] = vHoleCounter + " Holes<br />( " + vPercent.toFixed(3) + " % )";
			vReturnIndex++;
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
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pOperator			= arguments[4];
	var pTarget				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Event]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vTotal				= 0;
	var vOffset				= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	vOffset = getParOffset(pTarget);
	
	for (g = 0; g < aGolfers.length; g++) {
		
		for (r = 0; r < aRounds.length; r++) {
			
			vTotal = 0;
			aReturnStat[vReturnIndex] = 0;
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
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
					}
				}
			}
			
			if (vTotal > 0) {
				aReturnStat[vReturnIndex] = vTotal;
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonHold + " " + aRounds[r][1];
				aReturnExtraInfo[vReturnIndex] = aRounds[r][2];
				vReturnIndex++;
			}
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
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pOperator			= arguments[4];
	var pTarget				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	var vKeepCounting		= true;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vTotal				= 0;
	var vOffset				= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	vOffset = getParOffset(pTarget);

	for (g = 0; g < aGolfers.length; g++) {

		if (vTotal > 1) {
			aReturnStat[vReturnIndex] = vTotal;
			aReturnGolfers[vReturnIndex] = aGolfers[g-1];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = "-";
			
			vReturnIndex++;
		}
		
		vKeepCounting = true;
		vTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
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
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pOperator			= arguments[4];
	var pTarget				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Minimum 3 Events]</div>";
	
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vTotal				= 0;
	var vOffset				= 0;
	var vPercent			= 0;
	var vReturnIndex		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	vOffset = getParOffset(pTarget);

	for (g = 0; g < aGolfers.length; g++) {
		
		aReturnStat[vReturnIndex] = 0;
		vTotal = 0;
		vHoleCounter = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
				
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
				}
			}
		}
		
		if (vHoleCounter < 54) {
			vTotal = 0;
			vPercent = 0;
		} else {
			vPercent = (vTotal / vHoleCounter) * 100;
			vPercent = Math.round(vPercent * 1000) / 1000;
			
			aReturnGolfers[vReturnIndex] = aGolfers[g];
			aReturnStat[vReturnIndex] = vPercent;
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vTotal + " Total<br />" + vHoleCounter + " Holes";
			vReturnIndex++;
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


function getRecord_MostScoreType_FullRound_Range_SingleSeason_Percent(Event, Course, SeasonBegin, SeasonEnd, Operator, Target) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pOperator			= arguments[4];
	var pTarget				= arguments[5];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aSeasons			= new Array();		aSeasons	= getData_Seasons().reverse();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Season] [Minimum 3 Events]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vTotal				= 0;
	var vOffset				= 0;
	var vPercent			= 0;
	var vSeasonLoopHold		= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	vOffset = getParOffset(pTarget);
	
	for (s = 0; s < aSeasons.length; s++) {
		
		vSeasonLoopHold = aSeasons[s];
		
		for (g = 0; g < aGolfers.length; g++) {
			
			vTotal = 0;
			vHoleCounter = 0;
			aReturnStat[vReturnIndex] = 0;
			
			for (r = 0; r < aRounds.length; r++) {
				
				if (aRounds[r][3] == aGolfers[g]) {
				
					if (aRounds[r][2] == pCourse || vAllCourses) {
						
						if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
				
							vSeasonHold = aRounds[r][0].substr(6,9);
							
							if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd && vSeasonLoopHold == vSeasonHold) {
						
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
					}
				}
			}
			
			if (vHoleCounter < 54) {
				vTotal = 0;
				vPercent = 0;
			} else {
				vPercent = (vTotal / vHoleCounter) * 100;
				vPercent = Math.round(vPercent * 1000) / 1000;
				
				aReturnStat[vReturnIndex] = vPercent;
				aReturnGolfers[vReturnIndex] = aGolfers[g];
				aReturnSeason[vReturnIndex] = vSeasonLoopHold;
				aReturnExtraInfo[vReturnIndex] = vTotal + " Total<br />" + vHoleCounter + " Holes";
				vReturnIndex++;
			}
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


function getRecord_MostScoreType_ParX_Range(Event, Course, SeasonBegin, SeasonEnd, Operator, Target, HolePar) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pOperator			= arguments[4];
	var pTarget				= arguments[5];
	var pHolePar			= arguments[6];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aGolfers			= new Array();		aGolfers	= getData_Golfers();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vTotal				= 0;
	var vOffset				= 0;
	var vPercent			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }

	vOffset = getParOffset(pTarget);

	for (g = 0; g < aGolfers.length; g++) {
		
		aReturnStat[vReturnIndex] = 0;
		vTotal = 0;
		vHoleCounter = 0;
		
		for (r = 0; r < aRounds.length; r++) {
			
			if (aRounds[r][3] == aGolfers[g]) {
				
				if (aRounds[r][2] == pCourse || vAllCourses) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
			
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
			
							for (z = 0; z < 18; z++) {
								
								if (aRounds[r][z + 26] == pHolePar) {
									
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
					}
				}
			}
		}
		
		vPercent = (vTotal / vHoleCounter) * 100;
		vPercent = Math.round(vPercent * 1000) / 1000;
		
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnStat[vReturnIndex] = vTotal;
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vHoleCounter + " Holes<br />( " + vPercent.toFixed(3) + " % )";
		vReturnIndex++;
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
	
	vReturnTitle = vReturnTitle + " - Par " + pHolePar + "'s" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_CourseLowRoundAvg_Range_Gross(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aCourses			= new Array();		aCourses	= getData_Courses();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (c = 0; c < aCourses.length; c++) {
		
		vEventCounter = 0;
		vRoundTotal = 0;
		vAverage = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (aCourses[c] == pCourse || vAllCourses) {
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][2] == aCourses[c]) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
					
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
						}
					}
				}
			}
			
			if (vEventCounter > 0) {
				vAverage = (vRoundTotal / vEventCounter);
				vAverage = Math.round(vAverage * 1000) / 1000;
			}
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aCourses[c];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
		vReturnIndex++;
	}
	
	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_CourseLowRoundAvg_Range_Net(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aCourses			= new Array();		aCourses	= getData_Courses();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vEventCounter		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (c = 0; c < aCourses.length; c++) {
		
		vEventCounter = 0;
		vRoundTotal = 0;
		vAverage = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (aCourses[c] == pCourse || vAllCourses) {
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][2] == aCourses[c]) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
					
							vEventCounter++;
							
							for (h = 0; h < 18; h++) {
								vRoundTotal += aRounds[r][h + 8];
							}
							
							vRoundTotal += aRounds[r][7];
						}
					}
				}
			}
			
			if (vEventCounter > 0) {
				vAverage = (vRoundTotal / vEventCounter);
				vAverage = Math.round(vAverage * 1000) / 1000;
			}
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aCourses[c];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
		vReturnIndex++;
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_CourseLowRoundAvg_Range_ParX(Event, Course, SeasonBegin, SeasonEnd, ParNum) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pParNum				= arguments[4];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aCourses			= new Array();		aCourses	= getData_Courses();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vRoundPosHold		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (c = 0; c < aCourses.length; c++) {
		
		vHoleCounter = 0;
		vRoundTotal = 0;
		vAverage = 0;
		aReturnStat[vReturnIndex] = 0;
		
		if (aCourses[c] == pCourse || vAllCourses == 1) {
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][2] == aCourses[c]) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							for (h = 0; h < 18; h++) {
								
								if (aRounds[r][h + 26] == pParNum) {
									vHoleCounter++;
									vRoundTotal += aRounds[r][h + 8];
								}
							}
						}
					}
				}
			}
		}
		
		if (vHoleCounter > 0) {
			vAverage = (vRoundTotal / vHoleCounter);
			vAverage = Math.round(vAverage * 1000) / 1000;
		
			aReturnStat[vReturnIndex] = vAverage;
			aReturnGolfers[vReturnIndex] = aCourses[c];
			aReturnSeason[vReturnIndex] = "-";
			aReturnExtraInfo[vReturnIndex] = vHoleCounter + " Holes";
			vReturnIndex++;
		}
	}
	
	vReturnTitle = "Lowest Scoring Average - Par " + pParNum + "'s" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_CourseLowRoundAvg_Range_SingleHole_ParX(Event, Course, SeasonBegin, SeasonEnd, ParNum) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	var pParNum				= arguments[4];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aCourses			= new Array();		aCourses	= getData_Courses();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	var aHoleTotal			= new Array();
	var aHoleCount			= new Array();
	var aHoleAvg			= new Array();
	var aHolePar			= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Hole vs. Par]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vRoundPosHold		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/

	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (c = 0; c < aCourses.length; c++) {
		
		for (h = 0; h < 18; h++) {
			aHoleCount[h] = 0;
			aHoleTotal[h] = 0;
			aHoleAvg[h] = 0;
			aHolePar[h] = 0;
		}
		
		if (aCourses[c] == pCourse || vAllCourses == 1) {
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][2] == aCourses[c]) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							for (h = 0; h < 18; h++) {
								
								if (aRounds[r][h + 26] == pParNum) {
									aHoleCount[h]++;
									aHoleTotal[h] += aRounds[r][h + 8];
									aHolePar[h] = aRounds[r][h + 26];
								}
							}
						}
					}
				}
			}
			
			for (h = 0; h < 18; h++) {
				aHoleAvg[h] = (aHoleTotal[h] / aHoleCount[h]);
				aHoleAvg[h] = Math.round(aHoleAvg[h] * 1000) / 1000;
			}
		}
		
		for (h = 0; h < 18; h++) {
			
			if (aHoleCount[h] > 0) {
				aReturnStat[vReturnIndex] = aHoleAvg[h] - aHolePar[h];
				aReturnGolfers[vReturnIndex] = aCourses[c] + "<br />( Hole " + (h + 1) + " )";
				aReturnSeason[vReturnIndex] = "Par " + aHolePar[h];
				aReturnExtraInfo[vReturnIndex] = "Avg = " + aHoleAvg[h].toFixed(3) + "<br />( " + aHoleCount[h] + " Scores )";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Lowest Scoring Average - Par " + pParNum + "'s" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_CourseLowRoundAvg_Range_SingleHole(Event, Course, SeasonBegin, SeasonEnd) {
	/**---------------------------------------------------------------------**/
	var pEvent				= arguments[0];
	var pCourse				= arguments[1];
	var pSeasonBegin		= arguments[2];
	var pSeasonEnd			= arguments[3];
	
	var aRounds				= new Array();		aRounds		= getData_Rounds();
	var aCourses			= new Array();		aCourses	= getData_Courses();
	var aReturnStat			= new Array();
	var aReturnSeason		= new Array();
	var aReturnExtraInfo	= new Array();
	var aReturnGolfers		= new Array();
	var aHoleTotal			= new Array();
	var aHoleCount			= new Array();
	var aHoleAvg			= new Array();
	var aHolePar			= new Array();
	
	var vAllCourses			= false;
	var vAllEvents			= false;
	var vAllMajors			= false;
	var vAllNonMajors		= false;
	
	var vReturnTitle		= "";
	var vReturnSubTitle		= "<div style='font-size: 0.6em;'>[Single Hole vs. Par]</div>";
	
	var vReturnIndex		= 0;
	var vSeasonHold			= 0;
	var vHoleCounter		= 0;
	var vRoundPosHold		= 0;
	var vRoundTotal			= 0;
	var vAverage			= 0;
	/**---------------------------------------------------------------------**/
	
	if (pCourse	== 'All Courses')		{ vAllCourses	= true; }
	if (pEvent	== 'All Events')		{ vAllEvents	= true; }
	if (pEvent	== 'All Majors')		{ vAllMajors	= true; }
	if (pEvent	== 'All Non-Majors')	{ vAllNonMajors	= true; }
	
	for (c = 0; c < aCourses.length; c++) {
		
		for (h = 0; h < 18; h++) {
			aHoleCount[h] = 0;
			aHoleTotal[h] = 0;
			aHoleAvg[h] = 0;
			aHolePar[h] = 0;
		}
		
		if (aCourses[c] == pCourse || vAllCourses == 1) {
			
			for (r = 0; r < aRounds.length; r++) {

				if (aRounds[r][2] == aCourses[c]) {
					
					if (aRounds[r][1] == pEvent || vAllEvents || (vAllMajors && checkMajor_NoArray(aRounds[r][1]) == true) || (vAllNonMajors && checkMajor_NoArray(aRounds[r][1]) == false)) {
						
						vSeasonHold = aRounds[r][0].substr(6,9);
						
						if (vSeasonHold >= pSeasonBegin && vSeasonHold <= pSeasonEnd) {
							
							for (h = 0; h < 18; h++) {
								aHoleCount[h]++;
								aHoleTotal[h] += aRounds[r][h + 8];
								aHolePar[h] = aRounds[r][h + 26];
							}
						}
					}
				}
			}
			
			for (h = 0; h < 18; h++) {
				aHoleAvg[h] = (aHoleTotal[h] / aHoleCount[h]);
				aHoleAvg[h] = Math.round(aHoleAvg[h] * 1000) / 1000;
			}
		}
		
		for (h = 0; h < 18; h++) {
			if (aHoleCount[h] > 0) {
				aReturnStat[vReturnIndex] = aHoleAvg[h] - aHolePar[h];
				aReturnGolfers[vReturnIndex] = aCourses[c] + "<br />( Hole " + (h + 1) + " )";
				aReturnSeason[vReturnIndex] = "Par " + aHolePar[h];
				aReturnExtraInfo[vReturnIndex] = "Avg = " + aHoleAvg[h].toFixed(3) + "<br />" + aHoleCount[h] + " Scores";
				vReturnIndex++;
			}
		}
	}
	
	vReturnTitle = "Lowest Scoring Average" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/