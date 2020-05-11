(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();initMenu($('#m1')[0]);
$('.js12').unveil(50);
$('.js13').unveil(50);
$('.js14').unveil(50);
$('.js17').unveil(50);
$('.js18').unveil(50);
$('.s67').Stickyfill();
$('.js10').unveil(50);
$('.js11').unveil(50);
$('.js15').unveil(50);
$('.js16').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js10')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js11')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js12')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js13')[0], "0.60s", "0.20s", 1, 100);
wl.addAnimation($('.js14')[0], "0.60s", "0.20s", 1, 100);
wl.addAnimation($('.js15')[0], "0.60s", "0.10s", 1, 100);
wl.addAnimation($('.js16')[0], "0.60s", "0.00s", 1, 100);
wl.addAnimation($('.js17')[0], "0.60s", "0.30s", 1, 100);
wl.addAnimation($('.js18')[0], "0.60s", "0.20s", 1, 100);
wl.start();

});