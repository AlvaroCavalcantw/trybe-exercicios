// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const filterPair = numbers.filter((element) => (element % 2 === 0));
// const sumArray = (acc, curr) => acc + curr;
// const reduces = filterPair.reduce(sumArray, 0);

// console.log(reduces);

    //// EXERCICIO 1:

    // const arrays = [
    //     ['1', '2', '3'],
    //     [true],
    //     [4, 5, 6],
    //   ];
      
    // function flatten(array) {
    //   return array.reduce((acc, element) => acc.concat(element), []);
    // }

    // console.log(flatten(arrays));


    /// EXERCICIO 2:

    const books = [
        {
          id: 1,
          name: 'As Crônicas de Gelo e Fogo',
          genre: 'Fantasia',
          author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
          },
          releaseYear: 1991,
        },
        {
          id: 2,
          name: 'O Senhor dos Anéis',
          genre: 'Fantasia',
          author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
          },
          releaseYear: 1954,
        },
        {
          id: 3,
          name: 'Fundação',
          genre: 'Ficção Científica',
          author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
          },
          releaseYear: 1951,
        },
        {
          id: 4,
          name: 'Duna',
          genre: 'Ficção Científica',
          author: {
            name: 'Frank Herbert',
            birthYear: 1920,
          },
          releaseYear: 1965,
        },
        {
          id: 5,
          name: 'A Coisa',
          genre: 'Terror',
          author: {
            name: 'Stephen King',
            birthYear: 1947,
          },
          releaseYear: 1986,
        },
        {
          id: 6,
          name: 'O Chamado de Cthulhu',
          genre: 'Terror',
          author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
          },
          releaseYear: 1928,
        },
      ];
      
      // Adicione o código do exercício aqui:

      // const reduces = books.reduce((acc, currentName) => {
      //   return `${acc} ${currentName.author.name}, `; 
      // }, '');
      
      // console.log(reduces);


      // const reduces = books.reduce((acc, currentName) => {
      //   return acc + (currentName.releaseYear - currentName.author.birthYear); 
      // }, 0);
      
      // console.log(reduces / 6);



      // const reduces = books.reduce((biggestBook, currentBook) => {
      //   if (currentBook.name.length > biggestBook.name.length){
      //       return currentBook;
      //   }
      //   return biggestBook;
      // } );

      // console.log(reduces);

    const names = [
        'Aanemarie', 'Adervandes', 'Akifusa',
        'Abegildo', 'Adicellia', 'Aladonata',
        'Abeladerco', 'Adieidy', 'Alarucha',
    ];
    /// primeiro, transformando 'names' em um aray de letras:
    

    
    

