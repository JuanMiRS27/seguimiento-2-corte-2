// Productos disponibles
const productos = [
    { nombre: "Camisa", precio: 20, stock: 5 },
    { nombre: "Pantalón", precio: 35, stock: 3 },
    { nombre: "Zapatos", precio: 50, stock: 4 },
    { nombre: "Gorra", precio: 10, stock: 10 }
];

// Carrito de compras
let carrito = [];

// Mostrar productos disponibles
function mostrarProductos() {
    let lista = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        lista += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio} (Stock: ${productos[i].stock})\n`;
    }
    alert(lista);
}

// Agregar producto al carrito
function agregarAlCarrito() {
    mostrarProductos();
    let seleccion = prompt("Ingrese el número del producto que desea agregar:");
    let cantidad = prompt("¿Cuántas unidades desea agregar?");

    let index = parseInt(seleccion) - 1;
    cantidad = parseInt(cantidad);

    if (index >= 0 && index < productos.length) {
        let producto = productos[index];
        if (cantidad > 0 && cantidad <= producto.stock) {
            // Verificar si ya está en el carrito
            let itemEnCarrito = carrito.find(p => p.nombre === producto.nombre);
            if (itemEnCarrito) {
                itemEnCarrito.cantidad += cantidad;
            } else {
                carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: cantidad });
            }

            producto.stock -= cantidad;
            alert(`${cantidad} unidad(es) de ${producto.nombre} agregadas al carrito.`);
        } else {
            alert("Cantidad inválida o fuera de stock.");
        }
    } else {
        alert("Selección inválida.");
    }
}

// Mostrar el carrito actual
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let resumen = "Carrito de Compras:\n";
    let total = 0;

    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        resumen += `- ${item.nombre}: ${item.cantidad} x $${item.precio} = $${subtotal}\n`;
        total += subtotal;
    });

    resumen += `\nTotal: $${total}`;
    alert(resumen);
}

// Menú principal
function menuCarrito() {
    let opcion;
    do {
        opcion = prompt(
            "Carrito de Compras\n\n" +
            "1. Ver productos\n" +
            "2. Agregar producto al carrito\n" +
            "3. Ver carrito\n" +
            "4. Salir\n\n" +
            "Seleccione una opción (1-4):"
        );

        if (opcion === "1") {
            mostrarProductos();
        } else if (opcion === "2") {
            agregarAlCarrito();
        } else if (opcion === "3") {
            mostrarCarrito();
        } else if (opcion === "4") {
            alert("Gracias por usar el carrito de compras.");
        } else {
            alert("Opción inválida. Intente de nuevo.");
        }

    } while (opcion !== "4");
}

// Iniciar
menuCarrito();
