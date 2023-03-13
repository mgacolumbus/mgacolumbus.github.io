function html_CategoryButtons(pCategory) {
    
    var vCategory = arguments[0];
    var z = 0;
    var arrNavigation = new Array();   arrNavigation = getData_Navigation();

    for (x = 0; x < arrNavigation.length; x++) {

        if (arrNavigation[x][0] == vCategory) {

            if (z % 4 == 0) {

                document.write("<div class='w3-row'>");

            }

            document.write("<div class='w3-quarter w3-container'>");
            document.write("    <a href='" + arrNavigation[x][2] + "'>");
            document.write("        <p class='w3-border w3-padding-large w3-padding-32 w3-center w3-light-gray'>");
            document.write(arrNavigation[x][1]);
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