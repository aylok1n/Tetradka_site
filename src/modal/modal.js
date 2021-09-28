import React from "react";
import './modal.scss';

const Modal = ({active, setActive, addBook}) => {
    const [text, setText] = React.useState('')
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => {setActive(false)}}>
            <div className = "modal-content" onClick = {e => e.stopPropagation()} >
                <h3>Введите название книги</h3>
                <div className="modal-body">
                    <input className="modal-input" type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Сюда"></input>
                    <input className="modal-btn" type="button" onClick={()=>{
                        addBook(text)
                        setText('')
                        setActive(false)
                    }} value="Принять"></input>
                </div>
            </div>
        </div>
    )
}

export default Modal;

