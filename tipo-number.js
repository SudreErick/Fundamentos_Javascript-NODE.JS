const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 5.7;
const notaQuartoBi = 8;

const total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi;

const media = total/4;

console.log(`Pontuação total do aluno: ${total}, \nMédia do Aluno: ${media.toFixed(2)}`);

if(media >= 7){
    console.log("Aluno Aprovado!")
} else{
    console.log("Aluno Reprovado :(")
}
