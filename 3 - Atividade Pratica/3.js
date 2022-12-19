class Form{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
}

const btnEnviar = document.getElementById('btn-Enviar')
const getRes = document.getElementById('resultados')

let dadosSalvos = []

btnEnviar.addEventListener('click',()=>{
    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')

    dadosSalvos.push(new Form(nome.value,idade.value))

    addDados(nome, idade)

    nome.value = ''
    idade.value = ''
    
})

function addDados(nome,idade){
    let criarDiv = document.createElement('div')
    getRes.appendChild(criarDiv)
    criarDiv.innerHTML = "O nome é " + nome.value + ' e a idade é ' + idade.value

}
