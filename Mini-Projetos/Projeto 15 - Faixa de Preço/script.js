var faixa = [{
    tooltip: "Até R$700",
    minimo: 0,
    maximo: 700
    },
    {tooltip: "De R$700 a R$1000",
    minimo: 700,
    maximo: 1000
    },
    {tooltip: "R$1000 ou mais",
    minimo: 1000,
    maximo: 9999999
},]
console.log(faixa);

function faixaPrecos(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo 
    }
}
var faixa2 = [
    faixaPrecos("Até R$700",0,700),
    faixaPrecos("De R$700 a R$1000",700,1000),
    faixaPrecos("R$1000 ou mais",1000,99999)
]
console.log(faixa2);

function Faixas(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
var faixa2 = [
    new Faixas("Até R$700",0,700),
    new Faixas("De R$700 a R$1000",700,1000),
    new Faixas("R$1000 ou mais",1000,99999)
];
console.log(faixa2);