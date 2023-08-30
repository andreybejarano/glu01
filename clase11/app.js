const importar = require("./collectibles");

/* 2 */
const hotToys = importar("Hot Toys");
const bandai = importar("Bandai");
const starWars = importar("Star Wars");

/* 3 */
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/* 4 */

const collectibles = {

    figuras: unifiedCollectibles,

    /* 5 - a */
    listFigures: function () {
        this.figuras.forEach(figura => {
            console.log("----------");
            console.log("Marca: " + figura.marca);
            console.log("Nombre: " + figura.nombre);
            console.log("Precio: " + figura.precio);
            console.log("Stock: " + figura.stock);
        });
    },

    /* 5 - b */
    figuresByBrand: function (marca) {
        const figurasADevolver = this.figuras.filter(figura => figura.marca == marca);
        return figurasADevolver;
    }
}

/* 5 - c */

// collectibles.listFigures();
// console.log(collectibles.figuresByBrand("Bandai"));
// console.log(collectibles.figuresByBrand("Hot Toys"));
// console.log(collectibles.figuresByBrand("Star Wars"));