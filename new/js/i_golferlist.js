function html_GolferList() {
	/**---------------------------------------------------------------------**/
		var arrGolfers = getData_Golfers();
	/**---------------------------------------------------------------------**/

	for (g = 0; g < arrGolfers.length; g++) {
		
		document.write('<tr>');
		
		for (gg = 0; gg < 2; gg++) {
			
			if (g < arrGolfers.length) {
				
				document.write('  <td><i class="fa fa-user" style="color: orange;"></i></td>');
				document.write('  <td align="center"><a href="golferstatsdetail.html?g=' + g + '">' + arrGolfers[g] + '</a></td>');
				
				if (g < arrGolfers.length && gg < 1) {
					
					g++;
				}
			}
		}
		
		document.write('</tr>');
	}
}