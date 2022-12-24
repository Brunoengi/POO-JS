const Nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new Nave(100)

//Vidas agora é uma propriedade de prototype
Nave.prototype.vidas = 3 

//Disparar agora é um método de prototype
Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

//Métodos e propriedades da classe podem ser acessados por instanciações
n1.disparar()
n1.disparar()

console.log(n1)