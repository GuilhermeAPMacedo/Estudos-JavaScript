var cartas = []
var cartaMaquina, cartaJogador;
var exibirJogador = document.getElementById("carta-jogador")
var exibirMaquina = document.getElementById("carta-maquina")
var pontosJogador = 0;
var pontosMaquina = 0;
function transferirCarta(nome,imageUrl,ataque,defesa,magia){
    cartas.push({
        nome,
        imageUrl,
        atributos: {
            ataque,
            defesa,
            magia
        }
    })
}

function adicionarCarta(){
    var nome = prompt("Entre com um nome");
    var imageUrl = prompt("Entre com uma url de imagem válida");
    var ataque = parseInt(prompt("Entre com o valor de ataque"));
    var defesa = parseInt(prompt("Entre com o valor de defesa"));
    var magia = parseInt(prompt("Entre com o valor de magia"));
    transferirCarta(nome,imageUrl,ataque,defesa,magia);
}

function sortearCarta(){
    if(pontosJogador == 3){
        alert("Você venceu!!!")
    }else if(pontosMaquina == 3){
        alert("Você perdeu! :(")
    }else{
        cartaMaquina = retornaCartaAleatoria();
        cartaJogador = retornaCartaAleatoria();
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnAdicionar").disabled = true;
        document.getElementById("btnJogar").disabled = false;
        limpaTela();
        exibirCarta(cartaJogador,exibirJogador);
    }    
}

function retornaCartaAleatoria(){
    var carta;
    numAleatorio = parseInt(Math.random()*cartas.length);
    carta = cartas[numAleatorio];
    cartas.splice(numAleatorio,1);
    return carta;
}

function exibirCarta(carta,exibirLocal){
    var msg;
    exibirLocal.style.backgroundImage = `url(${carta.imageUrl})`
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    style=" width: inherit; height: inherit; position: absolute;">`
    msg = `<div id="opcoes" class="carta-status"><p class="carta-subtitle">${carta.nome}</p>`
    msg = exibirOpcoes(msg,carta);
    exibirLocal.innerHTML = moldura + msg + "</div>"
}

function exibirOpcoes(texto,carta){
    for(var atributo in cartaJogador.atributos){
        if(carta == cartaJogador){
            texto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
        }else{
            texto += "<p name='atributo'>" +  atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
        }        
    }
    return texto;
}

function obterAtributo(){
    var radioAtributos = document.getElementsByName("atributo");
    for(var i =0; i<radioAtributos.length; i++){
        if(radioAtributos[i].checked){
            return radioAtributos[i].value
        }
    }
    return "NaN"
}

function jogar(){
    var msg;
    var atributoSelecionado = obterAtributo();
    var divResultado = document.getElementById("resultado")
    if(atributoSelecionado == "NaN"){
        exibirMaquina.innerHTML = `<p class="resultado-final">É necessário selecionar um atributo</p>`
        return 0
    }
    var cartaJogadorAtributo = cartaJogador.atributos[atributoSelecionado]
    var cartaMaquinaAtributo = cartaMaquina.atributos[atributoSelecionado]
    if( cartaJogadorAtributo > cartaMaquinaAtributo ){
        pontosJogador += 1;
        msg = `Você venceu!<br>`        
    }else if(cartaMaquinaAtributo> cartaJogadorAtributo){
        msg = `Você perdeu!<br>`
        pontosMaquina += 1;
    }else{
        msg = `Empatou!<br>`
    }
    document.getElementById("btnJogar").disabled = true   
    document.getElementById("btnSortear").disabled = false 
    exibirCarta(cartaMaquina,exibirMaquina)
    if(pontosJogador == 3){
        divResultado.innerHTML = `<p class="resultado-final">Jogo encerrado, você venceu!!!</p>`
        document.getElementById("btnSortear").disabled = true 
    }else if(pontosMaquina == 3){
        divResultado.innerHTML = `<p class="resultado-final">Jogo encerrado, você perdeu! :(</p>`
        document.getElementById("btnSortear").disabled = true 
    }else{
        divResultado.innerHTML = "<p class='resultado-final'>" + msg +"Pontos Jogador:" + pontosJogador + "<br>Pontos Máquina:" + pontosMaquina + "</p>";
    }         
}

function limpaTela(){
    exibirMaquina.style.backgroundImage = `url()`
    exibirJogador.style.backgroundImage = `url()`
    exibirMaquina.innerHTML = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"                       style=" width: inherit; height: inherit; position: absolute;">`
    exibirJogador.innerHTML = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`
}

transferirCarta("bulbassauro","https://img.elo7.com.br/product/zoom/31CCAE3/escultura-em-papel-pokemon-bulbassauro-com-base-em-pvc-actionfigure.jpg",7,8,6)
transferirCarta("Squirtle","https://static.wikia.nocookie.net/pokemonet/images/3/39/007Squirtle.png/revision/latest?cb=20130505013204&path-prefix=pt-br",5,6,8)
transferirCarta("Gandalf","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/GANDALF.jpg/800px-GANDALF.jpg",6,4,9)
transferirCarta("Indiana Jones","https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/07/11/1514827846-indianajones4005.jpg",8,6,3)
transferirCarta("James Bond","https://t.ctcdn.com.br/jAxZ5A46DnMsyrr3j_X0Z9i5CvE=/400x400/smart/filters:format(webp)/i490875.jpeg",9,5,3)
transferirCarta("Batman","https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/batman-robert-pattinson-2022.jpg?w=1115",7,7,3)
transferirCarta("Chapeleiro maluco","http://pm1.narvii.com/6282/dafddcd1521d6c5b9e28d5a254453ecbaa4ec09e_00.jpg",4,6,8)
transferirCarta("Legolas","https://static.wikia.nocookie.net/terramedia/images/c/c0/Legolas.jpg/revision/latest?cb=20200722043422",9,3,6)
transferirCarta("Groot","https://cdn.vox-cdn.com/thumbor/AkWfMGMLj_GsMngO6uXsYmq8hzQ=/78x0:1122x696/1400x1400/filters:focal(78x0:1122x696):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54363633/baby-groot-guardians.0.0.jpg",5,5,7)
transferirCarta("Harry Potter","https://static.wikia.nocookie.net/harrypotter/images/2/20/C93ced28e52082d80becd80a685e2766.jpg/revision/latest?cb=20201004232712&path-prefix=pt-br",7,4,9)
transferirCarta("Wolverine","https://menshealth.pt/files/2021/07/Wolverine.jpg",7,6,3)
transferirCarta("Luke Skywalker","https://static.wikia.nocookie.net/ptstarwars/images/1/15/Luke_Skywalker_Ep_7_SWCT.png/revision/latest?cb=20170117003552",6,5,8)
transferirCarta("Capitão América","https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/Captain-America.jpg",9,6,2)
transferirCarta("Jack Sparrow","https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/11/piratas-do-caribe-johnny-depp.webp",6,8,5)
transferirCarta("Coringa","https://conteudo.imguol.com.br/c/entretenimento/c0/2019/10/09/coringa-1570627206677_v2_450x450.jpg",3,8,6)
