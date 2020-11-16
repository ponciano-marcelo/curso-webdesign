var nomeImagens = ['mesa.jpg','cadeira.jpg','sofa.jpg','som.jpg','televisao.jpg'];
var imagens = [];
var img = new Image();
var indexImagem=0;
var url = 'imgs/';
var slider = document.getElementById('slider');

function iniciar(){
    preCarregamento();
    carregarImagem(indexImagem);
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

    if(indexImagem>imagens.length-1){
        indexImagem=0;
    }

    if(indexImagem<0){
        indexImagem=imagens.length-1;
    }

    carregarImagem(indexImagem);
}
window.addEventListener("load", iniciar );

