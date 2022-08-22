
/* Segundo exercicio
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont=0;
for (let index = 0; index < numbers.length; index++){
    cont = cont + numbers[index];
}
console.log(cont); 
*/

/* Terceiro exercicio
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont=0;
for (let index = 0; index < numbers.length; index++){
    cont = cont + numbers[index];
}
console.log(cont/numbers.length); 
*/


/* Quarto exercicio
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont=0;
for (let index = 0; index < numbers.length; index++){
    cont = cont + numbers[index];
}
let media = cont/numbers.length;
console.log(media); 
if (media > 20){
    console.log('valor maior que 20!');
}
else {
    console.log('valor menor ou igual a 20!');
}
*/


/* Quinto exercicio
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = numbers[0];
for (let index = 0; index < numbers.length; index+=1){
     if (numbers[index] > cont) {
        cont = numbers[index];
     }
     else{
     
     } 
     
}
console.log(cont);
*/

/* Sexto exercicio
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (let index = 0; index < numbers.length; index+=1){
     if (numbers[index] % 2 === 1 ) {
        impar++;
     }
     else{
     
     } 
     
}
if (impar === 0){
    console.log('nao existem numeros impares!');
}
console.log(impar);
*/

/* Setimo exercicio
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (let index = 0; index < numbers.length; index+=1){
     if (numbers[index] < menor) {
        menor = numbers[index];
     }
     else{
     }
}
console.log(menor);
*/


/* Oitavo exercicio 
let array = [];

for (let i=1; i<26 ; i+=1){
    array.push(i);
}

console.log(array);
*/

/* Nono exercicio
let array = [];
let arrayDivisao = [];
for (i=1; i<26 ; i+=1){
    array.push(i);
    arrayDivisao.push(i/2);
}

console.log(arrayDivisao);
*/

/* bonus
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }

console.log(numbers);
*/


const numero = 100;

let cont = 0;
for (let i = 0; i <= numero; i+=1){
      let resultado = numero - 5;
    if (resultado > 0) {
     cont += 1;
    }
    else {
        break;
    }
}

console.log(cont);



