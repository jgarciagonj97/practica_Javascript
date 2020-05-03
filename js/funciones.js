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

    //borrar.addEventListener('click', borrarTareas);  --> aquí el listener del borrado
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
    tareas.innerHTML += (`<div class="apartado">
                        <div class="${pObjeto.prioridad.toLowerCase()}">
                            <h3>${pObjeto.titulo}</h3>
                        </div>
                        <div class="borrar" data-posid="${pObjeto.idTarea}">
                            <h3>Eliminar</h3>
                        </div>
                    </div>`);
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
        pintarTareas(listaTareas);
    }
}

function filtrarPrioridad(pLista, pPrioridad) {

    const listaFiltrada = pLista.filter(function (elemento) {
        return elemento.prioridad == pPrioridad;
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
var borrar = document.querySelectorAll('.borrar');

// borrar.forEach(function () {
//     console.log('Hola');
// })

function leerBotones() {
    for (boton of borrar) {
        borrarTarea();
    }
}

leerBotones(borrar);

function borrarTarea(event) {
    console.log('Hola');
    //let borrarId = event.target.dataset.posid;
    // console.log(borrarId);
    // apartado.innerHTML = "";
}
