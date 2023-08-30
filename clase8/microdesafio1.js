const cursos = [
    ['html5', 4000],
    ['css3', 5000],
    ['javascript', 10000],
    ['react', 7000],
    ['nodejs', 15000]
];

const cursosAlumno = [
    'HTML5', 
    'CSS3', 
    'JAVASCRIPT', 
    'REACT', 
    'NODEJS'
];

function calcularMontoAPagar(informacionCursos, cursosSeleccionados) {
    let total = 0;
    for (let index = 0; index < informacionCursos.length; index++) {
        const element = informacionCursos[index];
        if (cursosSeleccionados.includes(element[0].toUpperCase())) {
            total += element[1];
        }
    }
    return total;
}

console.log(calcularMontoAPagar(cursos, cursosAlumno));