class DOMManipulator {
    // ???

    constructor() {
        // create global objects for navigation section
        this.navBar = document.getElementById('todo-nav');
        this.todoContainer = document.getElementById('main-todo-container');

        // create global objects for todo-item form input
        this.titleInput = document.getElementById('title-field');
        this.dueDateInput = document.getElementById('date-field');
        this.notesField = document.getElementById('notes-field');
        this.priorityRadios = document.querySelectorAll('input[name="priority"]');
        this.projectSpinner = document.getElementById('project-select');
        this.projectSelect = document.getElementById('project-select');

        // create global objects for project creation
        this.projectNameInputField = document.getElementById('project-name');
    };

    
}