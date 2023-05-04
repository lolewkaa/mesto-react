import React from "react";

export default function Card({card, onCardClick}) {
    const handleClick = () => onCardClick(card)
      
    return(
<div className="card" >
            <button className="card__button-delete" type="button">
            </button>
            <img className="card__img" alt={card.name} src={card.link} onClick={handleClick}/>
            <div className="card__container">
              <h2 className="card__description">{card.name}</h2>
              <div className="card__box">
                <button className="card__button" type="button"></button>
                <h2 className="card__page-lakes"></h2>
              </div>
            </div>
          </div>
    )
}