// callbacks
/*
const myFunc = (callbackFunc) => {
    // do something

    let value = 50;
    callbackFunc(value)
};

myFunc(function(value){
    // do somethine

    console.log(value)
})
*/

// callbacks and foreach

let people = ['vahid', 'Khan', 'jan', 'reza', 'ali'];
// forEach methot calls the function for each element insite that array

// people.forEach(function(person){
//     console.log('I love ' + person);
// })

// now lets convet it to arrow function

people.forEach((person, index) => console.log(`Array list is ${person} Array index is ${index}`));

// passing function as a argument

let shoppingList = ['milk', 'rise', 'apple', 'juice', 'cola'];
const listItem = (list, index) => {
    console.log(list + ' ' + index)
}

shoppingList.forEach(listItem); // insteat of passing value we pass listItem function to foreach methot


