function html_EventList() {
	/**---------------------------------------------------------------------**/
		var arrEvents = getData_Events();
	/**---------------------------------------------------------------------**/

	for (e = 0; e < arrEvents.length; e++) {
		
		document.write('<tr>');
		document.write('  <td><i class="fa fa-calendar-o" style="color: red;"></i></td>');
		document.write('  <td align="center"><a href="#?e=' + e + '">' + arrEvents[e] + '</a></td>');
		document.write('</tr>');
	}
}