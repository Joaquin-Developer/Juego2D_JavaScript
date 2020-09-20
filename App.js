
// referencia a nuestro objeto canvas de html:
var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");       // contexto de graficos 2d

/* dibujar un cuadrado rojo: 
ctx.beginPath();    // inicio declaraciones de objeto
ctx.rect(20, 40, 50, 50);       // defino un rectnagulo ("rect")
ctx.fillStyle = "#0B2870";  // propiedad que guarda color que utilizará fill()
ctx.fill();     // pintar cuadrado
ctx.closePath();    // fin declaraciones de objeto
*/

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var radioCirculo = 10;

function drawBola() {
    ctx.beginPath();
    ctx.arc(x, y, radioCirculo, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // borro contenido de lienzo antes de dijubar denuevo:
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    drawBola();
    if (x + dx > (canvas.width - radioCirculo) || x + dx < radioCirculo) 
        dx = -dx;

    if (y + dy > (canvas.height - radioCirculo) || y + dy < radioCirculo) 
        dy = -dy;
    // invremento posiciones x,y en 2, -2 :
    x += dx;
    y += dy;
}
setInterval(draw, 10);  // cada 10ms



