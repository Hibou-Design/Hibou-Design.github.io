(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();initMenu($('#m1')[0]);
$('.js37').unveil(50);
$('.js38').unveil(50);
$('.js39').unveil(50);
$('.js40').unveil(50);
$('.s239').Stickyfill();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js37')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js38')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js39')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js40')[0], "0.60s", "0.10s", 1, 100);
wl.start();

});