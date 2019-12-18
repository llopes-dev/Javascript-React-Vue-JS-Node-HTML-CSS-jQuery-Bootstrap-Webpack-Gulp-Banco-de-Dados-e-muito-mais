// não é muito interessante para percorrer o array, existe outros recursos
// melhores


// percorrendo arry
const notas= [6.7, 7.4 , 9.8 , 8.1 , 7.7]

for (i in notas){
    console.log( i , notas[i])
}

// percorrendo objeto

const pessoa = {
    nome: 'Leandro',
    sobrenome: 'Lopes',
    idade: 32,
    peso: 100
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}