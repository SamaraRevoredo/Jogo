x = 600;
y = 600;
gatinho_x = x/2;
gatinho_y = y/2;
Altura = 50;
Largura = 50;
R_gatinho = 0;
G_gatinho = 0;
B_gatinho = 255;
raio = 25;
fantasma1_x = 30;
fantasma1_y = 30;
fantasma2_x = 30;
fantasma2_y = 570;
fantasma3_x = 570;
fantasma3_y = 30;
fantasma4_x = 570;
fantasma4_y = 570;
fantasma5_x = 30;
fantasma5_y = y/2;
R_fantasma = 255;
G_fantasma = 255;
B_fantasma = 255; 
R_Bt = 0;
G_Bt = 255;
B_Bt = 0;
Bt_Largura = 150;
Bt_Altura = 40;
Btiniciar_x = x/2 - Bt_Largura/2;
Btiniciar_y = y/2 - Bt_Altura/2;
BtLevels_x = Btiniciar_x;
BtLevels_y = Btiniciar_y + 70;
parametro = 0;
nivel = 1;
vidas = 7;
contadorNivel = 0;
n1 = 5;
n2 = 15;
n3 = 25; 
n4 = 30; 
n5 = 60;
function setup(){	
	createCanvas(x, y);
	background(0);
}
function desenhar_Btiniciar(){
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("Iniciar",x/2-Bt_Altura,y/2+10);
}
function desenhar_Btlevel(){
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(BtLevels_x, BtLevels_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("Level",x/2-Bt_Altura,y/2+80);
}
function desenhar_Btlevels(){
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y-170, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("level 1",x/2-Bt_Altura,y/2-160);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y-90, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("level 2",x/2-Bt_Altura,y/2-80);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y-10, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("level 3",x/2-Bt_Altura,y/2);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y+70, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("level 4",x/2-Bt_Altura,y/2+80);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y+150, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("level 5",x/2-Bt_Altura,y/2+160);
	}
function draw() {
	if(parametro === 0){
	limpar();
	menu_inicial();}
	else if (parametro === 1){
	Escolher_level();
	}
	else if (parametro === 2) {jogo();}
	else if(parametro === 3){gameover();}
	else {Winner();}
	
}
function menu_inicial(){
	desenhar_Btiniciar();
	desenhar_Btlevel();
	if(mouseIsPressed){
	if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		parametro = 2;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 351 && mouseY < 388){
		sleep(500);
		parametro = 1;
		}
	}
}	
function Escolher_level(){
	limpar();
	desenhar_Btlevels();
	if(mouseIsPressed){
	if(mouseX > 255 && mouseX < 372 && mouseY > 111 && mouseY < 149){
		contadorNivel = 0;
		sleep(500);
		parametro--;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 191 && mouseY < 229){
		contadorNivel = n1;
		sleep(500);
		parametro--;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 271 && mouseY < 308){
		contadorNivel = n2;
		sleep(500);
		parametro--;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 350 && mouseY < 388){
		contadorNivel = n3;
		sleep(500);
		parametro--;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 432 && mouseY < 470){
		contadorNivel = n4;
		sleep(500);
		parametro--;
		}
		
	}
}
function jogo(){
	if(nivel == 1){nivel1();}
	if(nivel == 2){nivel2();}
	if(nivel == 3){nivel3();}
	if(nivel == 4){nivel4();}
	if(nivel == 5){nivel5();}
	if(contadorNivel > n1){nivel = 2;}
	if(contadorNivel > n2){nivel = 3;}
	if(contadorNivel > n3){nivel = 4;}
	if(contadorNivel > n4){nivel = 5;}
	if(contadorNivel > n5){
		parametro = 4;
		}
}
function desenhar_gatinho(){
	noStroke();
	fill(R_gatinho, G_gatinho, B_gatinho);
	ellipse(gatinho_x,gatinho_y, Largura, Altura);	
}
function limpar(){
	background(0);
}
function desenhar_fantasma1(){
	noStroke();
	fill(R_fantasma, G_fantasma, B_fantasma);
	ellipse(fantasma1_x,fantasma1_y, Largura, Altura);
	fantasma1_x+=1.5;
	fantasma1_y+=1.5;
	if(mouseIsPressed){
		if(mouseX > (fantasma1_x-raio) && mouseX < (fantasma1_x+raio) && mouseY > (fantasma1_y - raio) && mouseY < (fantasma1_y+raio)){	
		fantasma1_x = 30;
		fantasma1_y = 30;
		contadorNivel++;
		sleep(100);
		}
	}
	if(fantasma1_x >= x/2 || fantasma1_y >= y/2){
		fantasma1_x = 30;
		fantasma1_y = 30;
		vidas--;
		}	
	}
