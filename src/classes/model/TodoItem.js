export default class TodoItem {
    constructor(title, dueDate, notes, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.notes = notes;
        this.priority = priority;
    }

    getTitle = () => this.title;
    getDueDate = () => this.dueDate;
    getNotes = () => this.notes;
    getPriority = () => this.priority;

    getInfo = () => { return`${this.title} :: ${this.dueDate} :: ${this.notes} :: ${this.priority}`; };
    printInfo = () => { console.log(this.getInfo()); };
}