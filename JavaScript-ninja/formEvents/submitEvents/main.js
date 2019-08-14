const form = document.querySelector('.signup-form');
const username = document.getElementById('username');
const output = document.querySelector('.output');
const pattern = /[a-z]{6,}/;

// form.addEventListener('submit', e => {
//     e.preventDefault(); // it avoid the default aciton of the event thats refreshing the page

//     const pattern = /[a-z]{6,}/;

//     let result = pattern.test(username);
    
//     if (result) {
//         console.log(username + ' login success!')
//         output.innerHTML = `Login Successful ${username.value}, Welcome to your profile`;
//     }
//     else {
//         output.innerHTML = 'Something went wrong, please try again!';
//     }
// });

// regular expressions
// const pattern = /[a-z]{6,}/;


// let result = pattern.test(username);

// if (result == true) {
//     console.log(username + ' login success!')
//     output.innerHTML = username;
// }
// else {
//     output.innerHTML = 'false';
// }

// live feedback

username.addEventListener('keyup', e => {
    output.textContent=(e.target.value, username.value);
})