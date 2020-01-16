function getScoreTypeCategory(ComparisonOperator, ScoreType) {
	/**---------------------------------------------------------------------**/
		var pOperator	=	arguments[0];
		var pScoreType	=	arguments[1];
	/**---------------------------------------------------------------------**/
	
	if (pOperator == "=" && pScoreType == "DblEagle")		{return "Double Eagles";}
	if (pOperator == "=" && pScoreType == "Eagle")			{return "Eagles";}
	if (pOperator == "=" && pScoreType == "Birdie")			{return "Birdies";}
	if (pOperator == "=" && pScoreType == "Par")			{return "Pars";}
	if (pOperator == "=" && pScoreType == "Bogey")			{return "Bogeys";}
	if (pOperator == "=" && pScoreType == "DblBogey")		{return "Double Bogeys";}
	if (pOperator == "=" && pScoreType == "TrpBogey")		{return "Triple Bogeys";}
	if (pOperator == "<" && pScoreType == "Bogey")			{return "Par or Better";}
	if (pOperator == "<" && pScoreType == "DblBogey")		{return "Bogey or Better";}
	if (pOperator == ">" && pScoreType == "Par")			{return "Bogey or Worse";}
	if (pOperator == ">" && pScoreType == "Bogey")			{return "Double Bogey or Worse";}
	if (pOperator == ">" && pScoreType == "DblBogey")		{return "Triple Bogey or Worse";}
	if (pOperator == ">" && pScoreType == "TrpBogey")		{return "Worse Bogeys";}
}


















