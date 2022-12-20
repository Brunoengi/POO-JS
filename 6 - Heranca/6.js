class Carro{ //Classe pai
    constructor(nome,ano) {
        this.nome = nome,
        this.ano = ano,
        this.cor = undefined
    }

    getNome(){
        return this.nome
    }
    getAno(){
        return this.ano
    }
    getCor(){
        return this.cor
    }
    setNome(nome){
        this.nome = nome
    }
    setAno(ano){
        this.ano = ano
    }
    setCor(cor){
        this.cor = cor
    }
    
}

class Militar extends Carro{
    constructor(nome,ano,blindagem,municao) {
        super(nome,ano)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
    }
    atirar(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

let carro2 = new Militar("Lutador",2020,100,50)

console.log(carro2.nome,carro2.ano,carro2.blindagem,carro2.municao,carro2.cor)