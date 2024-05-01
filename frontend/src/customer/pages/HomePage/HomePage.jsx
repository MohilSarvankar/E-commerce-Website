import React from 'react'
import MainCarousel from '../../components/MainCarousel/MainCarousel'
import ProductSection from '../../components/ProductSection/ProductSection'

const HomePage = () => {
  return (
    <>
        <MainCarousel/>
        <div className='space-y-5 my-5'>
            <ProductSection sectionName={"Men's Kurta"}/>
            <ProductSection sectionName={"Men's Shirt"}/>
            <ProductSection sectionName={"Men's Shoes"}/>
            <ProductSection sectionName={"Women's Saree"}/>
            <ProductSection sectionName={"Women's Dress"}/>
        </div>
    </>
  )
}

export default HomePage