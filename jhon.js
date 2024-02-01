
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

    document.getElementById("claveEliminar").focus();
    
}


////////////////////////////////////////////////////////////////////////////
let EliminarTodoLocalStorage = document.getElementById("elimarTodo");

EliminarTodoLocalStorage.addEventListener("click",borrarTodoLocal);

function borrarTodoLocal(){

    localStorage.clear();
}
////////////////////////////////////////////////////////////////////////////////

let actibarBotonObtener = document.getElementById("Obtener_localStorage");
actibarBotonObtener.addEventListener("click",recogerLocal);


function recogerLocal(){
let palabra = document.getElementById("palabraObtener").value;

let palabraLocalEncontrada = localStorage.getItem(palabra);

document.getElementById("obtenerLocal").innerHTML = palabraLocalEncontrada;
//limpiar input
document.getElementById("palabraObtener").value = "";
//mantener curos
document.getElementById("palabraObtener").focus();
}
