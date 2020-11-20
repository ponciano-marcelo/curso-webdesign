
/*------------------*/
/*      MENU        */
/*------------------*/

var App = App || {};

App.EstadoBotao = (function(){

    function EstadoBotao() {
        this.botao = $('.js-botao');
        this.menu = $('.js-menu');
        this.emitter = $({});
		this.on = this.emitter.on.bind(this.emitter);
    }

    EstadoBotao.prototype.iniciar = function(){

         this.botao.on('click', onBotaoPressionado.bind(this)); 

    }

    function onBotaoPressionado() {

        this.menu[0].classList.toggle('menu--display');

    }

    return EstadoBotao;

})();

/*------------------*/
/*     CARROSSEL    */
/*------------------*/

App.Carrossel = (function(){

    function Carrossel() {
    	this.nomeImagens = ['cadeira.jpg','sofa.jpg','televisao.jpg'];
		this.imagens = [];
		this.img = new Image();
		this.indexImagem=0;
		this.url = 'img/';
		this.slider = $('#slider');
		this.barra = $('#barra');
		this.btnSliderMais = $('#js-btn-slider-mais');
		this.btnSliderMenos = $('#js-btn-slider-menos');
		this.tempoTroca=0;
    }

    Carrossel.prototype.iniciar = function(){
    	this.btnSliderMenos.on('click', onBtnSliderMenosClicado.bind(this));
    	this.btnSliderMais.on('click', onBtnSliderMaisClicado.bind(this));
		preCarregamento.call(this);
    	carregarImagem.call(this);
    	anima.call(this);
    }

    function onBtnSliderMenosClicado () {
    	troca.call(this,-1);
    }
	
    function onBtnSliderMaisClicado () {
    	troca.call(this,1);
    }

	function preCarregamento() {

	    for(nome of this.nomeImagens){
	        this.imagens.push(this.img.src = this.url + nome);
	    }
	}

	function carregarImagem() {

	    imagem = this.imagens[this.indexImagem]
	    texto = 'url("'+ imagem +'")';
	    this.slider.css('backgroundImage', texto);
	}

	function troca (inc) {

	    this.indexImagem+=inc;
	    this.tempoTroca=0;

	    if(this.indexImagem>this.imagens.length-1){
	        this.indexImagem=0;
	    }

	    if(this.indexImagem<0){
	        this.indexImagem=this.imagens.length-1;
	    }

	    carregarImagem.call(this,this.indexImagem);
	}

	function anima() {
	    this.tempoTroca++;

	    if(this.tempoTroca >=500){
	        this.tempoTroca=0;
	        troca.call(this,1);
	    }

	    this.vtempo=this.tempoTroca/5;
	    this.barra.css('width', this.vtempo + '%');
	    window.requestAnimationFrame(anima.bind(this));
	}

    return Carrossel;

})();

$(function() {
	
	var estadoBotao = new App.EstadoBotao();
	estadoBotao.iniciar();

	var carrossel = new App.Carrossel();
	carrossel.iniciar();
	
});