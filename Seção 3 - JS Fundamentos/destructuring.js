// Desistruturação a partir do Objeto

// novo recurso ES2015

const pessoa = {
    nome: 'Leandro',
    idade: '32',
    endereco:{
        logradouro: 'Dona Eusebia',
        numero: '228',
    }
}


// operador de desistruturação

const {nome, idade} = pessoa;
console.log(nome, idade)