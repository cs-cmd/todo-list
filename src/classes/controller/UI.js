import projectManager from '../model/ProjectManager';
import TodoItem from '../model/TodoItem';
import buttonState from './ButtonState';

const UI = (() => {
    const todoContainer = document.getElementById('main-todo-container');
    const projectContainer = document.getElementById('main-project-container');

    let currentProject = null;

    const clearTodoContainer = () => {
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

        /* <div class="todo-page-item">
<h1 class="todo-title">Title</h1>
<h3 class="todo-date">Due Date:</h3>
<h5 class="todo-urgency">Urgency</h5>
<p class="todo-notes"> */

        const pageItem = document.createElement('div');
        pageItem.classList.add('todo-item');

        const todoTitle = document.createElement('h1');
        todoTitle.classList.add('todo-title');
        todoTitle.innerText = todoItem.getTitle();

        const todoDueDate = document.createElement('h3');
        todoDueDate.classList.add('todo-date');
        todoDueDate.innerText = todoItem.getDueDate();

        const todoPriority = document.createElement('h5');
        todoPriority.innerText = todoItem.getPriority();

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

        const todoNotes = document.createElement('p');
        todoNotes.classList.add('todo-notes');
        todoNotes.innerText = todoItem.getNotes();
        todoNotes.addEventListener('click', (e) => {
            todoNotes.classList.toggle('dropped');
        });

        // add button that deletes item from project list 
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            project.removeItem(todoItem);
            pageItem.remove();
        });

        pageItem.appendChild(todoTitle);
        pageItem.appendChild(todoDueDate);
        pageItem.appendChild(todoPriority);
        pageItem.appendChild(todoNotes);
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
        clearTodoContainer();

        loadProject(project);
        currentProject = project;

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
        addTodoButton.id = 'add-todo-button';
        addTodoButton.type = 'button';
        addTodoButton.innerText = 'Add';
        addTodoButton.addEventListener('click', () => {            
            // make new todo
            const newTodo = new TodoItem(todoTitleField.value, todoDueDateField.value, notesField.value, prioritySelect.value);
            // if project has max items, done add and return
            if(!projectManager.addItemToProject(currentProject, newTodo)) {
                return;
            }
            const pageItem = createTodoPageItem(newTodo, currentProject);

            todoContainer.insertBefore(pageItem, entryDiv);
        });

        const prioritySelect = document.createElement('select');
        prioritySelect.id = 'priority-select';

        const lowPrio = document.createElement('option');
        lowPrio.innerText = 'Low Priority';
        lowPrio.value = 'Low';
        lowPrio.selected = true;

        const medPrio = document.createElement('option');
        medPrio.innerText = 'Medium Priority';
        medPrio.value = 'Medium';

        const highPrio = document.createElement('option');
        highPrio.innerText = 'High Priority';
        highPrio.value = 'High';

        const urgePrio = document.createElement('option');
        urgePrio.innerText = 'Urgent Priority';
        urgePrio.value = 'Urgent';

        prioritySelect.appendChild(lowPrio);
        prioritySelect.appendChild(medPrio);
        prioritySelect.appendChild(highPrio);
        prioritySelect.appendChild(urgePrio);


        const notesField = document.createElement('textarea');
        notesField.id = 'todo-notes-field';
        notesField.placeholder = 'Notes...';

        entryDiv.appendChild(todoTitleField);
        entryDiv.appendChild(todoDueDateField);
        entryDiv.appendChild(prioritySelect);
        entryDiv.appendChild(notesField);

        entryDiv.appendChild(addTodoButton);

        todoContainer.appendChild(entryDiv);

    };

    // initial setup
    const setup = () => {
        
        const unassigned = projectManager.addProject('Unassigned');
        addProjectItem(unassigned);

        const firstProjButton = projectContainer.querySelector('div.item');
        updateItems(unassigned, firstProjButton);

        addProjectEntryItem();
    };


    return { setup };
})();

export default UI;