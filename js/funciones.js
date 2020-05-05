var boton = $('#btn');
var tareas = document.querySelector('.deberes');
var mensaje = document.querySelector('#mensaje');
var contador = 0;


boton.on('click', function (event) {
    event.preventDefault();
    mensaje.innerText = "";

    let nombre = document.querySelector('#nombreTarea').value;
    let prioridad = document.querySelector('#prioridad').value;

    if (nombre.length == 0 || prioridad.length == "") {
        mensaje.innerText = 'Debes introducir los dos campos';
    } else {
        guardarDatos(nombre, prioridad);
    }

    document.querySelector('#nombreTarea').value = "";
    document.querySelector('#prioridad').value = "";
    console.log(listaTareas);
});


function guardarDatos(pNombre, pPrioridad) {

    let registro = {
        idTarea: contador,
        titulo: pNombre,
        prioridad: pPrioridad,
    }
    contador++;
    listaTareas.push(registro);
    pintarTarea(registro);
}


function pintarTarea(pObjeto) {
    tareas.innerHTML += (`<article id=${pObjeto.idTarea}>
                        <div class="${pObjeto.prioridad.toLowerCase()}">
                            ${pObjeto.titulo}
                        </div>
                        <div class="borrar" data-posid="${pObjeto.idTarea}">
                            Eliminar
                        </div>
                    </article>`);

    var plistaBotones = document.querySelectorAll('.borrar');

    for (boton of plistaBotones) {
        boton.addEventListener('click', borrarTareas);
    }
    //leerBotones('borrar');
}

//pintarTareas(listaTareas); --> para pintar si tuviera en el array


//Filtrar por prioridad
var selectPrioridad = document.querySelector('#prioridadBuscar');
selectPrioridad.addEventListener('change', sacarPrioridad);

function sacarPrioridad() {
    let prioridadBuscada = event.target.value;
    let titulo = buscar.value;

    if (prioridadBuscada != "") {
        tareas.innerHTML = "";
        pintarTareas(filtrarXNombre(filtrarPrioridad(listaTareas, prioridadBuscada), titulo));
    } else {
        tareas.innerHTML = "";
        pintarTareas(filtrarXNombre(listaTareas, titulo));
    }
}

function filtrarPrioridad(pLista, pPrioridad) {

    const listaFiltrada = pLista.filter(function (elemento) {
        return elemento.prioridad.toLowerCase() == pPrioridad.toLowerCase();
    })

    return listaFiltrada;
}

function pintarTareas(pLista) {
    for (tarea of pLista) {
        pintarTarea(tarea);
    }
}


//Filtrar por palabra
var buscar = document.querySelector('#tareaBuscar');

buscar.addEventListener('keyup', buscarTarea);


function buscarTarea(event) {
    let titulo = event.target.value;
    if (titulo != "") {
        tareas.innerHTML = "";
        pintarTareas(filtrarXNombre(listaTareas, titulo));
    } else {
        tareas.innerHTML = "";
        pintarTareas(listaTareas);
    }
}

function filtrarXNombre(pLista, pTitulo) {
    let listaFiltrada = new Array();
    for (elemento of pLista) {
        if (elemento.titulo.toLowerCase().includes(pTitulo.toLowerCase())) {
            listaFiltrada.push(elemento);
        }
    }
    return listaFiltrada;
}


//Borrar elementos
// function leerBotones(plistaBotones) {
//     var plistaBotones = document.querySelectorAll('.borrar');
//     for (boton of plistaBotones) {
//         boton.addEventListener('click', borrarTareas);
//     }
// }

function borrarTareas(event) {
    console.log(listaTareas)
    let borrado = event.target.parentNode;
    tareas.removeChild(borrado);
    // let borrarId = event.target.dataset.posid;
    // borrado = document.getElementById(borrarId);
    // borrado.parentNode.removeChild(borrado);

    //Borra del array
    var posicion = listaTareas.findIndex(
        (nombre) => nombre.idTarea == event.target.dataset.posid
    );
    listaTareas.splice(posicion, 1);
}

