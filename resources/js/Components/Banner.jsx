import React from 'react';
import BannerImg from '../../Images/bannerimg.png';

function Banner() {
    return (
        <>
            <img src={BannerImg} alt='Image of a girl'/>
            <div className='p-8 font-bold text-center font-AbhayaLibre'>
                <h1 className='text-7xl'>STYLE REMAINS</h1>
                <h2 className='text-3xl'>Fashion fades, only style remains the same</h2>
            </div>
        </>
    );
}

export default Banner;