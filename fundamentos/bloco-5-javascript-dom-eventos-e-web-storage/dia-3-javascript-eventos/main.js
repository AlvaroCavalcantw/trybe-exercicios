function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    
    
    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
      dayItem.innerHTML = day;
    } else if (day === 4 || day === 11 || day === 18) {
      // Caso o dia for 4, 11 ou 18
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
      getDaysList.appendChild(dayItem);
      dayItem.innerHTML = day;
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      getDaysList.appendChild(dayItem);
      dayItem.innerHTML = day;
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
      dayItem.innerHTML = day;
    }
  }
}


createDaysOfTheMonth();

function buttonHoliday(stringName){
  let buttonContainer = document.querySelector('.buttons-container'); /// pai da 
  let buttonCreate = document.createElement('button');
  buttonCreate.id = 'btn-holiday';
  buttonCreate.innerHTML = stringName;
  buttonContainer.appendChild(buttonCreate);
}

buttonHoliday('Feriados');


function changeColor(){
  let buttonHolidays = document.querySelector('#btn-holiday');
  let classHoliday = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'blue';

  buttonHolidays.addEventListener('click', function(){
    for(let i = 0; i < classHoliday.length ; i += 1 ){
       
      if(classHoliday[i].style.backgroundColor === setNewColor){
        classHoliday[i].style.backgroundColor = backgroundColor;
      } else {
        classHoliday[i].style.backgroundColor = setNewColor;
      }

    }

  })
 
}

changeColor();

function buttonFriday(string){
  let father = document.querySelector('.buttons-container');
  let buttonCreateFriday = document.createElement('button');
  buttonCreateFriday.id = 'btn-friday';
  buttonCreateFriday.innerHTML = string;
  father.appendChild(buttonCreateFriday);
}

buttonFriday('Sexta-Feira');

function changeText(array){
  let buttonFridays = document.querySelector('#btn-friday');
  let classFriday = document.querySelectorAll('.friday');
  let newText = 'aee';

  buttonFridays.addEventListener('click', function(){
   
   for(let i = 0; i < classFriday.length ; i += 1){
      if (classFriday[i] !== newText){
        classFriday[i].innerHTML = newText;
      }
      else  {
        classFriday[i].innerHTML = array[i];
      }
    }
  });
}
let decemberFridays = [4, 11, 18, 25];



function zoomOn(){
 let getDayOfMonth = document.querySelector('#days');
 
 getDayOfMonth.addEventListener('mouseover', function(event){
   
   event.target.style.fontSize = '30px';
   event.target.style.fontWeight = '600';
 });

}

function zoomOff(){
  let days = document.querySelector('#days');


  days.addEventListener('mouseout', function(event){
   
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

zoomOn();
zoomOff();
