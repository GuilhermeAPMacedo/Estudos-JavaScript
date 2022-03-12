var listaFilmes = [];
var nomeFilmes = [];
var exibirFilmes = document.getElementById("listaFilmes");
function adicionarFilme(){  
    var filme = document.getElementById("filme").value;
    var nomeFilme = document.getElementById("nomeFilme").value;
    exibirFilmes.innerHTML ='';
    if (filme.endsWith(".jpg")||filme.endsWith(".png")||filme.endsWith(".jpeg")){        
        verificaAdicao(filme,nomeFilme)
    }else{
       alert("Endereço de filme inválido"); 
    }
    document.getElementById("filme").value = '';
    document.getElementById("nomeFilme").value = '';
    mostrarNaTela();
 }

 function verificaAdicao(url,nome){
    if(listaFilmes.includes(url) || nomeFilmes.includes(nome)){
        alert("Filme já adicionado!");
    }else{
        listaFilmes.push(url);
        nomeFilmes.push(nome);
    }
 }

 function mostrarNaTela(){
    for(var i=0;i<listaFilmes.length;i++){
        exibirFilmes.innerHTML += "<div class=formatImage><img src=" + listaFilmes[i] + "> <p class=legenda>" + nomeFilmes[i] +"</p></div>" ;
    }
 }

 function removerFilme(){
    var filme = document.getElementById("filme").value;
    var nomeFilme = document.getElementById("nomeFilme").value;
    exibirFilmes.innerHTML ='';    
    if(nomeFilmes.includes(nomeFilme)){
        listaFilmes.splice(nomeFilmes.indexOf(nomeFilme),1)
        nomeFilmes.splice(nomeFilmes.indexOf(nomeFilme),1)  
    }else if(listaFilmes.includes(filme)){
        nomeFilmes.splice(listaFilmes.indexOf(filme),1)
        listaFilmes.splice(listaFilmes.indexOf(filme),1)        
    }
    else{
        alert("É necessário digitar corretamente o nome ou a URL do filme que deseja excluir!")
    }
    document.getElementById("filme").value = '';
    document.getElementById("nomeFilme").value = '';
    mostrarNaTela()
 }