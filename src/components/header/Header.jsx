import React from 'react'
import logo from "../../assets/logo.svg";
import search from "../../assets/sarch.svg";
import korzinka from "../../assets/savatcha.svg";
import strelka from "../../assets/strelka.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='nav__img__wrapper'>
                    <img src={logo} alt="bu yerda figma logosi bor" />
                </div>                 
                <div className='nav__title__wrappr'>
                    <ul className='list__wrapper'>
                        <li className='list__title'><a className='list__style' href="#">Home</a></li>
                        <li className='list__title'><a className='list__style' href="#">Service</a></li>
                        <li className='list__title'><a className='list__style' href="#">Menu</a></li>
                        <li className='list__title'><a className='list__style' href="#">Help</a></li>
                    </ul>   
                    <div className='nav__icons'>
                        <img src={search} alt="" />
                        <img src={korzinka} alt="" />
                            <div className='login__wrapper'>
                                <img src={strelka} alt="" />
                                <span className='login'>Login</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header