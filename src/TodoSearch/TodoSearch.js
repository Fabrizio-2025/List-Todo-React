import { TodoContext } from '../TodoContext/TodoContext'
import './TodoSearch.css'
import React from 'react'

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    return (
        <div className="main-search">
            <div className="search-container">
                <input
                    className="input-div"
                    placeholder="Aprender React"
                    value={searchValue}
                    onChange={event => {
                        setSearchValue(event.target.value)
                    }}
                />
                <button className="button-div">Buscar</button>
            </div>
        </div>
    )
}

export { TodoSearch }
