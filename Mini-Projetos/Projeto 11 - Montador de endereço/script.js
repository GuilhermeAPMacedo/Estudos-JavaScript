var endereco = {
    rua: "Hamilton de Madrigal",
    cidade: "Mogi das Cruzes",
    cep: "08748590",
}

function Endereco2(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

var endereco2 = new Endereco2("Hamilton", "Mogi das Cruzes","089568423");

function exibirEndereco(endereco){
    for(var item in endereco){
        console.log(item + " - " + endereco[item])
    }    
}
exibirEndereco(endereco);
exibirEndereco(endereco2);