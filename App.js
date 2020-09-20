
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

function draw() {
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);  // cada 10ms


