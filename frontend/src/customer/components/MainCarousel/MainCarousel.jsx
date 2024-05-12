import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import banner4 from '../../../images/banner/banner4.jpg';
import banner5 from '../../../images/banner/banner5.jpg';

const MainCarousel = () => {

    const items = [
        <img src={banner1} alt='banner1' className='cursor-pointer'/>,
        <img src={banner2} alt='banner2' className='cursor-pointer'/>,
        <img src={banner3} alt='banner3' className='cursor-pointer'/>,
        <img src={banner4} alt='banner4' className='cursor-pointer'/>,
        <img src={banner5} alt='banner5' className='cursor-pointer'/>
    ];

    return (
        <>
            <AliceCarousel
                items={items}
                infinite
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
            />
        </>
    )
}

export default MainCarousel