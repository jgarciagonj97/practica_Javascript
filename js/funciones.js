var boton = $('#btn');
var borrar = document.querySelector('.borrar');
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

    //borrar.addEventListener('click', borrarTareas);  --> aquí el listeener del borrado
});


function guardarDatos(pNombre, pPrioridad) {

    let registro = {
        idTarea: contador,
        titulo: pNombre,
        prioridad: pPrioridad,
    }

    contador++;
    listaTareas.push(registro);
    //pintarTarea(registro);
}


function pintarTarea(pObjeto) {
    let prioridad = document.querySelector('#prioridad').value;
    var color = "";
    tareas.innerHTML = "";

    switch (prioridad) {
        case "Urgente":
            color = "tomato";
            break;
        case "Diaria":
            color = "rgb(252, 243, 78)";
            break;
        case "Mensual":
            color = "rgb(0, 255, 0)";
            break;
    }

    pObjeto.forEach(elementoDentro => {
        tareas.innerHTML += (`<div class="apartado">
                        <div style="background-color: ${color}">
                            <h3>${elementoDentro.titulo}</h3>
                        </div>
                        <div class="borrar">
                            <h3>Eliminar</h3>
                        </div>
                    </div>`)
    });
}



//Filtrar por prioridad
var selectPrioridad = document.querySelector('.tareasBuscar #prioridadBuscar');

selectPrioridad.addEventListener('change', cogerPrioridad);

function cogerPrioridad(event) {
    event.preventDefault();
    let prioridad = event.target.value;

    if (prioridad != "") {
        pintarTarea(filtrarXprioridad(listaTareas, prioridad));
    } else {
        pintarTarea(listaTareas);
    }
}

function filtrarXprioridad(pLista, pPrioridad) {
    let listaFiltrada = new Array();

    for (elemento of pLista) {
        if (elemento.prioridad.toLowerCase() == pPrioridad.toLowerCase()) {
            listaFiltrada.push(elemento);
        }
    }

    return listaFiltrada;
}


// tareas.innerHTML += (`<div class="apartado">
//                         <div style="background-color: ${color}">
//                             <h3>${pObjeto.titulo}</h3>
//                         </div>
//                         <div class="borrar">
//                             <h3>Eliminar</h3>
//                         </div>
//                     </div>`)