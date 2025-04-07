let citas = [];

function programarCita() {
    let nombre = prompt("Ingrese el nombre del paciente:");
    let fecha = prompt("Ingrese la fecha de la cita (YYYY-MM-DD):");
    let hora = prompt("Ingrese la hora de la cita (HH:MM):");
    let medico = prompt("Ingrese el nombre del médico asignado:");

    if (nombre && fecha && hora && medico) {
        let nuevaCita = {
            nombre: nombre,
            fecha: fecha,
            hora: hora,
            medico: medico
        };
        citas.push(nuevaCita);
        alert("Cita programada correctamente.");
    } else {
        alert("Todos los campos son obligatorios.");
    }
}

function verCitas() {
    if (citas.length === 0) {
        alert("No hay citas programadas.");
        return;
    }

    citas.sort((a, b) => {
        let fechaA = new Date(`${a.fecha}T${a.hora}`);
        let fechaB = new Date(`${b.fecha}T${b.hora}`);
        return fechaA - fechaB;
    });

    let lista = "Citas Programadas:\n\n";
    citas.forEach((cita, index) => {
        lista += `${index + 1}. ${cita.fecha} ${cita.hora} - ${cita.nombre} con Dr(a). ${cita.medico}\n`;
    });

    alert(lista);
}

function cancelarCita() {
    if (citas.length === 0) {
        alert("No hay citas para cancelar.");
        return;
    }

    verCitas();
    let numero = prompt("Ingrese el número de la cita que desea cancelar:");

    let index = parseInt(numero) - 1;

    if (!isNaN(index) && index >= 0 && index < citas.length) {
        let citaCancelada = citas.splice(index, 1)[0];
        alert(`Cita de ${citaCancelada.nombre} el ${citaCancelada.fecha} a las ${citaCancelada.hora} ha sido cancelada.`);
    } else {
        alert("Número inválido.");
    }
}

function menuCitas() {
    let opcion;
    do {
        opcion = prompt(
            "Sistema de Gestión de Citas Médicas\n\n" +
            "1. Programar una cita\n" +
            "2. Ver citas programadas\n" +
            "3. Cancelar una cita\n" +
            "4. Salir\n\n" +
            "Seleccione una opción (1-4):"
        );

        if (opcion === "1") {
            programarCita();
        } else if (opcion === "2") {
            verCitas();
        } else if (opcion === "3") {
            cancelarCita();
        } else if (opcion === "4") {
            alert("Gracias por usar el sistema de citas médicas.");
        } else {
            alert("Opción inválida. Intente de nuevo.");
        }

    } while (opcion !== "4");
}

menuCitas();
