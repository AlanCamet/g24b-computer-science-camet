<<<<<<< HEAD
let matrices = [[5,3,6,3],[7,2,5,7]]
let resultado 

function imprimir(mensaje){
=======
//variables
let fibo = [0,1]

function imprimir (mensaje){
>>>>>>> 1f7ba0a0b0ab0658adc6b2249295df44f157faaf
    document.write(mensaje)
    document.write("<br>")
    document.write("<br>")
}

<<<<<<< HEAD

function sumaMatrices(posicion){
    var suma = matrices[0][posicion-1] + matrices[1][posicion-1]
    imprimir(suma)
}

/* function sumaMatricesDos(){
    return resultado.posDos = matrices[0].posDos + matrices[1].posDos
}
imprimir("Posición Dos: " + sumaMatricesDos()) */

console.log(sumaMatrices(3))
=======
imprimir(fibo[0])
imprimir(fibo[1])

function fibonacci(cantidad){
    for (var i = 2; i<cantidad ; i++){
        var resultado = fibo[0]+fibo[1]
        imprimir(resultado)
        fibo[0] = fibo[1]
        fibo[1] = resultado
    }
}
fibonacci(20)
>>>>>>> 1f7ba0a0b0ab0658adc6b2249295df44f157faaf
