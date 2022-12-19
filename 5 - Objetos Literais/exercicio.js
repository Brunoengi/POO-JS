const Pessoa = {
    nome,
    idade,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade: function(idade){
        this.idade = idade
    }
}

let btn = document.getElementById('btn-enviar')
let ctnSalvar = document.getElementById('resultados')

btn.addEventListener('click',()=>{
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value

    Pessoa.setNome(nome),
    Pessoa.setIdade(idade)
    salvar(nome,idade)

    nome.value = ''
    idade.value = ''
})

function salvar(nome,idade){
    let criarDiv = document.createElement('div')
    ctnSalvar.appendChild(criarDiv)
    criarDiv.innerText = `Nome: ${nome}, Idade: ${idade}`
}

