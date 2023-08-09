import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext/TodoContext'

function TodoForm() {
    const { addTodo,setOpenModal } = React.useContext(TodoContext)
    const[newTodoValue,setNewTodoValue] = React.useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    return (
        <form className="main-form" onSubmit={onSubmit}>
            <div className="tittle">
                <h3>Escribe tu nuevo TODO</h3>
            </div>
            <textarea className="text-area" value={newTodoValue} onChange={onChange} placeholder="Ejem: Cortar el flan" />
            <div className="buttons">
                <button onClick={onSubmit} className="btn-add">
                    Aceptar
                </button>
                <button onClick={onCancel} className="btn-exit">
                    Cancelar
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
