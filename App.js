
// referencia a nuestro objeto canvas de html:
var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");       // contexto de graficos 2d

/* dibujar un cuadrado rojo: */
ctx.beginPath();    // inicio declaraciones de objeto
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#0B2870";
ctx.fill();
ctx.closePath();    // fin declaraciones de objeto

