import './App.css';
import React from 'react';
import { TodoCountTitle } from '../TodoCountTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

function AppUI(){
    const {
        openModal,
        // setOpenModal
    } = React.useContext(TodoContext);
    return (
        <div className="container">
        {/* <React.Fragment> */}
        {/* <> */}
            <section className='search-todo'>
                <TodoCountTitle/>
                <TodoSearch />
            </section>
            <section className='contain-todo'>
                <TodoContext.Consumer>
                    {({
                            load,
                            error,
                            searchTodos,
                            changeCompleteTodo,
                            changeDeleteTodo
                        }) => (
                            <TodoList>
                                { load && 
                                <>
                                    <TodosLoading/>
                                    <TodosLoading/>
                                    <TodosLoading/>
                                </>
                                }
                                { error && <TodosError/>}
                                { (!load && searchTodos.length === 0) && <TodosEmpty/>}
                                { searchTodos.map(todo => (
                                    <TodoItem 
                                        comp={todo.completed} 
                                        key={todo.id} 
                                        texto={todo.text}
                                        onComplete={() => changeCompleteTodo(todo.id)}
                                        onDelete={() => changeDeleteTodo(todo.id)}
                                    />
                                ))}
                            </TodoList>
                        )}
                </TodoContext.Consumer>
                <CreateTodoButton/>
                {openModal && (
                    <Modal>
                        <TodoForm></TodoForm>
                    </Modal>
                )}
            </section>
        {/* </> */}
        {/* </React.Fragment> */}
        </div>
    );
}

export {AppUI};