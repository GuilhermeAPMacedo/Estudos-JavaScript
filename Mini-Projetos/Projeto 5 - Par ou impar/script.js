exibirParImpar(5);

function exibirParImpar(lim){
    var mensagem;
    if (lim<0 || isNaN(lim)){
        console.log("Entre com um número possível!");
    }
    for(var i =0; i<=lim;i++){
        if(i % 2 === 0){
            mensagem = "Par";
        }
        else{
            mensagem = "Ímpar";
        }
        console.log(i + " " + mensagem);
    }
}