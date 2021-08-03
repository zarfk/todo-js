import {Todo} from '../classes';
import {todoList} from '../index';


//Referencias en el HTML
const divTodoList      = document.querySelector('.todo-list');
const txtInput         = document.querySelector('.new-todo');
const btnBorrar        = document.querySelector('.clear-completed');
const ulFiltros        = document.querySelector('.filters');
const anchorFiltros    = document.querySelectorAll('.filtro');
const contador         = document.getElementsByTagName('strong')[0];


export const crearTodoHTML = ( todo ) => {

 
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}


//Eventos
txtInput.addEventListener('keyup', (event) =>{
    
    if(event.keyCode === 13 && txtInput.value.length > 0){

        const nuevoTodo = new Todo( txtInput.value );

        todoList.nuevoTodo(nuevoTodo);

        crearTodoHTML(nuevoTodo);
        txtInput.value = '';
        actualizadorDeConteo();

    }

});

divTodoList.addEventListener('click', (evento) => {

    const nombreElemento = evento.target.localName;
    const todoElemento = evento.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
        actualizadorDeConteo();
    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
        actualizadorDeConteo();
    }
    
});

btnBorrar.addEventListener('click', () =>{

    todoList.eliminarCompletados();
    actualizadorDeConteo();

    for( let i = divTodoList.children.length-1; i >= 0; i-- ){
        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }

});

ulFiltros.addEventListener('click', (event) => {

    const filtro =  event.target.text;

    if(!filtro) {return;} 

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes': 
                if(completado) elemento.classList.add('hidden') ;
            break;
            case 'Completados': 
                if(!completado) elemento.classList.add('hidden') ;
            break;
        } 
    }

});

// Funciones

export const actualizadorDeConteo = () => {
    let countNumber = todoList.todos.length;
    for(const completados of todoList.todos){
        if(completados.completado){countNumber--;}
    }
    contador.innerHTML = countNumber;
}