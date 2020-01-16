function html_GolferList() {
	/**---------------------------------------------------------------------**/
		var arrGolfers = getData_Golfers();
		var varColumns = 2;
	/**---------------------------------------------------------------------**/

	for (g = 0; g < arrGolfers.length; g++) {
		
		document.write('<tr>');
		
		for (gg = 0; gg < varColumns; gg++) {
			
			if (g < arrGolfers.length) {
				
				document.write('  <td><i class="fa fa-user" style="color: orange;"></i></td>');
				document.write('  <td align="center"><a href="golferstatsdetail.html?g=' + g + '">' + arrGolfers[g] + '</a></td>');
				
				if (g < arrGolfers.length && gg < (varColumns - 1)) {
					
					g++;
				}
			}
		}
		
		document.write('</tr>');
	}
}