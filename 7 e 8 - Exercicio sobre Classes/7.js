class Carro{
    constructor(nome,cor) {
        this.nome = nome,
        this.cor = cor
    }

    getNome(){
        return this.nome
    }
    getCor(){
        return this.cor
    }

    setNome(nome){
        this.nome = nome
    }

    setCor(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, cor, blindagem, municao){
        super(nome, cor),
        this.blindagem = blindagem,
        this.municao = municao
    }
}

const radio = [...document.getElementsByName('r_car')]
const blindagem = document.getElementById('blindagem')
const municao = document.getElementById('municao')


radio.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(element.value == 'normal'){
            blindagem.setAttribute('disabled','disabled')
            municao.setAttribute('disabled','disabled')
        }else{
            blindagem.removeAttribute('disabled')
            municao.removeAttribute('disabled')
        }
})
})