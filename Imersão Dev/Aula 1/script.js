var n1 = parseInt(prompt("Entre com a primeira nota"))
var n2 = parseInt(prompt("Entre com a segunda nota"))
var n3 = parseInt(prompt("Entre com a terceira nota"))
var n4 = parseInt(prompt("Entre com a quarta nota"))
var notaFinal = ((n1 + n2 + n3 + n4)/4).toFixed(1)
let result;
if(notaFinal>=6){
    result = "Aprovado"
}else{
    result = "Reprovado"
}
document.write("Você foi " + result + " com a nota final em: " + notaFinal)