import '../res/styles/main-style.css';
import '../res/styles/todo-item-styles.css';
import _ from 'lodash';
import TodoItem from './classes/TodoItem';
import Project from './classes/Project';
import projectManager from '../src/classes/ProjectManager';

// create global objects for todo-item form input
const titleInput = document.getElementById('title-field');
const dueDateInput = document.getElementById('date-field');
const notesField = document.getElementById('notes-field');
const priorityRadios = document.querySelectorAll('input[name="priority"]');
const projectSpinner = document.getElementById('project-select');
const projectSelect = document.getElementById('project-select');

// create global objects for project creation
const projectNameInputField = document.getElementById('project-name');

// add default project to spinner
const defProject = document.createElement('option');
defProject.value = 'Unassigned';
defProject.innerText = 'Unassigned';
defProject.checked = true;
projectSelect.appendChild(defProject);

// add default project to projectManager
const defProjectObject = new Project('Unassigned');
projectManager.addProject(defProjectObject);

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
    console.log(projectName);

    // create todo item instance
    const newTodo = new TodoItem(title, dueDate, notes, priority);

    // add instance to chosen project
    projectManager.addItem(projectName, newTodo);

    // create page item

    // add item to page
});

document.getElementById('create-project-form').addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(':: Creating New Project ::');

    // check if project name exists
    const projectName = projectNameInputField.value;
    if(projectManager.checkIfExists(projectName)) {
        console.log(`:: Project ${projectName} already exists; exiting. ::`);
        return;
    }

    // if it doesnt, add project to project manager
    const newProj = new Project(projectName);
    projectManager.addProject(newProj);

    // add project name to project spinner in todo item form
    const newProjSelect = document.createElement('option');
    newProjSelect.value = projectName;
    newProjSelect.innerText = projectName;
    projectSelect.appendChild(newProjSelect);

    // add project filter button to nav
});

