let nameCard = document.getElementById("name-card");
let numberCard = document.getElementById("card-number");
let infoMonth = document.getElementById("info-month");
let infoYear = document.getElementById("info-year");
let infoCvc = document.getElementById("info-cvc");

nameCard.addEventListener("keyup", (event) => {
  let inputText = event.composedPath()[0].value;

  document.querySelector(".texto_name").innerHTML = inputText;
});

numberCard.addEventListener("keyup", (event) => {
  let inputNumber = event.composedPath()[0].value;

  document.querySelector(".texto_number").innerHTML = inputNumber;
});

infoMonth.addEventListener("keyup", (event) => {
  let inputMonth = event.composedPath()[0].value;

  document.querySelector(".texto_month").innerHTML = inputMonth;
});

infoYear.addEventListener("keyup", (event) => {
  let inputYear = event.composedPath()[0].value;

  document.querySelector(".texto_year").innerHTML = inputYear;
});

infoCvc.addEventListener("keyup", (event) => {
  let inputCvc = event.composedPath()[0].value;

  document.querySelector(".texto_cvc").innerHTML = inputCvc;
});
