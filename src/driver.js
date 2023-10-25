import { TodoItem } from './classes/TodoItem';
import { Priority } from './util/Priority';
import { format, parseISO } from 'date-fns';
import { todoMaker } from './util/TodoMaker';
import '../res/styles/main-style.css';
import { _ } from 'lodash';

const titleField = document.getElementById('title-field');
const dateField = document.getElementById('date-field');
const notesField = document.getElementById('notes-field');
const radios = document.getElementsByName('priority');


document.querySelector('#create-todo-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleField.value;
    const date = format(parseISO(dateField.value), 'MM/dd/yyyy');
    const notes = notesField.value;
    const prio = _.find(radios, function(item) { return item.checked === true; }).value; // get checked priority's value
    
    const todoItem = todoMaker.makeItem(title, date, notes, prio);
    todoItem.printInfo();
});