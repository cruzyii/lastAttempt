import React, { useState } from 'react';
import Search from '../../Images/search.svg';


function Navbar({ showFlyout, setShowFlyout }) {
    return (
        <div className='flex border-2'>
            <div className='flex justify-between w-full p-3 px-16 text-lg font-semibold'>
                <div className='flex items-center px-2'>
                    <a href='#' className='font-Comfortaa font-bold text-xl'>Zenith</a>
                </div>
                <div className='flex items-center px-2'>
                    <a href='#' onMouseEnter={() => setShowFlyout(true)} onMouseLeave={() => setShowFlyout(false)}>test</a>
                </div>
                <form>
                    <div className="transition-background-color duration-500 flex rounded-3xl bg-gray-100 w-max pr-3 items-center focus-within:bg-gray-900/5 h-9 focus-within:shadow-dark">
                        <div className='transition-all duration-200 hover:bg-gray-900/10 flex rounded-3xl p-1.5'>
                            <button type='button'><svg className='fill-black/50' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
                        </div>
                        <input className='border-none focus:ring-0 search-input p-0  bg-transparent border-0 placeholder:text-black/50' placeholder='Search'></input>
                    </div>
                </form>
            </div>
        </div>
    );
};




export default Navbar;

