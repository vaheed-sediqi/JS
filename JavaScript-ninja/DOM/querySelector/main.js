// when we have more then one element for example paragraph
// and we select p it will select the first paragraph
// when we cant find the right selector, inspect select the elemont rigth click on element and copy the selector
document.querySelector('body').style.background = 'pink'
const para = document.querySelector('p').style.color = 'red'; 
const para2 = document.querySelector('body > p:nth-child(4)').style.marginTop = '15';
console.log(para); 

// multipple selector
const paras = document.querySelectorAll('p');   // we cant add style or anything in multi selector
// but we can use forEach with an arrow function and add our style like blue
console.log(paras);

paras.forEach(parag => {
    parag.style.textAlign = 'center';
})

// get an element by ID
const title = document.getElementById('page-title').style.color = 'yellow';
console.log(title);

//get elements by their class name
const allPara = document.getElementsByClassName('para'); // it will select all elements with class para
console.log("Paragraph one ", allPara); // we cant use forEach for this
console.log('first paragraph ',allPara[0]);
// get elemts by thier tag name

const head3 = document.getElementsByTagName('h3');
console.log(head3)
