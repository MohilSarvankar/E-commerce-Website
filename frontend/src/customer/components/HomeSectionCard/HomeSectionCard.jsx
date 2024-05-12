import React from 'react';

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer bg-white shadow-lg rounded-2xl p-4 mb-4 mx-2
    hover:border-solid hover:shadow-2xl hover:scale-105'>
        <div className='h-[13rem]'>
            <img className='w-full h-full rounded-md object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/8/x/xl-jawan-one-nb-nicky-boy-original-imagwbavcwbtznv5.jpeg?q=70" alt=""/>
        </div>
        <div className='mt-2'>
            <h3 className='text-lg font-medium text-gray-900'>NB NICKY BOY</h3>
            <p className='text-sm text-gray-500 '>Men Printed Round Neck Cotton Blend Black T-Shirt</p>
        </div>
    </div>
  )
}

export default HomeSectionCard