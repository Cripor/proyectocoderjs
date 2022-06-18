let producto = prompt("Seleccione un tipo de producto: 1-auriculares 2-joysticks 3- teclados 4-mouses")
let tipo = prompt("elija el tipo de dispositivo: 1-PC 2-Xbox 3-Playstation")

    if (producto === "1" && (tipo === "1" || tipo === "2" || tipo === "3")) {
    alert("Este es nuestro catalogo de auriculares")
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 300) + "<br><br>")
        }
    }
    else if (producto === "2" && (tipo === "1" || tipo === "2" || tipo === "3")) {
    alert("Este es nuestro catalogo de joysticks")
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 500) + "<br><br>")
        }
    }
    else if (producto === "3" && (tipo === "1" || tipo === "2" || tipo === "3")) {
        alert("Este es nuestro catalogo de teclados")
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 400) + "<br><br>")
        }
    }
    else if (producto === "4" && (tipo === "1" || tipo === "2" || tipo === "3")) {
        alert("Este es nuestro catalogo de mouses");
        for (i = 1; i <= 10; i++) {
            document.write("Producto " + i + " precio: $" + (i + 200) + "<br><br>");
        };
    }
    else {alert ("ingrese una opciòn válida")
}

document.write("<h2>Haz click en el producto que desee añadir al carrito</h2><br>")

const suma = (a,b,c) => {return a + b + c}

document.write("usted tiene estos productos en el carrito: " + suma(2,4,7,3))