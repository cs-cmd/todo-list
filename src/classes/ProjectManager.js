class ProjectManager {
    constructor() {
        this.projects = new Map();
    }

    addProject(project) {
        this.projects.set(project.getName(), project);
    }

    // if project is a string, query map for object, otherwise return object
    determineProject(project) {
        return typeof project === 'string' ? this.projects.get(project) : project;
    }

    addItem(project, item) {
        const proj = this.determineProject(project);

        return proj.addItem(item);
    }

    checkIfExists(projectName) {
        return this.projects.get(projectName);
    }

    getProject(projectName) {
        return this.projects.get(projectName);
    }
}

const projectManager = new ProjectManager();

export default projectManager;