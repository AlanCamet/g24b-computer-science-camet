<<<<<<< HEAD
class carta{
    constructor(valor,simbolo){
        this.valor = valor
        this.simbolo = simbolo
    }
}

const asCorazones = carta ("as","corazones")

console.log (asCorazones)
=======
function imprimir(mensaje){
    document.write(mensaje)
    document.write("<br></br>")
    document.write("<br></br>")
}
let numAle;
function numeroAleatorio(){
    numAle = Math.round(Math.random*90)
    imprimir(numAle)
}

numeroAleatorio()

let valores =["as",2,3,4,5,6,7,8,9,"j","q","k"]
let simbolos = ["trébol", "pica", "corazon", "diamante"]

class carta {
    constructor(valor,simbolo)
    {
        this.valor = valor;
        this.simbolo = simbolo;
    }
}

class baraja{


}
/* imprimir(asCorazones) */
>>>>>>> 1f7ba0a0b0ab0658adc6b2249295df44f157faaf
