const content = document.querySelector('.content');

console.log(content.innerHTML);


// content.innerHTML += '<h1>This is an h1 element</h1>'; // += the oreginal contnet stais but a new content will be added
const people = ['Karim', 'Habib', 'Ali', 'Riza'];

people.forEach(person => {
    content.innerHTML += `<h2>${person}</h2>`; // insteat of += if we use = it will only display the last index of array and overwrite others

})