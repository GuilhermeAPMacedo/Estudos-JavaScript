var result = fizzBuzz(15);
console.log(result);

function fizzBuzz(entrada){
    if (isNaN(entrada)){
        return "Não é um número";
    }
    if(entrada % 3 == 0){
        if(entrada % 5 == 0){
            return "FizzBuzz";
        }
        return "Fizz";
    }if(entrada % 5 == 0){
        return "Buzz";
    }
    return entrada;
}