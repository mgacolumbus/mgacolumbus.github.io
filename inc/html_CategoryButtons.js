function html_CategoryButtons(pCategory, pType) {
    
    var vCategory = arguments[0];
    var vType = arguments[1];
    var z = 0;
    var arrData = new Array();
    
    if (vType == "Record") {
        arrData = getData_RecordList();
    } else if (vType == "Category") {
        arrData = getData_Navigation();
    }
    
    for (x = 0; x < arrData.length; x++) {

        if (arrData[x][0] == vCategory) {

            if (z % 4 == 0) {

                document.write("<div class='w3-row'>");

            }

            document.write("<div class='w3-quarter w3-container'>");
            
            if (vType == "Category") {
                document.write("    <a href='" + arrData[x][4] + "' style='text-decoration: none;'>");
            } else if (vType == "Record") {
                document.write("    <a href='" + arrData[x][4] + x + "' style='text-decoration: none;'>");
            }
            
            document.write("        <p class='w3-border w3-padding-large w3-padding-32 w3-center w3-light-gray'>");
            document.write(arrData[x][1]);
            document.write("        </p>");
            document.write("    </a>");
            document.write("</div>");

            if (z % 4 == 3) {

                document.write("</div>");

            }

            z++;
        }

    }

    if (z % 4 != 3) {

        document.write("</div>");

    }
    
}