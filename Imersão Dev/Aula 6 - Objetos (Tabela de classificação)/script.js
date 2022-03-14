var jogadores = [
    {
    nome: "Guilherme",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
    },
    {
    nome: "Antonio",
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
    jogadores[i].vitorias ++;
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
function inserirNovo(){
    var nomeNovo = document.getElementById("inserir").value;
    if(nomeNovo.length >=3){
        if(jogadores.includes(nomeNovo)){
            alert("Nome já inserido");
        }else{
            jogadores.push({nome: nomeNovo,vitorias:0,empates: 0,derrotas: 0,pontos: 0});
        }
    }else{
        alert("É necessário inserir um nome válido")
    }    
    exibeJogadores(jogadores);
    document.getElementById("inserir").value = "";
}
function zerarTabela(){
    for(jogador of jogadores){
        jogador.vitorias = 0;
        jogador.empates = 0;
        jogador.derrotas = 0;
    }
    exibeJogadores(jogadores);
}