x = 600;
y = 600;
var img;
function preload(){
	img = loadImage('imagens/BGNH.png');
	}
function setup() {
	createCanvas(x, y);
	background(0);	
	image(img, 0, 0, 30, 30);
}
