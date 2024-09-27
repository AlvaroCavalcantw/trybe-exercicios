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
  
  // Adicione o código do exercício aqui: FIND :

  // const authorBornIn1947 = (age) => age.author.birthYear === 1947;


  // const a1947 = books.find(authorBornIn1947);

  // console.log(a1947);



  // forEach 


  // function smallerName() {
  //   let nameBook;
  //   books.forEach((book) =>   {
  //     if(!nameBook || book.name.length < nameBook.length) {
  //       nameBook = book.name;
  //     }
  //   });
    
  //   return nameBook;
  // }
  // console.log(smallerName());



  // /// FIND:

  // const caracthersBook = (book) => book.name.length === 26;

  // const bookCaracters = books.find(caracthersBook);
  // console.log(bookCaracters);

  // / SORT :

  // const booksOrderedByReleaseYearDesc = (bookA, bookB) => bookB.releaseYear - bookA.releaseYear;


  // books.sort(booksOrderedByReleaseYearDesc);

  // console.log(books);


  // const everyoneWasBornOnSecXX = (book) => (book.author.birthYear >= 1900 && book.author.birthYear <= 2000);

  // console.log(books.every(everyoneWasBornOnSecXX));
