console.log("TRABALHANDO COM LISTA");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    `Piauí`
);

const idadeComprador = 12;
const estaAcompanhada = true;
const passagemComprada = true;

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Comprador Maior de Idade");
    console.log("Destinos Possíveis: ");
    console.log(listaDeDestinos);
    console.log("Compra");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
    console.log();
    console.log("Compra realizada!");
    }else{
        console.log("Comprador Menor de Idade e desacompanhado!");
    } 

console.log();
    
console.log("Viagem");

console.log("EMBARQUE")
console.log()
if(idadeComprador >= 18 && passagemComprada || estaAcompanhada && passagemComprada){
    console.log("Boa Viagem!");
}else{
    console.log("Você não poderá embarcar");
}

console.log();