function desenhar_fantasma2(){
	noStroke();
	fill(R_fantasma, G_fantasma, B_fantasma);
	ellipse(fantasma2_x,fantasma2_y, Largura, Altura);
	fantasma2_x += 1.5;
	fantasma2_y -= 1.5;
	if(mouseIsPressed){
		if(mouseX > (fantasma2_x-raio) && mouseX < (fantasma2_x+raio) && mouseY > (fantasma2_y - raio) && mouseY < (fantasma2_y+raio)){
		fantasma2_x = 30;
		fantasma2_y = 570;
		contadorNivel++;}
		}
	if(fantasma2_x >= x/2 || fantasma2_y <= y/2){
		fantasma2_x = 30;
		fantasma2_y = 570;
		vidas--;
		}	
	}
function desenhar_fantasma3(){
	noStroke();
	fill(R_fantasma, G_fantasma, B_fantasma);
	ellipse(fantasma3_x,fantasma3_y,Largura, Altura);	
	fantasma3_x -= 1.5;
	fantasma3_y += 1.5;
	if(mouseIsPressed){
		if(mouseX > (fantasma3_x-raio) && mouseX < (fantasma3_x+raio) && mouseY > (fantasma3_y - raio) && mouseY < (fantasma3_y+raio)){
		fantasma3_x = 570;
		fantasma3_y = 30;
		contadorNivel++;}
	}
	if(fantasma3_x <= x/2 || fantasma3_y >= y/2){
	fantasma3_x = 570;
	fantasma3_y = 30;
	vidas--;
		}
	}
function desenhar_fantasma4(){
	noStroke();
	fill(R_fantasma, G_fantasma, B_fantasma);
	ellipse(fantasma4_x,fantasma4_y, Largura, Altura);
	fantasma4_x -= 1.5;
	fantasma4_y -= 1.5;
	if(mouseIsPressed){
		if(mouseX > (fantasma4_x-raio) && mouseX < (fantasma4_x+raio) && mouseY > (fantasma4_y - raio) && mouseY < (fantasma4_y+raio)){
		fantasma4_x = 570;
		fantasma4_y = 570;
		contadorNivel++;}
		}	
	if(fantasma4_x <= x/2 || fantasma4_y <= y/2){
		fantasma4_x = 570;
		fantasma4_y = 570;
		vidas--;
		}	
	}
function desenhar_fantasma5(){
	noStroke();
	fill(R_fantasma, G_fantasma, B_fantasma);
	ellipse(fantasma5_x,fantasma5_y, Largura, Altura);	
	fantasma5_x+=1.5;
	if(mouseIsPressed){
		if(mouseX > (fantasma5_x-raio) && mouseX < (fantasma5_x+raio)){
	fantasma5_x = 30;
	contadorNivel++;}
	}
	if(fantasma5_x >= ((y/2))){fantasma5_x = 30;vidas--;}
	}	
function sleep(milliseconds){
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function nivel1(){
	limpar();
	textSize(20); 
	fill(255,255,255)
	text("vidas: "+vidas,30,30);
	textSize(20); 
	fill(255,255,255)
	text("nivel "+nivel,30,60);
	desenhar_gatinho();
	desenhar_fantasma1();
	if(vidas === 0){
		parametro = 3;
		}	
	}
function nivel2(){
	limpar();
	textSize(20); 
	fill(255,255,255)
	text("vidas: "+vidas,30,30);
	textSize(20); 
	fill(255,255,255)
	text("nivel "+nivel,30,60);
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	if(vidas === 0){
		parametro = 3;
		}		
	}
function nivel3(){
	limpar();
	textSize(20); 
	fill(255,255,255)
	text("vidas: "+vidas,30,30);
	textSize(20); 
	fill(255,255,255)
	text("nivel "+nivel,30,60);
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	if(vidas === 0){
		parametro = 3;
		}	
}
function nivel4(){
	limpar();
	textSize(20); 
	fill(255,255,255)
	text("vidas: "+vidas,30,30);
	textSize(20); 
	fill(255,255,255)
	text("nivel "+nivel,30,60);
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	desenhar_fantasma4();
	if(vidas === 0){
		parametro = 3;
		}	
}
function nivel5(){
	limpar();
	textSize(20); 
	fill(255,255,255)
	text("vidas: "+vidas,30,30);
	textSize(20); 
	fill(255,255,255)
	text("nivel "+nivel,30,60);
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	desenhar_fantasma4();
	desenhar_fantasma5();
	if(vidas === 0){
		parametro = 3;
		}	
}
function gameover(){
	limpar();
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("Menu",x/2-Bt_Altura,y/2+10);
	textSize(40); 
	fill(255,255,255)
	text("GAME OVER",175,180);
	if(mouseIsPressed){
		if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		sleep(500);
		parametro = 0;
		vidas = 5;
		contadorNivel = 0;
		nivel = 1;
		}
	}
}
function Winner(){
	limpar();
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255)
	text("Menu",x/2-Bt_Altura,y/2+10);
	textSize(40); 
	fill(255,255,255);
	text("PARABÉNS!",190,180);
	if(mouseIsPressed){
		if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		sleep(500);
		parametro = 0;
		vidas = 5;
		contadorNivel = 0;
		nivel = 1;
		}
	}
}
