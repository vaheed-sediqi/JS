const dob = document.querySelector('.dob');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
const name = document.querySelector('.name');


btn.addEventListener('click', e => {
  e.preventDefault();
const date = new Date();
const year = date.getFullYear();
const ageCalcuator = year - dob.value;

  result.innerHTML = `${name.value} you are ${ageCalcuator} years old `;

});
