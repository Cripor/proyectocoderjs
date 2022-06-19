let producto = prompt("Seleccione un tipo de producto: 1-auriculares 2-joysticks 3- teclados 4-mouses");
let tipo = prompt("elija el tipo de dispositivo: 1-PC 2-Xbox 3-Playstation");

    if (producto === "1" && (tipo === "1" || tipo === "2" || tipo === "3")) {
    alert("Este es nuestro catalogo de auriculares");
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 300) + "<br><br>");
        }
    }
    else if (producto === "2" && (tipo === "1" || tipo === "2" || tipo === "3")) {
    alert("Este es nuestro catalogo de joysticks")
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 500) + "<br><br>");
        }
    }
    else if (producto === "3" && (tipo === "1" || tipo === "2" || tipo === "3")) {
        alert("Este es nuestro catalogo de teclados")
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 400) + "<br><br>");
        }
    }
    else if (producto === "4" && (tipo === "1" || tipo === "2" || tipo === "3")) {
        alert("Este es nuestro catalogo de mouses");
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 200) + "<br><br>");
        };
    }
    else {alert ("Opción invalida, recarge la página para volver a intentar");
}

let prod1 = prompt("elija el primer producto, de lo contrario presione aceptar o escriba ESC para salir. Producto 1: 1, producto 2: 2, producto 3: 3, producto 4: 4, producto 5: 5, producto 6: 6, producto 7: 7, producto 8: 8, producto 9: 9, producto 10: 10");
let carrito = 0;
let seguirAgregando = ""
    while (carrito < 10) {
        carrito++
        if (prod1 === "" || prod1 === "ESC") {
            alert("gracias por vistarnos");
            break;
        }
        else if (prod1 === "1" || prod1 === "2" || prod1 === "3" || prod1 === "4" || prod1 === "5" || prod1 === "6" || prod1 === "7" || prod1 === "8" || prod1 === "9" || prod1 === "10") {
        let seguirAgregando = prompt("elija otro producto que desee agregar al carrito o escriba ESC para salir. Producto 1: 1, producto 2: 2, producto 3: 3, producto 4: 4, producto 5: 5, producto 6: 6, producto 7: 7, producto 8: 8, producto 9: 9, producto 10: 10");
            if (seguirAgregando === "ESC" || seguirAgregando == "ESC") {
                alert("gracias por visitarnos")
                break
                }
        }
    }

    document.write ("<h1>Productos en carrito: </h1>" + "   " + carrito)
