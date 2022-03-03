import React from 'react';
import "./card.css"

const Cards = (props) => {
    const {_id, name,url}=props.card;
    return (
        <div className="babu2">
            <p >{_id}</p>
            <h6 >{name}</h6>
            <img className="babu" src={url}></img>
        </div>
    );
};

export default Cards;