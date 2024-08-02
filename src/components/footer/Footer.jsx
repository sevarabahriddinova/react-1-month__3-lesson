import React from 'react'
import footer from "../../assets/footer.svg"
import logo from "../../assets/logo.svg";


import "./Footer.css"

const Footer = () => {
  return (
    
<footer>
    <div className='container'>
         <div className='header__wrapper'>
                <div className='nav__img__wrapper'>
                    <img src={logo} alt="bu yerda figma logosi bor" />
                </div>                 
                <div className='nav__title__wrappr'>
                    <ul className='list__wrapper'>
                        <li className='list__title'><a className='list__style' href="#">About</a></li>
                        <li className='list__title'><a className='list__style' href="#">Service</a></li>
                        <li className='list__title'><a className='list__style' href="#">Blog</a></li>
                        <li className='list__title'><a className='list__style' href="#">Contact Us</a></li>
                    </ul>
                    <img src={footer} alt="" />
                </div>
        </div>   
    </div>
    <hr />
</footer>

  )
}

export default Footer