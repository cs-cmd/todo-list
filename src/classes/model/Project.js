import _ from 'lodash';

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
        const removeIndex = _.findIndex(this.items, (e) => { return e === item; });

        this.items.splice(removeIndex, 1);
    }

    printInfo() {
        console.log(`${this.name} :: ${this.items}`);
    }
}