const pessoa = {
    nome: "Guilherme",
    sobrenome:"Aires",
    idade:18,
    cidade:"Mogi das Cruzes",
    numero: 555555,
    curso: "Análise e Desenvolvimento de Sistemas"
};

exibirPropriedade(pessoa);

function exibirPropriedade(obj){
    for(item in obj){
        if(typeof obj[item] == 'string'){
            console.log(item + " : " + obj[item])
        }        
    }
}