
// get a reference to the 'ul'
const ul = document.querySelector('.people');
let people = ['vahid', 'Khan', 'jan', 'reza', 'ali'];


// create a variable = to an empty template
let demo = ``;

people.forEach(person => {
       // create a html template = to demo
       demo += `<li style="color: purple">${person}</li>`;
})

ul.innerHTML = demo;






