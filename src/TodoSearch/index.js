import React from 'react';
import './searchStyle.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <div className="form-todo">
      <input type="text" placeholder="Escribir"
        value={searchValue}
        onChange={(event) => {setSearchValue(event.target.value)}}
      />
    </div>
  );
}

export {TodoSearch}