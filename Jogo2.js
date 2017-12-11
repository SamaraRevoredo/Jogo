/*
*Algoritmo: "Magic Halloween"
*Inspirado no jogo: https://www.google.com/doodles/halloween-2016
*Disciplina: Lógica de programação.
*Liguagem: JavaScript, Bilioteca: p5.js
*Professora: Idalmis M. S. Martins
*Autores: PAULO EDUARDO SILVA DE OLIVEIRA
*		  SAMARA REVOREDO DA SILVA
*/

x = 600; //tamanho do eixo x do canvas
y = 600; //tamanho do eixo y do canvas
y_vidas = 30; //tamanho do eixo y das vidas
largura_vidas = 55; //larguras das vidas
altura_vidas = 40; //altura das vidas
gatinho_x = x/2-40; //posicao do eixo x do gatinho no canvas
gatinho_y = y/2+20; //posicao do eixo y do gatinho no canvas
Altura_gatinho = 80; //altura do gatinho
Largura_gatinho = 80; //largura do gatinho
Altura_fantasma = 100; //altura dos fantasmas 
Largura_fantasma = 100; //largura dos fantasmas
fantasma1_x = -150; //posicao inicial do eixo x do fantasma 1
fantasma1_y = -80; //posicao inicial do eixo y do fantasma 1
fantasma2_x = -150; //posicao inicial do eixo x do fantasma 2
fantasma2_y = 700; //posicao inicial do eixo y do fantasma 2
fantasma3_x = 700; //posicao inicial do eixo x do fantasma 3
fantasma3_y = -140; //posicao inicial do eixo y do fantasma 3
fantasma4_x = 720; //posicao inicial do eixo x do fantasma 4
fantasma4_y = 750; //posicao inicial do eixo y do fantasma 4
fantasma5_x = -150; //posicao inicial do eixo x do fantasma 5
fantasma5_y = y/2; //posicao inicial do eixo y do fantasma 5
transicao_level = 0; //variavel para transicao do level
R_Bt = 139; //valor RED de RGB para os botões
G_Bt = 0; //valor GREEN de RGB para os botões
B_Bt = 0; //valor BLUE de RGB para os botões
Bt_Largura = 150; //largura dos botões
Bt_Altura = 40; //altura dos botões
Btiniciar_x = x/2 - Bt_Largura/2; //posicao do eixo x do botao "menu"
Btiniciar_y = y/2 - Bt_Altura/2; //posicao do eixo y do botao "menu"
BtLevels_x = Btiniciar_x; //posicao do eixo x do botao "level"
BtLevels_y = Btiniciar_y + 70; //posicao do eixo y do botao "level"
parametro = 0; //variavel de transicao 
nivel = 1; //variavel que recebe o nivel
vidas = 5; //variavel que recebe o numero de vidas
contadorNivel = 0; //Contador para mudar o nivel
n1 = 30; //numero de fatasmas "mortos" para avançar de nivel
n2 = 60; //numero de fatasmas "mortos" para avançar de nivel
n3 = 100; //numero de fatasmas "mortos" para avançar de nivel
n4 = 150; //numero de fatasmas "mortos" para avançar de nivel
n5 = 200; //numero de fatasmas "mortos" para avançar de nivel
var zerou = 0; //variavel para zerar o eixo x e y dos fantasmas
var velocidade = 1; //variavel para mudar a velocidade dos fantasmas
var imgFantasmaLeft; //variavel para receber uma imagem
var imgFantasmaRight; //variavel para receber uma imagem
var imgvidas; //variavel para receber uma imagem
var imgSpark; //variavel para receber uma imagem
var imgGatinho; //variavel para receber uma imagem
var imgInicial; //variavel para receber uma imagem
var imggameover; //variavel para receber uma imagem
var imgwinner; //variavel para receber uma imagem
var imgregras; //variavel para receber uma imagem
var imgnivel1; //variavel para receber uma imagem
var imgnivel2; //variavel para receber uma imagem
var imgnivel3; //variavel para receber uma imagem
var imgnivel4; //variavel para receber uma imagem
var imgnivel5; //variavel para receber uma imagem
var fonte1; //variavel para receber uma fonte para textos
var fonte2; //variavel para receber uma fonte para textos
var fonte4; //variavel para receber uma fonte para textos
var soundtrack = new Audio('music/HavanaHalloween.mp3'); //variavel para receber um audio
var soundtrack1 = new Audio('music/MichaelHalloween.mp3');//variavel para receber um audio
var soundtrack2 = new Audio('music/ResidentEvilHalloween.mp3');//variavel para receber um audio
function preload(){
	//Primeira funcao a ser executada pela biblioteca
	//Aqui são carregadas todas as imagens e fontes de texto antecipadamente

	imgFantasmaLeft = loadImage("imagens/fantasmaLeft.png");
	imgFantasmaRight = loadImage("imagens/fantasmaRight.png");
	imgvidas = loadImage("imagens/vidas.png");
	imgSpark = loadImage("imagens/spark.png");
	imgGatinho = loadImage("imagens/gatinho.png");
	imgInicial = loadImage("imagens/inicial3.jpg");
	imggameover = loadImage("imagens/gameover.jpg");
	imgwinner = loadImage("imagens/winner6.jpg");
	imgnivel1 = loadImage("imagens/jogo3.jpg");
	imgnivel2 = loadImage("imagens/jogo4.jpg");
	imgnivel3 = loadImage("imagens/jogo5.jpg");
	imgnivel4 = loadImage("imagens/jogo6.jpg");
	imgnivel5 = loadImage("imagens/jogo10.jpg");
	imgregras = loadImage("imagens/jogo2.jpg");
	fonte1 = loadFont("Fontes/fonte1/fonte1.ttf");
	fonte2 = loadFont("Fontes/fonte2/fonte2.ttf");
	fonte4 = loadFont("Fontes/fonte4/fonte4.ttf");
	}
