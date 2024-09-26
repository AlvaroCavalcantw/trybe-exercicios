 
/* Programa 2
let numero1 = 30;
let numero2 = 29;

if (numero1 > numero2) {
    console.log('O numero 1 é maior que o numero 2!');
}
else if (numero1 === numero2){
    console.log('Não existe um numero maior!');
}
else {
    console.log('O numero 2 é maior que o numero 1');
}
*/



/* Programa 3
let numero1 = 60;
let numero2 = 40;
let numero3 = 40;

if (numero1 > numero2 && numero1 > numero3) {
    console.log('O numero 1 é maior que o numero 2 e numero 3!');
}
else if (numero1 === numero2 && numero2 === numero3){
    console.log('Não existe um numero maior!');
} 
else if (numero2 > numero1 && numero2 > numero3)  {
    console.log('O numero 2 é maior que o numero 1 e numero 3!');
}
else {
    console.log('O numero 3 é maior que o numero 2 e o numero 1!')
}
*/

/* Programa 4
let valor = 1;

if (valor > 0) {
    console.log('Positive!');
}
else if (valor === 0){
    console.log('Zero');
}
else {
    console.log('Negative');
}
*/


/* Programa 5
let valor1 = 50;
let valor2 = 40;
let valor3 = 90;

if (valor1 + valor2 + valor3 === 180) {
    console.log('true!');
}
else if (valor1 + valor2 + valor3 != 180) {
   console.log('false!');
}
*/ 

/* Programa 6
nomePeca = 'bishop'
 
let moviment = '?';
switch (nomePeca) {
    case 'bishop':
    moviment = 'Diagonals';  
    console.log(moviment);
      break;
    
    case 'queen':
    moviment = 'Any Place';
    console.log(moviment);
      break;
}
*/

/* Programa 7
 let porcentagem = 89;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log('nota = A');
}
else if (porcentagem >= 80 && porcentagem < 90){
    console.log('nota = B');
}
else if (porcentagem >= 70 && porcentagem < 80) {
    console.log('nota = C');
}
else if (porcentagem >= 60 && porcentagem < 70) {
    console.log('nota = D');
}
else if (porcentagem >= 50 && porcentagem < 60) {
    console.log('nota = E');
}
else if (porcentagem < 50) {
    console.log('nota = F');
} 
else if (porcentagem < 0 && porcentagem > 100){
    console.log('Nota Errada');
}
else {
    console.log('numero inexistente')
}
*/


/* Programa 8
const num1 = 11;
const num2 = 323;
const num3 = 145;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 ===0) {
    console.log('true');
}
else {
    console.log('false');
}
*/

/* Programa 9
const num1 = 10;
const num2 = 324;
const num3 = 145;

if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 ===1 ) {
    console.log('true');
}
else {
    console.log('false');
}
*/

/* Programa 10
const custo = 1400;
const venda = 2600;
valorCustoTotal = 1400 * 1.2 ;

lucro = venda - valorCustoTotal;
console.log(lucro);
*/

let = salarioBruto = 3200;


if (salarioBruto > 0 && salarioBruto <= 1556.94){
    salarioINSS = salarioBruto * 0.92;
}
else if (salarioBruto > 1556.94 && salarioBruto < 2594.93){
    salarioINSS = salarioBruto * 0.91;
}
else if (salarioBruto > 2594.93 && salarioBruto < 5189.83){
    salarioINSS = salarioBruto * 0.89;
}
else if (salarioBruto > 5189.82){
    salarioINSS = salarioBruto - 570.88;
}



if (salarioINSS > 0 && salarioINSS < 1903.99){
    salarioLiquido = salarioINSS;
}
else if (salarioINSS > 1903.98 && salarioINSS < 2826.65){
    parcela = (salarioINSS*0.075) - 142.80;
    salarioLiquido = salarioINSS - parcela;
}
else if (salarioINSS > 2826.64 && salarioINSS < 3751.06 ){
    parcela = (salarioINSS*0.15) - 354.80;
    salarioLiquido = salarioINSS - parcela;
}
else if (salarioINSS > 3751.05 && salarioINSS < 4664.69){
    parcela = (salarioINSS*0.225) - 636.13;
    salarioLiquido = salarioINSS - parcela;
}
else if (salarioINSS > 4664.68){
    parcela = (salarioINSS*0.275) - 869.36;
    salarioLiquido = salarioINSS - parcela;
}

console.log(salarioLiquido);