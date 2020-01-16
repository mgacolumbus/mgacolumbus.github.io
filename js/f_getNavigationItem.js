function get_NavigationItem(NavItem, HighlightSource) {
	/**---------------------------------------------------------------------**/
		var pNavItem		=	arguments[0];
		var pNavSource		=	arguments[1];
		var varHTML			=	'';
		var varNavLink		=	'';
		var varNavIcon		=	'';
		var varNavColor		=	'';
		var varNavTitle		=	'';
	/**---------------------------------------------------------------------**/
	
	switch (pNavItem) {
		case 'Calendar':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkCalendar');
								varNavIcon		=	getGlobalVariable('Page_CalendarIcon');
								varNavColor		=	getGlobalVariable('Page_CalendarIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleCalendar');
								break;
							}
		case 'ChapterStats':	{
								varNavLink		=	'#';
								varNavIcon		=	getGlobalVariable('Page_ChapterStatsIcon');
								varNavColor		=	getGlobalVariable('Page_ChapterStatsIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleChapterStats');
								break;
							}
		case 'CourseStats':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkCourseStats');
								varNavIcon		=	getGlobalVariable('Page_CoursesIcon');
								varNavColor		=	getGlobalVariable('Page_CoursesIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleCourseStats');
								break;
							}
		case 'EventStats':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkEventStats');
								varNavIcon		=	getGlobalVariable('Page_EventStatsIcon');
								varNavColor		=	getGlobalVariable('Page_EventStatsIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleEventStats');
								break;
							}
		case 'GolferStats':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkGolferStats');
								varNavIcon		=	getGlobalVariable('Page_GolferStatsIcon');
								varNavColor		=	getGlobalVariable('Page_GolferStatsIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleGolferStats');
								break;
							}
		case 'Overview':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkOverview');
								varNavIcon		=	getGlobalVariable('Page_OverviewIcon');
								varNavColor		=	getGlobalVariable('Page_OverviewIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleOverview');
								break;
							}
		case 'Records':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkRecords');
								varNavIcon		=	getGlobalVariable('Page_RecordsIcon');
								varNavColor		=	getGlobalVariable('Page_RecordsIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleRecords');
								break;
							}
		case 'Results':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkResults');
								varNavIcon		=	getGlobalVariable('Page_ResultsIcon');
								varNavColor		=	getGlobalVariable('Page_ResultsIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleResults');
								break;
							}
		case 'Rules':	{
								varNavLink		=	getGlobalVariable('Navigation_LinkRules');
								varNavIcon		=	getGlobalVariable('Page_RulesIcon');
								varNavColor		=	getGlobalVariable('Page_RulesIconColor');
								varNavTitle		=	getGlobalVariable('Navigation_TitleRules');
								break;
							}
	}
	
	varHTML = '<a href="' + varNavLink + '" class="w3-bar-item w3-button w3-padding ';
	if (pNavItem == pNavSource) {
		varHTML += getGlobalVariable('Navigation_HighlightColor');
	}
	varHTML += '"><i class="fa ' + varNavIcon + '" style="color: ' + varNavColor + ';"></i>  ' + varNavTitle + '</a>';
	
	return varHTML;
}