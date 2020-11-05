function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function decemberDays() {
  let getDaysList = document.querySelector("#days");

  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const day = dezDaysList[i];
    const dayDez = document.createElement("li");
    dayDez.className = "day";
    dayDez.innerHTML = day;

    if (day === 24 || day === 31) {
      dayDez.className = "day holiday";
    } else if (day === 4 || day === 11 || day === 18) {
      dayDez.className = "day friday";
    } else if (day === 25) {
      dayDez.className = "day holiday friday";
    }

    getDaysList.appendChild(dayDez);
  }
}
decemberDays();

function buttonHoliDays(Feriados) {
  let buttonHolyday = document.createElement("button");
  buttonHolyday.id = "btn-holiday";
  buttonHolyday.innerHTML = "FERIADOS?!";
  let divButtons = document.querySelector(".buttons-container");
  divButtons.appendChild(buttonHolyday);
}
buttonHoliDays();

function changeHoliDaysColor(feriados) {
  let buttonHoliday = document.querySelector("#btn-holiday");
  let holyDays = document.querySelectorAll(".holiday");
  let normalBG = "rgb(238,238,238)";
  let clickedBG = "orange";

  buttonHoliday.addEventListener("click", function () {
    for (let i = 0; i < holyDays.length; i += 1) {
      if (holyDays[i].style.backgroundColor === clickedBG) {
        holyDays[i].style.backgroundColor = normalBG;
        holyDays[i].style.color = "#777";
      } else {
        holyDays[i].style.backgroundColor = clickedBG;
        holyDays[i].style.color = "white";
      }
    }
  });
}
changeHoliDaysColor();

function buttonFridays(sextafeira) {
  let buttonFriday = document.createElement("button");
  buttonFriday.id = "btn-friday";
  buttonFriday.innerHTML = "SEXTAS?!";
  let divButtons = document.querySelector(".buttons-container");
  divButtons.appendChild(buttonFriday);
}
buttonFridays();

function changeFridaysText(sextasFeiras) {
  let buttonFriday = document.querySelector("#btn-friday");
  let friDays = document.querySelectorAll(".friday");
  let normalBG = "rgb(238,238,238)";
  let changedTxt = "SEXTOWW MLK o/" 
  let changedBG = 'blue';  
  buttonFriday.addEventListener("click", function () {

    for (let i = 0; i < friDays.length; i += 1) {
      if (friDays[i].innerHTML !== changedTxt) {
        friDays[i].innerHTML = changedTxt;
        friDays[i].style.backgroundColor = changedBG;
      } else {
        friDays[i].innerHTML = sextasFeiras[i];
        friDays[i].style.backgroundColor = normalBG;
      }
    }
  });
}
let dezSextas = [ 4, 11, 18, 25 ];
changeFridaysText(dezSextas);

// function displayFridays(fridaysArray) {
//   let getFridayButton = document.querySelector('#btn-friday');
//   let fridays = document.querySelectorAll('.friday');
//   let newFridayText = 'SEXTOU o/';
//   let changedBG = "green";
//   let changedTxt = "SEXTOW!";

//   getFridayButton.addEventListener('click', function() {
//   for (let index = 0; index < fridays.length; index += 1) {
//     if (fridays[index].innerHTML !== newFridayText) {
//         fridays[index].innerHTML = newFridayText;
//         fridays[index].style.backgroundColor = changedBG;
//     } else {
//         fridays[index].innerHTML = fridaysArray[index];
//         fridays[index].style.backgroundColor = 'white'
//       }
//     }
//   })
// };

// let dezFridays = [ 4, 11, 18, 25 ];
// displayFridays(dezFridays);