import React from 'react';
import { TodoContext } from '../TodoContext';
import './createTodoStyle.css';

function CreateTodoButton() {
    const {
      setOpenModal,
      openModal
    } = React.useContext(TodoContext);
    return (
        <button className={`mybtn btn-create ${openModal && "btn-rotate"}`} onClick={ () => { setOpenModal(state => !state) }}>+</button>
    );
  }

export {CreateTodoButton}