import projectManager from '../model/ProjectManager';
import TodoItem from '../model/TodoItem';
import buttonState from './ButtonState';

const UI = (() => {
    const todoContainer = document.getElementById('main-todo-container');
    const projectContainer = document.getElementById('main-project-container');

    let currentProject = null;


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
        addTodoEntryItem(); 
    };

    const addProjectItem = (project) => {
        // add project filter button to nav
        addProjectButton(project);
    };

    // Add project button to top nav bar
    const addProjectButton = (project) => {
        const addProjectPageItem = document.getElementById('project-item-add-div');

        // add to main project container
        const projectName = project.getName();

        // create project div
        const projectItem = document.createElement('div');
        projectItem.classList.add('item');
        projectItem.classList.add('display');

        // when clicked, display items in project
        projectItem.addEventListener('click', (e) => {
            // if the target is either of the buttons, return
            if(e.target === editButton ||
                e.target === deleteButton) {
                return;
            }

            updateItems(project, projectItem);           
        });

        // create title for project item
        const projectNameHeader = document.createElement('h2');
        projectNameHeader.classList.add('project-title');
        projectNameHeader.innerText = projectName;

        // create buttons section
        const buttonsSection = document.createElement('section');
        buttonsSection.classList.add('item-buttons');

        // create edit and delete buttons
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.type = 'button';

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.type = 'button';
        deleteButton.addEventListener('click', () => {
            const wasDeleted = projectManager.deleteProject(project);

            // if project wasn't deleted, notify user
            if(!wasDeleted) {
                console.log(`:: Project ${project.getName()} was not deleted. ::}`);
                return;
            }

            projectItem.remove();
        });

        // add buttons to button section
        buttonsSection.appendChild(editButton);
        buttonsSection.appendChild(deleteButton);

        // add header and button to parent div
        projectItem.appendChild(projectNameHeader);
        projectItem.appendChild(buttonsSection);

        projectContainer.insertBefore(projectItem, addProjectPageItem);
    };

    const addTodoPageItem = (todoItem, project) => {
        const pageItem = createTodoPageItem(todoItem, project);
        const entryItem = todoContainer.querySelector('#todo-item-add-div');
        todoContainer.insertBefore(pageItem, entryItem);
    };

    // add todo item element to page
    const createTodoPageItem = (todoItem, project) => {
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

        return pageItem;
    };

    // Updates items in todo container
    const updateItems = (project, projButton) => {
        if(!buttonState.changeButton(projButton)) {
            // button is same
            return;
        }
        // clear container and load project elements
        clearContainer();

        loadProject(project);
        currentProject = project;

    };

    const registerEvents = () => {
        // // Add event listener to input, check if project exists
        // projectNameInputField.addEventListener('input', () => {
        //     projectManager.checkIfProjExists(projectNameInputField.value);
        // });

        // // when todo item is submitted, create, add to project, add to page
        // document.getElementById('create-todo-form').addEventListener('submit', (e) => {
        //     e.preventDefault();

        //     const title = titleInput.value;
        //     const dueDate = dueDateInput.value;
        //     const notes = notesField.value;

        //     // get value of priority that is checked
        //     const priority = _.find(priorityRadios, (e) => { return e.checked === true; }).value;
        //     const projectName = projectSelect.value;

        //     // create todo item instance
        //     const newTodo = projectManager.createTodoItem(title, dueDate, notes, priority);

        //     // add instance to chosen project, return bool (if it was added or not)
        //     const wasAdded = projectManager.addItemToProject(projectName, newTodo);

        //     // if item was not added, then max items have been reached, cancel
        //     if (!wasAdded) {
        //         // notify user somehow that todo was not added
        //         console.log(`:: Project '${projectName}' is at capacity. ::`);
        //         return;
        //     }

        //     // get the project associated with the name and add item to page
        //     const project = projectManager.getProject(projectName);
        //     addTodoPageItem(newTodo, project);
        // });

        // // event listener for 'create project' form
        // document.getElementById('create-project-form').addEventListener('submit', (e) => {
        //     e.preventDefault();

        //     const projectName = projectNameInputField.value;

        //     // if project name doesn't exist, add to list and create elements
        //     if(!projectManager.checkIfProjExists(projectName)) { 
        //         // if it doesnt, add project to project manager
        //         const newProj = projectManager.addProject(projectName);

        //         addProjectItem(newProj);
        //     }
        // });

 
    };

    const addProjectEntryItem = () => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('item');
        entryDiv.classList.add('entry');
        entryDiv.id = 'project-item-add-div';

        const projNameField = document.createElement('input');
        projNameField.classList.add('project-name-field');
        projNameField.id = 'project-name-field';
        projNameField.type = 'text';
        projNameField.minLength = '5';
        projNameField.maxLength = '25';
        projNameField.required = true;

        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.innerText = 'Add';
        addButton.addEventListener('click', () => {
            const projectInputVal = document.getElementById('project-name-field').value;

            if(!projectManager.checkIfProjExists(projectInputVal)) {
                const newProj = projectManager.addProject(projectInputVal);

                addProjectItem(newProj);
            }
        });

        entryDiv.appendChild(projNameField);
        entryDiv.appendChild(addButton);
        projectContainer.appendChild(entryDiv);
    };


    const addTodoEntryItem = () => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('item');
        entryDiv.classList.add('entry');
        entryDiv.id = 'todo-item-add-div';

        const todoTitleField = document.createElement('input');
        todoTitleField.type = 'text';
        todoTitleField.id = 'todo-title-field';

        const todoDueDateField = document.createElement('input');
        todoDueDateField.type = 'date';
        todoDueDateField.id = 'todo-date-field';

        const addTodoButton = document.createElement('button');
        addTodoButton.type = 'button';
        addTodoButton.innerText = 'Add';
        addTodoButton.addEventListener('click', () => {
            // make new todo
            const newTodo = new TodoItem(todoTitleField.value, todoDueDateField.value, '', 'Low');
            // if project has max items, done add and return
            if(!projectManager.addItemToProject(currentProject, newTodo)) {
                return;
            }

            console.log(`Adding item to project ${currentProject.getName()}`);
            const pageItem = createTodoPageItem(newTodo, currentProject);

            todoContainer.insertBefore(pageItem, entryDiv);
        });

        entryDiv.appendChild(todoTitleField);
        entryDiv.appendChild(todoDueDateField);
        entryDiv.appendChild(addTodoButton);

        todoContainer.appendChild(entryDiv);

    };

    // initial setup
    const unassigned = projectManager.addProject('Unassigned');
    addProjectItem(unassigned);

    const firstProjButton = projectContainer.querySelector('.display');
    updateItems(unassigned, firstProjButton);

    addProjectEntryItem();

    return { registerEvents, updateItems };
})();

export default UI;