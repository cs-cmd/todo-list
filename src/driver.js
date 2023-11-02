import '../res/styles/main-style.css';
import '../res/styles/todo-item-styles.css';
import _ from 'lodash';
import TodoItem from './classes/model/TodoItem';
import Project from './classes/model/Project';
import projectManager from '../src/classes/ProjectManager';

// create global objects for navigation section
const navBar = document.getElementById('todo-nav');
const todoContainer = document.getElementById('main-todo-container');

// create global objects for todo-item form input
const titleInput = document.getElementById('title-field');
const dueDateInput = document.getElementById('date-field');
const notesField = document.getElementById('notes-field');
const priorityRadios = document.querySelectorAll('input[name="priority"]');
const projectSpinner = document.getElementById('project-select');
const projectSelect = document.getElementById('project-select');

// create global objects for project creation
const projectNameInputField = document.getElementById('project-name');

// add default project to projectManager
const defProjectObject = new Project('Unassigned');
projectManager.addProject(defProjectObject);
todoAddProjectSelect('Unassigned');
todoAddProjectButton('Unassigned');

let currentProject = null;
let currentButton = null;

todoUpdateItems('Unassigned');

// Add event listener to input, check if project exists
projectNameInputField.addEventListener('input', () => {
    todoCheckProjNameExist(projectNameInputField.value);
});

// Add event listener to select to update todo items when new project is selected
projectSelect.addEventListener('change', (e) => {
    todoUpdateItems(e.target.value);
});

// when todo item is submitted, create, add to project, add to page
document.getElementById('create-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(':: Creating Todo Item ::');

    const title = titleInput.value;
    const dueDate = dueDateInput.value;
    const notes = notesField.value;
    // get value of priority that is checked
    const priority = _.find(priorityRadios, (e) => { return e.checked === true; }).value;
    const projectName = projectSpinner.value;

    // create todo item instance
    const newTodo = new TodoItem(title, dueDate, notes, priority);

    // add instance to chosen project, return bool (if it was added or not)
    const wasAdded = projectManager.addItem(projectName, newTodo);

    // if item was not added, then max items have been reached, cancel
    if (!wasAdded) {
        console.log(`:: Project '${projectName}' is at capacity. ::`);
        return;
    }

    // create page item and add to page ONLY if the current project's items are being displayed
    if (projectName === currentProject) {
        todoAddTodoPageItem(newTodo);
    }

});

// event listenerfor 'create project' form
document.getElementById('create-project-form').addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(':: Creating New Project ::');

    const projectName = projectNameInputField.value;

    // if project name doesn't exist, add to list and create elements
    if(!todoCheckProjNameExist(projectName)) { 
        // if it doesnt, add project to project manager
        const newProj = new Project(projectName);
        projectManager.addProject(newProj);

        // add project to selector in 'create todo' form
        todoAddProjectSelect(projectName);

        // add project filter button to nav
        todoAddProjectButton(projectName);
    }
});


// Add project name to project spinner in todo item form
function todoAddProjectSelect(projectName) {
    const projectOpt = document.createElement('option');
    projectOpt.value = projectName;
    projectOpt.innerText = projectName;
    projectOpt.classList.add('form-option');
    projectSelect.appendChild(projectOpt);
}

// Add project button to top nav bar
function todoAddProjectButton(projectName) {
    const projButton = document.createElement('button');
    projButton.classList.add('nav-button');
    projButton.setAttribute('_filter', projectName);
    projButton.innerText = projectName;

    projButton.addEventListener('click', () => {
        todoUpdateItems(projectName);
    });

    navBar.appendChild(projButton);
}

// add todo item element to page
function todoAddTodoPageItem(todoItem) {
    const pageItem = document.createElement('div');
    pageItem.innerText = todoItem.getInfo();
    pageItem.classList.add('todo-item');

    todoContainer.appendChild(pageItem);
}

// Determines if the project already exists. if it does, set message, 
// report, return true, else, return false
function todoCheckProjNameExist(projectName) {
    if(projectManager.checkIfExists(projectName)) {
        projectNameInputField.setCustomValidity('This project already exists!');
    }
    else {
        projectNameInputField.setCustomValidity('');
        return false;
    }
    projectNameInputField.reportValidity();
    return true;
}

function todoUpdateItems(projectName) {
    const todoButton = navBar.querySelector(`[_filter=${projectName}]`);

    // if project name is current project, no need to rerender
    if (projectName === currentProject) {
        console.log(`:: Project '${projectName}' is currently in focus; returning. ::`);
        return;
    }

    // clear current children in todo container
    if(todoContainer.childElementCount > 0) {
        todoContainer.querySelectorAll('*').forEach((e) => { e.remove(); });
    }

    const project = projectManager.getProject(projectName);

    // add each item to todo container
    project.getItems().forEach((e) => { todoAddTodoPageItem(e); });

    todoButton.classList.add('is-inflated');
    if (currentButton !== null) {
        currentButton.classList.remove('is-inflated');
    }

    currentProject = projectName;
    currentButton = todoButton;
}