/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */

class agenda {
    constructor(contactos){
        this.contactos = contactos;
    }
    agregar (contact,name,email,tel){
         contact = new contacto(name,email,tel)
         console.log(contact)
    }

}
agenda.agregar("Ady", "Adrian", "dalbert_02@hotmail.com", 7821937463)
class contacto {
    constructor(nombre, email , telefono){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

let contactoUno = new contacto("Alan", "alan_israel_97@hotmail.com", 2215301571)

console.log(contactoUno)