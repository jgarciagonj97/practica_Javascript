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
    let prioridad = document.querySelector('#prioridad').value;
    var color = "";

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
    tareas.innerHTML += (`<div class="apartado">
                        <div style="background-color: ${color}">
                            <h3>${pObjeto.titulo}</h3>
                        </div>
                        <div class="borrar">
                            <h3>Eliminar</h3>
                        </div>
                    </div>`);

    // var borrar = $('.borrar');
    // borrar.on('click', borrarTarea);
}


// function borrarTarea() {
//     console.log('hola');
//     tareas.remove(this);
// }