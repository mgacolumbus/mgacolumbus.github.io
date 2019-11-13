function getGlobalVariable(VariableName) {
	/**---------------------------------------------------------------------**/
		var pVariable = arguments[0];
	/**---------------------------------------------------------------------**/
	
	switch (pVariable)
	{
		case 'Navigation_HighlightColor':			return 'w3-blue';
		
		case 'Navigation_LinkCalendar':				return 'calendar.html';
		case 'Navigation_LinkChapterStats':			return '#';
		case 'Navigation_LinkCourseStats':			return 'coursestats.html';
		case 'Navigation_LinkEventStats':			return 'eventstats.html';
		case 'Navigation_LinkGolferStats':			return 'golferstats.html';
		case 'Navigation_LinkOverview':				return 'index.html';
		case 'Navigation_LinkRecords':				return 'recordlist.html';
		case 'Navigation_LinkResults':				return 'results.html';
		
		case 'Navigation_TitleCalendar':			return 'Calendar';
		case 'Navigation_TitleChapterStats':		return 'Chapter Stats';
		case 'Navigation_TitleCourseStats':			return 'Course Stats';
		case 'Navigation_TitleEventStats':			return 'Event Stats';
		case 'Navigation_TitleGolferStats':			return 'Golfer Stats';
		case 'Navigation_TitleOverview':			return 'Overview';
		case 'Navigation_TitleRecords':				return 'Records';
		case 'Navigation_TitleResults':				return 'Results';
		
		case 'Page_BodyClass':						return 'w3-pale-red';
		
		case 'Page_CalendarIcon':					return 'fa-calendar';
		case 'Page_CalendarIconColor':				return 'blue';
		case 'Page_CalendarTitle':					return 'Chapter Calendar';
		
		case 'Page_ChapterStatsIcon':				return 'fa-line-chart';
		case 'Page_ChapterStatsIconColor':			return 'purple';
		
		case 'Page_CoursesIcon':					return 'fa-flag';
		case 'Page_CoursesIconColor':				return 'green';
		case 'Page_CoursesTitle':					return 'All Courses';
		
		case 'Page_EventStatsIcon':					return 'fa-calendar-o';
		case 'Page_EventStatsIconColor':			return 'red';
		
		case 'Page_GolferStatsIcon':				return 'fa-user';
		case 'Page_GolferStatsIconColor':			return 'orange';
		
		case 'Page_OverviewIcon':					return 'fa-dashboard';
		case 'Page_OverviewIconColor':				return 'black';
		
		case 'Page_RecordsIcon':					return 'fa-trophy w3-text-yellow';
		case 'Page_RecordsIconColor':				return '';
		
		case 'Page_ResultsIcon':					return 'fa-cubes';
		case 'Page_ResultsIconColor':				return 'brown';
		
		case 'SiteTitle':							return 'MGA Columbus - Statistics &amp; Records';
		
		default:	return 'BORKT!';
	}
}