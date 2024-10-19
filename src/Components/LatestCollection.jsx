import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
             setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Experience "Style Beyond Ordinary" with our premium clothing line. Each piece blends superior craftsmanship 
            and innovative design, elevating your wardrobe with sophistication and quality that sets you apart. Redefine 
            fashion with pieces that go beyond the norm.
            </p>
        </div>

        {/* Rendring Products */}

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
      
    </div>
  )
}

export default LatestCollection
