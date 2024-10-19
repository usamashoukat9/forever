import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Experience unparalleled quality with Forever. Our premium clothing blends unique design 
            with superior craftsmanship, setting new standards in fashion. Discover exclusive styles that
             elevate your wardrobe and embrace sophistication. Shop now to enjoy distinctive elegance and 
             unmatched luxury.
            </p>
        </div>


        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Deleviry</li>
                <li>Privcy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-234-567-8901</li>
                <li>info@forever.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved</p>
      </div>

    </div>
  )
}

export default Footer
