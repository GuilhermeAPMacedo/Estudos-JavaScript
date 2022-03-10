var listaFilmes = [];
var result = document.getElementById("result");

function adicionarImagem(){  
    var entrada = document.getElementById("entrada").value;
    result.innerHTML ='';
    if(listaFilmes.includes(entrada)){
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