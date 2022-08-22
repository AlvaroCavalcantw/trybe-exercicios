
/* Exercicio 1 
let fatorial = 4; 
let multiplica = fatorial;
for (let i = fatorial -1 ; i > 0 ; i -= 1){
    multiplica = multiplica * i;
}
console.log(multiplica);
*/

/* Segundo Exercicio 
let word = 'roma';
let wordReverse = ' ';

for (let i = word.length - 1; i >= 0 ; i-= 1){
     wordReverse += word[i];
}

console.log(wordReverse);
*/

/* Terceiro exercicio
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];
for (let index = 0; index < array.length ; index+=1){
    if (array[index].length > maiorPalavra.length ){
        maiorPalavra = array[index];
    }
    if (menorPalavra.length > array[index].length){
        menorPalavra = array[index];
    }
}
console.log('A maior palavra é: ' + maiorPalavra);
console.log ('A menor palavra é: ' + menorPalavra);
*/



/* Exercicio 4
arrayPrimos = [];
let divisores = 0;

for (let num = 2 ; num < 51 ; num += 1)   {

   for (let count = 1; count <= num ; count += 1){
    if (num % count === 0){
     divisores += 1;
    }
    }
 if (divisores === 2){
    arrayPrimos.push(num);
  }
}

console.log(arrayPrimos);
*/






/* 
let idadeNoel = 35;
let idadeEllen = 26;
let idadeNasc = 23;

if (idadeNoel < idadeEllen && idadeNoel < idadeNasc) {
    console.log('O noel é a pessoa mais nova!');
}
else if (idadeEllen < idadeNoel && idadeEllen < idadeNasc){
    console.log('A Ellen é a pessoa mais nova!');
}
else {
    console.log('O Nasc é a pessoa mais nova!');
}
*/



/*
//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

 let cont = 0;
for (let i = 2 ; i < 151 ; i+=1){
    if (i % 3 === 0){
        cont += 1;
    }

}

if (cont === 50){
    console.log('******');
}
*/


/* Exercicio Bonus 1   
let n = 5;
let aux = '';
for (let linha = 1 ; linha <= n ; linha += 1) {
     for (let coluna = 1; coluna <= n ; coluna += 1) {
        aux += '*';
     }
 console.log(aux);
 aux = '';
}
*/


/* Exercicio Bonus 2
let n = 5;
let aux = '';
for (let linha = 1 ; linha <= n ; linha += 1) {
     for (let coluna = 1; coluna <= n ; coluna += 1) {
        if (coluna == linha){
        aux += '*';
        }
     }

     console.log(aux);
}
*/



