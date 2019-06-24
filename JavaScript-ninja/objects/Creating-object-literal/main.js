// object literal

let user = {
    name: 'vahid',
    age: 30,
    email: 'vahid@vahid.com',
    location: 'turey',
    blogs: ['i love my family', 'why should i work hard']
}

console.log(user.name);

// we can also access the properties like below

console.log(user['age']);

console.log(user['location']);

// adding methots

let user2 = {
    name: 'khan',
    age: 35,
    email: 'khan@vahid.com',
    location: 'kabul',
    blogs: ['i love my family', 'why should i work hard'],
    login: () => console.log(user2.name + ' has loged in....')
}

user2.login();