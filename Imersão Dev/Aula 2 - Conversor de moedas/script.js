function ConverterDolar(){
    var inputNumber = parseFloat(document.getElementById("valor").value)
    var valorConvertidoEuro = (inputNumber * 0.92).toFixed(2)
    var valorConvertidoReal = (inputNumber * 5.09).toFixed(2)
    document.getElementById("valorConvertido1").innerHTML = "Resultado em Euro ficou: € " + valorConvertidoEuro
    document.getElementById("valorConvertido2").innerHTML = "Resultado em Real ficou: R$ " + valorConvertidoReal
}
function ConverterEuro(){
    var inputNumber = parseFloat(document.getElementById("valor").value)
    var valorConvertidoDolar = (inputNumber * 1.09).toFixed(2)
    var valorConvertidoReal = (inputNumber * 5.55).toFixed(2)
    document.getElementById("valorConvertido1").innerHTML = "Resultado em Dólar ficou: US$ " + valorConvertidoDolar
    document.getElementById("valorConvertido2").innerHTML = "Resultado em Real ficou: R$ " + valorConvertidoReal
}
function ConverterReal(){
    var inputNumber = parseFloat(document.getElementById("valor").value)
    var valorConvertidoEuro = (inputNumber * 0.18).toFixed(2)
    var valorConvertidoDolar = (inputNumber * 0.20).toFixed(2)
    document.getElementById("valorConvertido1").innerHTML = "Resultado em Euro ficou: € " + valorConvertidoEuro
    document.getElementById("valorConvertido2").innerHTML = "Resultado em Dólar ficou: US$ " + valorConvertidoDolar
}