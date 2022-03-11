function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco("a","b","c");

const endereco2 = new Endereco("a","b","c");

console.log(saoIguais(endereco1,endereco2))
console.log(enderecosMemoriaIguais(endereco1,endereco2))
console.log(endereco1)

function saoIguais(end1,end2){
    for(var item in end1){
        if(end1[item] !== end2[item]){
            return false
        }
    }
    return true
}

function enderecosMemoriaIguais(end1,end2){
    return end1 === end2
}