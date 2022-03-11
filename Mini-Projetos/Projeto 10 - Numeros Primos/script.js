exibiNumPrimos(15);

function exibiNumPrimos(lim){    
    for(var i=2;i<=lim;i++){
        if(verificaPrimo(i)){
            console.log(i);
        }
    }
}
function verificaPrimo(num){
    for(var j = num-1; j>1 ; j--){
        if(num % j == 0){
            return false;
        }
    }
    return true
}