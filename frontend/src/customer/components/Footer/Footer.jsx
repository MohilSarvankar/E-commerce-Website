import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className='bg-[#222] text-white text-center mt-10 py-6' container>
                <Grid xs={12} sm={6} md={3}>
                    <Typography variant='h6' className='pb-3'>Categories</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Men</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Women</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Kids</Typography>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <Typography variant='h6' className='pb-3'>Information</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>About Us</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Terms & Conditions</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Return & Exchanges</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Shipping & Delivery</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Privacy Policy</Typography>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <Typography variant='h6' className='pb-3'>Useful Links</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Blog</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Contact Us</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Size Guide</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>FAQs</Typography>
                </Grid>
                <Grid xs={12} sm={6} md={3}>
                    <Typography variant='h6' className='pb-3'>Connect With Us</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Facebook</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Instagram</Typography>
                    <Typography className='hover:text-orange-300 pb-2 cursor-pointer'>Twitter</Typography>
                </Grid>
            </Grid>
            <Grid xs={12} className='text-center border-t-2 border-t-gray-600 py-3 bg-[#222] text-white'>
                <Typography>© 2024 My Store. All Rights Reserved.</Typography>
            </Grid>
        </div>
    )
}

export default Footer