import projectManager from '../model/ProjectManager';
import TodoItem from '../model/TodoItem';
import buttonState from './ButtonState';
import storageWriter from './StorageWriter';

const UI = (() => {
    // global state vars for todo container and project container
    const todoContainer = document.getElementById('main-todo-container');
    const projectContainer = document.getElementById('main-project-container');

    // current project (set when loading project)
    let currentProject = null;

    const clearTodoContainer = () => {
        // clear current children in todo container
        if(todoContainer.childElementCount > 0) {
            todoContainer.querySelectorAll('*').forEach((e) => { e.remove(); });
        }
    };

    // add each item to page, then add todo entry item
    const loadProject = (project) => {
        project.getItems().forEach((item) => {
            addTodoPageItem(item, project);
        });
        addTodoEntryItem(); 
    };

    // add project item
    const addProjectItem = (project) => {
        // add project filter button to nav
        addProjectButton(project);
    };

    // Add project button to top nav bar
    const addProjectButton = (project) => {
        // get 'add project' button
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
        const editButton = createButton('edit');
        editButton.type = 'button';

        // create delete button
        const deleteButton = createButton('delete');
        deleteButton.type = 'button';
        deleteButton.addEventListener('click', () => {
            storageWriter.deleteRecord(project.getName());

            const wasDeleted = projectManager.deleteProject(project);


            if (currentProject === project) {
                clearTodoContainer();
            }

            // if project wasn't deleted, notify user
            if(!wasDeleted) {
                console.log(`:: Project ${project.getName()} was not deleted. ::`);
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

        // insert project before addProjectButton
        projectContainer.insertBefore(projectItem, addProjectPageItem);
    };

    // Create and add todo page item
    const addTodoPageItem = (todoItem, project) => {
        const pageItem = createTodoPageItem(todoItem, project);
        const entryItem = todoContainer.querySelector('#todo-item-add-div');
        todoContainer.insertBefore(pageItem, entryItem);
    };

    // add todo item element to page
    const createTodoPageItem = (todoItem, project) => {
        // create containing div
        const pageItem = document.createElement('div');
        pageItem.classList.add('todo-page-item');

        // on mouse over, if notes is not empty, display preview by slightly enlarging height
        pageItem.addEventListener('mouseover', () => {
            if (todoNotes.innerText.length > 0) {
                todoNotes.classList.add('hovering');
            }
        });

        // remove height change
        pageItem.addEventListener('mouseout', () => {
            todoNotes.classList.remove('hovering');
        });

        // on click, display all text
        pageItem.addEventListener('click', () => {
            if (todoNotes.innerText.length > 0) {
                todoNotes.classList.toggle('dropped');
            }
        });

        // contains all todo info but the notes
        const todoInfo = document.createElement('section');
        todoInfo.classList.add('todo-info');

        // todo title item
        const todoTitle = document.createElement('h1');
        todoTitle.classList.add('todo-title');
        todoTitle.innerText = todoItem.getTitle();

        // todo due date item
        const todoDueDate = document.createElement('h3');
        todoDueDate.classList.add('todo-date');
        todoDueDate.innerText = todoItem.getDueDate();

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

        // todo notes
        const todoNotes = document.createElement('p');
        todoNotes.classList.add('todo-notes');
        todoNotes.innerText = todoItem.getNotes();

        // add button that deletes item from project list 
        const deleteButton = createButton('delete');
        deleteButton.addEventListener('click', () => {
            project.removeItem(todoItem);
            pageItem.remove();
            storageWriter.writeToLocal(project);
        });

        // add all but notes to todo info item
        todoInfo.appendChild(todoTitle);
        todoInfo.appendChild(todoDueDate);
        todoInfo.appendChild(deleteButton);

        // add todo info and notes to page item
        pageItem.appendChild(todoInfo);
        pageItem.appendChild(todoNotes);
    
        // add prio class
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
        // create containing div
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('item');
        entryDiv.classList.add('entry');
        entryDiv.id = 'project-item-add-div';
        
        // create project field name input
        const projNameField = document.createElement('input');
        projNameField.classList.add('project-name-field');
        projNameField.id = 'project-name-field';
        projNameField.type = 'text';
        
        // add button
        const addButton = createButton('add');
        addButton.addEventListener('click', () => {
            const projName = projNameField.value;
            let errorMsg = null;

            if(projName.length < 1) {
                errorMsg = 'The project name must be at least 1 character long';
            }
            else if (projName.length > 25) {
                errorMsg = 'The project name must be at most 25 characters long';
            }
            else if (projectManager.checkIfProjExists(projName)) {
                errorMsg = 'This project already exists';
            }
            else {
                errorMsg = '';
            }

            if(errorMsg) { 
                projNameField.setCustomValidity(errorMsg);
                projNameField.reportValidity();
                return;
            }

            const newProj = projectManager.addProject(projName);
            addProjectItem(newProj);
            projNameField.value = '';

            storageWriter.writeToLocal(newProj);
        });

        entryDiv.appendChild(projNameField);
        entryDiv.appendChild(addButton);

        projectContainer.appendChild(entryDiv);
    };

    // valid types are 'add', 'delete', and 'edit'
    const createButton = (type) => {
        const addButton = document.createElement('button');
        addButton.type = 'button';

        let buttonTypeSrc;
        switch(type) {
        case 'add':
            buttonTypeSrc = '../../../res/images/plus.svg';
            break;
        case 'delete':
            buttonTypeSrc = '../../../res/images/trash.svg';
            break;
        case 'edit':
            buttonTypeSrc = '../../../res/images/edit.svg';
            break;
        default:
            buttonTypeSrc = '../../../res/images/x-circle.svg';
            break;
        }

        const buttonImage = document.createElement('img');
        buttonImage.src = buttonTypeSrc;
        addButton.appendChild(buttonImage);
        addButton.classList.add('page-button');

        return addButton;
    };


    const addTodoEntryItem = () => {
        const todoItemForm = document.createElement('form');
        todoItemForm.classList.add('item');
        todoItemForm.classList.add('entry');
        todoItemForm.method = 'POST';
        todoItemForm.action = '#';
        todoItemForm.id = 'todo-entry-form';

        const todoTitleField = document.createElement('input');
        todoTitleField.type = 'text';
        todoTitleField.id = 'todo-title-field';
        todoTitleField.required = true;

        const todoDueDateField = document.createElement('input');
        todoDueDateField.type = 'date';
        todoDueDateField.id = 'todo-date-field';
        todoDueDateField.required = true;

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

        const addTodoButton = createButton('add');
        addTodoButton.id = 'add-todo-button';
        addTodoButton.type = 'submit';

        prioritySelect.appendChild(lowPrio);
        prioritySelect.appendChild(medPrio);
        prioritySelect.appendChild(highPrio);
        prioritySelect.appendChild(urgePrio);

        const notesField = document.createElement('textarea');
        notesField.id = 'todo-notes-field';
        notesField.placeholder = 'Notes...';

        todoItemForm.appendChild(todoTitleField);
        todoItemForm.appendChild(todoDueDateField);
        todoItemForm.appendChild(prioritySelect);
        todoItemForm.appendChild(addTodoButton);

        todoItemForm.appendChild(notesField);


        todoItemForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // make new todo
            const newTodo = new TodoItem(todoTitleField.value, todoDueDateField.value, notesField.value, prioritySelect.value);
            // if project has max items, done add and return
            projectManager.addItemToProject(currentProject, newTodo);
            
            const pageItem = createTodoPageItem(newTodo, currentProject);

            todoContainer.insertBefore(pageItem, todoItemForm);

            todoTitleField.value = '';
            todoDueDateField.value = null;
            notesField.value = '';

            storageWriter.writeToLocal(currentProject);
        });


        todoContainer.appendChild(todoItemForm);
    };

    // initial setup
    const setup = () => {
        const parsedProjs = storageWriter.loadAllData();

        console.log(parsedProjs);
        
        let firstProj;

        if(parsedProjs === null) {
            firstProj = projectManager.addProject('Unassigned');
            addProjectButton(firstProj);
        }

        else {
            let i = 0;
            const parseLen = parsedProjs.length;
            console.log(parseLen);
            for(let proj in {...parsedProjs}) {

                projectManager.addExistingProject(parsedProjs[proj]);
                addProjectItem(parsedProjs[proj]);
            }

            firstProj = parsedProjs[0];
        }



        const firstProjButton = projectContainer.querySelector('div.item');
        updateItems(firstProj, firstProjButton);

        addProjectEntryItem();
    };


    return { setup };
})();

export default UI;