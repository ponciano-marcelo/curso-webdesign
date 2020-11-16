/* var botao = document.querySelector('.js-botao');

botao.onclick = function() {
    menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--display');
} */


var EstadoBotao = (function(){

    function EstadoBotao() {
        this.botao = document.querySelector('.js-botao');
        this.menu = document.querySelector('.js-menu');
        this.emitter = botao.emitter;
		this.on = this.emitter.on.bind(this.emitter);
    }

    EstadoBotao.prototype.iniciar = function(){

        /* this.botao.onclick = onBotaoPressionado.bind(this); */

        this.botao.on('click', onBotaoPressionado.bind(this))

    }

    function onBotaoPressionado() {

        this.menu = document.querySelector('.js-menu');
        this.menu.classList.toggle('menu--display');

    }

    return EstadoBotao;

})();


var estadoBotao = new EstadoBotao();

estadoBotao.iniciar();