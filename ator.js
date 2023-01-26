let xAtor = 85;
let yAtor = 369;
let compCarro = 50;
let altCaro = 40;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podeseMover()){
            yAtor += 3;
        }
    }
}

function verificaColisao() {
    // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCaro, xAtor, yAtor, 10)
        if (colisao) {
            voltarAtorPosicaoInicial();
            somColidiu.play();
            if (pontosMaiorqueZero() > 0) {
                meusPontos -= 1;
            }
            
        }
    } 
}

function voltarAtorPosicaoInicial() {
    yAtor = 366;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meusPontos, width / 5, 27);
}

function marcarPonto() {
    if (yAtor < 15) {
        meusPontos += 1;
        somPontos.play();
        voltarAtorPosicaoInicial();
    }
}

function pontosMaiorqueZero() {
    return meusPontos > 0;
}

function podeseMover() {
    return yAtor < 369;
}