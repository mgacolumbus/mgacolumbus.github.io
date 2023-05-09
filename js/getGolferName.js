function getGolferName(pGolferIndex) {
	
	const arrGolfers = getData_Golfers();

	if (!pGolferIndex) {
	
		return arrGolfers[0];
	
	}

	return arrGolfers[pGolferIndex];
}