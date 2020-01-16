function getComparisonOperator(OperationIndex) {
	/**---------------------------------------------------------------------**/
		var pOperator	=	arguments[0] * 1;
	/**---------------------------------------------------------------------**/
	
	switch (pOperator) {
		case 0:		{return "=";}
		case 1:		{return "<";}
		case 2:		{return ">";}
		default:	{return "UNK";}
	}
}