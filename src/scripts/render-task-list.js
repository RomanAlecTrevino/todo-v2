// Storage for new lists
export const lists = [];

export const listContainer = document.querySelector('.tasks-list');

export const addTask = () => {
    const addTaskForm = document.querySelector('[data-task-form]');
    addTaskForm.addEventListener('submit', event => {
        event.preventDefault();
        const userTaskInput = document.querySelector('[data-task-input]');
        if(userTaskInput.value == null || userTaskInput.value === '') return;
        const newTaskObject = createTaskObject(userTaskInput.value);
        lists.push(newTaskObject);
        addTaskForm.reset();
        console.log(lists);
        renderLists();
    })
}

export function renderLists() {
    clearElement(listContainer);
    // Need to create new li
    lists.forEach(list => {
        const newTask = document.createElement('li');
        newTask.classList.add('new-task');
        newTask.innerText = list.name;
        listContainer.appendChild(newTask);
    })
}

export function addActiveClass() {
    
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createTaskObject(value) {
    return {name: value, id: Date.now().toString()};
}