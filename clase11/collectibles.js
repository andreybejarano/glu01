// Microdesafio 1

/* 

Enunciado

*/
const fs = require("fs");
const path = require("path");

function importar(marca) {
    let archivo = "";
    switch (marca) {
        case "Hot Toys":
            archivo = "figuras1.json";
            break;
        case "Bandai":
            archivo = "figuras2.json";
            break;
        case "Star Wars":
            archivo = "figuras3.json";
            break;
        default:
            break;
    }

    const rutaArchivo = path.resolve(__dirname, "./datos/" + archivo);
    const figurasData = fs.readFileSync(rutaArchivo, "utf-8");
    const figuras = JSON.parse(figurasData);

    return figuras;
}

module.exports = importar;