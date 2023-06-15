import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineFacebook,AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <Link className='icons' href='https://www.instagram.com/radev1924/'><AiFillInstagram/></Link>
      <Link className='icons' href='https://www.facebook.com/daniel.radev.98/'><AiOutlineFacebook/></Link>
      <Link className='icons' href='https://github.com/radev1924'><AiOutlineGithub/></Link>
      <p>
        © 2023 - All rights reserved.
      </p>
    </div>
  )
}

export default Footer