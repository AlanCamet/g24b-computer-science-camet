let matrices = [[5,3,6,3],[7,2,5,7]]
let resultado 

function imprimir(mensaje){
    document.write(mensaje)
    document.write("<br>")
    document.write("<br>")
}


function sumaMatrices(posicion){
    var suma = matrices[0][posicion-1] + matrices[1][posicion-1]
    imprimir(suma)
}

/* function sumaMatricesDos(){
    return resultado.posDos = matrices[0].posDos + matrices[1].posDos
}
imprimir("Posición Dos: " + sumaMatricesDos()) */

console.log(sumaMatrices(3))
