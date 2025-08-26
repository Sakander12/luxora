import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
const Contact = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 border-t'>
<Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='flex flex-col md:flex-row justify-center  mb-28 my-10 gap-10'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'> Our Store</p>
          <p className='text-gray-500'>89034 Wlliams Station <br/> Suite 350, New yourk, USA</p>
          <p className='text-gray-500'>Tel: (480) 737 847 317 <br/> jam@gamil.com </p>
          <p className='font-semibold text-xl text-gray-600'> Creers for ever</p>
          <p className='text-gray-500'>Learn more about over teams and job openinga.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default Contact