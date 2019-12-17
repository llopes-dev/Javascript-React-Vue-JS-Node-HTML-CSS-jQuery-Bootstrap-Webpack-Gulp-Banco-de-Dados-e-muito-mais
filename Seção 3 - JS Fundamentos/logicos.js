// v e v -> v
// v e f -> f
// f e f -> f

// v ou ? -> v
// v ou v -> v
// f ou f -> f

// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f

function compras (trabalho1 , trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete // operador unario

    return{comprarSorvete , comprarTv50, comprarTv32 , manterSaudavel} // está sendo criado chave / valor

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
