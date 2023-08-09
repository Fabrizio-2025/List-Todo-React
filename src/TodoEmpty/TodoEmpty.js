import './TodoEmpty.css'

function TodoEmpty() {
    return (
        <div className="main-item">
            <div className="iteme-check">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 100 101"
                    class="inline w-4 h-4 animate-bounce"
                    role="status"
                    aria-hidden="true"
                >
                    <circle fill="#34D399" r="45" cy="50" cx="50"></circle>
                </svg>
            </div>
            <div className="iteme-content">Cargando...</div>
            <div className="iteme-delete"></div>
        </div>
    )
}

export { TodoEmpty }
