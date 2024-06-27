const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 5.7;
const notaQuartoBi = 8;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)/4;

if(media >= 7){
    media += media * 0.1; 
} else{
    console.log("Aluno Reprovado :(");
}

console.log(`Média do Aluno: ${media.toFixed(2)}`);