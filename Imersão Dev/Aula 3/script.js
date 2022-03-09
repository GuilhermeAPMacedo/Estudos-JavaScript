var numSorteado = parseInt(Math.random()*11);
var mensagem;
var tentativas = 0;
function Chutar(){
    var numEscolhido = parseInt(document.getElementById("valor").value);
    var base = document.getElementById("resultado");
    if (tentativas>=3){
        mensagem = "Máximos de tentativas atingidas, o número era: " + numSorteado;
        } else if(numEscolhido === numSorteado){
            mensagem = "Acertou!!!";
        } else if((numEscolhido>10) || (numEscolhido<0)){
            mensagem = "Por favor entre com um número de 0 a 10!";
        }else{            
            if (numEscolhido> numSorteado){
                mensagem = "Tente um número menor <br>";
            }else{
                mensagem = "Tente um número maior <br>";
            }
            tentativas++;
            mensagem += "Errou! Já tentou: " + tentativas;        
    }
    base.innerHTML = mensagem;
};