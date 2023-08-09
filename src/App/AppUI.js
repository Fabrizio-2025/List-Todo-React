import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoList } from '../TodoList/TodoList'
import { TodoItem } from '../TodoItem/TodoItem'
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import React from 'react'
import '../App.css'
import { TodoEmpty } from '../TodoEmpty/TodoEmpty'
import { TodoContext } from '../TodoContext/TodoContext'
import { Modal } from '../Modal/Modal'
import { TodoForm } from '../TodoForm/TodoForm'

function AppUI() {
    const { loading, error, searchedTodos, completeTodo, deleteTodo,openModal,setOpenModal } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter 
            
            />
            <TodoSearch />
            <TodoList>
                {loading && (
                    <>
                        <TodoEmpty />
                        <TodoEmpty />
                        <TodoEmpty />
                        <TodoEmpty />
                    </>
                )}
                {error && <p>Hubo un error!!</p>}
                {!loading && searchedTodos.length === 0 && <h2 >Crea tu PRIMER todo</h2>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>
    )
}

export { AppUI }
