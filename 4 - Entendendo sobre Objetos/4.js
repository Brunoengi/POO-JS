function Pessoa(nome, idade){

        this.nome = nome,
        this.idade = idade,
    
    this.getNome = () => {
        return this.nome
    },
    this.getIdade = () => {
        return this.idade
    },
    this.setNome = (nome) => {
        this.nome = nome
    },
    this.setIdade = (idade) => {
        this.idade = idade
    }
}

