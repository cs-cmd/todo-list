import _ from 'lodash';

export default class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        _.remove(this.items, (e) => {
            return e === item;
        });
    }

    getName = () => this.name;
    clearItems = () => _.remove(this.items);
    getItemAt = (index) => this.items[index]; 
}