
const ul = document.querySelector('ul');
// ul.remove()

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'New todos added';
  ul.append(li);

});
// const items = document.querySelectorAll('li');
// items.forEach( (item) => {
//   item.addEventListener('click', (e) =>{
//    e.target.remove();
//   });
// });

//  to add EventListener to the new added Todos
ul.addEventListener('click', (e) => {
 // console.log(e.target);
 if(e.target.tagName === 'LI') {
   e.target.remove();
 }
});
