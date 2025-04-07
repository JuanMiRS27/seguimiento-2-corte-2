const registroAtenciones = [];
let usuario = {
    cedula: null,
    tipoAtencion: null,
    estadoAtencion: null
};

let sesion = true

function atencionUsuario(usuario) {
    let Atencion;
    while (true) {
        Atencion = parseInt(prompt("[ Ingrese el Módulo de Atención que desea utilizar ]\n1. Asesoría\n2. Telefónica"));
        if (Atencion === 1) {
            usuario.tipoAtencion = "Asesoría";
            break;
        } else if (Atencion === 2) {
            usuario.tipoAtencion = "Telefónica";
            break;
        } else {
            alert("Ingrese un tipo de atención válido.");
        }
    }
    usuario.estadoAtencion = "Pendiente";
    registrarAtencion(usuario);
    alert("Su Solicitud de Atención al Estudiante ha sido Registrada. Espere a que esta sea respondida.");
}
function cambiarAtencion(usuario){
    while(true){
        if(usuario.tipoAtencion == "Telefónica"){
            alert("No puede cambiar su tipo de Atención");
            break;
        } else {
            let cambio = prompt("¿Desea cambiar su tipo de atención a Telefónica? \n Si \n No").toLowerCase();
            if(cambio == "si"){
                usuario.tipoAtencion = "Atencion Diferente"; 
                for (let i = registroAtenciones.length - 1; i >= 0; i--) {
                    if (registroAtenciones[i].cedula === usuario.cedula) {
                        registroAtenciones[i].tipoAtencion = usuario.tipoAtencion;
                        break;
                    }
                }
                alert("Se ha cambiado su Atención con éxito!");
                break;
            } else if(cambio == "no"){
                alert("No se realizó ningún cambio");
                break;
            } else {
                alert("Ingrese una opción válida");
            }
        }
    }
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
            mensaje += `Cédula: ${registroAtenciones[i].cedula}, Tipo: ${registroAtenciones[i].tipoAtencion}, Estado: ${registroAtenciones[i].estadoAtencion}\n`;
        }
    }
    alert(mensaje);
}
function atenderAtencion() {
    const pendientes = registroAtenciones.filter(a => a.estadoAtencion === "Pendiente");

    if (pendientes.length === 0) {
        alert("No hay atenciones pendientes.");
        return;
    }
    let mensaje = "[ Atenciones Pendientes ]\n";
    for (let i = 0; i < pendientes.length; i++) {
        mensaje += `${i + 1}. Cédula: ${pendientes[i].cedula}, Tipo: ${pendientes[i].tipoAtencion}, Estado: ${pendientes[i].estadoAtencion}\n`;
    }

    let opcion = parseInt(prompt(mensaje + "\nIngrese el número de la atención que desea marcar como 'Atendida':"));

    if (!isNaN(opcion) && opcion >= 1 && opcion <= pendientes.length) {
        let seleccionada = pendientes[opcion - 1];
        for (let i = 0; i < registroAtenciones.length; i++) {
            if (registroAtenciones[i].cedula === seleccionada.cedula &&
                registroAtenciones[i].estadoAtencion === "Pendiente") {
                registroAtenciones[i].estadoAtencion = "Atendida";
                alert("La atención ha sido marcada como 'Atendida'.");
                break;
            }
        }
    } else {
        alert("Opción inválida.");
    }
}

function directivo(){
    while(true){
        let opcion = parseInt(prompt("[ Ingrese a qué módulo del sistema desea acceder ]\n1. Atender a un Estudiante\n2. Ver Atenciones Realizadas\n3. Cerrar Sesión\n4. Salir"));
        if (opcion === 1) {
            atenderAtencion();
        } else if (opcion === 2) {
            mostrarRegistro();
        } else if (opcion === 3) {
            break;
        } else if (opcion === 4) {
            alert("Gracias por utilizar el sistema de atenciones de la Universidad");
            sesion = false; 
            break;
        } else {
            alert("Ingrese una opción válida.");
        }
    }
}

function estudiante(){
    while(true){
        let opcion = parseInt(prompt("[ Ingrese a qué módulo del sistema desea acceder ]\n1. Solicitar una Atención\n2. Cambiar tipo de Atención\n3. Cerrar Sesión\n4. Salir"));
        if (opcion === 1) {
            atencionUsuario(usuario);
        } else if (opcion === 2) {
            cambiarAtencion(usuario);
        } else if (opcion === 3) {
            break;
        } else if (opcion === 4) {
            alert("Gracias por utilizar el sistema de atenciones de la Universidad");
            sesion = false; 
            break;
        } else {
            alert("Ingrese una opción válida.");
        }
    }
}

while (sesion) {
    usuario.cedula = parseInt(prompt("[ Bienvenido, por favor ingrese su C.C o T.I ]"));
    let rango = parseInt(prompt("[ Ingrese su rol de desempeño en la Universidad ]\n1. Directivo\n2. Estudiante"));

    if (rango === 1) {
        directivo();
    } else if (rango === 2) {
        estudiante();
    } else {
        alert("Ingrese una opción válida");
    }
}