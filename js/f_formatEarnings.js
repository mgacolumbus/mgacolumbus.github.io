function formatEarnings(Earnings) {
	/**---------------------------------------------------------------------**/
		var pEarnings	=	arguments[0];
	/**---------------------------------------------------------------------**/
	
	if (pEarnings >= 10) {
		return (pEarnings.toFixed(2)).padEnd(10,'0,000');
	} else {
		return (pEarnings.toFixed(2)).padEnd(9,'0,000');
	}
}