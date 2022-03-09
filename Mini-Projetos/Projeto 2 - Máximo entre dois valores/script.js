var valor1 = parseInt(prompt("Entre com um valor inteiro"))
var valor2 = parseInt(prompt("Entre com um segundo valor inteiro"))
console.log(" O maior valor foi: " + maiorValor(valor1,valor2));
function maiorValor(a,b){
    var maior;
    if(a>=b){
        maior = a;
    }else{
        maior = b;
    }
    return maior
}