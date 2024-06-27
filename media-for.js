const notas = [10, 8.5, 5, 6.5, 8, 7.5];
let somarNotas = 0;

//primeira expressao: executada apenas uma vez
//segunda expressao: condiçao de execução
//terceitra expressao: executada sempre no final do bloco
for(let i = 0; i < notas.length; i++){
    somarNotas += notas[i];
}

const media = somarNotas/notas.length;
console.log(`A media das notas é: ${media}`);