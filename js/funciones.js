var boton = $('#btn');
var tareas = $('.deberes');
var borrar = $('.borrar');

boton.on('click', asignaTarea);
borrar.on('click', borrarTarea);

function asignaTarea(event) {
    event.preventDefault();

    tareas.html(`<div class="apartado">
                    <div>
                        <h3>Estudiar Javascript</h3>
                    </div>
                    <div class="borrar">
                        <h3>Eliminar</h3>
                    </div>
                </div>`);
}

function borrarTarea() {
    console.log('hola');
    tareas.html();
}