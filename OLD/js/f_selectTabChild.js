function selectTabChild(TabName) {
	/**---------------------------------------------------------------------**/
		var pActiveTab	=	arguments[0];
		var arrTabs		=	document.getElementsByClassName("childtab");
	/**---------------------------------------------------------------------**/

	for (i = 0; i < arrTabs.length; i++) {
		arrTabs[i].style.display = "none";
	}
	
	document.getElementById(pActiveTab).style.display = "block";
}