const link = document.querySelector('a');
// getting Attribute
console.log(link.getAttribute('href'));

// setting and changing Attribute
link.setAttribute('href', 'www.facebook.com');
link.innerText = 'Facebook.com'
console.log(link.getAttribute('href'));



// second example
const pic = document.querySelector('img');

//getting attribute
console.log('image src is ', pic.getAttribute('src'));
console.log('image alt is ', pic.getAttribute('alt'));
// setting attribute

pic.setAttribute('src', './profile-pic.jpg');
pic.setAttribute('alt', 'image changed to profile pic');

// 3th example 

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');

console.log(mssg.getAttribute('class'));


