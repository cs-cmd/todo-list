export class TodoItem {
    constructor(title, date, notes, priority) {
        this.title = title;
        this.dateMade = date;
        this.notes = notes;
        this.isComplete = false;
        this.priority = priority;
    }

    getTitle = () => this.title;
    getDateMade = () => this.dateMade;
    getNotes = () => this.notes;
    isComplete = () => this.isComplete;
    getPriority = () => this.priority;

    changeTitle = (newTitle) => { this.title = newTitle; };
    changeNotes = (newNotes) => { this.notes = newNotes; };
    toggleComplete = () => { this.isComplete = !this.isComplete; };

    printInfo = () => {
        console.log(this.getInfo());
    };

    // formatted like this because `` uses the indentation used in string itself
    getInfo = () => {
        return `title::${this.title}
date::${this.dateMade}
notes::${this.notes}
isComplete::${this.isComplete}
priority::${this.priority}`;
    };
}