import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';

const ProductSection = () => {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 6 },
    };

    const items = [1, 1, 1, 1, 1, 1, 1].map((item) => {
        return <ProductCard />
    })

    return (
        <div className='px-5 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    infinite
                    disableButtonsControls
                    disableDotsControls
                    responsive={responsive}
                />
                <Button variant='contained' sx={{position:'absolute', top: '45%', left: '-2rem', transform:'rotate(90deg)', bgcolor:'white', color:'black',zIndex:'50', "&:hover":{bgcolor:'whitesmoke'}}} aria-label='prevous' >
                    <KeyboardArrowLeftIcon className='-rotate-90'/> 
                </Button>
                <Button variant='contained' sx={{position:'absolute', top: '45%', right: '-2rem', transform:'rotate(90deg)', bgcolor:'white', color:'black',zIndex:'50', "&:hover":{bgcolor:'whitesmoke'}}} aria-label='next'>
                    <KeyboardArrowRightIcon className='-rotate-90'/>
                </Button>
            </div>
        </div>
    )
}

export default ProductSection