const listaDeAlunos = ["Joao", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
const medias = [10, 8, 7.5, 9, 6, 7];

const listaAlunoMedia = [listaDeAlunos, medias];

nomeNotaAluno = (nome) => {
    if (listaAlunoMedia[0].includes(nome)){
        const [listaDeAlunos, medias] = listaAlunoMedia;
        const indice = listaDeAlunos.indexOf(nome);
        const mediaAluno = medias[indice];
        console.log(`${nome} tem a média: ${mediaAluno}`)
    } else {
        console.log("Aluno não encontrado")
    }
};

nomeNotaAluno("Ana");
nomeNotaAluno("Erick")




