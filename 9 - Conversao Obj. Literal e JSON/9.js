const pessoa = {
    nome: 'Bruno',
    idade: 24,
    ano: 5,
    profissao: 'programador'
}

const s_json = JSON.stringify(pessoa) //Convertendo para stringJSON

console.log(s_json, pessoa)

const string_pessoa = '{"nome":"Bruno","idade":"24"}'

const converterParaJSON = JSON.parse(string_pessoa)

console.log(converterParaJSON)