const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-item-center">
  <span>${todo}</span>
  <i class="fas fa-trash-alt delete"></i>
</li>
  ` ;

  list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
  e.preventDefault();
  // .trim(); avoids the whitespaces
 const todo = addForm.add.value.trim();

 if(todo.length) {
  generateTemplate(todo);
  addForm.reset();
 } else {
   alert ('Please Type Some Todos..!!');
 }
});


// delete todos
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// search todo using keyup event
const filterTodos = (term) => {
  console.log(term);
};
search.addEventListener('keyup', () => {
 const term = search.value.trim();
 filterTodos(term);
});
