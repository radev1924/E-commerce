import React , {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import {useRouter} from 'next/router';
import {useStateContext} from '../context/StateContext';
import {runStars} from '../lib/utils'

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runStars();
;    }, []);


  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill></BsBagCheckFill>
            </p>
            <h2>Thank You For The Purchase</h2>
            <p className='email-msg'>Check your email inbox for the receipt</p>
            <p className='description'> if you have any questions, please email
                <a className='email' href='mailto:order@example.com'>
                    radev1924@abv.bg
                </a>
            </p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}
export default Success