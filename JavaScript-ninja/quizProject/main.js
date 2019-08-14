const result = document.querySelector('.result');
const scoreOutPut = document.querySelector('span');
const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    // check the answers

    userAnswer.forEach((answer, index) => {
       if(answer === correctAnswers[index]) {
           score += 25;
       }
    });
    // console.log(score);
    scrollTo(0,0); // it takes the user to the top
    result.classList.remove('d-none');
    scoreOutPut.textContent = `${score}% ninja`;
});

// set timeout fires the function once
// setTimeout( () => {
//   // alert('hello');
// }, 3000);

// setInterval( () => {
//    console.log(i);
// },1000);

let i = 0;
let timer = setInterval( () => {
  i ++;
  alert("Press Ok " + i) ;
   if (i === 5) {
    alert('thats all once more');
    clearInterval(timer);
   }
},1000);