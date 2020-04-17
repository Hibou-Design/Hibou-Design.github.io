(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();initMenu($('#m1')[0]);
$('.js2').unveil(50);
$('.js3').unveil(50);
$('.js6').unveil(50);
$('.js7').unveil(50);
$('.js8').unveil(50);
$('.js').unveil(50);
$('.js4').unveil(50);
$('.js5').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "0.60s", "0.00s", 1, 100);
wl.addAnimation($('.js2')[0], "0.60s", "0.20s", 1, 100);
wl.addAnimation($('.js3')[0], "0.60s", "0.20s", 1, 100);
wl.addAnimation($('.js4')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js5')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js6')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js7')[0], "0.60s", "0.30s", 1, 100);
wl.addAnimation($('.js8')[0], "0.60s", "0.20s", 1, 100);
wl.start();

});