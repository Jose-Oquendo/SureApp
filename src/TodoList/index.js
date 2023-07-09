import './ListStyle.css';

function TodoList(props) {
    return (
      <ul className="list-todos">
        {props.children}
      </ul>
    );
  }

export {TodoList}