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