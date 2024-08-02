import React from 'react';
import card1 from "../../assets/card1.png";
import yulduzcha from "../../assets/yulduzcha.svg";
import icons1 from "../../assets/icons1.svg";
import soat from "../../assets/soat.svg";
import "./Card.css"
 
const Card = () => {
  return (
    <div className='Card__wrapper'>
        <img  className='card__img'  src={card1} alt="" />
        <div className='card'>
            <div className='card__title'>
                <h3 className='card__title__style'>McSpicy Special</h3>
                    <div className='secondry__text'>
                        <img src={yulduzcha} alt="" />
                        <span className='number'>5.0</span>
                    </div>
            </div>
            <div className='card__text'>
                <span><img src={icons1} alt="" /></span>
                    <p className='card__text__style'>Free Delivery   |</p>
                        <img src={soat} alt="" /> 
                            <p className='card__text__style'>  25-30 min</p>
            </div>
            <button className='card__btn'>
                Order Now
            </button>
        </div>
    </div>
  )
}

export default Card