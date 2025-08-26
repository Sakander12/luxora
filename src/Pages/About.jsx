import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center border-t pt-8'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='flex flex-col md:flex-row my-10 gap-16'>
      <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi, eius perspiciatis veritatis saepe facilis laudantium rem qui natus deleniti autem amet sapiente magnam. Laboriosam enim quaerat animi soluta consequuntur?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi, eius perspiciatis veritatis saepe facilis laudantium rem qui natus deleniti autem amet sapiente magnam. Laboriosam enim quaerat animi soluta consequuntur?</p>
      <b className='text-gray-800'> Our Mession</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora veniam nobis deleniti eaque distinctio voluptatem obcaecati dolorem animi earum iste quidem porro, soluta pariatur fugit temporibus impedit delectus ut magni!</p>
      </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOS US'}/>
      </div>
      <div className='flex flex-col md:flex-row text mb-20'>
        <div className='border px-10 dm:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima officiis quod repudiaam om</p>
        </div>
        <div className='border px-10 dm:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima officiis quod repudiandae om</p>
        </div>
        <div className='border px-10 dm:px-16 py-8 sm:py20 flex flex-col gap-5'>
          <b>Exeption Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisificiis quod repudiandaeipsa</p>
        </div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default About