

//Modo de usar el evento onclick

function alertaClick(){
    alert("hola");
}

const accion = document.getElementById("boton");
accion.onclick = alertaClick

//Forma de añadir otro evento al click

accion.addEventListener("click",alertaClick);



