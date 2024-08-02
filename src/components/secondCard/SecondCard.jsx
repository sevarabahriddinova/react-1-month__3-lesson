import React from 'react'
import yulduzlar from "../../assets/yulduzlar.svg"
import avatar from "../../assets/Oval.png"

import "./SecondCard.css"

const SecondCard = () => {
  return (
    <div className='secondCard'>
        <div className='second__card__wrapper'>
            <img className='card__yulduzlari' src={yulduzlar} alt="" />
            <div className='second__card__title'>
                <p className='second__card__title__style'>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
            </div>
            <div className='section__avatar'>
                <img src={avatar} alt="" />
                    <div className='avatar__title'>
                            <h3 className='avatar__title__style'>
                                Leslie Alexander</h3>
                            <p className='avatar__text'>Founder</p>
                        </div>                
            </div>
        </div>
    </div>
  )
}

export default SecondCard