var listaFilmes = [];

function adicionarImagem(){
    var foiAdicionada = false;
    var result = document.getElementById("result");
    var entrada = document.getElementById("entrada").value;
    result.innerHTML ='';
    listaFilmes.forEach(item => {
        if(entrada == item){
            foiAdicionada = true;
        }
    });    
    if (foiAdicionada == true){
        alert("Imagem já adicionada!")
    }else{
        listaFilmes.push(entrada);
    }
    mostraCapas();
 }
 function mostraCapas(){
    for(var i=0;i<listaFilmes.length;i++){
        result.innerHTML += "<img src=" + listaFilmes[i] + ">" 
    }
 }