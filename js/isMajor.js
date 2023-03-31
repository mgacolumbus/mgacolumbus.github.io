function isMajor(pEvent) {
	/**---------------------------------------------------------------------**/
		var vEvent	= arguments[0];
	/**---------------------------------------------------------------------**/
	
	switch (vEvent) {
		
		case "Bastards":
		case "F.U. Open":
		case "Bratish Open":
		case "MGA Championship":	return true;
		
		default:					return false;
		
	}
}