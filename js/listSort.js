/*function that handels the marker what button is pressed*/
function buttonPress(elementName, asc, id) {
    var x = document.getElementsByClassName("sortButton")
    for (i = 0; i < x.length; i++) {
        if (i !== id) {
            console.log(x[i].innerHTML[0]);
            if (x[i].innerHTML[0] == '↑' || x[i].innerHTML[0] == '↓') {
                x[i].innerHTML = x[i].innerHTML.substr(2);
            }
        } else {
            if (x[i].innerHTML[0] == '↑') {
                x[i].innerHTML = '↓ ' + x[i].innerHTML.substr(2);
                sortList(elementName, 0)
            } else if (x[i].innerHTML[0] == '↓') {
                x[i].innerHTML = '↑ ' + x[i].innerHTML.substr(2);
                sortList(elementName, 1)
            } else {
                if (asc == 0) {
                    x[i].innerHTML = '↓ ' + x[i].innerHTML;
                } else {
                    x[i].innerHTML = '↑ ' + x[i].innerHTML;
                }
                sortList(elementName, asc)
            }
        }
    }
    /*↑↓*/

}

/*Sort the list by classname elementName
this object can be anywhere in the list element (and it strips non numeric characters from the string)
*/
function sortList(elementName, asc) {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("id01");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("LI");
        // Loop through all list-items:
        for (i = 0; i < (b.length - 1); i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */

            //console.log(Number(b[i].getElementsByClassName(elementName)[0].innerHTML.replace(/\D/g,'')))
            if (asc == 0) {
                if (Number(b[i].getElementsByClassName(elementName)[0].innerHTML.replace(/\D/g, '')) > Number(b[i + 1].getElementsByClassName(elementName)[0].innerHTML.replace(/\D/g, ''))) {
                    /* if next item is alphabetically
                    lower than current item, mark as a switch
                    and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
            if (asc == 1) {
                if (Number(b[i].getElementsByClassName(elementName)[0].innerHTML.replace(/\D/g, '')) < Number(b[i + 1].getElementsByClassName(elementName)[0].innerHTML.replace(/\D/g, ''))) {
                    /* if next item is alphabetically
                    lower than current item, mark as a switch
                    and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark the switch as done: */
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}