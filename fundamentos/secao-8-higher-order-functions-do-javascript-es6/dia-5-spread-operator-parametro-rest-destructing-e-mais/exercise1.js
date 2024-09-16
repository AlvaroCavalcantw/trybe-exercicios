

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); 
// });


    //// EXERCICIO 2:

// const sum = (...parametro) => parametro.reduce((acc, value) => acc + value, 0)

// console.log(sum(2, 5, 7));



    /// EXERCICIO 3:

    // const alex = {
    //     name: 'Alex',
    //     age: 26,
    //     likes: ['fly fishing'],
    //     nationality: 'Australian',
    //   };
      
    //   const gunnar = {
    //     name: 'Gunnar',
    //     age: 30,
    //     likes: ['hiking', 'scuba diving', 'taking pictures'],
    //     nationality: 'Icelandic',
    //   };
    //   // name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade
      
    //   // complete a assinatura da função abaixo
    //   const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
    //   // <nome> tem <anos de idade> e gosta de <gostos da pessoa>
      
    //   // Retornos esperados:
    //   console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
    //   console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'



        /// EXERCICIO 4:


    // const people = [
    //     {
    //       name: 'Nicole',
    //       bornIn: 1992,
    //       nationality: 'Australian',
    //     },
    //     {
    //       name: 'Harry',
    //       bornIn: 2008,
    //       nationality: 'Australian',
    //     },
    //     {
    //       name: 'Toby',
    //       bornIn: 1901,
    //       nationality: 'Australian',
    //     },
    //     {
    //       name: 'Frida',
    //       bornIn: 1960,
    //       nationality: 'Dannish',
    //     },
    //     {
    //       name: 'Fernando',
    //       bornIn: 2001,
    //       nationality: 'Brazilian',
    //     },
    //       // bornIn: nascido em
    //   ];
      
    //   // escreva filterPeople abaixo




    //   const filterPeople = (array) => { 
    //     return people.filter(({ nationality, bornIn }) => {
    //     return (nationality === 'Australian') && (bornIn >= 1900 && bornIn < 2000);
    //     });
        
    //   }

    //   console.log(filterPeople(people));



    /// EXERCICIO 5:
    // const myList = [5, 2, 3];
    // const swap = ([primeiro, segundo, terceiro]) => {
    //     return [terceiro, segundo, primeiro];
    // }

    // console.log(swap(myList));


    
    /// EXERCICIO 6: 

    const palio = ['Palio', 'Fiat', 2019];
    const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
    const chiron = ['Chiron', 'Bugatti', 2016];

    // escreva toObject abaixo  

    const toObject = ([carro, marca, ano]) => {
        return `{
          carro: ${carro}, 
          marca: ${marca}, 
          ano: ${ano}
        }`
    };
    
    console.log(toObject(shelbyCobra));

