import { TodoIcon } from '../TodoIcon';
import './itemStyles.css';

function TodoItem(props) {
    return (
      <li className={`list-item ${props.comp && "list-complete"}`}>
        <div onClick={props.onComplete}>
          <TodoIcon color={props.comp ? '#92E0A9' : 'gray'} type="check"/>
        </div>
        <p>{props.texto}</p>
        <div onClick={props.onDelete}>
          <TodoIcon color={props.comp ? 'rgb(70, 70, 70)' : 'gray'} type="delete"/>
        </div>
      </li>
    );
  }

export {TodoItem}