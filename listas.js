console.log("TRABALHANDO COM LISTA");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Piauí`
);

listaDeDestinos.push(`Curitiba`);
listaDeDestinos.push(`Goiás`);
listaDeDestinos.splice(4, 1);
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos[2], listaDeDestinos[4]);
