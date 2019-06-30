const article = document.querySelector('article');

console.log(article.children);

// console.log(Array.from(article.children));
// const articles = Array.from(article.children);

Array.from(article.children).forEach((child) => {
  child.classList.add('error');
})

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.nextElementSibling);