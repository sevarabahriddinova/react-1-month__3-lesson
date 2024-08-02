import React from 'react'
import "./Product.css";
import Card from '../card/Card';

const Product = () => {
 
  return (
    <div className='Product'>
        <div className='container'>
            <div className='product__wrapper'>
                <div className='product__title'>
                    <h2 className='product__subtitle'>Special Menu for you</h2>
                        <p className='product__text'>Lorem ipsum dolor sit amet, consectetur      adipiscing elit. Luctus cum purus bibendum risus 
                            nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
                        </p>
                </div>
            </div>


            <div className='product__cards__wrapper'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
    </div>
  )
}

export default Product