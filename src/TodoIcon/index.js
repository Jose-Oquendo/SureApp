import './icons.css';
import { ReactComponent as Checksvg } from './check_circle_FILL0_wght700_GRAD0_opsz40.svg';
import { ReactComponent as Cancelsvg } from './cancel_FILL0_wght700_GRAD0_opsz40.svg';

function TodoIcon(props) {
    const iconTypes = {
        "check": <Checksvg className="Icon-svg" fill={props.color}/>,
        "delete": <Cancelsvg className="Icon-svg" fill={props.color}/>
    }
    return (
        <span className={`Icon Icon-${props.type}`}>
            { iconTypes[props.type] }
        </span>
    )
}

export {TodoIcon}
