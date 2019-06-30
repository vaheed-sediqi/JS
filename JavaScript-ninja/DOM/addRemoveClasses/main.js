const content = document.querySelector('p');
const btn = document.querySelector('.btn');
console.log(content.classList);

btn.addEventListener('click', (e) => {
  content.classList.toggle('success');
  console.log('bnt is active')
});

const paras = document.querySelectorAll('p');

paras.forEach(para => {
  if (para.innerHTML.includes('error')){
    para.classList.add('error');
  } else {
    para.classList.add('success');
  }
})
