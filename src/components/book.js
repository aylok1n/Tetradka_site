import React from "react"
import '../app.scss'

const Book = (props) => {
    return (
        <div className="book" onClick={()=>{
            props.setActive(true)
            props.onClick()
            }}>
            <h1 className="book_name">{props.title || ''}</h1>
            <div className="book_delete" onClick={(e)=>{
                props.delete()
                e.stopPropagation()
            }}>
                <span className="material-icons">
                    clear
                </span>
            </div>
        </div>
    )
}

export default Book;