function setup(){
	//segunda funcao a ser executada pela bilioteca
	//Funcao que eh executada apenas uma vez antes do "draw"	
	createCanvas(x, y); 
	background(0);
}
function desenhar_Btiniciar(){
	//funcao para desenhar o botao "iniciar"
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textFont(fonte2);
	textSize(30); 
	fill(0)
	text("Iniciar",x/2-65,y/2+12);
}
function desenhar_Btlevel(){
	//funcao para desenhar o botao "level"
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(BtLevels_x, BtLevels_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(0,0,0)
	text("Level",x/2-50,y/2+82);
}
function desenhar_btregras(){
	//funcao para desenhar o botso "regras"
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(BtLevels_x, BtLevels_y+70, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(0,0,0)
	text("Regras",x/2-70,y/2+152);
	}
function desenhar_Btlevels(){
	//funcao para desenhar os botoes de level
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y-170, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(0)
	text("level 1",x/2-67,y/2-157.5);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y-90, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(0)
	text("level 2",x/2-69,y/2-77.5);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y-10, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(0)
	text("level 3",x/2-67,y/2+2.5);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y+70, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(0)
	text("level 4",x/2-69,y/2+82.5);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y+150, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(0)
	text("level 5",x/2-68,y/2+162.5);
	}
function draw() {
	//terceira funcao a ser executada pela biblioteca (essa funcao eh executada infinitamente)
	//essa funcao faz a transicao de cada etapa do jogo usando a var "parametro"
	if(parametro < 0){regras();}
	else if(parametro === 0){limpar();menu_inicial();}
	else if (parametro === 1){Escolher_level();}
	else if (parametro === 2) {jogo();}
	else if(parametro === 3){gameover();}
	else {Winner();}
}
function menu_inicial(){
	//essa funcao faz a tela inicial do jogo
	image(imgInicial, 0,0,600,600);
	soundtrack2.pause();
	soundtrack1.pause();
	soundtrack.play();
	desenhar_Btiniciar();
	desenhar_Btlevel();
	desenhar_btregras();
	if(mouseIsPressed){
	if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		parametro = 2;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 351 && mouseY < 388){
		sleep(500);
		parametro = 1;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 421 && mouseY < 458){
		sleep(500);
		parametro = -1;
		}
	}
}	
function Escolher_level(){
	//essa funcao faz a tela de escolher os "levels"
	limpar();
	image(imgInicial, 0,0,600,600);
	textFont(fonte2);
	desenhar_Btlevels();
	if(mouseIsPressed){
	if(mouseX > 255 && mouseX < 372 && mouseY > 111 && mouseY < 149){
		contadorNivel = 0;
		sleep(1000);
		parametro--;
		contador_nivel = 0;
		zerar();
		vidas = 5;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 191 && mouseY < 229){
		contadorNivel = n1+1;
		nivel = 2;
		sleep(1000);
		parametro--;
		transicao_level = 0;
		zerar();
		vidas = 5;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 271 && mouseY < 308){
		contadorNivel = n2+1;
		nivel = 3;
		sleep(1000);
		parametro--;
		transicao_level = 0;
		zerar();
		vidas = 5;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 350 && mouseY < 388){
		contadorNivel = n3+1;
		nivel = 4;
		sleep(1000);
		parametro--;
		transicao_level = 0;
		zerar();
		vidas = 5;
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 432 && mouseY < 470){
		contadorNivel = n4+1;
		nivel = 5;
		sleep(1000);
		parametro--;
		transicao_level = 0;
		zerar();
		vidas = 5;
		}
		
	}
}
function jogo(){
	//essa funcao executa o jogo e faz a transicao dos niveis
	if(nivel == 1){nivel1();velocidade = 1;}
	if(nivel == 2){if(transicao_level == 0){nivel2();velocidade = 2;}else{transicao();}}
	if(nivel == 3){if(transicao_level == 0){nivel3();velocidade = 3;}else{transicao();}}
	if(nivel == 4){if(transicao_level == 0){nivel4();velocidade = 4;}else{transicao();}}
	if(nivel == 5){if(transicao_level == 0){nivel5();velocidade = 5;}else{transicao();}}
	if(zerou == 1){
		zerar();zerou = 0;
	}
}
function desenhar_gatinho(){
	//essa funcao desenha o "gatinho"
	image(imgGatinho, gatinho_x,gatinho_y, Largura_gatinho, Altura_gatinho)		
}
function limpar(){
	//essa funcao limpa a tela
	background(0);
}
function desenhar_fantasma1(){
	/* essa funcao:
	 * - desenha os fantasmas
	 * - faz sua trajetória
	 * - faz com que ele volte a posicao inicial haja um clique nele;
	*/
	image(imgFantasmaLeft,fantasma1_x,fantasma1_y, Largura_fantasma, Altura_fantasma);
	if(velocidade == 1){
		fantasma1_x+=1.5;
		fantasma1_y+=1.5;}
	if(velocidade == 2){
		fantasma1_x+=1.6;
		fantasma1_y+=1.6;}
	if(velocidade == 3){
		fantasma1_x+=1.7;
		fantasma1_y+=1.7;}
	if(velocidade == 4){
		fantasma1_x+=1.8;
		fantasma1_y+=1.8;}
	if(velocidade == 5){
		fantasma1_x+=2.0;
		fantasma1_y+=2.0;}
	
	if(mouseIsPressed){//descobre se o fantasma foi "clicado" ou nao
		if(mouseX > (fantasma1_x+24) && mouseX < (fantasma1_x+96) && mouseY > (fantasma1_y) && mouseY < (fantasma1_y+97)){	
		fantasma1_x = -150;
		fantasma1_y = -80;
		contadorNivel++;
		sleep(100);
		}
	}
	
	if(fantasma1_x >= x/2 || fantasma1_y >= 300){//Caso ele chegue ate o gatinho sem ter sido "clicado"
		fantasma1_x = -150;
		fantasma1_y = -80;
		vidas--;
		}	
	//Essa funcao é para o fantasmas 1, as seguintes seguem a mesma logica para os demais fantasmas.
	}
function desenhar_fantasma2(){
	
	image(imgFantasmaLeft,fantasma2_x,fantasma2_y, Largura_fantasma, Altura_fantasma);
	if(velocidade == 1){
		fantasma2_x += 1.2;
		fantasma2_y -= 1.2;}
	if(velocidade == 2){
		fantasma2_x += 1.3;
		fantasma2_y -= 1.3;}
	if(velocidade == 3){
		fantasma2_x += 1.4;
		fantasma2_y -= 1.4;}
	if(velocidade == 4){
		fantasma2_x += 1.5;
		fantasma2_y -= 1.5;}
	if(velocidade == 5){
		fantasma2_x += 1.8;
		fantasma2_y -= 1.8;}
	if(mouseIsPressed){
		if(mouseX > (fantasma2_x+24) && mouseX < (fantasma2_x+96) && mouseY > (fantasma2_y) && mouseY < (fantasma2_y+97)){
		fantasma2_x = -150;
		fantasma2_y = 700;
		contadorNivel++;}
		}
	if(fantasma2_x >= x/2-20 || fantasma2_y <= y/2+10){ 
		fantasma2_x = -150;
		fantasma2_y = 700;
		vidas--;
		}	
		
	}	
function desenhar_fantasma3(){
	
	image(imgFantasmaRight,fantasma3_x,fantasma3_y, Largura_fantasma, Altura_fantasma);
	if(velocidade == 1){
		fantasma3_x -= 1.3;
		fantasma3_y += 1.3;}
	if(velocidade == 2 || velocidade == 3){
		fantasma3_x -= 1.6;
		fantasma3_y += 1.6;}
	if(velocidade == 4){
		fantasma3_x -= 1.8;
		fantasma3_y += 1.8;}
	if(velocidade == 5){
		fantasma3_x -= 2.0;
		fantasma3_y += 2.0;}
	if(mouseIsPressed){
		if(mouseX > fantasma3_x && mouseX < fantasma3_x+77 && mouseY > fantasma3_y && mouseY < fantasma3_y+100){
		fantasma3_x = 700;
		fantasma3_y = -140;
		contadorNivel++;}
	}
	if(fantasma3_x <= x/2-50 || fantasma3_y >= y/2+50){
	fantasma3_x = 700;
	fantasma3_y = -140;
	vidas--;
		}
		
	}
function desenhar_fantasma4(){
	
	image(imgFantasmaRight,fantasma4_x,fantasma4_y, Largura_fantasma, Altura_fantasma);
	if(velocidade == 1){
		fantasma4_x -= 1.0;
		fantasma4_y -= 1.0;}
	if(velocidade == 2){
		fantasma4_x -= 1.2;
		fantasma4_y -= 1.2;}
	if(velocidade == 3){
		fantasma4_x -= 1.4;
		fantasma4_y -= 1.4;}
	if(velocidade == 4){
		fantasma4_x -= 1.6;
		fantasma4_y -= 1.6;}
	if(velocidade == 5){
		fantasma4_x -= 1.8;
		fantasma4_y -= 1.8;}
	if(mouseIsPressed){
		if(mouseX > fantasma4_x && mouseX < fantasma4_x+77 && mouseY > fantasma4_y && mouseY < fantasma4_y+100){
		fantasma4_x = 720;
		fantasma4_y = 750;
		contadorNivel++;}
		}	
	if(fantasma4_x <= x/2-60 || fantasma4_y <= y/2){
		fantasma4_x = 720;
		fantasma4_y = 750;
		vidas--;
		}	
		
	}
function desenhar_fantasma5(){
	//nessa funcao o eixo y nao varia, somente o eixo x
	image(imgFantasmaLeft,fantasma5_x,fantasma5_y, Largura_fantasma, Altura_fantasma);	
	if(velocidade == 1){fantasma5_x+=0.9;}
	if(velocidade == 2){fantasma5_x+=1.2;}
	if(velocidade == 3){fantasma5_x+=1.5;}
	if(velocidade == 4){fantasma5_x+=1.7;}
	if(velocidade == 5){fantasma5_x+=1.9;}
	if(mouseIsPressed){
		if(mouseX > (fantasma5_x+24) && mouseX < (fantasma5_x+96) && mouseY > (fantasma5_y) && mouseY < (fantasma5_y+97)){
		fantasma5_x = -150;
		contadorNivel++;}
	}
	if(fantasma5_x >= y/2-60){fantasma5_x = -150;
		vidas--;
		}
	}	
function sleep(milliseconds){ 
 //Essa funcao trava o jogo por milissegundos para garantir que eu não vou clicar em dois botoes ao mesmo tempo, por exemplo
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function nivel1(){
	//Essa funcao executa o nivel 1: cenario, fantasmas, gatinho, musica; e faz comparacoes para o nivel 2 
	limpar();
	image(imgnivel1,0,0,800,600);
	soundtrack2.pause();
	soundtrack.pause();
	soundtrack1.play();
	desenhar_nivel();
	desenhar_vidas();
	textSize(20); 
	fill(255,255,255)
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	desenhar_fantasma4();
	desenhar_fantasma5();
	image(imgSpark,mouseX-20,mouseY-10,40,40);
	if(vidas <= 0){
		parametro = 3;
		}	
	if(contadorNivel > n1){nivel = 2; zerou = 1; transicao_level = 1;}
	}
function nivel2(){
	//Essa funcao executa o nivel 2: cenario, fantasmas, gatinho, musica; e faz comparacoes para o nivel 3
	limpar();
	image(imgnivel2,0,0,800,600);
	desenhar_nivel();
	desenhar_vidas();
	textSize(20); 
	fill(255,255,255)
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	desenhar_fantasma4();
	desenhar_fantasma5();
	image(imgSpark,mouseX-20,mouseY-10,40,40);
	if(vidas <= 0){
		parametro = 3;
		}	
	if(contadorNivel > n2){nivel = 3;zerou = 1;transicao_level = 1;}	
	}
function nivel3(){
	//Essa funcao executa o nivel 3: cenario, fantasmas, gatinho, musica; e faz comparacoes para o nivel 4 
	limpar();
	image(imgnivel3,0,0,800,600);
	desenhar_vidas();
	desenhar_nivel();
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	desenhar_fantasma4();
	desenhar_fantasma5();
	image(imgSpark,mouseX-20,mouseY-10,40,40);
	if(vidas <= 0){
		parametro = 3;
		}	
	if(contadorNivel > n3){nivel = 4;zerou = 1;transicao_level = 1;}
}
function nivel4(){
	//Essa funcao executa o nivel 4: cenario, fantasmas, gatinho, musica; e faz comparacoes para o nivel 5
	limpar();
	image(imgnivel4,0,0,800,600);
	desenhar_vidas();
	desenhar_nivel();
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	desenhar_fantasma4();
	desenhar_fantasma5();
	image(imgSpark,mouseX-20,mouseY-10,40,40);
	if(vidas <= 0){
		parametro = 3;
		}	
	if(contadorNivel > n4){nivel = 5;zerou = 1;transicao_level = 1;}
}
function nivel5(){
	//Essa funcao executa o nivel 5: cenario, fantasmas, gatinho, musica; e faz comparacoes para o fim do jogo
	limpar();
	image(imgnivel5,0,0,800,600);
	desenhar_vidas(); 
	desenhar_nivel();
	desenhar_gatinho();
	desenhar_fantasma1();
	desenhar_fantasma2();
	desenhar_fantasma3();
	desenhar_fantasma4();
	desenhar_fantasma5();
	image(imgSpark,mouseX-20,mouseY-10,40,40);
	if(vidas <= 0){
		parametro = 3;
		}	
	if(contadorNivel > n5){parametro = 4;}
}
function regras(){
	limpar();
	image(imgregras,0,0,600,600);
	image(imgFantasmaLeft,30,y/3-25, Largura_fantasma, Altura_fantasma);
	image(imgGatinho, 450,y/3, Largura_gatinho, Altura_gatinho);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	textFont(fonte4);
	fill(255,255,255);
	text("Menu",x/2-30,y/2+10);
	textSize(30); 
	fill(255,255,255)
	text("-Nao deixe os fantasmas se aproximarem",30,50);
	text("-Aperte em cima deles com seu mouse",30,80);
	text("-Termine todos os niveis se for capaz",30,110);
	if(mouseIsPressed){
		if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		sleep(1000);
		parametro = 0;
		}
	}
}
function gameover(){
	//Essa funcao é caso as vidas sejam <= 0, 
	//muda o som, chama o botao de "menu", zera o jogo para que comece do inicio, muda o cenario
	limpar();
	soundtrack.pause();
	soundtrack1.pause();
	soundtrack2.play();
	image(imggameover, 0,0,600,600);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	textFont(fonte1);
	fill(255,255,255);
	text("Menu",x/2-25,y/2+10);
	textSize(80); 
	fill(255,255,255)
	text("GAME OVER",150,150);
	if(mouseIsPressed){
		if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		sleep(1000);
		parametro = 0;
		vidas = 5;
		contadorNivel = 0;
		nivel = 1;
		vidas = 5;
		transicao_level = 0;
		}
	}
	zerar();
}
function Winner(){
	//esta funcao eh para quando o jogo for terminado
	//muda o som, chama o botao de "menu", zera o jogo para que comece do inicio, muda o cenario
	limpar();
	soundtrack.pause();
	soundtrack1.pause();
	soundtrack2.play();
	image(imgwinner, 0,0,600,600);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255);
	textFont(fonte1);
	text("Menu",x/2-25,y/2+10);
	textSize(70); 
	fill(255,255,255);
	text("PARABENS!",180,150);
	if(mouseIsPressed){
		if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		sleep(1000);
		parametro = 0;
		vidas = 5;
		contadorNivel = 0;
		nivel = 1;
		vidas = 5;
		transicao_level = 0;
		}
	}
	zerar();
}
function zerar(){
	//volta as posicoes iniciais do eixo x e y para os fantsamas
	fantasma1_x = -150;
	fantasma1_y = -80;
	fantasma2_x = -150;
	fantasma2_y = 700;
	fantasma3_x = 700;
	fantasma3_y = -140;
	fantasma4_x = 720;
	fantasma4_y = 750;
	fantasma5_x = -150;
	fantasma5_y = y/2;
}
function desenhar_vidas(){
	//Desenha os coracoes que representam as vidas
	if(vidas == 5){
	image(imgvidas,30,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,60,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,90,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,120,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,150,y_vidas,largura_vidas,altura_vidas);}
	if(vidas == 4){
	image(imgvidas,30,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,60,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,90,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,120,y_vidas,largura_vidas,altura_vidas);	}
	if(vidas == 3){
	image(imgvidas,30,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,60,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,90,y_vidas,largura_vidas,altura_vidas);}
	if(vidas == 2){
	image(imgvidas,30,y_vidas,largura_vidas,altura_vidas);
	image(imgvidas,60,y_vidas,largura_vidas,altura_vidas);}
	if(vidas == 1){
	image(imgvidas,30,y_vidas,largura_vidas,altura_vidas);}
	}
