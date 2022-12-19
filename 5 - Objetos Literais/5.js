const Pessoa = {
    nome: 'Bruno',
    getNome: function(){
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome
    }
}

const p2 = Pessoa
const p3 = Pessoa

//pode utilizar alguma das seguintes sintaxes a seguir para alterar a propriedade

p3.nome = 'Lucas' 
p3['nome'] = 'Otávio'
p3.setNome('Thiago')

console.log(p2.nome, p3.nome)