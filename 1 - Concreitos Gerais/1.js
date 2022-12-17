class Pessoa{
    constructor(){
        this.nome = 'Bruno'
    }
}

let pessoa1 = new Pessoa()
let pessoa2 = new Pessoa()

console.log(pessoa1.nome)
console.log(pessoa2.nome)

// Passando parâmetros no construtor

class Musica{
    constructor(tipo){
        this.tipo = tipo
    }
}

let musica1 = new Musica('pop')

console.log(musica1.tipo)