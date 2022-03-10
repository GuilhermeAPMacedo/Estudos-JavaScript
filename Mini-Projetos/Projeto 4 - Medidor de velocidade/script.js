var velMax = 70;
verificarVelocidade(87);

function verificarVelocidade(vel){
    if (vel<=velMax){
        console.log("Velocidade dentro do limite!");
    }else{
        const pontos = Math.floor((vel - velMax)/5);
        if (pontos >= 12){
            console.log("Carteira suspensa");
        }else{
            console.log("Pontos: " + pontos);
        }
    } 

}