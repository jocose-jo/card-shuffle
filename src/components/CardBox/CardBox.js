import React from "react";
import './CardBox.css'

function CardBox(props) {
    return (
        <div className="card-box-container">
            {props.children}
        </div>
    )
}

export default CardBox