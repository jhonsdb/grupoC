
//obtener id del html
let activarBoton = document.getElementById("crear");
//agregar evento al boton
activarBoton.addEventListener("click", crearLocal);

function crearLocal() {

let capturarClave = document.getElementById("clave").value;

let capturarvalor = document.getElementById("valor").value;


    localStorage.setItem(capturarClave,capturarvalor);

     //limpiar input
     document.getElementById("clave").value = "";
     document.getElementById("valor").value = "";
}



/////////////////////////////////////////////////////////////////////////////


//obtener id de eliminar
let botonBorrar = document.getElementById("eliminar");
//evento boton para borrar
botonBorrar.addEventListener("click", borrarLocal);

function borrarLocal() {

    let eliminarLocal = document.getElementById("claveEliminar").value;

    localStorage.removeItem(eliminarLocal);

    //limpiar input
    document.getElementById("claveEliminar").value = "";
    
}


////////////////////////////////////////////////////////////////////////////
let EliminarTodoLocalStorage = document.getElementById("elimarTodo");

EliminarTodoLocalStorage.addEventListener("click",borrarTodoLocal)

function borrarTodoLocal(){

    localStorage.clear();
}
