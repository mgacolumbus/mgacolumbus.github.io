function getEventName(pEventIndex) {
	switch (pEventIndex) {
		case undefined	:
		case '-1'		: return 'All Events'; break;
		case '-2'		: return 'All Majors'; break;
		case '-3'		: return 'All Non-Majors'; break;
	}
	
	const arrEvents = getData_Events();
	return arrEvents[pEventIndex];
}