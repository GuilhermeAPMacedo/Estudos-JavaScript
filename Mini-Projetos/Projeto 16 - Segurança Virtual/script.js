var listaConvidados = [
    {convidado: "João",convidou: ["Maria","Pedro","André"]},
    {convidado: "Pedro",convidou: ["Augusto","José","Fernando"]},
    {convidado: "Antonio",convidou: ["Felipe","Luiz","Rogério"]},
    {convidado: "Raimundo",convidou: ["Julia","Igor","Paulo"]}
]
var podeEntrar = document.getElementById("podeEntrar")

function verificarEntrada(){
    var nome = document.getElementById("nome").value;
    var convidou = document.getElementById("convidou").value;
    for(nomes of listaConvidados){
        if(nomes.convidado == nome){
            for(foiConvidado of nomes.convidou){
                if(foiConvidado == convidou){
                    podeEntrar.innerHTML = "Pode entrar"
                    return true;
                }
            }
        }   
    }
    podeEntrar.innerHTML = "Não pode entrar";       
}