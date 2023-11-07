import Project from '../model/Project';
import TodoItem from '../model/TodoItem';

const storageWriter = (() => {
    const local = window.localStorage;

    const writeToLocal = (project) => {
        const projJSON = JSON.stringify(project);

        local.setItem(project.getName(), projJSON);
    };

    const readFromLocal = (projectName) => {
        const projectJSON = local.getItem(projectName);

        if(projectJSON === undefined) {
            return null;
        }

        const object = JSON.parse(projectJSON);

        const todoItems = [];
        object.items.forEach(e => {
            console.log(e);
            const addTodo = new TodoItem(e.title, e.dueDate, e.notes, e.priority);

            todoItems.push(addTodo);
        });

        return Project.createWithData(object.name, todoItems);

    };

    const deleteRecord = (projectName) => {
        local.removeItem(projectName);
    };




    return { writeToLocal, readFromLocal, deleteRecord };
})();

export default storageWriter;

