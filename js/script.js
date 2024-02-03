const But = document.querySelector('#myButton');
const Input = document.querySelector('#nameInput');
const list = document.querySelector('#list');
const delBtn = document.querySelector('#delBtn');


But.addEventListener('click', ()=>{
    const newItem = document.createElement('li');
    newItem.className('itemLi');

    // Добавить элемент в список
    // parent.appendChild(item) - добавить элемент item в конец эемента parent
    list.appendChild(newItem);

    // item.classList.add(class) добавить элементу item класс class
    newItem.classList.add('item');

    // Записать содержимое поля ввода в элемент списка
    newItem.textContent = Input.value;

    //очистить поле ввода
    Input.value = ' ';

    // Создать кнопку для удаления добавленного элемента списка
    newItem.appendChild(delBtn);
    

    // Удаления элемента списка
    // parent.removeChild(item) - elfkbnm элемент item из элемента parent
    delBtn.addEventListener('click', ()=>{
        list.removeChild(newItem);
    });
});


list.addEventListener('click', (event)=>{
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);




