import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContext'

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext)

    return (
        <div className="main-counter">
            <div className="counter">
                <h1>
                    Has completado {completedTodos} de {totalTodos}
                </h1>
            </div>
        </div>
    )
}

export { TodoCounter }
