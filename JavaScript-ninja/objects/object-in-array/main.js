
// Object in array

// const blogs = [
//     {title: 'Fucts about CSS3', likes: 30},
//     {title: 'ReactJs or AngularJs', likes: 500}
// ]

// blogs.forEach((blog) => {
//   console.log(blog.title, blog.likes + ' people likes this');
// })

let employee = {
    name: 'Abas',
    age: 30,
    email: 'abas@gmail.com',
    location: 'Bamyan',
    blogs: [
        {title: 'Fucts about CSS3', likes: 30},
        {title: 'ReactJs or AngularJs', likes: 500}
    ],
    login: function(){
      console.log(this.name +' is Loged in');
    },
    // above functon and blew function work the same
    logBlogs() {
      console.log(`${this.name} has written the following blogs:`);
      this.blogs.forEach(blog => {
          console.log(blog.title, blog.likes + ' Likes');
      })
    }
}

employee.login();
employee.logBlogs();

