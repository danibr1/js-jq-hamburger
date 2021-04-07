/**
 * JQUERY
 * OPEN / CLOSE HAMBURGER MENU
 */

//REF
var open = $(".fa-bars");
var close = $(".fa-times");
var hamburger = $(".hamburger-menu");

//Open menu hamburger
open.click( function () {
    hamburger.show();
});

//Close Menu hamburger
close.click( function () {
    hamburger.hide();
});