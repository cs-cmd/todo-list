import { format, parseISO } from 'date-fns';
import { todoMaker } from './util/TodoMaker';
import '../res/styles/main-style.css';
import '../res/styles/todo-item-styles.css';
import _ from 'lodash';
import projectManager from './util/ProjectManager';
import Project from './classes/Project';

const todoContainer = document.getElementById('main-todo-container');

function addDefaultProject() {
    const defProject = document.createElement('option');
    defProject.value = 'unassigned';
    defProject.innerText = 'Unassigned';
    defProject.checked = true;
    document.getElementById('project').appendChild(defProject);
}

// create page element and insert into 
document.querySelector('#create-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title-field').value;
    const dateField = document.getElementById('date-field');
    const date = format(parseISO(dateField.value), 'MM/dd/yyyy');
    const notes = document.getElementById('notes-field').value;
    const radios = document.getElementsByName('priority');
    const prio = _.find(radios, function(item) { return item.checked === true; }).value; // get checked priority's value
    const owningProject = document.getElementById('project').value;

    const todoItem = todoMaker.makeItem(title, date, notes, prio);
    todoItem.printInfo();
    createTodoItem(todoItem);
});


function createTodoItem(todo) {
    const divEle = document.createElement('div');
    divEle.innerText = todo.getInfo();
    divEle.classList.add('todo-item');

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';

    // remove item from project list 
    removeButton.addEventListener('click', (e) => {
        console.log(':: Removing item ::');
        // remove from list
        const itemElement = e.target.parentNode;
        itemElement.remove();
    });
    
    divEle.appendChild(editButton);
    divEle.appendChild(removeButton);


    todoContainer.appendChild(divEle);
}

document.querySelector('#task-owner-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // create new project in project manager
    const projectName = document.getElementById('owner-name').value;
    const newProj = new Project(projectName);
    projectManager.addProject(newProj);

    // create new UI element
    const projectSelect = document.getElementById('project');
    const newOption = document.createElement('option');
    newOption.innerText = projectName;
    newOption.value = projectName.toLowerCase();
    projectSelect.appendChild(newOption);

    // create new button to view 
    const navSection = document.getElementById('todo-nav');
    const navButton = document.createElement('button');
    navButton.type = 'button';
    navButton.innerText = projectName;
    navButton.classList.add('nav-button');
    navSection.appendChild(navButton);
});

addDefaultProject();