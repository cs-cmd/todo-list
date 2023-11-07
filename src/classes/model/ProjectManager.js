import TodoItem from './TodoItem';
import Project from './Project';

class ProjectManager {
    constructor() {
        this.projects = new Map();
    }

    addProject(projectName) {
        const proj = new Project(projectName);
        this.projects.set(projectName, proj);
        return proj;
    }

    addExistingProject(project) {
        this.projects.set(project.getName(), project);
    }

    // if project is a string, query map for object, otherwise return object
    determineProject(project) {
        return typeof project === 'string' ? this.projects.get(project) : project;
    }

    createTodoItem(itemName, itemDueDate, itemNotes, itemPriority) {
        return new TodoItem(itemName, itemDueDate, itemNotes, itemPriority);
    }

    addItemToProject(project, item) {
        const proj = this.determineProject(project);

        return proj.addItem(item);
    }

    getProject(projectName) {
        return this.projects.get(projectName);
    }

    // returns true if project exists, false otherwise (undefined)
    checkIfProjExists(projectName) { 
        return this.projects.get(projectName) ? true : false;
    }

    deleteProject = (project) => {
        return this.projects.delete(project.getName());
    };
}

const projectManager = new ProjectManager();

export default projectManager;