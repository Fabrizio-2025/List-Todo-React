
import React from 'react'
import './App.css'
import { AppUI } from './App/AppUI'
import { TodoProvider } from './TodoContext/TodoContext'

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    )
}

export default App;
