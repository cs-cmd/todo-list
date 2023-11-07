export default class Project {
    constructor(name) {
        this.name = name;
        this.items = [];
    }

    getName = () => this.name;
    getItems = () => this.items;
    
    addItem(item) {
        this.items.push(item);
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

    static createWithData(name, items) {
        const retProj = new Project();
        retProj.name = name;
        retProj.items = [];
        items.forEach(e => {
            retProj.items.push(e);
        });

        return retProj;
    }
}