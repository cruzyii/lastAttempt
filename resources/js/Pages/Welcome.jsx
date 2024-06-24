import React, { useState } from 'react';
import TopMenu from '@/Components/TopMenu';
import NavBar from '@/Components/Navbar';
import Flyout from '@/Components/Flyout';
import Banner from '@/Components/Banner';
import Hero from '@/Components/Hero';

function Welcome(){
    const [showFlyout, setShowFlyout] = useState(false);

    return(
        <div className="Welcome">
            <TopMenu/>
            <NavBar showFlyout={showFlyout} setShowFlyout={setShowFlyout}/>
            <Flyout showFlyout={showFlyout}/>
            <Banner/>
            <Hero/>
        </div>
    );
}

export default Welcome;