function StartEngine() {
	
	/*  Data Sources  */
	document.write('<script src="js/d_courses.js"></script>');
	document.write('<script src="js/d_events.js"></script>');
	document.write('<script src="js/d_golfers.js"></script>');
	document.write('<script src="js/d_recordlist_alltime.js"></script>');
	document.write('<script src="js/d_recordlist_singleevent.js"></script>');
	document.write('<script src="js/d_recordlist_singleseason.js"></script>');
	document.write('<script src="js/d_rounds.js"></script>');
	document.write('<script src="js/d_seasons.js"></script>');
	
	/*  Javascript Includes  */
	document.write('<script src="js/i_coursedetailtopboxes.js"></script>');
	document.write('<script src="js/i_courselist.js"></script>');
	document.write('<script src="js/i_eventlist.js"></script>');
	document.write('<script src="js/i_eventwinners.js"></script>');
	document.write('<script src="js/i_footer.js"></script>');
	document.write('<script src="js/i_golferdetailtopboxes.js"></script>');
	document.write('<script src="js/i_golferdetailstats.js"></script>');
	document.write('<script src="js/i_golferlist.js"></script>');
	document.write('<script src="js/i_navigationpanel.js"></script>');
	document.write('<script src="js/i_recorddisplaybox.js"></script>');
	document.write('<script src="js/i_recordsearchbox.js"></script>');
	document.write('<script src="js/i_recordlist.js"></script>');
	document.write('<script src="js/i_seasonchampions.js"></script>');
	document.write('<script src="js/i_siteheader.js"></script>');
	document.write('<script src="js/i_topcontainer.js"></script>');
	
	/*  Global Use Functions  */
	document.write('<script src="js/f_formatEarnings.js"></script>');
	document.write('<script src="js/f_getComparisonOperator.js"></script>');
	document.write('<script src="js/f_getCourseName.js"></script>');
	document.write('<script src="js/f_getCurrentSeason.js"></script>');
	document.write('<script src="js/f_getCurrentSeasonEventCount.js"></script>');
	document.write('<script src="js/f_getEarnings.js"></script>');
	document.write('<script src="js/f_getEventCount.js"></script>');
	document.write('<script src="js/f_getEventIndex.js"></script>');
	document.write('<script src="js/f_getEventName.js"></script>');
	//document.write('<script src="js/f_getGlobalVariable.js"></script>');
	document.write('<script src="js/f_getGolferIndex.js"></script>');
	document.write('<script src="js/f_getGolferName.js"></script>');
	document.write('<script src="js/f_getNavigationItem.js"></script>');
	document.write('<script src="js/f_getParOffset.js"></script>');
	document.write('<script src="js/f_getPlacementCount.js"></script>');
	document.write('<script src="js/f_getProgressBarColor.js"></script>');
	document.write('<script src="js/f_getRankingSuffix.js"></script>');
	document.write('<script src="js/f_getRoundDataForCourse.js"></script>');
	document.write('<script src="js/f_getRoundDataForEvent.js"></script>');
	document.write('<script src="js/f_getRoundDataForGolfer.js"></script>');
	document.write('<script src="js/f_getRoundDataForScorecard.js"></script>');
	document.write('<script src="js/f_getRoundDataForSeason.js"></script>');
	document.write('<script src="js/f_getRoundScore.js"></script>');
	document.write('<script src="js/f_getScoreType.js"></script>');
	document.write('<script src="js/f_getScoreActionType.js"></script>');
	document.write('<script src="js/f_getScoreTypeCategory.js"></script>');
	document.write('<script src="js/f_getScoreTypeCount.js"></script>');
	document.write('<script src="js/f_getScoringAverage.js"></script>');
	document.write('<script src="js/f_getSeasonChampionBGColor.js"></script>');
	document.write('<script src="js/f_getTournamentWinnerDetails.js"></script>');
	document.write('<script src="js/f_getURLParsed.js"></script>');
	document.write('<script src="js/f_isMajor.js"></script>');
	document.write('<script src="js/f_selectTabChild.js"></script>');
	document.write('<script src="js/f_selectTabParent.js"></script>');
	document.write('<script src="js/f_sortMDArray.js"></script>');
	
	/*  Records Functions  */
	document.write('<script src="js/f_getRecord_MostEarnings_Range.js"></script>');
	document.write('<script src="js/f_getRecord_MostEarnings_SingleSeason.js"></script>');
	document.write('<script src="js/f_getRecord_MostPosition_Range.js"></script>');
	document.write('<script src="js/f_getRecord_MostPosition_SingleSeason.js"></script>');
	document.write('<script src="js/f_getRecord_MostScoreType_Range.js"></script>');
	document.write('<script src="js/f_getRecord_MostScoreType_SingleEvent.js"></script>');
	document.write('<script src="js/f_getRecord_MostScoreType_SingleSeason.js"></script>');
}

function gvar(VariableName) {
	/**---------------------------------------------------------------------**/
		var pVar = arguments[0];
	/**---------------------------------------------------------------------**/
	
	switch (pVar) {
		case 'Site_BGColor':						return 'white';
		case 'Site_Title':							return 'MGA Columbus - Statistics &amp; Records';
		
		default:									return 'BORKT!!!';
	}
}