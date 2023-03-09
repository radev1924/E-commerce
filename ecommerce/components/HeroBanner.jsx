import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>
          Lorem ipsum
        </p>
        <h3>
          Mid Text
        </h3>
        <img src='' alt='headphones' className='hero-banner-image' />
        <div>
          <Link href='/product/ID'>
            <button type='button'>Button text</button>
          </Link>
          <div className='desc'>
            <h5>description</h5>
            <p>DESRIPTION</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default HeroBanner