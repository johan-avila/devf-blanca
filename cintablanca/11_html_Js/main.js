// let mivariable=midocumentoHTML.llamaselid("AquiEscribesTuID")
let titulo = document.getElementById("titulo")
let parrafo = document.getElementById("parrafo")
let boton = document.getElementById("boton")
let input = document.getElementById("texto")
let textoUsu = document.getElementById("textoUs")

// _________let.innerHTML NO es una clase y sirve para cambiar el contenido



// funciones sin parametros se llaman funciones anonimas 
const cambiar = () => {
    titulo.innerHTML = "cambie el titulo"
    parrafo.innerHTML = "cambie mi parrafo"
    textoUsu.innerHTML = input.value
}
boton.addEventListener("click", cambiar);   
