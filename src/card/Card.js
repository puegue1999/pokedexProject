import React from 'react';
import './Card.css'

const Card = ({id, name, image, type}) => {
    return (
        <div className="totalCard">
            <div className={type}>
                <div className={type+"Icon"}>
                    <img src={image} alt={name}/>
                </div>

                <div className={type+"Content"}>
                    <h3>{name}</h3>
                    <p> Type: {type} </p>
                </div>
            </div>
        </div>
    );
}

export default Card;