// -----------INPUTS

let name = document.getElementById("nombre")
let direccion = document.getElementById("direccion")
let pizza = document.getElementById("pizza")
// ----------------------if ( pizza == "con piña" ) {
// ----------------------":("} else ( pizza == "sin piña" ) 
// -----------ETUIQUETAS___ P___-------------------------------------
let caja1 = document.getElementById("primeraCaja")
let caja2 = document.getElementById("segundacaja")
let caja3 = document.getElementById("tercerCaja")

// ..........-----boton..........

let boton = document.getElementById("boton")
// ----------------const-------zzzzz

const cambiar = () => {
    caja1.innerHTML = name.value
    caja2.innerHTML = direccion.value

    let resultFood = pizza.value.toUpperCase();

    if (resultFood === "CON") {
        caja3.innerHTML = "UmU"
    } else if (resultFood === "SIN") {
        caja3.innerHTML= "UuU"
    } else ("No te ente                     ndi")
}

boton.addEventListener ( "click", cambiar )