// Função em JS é Firs-Class Object (Citizens)
// Higher-order function

// criar de forma literal 
function fun1(){

}

// Armazenar em uma variavel
const fun2 = function() {}

// Armazenar em um array
const array = [function(a,b){return a + b} , fun1 , fun2] // não é comum
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return'Opa'}
console.log(obj.falar())

// Passar função como parametro para outra função
function run (fun){
    fun()
}

return(function(){console.log(`Execurando ...`)})

// Uma função pode retornar / conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)