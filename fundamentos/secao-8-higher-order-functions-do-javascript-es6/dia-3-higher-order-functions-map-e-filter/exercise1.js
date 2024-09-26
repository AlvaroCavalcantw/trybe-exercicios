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

  //  EXERCICIO 1:

    // function formatedBookNames (arrayBook) {
    //     const formatedArray = [];
    //     const bookFormat = arrayBook.map((book) => {
    //         formatedArray.push(`Nome do Livro: ${book.name}, Gênero: ${book.genre}, Nome do Autor: ${book.author.name}`);
    //     });
    //     return formatedArray;
        
    // }

    // console.log(formatedBookNames(books));


  // EXERCICIO 2:

//   function formatedBookNames(arrayBook) {
//     const formatedArray = [];
//     const booksOrderedByAge = (bookA, bookB) => bookB.author.birthYear - bookA.author.birthYear;
//     const booksOrdered = arrayBook.sort(booksOrderedByAge);

//     const bookFormat = booksOrdered.map((book) => {
//         formatedArray.push(`${book.name} - ${book.genre} -${book.author.name}`);
//     });
//     return formatedArray;
//   }

//   console.log(formatedBookNames(books));


    /// EXERCICIO 3:


    // function nameAndAge(array) {
    //     const filterFunction = (book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    //     const filter = array.filter(filterFunction);
    //     return filter;
    // }

    // console.log(nameAndAge(books));


    /// EXERCICIO 4:

    // function oldBooksOrdered(arrayBook) {
    //     const formatedArray = [];
    //     const bookYear = (book) => book.releaseYear < 1962;
    //     const filter = arrayBook.filter(bookYear);
    //     const booksOrderedByAge = (bookA, bookB) => bookA.releaseYear - bookB.releaseYear;
    //     const booksOrdered = filter.sort(booksOrderedByAge);
        
    //     return booksOrdered;
    // }

    // console.log(oldBooksOrdered(books));

    /// EXERCICIO 5:

    // function fantasyOrScienceFictionAuthors(arrayBook) {
    //     return arrayBook.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia')
    //     .map((e) => e.author.name)
    //     .sort();
    // }

    // console.log(fantasyOrScienceFictionAuthors(books));