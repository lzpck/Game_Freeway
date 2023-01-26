let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somPontos;
let somColidiu;

function preload() {
    imagemEstrada = loadImage("imagens/estrada.png");
    imagemAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

    somTrilha = loadSound("sons/trilha.mp3");
    somPontos = loadSound("sons/pontos.wav");
    somColidiu = loadSound("sons/colidiu.mp3");
}