// const defaultTodos = [
    //   { id: 1, text: 'Cortar cebolla', completed: true},
    //   { id: 2, text: 'Tomar curso de React.js', completed: false},
    //   { id: 3, text: 'llorar', completed: false},
    //   { id: 4, text: 'Montar bicicletica', completed: false},
    //   { id: 5, text: 'lalalalala', completed: false},
    // ]
    // localStorage.setItem('todos_v1', JSON.stringify(defaultTodos));
    // localStorage.removeItem('todos_v1');
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const {item: todos, saveItem: setTodos, load, error} = useLocalStorage('todos_v1', []);

    const searchTodos = todos.filter(
        todo =>{
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText)
        });
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let messageTitle;
    if(totalTodos === 0){
        messageTitle = 'Agrega una nueva tarea 🖊';
    }else if(completedTodos === totalTodos){
        messageTitle = 'Todas las tareas estan completas 🎉';
    } else  {
        messageTitle = `Has completado ${completedTodos} de ${totalTodos} TODOS`;
    }

    const changeCompleteTodo = (index) => {
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(todo => todo.id === index)
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    }
    const changeDeleteTodo = (index) => {
        const newTodos = [...todos]; 
        const todoIndex = newTodos.findIndex(todo => todo.id === index)
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }
    const addTodo = (text) => {
        const newTodos = [...todos]; 
        newTodos.push({ id: newTodos.length+1, text: text.trim(), completed: false})
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos, 
            searchValue,
            searchTodos,
            changeCompleteTodo,
            changeDeleteTodo, 
            messageTitle, 
            setSearchValue,
            load,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };