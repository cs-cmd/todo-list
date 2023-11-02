export default class TodoItem {
    constructor(title, dueDate, notes, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
        this.complete = false;
    }

    getTitle = () => this.title;
    getDueDate = () => this.dueDate;
    getNotes = () => this.notes;
    getPriority = () => this.priority;
    isComplete = () => this.complete;
    toggleComplete = () => { this.complete = !this.complete; };

    getInfo = () => { return`${this.title} :: ${this.dueDate} :: ${this.notes} :: ${this.priority} :: ${this.complete}`; };
    printInfo = () => { console.log(this.getInfo()); };
}