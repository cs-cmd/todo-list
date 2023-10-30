import { TodoItem } from '../classes/TodoItem';

class TodoMaker {
    constructor() {
        console.log(':: Making TodoMaker ::');
    }

    makeItem(title, dueDate, notes, prio) {
        return new TodoItem(title, dueDate, notes, prio);
    }

    makeList(listName) {

    }

    makeProject(projectName) {

    }
}

export const todoMaker = new TodoMaker();