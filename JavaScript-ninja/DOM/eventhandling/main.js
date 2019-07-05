// const button = document.querySelector('button');
//
// button.addEventListener('click', () => {
//   console.log('btn worked')
// });

const items = document.querySelectorAll('li');

items.forEach( (item) => {
  // console.log(item.innerText);
  item.addEventListener('click', (e) =>{
    // console.log(e.target);
    e.target.style.textDecoration = 'line-through';
    e.target.style.color = 'lightgray';

    // by below examles we can remove items
    // we can also use item.style.display = 'none'
    // e.target.style.display = 'none';
  });
});
