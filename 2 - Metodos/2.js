class Carro{
    constructor(nome, tipo, velMax){
        this.nome = nome
        if(tipo == 1){
            this.tipo = 'esportivo'
        }else{
            this.tipo = 'comum'
        }
        this.velMax = velMax
    }

    //Pode-se constuir métodos por exemplo para retornar todas as propriedades
    
    info(){
        console.log('Nome: ' + this.nome + ' Tipo: ' + this.tipo + ' Velocidade máxima:' + this.velMax)
    }
}

let c1 = new Carro('Rapidão', 1, 300)
let c2 = new Carro('Normalzinho', 2, 140)



c1.info()