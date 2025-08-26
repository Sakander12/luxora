import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../components/Title'
import ProductItems from './ProductItems';

const BestSeller = () => {
const {products} = useContext(ShopContext);
const [bestseller,setBestCeller] = useState([]);
useEffect(()=>{
 const bestProduct = products.filter((item)=>(item.bestseller));
 setBestCeller(bestProduct.slice(0,5))},[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
      <Title text1={"BEST"} text2={"SELLERS"}/>
      <p className='w-3/4 text-xs sm:text-sm md:text-base text-gray-600 m-auto' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit suscipit, ut consequatur  </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestseller.map((item,index) => (
            <ProductItems key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
      </div>

    </div>
  )
}

export default BestSeller