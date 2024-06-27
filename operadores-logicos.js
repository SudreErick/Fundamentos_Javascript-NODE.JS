const notaFinal = 6;
const faltas = 5;
const advertencia = 0;

if (notaFinal <= 7 && faltas > 4){
    console.log("Reprovado!!!");
} else{
    console.log("Aprovado!!!");
}

if (faltas <= 2 && !advertencia){
    console.log("Recebeu bonus!!!");
} else{
    console.log("Não recebeu bonus!!!");
}

