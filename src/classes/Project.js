import _ from 'lodash';

export default class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    getName = () => this.name;

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const removeIndex = _.findIndex(this.items, (e) => { return e === item; });

        this.items.splice(removeIndex, 1);
    }

    printInfo() {
        console.log(`${this.name} :: ${this.items}`);
    }
}