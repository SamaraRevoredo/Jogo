var x = 600;
var y = 600;
var R_backgroung = 10;
var G_background = 10;
var B_background = 10;
var gatinho_x = x/2;
var gatinho_y = y/2;
var gatinho_Largura = 50;
var gatinho_Altura = 50;
var R_gatinho = 0;
var G_gatinho = 0;
var B_gatinho = 255;
var fantasma_Largura = 50;
var fantasma_Altura = 50;
var fantasma1_x = 0;
var fantasma1_y = 0;
var fantasma2_x = 0;
var fantasma2_y = 0;
var fantasma3_x = 0;
var fantasma3_y = 0;
var fantasma4_x = 0;
var fantasma4_y = 0;
var fantasma5_x = 0;
var fantasma5_y = 0;
var Button_iniciar = false;
var Button_level = false;
var Button_gameOver = false;
var Button_confirmar = false;
var level = 1;
var contador = 0;
var vidas = 5;
var R_Btiniciar = 255;
var G_Btiniciar = 255;
var B_Btiniciar = 255;
var Btiniciar_x = x/2;
var Btiniciar_y = y/2;
var Btiniciar_Largura = 100;
var Btiniciar_Altura = 50;
var R_Btlevel = 255;
var G_Btlevel = 255;
var B_Btlevel = 255;
var Btlevel_x = x/2;
var Btlevel_y = y/3;
var Btlevel_Largura = 100;
var Btlevel_Altura = 50;
var R_Btlevel1 = 255;
var G_Btlevel1 = 255;
var B_Btlevel1 = 255;
var Btlevel_x1 = x/2;
var Btlevel_y1 = (y - 40);
var Btlevel_Largura1 = 100;
var Btlevel_Altura1 = 50;
var R_Btlevel2 = 255;
var G_Btlevel2 = 255;
var B_Btlevel2 = 255;
var Btlevel_x2 = x/2;
var Btlevel_y2 = ((y - 40)/5)*4;
var Btlevel_Largura2 = 100;
var Btlevel_Altura2 = 50;
var R_Btlevel3 = 255;
var G_Btlevel3 = 255;
var B_Btlevel3 = 255;
var Btlevel_x3 = x/2;
var Btlevel_y3 = ((y - 40)/5)*3;
var Btlevel_Largura3 = 100;
var Btlevel_Altura3 = 50;
var R_Btlevel4 = 255;
var G_Btlevel4 = 255;
var B_Btlevel4 = 255;
var Btlevel_x4 = x/2;
var Btlevel_y4 = ((y - 40)/5)*2;
var Btlevel_Largura4 = 100;
var Btlevel_Altura4 = 50;
var R_Btlevel5 = 255;
var G_Btlevel5 = 255;
var B_Btlevel5 = 255;
var Btlevel_x5 = x/2;
var Btlevel_y5 = (y - 40)/5;
var Btlevel_Largura5 = 100;
var Btlevel_Altura5 = 50;
function setup(){	
	createCanvas(x, y);
	background(R_backgroung,G_background,B_background);
}
function draw() {
	while(Button_iniciar == false){
		menu_inicial();
		}
	jogo();
}

function jogo(){
desenhar_gatinho();
while(vidas > 0){
	switch(level){
		case 1:
		LEVEL1();
		break;
		case 2:
		LEVEL2();
		break;
		case 3:
		LEVEL3;
		break;
		case 4:
		LEVEL4;
		break;
		case 5:
		LEVEL5;
		break;
		default:
		Winner();
		break;
		}
	}
}
function desenhar_gatinho(){
	noStroke();
	fill(R_gatinho, G_gatinho, B_gatinho);
	ellipse(gatinho_x,gatinho_y, gatinho_Largura, gatinho_Altura);	
}
function Escolher_level(){
	limpar();
	desenhar_Btlevels();
	while(Button_confirmar == false){
		if((mouseX < ((x/2)+ 50) && mouse X > ((x/2)-50)) && (mouseY < (((y - 40)/5)+25) && mouseY > ((y - 40)/5-25))){
			Button_confirmar = true;
			level = 1;
			}
		if((mouseX < ((x/2)+ 50) && mouse X > ((x/2)-50)) && (mouseY < ((y - 40)/5)*2+25) && mouseY > ((y - 40)/5)*2-25))){
			Button_confirmar = true;
			level = 2;
			}
		if((mouseX < ((x/2)+ 50) && mouse X > ((x/2)-50)) && (mouseY < ((y - 40)/5)*3+25) && mouseY > ((y - 40)/5)*3-25))){
			Button_confirmar = true;
			level = 3;
			}
		if((mouseX < ((x/2)+ 50) && mouse X > ((x/2)-50)) && (mouseY < ((y - 40)/5)*4+25) && mouseY > ((y - 40)/5)*4-25))){
			Button_confirmar = true;
			level = 4;
			}
		if((mouseX < ((x/2)+ 50) && mouse X > ((x/2)-50)) && (mouseY < ((y - 40)+25) && mouseY > ((y - 40)-25))){
			Button_confirmar = true;
			level = 5;
			}
		}
}
function limpar(){
	remove();
	background(R_backgroung,G_backgroung,B_backgroung);
}
function menu_inicial(){
	desenhar_Btiniciar();
	desenhar_Btlevel();	
	if(mouseIsPressed){
		if((mouseX < ((x/2)+ 50) && mouse X > ((x/2)-50)) && (mouseY < (y/2+25) && mouseY > ((y/2)-25))){
			Button_iniciar = true;
			}
		if((mouseX < ((x/2)+ 50) && mouse X > ((x/2)-50)) && (mouseY < (y/3+25) && mouseY > ((y/3)-25))){
			Escolher_level();
			limpar();
			}
		}
}
function LEVEL1(){
	
}
function LEVEL2(){
	
}
function LEVEL3(){
	
}
function LEVEL4(){
	
}
function LEVEL5(){
	
}
function Winner(){
	
}
function desenhar_Btiniciar(){
	noStroke();
	fill(R_Btiniciar, G_Btiniciar, B_Btiniciar);
	rect(Btiniciar_x, Btiniciar_y, Btiniciar_Largura, Btiniciar_Altura);	
}
function desenhar_Btlevel(){
	noStroke();
	fill(R_Btlevel, G_Btlevel, B_Btlevel);
	rect(Btlevel_x, Btlevel_y, Btlevel_Largura, Btlevel_Altura);	
}
function desenhar_Btlevels(){
	noStroke();
	fill(R_Btlevel1, G_Btlevel1, B_Btlevel1);
	rect(Btlevel_x1, Btlevel_y1, Btlevel_Largura1, Btlevel_Altura1);
	noStroke();
	fill(R_Btlevel2, G_Btlevel2, B_Btlevel2);
	rect(Btlevel_x2, Btlevel_y2, Btlevel_Largura2, Btlevel_Altura2);
	noStroke();
	fill(R_Btlevel3, G_Btlevel3, B_Btlevel3);
	rect(Btlevel_x3, Btlevel_y3, Btlevel_Largura3, Btlevel_Altura3);
	noStroke();
	fill(R_Btlevel4, G_Btlevel4, B_Btlevel4);
	rect(Btlevel_x4, Btlevel_y4, Btlevel_Largura4, Btlevel_Altura4);
	noStroke();
	fill(R_Btlevel5, G_Btlevel5, B_Btlevel5);
	rect(Btlevel_x5, Btlevel_y5, Btlevel_Largura5, Btlevel_Altura5);	
}

