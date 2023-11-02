import projectManager from '../model/ProjectManager';
import buttonState from './ButtonState';
import _ from 'lodash';

const UI = (() => {
    let hasBeenInit = false;
    let currentProject = null;

    const init = () => {
        if (hasBeenInit) {
            return;
        }
        this.navBar = document.getElementById('todo-nav');
        this.todoContainer = document.getElementById('main-todo-container');
        
        this.titleInput = document.getElementById('title-field');
        this.dueDateInput = document.getElementById('date-field');
        this.notesField = document.getElementById('notes-field');
        this.priorityRadios = document.querySelectorAll('input[name="priority"]');
        this.projectSelect = document.getElementById('project-select');
        
        this.projectNameInputField = document.getElementById('project-name');

        hasBeenInit = true;
    };

    const registerEvents = () => {
        // Add event listener to input, check if project exists
        this.projectNameInputField.addEventListener('input', () => {
            UI.checkProjNameExist(this.projectNameInputField.value);
        });

        // Add event listener to select to update todo items when new project is selected
        this.projectSelect.addEventListener('change', (e) => {
            this.updateItems(e.target.value);
        });

        // when todo item is submitted, create, add to project, add to page
        document.getElementById('create-todo-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const title = this.titleInput.value;
            const dueDate = this.dueDateInput.value;
            const notes = this.notesField.value;
            // get value of priority that is checked
            const priority = _.find(this.priorityRadios, (e) => { return e.checked === true; }).value;
            const projectName = this.projectSpinner.value;

            // create todo item instance
            const newTodo = projectManager.createTodoItem(title, dueDate, notes, priority);

            // add instance to chosen project, return bool (if it was added or not)
            const wasAdded = projectManager.addItem(projectName, newTodo);

            // if item was not added, then max items have been reached, cancel
            if (!wasAdded) {
                console.log(`:: Project '${projectName}' is at capacity. ::`);
                return;
            }
        });

        // event listenerfor 'create project' form
        document.getElementById('create-project-form').addEventListener('submit', (e) => {
            e.preventDefault();

            const projectName = this.projectNameInputField.value;

            // if project name doesn't exist, add to list and create elements
            if(UI.checkProjNameExist(projectName)) { 
                // if it doesnt, add project to project manager
                const newProj = new Project(projectName);
                projectManager.addProject(newProj);

                // add project to selector in 'create todo' form
                todoAddProjectSelect(projectName);

                // add project filter button to nav
                todoAddProjectButton(projectName);
            }
        });
    };

    const addProjectItem = (project) => {
        // add project select
        addProjectSelectOption(project.getName());

        // add project tab
        addProjectButton(project.getName());
    };

    const addTodoItem = (todoItem) => {
        // add item to page
        addTodoPageItem(todoItem);
    };

    // Add project name to project spinner in todo item form
    const addProjectSelectOption = (projectName) => {
        const projectOpt = document.createElement('option');
        projectOpt.value = projectName;
        projectOpt.innerText = projectName;
        projectOpt.classList.add('form-option');

        this.projectSelect.appendChild(projectOpt);
    };

    // Add project button to top nav bar
    const addProjectButton = (projectName) => {
        const projButton = document.createElement('button');
        projButton.classList.add('nav-button');
        projButton.setAttribute('_filter', projectName);
        projButton.innerText = projectName;

        this.navBar.appendChild(projButton);
    };


    // add todo item element to page
    const addTodoPageItem = (todoItem) => {
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

        pageItem.classList.add(prioClass);

        this.todoContainer.appendChild(pageItem);
    };

    // Updates items in todo container
    const updateItems = (project, projButton) => {
        if(!buttonState.changeButton(projButton)) {
            // button is same
            return;
        }

        // clear current children in todo container
        if(this.todoContainer.childElementCount > 0) {
            this.todoContainer.querySelectorAll('*').forEach((e) => { e.remove(); });
        }

        // add each item to todo container
        project.getItems().forEach((e) => { this.addTodoItem(e); });
    };

    return { init, addProjectItem, addTodoItem, updateItems };
})();

UI.init();
UI.registerEvents();


export default UI;