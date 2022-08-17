// const formCard = document.querySelector("#form-card");

let nameCard = document.getElementById("name-card");
let numberCard = document.getElementById("card-number");
let infoMonth = document.getElementById("info-month");
let infoYear = document.getElementById("info-year");
let infoCvc = document.getElementById("info-cvc");

nameCard.addEventListener("keyup", (event) => {
  let inputText = event.path[0].value;

  document.querySelector(".texto_tarjeta").innerHTML = inputText;
});

numberCard.addEventListener("keyup", (event) => {
  let inputNumber = event.path[0].value;

  document.querySelector(".texto_tarjeta2").innerHTML = inputNumber;
});

infoMonth.addEventListener("keyup", (event) => {
  let inputMonth = event.path[0].value;

  document.querySelector(".texto_tarjeta3").innerHTML = inputMonth;
});

infoYear.addEventListener("keyup", (event) => {
  let inputYear = event.path[0].value;

  document.querySelector(".texto_tarjeta4").innerHTML = inputYear;
});

infoCvc.addEventListener("keyup", (event) => {
  let inputCvc = event.path[0].value;

  document.querySelector(".texto_tarjeta5").innerHTML = inputCvc;
});
