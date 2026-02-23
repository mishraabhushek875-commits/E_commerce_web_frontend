import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const {products}=useContext(ShopContext);
  const [latestProducts,setLatestProducts]=useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])



  return (
      <div className='my-10'>
    <div className='text-center py-8 text-3xl' >
      <Title  text1={'LATEST'} text2={'COLLECTION'} />
      <p className='w-3/4 m-auto text-sm md:text-base text-gray-600' >
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque est ipsam obcaecati facere quae distinctio incidunt animi quod harum quas totam, possimus libero.
      </p>

      </div>
      <div className='grid grid-cols sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4' >
        {
latestProducts.map((item,index)=>(
  <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
))
        }

      </div>
      
    </div>
  )
}

export default LatestCollection
