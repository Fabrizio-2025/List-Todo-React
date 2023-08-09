import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal}) {
    return (
        <div className="main-btn-add" >
            <div className="container-btn-add" >
                <button className="btn-add" onClick={
                   ()=> {
                setOpenModal(state => !state)
                    }
                }  >Agregar</button>
            </div>
        </div>
    )
}

export {CreateTodoButton}