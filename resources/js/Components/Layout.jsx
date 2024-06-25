import React, { useState } from 'react';
import TopMenu from './TopMenu';
import Navbar from './Navbar';
import Flyout from './Flyout';

function Layout({ children }) {
    const [showFlyout, setShowFlyout] = useState(false);
    return (
        <div>
            <TopMenu/>
            <Navbar showFlyout={showFlyout} setShowFlyout={setShowFlyout}/>
            <Flyout showFlyout={showFlyout}/>
            <main>
                {children}
            </main>
        </div>
    );
}
export default Layout;