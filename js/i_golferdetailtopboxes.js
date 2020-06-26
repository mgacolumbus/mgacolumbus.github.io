function html_GolferDetailTopBoxes(GolferData) {
	/**---------------------------------------------------------------------**/
		var pGolferRawData		=	arguments[0];
		var varTotalStrokes		=	0;
		var varBestFinish		=	999;
		var varBestFinishTimes	=	0;
		var varCareerEarnings	=	0;
		var arrRoundData		=	new Array();
	/**---------------------------------------------------------------------**/

	for (i = 0; i < pGolferRawData.length; i++)
	{
		arrRoundData = getRoundScore(pGolferRawData,i);
		varTotalStrokes += arrRoundData[2];
		varCareerEarnings += pGolferRawData[i][6];

		if (pGolferRawData[i][4] <= varBestFinish && pGolferRawData[i][4] != 0)
		{
			varBestFinish = pGolferRawData[i][4];
		}
	}

	for (i = 0; i < pGolferRawData.length; i++)
	{
		if (varBestFinish == pGolferRawData[i][4])
		{
			varBestFinishTimes++;
		}
	}

	varBestFinish = varBestFinish + getRankingSuffix(varBestFinish);
	
	document.write('<div class="w3-row-padding w3-margin-bottom">');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + (varTotalStrokes/pGolferRawData.length).toFixed(3) + '</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>Average</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + varBestFinish + ' (' + varBestFinishTimes + ')</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>Best Finish</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + formatEarnings(varCareerEarnings) + '</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>"Earnings"</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + pGolferRawData.length + '</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>Events</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('</div>');
}