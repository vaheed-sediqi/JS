const scores = [10, 25, 32, 45, 15, 18, 100, 22];

// const filteredScore = scores.filter((score) => {
//  return score > 20;
// });
 
// console.log(filteredScore);


// second example
// const users = [
//     {name: 'Vahid', premium: true},
//     {name: 'Khan', premium: false},
//     {name: 'Ali', premium: false},
//     {name: 'Kabir', premium: true},
//     {name: 'Riza', premium: false}
// ]

// const premiumUsers = users.filter((user) => {
//   return user.premium;
// });

// console.log(premiumUsers);

const people = [
    {name:'vahid', age: 30},
    {name:'jamal', age: 18},
    {name:'nabi', age: 12},
    {name:'sabor', age: 28},
    {name:'khan', age: 29},
    {name:'nadir', age: 65},
]

const canSmoke = people.filter(person => {
    return person.age >= 18;
})

console.log(canSmoke);