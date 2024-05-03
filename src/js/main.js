import validator from "validator";

const refs = {
  formElem: document.querySelector(".hero__form"),
};

refs.formElem.addEventListener("submit", onFormElemSubmit);

function onFormElemSubmit(e) {
  const userData = {};
  e.preventDefault();
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    userData[key] = value;
  });
  console.log("============userDataFromConsole============");
  console.log(userData);
  console.log("====================================");
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

const rangeInput = document.querySelectorAll(".profit__range")[0];
const rangeInput2 = document.querySelectorAll(".profit__range")[1];
const displayElement = document.getElementById("displayValue");
const displayElement2 = document.getElementById("displayValue2");
const greenBoxNum = document.getElementById("greenBoxNum");

function updateDisplay() {
  const value = getComputedStyle(rangeInput).getPropertyValue("--value");
  const expression = Math.round(value * 7.5);
  displayElement.textContent = value;
  displayElement2.textContent = expression;
  const e = document.querySelectorAll('input[type="range"].slider-progress')[1];
  e.style.setProperty("--value", expression);
  e.setAttribute("value", expression);
  greenBoxNum.textContent = expression - value;
}
function updateDisplay2() {
  const value2 = getComputedStyle(rangeInput2).getPropertyValue("--value");
  displayElement2.textContent = value2;
}

updateDisplay();
updateDisplay2();

rangeInput.addEventListener("input", updateDisplay);
rangeInput2.addEventListener("input", updateDisplay2);

const fistForm = document.getElementById("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const telInput = document.querySelector("#tel");
const surnameInput = document.querySelector("#surname");

let isFormValid = false;

fistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const name = !validator.isEmpty(nameInput.value);
  const tel = !validator.isEmpty(telInput.value);
  const surname = !validator.isEmpty(surnameInput.value);
  const email = validator.isEmail(emailInput.value);

  if (name === false) {
    displayError(nameInput, "Name is required!");
  } else {
    setSuccess(nameInput);
  }
  if (email === false) {
    displayError(emailInput, "Email is required!");
  } else {
    setSuccess(emailInput);
  }
  if (tel === false) {
    displayError(telInput, "Email is required!");
  } else {
    setSuccess(telInput);
  }
  if (surname === false) {
    displayError(surnameInput, "Email is required!");
  } else {
    setSuccess(surnameInput);
  }
};

const displayError = (element, msg) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error__output");
  errorDisplay.innerText = msg;
  element.parentElement.classList.add("invalid");
  element.parentElement.classList.remove("valid");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error__output");
  errorDisplay.innerText = "";
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("invalid");
};
