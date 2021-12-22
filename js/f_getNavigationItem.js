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
								varNavLink		=	'calendar.html';
								varNavIcon		=	'fa-calendar';
								varNavColor		=	'blue';
								varNavTitle		=	'Calendar';
								break;
							}
		case 'ChapterStats':	{
								varNavLink		=	'#';
								varNavIcon		=	'fa-line-chart';
								varNavColor		=	'purple';
								varNavTitle		=	'Chapter Stats';
								break;
							}
		case 'CourseStats':	{
								varNavLink		=	'coursestats.html';
								varNavIcon		=	'fa-flag';
								varNavColor		=	'green';
								varNavTitle		=	'Course Stats';
								break;
							}
		case 'EventStats':	{
								varNavLink		=	'eventstats.html';
								varNavIcon		=	'fa-calendar-o';
								varNavColor		=	'red';
								varNavTitle		=	'Event Stats';
								break;
							}
		case 'GolferStats':	{
								varNavLink		=	'golferstats.html';
								varNavIcon		=	'fa-user';
								varNavColor		=	'orange';
								varNavTitle		=	'Golfer Stats';
								break;
							}
		case 'Overview':	{
								varNavLink		=	'index_old.html';
								varNavIcon		=	'fa-dashboard';
								varNavColor		=	'black';
								varNavTitle		=	'Overview';
								break;
							}
		case 'Records':	{
								varNavLink		=	'recordlist.html';
								varNavIcon		=	'fa-trophy w3-text-yellow';
								varNavColor		=	'';
								varNavTitle		=	'Records';
								break;
							}
		case 'Results':	{
								varNavLink		=	'results.html';
								varNavIcon		=	'fa-cubes';
								varNavColor		=	'brown';
								varNavTitle		=	'Results';
								break;
							}
		case 'Rules':	{
								varNavLink		=	'rules.html';
								varNavIcon		=	'fa-list-alt';
								varNavColor		=	'black';
								varNavTitle		=	'Chapter Rules';
								break;
							}
	}
	
	varHTML = '<a href="' + varNavLink + '" class="w3-bar-item w3-button w3-padding ';
	if (pNavItem == pNavSource) {
		varHTML += 'w3-blue';
	}
	varHTML += '"><i class="fa ' + varNavIcon + '" style="color: ' + varNavColor + ';"></i>  ' + varNavTitle + '</a>';
	
	return varHTML;
}