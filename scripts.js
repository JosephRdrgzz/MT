var registro = "<th>Nombre</th><th>Correo</th><th>Modalidad</th><th>Materias</th><th>Fecha</th><th>Color Favorito</th><th>Complejidad</th>";
var estilo=0;
function registrar() {

    if (document.getElementById("nombre").value == false) {
        alert("Nombre vacío. Debes llenar todos los campos");
    } else if (document.getElementById("correo").value == false) {
        alert("Correo vacío. Debes llenar todos los campos");
    } else if (document.querySelector("input[name=modalidad]:checked")==null) {
        alert("No se seleccionó modalidad");
    } else if (document.querySelectorAll("input[name=materia]:checked").length === 0) {
        alert("No se seleccionaron materias");
    } else if(document.getElementById("fecha_hora").value == '' ) {
        alert("No se seleccionó fecha");

    }else {
        if (estilo%2 == 0) {
            registro = registro + "<tr class=\"renglon1\">";
        } else {
            registro = registro + "<tr class=\"renglon2\">";
        }
        // Agregar los datos a la tabla
        registro += "<td>" + document.getElementById("nombre").value + "</td>";
        registro += "<td>" + document.getElementById("correo").value + "</td>";
        registro += "<td>" + document.querySelector('input[name=modalidad]:checked').value + "</td>";

        registro += "<td>";
        var materias = document.querySelectorAll('input[name=materia]:checked');
        materias.forEach(materia => {
            registro += materia.value + "<br>";
        });
        registro += "</td>";

        registro += "<td>" + document.getElementById("fecha_hora").value + "</td>";
        registro += "<td>" + document.getElementById("color_favorito").value + "</td>";
        registro += "<td>" + document.getElementById("horario").value + "</td>";
        registro += "</tr>";

        document.getElementById("encuesta").innerHTML = registro;

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("programacion").checked = false;
        document.getElementById("bases_datos").checked = false;
        document.getElementById("redes").checked = false;
        document.getElementById("mixta").checked = false;
        document.getElementById("online").checked = false;
        document.getElementById("presencial").checked = false;
        document.getElementById("fecha_hora").value = "";
        document.getElementById("color_favorito").value = "#000000";
        document.getElementById("horario").value = 1;
        estilo = estilo + 1;

    }
}


var tabla = "<tr><th>Tarea</th><th>Completada</th></tr>";
estilo = 0;

//Para generar identificadores
var contador = 0;  

function agregarTarea() {
    var tareaTexto = document.getElementById("nuevaTarea").value;

    if (tareaTexto === "") {
        alert("El campo de la tarea está vacío. Debes escribir una tarea.");
    } else {
        contador++;  
        if (estilo % 2 == 0) {
            tabla += "<tr class='renglon1'>";
        } else {
            tabla += "<tr class='renglon2'>";
        }

        //celda con ID 
        tabla += "<td id='tarea" + contador + "'>" + tareaTexto + "</td>";
        tabla += "<td><input type='checkbox' onchange='tacharTarea(\"tarea" + contador + "\")'></td>";
        tabla += "</tr>";

        document.getElementById("tablaTareas").innerHTML = tabla;

        document.getElementById("nuevaTarea").value = "";
        estilo++;
    }
}

function tacharTarea(idTarea) {
    //como cambiar fácilmente los estilos de un elemento
    //https://leojimzdev.com/guia-paso-a-paso-como-agregar-estilos-css-a-elementos-con-javascript/#:~:text=Una%20vez%20que%20hayas%20seleccionado%20los%20elementos%20a,el%20color%20de%20fondo%20utilizando%20element.style.backgroundColor%20%3D%20%22red%22.
    //el efecto para tachar el texto es line-through
    var celdaTarea = document.getElementById(idTarea);
    if (celdaTarea.style.textDecoration === "line-through") {
        celdaTarea.style.textDecoration = "none";
        celdaTarea.style.color = "#000";
    } else {
        celdaTarea.style.textDecoration = "line-through";
        celdaTarea.style.color = "#999";
    }
}

function borrarLista() {
    tabla = "<tr><th>Tarea</th><th>Completada</th></tr>";
    document.getElementById("tablaTareas").innerHTML = tabla;
    //reiniciar el contador de IDs 
    contador = 0;  
}
