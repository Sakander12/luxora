import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Foote = () => {
  return (
   <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

    <div>
      {/* <img src={assets.logo} className='mb-5 w-32' alt=""/> */}
      <p className="prata-regular  text-3xl font-bold text-slate-600">Luxora</p>
      <p className='w-full md:w-2/3 text-gray-600'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, aut quisquam id suscipit iste quod sint consequuntur sit recusandae veritatis quis. Adipisci repellendus nemo nobis nisi minus dicta vero est.
      </p>
    </div>
    <div>
      <p className='text-xl font-medium bt-5'>COMPONY</p>
      <ul className='flex flex-col gap-0 text gray-600'>
        <li>Home</li>
        <li>About us </li>
        <li>Delivery</li>
        <li>Privacy policy</li>
      </ul>
    </div>
    <div>
      <p className='text-xl font-medium bt 5'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-0 text gray-60'>
        <li>+93-700-556-045</li>
        <li> sakander.naaimy@gmail.com</li>
        
      </ul>
    </div>
    </div>
    <hr/>
    <p className='text-sm text-center py-5'> Copyright 2025@ forever.com - All Reserved</p>
   </div>
  )
}

export default Foote