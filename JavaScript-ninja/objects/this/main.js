

// adding methots

let user = {
    name: 'khan',
    age: 35,
    email: 'khan@vahid.com',
    location: 'kabul',
    blogs: ['i love my family', 'why should i work hard'],
    login: () => console.log(user2.name + ' has loged in....'),

    logedBlogs: function () {
        
        console.log(this.age);
    }
}

user.logedBlogs();

// 2nd example

let employee = {
    name: 'Abas',
    dob: 2000,
    location: 'kabul',
    works: ['office cleaning', 'making tea', 'making launch'],

    whatTODo: function(){
        this.works.forEach((work) => {
          console.log(work);
        })
    },
    age: function (){
        let date = new Date(); // date variable gets the full date
        let year = date.getFullYear();
        console.log(`${this.name} is ${year - this.dob} years old`);
    }
}
employee.age();
employee.whatTODo();
