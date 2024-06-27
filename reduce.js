const salaJS = [10, 6.5, 3, 3.5, 6, 4.5, 8, 7.5];
const salaJava = [9, 6.5, 8, 7.5, 10, 5.5, 8, 9.5];
const salaPython = [7, 6.5, 1, 5, 10, 6.5, 4, 10];

const calculaMedia = function(listaDeNotas){
    const somaNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0)
    const media = somaNotas / listaDeNotas.length;
    return media
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));

