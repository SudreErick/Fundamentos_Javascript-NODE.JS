//const estudanteReprovou = (notaFinal, faltas) => {
//     if (notaFinal < 7 && faltas > 4){
//         return true;
//     } else{
//         return false;
//     }
// }

// console.log(estudanteReprovou(6, 5))
// console.log(estudanteReprovou(10, 2))

// // arrow function simples

// const exibeNome = (nome) => nome;
// console.log(exibeNome("Caroline"))

// const calculaMedia = function (nota1, nota2, nota3, nota4){
//     let media = (nota1 + nota2 + nota3 + nota4) /4;
//     if(media >= 6){
//         console.log("Aluno aprovado!")
//     }else{
//         console.log("Aluno reprovado!")
//     }
// }

// console.log(calculaMedia(10, 6.5, 8, 7.5)

const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

