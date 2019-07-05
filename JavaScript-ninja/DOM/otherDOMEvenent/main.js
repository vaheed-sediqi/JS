// copy Event

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  alert('CopyRight 2019, All right reserved');
})

// mousemove Event

const box = document.querySelector('.box');
box.addEventListener('mousedown', e => {
  console.log(e.offsetX);
});
