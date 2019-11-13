function getRankingSuffix(Rank) {
	/**---------------------------------------------------------------------**/
		var pRank	=	arguments[0];
	/**---------------------------------------------------------------------**/
	
	pRank = pRank * 1;
	
	switch (pRank) {
		case  1:
		case 21:
		case 31:	
		case 41:
		case 51:	
		case 61:	
		case 71:
		case 81:
		case 91:	return "st";
		
		case  2:
		case 22:
		case 32:
		case 42:
		case 52:
		case 62:
		case 72:
		case 82:
		case 92:	return "nd";
		
		case  3:
		case 23:	
		case 33:
		case 43:	
		case 53:
		case 63:
		case 73:
		case 83:	
		case 93:	return "rd";
		
		default:	return "th";
	}
}