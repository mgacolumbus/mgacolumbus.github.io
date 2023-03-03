function html_EventList() {
	/**---------------------------------------------------------------------**/
		var arrEvents = getData_Events();
	/**---------------------------------------------------------------------**/

	for (e = 0; e < arrEvents.length; e++) {
		
		document.write('<tr>');
		document.write('	<td>');
		document.write('		<i class="fa fa-calendar-o" style="color: red;"></i>');
		document.write('	</td>');
		document.write('	<td align="center">');
		document.write('		<a href="eventstatsdetail.html?e=' + e + '">' + arrEvents[e] + '</a>');
		document.write('	</td>');
		document.write('</tr>');
	}
}