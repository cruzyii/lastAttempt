import Button from './Button';
import Banner1 from '../../Images/Banner1.png';
import Banner2 from '../../Images/Banner2.png';
import Banner3 from '../../Images/Banner3.png';
import Banner4 from '../../Images/Banner4.png';
import Heading from './Heading';
import Adidas1 from '../../Images/Hero-Products/Adidas1.png';
import Adidas2 from '../../Images/Hero-Products/Adidas2.png';
import Nike1 from '../../Images/Hero-Products/Nike1.png';
import Nike2 from '../../Images/Hero-Products/Nike2.png';
import Nike3 from '../../Images/Hero-Products/Nike3.png';
import Nike4 from '../../Images/Hero-Products/Nike4.png';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRef, useState } from 'react';


function Hero() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }


    return (
        <div>
            <Heading heading='STYLE REMAINS' subheading='Fashion fades, only style remains the same'/>
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
            <div className='mt-12'>
                <Heading heading='APAVU KOLEKCIJA' subheading=''/>
                <div className='flex justify-center'><Button variant='primary'>Produkti</Button></div>
            </div>
            <div className='py-12 relative flex items-center'>
                <MdChevronLeft onClick={slideLeft} className='opacity-50 cursor-pointer hover:opacity-100' size={40}/>
                <div id='slider' className='w-full h-full overflow-x-auto overflow-y-hidden scroll whitespace-nowrap scroll-smooth'>
                    <img className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={Adidas1}></img>
                    <img className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={Adidas2}></img>
                    <img className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={Nike1}></img>
                    <img className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={Nike2}></img>
                    <img className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={Nike3}></img>
                    <img className='w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={Nike4}></img>
                </div>
                <MdChevronRight onClick={slideRight} className='opacity-50 cursor-pointer hover:opacity-100' size={40}/>
            </div>
        </div>
    );
}
export default Hero;