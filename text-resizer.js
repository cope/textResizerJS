/*
 * Text Resizer : jQuery plugin to fit the text inside a fixed size DIV element.
 * http://cope.github.io/textResizerJS/
 *
 * Unlicensed
 *
 * Inspired by (read: stolen from) http://stackoverflow.com/a/4166021/271873
 * Therefore, all credit goes to Pumbaa80 (http://stackoverflow.com/users/239915/sworoc)
 *
 */

var size;
var desiredWidth = 50;
var resizer = $("#hidden-resizer");

resizer.html("This is the text I want to resize.");

while (resizer.width() > desiredWidth) {
	size = parseInt(resizer.css("font-size"), 10);
	resizer.css("font-size", size - 1);
}

$("#target-location").css("font-size", size).html(resizer.html());
