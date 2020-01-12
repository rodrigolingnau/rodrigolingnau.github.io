/*var intervaloScroll;
var posicaoScroll = 0;
const larguraVitrine = document.getElementById('vitrine').offsetWidth;
const larguraFigura = document.getElementById('figura-vitrine').scrollWidth;
const velocidade = 20;
const tempoFrame = 1000 / 30;
document.getElementById('direita').onmouseover = function() {
    intervaloScroll = setInterval(function() {
        if (posicaoScroll + velocidade > larguraFigura - (larguraVitrine - 80)) {
            posicaoScroll = larguraFigura - (larguraVitrine - 80);
            document.getElementById('direita').onmouseout();
        } else {
            posicaoScroll += velocidade;
        }
        document.getElementById('figura-vitrine').style.setProperty('right', posicaoScroll + 'px');
    }, tempoFrame);
}
document.getElementById('direita').onmouseout = function() {
    clearInterval(intervaloScroll);
} 

document.getElementById('esquerda').onmouseover = function() {
    intervaloScroll = setInterval(function() {
        if (posicaoScroll - velocidade < 0) {
            posicaoScroll = 0;
            document.getElementById('direita').onmouseout();
        } else {
            posicaoScroll -= velocidade;
        }
        document.getElementById('figura-vitrine').style.setProperty('right', posicaoScroll + 'px');
    }, tempoFrame);
}
document.getElementById('esquerda').onmouseout = function() {
    clearInterval(intervaloScroll);
}*/

var coachando = false;
document.getElementById('especie').onclick = function() {
    if (coachando) {
        pause();
    } else {
        play();
    }
}

document.styleSheets[0].addRule('#especie.tocando::before', 'background-position-y: 0;', 1);
var frame = 0;
setInterval(function() {
    switch(frame) {
        case 0:
            document.styleSheets[0].cssRules[1].style.backgroundPositionY = "-45px";
            frame++;
            break;
        case 1:
            document.styleSheets[0].cssRules[1].style.backgroundPositionY = "0px";
            frame++;
            break;
        case 2:
            document.styleSheets[0].cssRules[1].style.backgroundPositionY = "-89px";
            frame = 0;
            break;
    }
}, 200);

function pause() {
    document.getElementById('especie').classList.remove("tocando");
    document.getElementById('coachar').pause();
    coachando = false;
}

function play() {
    document.getElementById('coachar').play();
    document.getElementById('especie').classList.add("tocando");
    coachando = true;
}