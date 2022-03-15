var cartas = []
transferirCarta("bulbassauro","https://img.elo7.com.br/product/zoom/31CCAE3/escultura-em-papel-pokemon-bulbassauro-com-base-em-pvc-actionfigure.jpg",7,8,6)
transferirCarta("Squirtle","https://static.wikia.nocookie.net/pokemonet/images/3/39/007Squirtle.png/revision/latest?cb=20130505013204&path-prefix=pt-br",5,6,8)
transferirCarta("Gandalf","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/GANDALF.jpg/800px-GANDALF.jpg",6,4,9)

var cartaMaquina, cartaJogador;
var exibirTela = document.getElementById("opcoes")
var exibirResultado = document.getElementById("resultado")

function transferirCarta(nome,imageURL,ataque,defesa,magia){
    cartas.push({
        nome,
        imageURL,
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
    cartaMaquina = retornaCartaAleatoria();
    cartaJogador = retornaCartaAleatoria();
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnAdicionar").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCarta(cartaJogador,exibirTela);
    exibirOpcoes();
}

function retornaCartaAleatoria(){
    var carta;
    numAleatorio = parseInt(Math.random()*cartas.length);
    carta = cartas[numAleatorio];
    cartas.splice(numAleatorio,1);
    return carta;
}
function exibirCarta(carta,exibirLocal){
    var msg = "";
    msg += "<div class='opcoes'><h4>" + carta.nome +"<h4>"
    msg += "<img src='" + carta.imageURL + "'>"
    for(var atributo in carta.atributos){
        msg += "<p>" + atributo +": " + carta.atributos[atributo] +"</p>";
    }
    msg += "</div>"
    exibirLocal.innerHTML += msg;
}
function exibirOpcoes(){
    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    exibirTela.innerHTML += opcoesTexto;
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
    var atributoSelecionado = obterAtributo();
    if(atributoSelecionado == "NaN"){
        exibirResultado.innerHTML = "<h3 class='result'>É necessário selecionar um atributo</h3>"
        return 0
    }
    var msg;
    var cartaJogadorAtributo = cartaJogador.atributos[atributoSelecionado]
    var cartaMaquinaAtributo = cartaMaquina.atributos[atributoSelecionado]
    if( cartaJogadorAtributo > cartaMaquinaAtributo ){
        msg = "Você venceu!"
    }else if(cartaMaquinaAtributo> cartaJogadorAtributo){
        msg = "Você perdeu!"
    }else{
        msg = "Empatou!"
    }
    exibirResultado.innerHTML = "<h3 class='result'>" + msg + "</h3>";
    exibirCarta(cartaMaquina,exibirResultado)    
}