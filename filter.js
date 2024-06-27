const listaDeAlunos = ["Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
const medias = [10, 4, 7.5, 9, 5, 6];

const reprovados = listaDeAlunos.filter((aluno, indice) => medias[indice] < 7);

console.log(`Reprovados: ${reprovados}`);