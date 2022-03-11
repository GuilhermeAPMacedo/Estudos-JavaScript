const notas = [100,100,100,100];

console.log(mediaAluno(notas));

function mediaAluno(notas){
    const media = calculoMedia(notas);
    if(media<0 || media>100) return "Nota inserida incorretamente.";
    if(media<60) return "F";
    if(media<70) return "D";
    if(media<80) return "C";
    if(media<90) return "B";
    return "A";
}

function calculoMedia(array){
    var sum = 0;
    for(var valor of array){
        sum += valor;
    }   
    return sum / array.length;
}