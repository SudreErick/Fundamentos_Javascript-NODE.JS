const notas = [10, 8.5, 5, 6.5, 8, 7.5];


//primeira expressao: executada apenas uma vez
//segunda expressao: condiçao de execução
//terceitra expressao: executada sempre ao final do bloco de instruções
for (let indice = 0; indice < notas.length; indice++){
    console.log(indice, notas[indice]);
}
