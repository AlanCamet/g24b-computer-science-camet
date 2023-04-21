let matrices = [
    {
        posUno: 5,
        posDos: 7,
        posTre: 9,
        posCua: 3
    },
    {
        posUno: 3,
        posDos: 6,
        posTre: 2,
        posCua: 8
    },
]
let resultado ={
    posUno: 0,
    posDos: 0,
    posTre: 0,
    posCua: 0
}


function imprimir(mensaje){
    document.write(mensaje)
    document.write("<br>")
    document.write("<br>")
}

function sumaMatrices(){
    return resultado.posUno = matrices[0].posUno + matrices[1].posUno
    imprimir("Posición Uno: " + resultado.posUno)
}
sumaMatrices()
function sumaMatricesDos(){
    return resultado.posDos = matrices[0].posDos + matrices[1].posDos
}
imprimir("Posición Dos: " + sumaMatricesDos())
