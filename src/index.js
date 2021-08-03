import './styles.css';

import { crearTodoHTML, actualizadorDeConteo } from './js/componentes.js';

import { Todo, TodoList } from './classes/index.js';
//import {  Todo  }  from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach(/*todo => */crearTodoHTML/*(todo)*/);
actualizadorDeConteo();
console.log('prueba');


