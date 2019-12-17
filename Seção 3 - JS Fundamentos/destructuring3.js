function rand ({min = 0, max = 100}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

console.log(rand({max:50 , min:40}))
console.log(rand({max:40 , min:45}))