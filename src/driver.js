import { TodoItem } from './classes/TodoItem';
import { Priority } from './util/Priority';
import { format, parseISO } from 'date-fns';
import { todoMaker } from './util/TodoMaker';
import '../res/styles/main-style.css';
import '../res/styles/todo-item-styles.css';
import _ from 'lodash';

const titleField = document.getElementById('title-field');
const dateField = document.getElementById('date-field');
const notesField = document.getElementById('notes-field');
const radios = document.getElementsByName('priority');
const todoContainer = document.getElementById('main-todo-container');


document.querySelector('#create-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleField.value;
    const date = format(parseISO(dateField.value), 'MM/dd/yyyy');
    const notes = notesField.value;
    const prio = _.find(radios, function(item) { return item.checked === true; }).value; // get checked priority's value
    
    const todoItem = todoMaker.makeItem(title, date, notes, prio);
    todoItem.printInfo();
    createTodoItem(todoItem);
});

function createTodoItem(todo) {
    const divEle = document.createElement('div');
    divEle.innerText = todo.getInfo();
    divEle.classList.add('todo-item');
    todoContainer.appendChild(divEle);
}