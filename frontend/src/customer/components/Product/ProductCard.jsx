import React from 'react';
import './ProductCard.css'

const ProductCard = ({item}) => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='w-full h-full object-cover object-top' src={item.image} alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-70'>{item.brand}</p>
                    <p>{item.title}</p>
                </div>
                <div className='flex space-x-2'>
                    <p className='font-semibold'>{item.selling_price}</p>
                    <p className='line-through opacity-60'>{item.price}</p>
                    <p className='text-green-600 font-semibold'>{item.discount}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard