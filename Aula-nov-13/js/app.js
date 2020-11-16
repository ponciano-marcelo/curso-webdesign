var nomeImagens = ['mesa.jpg','cadeira.jpg','sofa.jpg','som.jpg','televisao.jpg'];
var imagens = [];
var img = new Image();
var indexImagem=0;
var url = 'imgs/';
var slider = document.getElementById('slider');
var barra = document.getElementById('barra');
var tempoTroca=0;

function iniciar(){
    preCarregamento();
    carregarImagem(indexImagem);
    anima();
}

function preCarregamento() {
    for(nome of nomeImagens){
        imagens.push(img.src = url + nome);
    }
}

function carregarImagem(indexImagem) {
    imagem = imagens[indexImagem]
    texto = 'url("'+ imagem +'")';
    slider.style.backgroundImage = texto;
}

function troca (inc) {

    indexImagem+=inc;
    tempoTroca=0;

    if(indexImagem>imagens.length-1){
        indexImagem=0;
    }

    if(indexImagem<0){
        indexImagem=imagens.length-1;
    }

    carregarImagem(indexImagem);
}

function anima() {
    tempoTroca++

    if(tempoTroca >=500){
        tempoTroca=0;
        troca(1);
    }

    vtempo=tempoTroca/5;
    barra.style.width=vtempo + "%";
    window.requestAnimationFrame(anima);

}

window.addEventListener("load", iniciar );

