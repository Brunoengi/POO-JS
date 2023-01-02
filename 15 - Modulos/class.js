class colecoes{
    static cores = ['vermelho','amarelo','azul','cinza']

    static addCor = (novaCor) => {
        this.cores.push(novaCor);
    }
    
    static escreverCores = () => {
        console.log(this.cores)
    }
}

export {colecoes}