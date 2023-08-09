import './TodoItem.css'
import {IoIosRemoveCircle} from "react-icons/io"
import { AiOutlineCheck } from 'react-icons/ai'
function TodoItem(props) {
    return (
        <div className="main-item">
            <div className={`item-check  ${props.completed && 'item-check--active'}`} onClick={props.onComplete}>
                <AiOutlineCheck />
            </div>
            <div className={`item-content ${props.completed && 'item-content--complete'} `}>{props.text}</div>
            <div className={`item-delete`} onClick={props.onDelete}>
                <IoIosRemoveCircle/>
            </div>
        </div>
    )
}

export { TodoItem }
