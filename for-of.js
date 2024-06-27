// const notas = [10, 8.5, 5, 6.5, 8, 7.5];
// let somarNotas = 0;

// for(let nota of notas){
//     somarNotas += nota;
// }

// const media = somarNotas / notas.length;
// console.log(`A media das notas é: ${media.toFixed(2)}`);



const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}

console.log(precos);