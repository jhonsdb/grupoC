//obtener id del html
let activarBoton = document.getElementById("crear");
//agregar evento al boton
activarBoton.addEventListener("click", crearLocal);

function crearLocal() {
    localStorage.setItem("nombre", "Jhon Stiven");
}
/////////////////////////////////////////////////////////////////////////////


//obtener id de eliminar
let botonBorrar = document.getElementById("eliminar");
//evento boton para borrar
botonBorrar.addEventListener("click", borrarLocal);

function borrarLocal() {
    localStorage.removeItem("nombre");
}