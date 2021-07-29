/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ todoList)
});

;// CONCATENATED MODULE: ./src/classes/todo.class.js
function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Todo=/*#__PURE__*/function(){function a(b){_classCallCheck(this,a),this.tarea=b,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}return _createClass(a,null,[{key:"fromJson",value:function fromJson(b){var c=b.id,d=b.tarea,e=b.completado,f=b.creado,g=new a(d);return g.id=c,g.completado=e,g.creado=f,g}}]),a}();
;// CONCATENATED MODULE: ./src/js/componentes.js
function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}//Referencias en el HTML
var divTodoList=document.querySelector(".todo-list"),txtInput=document.querySelector(".new-todo"),btnBorrar=document.querySelector(".clear-completed"),ulFiltros=document.querySelector(".filters"),anchorFiltros=document.querySelectorAll(".filtro");var crearTodoHTML=function(a){var b="\n    <li class=\"".concat(a.completado?"completed":"","\" data-id=\"").concat(a.id,"\">\n        <div class=\"view\">\n            <input class=\"toggle\" type=\"checkbox\" ").concat(a.completado?"checked":"",">\n            <label>").concat(a.tarea,"</label>\n            <button class=\"destroy\"></button>\n        </div>\n        <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>\n    "),c=document.createElement("div");return c.innerHTML=b,divTodoList.append(c.firstElementChild),c.firstElementChild};//Eventos
txtInput.addEventListener("keyup",function(a){if(13===a.keyCode&&0<txtInput.value.length){var b=new Todo(txtInput.value);todoList.nuevoTodo(b),crearTodoHTML(b),txtInput.value=""}}),divTodoList.addEventListener("click",function(a){var b=a.target.localName,c=a.target.parentElement.parentElement,d=c.getAttribute("data-id");b.includes("input")?(todoList.marcarCompletado(d),c.classList.toggle("completed")):b.includes("button")&&(todoList.eliminarTodo(d),divTodoList.removeChild(c))}),btnBorrar.addEventListener("click",function(){todoList.eliminarCompletados();for(var a,b=divTodoList.children.length-1;0<=b;b--)a=divTodoList.children[b],a.classList.contains("completed")&&divTodoList.removeChild(a)}),ulFiltros.addEventListener("click",function(a){var b=a.target.text;if(console.log(a.target.txt),!!b){anchorFiltros.forEach(function(a){return a.classList.remove("selected")}),a.target.classList.add("selected");var c,d=_createForOfIteratorHelper(divTodoList.children);try{for(d.s();!(c=d.n()).done;){var e=c.value;e.classList.remove("hidden");var f=e.classList.contains("completed");"Pendientes"===b?f&&e.classList.add("hidden"):"Completados"===b?f||e.classList.add("hidden"):void 0}}catch(a){d.e(a)}finally{d.f()}}});
;// CONCATENATED MODULE: ./src/classes/todo-list.class.js
function todo_list_class_createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=todo_list_class_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function todo_list_class_unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return todo_list_class_arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?todo_list_class_arrayLikeToArray(a,b):void 0}}function todo_list_class_arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function todo_list_class_classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function todo_list_class_defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function todo_list_class_createClass(a,b,c){return b&&todo_list_class_defineProperties(a.prototype,b),c&&todo_list_class_defineProperties(a,c),a}var TodoList=/*#__PURE__*/function(){function a(){todo_list_class_classCallCheck(this,a),this.cargarLocaleStorage()}return todo_list_class_createClass(a,[{key:"nuevoTodo",value:function nuevoTodo(a){this.todos.push(a),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function eliminarTodo(a){this.todos=this.todos.filter(function(b){return b.id!=a}),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function marcarCompletado(a){var b,c=todo_list_class_createForOfIteratorHelper(this.todos);try{for(c.s();!(b=c.n()).done;){var d=b.value;if(console.log(a,d.id),d.id==a){d.completado=!d.completado,this.guardarLocalStorage();break}}}catch(a){c.e(a)}finally{c.f()}}},{key:"eliminarCompletados",value:function eliminarCompletados(){this.todos=this.todos.filter(function(a){return!a.completado}),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocaleStorage",value:function cargarLocaleStorage(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(function(a){return Todo.fromJson(a)})}}]),a}();
;// CONCATENATED MODULE: ./src/index.js
//import {  Todo  }  from './classes/todo.class.js';
//import { TodoList } from './classes/todo-list.class';
var todoList=new TodoList;todoList.todos.forEach(/*todo => */crearTodoHTML/*(todo)*/),console.log("todos: ",todoList.todos);
/******/ })()
;