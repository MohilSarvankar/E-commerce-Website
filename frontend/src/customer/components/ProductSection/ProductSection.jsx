import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ProductCard from '../ProductCard/ProductCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material'; 

const responsive = {
    0: { items: 1.5 },
    568: { items: 3 },
    1024: { items: 6 },
};

const ProductSection = ({sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <ProductCard key={index}/>
    )));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const onSlideChanged = (e) => {
        setActiveIndex(e.item);
        console.log(activeIndex);
    }

    return [
        <div className='px-5 lg:px-8'>
            <h2 className='text-2xl font-bold font-serif mx-6'>{sectionName}</h2>
            <div className='relative px-5 py-3'>
                <AliceCarousel
                    mouseTracking
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    activeIndex={activeIndex}
                    responsive={responsive}
                    onSlideChanged={onSlideChanged}
                />
                {activeIndex != 0 && <Button onClick={slidePrev} variant='contained' sx={{position:'absolute', top: '45%', left: '-2rem', transform:'rotate(90deg)', bgcolor:'white', color:'black',zIndex:'50', "&:hover":{bgcolor:'whitesmoke'}}} aria-label='previous' >
                    <KeyboardArrowLeftIcon className='-rotate-90'/> 
                </Button>}
                {/* I have hardcoded 6 here. But i need to change it and make it dynamic */}
                {activeIndex != items.length - 6 && <Button onClick={slideNext} variant='contained' sx={{position:'absolute', top: '45%', right: '-2rem', transform:'rotate(90deg)', bgcolor:'white', color:'black',zIndex:'50', "&:hover":{bgcolor:'whitesmoke'}}} aria-label='next'>
                    <KeyboardArrowRightIcon className='-rotate-90'/>
                </Button>}
            </div>
        </div>
    ];
};

export default ProductSection;