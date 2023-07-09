import React from "react";
import { TodoContext } from "../TodoContext";
import './formstyles.css';

function TodoForm(){
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
     
    return (
        <form onSubmit={onSubmit} class="form-newtodo">
            <label>Escribe tu nuevo TODO</label>
            <textarea
                onChange={onChange}
                placeholder="Cortar papas"
            ></textarea>
            <div className="buttoncontainer">
                <button onClick={onCancel} type="button" className="btn-form btn-form-cancel">
                    Cancelar
                </button>
                <button onClick={onSubmit} type="button" className="btn-form btn-form-add">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}