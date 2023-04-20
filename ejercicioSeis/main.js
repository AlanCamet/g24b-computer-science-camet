//variables
let fibo = [0,1]

function imprimir (mensaje){
    document.write(mensaje)
    document.write("<br>")
    document.write("<br>")
}

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