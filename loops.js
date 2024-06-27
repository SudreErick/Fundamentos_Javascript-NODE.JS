console.log("TRABALHANDO COM CONDICIONAIS");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Piauí`
)

const idadeComprador = 12;
const estaAcompanhada = true;
let passagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log(`Destino existe? ${destinoExiste}`);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
} else{
    console.log("Tivemos um erro");
}

for(let i = 0 ; i < 3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}




// if(idadeComprador >= 18 || estaAcompanhada == true){
//     console.log("Comprador Maior de Idade");
//     console.log("Destinos Possíveis: ");
//     console.log(listaDeDestinos);
//     console.log("Compra");
//     listaDeDestinos.splice(1, 1);
//     console.log(listaDeDestinos);
//     console.log();
//     console.log("Compra realizada!");
//     passagemComprada = true;
//     }else{
//         console.log("Comprador Menor de Idade e desacompanhado!");
//         passagemComprada = false;
//     } 

// console.log();
// console.log("Viagem");
// console.log("EMBARQUE")
// console.log()
// if(idadeComprador >= 18 && passagemComprada || estaAcompanhada && passagemComprada){
//     console.log("Boa Viagem!");
// }else{
//     console.log("Você não poderá embarcar");
// }
// console.log();