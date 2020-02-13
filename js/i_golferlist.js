function html_GolferList() {
	/**---------------------------------------------------------------------**/
		var arrGolfers = getData_Golfers();
		var varColumns = 2;
	/**---------------------------------------------------------------------**/

	for (g = 0; g < arrGolfers.length; g++) {
		
		document.write('<tr>');
		
		for (gg = 0; gg < varColumns; gg++) {
			
			if (g < arrGolfers.length) {
				
				document.write('<td>');
				document.write('	<i class="fa fa-user" style="color: orange;"></i>');
				document.write('</td>');
				document.write('<td align="center">');
				document.write('<a href="golferstatsdetail.html?g=' + g + '">' + arrGolfers[g] + '</a>');
				document.write('</td>');
				
				if (g < arrGolfers.length && gg < (varColumns - 1)) {
					
					g++;
				}
			}
		}
		
		document.write('</tr>');
	}
}