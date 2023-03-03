function html_CourseDetailTopBoxes(CourseData) {
	/**---------------------------------------------------------------------**/
		var pCourseRawData		=	arguments[0];
		var arrRndTotal			=	new Array();
		var vRoundTotal			=	0 * 1;
		var vLowRound			=	999 * 1;
		var vHighRound			=	0 * 1;
	/**---------------------------------------------------------------------**/

	for (coursernds = 0; coursernds < pCourseRawData.length; coursernds++) {
		arrRndTotal = getRoundScore(pCourseRawData, coursernds);
		vRoundTotal += arrRndTotal[2];

		if (arrRndTotal[2] < vLowRound) {
			vLowRound = arrRndTotal[2];
		}

		if (arrRndTotal[2] > vHighRound) {
			vHighRound = arrRndTotal[2];
		}
	}
	
	document.write('<div class="w3-row-padding w3-margin-bottom">');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + (vRoundTotal / pCourseRawData.length).toFixed(3) + '</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>MGA Average</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + pCourseRawData.length + '</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>Total Rounds</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + vLowRound + '</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>Low Round (gross)</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('	<div class="w3-quarter">');
	document.write('		<div class="w3-container w3-green w3-padding-16">');
	document.write('			<div class="w3-right">');
	document.write('				<h3>' + vHighRound + '</h3>');
	document.write('			</div>');
	document.write('			<div class="w3-clear"></div>');
	document.write('			<h4>High Round</h4>');
	document.write('		</div>');
	document.write('	</div>');
	document.write('</div>');
}