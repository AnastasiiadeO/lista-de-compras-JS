const hortifruti = [];
const doces = [];
const laticinios = [];
const congelados = [];
const padaria = [];
const carnes = [];
const bebidas= [];
const outros = [];

let item;
let categoria;

let adicionar=true;

while(adicionar) {

    adicionar = prompt(`Você deseja adicionar algo na sua lista de compras? 1 para SIM, 2 para NAO`);
    if(adicionar == 1){
    item = prompt(`Qual comida você deseja adicionar?`);
    categoria = prompt (`Em qual categoria essa comida se encaixa? 1-hortifruti, 2-doces, 3-laticinios, 4-congelados, 5-padaria, 6-carnes, 7-bebidas, 8-outros`);
        if (categoria == 1) {
            hortifruti.push(item);
        } else if 
        (categoria == 2) {
            doces.push(item);
        } else if (categoria == 3) {
            laticinios.push(item);
        } else if (categoria == 4) {
            congelados.push(item);
        } else if (categoria == 5) {
            padaria.push(item);
        } else if (categoria == 6) {
            carnes.push(item);
        } else if(categoria == 7) {
            bebidas.push(item);
        } else if(categoria == 8) {
            outros.push(item);
        }
    } else if (adicionar == 2) {
        alert(`a sua lista de comtras e:
            hortifruti: ${hortifruti}
            doces: ${doces}
            laticinios: ${laticinios}
            congelados: ${congelados}
            padaria: ${padaria}
            carnes: ${carnes}
            bebidas: ${bebidas}
            outros: ${outros}`)
        break;
    } else {
        adicionar=true;
    }
}
