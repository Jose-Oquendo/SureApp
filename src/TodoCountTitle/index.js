import React from 'react';
import './CountTitleStyle.css';
import { TodoContext } from '../TodoContext';

function TodoCountTitle() {
    const {messageTitle} = React.useContext(TodoContext);
    return (
      <h1 className="title">
        {messageTitle}
      </h1>
    );
  }

export {TodoCountTitle}