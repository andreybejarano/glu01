//Micro desafio 2
//Ajuste tarifario utilizando el if ternario
const pagoMes = 12000;
const consumoKWH = 450;
const totalPagar = consumoKWH > 300 ? ((pagoMes * 20) / 100) + pagoMes : pagoMes;

console.log('Cumplimos con informarle que su consumo eléctrico de este mes fue de: ' + '$' + pagoMes + ' , motivado a que adicionalmente en base al ajuste tarifario le indicamos que su hogar tuvo un consumo de: ' + consumoKWH + 'kwh, ajustamos el  total a pagar, el cual es de: ' + '$' + totalPagar);