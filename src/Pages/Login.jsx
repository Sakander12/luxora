import React, { useState } from 'react'

const Login = () => {
  const [curentState,setCurentState] = useState('Sign Up');
  const submetHandler =(event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={submetHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800'>
      <div className='inline-flex items-center mb-2 mt-10 gap-2'>
        <p className='prata-regular text-3xl'>{curentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 '/>
      </div>
     {curentState === 'Login'?'': <input type=" text" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name'required />}
      <input type=" email" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email'required />
      <input type=" pasword" className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password'required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'> Forgot your password</p>
        {
          curentState === 'Login'?
           <p className='cursor-pointer'onClick={()=>setCurentState("Sing Up")} >Create account</p>:
           <p className='cursor-pointer'onClick={()=>setCurentState("Login")} >Login here</p>

        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 '> {curentState === 'Login'?'Sing In': 'Sing Up'}</button>
    </form>
  )
}

export default Login