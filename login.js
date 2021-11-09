let registros = []; //bot 
let datos = registros; //nosotros
//var datos = "";

function login(){
    //datos = JSON.parse(localStorage.getItem('registros')); //para el bot
    //var datos = JSON.parse(localStorage.getItem('registros'));
    var valor = document.getElementById('captcha').checked;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    for (var key in datos) {
        
        if ((datos[key].telefono == telefono) && (datos[key].correo == correo) && (datos[key].contrasena == contrasena)){
            ingreso = true; //Datos de usuario correctos
            
            if (valor == true) {
                var adivina = prompt("El alba es al amanecer como el ______ es al atardecer", "ocaso");
                adivina = adivina.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
                
                validarCAPTCHA(adivina);
            } else {
                console.log("Por favor verifique los datos ingresados.");
            }
            break;
        } else {
            ingreso = false; //Datos de usuario incorrectos
            console.log("Ingreso denegado.");
        }

        
        
    }
}

function agregarRegistro() {

    const form = document.getElementById('form-registro');
    const genero = form.querySelector('input[name=genero]:checked').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
    // Metodo Constructor (objeto 'registro_usuario ) e inicializamos las variables.
    
    function Registro(nombre, genero, telefono, direccion, correo, contrasena) {
        this.nombre = nombre;
        this.genero = genero;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.contrasena = contrasena;
    };
    
    // Instanciamos un nuevo registro de usuario.
    var registro_usuario = new Registro(nombre, genero, telefono, direccion, correo, contrasena);

    //Agregamos los datos del registro al final de la lista.
    registros.push(registro_usuario);
};

function validarCAPTCHA (valor) {
    if(valor == "ocaso") {
        console.log("Ocaso es correcto");
        console.log("Ingreso autorizado");
        return true;
    } else {
        console.log("La palabra no es correcta, ingreso denegado.");
        return false;
    }

};

//module.exports = {registros, login, validarCAPTCHA,  agregarRegistro};