function isMajor(Event) {
	/**---------------------------------------------------------------------**/
		var varEvent	= arguments[0];
	/**---------------------------------------------------------------------**/
	
	switch (varEvent) {
		case "Bastards":
		case "F.U. Open":
		case "Bratish Open":
		case "MGA Championship":	return true;
		default:					return false;
	}
}