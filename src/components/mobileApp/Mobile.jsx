import React from 'react'
import "./Mobile.css"
import apple from "../../assets/apple.svg";
import market from "../../assets/market.svg"
import telefon from "../../assets/telefon.png"

const Mobile = () => {
  return (
    <div className='mobile'>
        <div className='container'>
            <div className='mobile__wrapper'>
                <div className='mobile__title'>
                    <h3 className='mobile__title__style'>Download our Mobile App</h3>
                        <p className='mobile__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>

                        <div className='title__images'>
                            <img src={apple} alt="" />
                            <img src={market} alt="" />
                        </div>
                 </div>

                 <div className='mobile__images'>
                    <img src={telefon} alt="" />
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Mobile