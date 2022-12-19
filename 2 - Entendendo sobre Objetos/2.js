class Carro{
    constructor(nome, tipo, velMax){
        this.nome = nome,
        this.tipo = tipo,
        this.velMax = velMax
    }

    info(){
        console.log(`O nome do carro é ${this.nome} e o tipo de carro é ${this.tipo} e sua velocidade máxima é ${this.velMax} Km/h`)
    }
    infoArr(){
        return [this.nome,this.tipo]
    }
    getNome(){
        return this.nome
    }
    setNome(nome){
        this.nome = nome
    }
    getTipo(){
        return this.tipo
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    getvelMax(){
        this.velMax = this.velMax
    }
    setvelMax(velMax){
        this.velMax = velMax
    }

}

let c1 = new Carro('Corola','esportivo',300)
c1.nome = 'Camaro'
console.log(c1.info())