/********************************************************************************************/
/********************************************************************************************/


function getRecordNumberFormat(RecordID) {
    var pRecordID = arguments[0] * 1;

    switch(pRecordID) {
        case  2500:
		case  2600:
		case  2700:
		case  2800:
		case  2900:		return "Earnings";
		
		case  2945:
		case  2946:
		case  2947:
		case  2948:
		case  2952:
		case  2953:
		case  2954:
		case  2955:
		case  3760:
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
		case  9100:		return "Avg";
		
        default:		return "";
    }
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordSortOrder(RecordID) {
	var pRecordID = arguments[0] * 1;
	
	switch(pRecordID) {
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
		case  3760:		return "asc";
		
		default:		return "desc";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordDisplayOrder(RecordID) {
	var pRecordID = arguments[0] * 1;
	
	switch(pRecordID) {
		default:    	return pRecordID;
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordRules(RecordID) {
	var pRecordID = arguments[0] * 1;
	
	switch(pRecordID) {
		case   700:		
		case   800:
		case   900:
		case  1000:
		case  1100:
		case  1200:
		case  2600:
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
		case  2700:		return "Single Season<br />No Wins";
		
		case  1700:
		case  1800:
		case  1900:
		case  2000:
		case  2800:
		case  2946:
		case  2953:
		case  3100:
		case  3500:		return "No Wins in Range";
		
		case  2100:
		case  2200:
		case  2300:
		case  2400:
		case  2900:		return "No Wins in Career";
		
		case  2947:
		case  2954:
		case  3200:
		case  3600:		return "No DQ's in Range";
		
		case  2948:
		case  2955:
		case  3300:
		case  3700:		return "No Wins in Range<br />No DQ's in Range";
		
		case  4000:
		case  4010:
		case  4020:
		case  4030:
		case  4040:
		case  4050:
		case  4060:
		case  4070:
		case  4080:		return "Single Event";
		
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
		case  4480:		return "Par 3's"
		
		case  4500:		
		case  4510:		
		case  4520:		
		case  4530:		
		case  4540:		
		case  4550:		
		case  4560:		
		case  4570:		
		case  4580:		return "Par 4's"
		
		case  4600:		
		case  4610:		
		case  4620:		
		case  4630:		
		case  4640:		
		case  4650:		
		case  4660:		
		case  4670:		
		case  4680:		return "Par 5's"
		
		default:		return "-";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordHeader(RecordID) {
	var pRecordID = arguments[0] * 1;

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
		
		case   600:
        case  1200:
		case  1600:
		case  2000:
		case  2400:		return "Most Top 10s";
		
        case  2500:
		case  2600:
		case  2700:
		case  2800:
		case  2900:		return "Most Earnings";
		
		case  2945:
		case  2946:
		case  2947:
		case  2948:		return "Lowest Scoring Avg (Gross)";
		//case  xx:		return "Lowest Scoring Avg (Gross) / No Wins in Career";
		//case  xx:		return "Lowest Scoring Avg (Gross) / No DQ's in Career";
		//case  xx:		return "Lowest Scoring Avg (Gross) / No Wins or DQ's in Career";
		//SINGLE SEASON
		
		case  2952:
		case  2953:
		case  2954:
		case  2955:		return "Lowest Scoring Avg (Net)";
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

        default:		return "N/A";
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordData(Record, Event, Course, SeasonBegin, SeasonEnd) {
	var varRecord = arguments[0] * 1;	var varEvent = arguments[1];	var varCourse = arguments[2];
	var varSeason1 = arguments[3];		var varSeason2 = arguments[4];
	
	var arrRecordData = new Array();
	
	switch (varRecord) {
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
		//case  3760:		return getRecord_LowParAvg_Range(varEvent,varCourse,varSeason1,varSeason2,varParNum);
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
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordHeaderBreak(RecordID) {
	var pRecordID = arguments[0] * 1;
	
	pRecordID = getRecordDisplayOrder(pRecordID);
	
	switch (pRecordID) {
		
		case   600:
		case  1200:
		case  1600:
		case  2000:
		case  2400:
		case  2900:
		case  2948:
		case  2955:
		case  3300:
		case  3700:
		case  3880:
		case  3980:
		case  4080:
		case  4180:
		case  4280:
		case  4380:
		case  4480:
		case  4580:
		case  4680:		return true;
		

        default:		return false;
	}
}


/********************************************************************************************/
/********************************************************************************************/


function getRecordCategoryHeader(RecordID) {
    var pRecordID = arguments[0] * 1;

    switch(pRecordID) {
        case   100:		return "Placement Records";
        case  2500:		return "Earnings Records";
		case  2945:		return "Scoring Records";
		case  3800:		return "Score Type Records";
		
        default:		return "N/A";
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
			,	getRecordRules(pRecordID)
	);
}


/********************************************************************************************/
/********************************************************************************************/


function processRecordSummaryDisplay(RecordsArray, SortOrder, optRecordType, RecordRules) {
	var pRecords = arguments[0];	var pSortOrder = arguments[1];	var pRecordType = arguments[2];
	var pRecordRules = arguments[3];
	
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
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Single Season without a Win]</div>";
	
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
		
		if (vHoleCounter < 54) {
			vTotal = 0;
			vPercent = 0;
		} else {
			vPercent = (vTotal / vHoleCounter) * 100;
			vPercent = Math.round(vPercent * 1000) / 1000;
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
			
			if (vHoleCounter < 54) {
				vTotal = 0;
				vPercent = 0;
			} else {
				vPercent = (vTotal / vHoleCounter) * 100;
				vPercent = Math.round(vPercent * 1000) / 1000;
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


function getRecord_MostScoreType_ParX_Range(Event, Course, SeasonBegin, SeasonEnd, Operator, Target, HolePar) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];	var pOperator = arguments[4];	var pTarget = arguments[5];
	var pHolePar = arguments[6];
	
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
	
	vReturnTitle = vReturnTitle + " - Par " + pHolePar + "'s";
	
	vReturnTitle = vReturnTitle + vReturnSubTitle;
	
	return [aGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}

	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
		for (r = 0; r < aRounds.length; r++) {

			vSeasonHold = aRounds[r][0].substr(6,9);

			if (checkValidRound(aRounds,aGolfers,pEvent,pCourse,vSeasonHold,pSeasonBegin,pSeasonEnd,g,r,0)) {
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				vRoundTotal += aRounds[r][7];
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins in Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
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
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}
	
	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events][No DQs in Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
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
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}
	
	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Gross_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins or DQs in Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
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
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}
	
	vReturnTitle = "Lowest Scoring Average (Gross)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net_NoWins(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins in Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
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
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				vRoundTotal += aRounds[r][7];
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net_NoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events][No DQs in Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
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
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				vRoundTotal += aRounds[r][7];
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/


function getRecord_LowRoundAvg_Range_Net_NoWinsNoDQs(Event, Course, SeasonBegin, SeasonEnd) {
	var pEvent = arguments[0];		var pCourse = arguments[1];		var pSeasonBegin = arguments[2];
	var pSeasonEnd = arguments[3];
	
	var aRounds = new Array();		aRounds = getData_Rounds();
	var aGolfers = new Array();		aGolfers = getData_Golfers();
	
	var aReturnStat = new Array();	var aReturnSeason = new Array();	var aReturnExtraInfo = new Array();
	var aReturnGolfers = new Array();	var vReturnIndex = -1;
	
	var vReturnTitle = "";	var vReturnSubTitle = "<div style='font-size: 0.6em;'>[Minimum 3 Events][No Wins or DQs in Range]</div>";
	
	var vSeasonHold = 0;	var vEventCounter = 0;		var vRoundPosHold = 0;	var fIsWinner = false;
	var vRoundTotal = 0;	var vAverage = 0;
	
	/**---------------------------------------------------------------------**/

	for (g = 0; g < aGolfers.length; g++) {
		
		if (fIsWinner == true) {
			fIsWinner = false;
		}
		
		vEventCounter = 0;
		vReturnIndex++;
		aReturnStat[vReturnIndex] = 0;
		vRoundTotal = 0;
		
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
				
				vEventCounter++;
				
				for (h = 0; h < 18; h++) {
					vRoundTotal += aRounds[r][h + 8];
				}
				
				vRoundTotal += aRounds[r][7];
			}
		}
		
		vAverage = (vRoundTotal / vEventCounter);
		vAverage = Math.round(vAverage * 1000) / 1000;
		
		if (vEventCounter < 3) {
			vAverage = 0;
		}
		
		aReturnStat[vReturnIndex] = vAverage;
		aReturnGolfers[vReturnIndex] = aGolfers[g];
		aReturnSeason[vReturnIndex] = "-";
		aReturnExtraInfo[vReturnIndex] = vEventCounter + " Rounds";
	}
	
	vReturnTitle = "Lowest Scoring Average (Net)" + vReturnSubTitle;
	
	return [aReturnGolfers, aReturnStat, aReturnSeason, aReturnExtraInfo, vReturnTitle];
}


/********************************************************************************************/
/********************************************************************************************/