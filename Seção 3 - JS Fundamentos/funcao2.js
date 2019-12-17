// Armazenando uma funcao em uma variavel

const imprirSoma = function (a ,b) {
    console.log(a + b)
    
}

imprirSoma( 2 ,3);


// Armaezando uma função arrow em uma variavel

const soma = (a , b) => {
    return a + b;
}

console.log( soma(2 ,4))

// Retorno Implícito
 const subtracao = (a , b) => a - b;
 console.log(subtracao(2,3));