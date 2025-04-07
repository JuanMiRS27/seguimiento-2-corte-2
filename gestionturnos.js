let colaEspera = [];
let contadorTurnos = 0;

function tomarTurno() {
    contadorTurnos++;
    colaEspera.push(contadorTurnos);
    alert("¡Turno tomado! Su número es: " + contadorTurnos);
}

function llamarCliente() {
    if (colaEspera.length > 0) {
        let turnoLlamado = colaEspera.shift();
        alert("Siguiente cliente, turno número: " + turnoLlamado);
    } else {
        alert("No hay clientes en espera.");
    }
}

function mostrarCola() {
    if (colaEspera.length > 0) {
        alert("Cola de espera actual: " + colaEspera.join(", "));
    } else {
        alert("No hay clientes en la cola.");
    }
}

function mostrarContador() {
    alert("Total de turnos tomados: " + contadorTurnos);
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Sistema de Turnos del Banco\n\n" +
            "1. Tomar un turno\n" +
            "2. Llamar al siguiente cliente\n" +
            "3. Mostrar cola de espera\n" +
            "4. Mostrar contador de turnos\n" +
            "5. Salir\n\n" +
            "Ingrese una opción (1-5):"
        );

        if (opcion === "1") {
            tomarTurno();
        } else if (opcion === "2") {
            llamarCliente();
        } else if (opcion === "3") {
            mostrarCola();
        } else if (opcion === "4") {
            mostrarContador();
        } else if (opcion === "5") {
            alert("Gracias por usar el sistema de turnos. ¡Hasta luego!");
        } else {
            alert("Opción inválida. Por favor, intente nuevamente.");
        }

    } while (opcion !== "5");
}

menu();
