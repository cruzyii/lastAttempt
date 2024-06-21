import React, { useState } from 'react';
import TopMenu from '@/Components/TopMenu';
import NavBar from '@/Components/Navbar';
import Flyout from '@/Components/Flyout';

function Welcome(){
    const [showFlyout, setShowFlyout] = useState(false);

    return(
        <div className="Welcome">
            <TopMenu/>
            <NavBar showFlyout={showFlyout} setShowFlyout={setShowFlyout}/>
            <Flyout showFlyout={showFlyout}/>
            <h2>Test</h2>
            <p>Test</p>
            <p>Test</p>
        </div>
    );
}

export default Welcome;