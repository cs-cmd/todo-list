export default class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.maxItems = 15;
    }

    getName = () => this.name;
    getItems = () => this.items;
    
    addItem(item) {
        if (this.items.length + 1 > this.maxItems) {
            return false;
        }
        this.items.push(item);
        return true;
    }

    removeItem(item) {
        const len = this.items.length;
        for (let i = 0; i < len; ++i) {
            if (this.items[i] === item) {
                this.items.splice(i, 1);
                return;
            }
        }
    }

    printInfo() {
        console.log(`${this.name} :: ${this.items}`);
    }
}