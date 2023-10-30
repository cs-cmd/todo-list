import Project from '../classes/Project';
import _ from 'lodash';

class ProjectManager {
    constructor() {
        const def = new Project('Unassigned');
        this.projects = [];
        this.unassignedIndex = this.projects.push(def) - 1;
    }

    addProject(proj) {
        this.projects.push(proj);
    }

    deleteProject(name, removeAll) {
        // find array based on name
        const projectIndex = _.indexOf(this.projects, (e) => { return e.getName() === name; });
        const project = this.projects[projectIndex];

        // error, return
        if (projectIndex < 0) {
            console.log(`:: Project '${name}' was not found. ::`);
            return;
        }

        // deletes all objects from chosen array
        // if user wants to keep the tasks, assign them to 'Unassigned' project
        if(!removeAll) {
            for(let i = 0; i < project.length; ++i) {
                this.projects[this.unassignedIndex].push(project.getItemAt(i));
            } 
        }
        project.clearItems();
        this.projects.splice(projectIndex, 1);
    }

    removeItem(project, item) {
        project.removeItem(item);
    }
}

const projectManager = new ProjectManager();

export default projectManager;