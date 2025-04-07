const registroAtenciones = [];
let usuario = {
    cedula: null,
    tipoatencion: null,
    estadoAtencion: null
};

function atencionUsuario(usuario) {
    let Atencion;
    while (true) {
        Atencion = parseInt(prompt("[ Ingrese el Módulo de Atención que desea utilizar ]\n1. Asesoría\n2. Telefónica"));
        if (Atencion === 1) {
            usuario.tipoatencion = "Asesoría";
            break;
        } else if (Atencion === 2) {
            usuario.tipoatencion = "Telefónica";
            break;
        } else {
            alert("Ingrese un tipo de atención válido.");
        }
    }
    usuario.estadoAtencion = "Pendiente";
    registrarAtencion(usuario);
    alert("Su Solicitud de Atención al Estudiante ha sido Registrada. Espere a que esta sea respondida.");
}

function registrarAtencion(usuario) {
    if (registroAtenciones.length >= 20) {
        registroAtenciones.shift();
    }
    registroAtenciones.push({ ...usuario });
}

function mostrarRegistro() {
    let mensaje = "[ Últimas atenciones en el sistema ]\n";
    if (registroAtenciones.length === 0) {
        mensaje += "No hay atenciones registradas.";
    } else {
        for (let i = 0; i < registroAtenciones.length; i++) {
            mensaje += `Cédula: ${registroAtenciones[i].cedula}, Tipo: ${registroAtenciones[i].tipoatencion}, Estado: ${registroAtenciones[i].estadoAtencion}\n`;
        }
    }
    alert(mensaje);
}
function directivo(){
    while(true){
    let opcion = parseInt(prompt("[ Ingrese a qué módulo del sistema desea acceder ]\n1. Atender a un Estudiante\n2. Ver Atenciones Realizadas\n3. Cerrar Sesión\n4. Salir"));
    if (opcion === 1) {

    } else if (opcion === 2) {
        mostrarRegistro();
    } else if (opcion === 3) {
      break;
    } else if (opcion === 4) {
        alert("Gracias por utilizar el sistema de atenciones de la Universidad");
        
    } else {
        alert("Ingrese una opción válida.");
    }}
}
function estudiante(){
    while(true){
        let opcion = parseInt(prompt("[ Ingrese a qué módulo del sistema desea acceder ]\n1. Solicitar una Atención\n2. Cambiar tipo de Atención\n3. Cerrar Sesión\n4. Salir"));
        if (opcion === 1) {
            atencionUsuario(usuario);
        } else if (opcion === 2) {
            atencionUsuario(usuario);
        } else if (opcion === 3) {
            break;
        } else if (opcion === 4) {
            alert("Gracias por utilizar el sistema de atenciones de la Universidad");
            break;
        } else {
            alert("Ingrese una opción válida.");
            sesion = false
        }
    }
    }
while (sesion = true) {
    usuario.cedula = parseInt(prompt("[ Bienvenido, por favor ingrese su C.C o T.I ]"));
    let rango = prompt("[ Ingrese su rol de desempeño en la Universidad ]\n1. Directivo\n2. Estudiante").toLowerCase();

    if (rango === "directivo") {
        directivo()
    } else if (rango === "estudiante") {
        estudiante()
}}
