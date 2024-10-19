import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Forever, where timeless elegance meets modern sophistication. At Forever, 
          we're dedicated to crafting premium clothing for both men and women, blending superior 
          materials with innovative design. Each piece is meticulously designed to offer unmatched 
          quality and lasting style, setting new standards in fashion.</p>
        <p> We believe in more than just clothing—we provide an experience that enhances your individuality and 
          confidence. Discover fashion that endures, and join us on a journey to embrace a style that lasts forever.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to blend timeless elegance with exceptional quality in premium clothing. 
            We create innovative, enduring fashion that enhances individuality and confidence, setting new standards
             in sophistication. Our goal is to offer an unparalleled experience of refined style.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
          At Forever, quality is paramount. We select premium materials and uphold rigorous standards, 
          ensuring each piece meets our high benchmarks. Through meticulous inspections, we guarantee every garment 
          offers durability, exceptional comfort, and timeless style.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, convenience is key. Enjoy effortless online shopping with fast 
            shipping and easy returns. Our user-friendly website and dedicated customer support 
            ensure a smooth experience, making it simple to shop with confidence and ease.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, exceptional customer service is our promise. Our dedicated team 
            is always ready to assist with personalized support, addressing your needs promptly and ensuring a satisfying
             experience. Your satisfaction is our top priority.</p>
        </div>

      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
