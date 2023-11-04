import projectManager from '../model/ProjectManager';
import buttonState from './ButtonState';
import _, { update } from 'lodash';

const UI = (() => {
    const todoContainer = document.getElementById('main-todo-container');

    const titleInput = document.getElementById('title-field');
    const dueDateInput = document.getElementById('date-field');
    const notesField = document.getElementById('notes-field');
    const priorityRadios = document.querySelectorAll('input[name="priority"]');
    const projectSelect = document.getElementById('project-select');
    
    const projectNameInputField = document.getElementById('project-name');


    // initial setup
    const unassigned = projectManager.addProject('Unassigned');
    addProjectItem(unassigned);

    const clearContainer = () => {
        // clear current children in todo container
        if(todoContainer.childElementCount > 0) {
            todoContainer.querySelectorAll('*').forEach((e) => { e.remove(); });
        }
    };

    const loadProject = (project) => {
        project.getItems().forEach((item) => {
            addTodoPageItem(item, project);
        });
    };

    const registerEvents = () => {
        // Add event listener to input, check if project exists
        projectNameInputField.addEventListener('input', () => {
            projectManager.checkIfProjExists(projectNameInputField.value);
        });

        // when todo item is submitted, create, add to project, add to page
        document.getElementById('create-todo-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const title = titleInput.value;
            const dueDate = dueDateInput.value;
            const notes = notesField.value;

            // get value of priority that is checked
            const priority = _.find(priorityRadios, (e) => { return e.checked === true; }).value;
            const projectName = projectSelect.value;

            // create todo item instance
            const newTodo = projectManager.createTodoItem(title, dueDate, notes, priority);

            // add instance to chosen project, return bool (if it was added or not)
            const wasAdded = projectManager.addItemToProject(projectName, newTodo);

            // if item was not added, then max items have been reached, cancel
            if (!wasAdded) {
                // notify user somehow that todo was not added
                console.log(`:: Project '${projectName}' is at capacity. ::`);
                return;
            }

            // get the project associated with the name and add item to page
            const project = projectManager.getProject(projectName);
            addTodoPageItem(newTodo, project);
        });

        // event listener for 'create project' form
        document.getElementById('create-project-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const projectName = projectNameInputField.value;

            // if project name doesn't exist, add to list and create elements
            if(!projectManager.checkIfProjExists(projectName)) { 
                // if it doesnt, add project to project manager
                const newProj = projectManager.addProject(projectName);

                addProjectItem(newProj);
            }
        });
    };

    const addProjectItem = (project) => {
        // add project to selector in 'create todo' form
        addProjectSelectOption(project);

        // add project filter button to nav
        addProjectButton(project);
    };

    // Add project name to project spinner in todo item form
    const addProjectSelectOption = (project) => {
        const projectName = project.getName();

        const projectOpt = document.createElement('option');
        projectOpt.value = projectName;
        projectOpt.innerText = projectName;
        projectOpt.classList.add('form-option');

        projectSelect.appendChild(projectOpt);
    };

    // Add project button to top nav bar
    const addProjectButton = (project) => {
        const navBar = document.getElementById('todo-nav');
        const projectName = project.getName();

        const projButton = document.createElement('button');
        projButton.classList.add('nav-button');
        projButton.setAttribute('_filter', projectName);
        projButton.innerText = projectName;

        projButton.addEventListener('click', () => {
            clearContainer();
            
            // load items and change button styles
            updateItems(project, projButton);
        });

        // add button to div that deletes project from project manager and deletes self from page
        navBar.appendChild(projButton);
    };


    // add todo item element to page
    const addTodoPageItem = (todoItem, project) => {
        const todoContainer = document.getElementById('main-todo-container');

        const pageItem = document.createElement('div');
        pageItem.innerText = todoItem.getInfo();
        pageItem.classList.add('todo-item');

        // determine urgency CSS class based on priority of todo item
        let prioClass;
        switch(todoItem.getPriority()) {
        case 'Low':
            prioClass = 'low-prio';
            break;
        case 'Medium':
            prioClass = 'med-prio';
            break;
        case 'High':
            prioClass = 'high-prio';
            break;
        case 'Urgent':
            prioClass = 'urge-prio';
            break;
        }

        // add button that deletes item from project list 
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            project.removeItem(todoItem);
            pageItem.remove();
        });

        pageItem.appendChild(deleteButton);
    
        pageItem.classList.add(prioClass);

        todoContainer.appendChild(pageItem);
    };

    // Updates items in todo container
    const updateItems = (project, projButton) => {
        if(!buttonState.changeButton(projButton)) {
            // button is same
            return;
        }

        loadProject(project);
    };

    return { registerEvents };
})();

export default UI;