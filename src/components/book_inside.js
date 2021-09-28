import React from "react";
import '../style/book_inside.scss'
import ImagePicker from "./imagePicker";

const BookInside = ({ active, setActive, activebook, setActivePhoto }) => {
    return (
        <div className={active ? "modal_book active" : "modal_book"} onClick={() => {setActive(false)}}>
            <div className="book_content" onClick={e => e.stopPropagation()}>
                <h2 className="book_name">{activebook.title}</h2>
                <div className="book_photos">
                    <ImagePicker photo={activebook.photo} setPhoto={value=>setActivePhoto(value)}/>
                    {activebook?.photo?.length ? activebook.photo.map( (i, key) => (<img src={i} key={key}/>)
                        
                    ) : <></>}
                </div>
            </div>
        </div>
    )
}

export default BookInside;