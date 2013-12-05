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

cope = ("undefined" === typeof cope) ? {} : cope;
cope.TextResizer = ("undefined" === typeof cope.TextResizer) ? {} : cope.TextResizer;

// work in progress...

var size;
var desired_width = 50;
var resizer = $("#hidden-resizer");

resizer.html("This is the text I want to resize.");

while(resizer.width() > desired_width) {
  size = parseInt(resizer.css("font-size"), 10);
  resizer.css("font-size", size - 1);
}

$("#target-location").css("font-size", size).html(resizer.html());
