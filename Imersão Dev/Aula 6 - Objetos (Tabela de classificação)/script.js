var jogadores = [
    rafa = {
    nome: "Rafa",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
    },
    paulo = {
    nome: "Paulo",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
    }
]

var tabela = document.getElementById("tabelaJogadores")

function calculaPontos(jogador){
    jogador.pontos = (jogador.vitorias*3)+jogador.empates; ; 
}
exibeJogadores(jogadores)
function exibeJogadores(jogadores){
    var elemento = "";
    for(jogador of jogadores){
        calculaPontos(jogador)
        elemento += "<tr><td>" + jogador.nome +"</td>"
        elemento += "<td>" + jogador.vitorias + "</td>"
        elemento += "<td>" + jogador.empates + "</td>"
        elemento += "<td>" + jogador.derrotas + "</td>"
        elemento += "<td>" + jogador.pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + jogadores.indexOf(jogador) + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + jogadores.indexOf(jogador) + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + jogadores.indexOf(jogador) + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    tabela.innerHTML = elemento;
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias ++;
    exibeJogadores(jogadores)
}
function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates ++;
    exibeJogadores(jogadores)
}
function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas ++;
    exibeJogadores(jogadores)
}