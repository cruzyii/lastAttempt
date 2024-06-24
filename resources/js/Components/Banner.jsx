import React from 'react';
import BannerImg from '../../Images/bannerimg.png';
import Button from './Button';
import Banner1 from '../../Images/Banner1.png';
import Banner2 from '../../Images/Banner2.png';
import Banner3 from '../../Images/Banner3.png';
import Banner4 from '../../Images/Banner4.png';

function Banner() {
    return (
        <div>
            <img src={BannerImg} alt='Image of a girl'/>
            <div className='pb-2 p-8 font-bold text-center font-AbhayaLibre'>
                <h1 className='text-7xl'>STYLE REMAINS</h1>
                <h2 className='text-3xl'>Fashion fades, only style remains the same</h2>
            </div>
            <div className='flex justify-center space-x-2'>
                <Button>Produkti</Button>
                <Button>Kolekcijas</Button>
            </div>

            <div className='mt-24'>
                <div className='flex'>
                    <div className='relative flex-1'>
                        <img src={Banner1} className="w-full h-full"/>
                        <div className="absolute bottom-0 p-12 text-white">
                            <h2 className='text-lg'>Vasaras kolekcija</h2>
                            <h1 className='text-3xl pb-2'>Sievietēm</h1>
                            <Button variant='secondary'>Skatīt</Button>
                        </div>
                    </div>
                    <div className='relative flex-1'>
                        <img src={Banner2} className="w-full h-full"/>
                        <div className="absolute bottom-0 p-12 text-white">
                            <h2 className='text-lg'>Vasaras kolekcija</h2>
                            <h1 className='text-3xl pb-2'>Vīriešiem</h1>
                            <Button variant='secondary'>Skatīt</Button>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='relative flex-1'>
                        <img src={Banner3} className="w-full h-full"/>
                        <div className="absolute bottom-0 p-12 text-white">
                            <h2 className='text-lg'>Jaunākie</h2>
                            <h1 className='text-3xl pb-2'>Aksesuāri</h1>
                            <Button variant='secondary'>Skatīt</Button>
                        </div>
                    </div>
                    <div className='relative flex-1'>
                        <img src={Banner4} className="w-full h-full"/>
                        <div className="absolute bottom-0 p-12 text-white">
                            <h2 className='text-lg'>Vasaras kolekcija</h2>
                            <h1 className='text-3xl pb-2'>Sporta apģērbs</h1>
                            <Button variant='secondary'>Skatīt</Button>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Banner;