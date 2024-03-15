let list = document.querySelector(".todo-list");
let items = list.children;
let emptyListMessage = document.querySelector(".empty-tasks");
let newItemForm = document.querySelector('.add-form');
let newItemTitle = newItemForm.querySelector('.add-form-input');
let temp = document.querySelector('#task-template').content;
let newTemp = temp.querySelector('.todo-list-item');

let saveList = function() {
    localStorage.setItem('listStorage', list.innerHTML);
}

let toggleEmptyListMessage = function() {
    if(items.length === 0) {
        emptyListMessage.classList.remove('hidden');
        console.log("Всi цiлi виконанi");
    } else {
        emptyListMessage.classList.add('hidden');
    }
}

let addCheckHand = function(item) {
    let checkbox = item.querySelector(".todo-list-input");
    checkbox.addEventListener('change', function() {
        item.remove();
        toggleEmptyListMessage();
        saveList();
    });
}

for(let i = 0; i < items.length; i++) {
    addCheckHand(items[i]);
}

document.addEventListener("DOMContentLoaded", function() {
    let savedList = localStorage.getItem('listStorage');
        list.innerHTML = savedList;
    for(let i = 0; i < items.length; i++) {
        addCheckHand(items[i]);
    }
});

newItemForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let taskText = newItemTitle.value;
    let task = newTemp.cloneNode(true);
    let taskDescription = task.querySelector('span');
    taskDescription.textContent = taskText;
    addCheckHand(task);
    list.appendChild(task);
    toggleEmptyListMessage();
    newItemTitle.value = '';
    saveList();
});