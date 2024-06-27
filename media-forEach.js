const notas = [10, 6.5, 8, 7.5];

let somarNotas = 0;

notas.forEach(nota => {
    somarNotas += nota;
})

const media = somarNotas / notas.length;

console.log(`A média das notas é: ${media}`);

