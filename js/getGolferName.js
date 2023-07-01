function getGolferName(pGolferIndex) {
	switch (pGolferIndex) {
		case undefined	:
		case '-1'		: return 'All Golfers'; break;
	}
	
	const arrGolfers = getData_Golfers();
	return arrGolfers[pGolferIndex];
}