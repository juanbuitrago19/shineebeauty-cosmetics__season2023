var $t = $('#ticker');
var $tw = $('#ticker-wrap');
var $w = $(window);
$tw.bind("transitionend", function(){
$tw.css({'-webkit-transition':'all linear 0s',
          'transition':'all linear 0s'});
set();
});
$t.text("Aceptamos pagos con tarjetas debito y credito, transferencias bancarias, nequi, daviplata, movii y mercado pago.   Compra y recibe al siguiente dia en bogota, (entrega entre 2 y 5 dias habiles en otras ciudades). ");
var fs = 20;
$t.css("font-size",fs+"px");

var width = $tw.width();
var wwidth = $w.width();
console.log(width)
function set(){
$tw.css({'-webkit-transform':'translate3d('+wwidth+'px,0,0)','transform':'translate3d('+wwidth+'px,0,0)'});
window.setInterval(function(){
  $tw.css({'-webkit-transition':'all linear '+(((width+wwidth)/150)*2)+'s','transition':'all linear '+(((width+wwidth)/150)*2)+'s'});
  $tw.css({'-webkit-transform':'translate3d('+(width*-1)+'px,0,0)','transform':'translate3d('+(width*-1)+'px,0,0)'});
},1)
}
set();
