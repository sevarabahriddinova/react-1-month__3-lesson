import React from 'react'
import "./Section.css"
import belgi from "../../assets/belgi.svg"
import SecondCard from '../secondCard/SecondCard'

const Section = () => {
  return (
     <div className='section'>
        <div className='container'>
            <div className='section__wrappper'>
                <div className='section__title'>
                    <h3 className='section__title__style'>What our customer say about this </h3>
                    <span> <img src={belgi} alt="" /> </span>
                </div>

                <div className='section__card__wrapper'>
                    <SecondCard/>
                    <SecondCard/>
                    <SecondCard/>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Section