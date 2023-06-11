import React from 'react';
import { useState } from "react";
import Link from 'next/link';
import {AiOutlineShopping, AiFillShop} from 'react-icons/ai';
import {Cart} from './';
import  {useStateContext} from '../context/StateContext';


const Navbar = () => {

  const {showCart, setShowCart , totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          <AiFillShop/>
          Daniel Radev's E-Commerce Web Site 
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart/>}
    </div>

  )
}

export default Navbar