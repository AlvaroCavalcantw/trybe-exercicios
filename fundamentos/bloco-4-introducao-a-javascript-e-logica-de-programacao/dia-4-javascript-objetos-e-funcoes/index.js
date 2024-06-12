
/*
let player ={
name: 'Marta',
lastName: 'Silva',
age: 34,
  medals : { 
  golden: 2,
  silver: 3 
   },
   bestInTheWorld:[
    2006, 
    2007, 
    2008, 
    2009, 
    2010, 
    2018
  ] 
};

console.log('A jogadora ' + player.name + ' ' + player.lastName +' tem ' + player.age + ' anos de idade');
console.log('A jogadore possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' de prata!');
*/

/*
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let index in names){
   console.log('Olá, '+ names[index]);
  }
*/


/*
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };


  for (let index in car){
    console.log(index, car[index]);
  }
*/


/* Exercicio 5 

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
   
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente : 'Sim',
  };
for (let index in info){
    console.log(info[index] + ' e ' + info2[index]);
}
*/


/* Exercicio 6 
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');
*/ 



/* Exercicio 7
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


  leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },

  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
*/ 




/* Exercicio 1 - Funções
function verificaPalindrome(word) {

let wordReverse = '';
for (let i = word.length - 1 ; i >= 0 ; i -= 1){
    wordReverse += word[i];
}

if (wordReverse === word){
    return true;
}
else { 
    return false;
}
}

console.log(verificaPalindrome('ama'));

*/


function menorPosicaoValor (array) {
let a ;
let menorValor = [0];
let count = 0;
for( let i = 0 ; i < array.length ; i += 1){
    if (array[i] < menorValor){
        menorValor = array[i];
       
    }   
}
return ;
}
console.log(menorPosicaoValor([2, 4, 6, 7, 10, 0, -3]));
