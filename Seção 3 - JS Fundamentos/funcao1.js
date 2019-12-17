// Função sem Retorno

function imprimirSoma(a , b) {

console.log (a + b);

}

imprimirSoma( 2 , 3)
imprimirSoma( 2 ) // o segundo número será Undefined


// Função com Retorno

function soma(a , b = 1) {
    return a + b;
}

console.log(2 ,3)