const respuesta = "trabajar";
let ahorro = 0
let tiempo = 0
let a
let final = "final";
function alerta(){
    var ingresa = prompt("¿Que estas haciendo?");
    
    if(ingresa != respuesta){
        ahorro = ahorro + 5; 
        console.log(ahorro)
    }
    tiempo++
    console.log(tiempo)
    if(tiempo > 8){
        stopInterval()
        document.write("Tu ahorro fue de: "+ ahorro)
    }
};
a = setInterval(alerta,10000)

function stopInterval(){
    clearInterval(a)
    console.log(final)
}