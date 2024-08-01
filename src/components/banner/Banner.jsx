import React from 'react'
import matatsikl from "../../assets/matatsikl.svg";
import video from "../../assets/video.svg";
import hero__img from "../../assets/hero__img.png";
import burger from "../../assets/banner__burger.svg";
import "./Banner.css"


const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner__wrapper'>
          <div className='banner__logo'>
            <p className='banner__logo__title'>Fast Delivery</p>
            <img src={matatsikl} alt="" />
          </div>
            <div className='banner__title'>
              <div className='banner__subtitle'>
                <h2 className='banner__title__stayle'>Fastest <span className='banner__subtitle__stayle'> Delivery</span> & Esay <span className='banner__subtitle__stayle'>Pickup.</span></h2>
              </div>
              <p className='banner__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.
              </p>

              <div className='banner__button'>
                <button className='btn__banner'>Order Now</button>
                <button className='btn__banner__video'><img className='video__img' src={video} alt="" />Watch Video</button>
              </div>
            </div>
        </div>
      </div>
      <div className='banner__imags'>
              <img src={hero__img} alt="" />
            </div>
    </div>
  )
}
export default Banner