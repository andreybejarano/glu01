// Tabla de multiplicar

// 1
// Retornando el texto al final
// Explicar \n (salto de linea)
function tablaDeMultiplicar() {
    let tablas = "     Tabla de multiplicar\n";

    for (let tabla = 1; tabla <= 10; tabla++) {
        tablas += " --------------------\n";
        let num = 1;
        do {
            tablas += " "+ tabla +" * "+ num +" = " + tabla * num + "\n";
            num++;
        } while (num <= 10);
    }

    return tablas;
}

console.log(tablaDeMultiplicar());