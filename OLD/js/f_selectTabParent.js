function selectTabParent(TabName) {
	/**---------------------------------------------------------------------**/
		var pActiveTab		=	arguments[0];
		var arrChildTabs	=	document.getElementsByClassName("childtab");
		var arrParentTabs	=	document.getElementsByClassName("parenttab");
	/**---------------------------------------------------------------------**/

	for (i = 0; i < arrParentTabs.length; i++) {
		arrParentTabs[i].style.display = "none";
	}

	for (i = 0; i < arrChildTabs.length; i++) {
		arrChildTabs[i].style.display = "none";
	}

	document.getElementById(pActiveTab).style.display = "block";
}