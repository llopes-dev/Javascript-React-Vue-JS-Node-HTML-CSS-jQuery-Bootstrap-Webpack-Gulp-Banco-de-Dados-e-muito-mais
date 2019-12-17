function tratarErroELancar(erro){
    //throw new Error(` ... `)
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.messagem,
        date: new Date
    }
}

function imprimirNome(){
    try{ // tentar

    console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        // bloco para tratar o erro
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {name: 'Roberto'}
imprimirNome(obj)