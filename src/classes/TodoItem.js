export class TodoItem {
    constructor(title, date, notes, priority) {
        this.title = title;
        this.dateMade = date;
        this.notes = notes;
        this.isComplete = false;
        this.priority = priority;
        this.owningList = '';
    }

    getTitle = () => this.title;
    getDateMade = () => this.dateMade;
    getNotes = () => this.notes;
    isComplete = () => this.isComplete;
    getPriority = () => this.priority;

    changeTitle = (newTitle) => { this.title = newTitle; }
    changeNotes = (newNotes) => { this.notes = newNotes; }
    toggleComplete = () => { this.isComplete = !this.isComplete; }

    printInfo = () => {
        console.log(this.getInfo());
    };

    getInfo = () => {
        return `title::${this.title}\n
        date::${this.dateMade}\n
        notes::${this.notes}\n
        isComplete::${this.isComplete}\n
        priority::${this.priority}`;
    };

    addToList = (owningList) => {
        this.owningList = owningList;
    };
}