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
const nome = document.getElementById('nome')
const cor = document.getElementById('cor')
const blindagem = document.getElementById('blindagem')
const municao = document.getElementById('municao')
const btn = document.getElementById('btn')
const Resultados = document.getElementById('resultados')
let todosCarros = []
let tipo
let posicao = 0


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

btn.addEventListener('click',()=>{
        if(radio[0].checked){
            todosCarros.push(new Carro(nome, cor))
            tipo = 'comum'
            inserirDados(tipo)
        }else{
            todosCarros.push(new Militar(nome, cor, blindagem, municao))
            tipo = 'militar'
            inserirDados(tipo)
        }
})

function inserirDados(tipo){

    const createDiv = document.createElement('div')
    const createCtnDiv = document.createElement('div')
    const createDeleteButton = document.createElement("input")
    createDeleteButton.setAttribute('posicao',posicao)
    posicao++

    createDeleteButton.setAttribute('type','button')
    createDeleteButton.addEventListener('click', deletar)

    Resultados.appendChild(createCtnDiv)
    createCtnDiv.appendChild(createDiv)
    createCtnDiv.appendChild(createDeleteButton)

    createDeleteButton.value = 'Deletar'

    if(tipo =='comum'){
        createDiv.innerHTML = `Nome: ${nome.value}<br> Cor: ${cor.value}`
    }else if(tipo =='militar'){
        createDiv.innerHTML = `Nome: ${nome.value} <br> Cor: ${cor.value} <br> Blindagem: ${blindagem.value} <br> Munição: ${municao.value}`
    }else{
        console.log('Erro ao definir o tipo de carro')
    }

    zerarCampos(nome, cor, blindagem, municao)


}

function zerarCampos(nome,cor,blindagem,municao){
    nome.value = ''
    cor.value = ''
    blindagem.value = 0
    municao.value = 0
}

function deletar(event){
    
    let emissor = event.target
    emissor.parentNode.parentNode.removeChild(emissor.parentNode)
    
}