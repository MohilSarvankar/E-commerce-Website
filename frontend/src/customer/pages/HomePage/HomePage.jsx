import React from 'react'
import MainCarousel from '../../components/MainCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <>
        <MainCarousel/>
        <div className='space-y-5 my-5'>
            <HomeSectionCarousel sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel sectionName={"Women's Saree"}/>
            <HomeSectionCarousel sectionName={"Women's Dress"}/>
        </div>
    </>
  )
}

export default HomePage