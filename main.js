var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var timer;
drawSin();

function drawSin(){
	y = 100+30*Math.sin(x);
	if(x>=400){
	x = 0;
}else{
	x=x+0.3;
}
	/*Рисуем прямоугольник*/
	ctx.fillRect(5*x,y,2,2);

	/*Запускаем таймер*/
	timer = setTimeout(drawSin,50);
}





