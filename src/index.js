import './styles.css';

import { crearTodoHTML } from './js/componentes.js';

import { Todo, TodoList } from './classes/index.js';
//import {  Todo  }  from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach(/*todo => */crearTodoHTML/*(todo)*/);

console.log('todos: ', todoList.todos);

