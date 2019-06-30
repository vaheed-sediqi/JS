//  setting margin

const title = document.querySelector('h1');
console.log(title.style);
// title.setAttribute('style', 'margin: 50px;');

title.style.margin = '50px';
title.style.color = 'red';
title.style.fontSize = '60px'


const center = document.querySelector('.center');
// console.log(center);
const btn = document.querySelector('.btn');

// btn.addEventListener('click', function (e) {
//   center.style.color = 'pink';
//   center.style.marginLeft = 'auto';
//   center.style.marginRight = 'auto';
//   center.style.borderBottom = '1px solid gray';
// });
btn.addEventListener('click', function(e) {
  console.log(center.class);
  center.classList.toggle('style');
})

// window.addEventListener('mousemove', function(e) {
//   console.log(center.class);
//   center.classList.toggle('style');
// })
