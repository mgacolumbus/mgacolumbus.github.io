document.write("<script src='data/getData_Courses.js'></script>");
document.write("<script src='data/getData_Events.js'></script>");
document.write("<script src='data/getData_Golfers.js'></script>");
document.write("<script src='data/getData_Participants.js'></script>");
document.write("<script src='data/getData_Scores.js'></script>");
document.write("<script src='data/getData_Seasons.js'></script>");
document.write("<script src='data/getData_Tournaments.js'></script>");

document.write("<script src='html/html_NavigationPanel.js'></script>");
document.write("<script src='html/html_Footer.js'></script>");
document.write("<script src='html/html_RecordDisplayBox.js'></script>");
document.write("<script src='html/html_RecordSearchBox.js'></script>");
document.write("<script src='html/html_SiteHeader.js'></script>");

document.write("<script src='js/getAverageList.js'></script>");
document.write("<script src='js/getAwards.js'></script>");
document.write("<script src='js/getCourseName.js'></script>");
document.write("<script src='js/getCurrentSeason.js'></script>");
document.write("<script src='js/getCurrentSeasonEventCount.js'></script>");
document.write("<script src='js/getEventName.js'></script>");
document.write("<script src='js/getFilterSettings_Participant.js'></script>");
document.write("<script src='js/getFilterSettings_Score.js'></script>");
document.write("<script src='js/getGolferName.js'></script>");
document.write("<script src='js/getHardestHole.js'></script>");
document.write("<script src='js/getHighestHoleScore.js'></script>");
document.write("<script src='js/getListPositions.js'></script>");
document.write("<script src='js/getLowestFrontBack.js'></script>");
document.write("<script src='js/getLowestRound.js'></script>");
document.write("<script src='js/getNumeralSuffix.js'></script>");
document.write("<script src='js/getPositionList.js'></script>");
document.write("<script src='js/getScoretypeRecord.js'></script>");
document.write("<script src='js/getScoreTypeTitle.js'></script>");
document.write("<script src='js/getScoringAverageByPar.js'></script>");
document.write("<script src='js/getSeasonMoneyList.js'></script>");
document.write("<script src='js/getURLParsed.js'></script>");
document.write("<script src='js/getYardsPerStroke.js'></script>");


function globalVariable(VarName) {
	switch (VarName) {
		case 'Site_BGColor':	return 'white'; break;
		case 'Site_Title':		return 'MGA Columbus Statistics'; break;
		
		default:				return 'NOPE';
	}
}