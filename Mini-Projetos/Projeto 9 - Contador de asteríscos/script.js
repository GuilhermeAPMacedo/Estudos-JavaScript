exibirAsteriscos(10)

function exibirAsteriscos(linhas){
    // var astAtual = "";
    // for(var i=1; i<=linhas ;i++){
    //     astAtual += "*";
    //     console.log(astAtual);    
    // }
    for(var i = 1 ; i<=linhas;i++){
        var astAtual = "";
        for(var j =0; j<i;j++){
            astAtual += "*";
        }
        console.log(astAtual);
    }
}