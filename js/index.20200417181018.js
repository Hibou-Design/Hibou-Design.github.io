(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js4').hasAttr('src')) { a='src'; } $('.js4').attr(a, (dpi>1) ? ((dpi>2) ? 'images/1-960.png' : 'images/1-960.png') : 'images/1-960.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('form').h5Validate();initMenu($('#m1')[0]);
$('.js2').unveil(50);
$('.js3').unveil(50);
$('.js11').mouseenter(function() { $.loadImages('images/1-960.png', function() { }) });
$('.js11').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js11-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/1-960.png'; } } });
$('.js4').unveil(50);
$('.js12 source').unveil(50);
$('.js7').unveil(50);
$('.js8').unveil(50);
$('.js9').unveil(50);
$('.js').unveil(50);
$('.js5').unveil(50);
$('.js6').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js4')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js5')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js8')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js9')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});