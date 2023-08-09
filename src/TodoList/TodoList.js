import "./TodoList.css"

function TodoList(props) {
    return (
        <div className="main-list">
            <div className="list-container" >
                <ul>{props.children}</ul>
            </div>
        </div>
    ) 
    
}

export {TodoList}