function desenhar_nivel(){
	//desenha o nivel atual do jogo
	textFont(fonte1);
	textSize(50); 
	fill(255,255,255);
	text("NIVEL "+nivel,230,60);
	}
function transicao(){
	limpar();
	image(imgwinner, 0,0,600,600);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(Btiniciar_x, Btiniciar_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255);
	textFont(fonte1);
	text("PROXIMO",x/2-40,y/2+10);
	textSize(70); 
	fill(255,255,255);
	text("PARABENS!",180,150);
	noStroke();
	fill(R_Bt, G_Bt, B_Bt);
	rect(BtLevels_x, BtLevels_y, Bt_Largura, Bt_Altura);	
	textSize(30); 
	fill(255,255,255);
	text("VOLTAR",x/2-40,y/2+80);
	if(mouseIsPressed){
		if(mouseX > 255 && mouseX < 372 && mouseY > 280 && mouseY < 318){
		transicao_level = 0;
		sleep(1000);
		}
	if(mouseX > 255 && mouseX < 372 && mouseY > 351 && mouseY < 388){
		sleep(1000);
		parametro = 0;
		vidas = 5;
		contadorNivel = 0;
		nivel = 1;
		vidas = 5;
		transicao_level = 0;
		zerar();
		}
	}
	
}
